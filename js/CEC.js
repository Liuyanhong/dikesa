
//window.onload=function  () {
//     var xia=$(".xia")[0];
//      var imgs=$("img",xia);
//             for (var i=0; i<imgs.length; i++) {
//	         imgs[i].onmouseover=function  () {
//			    for(var j=0;j<imgs.length;j++){
//					  imgs[j].style.border="2px solid #ccc";
//				}
//                 this.style.border="2px solid  #000";
//				 }
//		} 
//   }

 $(function  () {
	 //图片鼠标划过加边框
	   var imgs=$(".xia .imgs");
      imgs.hover(function  () {
			 $(this).css({border:"2px solid #000"})
		},function  () {
				 imgs.css({border:"2px solid #ccc"})
	})
//轮播器效果
  var d=$("#boxx .d");
  var boxx=$("#boxx");
  num=0;
  function movess () {
	  num++;
	  if (num==d.length-1) {
		     boxx.animate({left:(-num*d.width())},500,function  () {
				    boxx.css("left","0")
		     })
						num=0;
	  }else{
	     boxx.animate({left:-num*d.width()},500);
		
	  }
	       $(".content-left-top .huoda").css("background","#999999")
		   $($(".content-left-top .huoda")[num]).css("background","red")
  }

	       var t=setInterval(movess,2000)
		   $(".content-left-top .huoda").hover(function  () {
                  clearInterval(t);
			  boxx.stop();
				  var index=$(this).index(".content-left-top .huoda");
				  num=index;
				  boxx.animate({left:-index*d.width()},500)
				 $(".content-left-top .huoda").css("background","#999999")
					 $(this).css("background","red")
		   },function  () {
					     t=setInterval(movess,2000);
		   })
	   //走吧小动画
		  // var donghua=$(".donghua")
	       var zouba=$("#zouba")
		   var sbtn=$(".inner-top")
		   var xbtn=$(".inner-bottom")
          var speed=5;
          var speed1=25;
	function moves () {
	   zouba.css("top",function  () {
		  return zouba.position().top-speed;
	    })
		if(zouba.position().top<=-552){
		  zouba.css("top",0)
		}
	}
    var t=  setInterval(moves,60)

	  zouba.hover(function  () {
	  clearInterval(t)
		  zouba.css("background","rgba(146,208,219,0.5)")
	  },function  () {
	  t=  setInterval(moves,60)
		 zouba.css("background","none")
	  })

	  $(".ssbtn").hover(function  () {
	  clearInterval(t)
	  },function  () {
	  t=  setInterval(moves,60)
	  })



	  sbtn.click(function  () {
		   
		  zouba.css("top",function  () {
		      return zouba.position().top-speed1;
	    })
	
		   	if(zouba.position().top<=-552){
		       zouba.css("top",0)
		}
	    })



		  xbtn.click(function  () {
		      zouba.css("top",function  () {
		      return zouba.position().top+speed1;
	      })


		 	if(zouba.position().top>=0){
		       zouba.css("top",-552)
		}
	    })
			//鼠标滑过，背景变色
$(".icons div").hover(function  () {
	    $(".icons div").css("background","#fff")
			$(this).css("background","rgba(209,205,205,0.6)")
},function  () {
         $(".icons div").css("background","#fff")
})
	 　
		 
		   })
       