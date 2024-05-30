import { path } from '@vuepress/utils'

const animeListPlugin = () => ({
  name: 'vuepress-plugin-anime-list',
  clientConfigFile: path.resolve(__dirname, 'client.ts'),
})

export default animeListPlugin
