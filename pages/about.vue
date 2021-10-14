<template>
  <div class="about">
    <header>
      <Logo height="5rem" />
      <h1>{{ $t('about.title') }}</h1>
      <h2 class="text--secondary">
        {{ $t('about.subtitle') }}
      </h2>
    </header>
    <main>
      <RenderView class="sample-render" :input="sample" />
      <MasonryWall
        v-slot="{ item }"
        :column-width="300"
        :gap="16"
        :items="features"
        :ssr-columns="1"
      >
        <FeatureCard :feature="item" />
      </MasonryWall>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <span class="disclaimer" v-html="$t('about.disclaimer')" />
      <Button
        class="elevated get-started-button"
        color="secondary"
        @click="completeAbout"
      >
        {{ $t('about.get-started') }}
      </Button>
    </main>
    <footer>
      <span class="text--secondary">{{ $t('about.license') }}</span>
      <span class="text--secondary">
        &copy; {{ new Date().getFullYear() }} Jan Müller
      </span>
      <a class="text--secondary" :href="repository">
        {{ $t('routes.source') }}
        <OpenInNewIcon />
      </a>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { MetaInfo } from 'vue-meta'
import { getNotebookPath, routes } from '~/model/routes'
import { generateSocialTags } from '~/model/meta'

export default defineComponent({
  layout: 'empty',
  data() {
    return {
      repository: routes.source.path,
    }
  },
  head(): MetaInfo {
    const title = this.$t(routes.about.title) as string
    const description = this.$t('meta.description') as string
    return {
      title,
      meta: [...generateSocialTags(title, description)],
    }
  },
  computed: {
    features(): string[] {
      const featureIds = [
        'note-taking',
        'syntax-highlighting',
        'organize',
        'download',
        'responsive',
        'themes',
        'pwa',
      ]
      return featureIds.map((id) => this.$t(`about.features.${id}`) as string)
    },
    sample(): string {
      return this.$t('about.sample') as string
    },
  },
  methods: {
    async completeAbout() {
      this.$store.commit('settings/setShowAbout', false)
      const notebook = await this.$store.dispatch(
        'createNotebook',
        this.$t('editor.notebooks.new')
      )
      await this.$router.push(this.localePath(getNotebookPath(notebook)))
    },
  },
})
</script>

<style scoped>
.about {
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 3rem;
  justify-content: space-between;
  padding: 2rem 2rem 1rem 2rem;
}

.about header {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.about header *:is(h1, h2) {
  margin: 0;
  text-align: center;
}

.about main {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
  width: 100%;
}

.about main .masonry-wall {
  width: min(100%, 960px);
}

.disclaimer {
  text-align: center;
}

.sample-render {
  background: none;
  margin-bottom: calc(-1 * var(--prism-block-margin-y));
  min-height: 0;
  padding: 0;
}

.get-started-button {
  border-radius: var(--border-radius-xl);
  font-size: var(--fs-large);
  height: unset;
}

.about footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.about footer a {
  align-items: center;
  display: inline-flex;
  gap: 0.25em;
}

.about footer *:not(:last-child)::after {
  color: var(--text-primary);
  content: '|';
  font-style: normal;
  margin-left: 0.5em;
  margin-right: 0.5em;
}
</style>
