// this is the main file that pulls in all other modules
// you can require() bower components too!

window.jQuery = window.$ = require("jquery");
var 		_ = require("lodash"),
	slideshow = require('./modules/slideshow'),
	example_require = require('./modules/example_queue'),
	example_progress = require('./modules/example_progress'),
	example_disvis = require('./modules/example_disvis'),
	example_fades = require('./modules/example_fades'),
	example_slides = require('./modules/example_slides'),
	example_transitioncolor = require('./modules/example_transitioncolor');
	stress_test = require('./modules/stress_test');

require('velocity');

$(document).ready(function(){
	$('.note').click(function(e){
		e.preventDefault();
		$(this).velocity({
			properties : {
				'font-size' : '1.3em'
			},
			options : {
				duration : 400
			}
		});
	});
	slideshow.init();
	example_require.action();
	example_progress.action();
	example_disvis.action();
	example_fades.action();
	example_slides.action();
	example_transitioncolor.action();
	stress_test.init();
	stress_test.action();
});
