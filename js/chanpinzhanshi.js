$(function(){
	$(window).click=function(){
		  alert(1)
		}
	   var con=$(".content-1 .content-1-1");
	   con.hover(function(){
		     con.css("border","1px solid black")
		   },function(){
			     con.css("border","1px solid white")
			   })
	  
	})