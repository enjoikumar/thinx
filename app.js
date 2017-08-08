$(document).ready(function(){


	var imgcount = 0;

	$('img').click(function(){
		imgcount++
		if (imgcount % 2){
			$('.emt').css('display', 'none')
			$('img').css('width', '100%');
			$('img').css('height', '100%');
			$(this).css('cursor', '-webkit-zoom-out');
			$(this).css('cursor', '-moz-zoom-out');
		} else {
			$('.emt').css('display', 'block')
			$('img').css('width', '50%');
			$('img').css('height', '50%');
			$(this).css('cursor', '-webkit-zoom-in');
			$(this).css('cursor', '-moz-zoom-in');
		}
	})



	$black = $('#black');
	$beige = $('#beige');
	$text = $('<span> &#x2714;</span>');

	$black.click(function(){
		$black.css('color', 'white');
		$black.css('background-color', 'black');
		$black.append($text)

		$beige.css('background-color', 'white');
		$black.remove($text)
	})

	$beige.click(function(){
		$beige.css('background-color', '#F5DEB3');
		$beige.append($text);

		$black.css('background-color', 'white');
		$black.css('color', 'black');
		$black.remove($text);
	})

	$black.trigger('click');





	$min = $('#min');
	$plus = $('#plus');
	$numb = $('.numb');
	
	var count = 0;

	$plus.click(function(){
		count++;
		$numb.html(' (' + count + ')');
	});

	$min.click(function(){
		count--;
		$numb.html(' (' + count + ')');
	});

})

//Left text and right text fields are sticky

//for mobile create a function that is enabled when browser is a certain height

// if($(window).width() >= 1920){
//     $('.br').find('br').remove();
//   }

// So when browser width is >= 414 invoke flickity for images

// don't know about enlarging th image except for modal
// but click function to make it bigger and make everything except images display none
// also cursor is a magnifying glass + and - respectively
// cant find counter code, do click add class, click remove class to enlarge and stuff 
// challenge would be to make the image change size as well as responsiveness.

// positioning of images in the bottom. Are they in a cetain format, size, layout etc. 

// px for spacing and em for text