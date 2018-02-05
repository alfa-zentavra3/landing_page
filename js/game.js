var outer = document.querySelector('.block');
var word = document.getElementById('word');
var trans = document.getElementById('translation');
var btn = document.getElementById('btn');
btn.onclick=function(){
				var cardOne = document.createElement('div');
				var cardTwo = document.createElement('div');
				cardOne.className = "cardOne";
				cardTwo.className = "cardTwo";
				cardOne.innerHTML = word.value;
				cardTwo.innerHTML = trans.value;
					if ($('.cardOne').length < 6 && $('.cardTwo').length<6){
						outer.appendChild(cardOne);
						outer.appendChild(cardTwo);
					}

					for (var i = 0; i < 6; i++) {
						
						$('.cardOne')[i].classList.add("f"+i);
						$('.cardTwo')[i].classList.add("f"+i);
						
					}
	var btnShuffle = document.getElementById('btnShuffle');				
	btnShuffle.onclick = function(){
		$(function () {
    		var parent = $("#shuffle");
    		var divs = parent.children();
    			while (divs.length) {
        			parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    			}
		});
	}

	for (var i = 0; i < $('.cardOne').length; i++) {
			$('.cardOne')[i].onclick = function(){
				if (this.className == "cardOne f0") {
					this.style.backgroundColor = '#33f9529c';
					for (var i = 0; i < $('.cardTwo').length; i++) {
							$('.cardTwo')[i].onclick = function(){
								if (this.className == "cardTwo f0") {
								this.style.backgroundColor = '#33f9529c';
								}
							}
					}
				}
				if (this.className == "cardOne f1") {
					this.style.backgroundColor = '#33f9529c';
						for (var i = 0; i < $('.cardTwo').length; i++) {
							$('.cardTwo')[i].onclick = function(){
								if (this.className == "cardTwo f1") {
								this.style.backgroundColor = '#33f9529c';
								}

						}	}
				}

					if (this.className == "cardOne f2") {
					this.style.backgroundColor = '#33f9529c';
						for (var i = 0; i < $('.cardTwo').length; i++) {
							$('.cardTwo')[i].onclick = function(){
								if (this.className == "cardTwo f2") {
								this.style.backgroundColor = '#33f9529c';
								}

					}	}	}
					

					if (this.className == "cardOne f3") {
					this.style.backgroundColor = '#33f9529c';
						for (var i = 0; i < $('.cardTwo').length; i++) {
							$('.cardTwo')[i].onclick = function(){
								if (this.className == "cardTwo f3") {
								this.style.backgroundColor = '#33f9529c';
								}

					}	}	}

					if (this.className == "cardOne f4") {
					this.style.backgroundColor = '#33f9529c';
						for (var i = 0; i < $('.cardTwo').length; i++) {
							$('.cardTwo')[i].onclick = function(){
								if (this.className == "cardTwo f4") {
								this.style.backgroundColor = '#33f9529c';
								}

					}	}	}

					if (this.className == "cardOne f5") {
					this.style.backgroundColor = '#33f9529c';
						for (var i = 0; i < $('.cardTwo').length; i++) {
							$('.cardTwo')[i].onclick = function(){
								if (this.className == "cardTwo f5") {
								this.style.backgroundColor = '#33f9529c';
								}

					}	}	}

			}

	}
	
}