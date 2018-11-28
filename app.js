
const fs = require('fs');

const Koa = require('koa');

const app = new Koa();


// demos/04.js

// const main = ctx => {
//   ctx.response.type = 'html';
//   ctx.response.body = fs.createReadStream('./src/pages/demo.html');
// };

const main = ctx => {
    if (ctx.request.path !== '/') {
      ctx.response.type = 'html';
      ctx.response.body = '<a href="/">Index Page</a>';
    } else {
      ctx.response.body = 'Hello World';
    }
  };


// response
app.use(main);

app.listen(3000);
