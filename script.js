$(document).ready(function(){
	$("#box1 .colorLayer").animate({left:"0px"},300);
	$("#box1 .colorLayer").delay(400).animate({left:"650px"},300);
	$("#box1 .title").animate({left:"0px"});

	$("#box2 .colorLayer").delay(300).animate({left:"0px"},300);
	$("#box2 .colorLayer").delay(400).animate({left:"650px"},300);
	$("#box2 .title").delay(300).animate({left:"0px"});

	$(window).scroll(function(){
		if($(this).scrollTop() >= 310 && $(this).scrollTop() <= 350)
		{
			$(".colorLayer2").animate({left:"0px"},300);
			$(".image img").animate({left:"0px"});
			$(".colorLayer2").delay(400).animate({left:"850px"},300);
			$(".colorLayer2").delay(400).animate({width:"0px"},300);

			$(".colorLayer3").delay(1100).animate({left:"0px"},300);
			$(".info").delay(1100).animate({left:"0px"});
			$(".colorLayer3").delay(400).animate({left:"400px"},300);
			$(".colorLayer3").delay(400).animate({width:"0px"},300);
		}
	});


	$(window).scroll(function(){
		if($(this).scrollTop() >= 1050 && $(this).scrollTop() <= 1090)
		{
				
			$(".colorLayer4").animate({left:"0px"},300);
			$(".images img").animate({left:"0px"});
			$(".colorLayer4").delay(400).animate({left:"950px"},300);
			$(".colorLayer4").delay(400).animate({width:"0px"},300);

			$(".colorLayer5").delay(1100).animate({left:"0px"},300);
			$(".info1").delay(1100).animate({left:"0px"});
			$(".colorLayer5").delay(400).animate({left:"400px"},300);
			$(".colorLayer5").delay(400).animate({width:"0px"},300);
		}
	});



	$(window).scroll(function(){
		if($(this).scrollTop() >= 1600 && $(this).scrollTop() <= 1650)
		{
			
			$(".colorLayer6").animate({left:"0px"},300);
			$(".images1 img").animate({left:"0px"});
			$(".colorLayer6").delay(400).animate({left:"950px"},300);
			$(".colorLayer6").delay(400).animate({width:"0px"},300);

			$(".colorLayer7").delay(1100).animate({left:"0px"},300);
			$(".info2").delay(1100).animate({left:"0px"});
			$(".colorLayer7").delay(400).animate({left:"400px"},300);
			$(".colorLayer7").delay(400).animate({width:"0px"},300);
		}
	});


});
