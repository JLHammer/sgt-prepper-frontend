/**
 * Normalizes image URLs to always point to the backend server
 * @param {string} url - The image URL from the backend
 * @param {string} backendBase - The backend base URL (e.g., http://localhost:4000)
 * @returns {string} - The normalized image URL
 */
export function normalizeImageUrl(url, backendBase = 'http://localhost:4000') {
  if (!url) return ''
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url
  }
  // Ensure no double slashes
  return backendBase.replace(/\/$/, '') + url
}
