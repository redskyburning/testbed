function vInfo(){
	var vw = $(window).width();
	var vh = $(window).height();
	vm = (vw > vh) ? vh : vw;
	var ratio = (vw < vh) ? vh / vw : vw /vh;
	var arr = [vh,vw,vm,Math.round(ratio*100)/100];
	return arr;
}

function vWatcher(){
	$('body').css('font-size',(vm * .01) + 'px');
    alert('vm polyfil');
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
    if(!Modernizr.cssvminunit){
        vWatcher();
    }
	$('#viewportWatch').html(vInfo().join(', '));
	$('#navToggle').click(function(){
		$('#siteNav').toggle();
	});
});

$(window).resize(function() {
    if(!Modernizr.cssvminunit){
        vWatcher();
    }
	$('#viewportWatch').html(vInfo().join(', '));
});