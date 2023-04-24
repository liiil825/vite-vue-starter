import '@/styles/global.less'
import '@/styles/style.css'
import '@/styles/lib/tailwind.css'
import '@/styles/lib/github-markdown.less'

/** Tailwind's Preflight Style Override */
function naiveStyleOverride() {
  const meta = document.createElement('meta')
  meta.name = 'naive-ui-style'
  document.head.appendChild(meta)
}

function setupAssets() {
  naiveStyleOverride()
}

export default setupAssets
