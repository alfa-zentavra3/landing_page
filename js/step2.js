
$("#nav").addClass("js").before('<div id="menu">☰</div>');
$("#menu").click(function(){
	$("#nav").toggle();
});
$(window).resize(function(){
	if(window.innerWidth > 768) {
		$("#nav").removeAttr("style");
	}
});

$(document).ready(function(){
	var btt = $('.back-to-top');

	btt.on('click', function(e){
		$('html,body').animate({
			scrollTop: 0
		}, 500);
		e.preventDefault();
	});

	$(window).on('scroll', function(){
		var self = $(this),
		    height = self.height(),
		    top = self.scrollTop();

		    if (top>height) {
		    	if (!btt.is(':visible')) {
		    		btt.show();
		    	}
		    	} else {
		    		btt.hide();
		    		
		    	}
		  
		});

	});

var picNum = 0;
slider();

function slider() {
    var i;
    var pic = document.querySelectorAll(".pics");
    for (i = 0; i < pic.length; i++) {
      pic[i].style.display = "none"; 
    }
    picNum++;
    if (picNum > pic.length) {
    	picNum = 1;
    } 
    pic[picNum-1].style.display = "block"; 
    setTimeout(slider, 10000); 
}

function showPics(n) {
    var i;
    var pic = document.querySelectorAll(".pics");
    if (n > pic.length) {
    	picNum = 1;
    } 
    if (n < 1) {
    	picNum = pic.length;
    };
    for (i = 0; i < pic.length; i++) {
        pic[i].style.display = "none"; 
    }
    pic[picNum-1].style.display = "block"; 
}

function next(n) {
    showPics(picNum += 1);
}


var navFirstPoint = document.getElementById('gal');
navFirstPoint.onclick = function(move){
	document.getElementById('pic_container').scrollIntoView();
};

var navSecondPoint = document.getElementById('voc');
navSecondPoint.onclick = function(move){
	document.getElementById('grammar').scrollIntoView();
};

var navThirdPoint = document.getElementById('game');
navThirdPoint.onclick = function(move){
	document.getElementById('gameBlock').scrollIntoView();
};

var navFourthPoint = document.getElementById('contacts');
navFourthPoint.onclick = function(move){
	document.getElementById('contactsBlock').scrollIntoView();
};