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
	$('body').css('font-size',(vm * .1) + 'px');
}

function toggleNav(){
	var t = $('#siteNav');
	if(t.hasClass('active')){
		t.removeClass('active');
	} else {
		t.addClass('active');
	}
}

$(document).ready(function(){
	vWatcher();
	$('#navToggle').click(function(){
		$('#siteNav').toggle();
	});
});

$(window).resize(function() {
	vWatcher();
});