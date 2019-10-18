module.exports = (api) => {
  api.cache(true)

  const presets = [
    'next/babel'
  ]

  const plugins = [
    [
      'styled-components', {
        displayName: true,
        ssr: true
      }
    ],
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          api: './api',
          config: './config',
          data: './data',
          layout: './layouts'
        }
      }
    ]
  ]

  return {
    presets,
    plugins
  }
}
