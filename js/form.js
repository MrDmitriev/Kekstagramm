"use strict";
(function () {
	var ESC_KEYCODE = 27;
	var DEFAULT_SCALE = 100; 
	var uploadContainer = document.querySelector(".img-upload");
	var uploadFormButton = document.querySelector("#upload-file");
	var editionForm = uploadContainer.querySelector(".img-upload__overlay");
	var editionFormCancelButton = document.querySelector("#upload-cancel");
	
	var onPopupEscPress = function (evt) {
		if (evt.keyCode === ESC_KEYCODE) {
			cancelEditionForm();
		}
	};

	var openEditionForm = function () {
		editionForm.classList.remove("hidden");
		editionFormCancelButton.addEventListener("click", cancelEditionForm);
		document.addEventListener("keydown", onPopupEscPress);
		window.editPic.setScaleValue(DEFAULT_SCALE);
	};

	var cancelEditionForm = function () {
		editionForm.classList.add("hidden");
		document.removeEventListener("keydown", onPopupEscPress);
		editionFormCancelButton.removeEventListener("click", cancelEditionForm);
	};

	uploadFormButton.addEventListener("change", openEditionForm);
})();