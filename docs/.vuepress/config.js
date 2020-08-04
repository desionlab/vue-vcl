/**
 * config.js
 *
 * @author    Desionlab <support@desionlab.net>
 * @copyright 2018 - 2020 Desionlab
 * @license   MIT
 */

module.exports = {
  base: '/vue-vcl/',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'VCL for Vue.js',
      description: 'Visual component library for "Vue.js"'
    },
    '/ru/': {
      lang: 'ru-RU',
      title: 'VCL для Vue.js',
      description: 'Библиотека визуальных компонентов для "Vue.js"'
    }
  },
  themeConfig: {
    repo: 'desionlab/vue-vcl',
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        nav: [
          { text: 'Guide', link: '/guide/installation' },
          { text: 'Components', link: '/components/' }
        ],
        sidebar: [
          '/',
          {
            title: 'Guide',
            collapsable: false,
            children: [
              {
                title: 'Installation',
                path: '/guide/installation'
              }
            ]
          },
          {
            title: 'Components',
            path: '/components/',
            children: [
              {
                title: 'Dialogs',
                path: '/components/dialogs'
              },
              {
                title: 'Edit',
                path: '/components/edit'
              },
              {
                title: 'Spinner',
                path: '/components/spinner'
              },
              {
                title: 'Toasts',
                path: '/components/toasts'
              }
            ]
          }
        ]
      },
      '/ru/': {
        selectText: 'Языки',
        label: 'Русский',
        nav: [
          { text: 'Руководство', link: '/ru/guide/installation' },
          { text: 'Компоненты', link: '/ru/components/' }
        ],
        sidebar: [
          '/ru/',
          {
            title: 'Руководство',
            collapsable: false,
            children: [
              {
                title: 'Установка',
                path: '/ru/guide/installation'
              }
            ]
          },
          {
            title: 'Компоненты',
            path: '/ru/components/',
            children: [
              {
                title: 'Dialogs',
                path: '/ru/components/dialogs'
              },
              {
                title: 'Edit',
                path: '/ru/components/edit'
              },
              {
                title: 'Toasts',
                path: '/ru/components/toasts'
              }
            ]
          }
        ]
      }
    }
  }
};
