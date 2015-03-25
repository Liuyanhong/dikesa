window.onload=function  () {

	//放大镜的效果
    var normal=$(".left-top")[0];
	var small=$(".xiaotu")[0];
	var big=$(".left-topfangda")[0];
	var normals=$("img",normal);
	var smalls=$("img",small);
	var bigs=$("img",big);
	 normal.index=0; 
	for (var i=0; i<smalls.length; i++) {
	   smalls[i].index=i; 
	   smalls[i].onmouseover=function  () {
	      normal.index=this.index;
	        for (var j=0; j<smalls.length; j++) {
			    smalls[j].style.border="1px solid rgba(200,200,200,0.6)";
				 normals[j].style.zIndex=0;
				 bigs[j].style.zIndex=0;
	        }
			   bigs[this.index].style.zIndex=1;
			   normals[this.index].style.zIndex=1;
			   this.style.border="1px solid green";
	   }
	        normal.onmouseover=function  () {
			     big.style.display="block";
	        }
			normal.onmousemove=function  (e) {
			   document.title=this.index;
			   var ev=e||window.event;
			   var lefts=ev.offsetX||ev.layerX;
			   var tops=ev.offsetY||ev.layerY;
			    bigs[this.index].style.left=-((bigs[0].offsetWidth-400)/normals[0].offsetWidth)*lefts+"px";
			    bigs[this.index].style.top=-((bigs[0].offsetHeight-363)/normals[0].offsetHeight)*lefts+"px";
			}
			normal.onmouseout=function  (e) {
			  big.style.display="none";
			}

	}




	//图片花滑过有边框
		  var midd=$(".midd-4")[0];
         var imgs=$("img",midd);

 for (var i=0; i<imgs.length; i++) {
	      imgs[i].onmouseover=function  () {
			    for(var j=0;j<imgs.length;j++){
					  imgs[j].style.border="none";
				}
                 this.style.border="2px solid  #000";
				 }
		}
		/*---------------------------------------------------------*/
		var widths=document.documentElement.clientWidth;
        var heights=document.documentElement.clientHeight;
		var bodyH=document.body.offsetHeight;
		var img=$("img",$(".content-right")[0]);
		
		var a=true;
		
		for (var i=0;i<img.length;i++){
			
			 img[i].onclick=function(){
				 //document.body.style.overflow="hidden";
			if(!a){
			return;
			}
			a=false;
		  var mask=document.createElement("div");
          mask.style.cssText="position:absolute;top:0px;left:0px;border:1px solid red;opacity:0.8;background:black";
		  mask.style.width=widths+"px";
		  mask.style.height=bodyH+"px";
          document.body.appendChild(mask);
		  
		  var imgone=document.createElement("img");
		  imgone.src="styles/images/2.jpg";
		  imgone.style.border="5px solid black";
		  imgone.style.position="absolute";
		  imgone.style.left=0;
		  imgone.style.top=0;
		  
		  
		  var box=document.createElement("div");
		  box.style.left=(widths-800-10)/2+"px";
		  box.style.top=(heights-400-10)/2+"px";
          box.style.width=800+10+"px";
		  box.style.height=480+10+"px";
		  box.style.overflow="hidden";
		  box.style.position="absolute";
		  box.style.zIndex="88";
		  
		  document.body.appendChild(box);
		  var xx=document.createElement("div");
		  xx.style.cssText="position:absolute;z-index:999;top:10px;right:10px; border:3px solid black;border-radius:50%;width:25px;height:25px;background:white;text-align:center;line-height:25px;font-size:20px;font-family:'微软雅黑';font-weight:bold;cursor:pointer";
		  xx.innerHTML="X";
		  box.appendChild(xx);
		  box.appendChild(imgone);
		  
		  xx.onclick=function(){
			    	// document.body.style.overflow="visible";
			  box.removeChild(xx);
				xx=null;
				box.removeChild(imgone);
				imgone=null;
			    document.body.removeChild(box);
				box=null;
				document.body.removeChild(mask);
				mask=null;
				
				
			     a=true;
			  }
			  drag (box,true,true)
		
		}
			}
		
		
		
		
		
		
		
		
		
		
		 
}