$(function(){
	socialButton();
	navIcon();
})

function socialButton(){
	$(".social-button").on("click", function(e){
		var $ul = $(this).parents("ul");
		$ul.toggleClass("show");
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
	$hm.toggleClass("hidden-menu-show");
}
