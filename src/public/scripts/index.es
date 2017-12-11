import css from '../css/index.css';

class PraiseButton{
	constructor(){
		
	}
	clickAction(){
		axios.get('index/updata')
		.then(function(res){
			console.log(res)
		}).catch(function(error){
			console.log(error)
		})
	}
}


export default PraiseButton