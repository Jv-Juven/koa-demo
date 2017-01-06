// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');
const app = new Koa();
// 导入controller middleware:
const controller = require(__dirname + '/modules/controller');
// 引入koa-bodyparser来解析原始request请求
const bodyParser = require('koa-bodyparser');


const convert = require('koa-convert');
// 创建一个Koa对象表示web app本身:
// app配置信息
const appConfig = require(__dirname + "/config/app");

const session = require("./modules/session");
const jwt = require("./modules/jwt");
// const csrf = require("./modules/csrf");

// 对于任何请求，app将调用该异步函数处理请求：
// app.use(async (ctx, next) => {
// 	console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
// 	await next();
// });
app.keys = ['session key', 'csrf example'];
// app.use(convert(session(app)));
app.use(session())
// 注册koa-bodyparser到app对象上
app.use(bodyParser());

/**
 * csrf 中间件
 * 对于表单可以防止csrf 攻击，但对于单页应用，存在局限性
 * 相关的了解可以参阅： https://segmentfault.com/a/1190000003716037
 */
// app.use(csrf);

// Middleware below this line is only reached if JWT token is valid
app.use(jwt);

// 添加路由中间件:
app.use(controller());

// 在端口3000监听
app.listen(appConfig.port);
console.log(`app started at port ${appConfig.port}...`);
