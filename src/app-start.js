'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaSimpleRouter = require('koa-simple-router');

var _koaSimpleRouter2 = _interopRequireDefault(_koaSimpleRouter);

var _initCtrl = require('./controller/initCtrl');

var _initCtrl2 = _interopRequireDefault(_initCtrl);

var _config = require('./config/config');

var _config2 = _interopRequireDefault(_config);

var _koaSwig = require('koa-swig');

var _koaSwig2 = _interopRequireDefault(_koaSwig);

require('babel-polyfill');

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _koa2.default();

//初始化
_initCtrl2.default.init(app, _koaSimpleRouter2.default);
//静态文件
app.use((0, _koaStatic2.default)(_config2.default.get('staticFilePath')));

app.context.render = _co2.default.wrap((0, _koaSwig2.default)({
  // ...your setting 
  writeBody: false
}));

app.listen(_config2.default.get('port'), function () {
  console.log('Server is running');
});
