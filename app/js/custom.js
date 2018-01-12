$(function () {
	
	/*smooth-scrolling - start*/
	
	$("a[href^='#']").click(function(){
		
		var href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(href).offset().top - 49}, 500);
	
	});
	/*smooth-scrolling - stop*/
	
	/*changing-navigation-on-scroll - start*/
	$(document).scroll(function(){
		if($(document).scrollTop() > 50) {
			$("#main-nav").addClass("nav-scroll");
		} else {
			$("#main-nav").removeClass("nav-scroll");
		}
	});
	/*changing-navigation-on-scroll - stop*/
	
	/*form-validation - start*/
	$("input[type='submit']").click(function(event){
		$("form").find("*[placeholder]").each(function(index){
			if($("*[placeholder]").eq(index).val()=="") {
				event.preventDefault();	
				if($("*[placeholder]").eq(index).next().is("p")) {
					return;
				} else {
					$("*[placeholder]").eq(index).after("<p>Pole wymagane</p>");
					$("*[placeholder]").eq(index).next("p").css("color", "white");
				}
			} else if($("*[placeholder]").eq(index).next().is("p")) {
					$("*[placeholder]").eq(index).next("p").remove();
				}
		});	
	});
	/*form-validation - stop*/
	
	/*scrollReveal*/
window.sr = ScrollReveal({ reset: true }).reveal('.row', { duration: 500 });
	/*scrollReveal*/
});
