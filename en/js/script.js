$(document).ready(function(){
	/* This code is executed after the DOM has been completely loaded */

	/* Changing thedefault easing effect - will affect the slideUp/slideDown methods: */
	$.easing.def = "easeOutBounce";

	/* Binding a click event handler to the links: */
	$('li.button a').click(function(e){
	
		/* Finding the drop down list that corresponds to the current section: */
		var dropDown = $(this).parent().next();
		
		/* Closing all other drop down sections, except the current one */
		$('.dropdown').not(dropDown).slideUp('slow');
		dropDown.slideToggle('slow');
		
		/* Preventing the default event (which would be to navigate the browser to the link's address) */
		e.preventDefault();
	})

	radios = document.getElementsByName("winTeam");
	for(var i = 0; i < radios.length; i++) {
		radios[i].onclick = decideWinteam;
	}
});

function currentPos() {
	return location.pathname.substring(location.pathname.lastIndexOf("_")).substring(1,3);
}

function decideWinteam() {
	win = $('input[name="winTeam"]:checked').val();
	localStorage["pos" + currentPos()] = win;
}