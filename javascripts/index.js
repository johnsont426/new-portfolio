$(function(){
	$(".social-button").on("click", function(e){
		var $ul = $(this).parents("ul");
		if($ul.hasClass("show")){
			$ul.toggleClass("show")
		}else {
			$ul.addClass("show")
		}
		e.preventDefault();
	})
})