module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Master Reference',
      description: 'The official Reference.'
    },
  },
  serviceWorker: true,
  base: "/ref-docs/",
  // theme: 'vue',
  themeConfig: {
    repo: 'flarco/ref-docs',
    docsDir: 'docsDir',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        nav: [{
            text: 'Home',
            link: '/'
          },
          {
            text: 'Linux',
            link: '/docsDir/cloud/linux.md'
          },
          {
            text: 'Python',
            link: '/docsDir/programming/python.md'
          },
          {
            text: 'Spark',
            link: '/docsDir/database/spark.md'
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
              '/docsDir/cloud/amazon.md',
              '/docsDir/cloud/docker.md',
              '/docsDir/cloud/git.md',
              '/docsDir/cloud/linux.md',
              '/docsDir/cloud/nginx.md',
            ]
          },
          {
            title: 'Database',
            collapsable: false,
            children: [
              '/docsDir/database/elasticsearch.md',
              '/docsDir/database/influxdb.md',
              '/docsDir/database/mysql.md',
              '/docsDir/database/oracle.md',
              '/docsDir/database/postgres.md',
              '/docsDir/database/sas.md',
              '/docsDir/database/spark.md',
              '/docsDir/database/mongodb.md',
            ]
          },
          {
            title: 'Programming',
            collapsable: false,
            children: [
              '/docsDir/programming/android.md',
              '/docsDir/programming/go.md',
              '/docsDir/programming/java.md',
              '/docsDir/programming/scala.md',
              '/docsDir/programming/nodejs.md',
              '/docsDir/programming/javascript.md',
              '/docsDir/programming/powershell.md',
              '/docsDir/programming/python-database.md',
              '/docsDir/programming/python-jupyter.md',
              '/docsDir/programming/python-links.md',
              '/docsDir/programming/python.md',
              '/docsDir/programming/ruby.md',
            ]
          },
          {
            title: 'ETL',
            collapsable: false,
            children: [
              '/docsDir/etl/informatica.md',
              '/docsDir/etl/ssis.md',
              '/docsDir/etl/talend.md',
            ]
          },
        ]
      },
    }
  }
}