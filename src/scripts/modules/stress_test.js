module.exports = {
	jqueryCount : 0,
	velocityCount : 0,
	
	init : function(){
		this.$animationChanger = $('#animation_changer');
		this.$elementChanger = $('#element_changer');
		this.$stress_test = $('.stress_test');
		this.$panic_btn = $('.panic_btn');
	},
	action : function(){
		var self = this;
		this.$animationChanger.change(function(e){
			switch (this.value) {
				case 'stress_css':
					$(this).siblings('.subtitle').text('CSS');
				break;
				case 'stress_jquery':
					$(this).siblings('.subtitle').text('jQuery');
				break;
				case 'stress_velocity':
					$(this).siblings('.subtitle').text('VelocityJS');
				break;
			}
		})
		this.$elementChanger.change(function(e){
			$(this).siblings('.stress_test').toggleClass('active');
		})
		$('.panic_btn').click(function(e){
			
			self.jqueryCount=0;
			self.velocityCount=0;
			var delay = 250;

			if (!$(this).hasClass('active')) {
				switch (self.$animationChanger.val()) {
					case 'stress_css':
						self.$stress_test.filter('.active').children().each(function(index,item){
							setTimeout(function(){
								$(item).addClass('animate_css');
							},index*delay)
						});
					break;
				case 'stress_jquery':
					self.$stress_test.filter('.active').children().each(function(index,item){
						setTimeout(function(){
							self.jqueryLoop(item);
						},index*delay)
					});
				break;
				case 'stress_velocity':
					self.$stress_test.filter('.active').children().each(function(index,item){
						setTimeout(function(){
							self.velocityLoop(item);
						},index*delay)
					});
				break;
				}

			}else{
				self.$stress_test.children().removeClass('animate_css')
															.stop(true)
															.velocity('stop')
															.removeAttr('style');
			}
			$(this).toggleClass('active');
		})
	},
	jqueryLoop : function(element){
		var self = this;
		$(element)
			.animate({ left : '500px' },{
				duration : 500,
				complete : function(){
					self.jqueryCount++;
				} })
			.animate({ left : '0px' },{ 
				duration : 500,
				complete : function(){
					self.jqueryLoop(element);
				} });
	},
	velocityLoop : function(element){
		$(element).velocity({
			translateX : ['500px','0%']
		},{
			duration : 500,
			loop : true
		});
	}
}