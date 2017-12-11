var DevWebpack = require('./config/webpack.dev');
var ProdWebpack = require('./config/webpack.prod');

//判断是开发版本，还是上线版本
switch(process.env.NODE_ENV){
	case 'dev':
	module.exports = DevWebpack;
	break;
	case 'prod':
	module.exports = ProdWebpack;
	break;
	default:
	module.exports = DevWebpack;
}



