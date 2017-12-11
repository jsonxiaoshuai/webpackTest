const initCtrl = {
	init(app,router){
		app.use(router(_ => {
		  _.get('/index/index', async(ctx, next) => {
		    ctx.body = await ctx.render('index',{
		    	title:'测试'
		    });
		  })
		}))
	}
}

export default initCtrl;