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
          collapsed: false,
          items: [
            { text: 'Organização por Grupos e Categorias', link: '/features/groups-and-categories' },
            { text: 'Transações', link: '/features/transactions' },
            { text: 'Transações Recorrentes', link: '/features/transactions-recurrences' },
            { text: 'Visualização de Saldos', link: '/features/balances' },
            { text: 'Importação de Faturas', link: '/features/import-transactions' },
            { text: 'Fluxo de Caixa', link: '/features/cashflow' },
          ],
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
      copyright: '© 2026 FlyCash. Todos os direitos reservados.',
    },
  },
})
