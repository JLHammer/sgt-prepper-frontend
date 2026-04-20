import { createElement, createIcons, icons } from 'lucide'

/**
 * Create a Lucide SVG element from a PascalCase icon name or icon node.
 * Example name: 'ShoppingCart'
 */
export const createIcon = (icon, className = '', attrs = {}) => {
  const iconNode = typeof icon === 'string' ? icons[icon] : icon

  if (!iconNode) {
    throw new Error(`Unknown Lucide icon: ${icon}`)
  }

  return createElement(iconNode, {
    ...(className ? { class: className } : {}),
    ...attrs,
  })
}

/**
 * Replace [data-lucide] placeholders in a root element (or whole document).
 */
export const renderIcons = (root = document, attrs = {}) => {
  createIcons({ icons, root, attrs })
}
