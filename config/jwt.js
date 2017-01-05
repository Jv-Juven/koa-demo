module.exports = {
    /**
     * 一定不能使箭头函数，this指向问题
     */
    getToken: function () {
        return this.request.header.token;
    }
}
