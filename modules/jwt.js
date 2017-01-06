const jwt = require('koa-jwt');

/**
 * 一定不能使箭头函数，this指向问题
 */
let getToken = function () {
    return this.request.header.token;
}

module.exports = jwt({
    // getToken: getToken, // 使用指定名字的自定义方法获取jwt的token
    secret: 'shared-secret',
    key: 'jwtdata',
    // cookie: "token"  // 通过设置cookie字段值获取指定键名（设置的cookie字段值）的jwt的token
})
