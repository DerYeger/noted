import { marked } from 'marked'
import * as Prism from 'prismjs'
import { Context } from '@nuxt/types'
import { Inject } from '@nuxt/types/app'

import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-batch'
import 'prismjs/components/prism-c'
import 'prismjs/components/prism-cpp'
import 'prismjs/components/prism-csharp'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-dart'
import 'prismjs/components/prism-docker'
import 'prismjs/components/prism-editorconfig'
import 'prismjs/components/prism-go'
import 'prismjs/components/prism-graphql'
import 'prismjs/components/prism-haskell'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-kotlin'
import 'prismjs/components/prism-latex'
import 'prismjs/components/prism-markdown'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-rust'
import 'prismjs/components/prism-sass'
import 'prismjs/components/prism-scss'
import 'prismjs/components/prism-sql'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-yaml'

marked.setOptions({
  highlight: (code, lang) => {
    if (Prism.languages[lang]) {
      return Prism.highlight(code, Prism.languages[lang], lang)
    } else {
      return code
    }
  },
})

export default (_: Context, inject: Inject) => {
  inject('md', marked.parse)
}

declare module 'vue/types/vue' {
  interface Vue {
    $md: typeof marked.parse
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $md: typeof marked.parse
  }
  interface Context {
    $md: typeof marked.parse
  }
}
