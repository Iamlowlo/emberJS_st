module.exports = {
	action : function(){
		$('#slide08 .action_dummy_box').click(function(e){
			var $this = $(this);
			if ($this.hasClass('active')) {
				$this.siblings('.example_box').velocity('slideUp',{ 
					duration : 400,
					complete : function(elements){
						$this.removeClass('active');
					}
				});
			}else{
				$this.siblings('.example_box').velocity('slideDown',{
					duration : 400,
					display : 'inline-block',
					complete : function(elements){
						$this.addClass('active');
					} });
			}
		})
	}
}