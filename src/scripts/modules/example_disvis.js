module.exports = {
	action : function(){
		$('#example_dis').click(function(e){
			$(this).velocity({
				opacity : 0
			},{
				duration : 400,
				display : 'none'
			});
		})
		$('#example_vis').click(function(e){
			$(this).velocity({
				opacity : 0
			},{
				duration : 400,
				visibility : 'hidden'
			});
		})
		$('#slide06 .action_dummy_box').click(function(e){
			var vis = window.getComputedStyle($('#example_vis')[0]).visibility;
			var dis = window.getComputedStyle($('#example_dis')[0]).display;
			$('.example_ticker').remove();
			$('<p class="example_ticker">').text('display: '+dis+', visibility: '+vis).insertAfter(this);
		})
	}
}