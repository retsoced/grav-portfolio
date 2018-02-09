var expVis = false;

$(function() {
	// Animate the experience scales when the experience blocks scrolls on screen
	// ------------

  $(document.body).on('appear', '.experience', function(e, $affected) {

    if ( expVis ) {
	  	// do nada
	  } else {
	    $( '.skillerator' ).children( '.scale' ).each(function(i) {
	    	var perc = $( this ).data( 'percent' );

	    	var item = $( this ).find( '.indicator' );

	    	setTimeout(function(){
	      	$( item ).animate({
	        	'width':perc
	      	}, 250);
	    	},50 + ( i * 150 ));

			});

			expVis = true;
		}

  });

  $( '.experience' ).appear();

  // Animate the Imnstagram images when the footer scrolls on screen
	// ------------

  $(document.body).on('appear', '#footer', function(e, $affected) {

  });

  $( '#footer' ).appear();
});

$(function(){
  if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
    $('#ios-notice').removeClass('hidden');
    $('.parallax-container').height( $(window).height() * 0.2 | 0 );
  } else {
    $(window).resize(function(){
      var parallaxHeight = Math.max($(window).height() * 0.5, 200) | 0;
      $('.parallax-container').height(parallaxHeight - 75);
      $('.parallax-two').height(parallaxHeight);
    }).trigger('resize');
  }
});

var hasFired = [],
  $target,
  chapters = ['#home','#about','#portfolio','#experience','#contact'],
  currentChapter = 0;

var Application = ( function () {
	'use strict';

	return {

		// =====  F I R S T   R U N  ==============================================
		initApp: function () {
      // load application
      console.log('hi');
		},

    // =====  KEYBOARD NAVIGATION  ==============================================
    goToChapter: function (keyhit) {
      if ( keyhit === 49 ) { // 1
        $target = $( '#home');
        currentChapter = 0;
      } else if ( keyhit === 50 ) { // 2
        $target = $( '#about');
        currentChapter = 1;
      } else if ( keyhit === 51 ) { // 3
        $target = $( '#portfolio');
        currentChapter = 2;
      } else if ( keyhit === 52 ) { // 4
        $target = $( '#experience');
        currentChapter = 3;
      } else if ( keyhit === 53 ) { // 5
        $target = $( '#contact');
        currentChapter = 4;
      }

      if ( keyhit === 38 ) { // up arrow
        // previous chapter
        if ( currentChapter < 6 ) {
          if (currentChapter > 0 ){
            currentChapter --;
            $target = chapters[currentChapter];
          }
        }
      }

      if ( keyhit === 40 ) { // down arrow
        // next chapter
        if ( currentChapter > -1 ) {
          if (currentChapter < 5 ){
            currentChapter ++;
            $target = chapters[currentChapter];
          }
        }
      }

      // animate the scroll action to the chapter ID
      $('html, body').animate({
        scrollTop: $($target).offset().top
      }, 500, 'linear');
    },

    // PARSE THE QUERYSTRING
    getQuerystring: function(key, defaultVal) {
			if (defaultVal === null) { defaultVal = ''; }

			key = key.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
			var regex = new RegExp("[\\?&]"+key+"=([^&#]*)"),
				qs = regex.exec(window.location.href);
			if(qs === null) {
				return defaultVal;
			}
			return qs[1];
    }
	};

})();

$(window).keydown(function( event ) {
  Application.goToChapter( event.which );
});

$(document).ready( function(){
  Application.initApp();

  $( document ).on( 'click', '.home-link', function(e) {
    Application.goToChapter( 49 );
  });

  $( document ).on( 'click', '.about-link', function(e) {
    Application.goToChapter( 50 );
  });

  $( document ).on( 'click', '.portfolio-link', function(e) {
    Application.goToChapter( 51 );
  });

  $( document ).on( 'click', '.experience-link', function(e) {
    Application.goToChapter( 52 );
  });

  $( document ).on( 'click', '.contact-link', function(e) {
    Application.goToChapter( 53 );
  });
});
