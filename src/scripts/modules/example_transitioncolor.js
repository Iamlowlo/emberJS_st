module.exports = {
	action : function(){
		$('#slide14 .action_dummy_box.transform').click(function(e){
			var $this = $(this);
			console.log(this);
			if (!$this.hasClass('active')) {
				$this.velocity({
					'rotateX' : '30deg',
					'rotateY' : '60deg',
					'rotateZ' : '90deg'
				},{ 
					duration : 400,
					loop : 5
				});
				$this.addClass('active');
			}else{
				$this.velocity('stop');
				$this.removeClass('active');
			}
		})
		$('#slide14 .action_dummy_box.color').click(function(e){
			var $this = $(this);
			console.log(this);
			if (!$this.hasClass('active')) {
				$this.velocity({
					'backgroundColor' : '#FF9900'
				},{ 
					duration : 400,
					loop : 5,
					complete : function(elements){
						$this.removeClass('active');
					}
				});
				$this.addClass('active');
			}else{
				$this.velocity('stop');
				$this.removeClass('active');
			}
		})
	}
}