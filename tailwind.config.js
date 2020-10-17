module.exports = {
  future: {
    purgeLayersByDefault: true
  },
  purge: {
    enabled: true,
    content: ['public/*.html', './src/**/*.html', './src/**/*.js']
  },
  theme: {
    colors: {
      yellow: {
        default: '#fff158'
      },
      blue: {
        100: '#e3edfb',
        200: '#dbe8fb',
        300: '#c7dcf7',
        400: '#3483fa',
        500: '#2968c8',
        600: '#1f4e96',
        default: '#3483fa'
      },
      green: {
        100: '#e6f6ee',
        200: '#05a54f'
      },
      gray: {
        100: '#ebebeb',
        200: '#e5e5e5'
      },
      white: {
        default: '#ffffff'
      },
      back: {
        default: '#000000'
      }
    }
  },
  variants: {
    display: ['last']
  },
  plugins: []
}
