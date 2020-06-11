
export default {
  mode: 'universal',
  router: {
    base: '/porfolio1/'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Kabilesh Ravichandran',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet" ,href: "https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@800&display=swap"},
      { rel: "stylesheet" ,href: "https://fonts.googleapis.com/css2?family=Metal+Mania&display=swap"},
      { rel: "stylesheet" ,href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css"},
      { rel: "stylesheet" ,href: "https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.0/css/mdb.min.css"},
      { rel: "stylesheet" ,href: "https://use.fontawesome.com/releases/v5.8.2/css/all.css"},
      { rel: "stylesheet" ,href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"},
      { rel: "stylesheet" ,href: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" },
    ]
  },
  script: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js",
      body: true
    },
    {
      src: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js",
      body: true
    },
    {
      src: "https://code.iconify.design/1/1.0.6/iconify.min.js",
      body: true
    },
    {
      src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
      body: true
    },
    {
      src: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js",
      body: true
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js",
      body: true
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.0/js/mdb.min.js",
      body: true
    },
    {
      src: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
      body: true
    }
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins:  [],
  
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  pwa: {
    icon: {
      iconSrc: '@/static/icon.png'
    }
  }
}
