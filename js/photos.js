"use strict";
(function () {
	var photoTemplate = document.querySelector("#picture");
	var picturesContainer = document.querySelector(".pictures");

	var renderPhotoElement = function (photo) {
		var photoTemplateCopy = photoTemplate.cloneNode(true);
		var pictureContainer = photoTemplateCopy.content.querySelector(".picture");
		var picture = pictureContainer.querySelector("img");
		picture.src = photo.url;
		picture.addEventListener("click", function () {
			window.popup.open(photo);
		});
		return pictureContainer;
	};

	var renderPhotoList = function (photos) {
		var fragment = document.createDocumentFragment();
		photos.forEach(function (el) {
			fragment.appendChild(renderPhotoElement(el));
		});
		picturesContainer.insertBefore(fragment, picturesContainer.children[1]);
	};

	window.loadData(renderPhotoList);
})();