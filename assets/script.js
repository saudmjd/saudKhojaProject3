let $image = $('<img>');
let $overlay = $('<div id="img-overlay"></div>');
let $close = $('<i class="fas fa-times"></i>');

// HTML stuff
$('section').append($overlay);   // Add overlay to DOM
$overlay.fadeOut();   // Hide overlay

// When user clicks on image
$('.lightbox img').click(function(){
	imageUrl = $(this).attr('src');   // Display img src onclick

	$overlay.append($image);   // Add img to overlay
	$overlay.append($close);   // Add close button to overlay
	$image.attr('src', imageUrl);   // Add img attribute
	$overlay.fadeIn('2000');   // Show overlay
	$image.fadeIn('2000');   // Show img
	$close.show('2000');   // Close overlay
});

// Close overlay when X clicked
$close.click( function() {
	$overlay.fadeOut('2000');
} );
