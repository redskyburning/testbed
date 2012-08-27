function vInfo(){
	var vw = $(window).width();
	var vh = $(window).height();
	vm = (vw > vh) ? vh : vw;
	var ratio = (vw < vh) ? vh / vw : vw /vh;
	var arr = [vh,vw,vm,Math.round(ratio*100)/100];
	return arr;
}

function vWatcher(){
	$('#viewportWatch').html(vInfo().join(', '));
	$('body').css('font-size',(vm * .03) + 'px');
}

$(document).ready(function(){
	vWatcher();
});

$(window).resize(function() {
	vWatcher();
});