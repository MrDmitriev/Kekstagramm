"use strict";
(function () {
	var STEP = 25;
	var MIN_SCALE = 25;
	var pictureScale = document.querySelector(".img-upload__scale");
	var picture = document.querySelector(".img-upload__preview").querySelector("img");
	var smallerButton = pictureScale.querySelector(".scale__control--smaller");
	var biggerButton = pictureScale.querySelector(".scale__control--bigger");
	var scaleValue = pictureScale.querySelector(".scale__control--value"); 

	var setScaleValue = function (value) {
		scaleValue.value = value + "%";
	};
	window.editPic = {
		setScaleValue: setScaleValue
	};

	var setPictureScale = function (value) {
		picture.style.transform = "scale(" + value/100 + ")";
	};

	var onBiggerButtonClick = function () {
		var currentValue = scaleValue.value;
		var newValue = parseInt(currentValue, 10) + STEP;
		newValue = newValue > 100 ? 100 : newValue;
		setScaleValue(newValue);
		setPictureScale(newValue);
	};

	var onSmallerButtonClick = function () {
		var currentValue = scaleValue.value;
		var newValue = parseInt(currentValue, 10) - STEP;
		newValue = newValue < MIN_SCALE ? MIN_SCALE : newValue;
		setScaleValue(newValue);
		setPictureScale(newValue);
	};

	biggerButton.addEventListener("click", onBiggerButtonClick);
	smallerButton.addEventListener("click", onSmallerButtonClick);

	window.editPic = {
		setScaleValue: setScaleValue
	};
})();