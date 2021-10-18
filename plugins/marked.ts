import Marked from 'marked'
import Prism from 'prismjs'
import { Context } from '@nuxt/types'
import { Inject } from '@nuxt/types/app'

import 'prismjs/components/prism-bash.js'
import 'prismjs/components/prism-batch.js'
import 'prismjs/components/prism-c.js'
import 'prismjs/components/prism-cpp.js'
import 'prismjs/components/prism-csharp.js'
import 'prismjs/components/prism-css.js'
import 'prismjs/components/prism-dart.js'
import 'prismjs/components/prism-docker.js'
import 'prismjs/components/prism-editorconfig.js'
import 'prismjs/components/prism-go.js'
import 'prismjs/components/prism-graphql.js'
import 'prismjs/components/prism-haskell.js'
import 'prismjs/components/prism-java.js'
import 'prismjs/components/prism-javascript.js'
import 'prismjs/components/prism-json.js'
import 'prismjs/components/prism-kotlin.js'
import 'prismjs/components/prism-latex.js'
import 'prismjs/components/prism-markdown.js'
import 'prismjs/components/prism-python.js'
import 'prismjs/components/prism-rust.js'
import 'prismjs/components/prism-sass.js'
import 'prismjs/components/prism-scss.js'
import 'prismjs/components/prism-sql.js'
import 'prismjs/components/prism-typescript.js'
import 'prismjs/components/prism-yaml.js'

Marked.setOptions({
  highlight: (code, lang) => {
    if (Prism.languages[lang]) {
      return Prism.highlight(code, Prism.languages[lang], lang)
    } else {
      return code
    }
  },
})

export default (_: Context, inject: Inject) => {
  inject('md', Marked.parse)
}

declare module 'vue/types/vue' {
  interface Vue {
    $md: typeof Marked.parse
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $md: typeof Marked.parse
  }
  interface Context {
    $md: typeof Marked.parse
  }
}
