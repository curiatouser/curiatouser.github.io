function changingText(selector,text,interval){
	typeIn(text);
	function typeIn(text){
		for(var i = 0; i < text.length ;i++){
			doTypeIn(selector,text,interval*i,i);
		}
	}
	function doTypeIn(selector,text,time,i){
		setTimeout(function(){
			$(selector).text(text.slice(0,i+1) + ' |');
			
		},time);
	}
}
