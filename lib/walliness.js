
/******************************************************************
	Navigation Fx
******************************************************************/

$(function(){
	$('#navbar a')
		.css( {backgroundPosition: "0 0"} )
		.mouseover(function(){
			$(this).stop().animate({backgroundPosition:"(0 -44px)"}, {duration:250})
		})
		.mouseout(function(){
			$(this).stop().animate({backgroundPosition:"(0 0)"}, {duration:250})
		})
});

/******************************************************************
	Template Scroller Settings
******************************************************************/	

$(function() {
    $('#contents').cycle({
        fx:     'fade',
        speed:  'slow',
        nowrap:  0,
        timeout: 0,
        pager:  '#navbar',
        pagerAnchorBuilder: function(idx, slide) {
            // return sel string for existing anchor
            return '#navbar li:eq(' + (idx) + ') a';
        }
    });
});

/******************************************************************
	Launch Date Settings
******************************************************************/	

$(document).ready(function(){
	var newYear = new Date(2022, 5-1, 14, 20, 00);
	$('#days').countdown({
		until: newYear, 
		layout: '{dn}'
	});
	$('#hours').countdown({
		until: newYear, 
		layout: '{hnn}'
	});
	$('#minutes').countdown({
		until: newYear, 
		layout: '{mnn}'
	});
	$('#seconds').countdown({
		until: newYear, 
		layout: '{snn}'
	});
	if(navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
		$('#countdown-spawn li').css('padding-top', '0');
	}
});