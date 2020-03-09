$( document ).ready(function() {
 //HIDE
	$( "#menu_options" ).hide();
	
 //ACTIONS 	
	//Click Action Hair or Academy
	$( "#menu_responsive" ).click(function() {
 		$( "#menu_options" ).fadeIn();
	});
	
	$( "#menu_options" ).click(function() {
 		$( "#menu_options" ).fadeOut();
	});
	
});