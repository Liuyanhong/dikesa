/*
  ������ȡ����
  classname   Ҫ�ҵ�����
  obj         Ҫȷ���ķ�Χ document    
*/               
function getClass (classname,obj) {
	 var obj=obj||document;
	 //FF\CHROM
	 var arr=[];
	   if(obj.getElementsByClassName){
	   return obj.getElementsByClassName(classname);
	   }else{
	     //ie6-8
		 var alls=obj.getElementsByTagName("*");
         for (var i=0; i<alls.length; i++) {
		    if(check(alls[i].className,classname)){
			  arr.push(alls[i]);
			}
         }
		 return arr;
	   }
     }
/*
   ��������getClass,������������Ƿ�����ڶ����������
   old   ÿһ��Ԫ�ص���ʵ����
   news   Ҫ�ҵ�����
*/
function check (old,news) {
	    //old:cc one two ["cc","one","two"]
		//new�� cc
		var arr=old.split(" ");
        for (var i=0; i<arr.length; i++) {
		  if(arr[i]==news){
		    return true;
		  }
        }
		return false;
	 }

//ͨ��$����ȡԪ��
$(".one");
function $ (selector,obj) {
  var obj=obj||document;
  if(typeof selector!=="string"){
     return false;
  }
//#one
  if(selector.charAt(0)=="#"){
    return obj.getElementById(selector.slice(1));
  }
  //.one
  if(selector.charAt(0)=="."){
    return getClass (selector.slice(1),obj)
  }
	//
   if(/^[a-z]{1,10}$/.test(selector)){
     return obj.getElementsByTagName(selector);
   }
   return false;
}
//������ö�������Ե�ֵ
function  getStyle(obj,attr) {
  if (window.getComputedStyle) {
    return parseInt(getComputedStyle(obj,null)[attr]);
  }else {
	return parseInt(obj.currentStyle[attr]);
  }
}



  //��������
/*
obj  Ҫ�����Ķ���
attr  Ҫ����������
final  ����ֵ
speed  �ٶ�
*/
function animate (obj,attr,final,speed) {
  var int=getStyle(obj,attr);
  obj.t=setInterval(function(){  
   if (final>int) {
	   if (int>=final) {
		 clearInterval(obj.t);
    }else {
		int+=speed;
	obj.style[attr]=int+"px";
    }
 }else{
	 if (int<=final) {
		 clearInterval(obj.t);
    }else {
		int-=speed;
	obj.style[attr]=int+"px";
    }
 
  }
      },60)
}



//������е���Ԫ��
//obj  Ҫ��ȡ��Ԫ��
function getChilds (obj) {
   var childs=obj.childNodes;
    var arr=[];
	  for (var i=0; i<childs.length; i++) {
	    if (childs[i].nodeType!==3) {
		    arr.push(childs[i]);
	    }
	  }
	  return arr;
}



//��ȡ��һ����Ԫ��
function getFirst (obj) {
  return getChilds(obj)[0];
}



//��ȡ���һ����Ԫ��
function getLast (obj) {
  return getChilds(obj)[ getChilds(obj).length-1];
}

////�����һ���ֵ�Ԫ��
 function getUp (obj) {
   var up=obj.previousSibling;
   if (up==null) {
   return false;
   }
   while (up.nodeType==3) {
   up=up.previousSibling;
     if (up==null) {
	 return false;
     }
   }
   return up;
 }
 

 ////�����һ���ֵ�Ԫ��
 function getNext (obj) {
   var next=obj. nextSibling;
   if (next==null) {
   return false;
   }
   while (next.nodeType==3) {
   next=next. nextSibling;
     if (next==null) {
	 return false;
     }
   }
   return next;
 }
 


 //�ҵ��ڼ���Ԫ��
//obj  Ҫ�ҵĸ�Ԫ��
//  num Ҫ�ҵĸ���
function getIndex (obj,num) {
   var childs=obj.childNodes;
    var arr=[];
	  for (var i=0; i<childs.length; i++) {
	    if (childs[i].nodeType!==3) {
		    arr.push(childs[i]);
	    }
	  }
	  return arr[num-1];
}



  //obj1 ׼��Ҫ�����Ԫ��
