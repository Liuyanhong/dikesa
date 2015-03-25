$(function  () {
  var links=$(".content-left-top a");
  var cons=$(".xuanxiangka img");
  links.mouseover(function  () {
     links.css({background:"red"});
	 $(this).css({background:"#999"});
	 var index=($(this).index(".top a"))
	 cons.css({display:"none"})
     $(cons[index]).css({display:"block"})
  })
})