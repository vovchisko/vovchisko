// src/utils/updateMetaTags.js
export function updateMetaTags(metaTags) {
  // Remove any existing meta tags with data-vue-router-controlled
  document.querySelectorAll('[data-vue-router-controlled]').forEach(el => el.parentNode.removeChild(el))

  // Add new meta tags
  metaTags.forEach(tagDef => {
    const tag = document.createElement('meta')
    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key])
    })
    tag.setAttribute('data-vue-router-controlled', '')
    document.head.appendChild(tag)
  })
}
