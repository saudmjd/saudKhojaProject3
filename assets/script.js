let $img = $('<img>');
let $overlay = $('<div id="img-overlay"></div>');
let $closeButton = $('<i class="fas fa-times"></i>');

// HTML stuff
$('section').append($overlay);   // Add overlay to DOM
$overlay.fadeOut();   // Hide overlay

// When user clicks on image
$('.lightbox img').click(function(){
	imageUrl = $(this).attr('src');   // Display img src onclick
	
	$overlay.append($img);   // Add img to overlay
	$overlay.append($closeButton);   // Add close button to overlay
	$img.attr('src', imageUrl);   // Add img attribute
	$overlay.fadeIn('2000');   // Show overlay
  	$img.fadeIn('2000');   // Show img
  	$closeButton.show();   // Close overlay
});

// Close overlay when X clicked
$closeButton.click( function() {
	$overlay.fadeOut('2000');
});
