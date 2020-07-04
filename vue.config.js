module.exports = {
    devServer: {
        // https://mhd.zhuishushenqi.com/comic_v2/customerview?apptype=8&appversion=1.0&channel=web-app&viewtype=1
      proxy: {
        '/goods': {
          target: 'http://localhost:3000',
          ws: true,
          changeOrigin: true
        },
        '/users': {
          target: 'http://localhost:3000',
          ws: true,
          changeOrigin: true
        },
        '/textuse': {
          target: 'http://localhost:3000',
          ws: true,
          changeOrigin: true
        },
        '/upload': {
          target: 'http://10.36.147.164:9999',
          ws: true,
          changeOrigin: true
        },
        '/updata': {
          target: 'http://localhost:3000',
          ws: true,
          changeOrigin: true
        },
        // '/foo': {
        //   target: '<other_url>'
        // }
      }
    }
  }
