require('jquery');

module.exports = {

	slideshowControlsClass : '.slideshow_controls',
	slidePoolClass : '.slide_pool',
	slideQty : 0,
	activeSlide : 0,

	init : function(){
		this.$slideshowControls = $(this.slideshowControlsClass);
		this.$prevSlideBtn = this.$slideshowControls.children('.prev_slide');
		this.$nextSlideBtn = this.$slideshowControls.children('.next_slide');
		this.$slides = $(this.slidePoolClass).children('.slide');
		this.slideQty = this.$slides.length;
		this.activeSlide = this.$slides.filter('.active').last().index();
		this.slideBtnVisibility();
		this.bindSlideEvents();
		
	},
	slideBtnVisibility : function(){
		switch (this.activeSlide) {
			case 0:
				this.$prevSlideBtn.addClass('hidden');
				break;
			case this.slideQty-1:
				this.$nextSlideBtn.addClass('hidden');
				break;
		};
		if (this.slideQty>1) {
			if ( this.activeSlide>0 ) {
				this.$prevSlideBtn.removeClass('hidden');
			}
			if ( this.activeSlide<this.slideQty-1 ) {
				this.$nextSlideBtn.removeClass('hidden');
			}
		}
	},
	setSelectorClasses: function(slideshowControls, slidePool){
		this.slideshowControlsClass = slideshowControls;
		this.slidePoolClass = slidePool;
	},
	bindSlideEvents: function(){
		var self = this;
		var $main_title_box = $('.main_title_box');
		$(document).keydown(function(e) {
		    e.preventDefault();
		    switch(e.which) {
		        case 37: // left
		        	if (self.activeSlide>0) {
		        		self.prevSlideAction(self,$main_title_box);
		        	};
		        break;
		        case 39: // right
					if (self.activeSlide<self.slideQty-1) {
						self.nextSlideAction(self,$main_title_box);
					}
		        break;
		    }
		});
		this.$slideshowControls.find('.prev_slide').on('click',function(e){
			e.preventDefault();
			self.prevSlideAction(self,$main_title_box);
		}).hover(function(e){
			$.Velocity(this,{
				textShadowX : '2px',
				textShadowY : '4px',
				textShadowBlur : '0'
			},{
				duration : 140
			});
		},function(e){
			$.Velocity(this,{
				textShadowX : '0px',
				textShadowY : '0px',
				textShadowBlur : '0'
			});
		});
		this.$slideshowControls.find('.next_slide').on('click',function(e){
			e.preventDefault();
			self.nextSlideAction(self,$main_title_box);
		}).hover(function(e){
			$.Velocity(this,{
				textShadowX : '-2px',
				textShadowY : '4px',
				textShadowBlur : '0'
			},{
				duration : 140
			});
		},function(e){
			$.Velocity(this,{
				textShadowX : '0px',
				textShadowY : '0px',
				textShadowBlur : '0'
			});
		});
	},
	nextSlideAction: function(self, $main_title_box){
		self.$slides.eq(self.activeSlide+1).velocity({
			left : '0'
		},{
			duration : 250,
			complete : function(elements){
				self.activeSlide = $(elements).index();
				self.slideBtnVisibility();
			},
			progress : function(elements, complete, remaining, start, tweenValue){
				var X = 0;
				var Y = Math.round(5*Math.cos(Math.PI*(complete-0.5)));
				var B = Math.round(10*Math.cos(Math.PI*(complete-0.5)));
				$main_title_box.css({
					boxShadow : X + 'px ' + Y + 'px ' + B + 'px #999'
				})
			}
		})
	},
	prevSlideAction: function(self, $main_title_box){
		self.$slides.eq(self.activeSlide).velocity({
			left : '100%'
		},{
			duration : 250,
			complete : function(elements){
				self.activeSlide = $(elements).index()-1;
				self.slideBtnVisibility();
			},
			progress : function(elements, complete, remaining, start, tweenValue){
				var X = 0;
				var Y = Math.round(5*Math.cos(Math.PI*(complete-0.5)));
				var B = Math.round(10*Math.cos(Math.PI*(complete-0.5)));
				$main_title_box.css({
					boxShadow : X + 'px ' + Y + 'px ' + B + 'px #999'
				})
			}
		});
	}
}