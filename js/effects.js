"use strict";
(function () {
	var PHOBOS_LIMIT = {
		MIN: 0,
		MAX: 3
	};
	var HEAT_LIMIT = {
		MIN: 1,
		MAX: 3
	};
	var HEAT_INTERVAL = HEAT_LIMIT.MAX - HEAT_LIMIT.MIN;
	var PHOBOS_INTERVAL = PHOBOS_LIMIT.MAX - PHOBOS_LIMIT.MIN;
	var DEFAULT_EFFECT_LEVEL = 100;
	var editFormContainer = document.querySelector(".img-upload__preview-container");
	var effectLevelDepth = editFormContainer.querySelector(".effect-level__depth");
	var effectLevelPin = editFormContainer.querySelector(".effect-level__pin");
	var effectLine = editFormContainer.querySelector(".img-upload__effect-level");
	var picture = editFormContainer.querySelector(".img-upload__preview").querySelector("img");
	var effectsContainer = document.querySelector(".img-upload__effects");
	var effectsList = effectsContainer.querySelectorAll("input");
	var effectOriginal = document.querySelector("#effect-none");

	var setOriginalEffect = function () {
		effectLine.classList.add("hidden");
		picture.style.filter = "";
	};

	var shiftEffect = function () {
		effectLine.classList.remove("hidden");
		effectLevelDepth.style.width = "100%";
		effectLevelPin.style.left = effectLevelPin.offsetParent.clientWidth + "px";
		addEffect(DEFAULT_EFFECT_LEVEL);
	};

	effectsList.forEach(function (el) {
		if (el.value !== "none") {
			el.addEventListener("click", shiftEffect);
		}
	});

	effectOriginal.addEventListener("click", setOriginalEffect);

	var EffectTypes = {
		"chrome": function (value) {
			return "grayscale(" + value + "%)";
		},
		"sepia": function (value) {
			return "sepia(" + value + "%)";
		},
		"marvin": function (value) {
			return "invert(" + value + "%)";
		},
		"phobos": function (value) {
			var correctedValue = value * PHOBOS_INTERVAL / 100;
			return "blur(" + correctedValue + "px)";
		},
		"heat": function (value) {
			var correctedValue = HEAT_LIMIT.MIN + value * HEAT_INTERVAL / 100;
			return "brightness(" + correctedValue + ")";
		}
	};

	var addEffect = function (sliderValue) {
		var value = sliderValue;
		var checkedEffect = [].filter.call(effectsList, function (el) {
			return el.checked; 
		});
		picture.style.filter = EffectTypes[checkedEffect[0].value](value); 
	};

	window.effects = {
		addEffect: addEffect,
		shift: shiftEffect
	};

})();