$( document ).ready(function() {
 //HIDE
 	//Options Hair or Academy (Hide on Start)
 	$( "#logo_hair" ).hide();
	$( "#logo_academy" ).hide();
	$( "#div-hair_side" ).hide();
	$( "#div-academy_side" ).hide();
	
	//Option Mute (Hide on Start)
	$( "#controls_mutedon-img" ).hide();
	$( "#controls_mutedoff-img" ).show();
	
	//Option Touch (Hide on Start)
	$( "#controls_touchon-img" ).hide();
	$( "#controls_touchoff-img" ).show();
	
	//Option Touch For No MouseOver
	$( "#controls_touch-options" ).hide();
	
	
 //ACTIONS 	
	//Click Action Hair or Academy
	 $( "#div-hair_side_transparent" ).mouseover(function() {
 		$( "#logo_hair" ).hide();
		$( "#logo_academy" ).show();
		$( "#logo_" ).attr("src", 'images/logo-2.png');
		$( "#div-hair_side" ).show();
		$( "#div-academy_side" ).hide();
		
	});
	
	$( "#div-academy_side_transparent" ).mouseover(function() {
			$( "#logo_hair" ).show();
			$( "#logo_academy" ).hide();
			$( "#logo_" ).attr("src", 'images/logo-.png');
			$( "#div-hair_side" ).hide();
			$( "#div-academy_side" ).show();
	});
	
	$( "#div-hair_side_transparent").mouseout(function() {
			$( "#logo_academy" ).hide();
			$( "#logo_hair" ).hide();
			$( "#div-hair_side" ).hide();
			$( "#div-academy_side" ).hide();
	});
	
	$( "#div-academy_side_transparent").mouseout(function() {
			$( "#logo_academy" ).hide();
			$( "#logo_hair" ).hide();
			$( "#div-hair_side" ).hide();
			$( "#div-academy_side" ).hide();
	});
	/******** THIS WAS THE ORIGINAL VERSION WITH HAIR AND ACADEMY SIDES IN OPOSITION *******
    $( "#div-hair_side_transparent" ).mouseover(function() {
 		$( "#logo_hair" ).show();
		$( "#logo_academy" ).hide();
		$( "#div-hair_side" ).show();
		$( "#div-academy_side" ).hide();
		
	});
	
	$( "#div-academy_side_transparent" ).mouseover(function() {
			$( "#logo_hair" ).hide();
			$( "#logo_academy" ).show();
			$( "#div-hair_side" ).hide();
			$( "#div-academy_side" ).show();
	});
	
	$( "#div-hair_side_transparent").mouseout(function() {
			$( "#logo_academy" ).hide();
			$( "#logo_hair" ).hide();
			$( "#div-hair_side" ).hide();
			$( "#div-academy_side" ).hide();
	});
	
	$( "#div-academy_side_transparent").mouseout(function() {
			$( "#logo_academy" ).hide();
			$( "#logo_hair" ).hide();
			$( "#div-hair_side" ).hide();
			$( "#div-academy_side" ).hide();
	});
	*/
	
	
	//Click Action MUTE
	$( "#controls_mutedoff-img" ).click(function() {
 		$( "#controls_mutedon-img" ).show();
		$( "#controls_mutedoff-img" ).hide();
		$("#audio-file").prop("muted",'muted');
	});
	
	$( "#controls_mutedon-img" ).click(function() {
 		$( "#controls_mutedon-img" ).hide();
		$( "#controls_mutedoff-img" ).show();
		$("#audio-file").prop("muted",'');
	});
	
	//Click Action TOUCH
	$( "#controls_touchoff-img" ).click(function() {
 		$( "#controls_touchon-img" ).show();
		$( "#controls_touchoff-img" ).hide();
		//More options
		$( "#controls_touch-options").fadeIn("slow");
	});
	
	$( "#controls_touchon-img" ).click(function() {
 		$( "#controls_touchon-img" ).hide();
		$( "#controls_touchoff-img" ).show();
		//More options
		$( "#controls_touch-options").fadeOut("slow");
	});
	
	
	
});