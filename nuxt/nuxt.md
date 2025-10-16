# Conexão data base defineNuxtConfig
```js
  nitro: {
    experimental: {
      database: true,
    },
    database: {
      default: {
        connector: "mysql2",
        options:{
          host:'',
          user:'',
          password:'',
          database:''
        }
      }
    },
  },
```