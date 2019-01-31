(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var useCases = [{
  text: "success messages",
  className: 'success'
}, {
  text: "error messages",
  className: 'error'
}, {
  text: "warning modals",
  className: 'warning'
}];

var currentIndex = 0;

var initRotater = function initRotater() {
  updateUseCase(true);
  setInterval(updateUseCase, 4000);
};

var updateUseCase = function updateUseCase(isInitial) {
  var useCase = useCases[currentIndex];
  var nextUseCase = useCases[getNextIndex()];

  updateText(useCase, nextUseCase);
  updateModal(useCase, nextUseCase, isInitial);

  currentIndex = getNextIndex();
};

var updateModal = function updateModal(useCase, nextUseCase, isInitial) {
  var className = useCase.className;


  var contentOverlayEl = document.querySelector('.modal-content-overlay');

  if (!contentOverlayEl) return;

  if (!isInitial) {
    contentOverlayEl.classList.add('show');
  }

  var modalEl = document.querySelector('.swal-modal-example');

  modalEl.dataset.type = className;

  var contentEls = document.querySelectorAll('.example-content');

  setTimeout(function () {
    contentEls.forEach(function (contentEl) {
      if (contentEl.classList.contains(className)) {
        contentEl.classList.add('show');
      } else {
        contentEl.classList.remove('show');
      }
    });

    contentOverlayEl.classList.remove('show');
  }, 500);
};

var updateText = function updateText(useCase, nextUseCase) {
  var text = useCase.text;
  var nextText = nextUseCase.text;


  var rotatorEl = document.querySelector('.text-rotater');

  if (!rotatorEl) return;

  rotatorEl.classList.add('slide-up');

  setTimeout(function () {
    rotatorEl.innerHTML = "\n      <span>" + text + "</span>\n      <span>" + nextText + "</span>\n    ";
    rotatorEl.classList.remove('slide-up');
  }, 2000);
};

var getNextIndex = function getNextIndex() {
  if (useCases[currentIndex + 1]) {
    return currentIndex + 1;
  } else {
    return 0;
  }
};

exports.default = initRotater();

},{}]},{},[1]);
