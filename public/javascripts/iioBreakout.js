// iioBreakout.js
// Author: Benjamin J. Fisher
// Site: http://benjaminjfisher.com
// Date: May 2013

var breakout = function(io){
	// start the debugger
	// io.activateDebugger();

	io.addGroup('background', 0);
	io.addGroup('foreground', 10);


	var bg = new iio.ioRect(io.canvas.center)
		.createWithImage('images/bg_prerendered.png', function(){
			io.addObj(bg)
		});

	var startText = new iio.ioText('Click to start', io.canvas.center)
			.setFont("24px Arial")
			.setTextAlign('center')
			.setFillStyle('black');

	io.addObj(startText)

	io.addToGroup('background', bg);
	io.addToGroup('foreground', startText);
};

iio.start(breakout, 'canvas');