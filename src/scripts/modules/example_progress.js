module.exports = {
	action : function(){
		$('#example_progress').click(function(e){
			$(this).find('p').remove();
			var $ticker = $('<p style="position:absolute; left:110%;">');
			$(this).append($ticker);
			$(this).velocity({
				rotateX : '180deg'
			},{
				duration : 1000,
				progress : function(elements, complete, remaining, start, tweenValue) {
					$ticker.text(complete);
				}
			}).velocity('reverse');
		})
	}
}