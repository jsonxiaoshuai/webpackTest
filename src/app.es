import Koa from 'koa';
import router from 'koa-simple-router';
import initCtrl from './controller/initCtrl';
import config from './config/config';
import render from 'koa-swig';
import 'babel-polyfill';
import co from 'co';
import serve from 'koa-static';

const app = new Koa();

//初始化
initCtrl.init(app,router);
//静态文件
 app.use(serve(config.get('staticFilePath')));


app.context.render = co.wrap(render({
  // ...your setting 
  writeBody: false
}));



app.listen(config.get('port'),function () {
	console.log('Server is running');
})