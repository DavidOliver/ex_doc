const params = new URLSearchParams(window.location.search)
const isFrame = window.self !== window.parent

export const isPreview = isFrame && params.has('preview')
export const isHint = isFrame && params.has('hint')
export const isEmbedded = isPreview || isHint

// These variables are set by other scripts (e.g. generated by the docs task).

export function getSidebarNodes () {
  return window.sidebarNodes || {}
}

export function getVersionNodes () {
  return window.versionNodes || []
}
