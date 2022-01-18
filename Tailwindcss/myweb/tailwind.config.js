module.exports = {
  purge: [
'./components/**/*.{vue,js}',
'./layouts/**/*.vue',
'./pages/**/*.vue',
'./plugins/**/*{js,ts}',
'./nuxt.config.{js,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        bootstrap_primary:'#0d6efd',
        bootstrap_secondary:'#6c757d',
        bootstrap_success:'#198754',
        bootstrap_danger:'#dc3545',
        bootstrap_info:'#0dcaf0'
        },
        fontSize:{
          kobig:['10rem',{lineHeight:'10rem'}]
        },
        fontFamily:{
          kofont:['ZCOOL KuaiLe']
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
