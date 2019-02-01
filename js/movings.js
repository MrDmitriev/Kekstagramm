"use strict";
(function () {
	var moveEffectLevelPin = function () {
		var editFormContainer = document.querySelector(".img-upload__preview-container");
		var effectLevelDepth = editFormContainer.querySelector(".effect-level__depth");
		var effectLevelPin = editFormContainer.querySelector(".effect-level__pin");

		effectLevelPin.addEventListener("mousedown", function (evt) {
			evt.preventDefault();

			var startCoords = {
				x: evt.clientX,
				y: evt.clientY
			};

			var onMouseMove = function (moveEvt) {
				moveEvt.preventDefault();
				var lineLimitRight = effectLevelPin.offsetParent.clientWidth;
				var lineLimitLeft = effectLevelPin.offsetParent.clientLeft;

				var shift = {
					x: startCoords.x - moveEvt.clientX
				};

				var newCoordX = effectLevelPin.offsetLeft - shift.x;

				startCoords = {
					x: moveEvt.clientX
				};

				if (newCoordX > lineLimitRight) {
					newCoordX = lineLimitRight;
				} else if (newCoordX < lineLimitLeft) {
					newCoordX = lineLimitLeft;
				}

				effectLevelPin.style.left = newCoordX + "px";
				effectLevelDepth.style.width = 100 * newCoordX/lineLimitRight + "%";

			};

			var onMouseUp = function (upEvt) {
				upEvt.preventDefault();
				document.removeEventListener("mousemove", onMouseMove);
				document.removeEventListener("mouseup", onMouseUp);
			};
			document.addEventListener("mousemove", onMouseMove);
			document.addEventListener("mouseup", onMouseUp);
		});
	};

	moveEffectLevelPin();
})();