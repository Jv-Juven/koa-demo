require('babel-core/register')({
    presets: ['stage-3']
});

const model = require('./modules/model');
model.sync();

console.log('init db ok.');
// process.exit(0); // 这段代码会打断数据表的创建
