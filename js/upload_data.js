"use strict";
(function () {
	var SUCCESS_UPLOAD = 200;
	var TIMEOUT_VALUE = 1000;
	var URL = "https://js.dump.academy/kekstagram";

	window.dataUpload = function (data, onSuccess, onError) {
		var xhr = new XMLHttpRequest();

		xhr.responseType = "json";
		xhr.addEventListener("error", function () {
			onError("ошибка отправки формы", "upload");
		});

		xhr.addEventListener("load", function () {
			if (xhr.status === SUCCESS_UPLOAD) {
				onSuccess(xhr.response);
			} else {
				onError("ошибка отправки формы", "upload");
			}
		});

		xhr.timeout = TIMEOUT_VALUE;
		xhr.open("POST", URL);
		xhr.send(data);
	};
})();