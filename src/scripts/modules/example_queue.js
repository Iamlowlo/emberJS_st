module.exports = {
	action : function(){
		$('#example_queue').click(function(e){
			$(this).velocity({
				left : '100px'
			},{
				duration : 200
			}).velocity({
				left : '200px'
			},{
				duration : 200,
				delay : 200
			}).velocity({
				top : '50px'
			},{
				duration : 200,
				delay : 200
			})
		})
	}
}