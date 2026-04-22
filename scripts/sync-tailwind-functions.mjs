import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')

const atomsPath = path.join(
  projectRoot,
  'js',
  'views',
  'components',
  'atoms',
  'index.js',
)
const prettierConfigPath = path.join(projectRoot, '.prettierrc')

const atomExportRegex = /export\s+const\s+([A-Za-z_$][\w$]*)\s*=/g

const toUniqueSorted = (values) => [...new Set(values)].sort()

const main = async () => {
  const [atomsSource, prettierSource] = await Promise.all([
    readFile(atomsPath, 'utf8'),
    readFile(prettierConfigPath, 'utf8'),
  ])

  const atomFunctions = []
  let match = atomExportRegex.exec(atomsSource)

  while (match) {
    atomFunctions.push(match[1])
    match = atomExportRegex.exec(atomsSource)
  }

  if (atomFunctions.length === 0) {
    throw new Error('No exported atom functions found in atoms/index.js')
  }

  const prettierConfig = JSON.parse(prettierSource)
  const existingFunctions = Array.isArray(prettierConfig.tailwindFunctions)
    ? prettierConfig.tailwindFunctions
    : []

  const nonAtomFunctions = existingFunctions.filter(
    (name) => !atomFunctions.includes(name),
  )

  const nextTailwindFunctions = toUniqueSorted([
    ...nonAtomFunctions,
    ...atomFunctions,
  ])

  prettierConfig.tailwindFunctions = nextTailwindFunctions

  await writeFile(
    prettierConfigPath,
    `${JSON.stringify(prettierConfig, null, 2)}\n`,
  )

  console.log(
    `Updated tailwindFunctions in .prettierrc with ${atomFunctions.length} atom functions.`,
  )
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
