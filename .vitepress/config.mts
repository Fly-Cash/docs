import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'FlyCash | Docs',
  description: 'Documentação oficial do FlyCash, seu gerenciador financeiro.',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    search: {
      provider: 'local',
    },
    nav: [
      { text: 'Introdução', link: '/getting-started' },
      { text: 'Funcionalidades', link: '/features' },
      { text: 'Planos e Preços', link: '/plans-and-pricing' },
      { text: 'FAQ', link: '/faq' },
    ],
    sidebar: {
      '/': [
        { text: 'Introdução', link: '/getting-started' },
        { 
          text: 'Funcionalidades',
          link: '/features',
          collapsed: true,
          items: [
            { text: 'Organização por Grupos e Categorias', link: '/features#%F0%9F%93%82-organizacao-por-grupos-e-categorias' },
            { text: 'Transações Recorrentes', link: '/features#%F0%9F%94%81-transacoes-recorrentes' },
            { text: 'Visualização de Saldos', link: '/features#%F0%9F%93%8A-visualizacao-de-saldos' },
            { text: 'Funcionalidade Offline', link: '/features#%F0%9F%8C%90-funcionalidade-offline' },
          ]
        },
        { text: 'Planos e Preços', link: '/plans-and-pricing' },
        { text: 'FAQ', link: '/faq' },
        { text: 'Solução de Problemas', link: '/troubleshooting' },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/fly-cash/docs' },
      { icon: 'discord', link: 'https://discord.gg/VuQBBNhYXK' },
      { icon: 'x', link: 'https://x.com/FlyCa_sh' },
    ],
    footer: {
      message: 'Feito com ❤️ pela equipe FlyCash.',
      copyright: '© 2025 FlyCash. Todos os direitos reservados.',
    },
  },
})

