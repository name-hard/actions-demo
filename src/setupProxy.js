const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use('/api', createProxyMiddleware({
    target: 'https://jsonplaceholder.typicode.com',
    changeOrigin: true,
    pathRewrite: {
      // '^/api/old-path': '/api/new-path', // rewrite path
      // '^/api/remove/path': '/path', // remove base path
      '^/api': '' // remove base path
    }
  }));
};
