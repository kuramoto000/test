$(window).on('load',function(){
  const CONT_WIDTH = $('#width').width();
  const CONT_HEIGHT = $('body').outerHeight();
  console.log(CONT_HEIGHT);
  console.log(CONT_WIDTH);
  $('#starField').starfield({
      starDensity: 3.0,
      mouseScale: 0.1,
      seedMovement: false
  });
  setTimeout(function(){
    $('#starField').css('width', CONT_WIDTH);
  },100);
})

// starDensity (default 1.0):
// Allows you to control how dense you want your starfield to be. Calculated based on pixel ratio.
// Increase for more stars, decrease for less.

// mouseScale (default 1.0):
// How quickly the starfield scrolls in response to mouse movement.
// Increase for faster movement, decrease for slower.

// seedMovement (default true):
// Start with a moving starfield on load.
// Also animates on non-mouse enabled devices.