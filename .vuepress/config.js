module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Master Reference',
      description: 'The official Reference.'
    },
  },
  serviceWorker: true,
  // theme: 'vue',
  themeConfig: {
    repo: 'flarco/ref-docs',
    docsDir: 'docs',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        nav: [
          {
            text: 'Home',
            link: '/'
          },
          {
            text: 'Linux',
            link: '/docs/cloud/linux.md'
          },
          {
            text: 'Python',
            link: '/docs/programming/python.md'
          },
          {
            text: 'Spark',
            link: '/docs/database/spark.md'
          },
          // {
          //   text: 'API Reference',
          //   link: '/api/'
          // },
          // {
          //   text: 'Release Notes',
          //   link: 'https://github.com/vuejs/vue-router/releases'
          // }
        ],
        sidebar: [
          '/',
          {
            title: 'Cloud',
            collapsable: false,
            children: [
              '/docs/cloud/amazon.md',
              '/docs/cloud/docker.md',
              '/docs/cloud/git.md',
              '/docs/cloud/linux.md',
              '/docs/cloud/nginx.md',
            ]
          },
          {
            title: 'Database',
            collapsable: false,
            children: [
              '/docs/database/elasticsearch.md',
              '/docs/database/influxdb.md',
              '/docs/database/mysql.md',
              '/docs/database/oracle.md',
              '/docs/database/postgres.md',
              '/docs/database/sas.md',
              '/docs/database/spark.md',
              '/docs/database/mongodb.md',
            ]
          },
          {
            title: 'Programming',
            collapsable: false,
            children: [
              '/docs/programming/android.md',
              '/docs/programming/go.md',
              '/docs/programming/java.md',
              '/docs/programming/nodejs.md',
              '/docs/programming/powershell.md',
              '/docs/programming/python-database.md',
              '/docs/programming/python-jupyter.md',
              '/docs/programming/python-links.md',
              '/docs/programming/python.md',
              '/docs/programming/ruby.md',
            ]
          },
          {
            title: 'ETL',
            collapsable: false,
            children: [
              '/docs/etl/informatica.md',
              '/docs/etl/ssis.md',
              '/docs/etl/talend.md',
            ]
          },
        ]
      },
    }
  }
}
