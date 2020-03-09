$( document ).ready(function() {

	$('#header-menu-li1').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      	if (target.length) {
        	$('html, body').animate({
       		 scrollTop: target.offset().top
        	}, 1000);
        		return false;
      		}
    	}
  	});
  
  	$('#header-menu-li2').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      	if (target.length) {
        	$('html, body').animate({
       		 scrollTop: target.offset().top
        	}, 1000);
        		return false;
      		}
    	}
  	});
	
	$('#header-menu-li3').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      	if (target.length) {
        	$('html, body').animate({
       		 scrollTop: target.offset().top
        	}, 1000);
        		return false;
      		}
    	}
  	});
  
  	$('#header-menu-li4').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      	if (target.length) {
        	$('html, body').animate({
       		 scrollTop: target.offset().top
        	}, 1000);
        		return false;
      		}
    	}
  	});
	
	$('#header-menu-li5').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      	if (target.length) {
        	$('html, body').animate({
       		 scrollTop: target.offset().top
        	}, 1000);
        		return false;
      		}
    	}
  	});
	
	$('#header-menu-li6').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      	if (target.length) {
        	$('html, body').animate({
       		 scrollTop: target.offset().top
        	}, 1000);
        		return false;
      		}
    	}
  	});
});
