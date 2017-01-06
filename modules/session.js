const session = require('koa-generic-session');
const redisStore = require('koa-redis');
// const mysqlConfig = require('../database/config');

// 设置cookies的有效时间为30分钟
// const THIRTY_MINTUES = 2 * 1000;
const THIRTY_MINTUES = 30 * 60 * 1000;

// 数据库配置
// const config= {
//     user: mysqlConfig.username,
//     password: mysqlConfig.password,
//     database: mysqlConfig.database,
//     host: mysqlConfig.host
// }

/**
 * 验证session值是否正确，false不通过（新的），重新生成session值；true通过（已有），使用已有的session值
 * @param  {[object]} ctx     [ctx 上下文对象，即控制器里的ctx对象]
 * @param  {[object]} session [session对象，即控制器里的ctx.session]
 * @return {[bool]}         [true: 通过；false: 不通过]
 */
let validSession = (ctx, session) => {
    // console.log("session", session);
    return true;
}

module.exports = function () {
    return session({
        store: redisStore(),
        rolling: true,
        cookie: {
            maxage: THIRTY_MINTUES
        },
        valid: validSession
    });
};
