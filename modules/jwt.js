const jwt = require('koa-jwt');

/**
 * 一定不能使箭头函数，this指向问题
 */
let getToken = function () {
    return this.request.header.token;
}

module.exports = jwt({
    getToken: getToken,
    secret: 'shared-secret',
    key: 'jwtdata'
})
