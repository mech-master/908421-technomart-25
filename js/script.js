function dataCounterIncrease(counterClass, attributeName) {
	var elt = document.querySelector("." + counterClass);
	return function(event){
		if (counterClass == "toolbar-cart") {
			var modalCartAdd = document.querySelector(".view-port-cart-add");
			modalCartAdd.classList.add("opened");
		}
		event.preventDefault();
		elt.setAttribute(attributeName, parseInt(elt.getAttribute(attributeName))+1);
	};
}


function setEventCounterIncrease(buttonClass, counterClass, attributeName) {
	var elementList = document.querySelectorAll("." + buttonClass);
	for (var i=0; i < elementList.length; i++) {
		elementList[i].addEventListener("click", dataCounterIncrease(counterClass, attributeName));
	}
}

function closeModalWindow() {
	var modalWindow = document.querySelector(".view-port.opened");
	modalWindow.classList.remove("opened");
}

function setEventCloseModal() {
	var elementList = document.querySelectorAll(".modal-close");
	for (var j=0; j < elementList.length; j++) {
		elementList[j].addEventListener("click", closeModalWindow);
	}
}

function changeServiceSlide(event) {
	var sliderControlList = this.parentElement.parentElement;
	var activeControlButton = document.querySelector(".slider-button.active");
	var clickedControlButton = this.parentElement;
	for (var i = 0; i < sliderControlList.children.length; i++) {
		if (sliderControlList.children[i] === clickedControlButton) {
			activeControlButton.classList.remove("active");
			var activeElement = document.querySelector(".services-slide-item.active");
			activeElement.classList.remove("active");
			var serviceSliderList = document.querySelector(".services-slides");
			serviceSliderList.children[i].classList.add("active");
			this.classList.add("active");
			break;
		};
	}
}

function setEventServiceSliderClick() {
	var elementList = document.querySelectorAll(".slider-button");
	for (var k=0; k < elementList.length; k++) {
		elementList[k].addEventListener("click", changeServiceSlide);
	}
}

function changePromoSlide(event) {
	var promoControlList = document.querySelector(".promo-slide-list");
	var activeControlButton = document.querySelector(".slider-turn.active");
	var buttonPrev = document.querySelector(".button-prev");
	var buttonNext = document.querySelector(".button-next");
	var activeSlide = document.querySelector(".promo-slide.active");
	var promoSlideList = document.querySelector(".promo-slider-slides");
	for (var i=0; i < promoControlList.children.length; i++) {
		if (promoControlList.children[i] === this.parentElement) {
			activeControlButton.classList.remove("active");
			activeSlide.classList.remove("active");
			this.classList.add("active");
			promoSlideList.children[i].classList.add("active");
			if(this.parentElement.previousElementSibling) {
				buttonPrev.removeAttribute("disabled");
			} else {
				buttonPrev.setAttribute("disabled", true);
			};
			if(this.parentElement.nextElementSibling) {
				buttonNext.removeAttribute("disabled");
			} else {
				buttonNext.setAttribute("disabled", true);
			};
			break;
		}
	}
}


function setEventPromoSliderClick() {
	var elementList = document.querySelectorAll(".slider-turn");
	for (var k=0; k < elementList.length; k++) {
		elementList[k].addEventListener("click", changePromoSlide);
	}
}

function switchPromoPrevSlide() {
	var activeControlButton = document.querySelector(".slider-turn.active");
	activeControlButton.parentElement.previousElementSibling.children[0].click();
}

function switchPromoNextSlide() {
	var activeControlButton = document.querySelector(".slider-turn.active");
	activeControlButton.parentElement.nextElementSibling.children[0].click();
}


function setEventSwitchPromoSlide() {
	var buttonPrev = document.querySelector(".button-prev");
	var buttonNext = document.querySelector(".button-next");
	if (buttonPrev) {buttonPrev.addEventListener("click", switchPromoPrevSlide);};
	if (buttonNext) {buttonNext.addEventListener("click", switchPromoNextSlide);};
}


function setEventWriteUsFormOpen() {
	var buttonWriteUs = document.querySelector(".button-write-us");
	if (buttonWriteUs) {
		buttonWriteUs.addEventListener("click", 
			function(event) {
				var modalWriteUs = document.querySelector(".view-port-write-us");
				event.preventDefault();
				modalWriteUs.classList.add("opened");
			}
		)
	}
}

function setEventShowMap() {
	var buttonListShowMap = document.querySelectorAll(".interactive-map");
	for (var i=0; i < buttonListShowMap.length; i++) {
		buttonListShowMap[i].addEventListener("click", 
			function(event){
				var modalMap = document.querySelector(".view-port-map");
				event.preventDefault();
				modalMap.classList.add("opened");
			}
		)
	}
}

setEventCounterIncrease("add-bookmarks", "toolbar-bookmarks", "data-bookmark-count");
setEventCounterIncrease("add-cart", "toolbar-cart", "data-good-count");
setEventPromoSliderClick();
setEventSwitchPromoSlide();
setEventServiceSliderClick();

setEventWriteUsFormOpen();
setEventShowMap();
setEventCloseModal();