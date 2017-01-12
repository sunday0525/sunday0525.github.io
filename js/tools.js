//初始化标题
function settit(e){
	$(e).addClass("showtit");
	var text=$(e).text();
	text=text.replace(/ /g,"^");
	var arr=text.split("");
	var html="";
	for(var i=0;i<arr.length;i++){
		var t = GetRandomNum(1,7);
		html+="<i style='transition-delay:0."+t+"s;-webkit-transition-delay:0."+t+"s'>"+arr[i]+"</i>";
	}
	html=html.replace(/\^/g,"&nbsp;");
	html=html.replace("> <",">&nbsp;<");
	$(e).html(html);	
}

//初始化文字
function settxt(e){
	$(e).addClass("showtxt");
	var text=$(e).text();
	text=text.replace(/ /g,"^");
	var html="";
	var l=0;
	while(l<text.length){
		var x=GetRandomNum(2,5);
		var y=GetRandomNum(2,20)*0.1;
		var w = 0;
		var end = l+x;
		end = end>text.length ? text.length: end;
		for (var i = l; i < end ; i++) {
			if(text[i] == '^'){
				w+=0.5;
			}else{
				if(/\w/.test(text[i])){
					w+=0.5;
				}else{
					w+=1;
				}
			}
		}
		html+='<i style="width:'+w+'em"><b style="transition-delay:'+y+'s;-webkit-transition-delay:'+y+'s">'+text.substr(l,x)+'</b></i>';
		l+=x;
	}
	html=html.replace(/\^/g,"&nbsp;");
	html=html.replace("> <",">&nbsp;<");
	$(e).html(html);
//	$(e).find("i").each(function(index, element) {
//		$(this).width($(this).width());
//	});
	$(e).find("b").addClass("h");
}
//激活标题或文字
function showtt(e,delay){
	setTimeout(function(){
		$(e).addClass("act");
	},delay);
}
//移除标题或文字激活
function hidett(e){
	$(e).find(".act").removeClass("act");
}




//弹出层
function showlayer(e){
	$(e).css({marginTop:$(e).outerHeight()*-0.5});
	$(e).show();
	$(".shadow").fadeIn(300);
}
function hidelayer(e){
	$(e).hide();
	$(".shadow").fadeOut(300);
}


//获取随机数
function GetRandomNum(Min,Max){   
	var Range = Max - Min;   
	var Rand = Math.random();   
	return(Min + Math.round(Rand * Range));
}

function mjump(url){
	var ua=navigator.userAgent.toLowerCase();
	if(ua.match(/iPad/i)=="ipad" || ua.match(/iphone/i)=="iphone" || ua.match(/android/i)=="android") { 
		location=url;
	}
}

//滚轮 判断上滚 下滚
function scrollEve(obj,callBack){
	//在不报错的情况下，可以不用判断直接把两个时间都绑定上
    if(window.navigator.userAgent.toLocaleLowerCase().indexOf('firefox') != -1){
		obj.addEventListener('DOMMouseScroll',fn1);
	}else{
		obj.addEventListener('mousewheel',fn1);
	}
	function fn1 (ev) {
		obj.flag = true;
	    if(ev.detail){
	    	obj.flag = ev.detail >0 ? false: true;
	    }else{
	    	obj.flag = ev.wheelDelta < 0 ? false: true;
	    }
	    if(callBack && typeof callBack === 'function'){
	    	callBack();
	    }
	    ev.preventDefault();
	}
}

