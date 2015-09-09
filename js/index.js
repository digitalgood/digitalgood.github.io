//wait for the DOM to load 
$(document).ready(function() {
	$("#sustFirst").flip(); $("#sustSecond").flip(); $("#sustThird").flip(); $("#demoFirst").flip(); $("#demoSecond").flip(); $("#demoThird").flip(); $("#crisFirst").flip(); $("#crisSecond").flip(); $("#crisThird").flip();
	$(window).scroll(function(i){
    var scrollVar = $(window).scrollTop();
	$('h1').css({'opacity':($(window).scrollTop() )/500});
})
});