module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      scale: ['active', 'group-hover'],
      display: ['group-hover']
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.indeat-container': {
          maxWidth: '1440px',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1280px',
          },
        },
        '.webshop-container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '500px',
          },
          '@screen md': {
            maxWidth: '500px',
          },
          '@screen lg': {
            maxWidth: '500px',
          },
          '@screen xl': {
            maxWidth: '500px',
          },
        },

        '.logout-page-container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '400px',
          },
          '@screen md': {
            maxWidth: '500px',
          },
          '@screen lg': {
            maxWidth: '500px',
          },
          '@screen xl': {
            maxWidth: '500px',
          },
        },
      })
    }
  ]
}
