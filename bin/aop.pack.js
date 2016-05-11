function ai_on(){
	bot = jQuery.aop.after( {target: window, method: '$'}, function(result){
		console.log('jQuery detected!');
		bot[0].unweave();
		return result;
	});
}
