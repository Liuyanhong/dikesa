window.addEventListener("load",function(){
     var nav1=$(".nav1")[0];
	 var  links=$("a",nav1);
	 for (var i=0; i<links.length; i++) {
		    links[i].onmousedown=function  () {
				    for (var j=0; j<links.length; j++) {
					links[j].style.background="none"	
				    }
					this.style.background="#000"	
		    }
	 }

},true)
