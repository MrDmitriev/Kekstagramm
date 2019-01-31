"use strict";
(function () {
	var ESC_KEYCODE = 27;
	var commentTemplate = document.querySelector(".social__comments").querySelector(".social__comment");
	var commentsContainer = document.querySelector(".social__comments");
	var bigPictureContainer = document.querySelector(".big-picture");
	var cancelButton = document.querySelector(".big-picture__cancel");

	var openPopup = function (photo) {
		bigPictureContainer.querySelector(".big-picture__img").querySelector("img").src = photo.url;
		bigPictureContainer.querySelector(".big-picture__img").querySelector("img").alt = photo.url;
		renderCommentsList(photo);
		bigPictureContainer.classList.remove("hidden");
		document.querySelector("body").classList.add("modal-open");
		cancelButton.addEventListener("click", window.popup.cancelBigPicture);
		document.addEventListener("keydown", window.popup.onPopupEscPress);
	};

	var renderComment = function (photo) {
		var commentTemplateCopy = commentTemplate.cloneNode(true);
		commentTemplateCopy.querySelector("img").src = photo.avatar; 
		commentTemplateCopy.querySelector("p").textContent = photo.message;
		return commentTemplateCopy;
	};

	var removeComments = function () {
		var commentsList = commentsContainer.querySelectorAll(".social__comment");
		if (commentsList.length > 0) {
			commentsList.forEach(function (el) {
				commentsContainer.removeChild(el);
			});
		}
	};

	var renderCommentsList = function (photo) {
		var fragment = document.createDocumentFragment();
		photo.comments.forEach(function (el) {
			fragment.appendChild(renderComment(el));
		});
		removeComments();
		commentsContainer.appendChild(fragment);
	};

	var cancelBigPicture = function () {
		removeComments();
		bigPictureContainer.classList.add("hidden");
		cancelButton.removeEventListener("click", cancelBigPicture);
		document.removeEventListener("keydown", onPopupEscPress);
	};

	var onPopupEscPress = function (evt) {
		if (evt.keyCode === ESC_KEYCODE) {
			cancelBigPicture();
		}
	};

	window.popup = {
		renderCommentsList: renderCommentsList,
		onPopupEscPress: onPopupEscPress,
		cancelBigPicture: cancelBigPicture,
		open: openPopup
	};

})();