//obj2 Ҫ������֮����Ǹ�Ԫ��
  function insertAfter (obj1,obj2) {
      var parentobj=obj2.parentNode;
	  var nextobj=getNext(obj2);
	  if (nextobj) {
	       parentobj.insertBefore(obj1,nextobj)
	  }else{
	      parentobj.appendChild(obj1)
	  }
  }


    /*��ie6���ݹ̶���λ*/
  /*
    obj  Ҫ�̶���λ�Ķ���
	top �����ʼ��topֵ��
	left �����ʼ��leftֵ��
  */
   function setFixed (obj,top,left) {
    if(window.ActiveXObject&&!window.XMLHttpRequest){
	    clearInterval(obj.t)
	   obj.style.position="absolute";
	   obj.t=setInterval(function(){
	    obj.style.top=document.documentElement.scrollTop+top+"px";
		obj.style.left=document.documentElement.scrollLeft+left+"px";
	  },200)
	}else{
	 obj.style.position="fixed";
	 obj.style.left=left+"px";
	 obj.style.top=top+"px";
	}
  }


    //�����㷨
  /*
		    Linear���޻���Ч��(�����˶�)��
			Quad�����η��Ļ�����
			Cubic�����η��Ļ���
			Quartic���Ĵη��Ļ�����
			Quintic����η��Ļ�����
			Sinusoidal���������ߵĻ�����
			Exponential��ָ�����ߵĻ�����
			Circular��Բ�����ߵĻ�����
			Elastic��ָ��˥�����������߻�����
			Back��������Χ�����η���������
			Bounce��ָ��˥���ķ���������
			

			ÿ��Ч����������������ʽ�����������ֱ��ǣ�
			easeIn����0��ʼ���ٵ��˶���
			easeOut�����ٵ�0���˶���
			easeInOut��ǰ��δ�0��ʼ���٣����μ��ٵ�0���˶���
			


			�������ĸ������ֱ����
				t--- current time����ǰʱ�䣩��0 +=60   
				b--- beginning value����ʼֵ����100  
				c--- change in value���仯������500-100
				d---duration������ʱ�䣩  5000
			Tween.Quad.easeInt()
	     	����Ľ�����ǵ�ǰ���˶�·�̡�
		   ������:Code����
		   �������Ͳ��Եĵط�ϣ����λ������������
		   50
    Tween.Linear      */
 Tween = {  
    Linear: function(t,b,c,d){ return c*t/d + b; },
    Quad: {
        easeIn: function(t,b,c,d){
            return c*(t/=d)*t + b;
        },
        easeOut: function(t,b,c,d){
            return -c*(t/=d)*(t-2) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return c/2*t*t + b;
            return -c/2 * ((--t)*(t-2) - 1) + b;
        }
    },
    Cubic: {
        easeIn: function(t,b,c,d){
            return c*(t/=d)*t*t + b;
        },
        easeOut: function(t,b,c,d){
            return c*((t=t/d-1)*t*t + 1) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return c/2*t*t*t + b;
            return c/2*((t-=2)*t*t + 2) + b;
        }
    },
    Quart: {
        easeIn: function(t,b,c,d){
            return c*(t/=d)*t*t*t + b;
        },
        easeOut: function(t,b,c,d){
            return -c * ((t=t/d-1)*t*t*t - 1) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
            return -c/2 * ((t-=2)*t*t*t - 2) + b;
        }
    },
    Quint: {
        easeIn: function(t,b,c,d){
            return c*(t/=d)*t*t*t*t + b;
        },
        easeOut: function(t,b,c,d){
            return c*((t=t/d-1)*t*t*t*t + 1) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
            return c/2*((t-=2)*t*t*t*t + 2) + b;
        }
    },
    Sine: {
        easeIn: function(t,b,c,d){
            return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
        },
        easeOut: function(t,b,c,d){
            return c * Math.sin(t/d * (Math.PI/2)) + b;
        },
        easeInOut: function(t,b,c,d){
            return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
        }
    },
    Expo: {
        easeIn: function(t,b,c,d){
            return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
        },
        easeOut: function(t,b,c,d){
            return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
        },
        easeInOut: function(t,b,c,d){
            if (t==0) return b;
            if (t==d) return b+c;
            if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
            return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
        }
    },
    Circ: {
        easeIn: function(t,b,c,d){
            return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
        },
        easeOut: function(t,b,c,d){
            return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
            return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
        }
    },
    Elastic: {
        easeIn: function(t,b,c,d,a,p){
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        },
        easeOut: function(t,b,c,d,a,p){
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return (a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b);
        },
        easeInOut: function(t,b,c,d,a,p){
            if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
            if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
            return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
        }
    },
    Back: {
        easeIn: function(t,b,c,d,s){
            if (s == undefined) s = 1.70158;
            return c*(t/=d)*t*((s+1)*t - s) + b;
        },
        easeOut: function(t,b,c,d,s){
            if (s == undefined) s = 1.70158;
            return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
        },
        easeInOut: function(t,b,c,d,s){
            if (s == undefined) s = 1.70158; 
            if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
            return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
        }
    },
    Bounce: {
        easeIn: function(t,b,c,d){
            return c - Tween.Bounce.easeOut(d-t, 0, c, d) + b;
        },
        easeOut: function(t,b,c,d){
            if ((t/=d) < (1/2.75)) {
                return c*(7.5625*t*t) + b;
            } else if (t < (2/2.75)) {
                return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
            } else if (t < (2.5/2.75)) {
                return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
            } else {
                return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
            }
        },
        easeInOut: function(t,b,c,d){
            if (t < d/2) return Tween.Bounce.easeIn(t*2, 0, c, d) * .5 + b;
            else return Tween.Bounce.easeOut(t*2-d, 0, c, d) * .5 + c*.5 + b;
        }
    }
 }


   function animate (obj,attrObj,dur,fun,callback) {
	 clearInterval(obj.t);
	var fun=fun==undefined?Tween.Quad.easeIn:fun;
    var time=0;
	var start={};var change={};
    for (var i in attrObj) {
	 start[i]=setCss(obj,i);
	 change[i]=attrObj[i]-start[i];
    }

	obj.t=setInterval(function(){
	  if(time>=dur){
	   clearInterval(obj.t);
	   for (var i in attrObj) {
		 setCss(obj,i,attrObj[i]);
	   }
	   if(callback){
	     callback.call(obj);
	   }
	  }else{
	  for (var i in attrObj) {
	   setCss(obj,i,fun(time,start[i],change[i],dur));
	  }
	  time+=60
	  }
	},60)
  }




 function setCss (obj,attr,val) {
   if(obj.nodeType!==1){
     return;
   }

   //��ʼ������
  var attr=attr.replace(/^\s*|\s*$/g,"");
     //��ȡֵ
   if(arguments.length==2){
       //λ�úͳߴ�
      if(attr=="height"||attr=="width"||attr=="top"||attr=="left"||attr=="right"|| attr=="bottom"){
	var val=obj.currentStyle?parseInt(obj.currentStyle[attr]):parseInt(getComputedStyle(obj,null)[attr]);
		if(!val){
		 var str="offset"+attr.replace(attr.charAt(0),attr.charAt(0).toUpperCase());

		 val=obj[str];
		}
		return val;
	  }

	  
	   if(attr=="padding"||attr=="margin"||attr=="paddingTop"||attr=="paddingLeft"||attr=="paddingRight"||attr=="paddingBottom"||attr=="marginTop"||attr=="marginLeft"||attr=="marginRight"||attr=="marginBottom"){
	    var cc= parseInt(obj.currentStyle? ((obj.currentStyle[attr]==undefined||obj.currentStyle[attr]=="auto")?0:obj.currentStyle[attr]):(getComputedStyle(obj,null)[attr]==undefined?0:getComputedStyle(obj,null)[attr]));

	     return cc;
	   }
        //͸����
	  if(attr=="opacity"){
	    return obj.currentStyle?parseFloat(obj.currentStyle[attr]||1):parseFloat(getComputedStyle(obj,null)[attr]||1);
	  }
	  //��ɫ
	  if(attr=='color'||attr=="background"|| attr=="backgroundColor"||attr=='borderBottomColor'||attr== 'borderLeftColor'||    attr=='borderRightColor'||attr=='borderTopColor'){
		   var colors=obj.currentStyle?(obj.currentStyle[attr]||"#000000"):(getComputedStyle(obj,null)[attr]||"#000000");
		   //��ȡ����
		
		   return getColor(colors);
         
		}

	  return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,null)[attr];


   }else if(arguments.length==3){
     switch (attr) {
     case "width":
	 case "height":
	 case "top":
	 case "left":
	 case "bottom":
	 case "right":
	 case "padding":
	 case "margin":
	 case "paddingLeft":
	 case "paddingRight":
	 obj.style[attr]=val+"px";
	 break;
     case "opacity":
	 obj.style[attr]=val;
	 obj.style.filter="alpha(opacity="+val*100+")"
	 break;
	 case 'color':
		case "background":
		case "backgroundColor":
		case 'borderBottomColor':
		case 'borderLeftColor':
		case 'borderRightColor':
		case 'borderTopColor':
		obj.style[attr]=val;
	 break;
	 default:
	 obj.style[attr]=val;
     }

   }
 }

 //��ɫ���䶯��

 //�����ɫ
