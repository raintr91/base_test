import { withMermaid } from 'vitepress-plugin-mermaid'
import { defineConfig } from 'vitepress'

export default withMermaid(
  defineConfig({
    title: 'Base Tests',
    description: 'Plans hub — E2E / acceptance plans (YAML + MD). Member-first docs.',
    cleanUrls: true,
    ignoreDeadLinks: true,
    rewrites: {
      'README.md': 'index.md',
    },
    srcExclude: [
      '**/node_modules/**',
      '**/scripts/**',
      '**/schemas/**',
      '**/registries/**',
      '**/.cursor/**',
      '**/package.json',
      '**/pnpm-lock.yaml',
      '**/platform-repos*.json',
      '**/*.yaml',
      '**/*.yml',
      '**/catalog/lexicon/**',
      '**/catalog/test_case_vocabulary.txt',
    ],
    vite: {
      optimizeDeps: {
        include: [
          'mermaid',
          'dayjs',
          'debug',
          'cytoscape',
          'cytoscape-cose-bilkent',
          '@braintree/sanitize-url',
        ],
      },
    },
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Giới thiệu', link: '/landscape/INTRO-base-tests' },
        { text: 'Scenarios', link: '/scenarios/' },
        { text: 'Cases', link: '/cases/' },
        { text: 'Glossary', link: '/catalog/GLOSSARY' },
      ],
      sidebar: [
        {
          text: 'Bắt đầu',
          collapsed: false,
          items: [
            { text: 'Home', link: '/' },
            { text: 'Giới thiệu (member)', link: '/landscape/INTRO-base-tests' },
            { text: 'CAP-admin', link: '/landscape/CAP-admin' },
            { text: 'Bản đồ QA', link: '/landscape/LND-qa-map' },
            { text: 'NOTE kiến trúc', link: '/landscape/NOTE-testing-architecture' },
          ],
        },
        {
          text: 'Plans',
          collapsed: false,
          items: [
            { text: 'Scenarios', link: '/scenarios/' },
            { text: 'SC-LOGIN', link: '/scenarios/CMP-01-auth/SC-LOGIN' },
            { text: 'Cases', link: '/cases/' },
            {
              text: 'W-AD-AUTH-001',
              collapsed: true,
              items: [
                { text: 'Index', link: '/cases/W-AD-AUTH-001/' },
                { text: 'TC-LOGIN-VALID', link: '/cases/W-AD-AUTH-001/TC-LOGIN-VALID' },
                { text: 'TC-LOGIN-BAD-PASSWORD', link: '/cases/W-AD-AUTH-001/TC-LOGIN-BAD-PASSWORD' },
                { text: 'TC-LOGIN-EMPTY-EMAIL', link: '/cases/W-AD-AUTH-001/TC-LOGIN-EMPTY-EMAIL' },
                { text: 'TC-LOGIN-A11Y', link: '/cases/W-AD-AUTH-001/TC-LOGIN-A11Y' },
              ],
            },
            { text: 'Targets', link: '/targets/' },
            { text: 'CTX E2E boundary', link: '/contexts/CTX-e2e-boundary' },
          ],
        },
        {
          text: 'Catalog',
          collapsed: true,
          items: [
            { text: 'Glossary', link: '/catalog/GLOSSARY' },
            { text: 'Vocabulary', link: '/catalog/VOCABULARY' },
            { text: 'By type', link: '/catalog/by-type' },
            { text: 'By dimension', link: '/catalog/by-dimension' },
          ],
        },
        {
          text: 'Templates',
          collapsed: true,
          items: [
            { text: 'CAP', link: '/templates/CAP.example' },
            { text: 'SC', link: '/templates/SC.example' },
            { text: 'DT', link: '/templates/DT.example' },
            { text: 'SPEC-HOLE handoff', link: '/templates/SPEC-HOLE-HANDOFF.example' },
          ],
        },
      ],
      socialLinks: [],
      outline: { level: [2, 3] },
      search: { provider: 'local' },
      footer: {
        message: 'Plans hub · YAML cho máy · MD cho người',
        copyright: 'base-tests',
      },
    },
    mermaid: {},
  }),
)
