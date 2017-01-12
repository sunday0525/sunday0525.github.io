var isMobile = false;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
　　isMobile = true;
}
var events = isMobile ? 'touchend': 'click';
$(document).on(
	"touchstart",
	function (e){
		e.preventDefault();
	}
);
$('a').each(function(ind,item){
	$(item).on('touchmove',function(){
		$(this).attr('ismove','true');
	});
	$(item).on('touchend',function(){
		if($(this).attr('ismove') != 'true') {
			window.location.href = this.href;
		}
		$(this).attr('ismove','false');
	})
});

$(function(){
	function htmlsize(){
		var ww;
		var maxw=640;
		var minw=320;
		if($(window).width()>maxw){ww=maxw;}
		else if($(window).width()<minw){ww=minw;}
		else{
			ww=$(window).width();
		}
		$("html").css({fontSize:(ww/maxw)*100});
	}
	htmlsize();
	$(window).on('resize',htmlsize);
	$('.menu').on(events,function(){
		if($(this).hasClass('menu_act')){
			$(this).removeClass('menu_act');
			$('.sidebar').css('right','-100%');
		}else{
			$(this).addClass('menu_act');
			$('.sidebar').css('right',0);
		}
		
	});
	
	$('.footer').css({bottom:0,opacity:1});
	
	
})