function getColor (color) {
  var str,r,g,b,arr;
  if(typeof color=="string"){
    //16 ����
    if(color.charAt(0)==="#"){
	  str=color.substring(1)
	  r=parseInt(str.substr(0,2),16);
	  g=parseInt(str.substr(2,2),16);
	  b=parseInt(str.substr(4,2),16);
	  arr=[r,g,b]
	  return arr;
	}else{
	  str=color.substring(4,color.length-1)
	  return str.split(",")
	}
  }
  if(color instanceof Array){
    return color;
  }
}

function colorAnimate (obj,attr,val,dur,fn,callback) {
if(obj.time){
  clearInterval(obj.time);
}
 
  var fn=fn||Tween.Linear;
  var start=setCss(obj,attr);
  var end=getColor(val);
  var times=0,r,g,b;
 obj.time= setInterval(function  () {
	 if(times>=dur){
	   clearInterval(obj.time)
       obj.time=null;
		   if(callback){
	        callback()
	      }
		  
	 }else{
     r=fn(times,parseInt(start[0]),parseInt(end[0])-parseInt(start[0]),dur)
     g=fn(times,parseInt(start[1]),parseInt(end[1])-parseInt(start[1]),dur)
	 b=fn(times,parseInt(start[2]),parseInt(end[2])-parseInt(start[2]),dur)	
		
	 setCss(obj,attr,"rgb("+parseInt(r)+","+parseInt(g)+","+parseInt(b)+")")
      times+=60;
	   }
  },60)

}


