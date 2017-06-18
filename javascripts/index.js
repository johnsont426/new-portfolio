$(function(){
	socialButton();
	navIcon();
})

function socialButton(){
	$(".social-button").on("click", function(e){
		var $ul = $(this).parents("ul");
		if($ul.hasClass("show")){
			$ul.toggleClass("show")
		}else {
			$ul.addClass("show")
		}
		e.preventDefault();
	})
}

function navIcon(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
		showHiddenMenu();
	});
}

function showHiddenMenu(){
	var $hm = $(".hidden-menu");
	if($hm.hasClass('hidden-menu-show')){
		$hm.toggleClass("hidden-menu-show")
	}else {
		$hm.addClass('hidden-menu-show')
	}
}