//����¼�����
  function getEvent (e) {
	    return e||window.event;
  }


  //��Ӷ���¼�
 /*
   obj   Ҫ����¼��Ķ���
   ev    Ҫ��ӵ��¼�
   fn    Ҫ����ĺ���
 */
 function addEvent (obj,ev,fn) {
  if(obj.attachEvent){
    obj.attachEvent("on"+ev,fn)
  }else{
    obj.addEventListener(ev,fn,false);
  }
}

function removeEvent (obj,ev,fnName) {
	if(obj.detachEvent){
	  obj.detachEvent("on"+ev,fnName);
	}else{
	 obj.removeEventListener(ev,fnName,false)
	}
}


//��ק

/*
  obj    Ҫ��ק�Ķ���
  x      ����ֵ trueΪx�����϶�
  y       ����ֵ trueΪy�����϶�
*/
function drag (obj,x,y) {
   obj.onmousedown=function  (e) {
	   var ev=e||window.event;
       var lx=ev.offsetX||ev.layerX;
       var ly=ev.offsetY||ev.layerY;
	   document.onmousemove=function  (e) {
		   var ev=e||window.event;
		   var cx=ev.clientX;
		   var cy=ev.clientY;
		   if(x===true&&y===true){
			   obj.style.left=cx-lx+"px";
		   obj.style.top=cy-ly+"px";
		   
		   }else	if(y===true){
		   obj.style.top=cy-ly+"px";
		   }else	if(x===true){
		   obj.style.left=cx-lx+"px";
		   }
		   if(ev.preventDefault){
			ev.preventDefault();
		}else{
		ev.returnValue = false; 
			
		}
	   }
    document.onmouseup=function  () {
	    document.onmousemove=null;	
		if(obj.releaseCapture){
		  obj.releaseCapture();
		}
    }
		if(ev.preventDefault){
			ev.preventDefault();
		}else{
		ev.returnValue = false; 
			
		}

		if(obj.setCapture){
	       obj.setCapture();
	      }
   }   
}

//�����¼�
function mouseScroll (obj,upfun,downfun) {
 if(obj.attachEvent){
	obj.attachEvent("onmousewheel",scrollFn);  //IE�� opera
	}else if(obj.addEventListener){
	obj.addEventListener("mousewheel",scrollFn,false);  
	//chrome,safari    -webkit-
	obj.addEventListener("DOMMouseScroll",scrollFn,false); 
	//firefox     -moz-
	}
    function scrollFn (e) {
      var ev=e||window.event;
      var num=ev.wheelDelta||ev.detail;
	  if(num==3||num==-120){
        if(downfun){
		  downfun();
		}
	  }
	  if(num==-3||num==120){ 
		  if(upfun){
		    upfun();
		  }
	  }

	  if (ev.preventDefault ) 
		ev.preventDefault(); //��ֹĬ����������� (W3C) 
		 else
		 //IE����ֹ������Ĭ�϶����ķ�ʽ 
		 ev.returnValue = false; 
	  
   }

}



  //�ж�ĳ��Ԫ���Ƿ����������һ��Ԫ��
 function contains (parent,child) {
	if(parent.contains){
	   return parent.contains(child) && parent!=child;
	}else{
	  return (parent.compareDocumentPosition(child)===20);
	}
 }

 //�ж�����Ƿ������Ĵ��ⲿ���룬�������������Ƴ����ⲿ��

  function checkHover (e,target) {
	 if(getEvent(e).type=="mouseover"){
	    return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
		!((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
	 }else{
		return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
		!((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
		}
  }


//��������Ƴ��¼�
/*
  obj   Ҫ�����Ķ���
  overfun   ���������Ҫ����ĺ���
  outfun     ����Ƴ���Ҫ����ĺ���
*/
function hover (obj,overfun,outfun) {
	  if(overfun){
	    obj.onmouseover=function  (e) {
			  if(checkHover(e,obj)){
			     overfun.call(obj);
			  }
	    }
	  }
	  if(outfun){
	    obj.onmouseout=function  (e) {
			  if(checkHover(e,obj)){
			     outfun.call(obj);
			  }
	    }
	  }
}

