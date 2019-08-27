(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/alertifyjs/build/css/alertify.css":
/*!********************************************************!*\
  !*** ./node_modules/alertifyjs/build/css/alertify.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../raw-loader!../../../postcss-loader/lib??embedded!./alertify.css */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/alertifyjs/build/css/alertify.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/alertifyjs/build/css/alertify.css":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./node_modules/alertifyjs/build/css/alertify.css ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\r\n * alertifyjs 1.11.1 http://alertifyjs.com\r\n * AlertifyJS is a javascript framework for developing pretty browser dialogs and notifications.\r\n * Copyright 2018 Mohammad Younes <Mohammad@alertifyjs.com> (http://alertifyjs.com) \r\n * Licensed under GPL 3 <https://opensource.org/licenses/gpl-3.0>*/\r\n.alertify .ajs-dimmer {\n  position: fixed;\n  z-index: 1981;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 0;\n  margin: 0;\n  background-color: #252525;\n  opacity: .5;\n}\r\n.alertify .ajs-modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  padding: 0;\n  overflow-y: auto;\n  z-index: 1981;\n}\r\n.alertify .ajs-dialog {\n  position: relative;\n  margin: 5% auto;\n  min-height: 110px;\n  max-width: 500px;\n  padding: 24px 24px 0 24px;\n  outline: 0;\n  background-color: #fff;\n}\r\n.alertify .ajs-dialog.ajs-capture:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: block;\n  z-index: 1;\n}\r\n.alertify .ajs-reset {\n  position: absolute !important;\n  display: inline !important;\n  width: 0 !important;\n  height: 0 !important;\n  opacity: 0 !important;\n}\r\n.alertify .ajs-commands {\n  position: absolute;\n  right: 4px;\n  margin: -14px 24px 0 0;\n  z-index: 2;\n}\r\n.alertify .ajs-commands button {\n  display: none;\n  width: 10px;\n  height: 10px;\n  margin-left: 10px;\n  padding: 10px;\n  border: 0;\n  background-color: transparent;\n  background-repeat: no-repeat;\n  background-position: center;\n  cursor: pointer;\n}\r\n.alertify .ajs-commands button.ajs-close {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwNy8xMy8xNOrZqugAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAAh0lEQVQYlY2QsQ0EIQwEB9cBAR1CJUaI/gigDnwR6NBL/7/xWLNrZ2b8EwGotVpr7eOitWa1VjugiNB7R1UPrKrWe0dEAHBbXUqxMQbeewDmnHjvyTm7C3zDwAUd9c63YQdUVdu6EAJzzquz7HXvTiklt+H9DQFYaxFjvDqllFyMkbXWvfpXHjJrWFgdBq/hAAAAAElFTkSuQmCC);\n}\r\n.alertify .ajs-commands button.ajs-maximize {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwNy8xMy8xNOrZqugAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAAOUlEQVQYlWP8//8/AzGAhYGBgaG4uBiv6t7eXkYmooxjYGAgWiELsvHYFMCcRX2rSXcjoSBiJDbAAeD+EGu+8BZcAAAAAElFTkSuQmCC);\n}\r\n.alertify .ajs-header {\n  margin: -24px;\n  margin-bottom: 0;\n  padding: 16px 24px;\n  background-color: #fff;\n}\r\n.alertify .ajs-body {\n  min-height: 56px;\n}\r\n.alertify .ajs-body .ajs-content {\n  padding: 16px 24px 16px 16px;\n}\r\n.alertify .ajs-footer {\n  padding: 4px;\n  margin-left: -24px;\n  margin-right: -24px;\n  min-height: 43px;\n  background-color: #fff;\n}\r\n.alertify .ajs-footer .ajs-buttons.ajs-primary {\n  text-align: right;\n}\r\n.alertify .ajs-footer .ajs-buttons.ajs-primary .ajs-button {\n  margin: 4px;\n}\r\n.alertify .ajs-footer .ajs-buttons.ajs-auxiliary {\n  float: left;\n  clear: none;\n  text-align: left;\n}\r\n.alertify .ajs-footer .ajs-buttons.ajs-auxiliary .ajs-button {\n  margin: 4px;\n}\r\n.alertify .ajs-footer .ajs-buttons .ajs-button {\n  min-width: 88px;\n  min-height: 35px;\n}\r\n.alertify .ajs-handle {\n  position: absolute;\n  display: none;\n  width: 10px;\n  height: 10px;\n  right: 0;\n  bottom: 0;\n  z-index: 1;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwNy8xMS8xNEDQYmMAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAAQ0lEQVQYlaXNMQoAIAxD0dT7H657l0KX3iJuUlBUNOsPPCGJm7VDp6ryeMxMuDsAQH7owW3pyn3RS26iKxERMLN3ugOaAkaL3sWVigAAAABJRU5ErkJggg==);\n  -webkit-transform: scaleX(1) /*rtl:scaleX(-1)*/;\n          transform: scaleX(1) /*rtl:scaleX(-1)*/;\n  cursor: se-resize;\n}\r\n.alertify.ajs-no-overflow .ajs-body .ajs-content {\n  overflow: hidden !important;\n}\r\n.alertify.ajs-no-padding.ajs-maximized .ajs-body .ajs-content {\n  left: 0;\n  right: 0;\n  padding: 0;\n}\r\n.alertify.ajs-no-padding:not(.ajs-maximized) .ajs-body {\n  margin-left: -24px;\n  margin-right: -24px;\n}\r\n.alertify.ajs-no-padding:not(.ajs-maximized) .ajs-body .ajs-content {\n  padding: 0;\n}\r\n.alertify.ajs-no-padding.ajs-resizable .ajs-body .ajs-content {\n  left: 0;\n  right: 0;\n}\r\n.alertify.ajs-maximizable .ajs-commands button.ajs-maximize,\n.alertify.ajs-maximizable .ajs-commands button.ajs-restore {\n  display: inline-block;\n}\r\n.alertify.ajs-closable .ajs-commands button.ajs-close {\n  display: inline-block;\n}\r\n.alertify.ajs-maximized .ajs-dialog {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: none !important;\n  margin: 0 auto !important;\n  top: 0 !important;\n  left: 0 !important;\n}\r\n.alertify.ajs-maximized.ajs-modeless .ajs-modal {\n  position: fixed !important;\n  min-height: 100% !important;\n  max-height: none !important;\n  margin: 0 !important;\n}\r\n.alertify.ajs-maximized .ajs-commands button.ajs-maximize {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwNy8xMy8xNOrZqugAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAASklEQVQYlZWQ0QkAMQhDtXRincOZX78KVtrDCwgqJNEoIB3MPLj7lRUROlpyVXGzby6zWuY+kz6tj5sBMTMAyVV3/595RbOh3cAXsww1raeiOcoAAAAASUVORK5CYII=);\n}\r\n.alertify.ajs-resizable .ajs-dialog,\n.alertify.ajs-maximized .ajs-dialog {\n  padding: 0;\n}\r\n.alertify.ajs-resizable .ajs-commands,\n.alertify.ajs-maximized .ajs-commands {\n  margin: 14px 24px 0 0;\n}\r\n.alertify.ajs-resizable .ajs-header,\n.alertify.ajs-maximized .ajs-header {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  margin: 0;\n  padding: 16px 24px;\n}\r\n.alertify.ajs-resizable .ajs-body,\n.alertify.ajs-maximized .ajs-body {\n  min-height: 224px;\n  display: inline-block;\n}\r\n.alertify.ajs-resizable .ajs-body .ajs-content,\n.alertify.ajs-maximized .ajs-body .ajs-content {\n  position: absolute;\n  top: 50px;\n  right: 24px;\n  bottom: 50px;\n  left: 24px;\n  overflow: auto;\n}\r\n.alertify.ajs-resizable .ajs-footer,\n.alertify.ajs-maximized .ajs-footer {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 0;\n}\r\n.alertify.ajs-resizable:not(.ajs-maximized) .ajs-dialog {\n  min-width: 548px;\n}\r\n.alertify.ajs-resizable:not(.ajs-maximized) .ajs-handle {\n  display: block;\n}\r\n.alertify.ajs-movable:not(.ajs-maximized) .ajs-header {\n  cursor: move;\n}\r\n.alertify.ajs-modeless .ajs-dimmer,\n.alertify.ajs-modeless .ajs-reset {\n  display: none;\n}\r\n.alertify.ajs-modeless .ajs-modal {\n  overflow: visible;\n  max-width: none;\n  max-height: 0;\n}\r\n.alertify.ajs-modeless.ajs-pinnable .ajs-commands button.ajs-pin {\n  display: inline-block;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwNy8xMy8xNOrZqugAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAAQklEQVQYlcWPMQ4AIAwCqU9u38GbcbHRWN1MvKQDhQFMEpKImGJA0gCgnYw0V0rwxseg5erT4oSkQVI5d9f+e9+xA0NbLpWfitPXAAAAAElFTkSuQmCC);\n}\r\n.alertify.ajs-modeless.ajs-unpinned .ajs-modal {\n  position: absolute;\n}\r\n.alertify.ajs-modeless.ajs-unpinned .ajs-commands button.ajs-pin {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwNy8xMy8xNOrZqugAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAAO0lEQVQYlWP8//8/AzGAiShV6AqLi4txGs+CLoBLMYbC3t5eRmyaWfBZhwwYkX2NTxPRvibKjRhW4wMAhxkYGbLu3pEAAAAASUVORK5CYII=);\n}\r\n.alertify.ajs-modeless:not(.ajs-unpinned) .ajs-body {\n  max-height: 500px;\n  overflow: auto;\n}\r\n.alertify.ajs-basic .ajs-header {\n  opacity: 0;\n}\r\n.alertify.ajs-basic .ajs-footer {\n  visibility: hidden;\n}\r\n.alertify.ajs-frameless .ajs-header {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  min-height: 60px;\n  margin: 0;\n  padding: 0;\n  opacity: 0;\n  z-index: 1;\n}\r\n.alertify.ajs-frameless .ajs-footer {\n  display: none;\n}\r\n.alertify.ajs-frameless .ajs-body .ajs-content {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\r\n.alertify.ajs-frameless:not(.ajs-resizable) .ajs-dialog {\n  padding-top: 0;\n}\r\n.alertify.ajs-frameless:not(.ajs-resizable) .ajs-dialog .ajs-commands {\n  margin-top: 0;\n}\r\n.ajs-no-overflow {\n  overflow: hidden !important;\n  outline: none;\n}\r\n.ajs-no-overflow.ajs-fixed {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow-y: scroll!important;\n}\r\n.ajs-no-selection,\n.ajs-no-selection * {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\r\n@media screen and (max-width: 568px) {\n  .alertify .ajs-dialog {\n    min-width: 150px;\n  }\n  .alertify:not(.ajs-maximized) .ajs-modal {\n    padding: 0 5%;\n  }\n  .alertify:not(.ajs-maximized).ajs-resizable .ajs-dialog {\n    min-width: initial;\n    min-width: auto /*IE fallback*/;\n  }\n}\r\n@-moz-document url-prefix() {\n  .alertify button:focus {\n    outline: 1px dotted #3593D2;\n  }\n}\r\n.alertify .ajs-dimmer,\n.alertify .ajs-modal {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  transition-property: opacity, visibility;\n  transition-timing-function: linear;\n  transition-duration: 250ms;\n}\r\n.alertify.ajs-hidden .ajs-dimmer,\n.alertify.ajs-hidden .ajs-modal {\n  visibility: hidden;\n  opacity: 0;\n}\r\n.alertify.ajs-in:not(.ajs-hidden) .ajs-dialog {\n  -webkit-animation-duration: 500ms;\n          animation-duration: 500ms;\n}\r\n.alertify.ajs-out.ajs-hidden .ajs-dialog {\n  -webkit-animation-duration: 250ms;\n          animation-duration: 250ms;\n}\r\n.alertify .ajs-dialog.ajs-shake {\n  -webkit-animation-name: ajs-shake;\n          animation-name: ajs-shake;\n  -webkit-animation-duration: .1s;\n          animation-duration: .1s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n}\r\n@-webkit-keyframes ajs-shake {\n  0%,\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n            transform: translate3d(-10px, 0, 0);\n  }\n  20%,\n  40%,\n  60%,\n  80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n            transform: translate3d(10px, 0, 0);\n  }\n}\r\n@keyframes ajs-shake {\n  0%,\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n            transform: translate3d(-10px, 0, 0);\n  }\n  20%,\n  40%,\n  60%,\n  80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n            transform: translate3d(10px, 0, 0);\n  }\n}\r\n.alertify.ajs-slide.ajs-in:not(.ajs-hidden) .ajs-dialog {\n  -webkit-animation-name: ajs-slideIn;\n          animation-name: ajs-slideIn;\n  -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\r\n.alertify.ajs-slide.ajs-out.ajs-hidden .ajs-dialog {\n  -webkit-animation-name: ajs-slideOut;\n          animation-name: ajs-slideOut;\n  -webkit-animation-timing-function: cubic-bezier(0.6, -0.28, 0.735, 0.045);\n          animation-timing-function: cubic-bezier(0.6, -0.28, 0.735, 0.045);\n}\r\n.alertify.ajs-zoom.ajs-in:not(.ajs-hidden) .ajs-dialog {\n  -webkit-animation-name: ajs-zoomIn;\n          animation-name: ajs-zoomIn;\n}\r\n.alertify.ajs-zoom.ajs-out.ajs-hidden .ajs-dialog {\n  -webkit-animation-name: ajs-zoomOut;\n          animation-name: ajs-zoomOut;\n}\r\n.alertify.ajs-fade.ajs-in:not(.ajs-hidden) .ajs-dialog {\n  -webkit-animation-name: ajs-fadeIn;\n          animation-name: ajs-fadeIn;\n}\r\n.alertify.ajs-fade.ajs-out.ajs-hidden .ajs-dialog {\n  -webkit-animation-name: ajs-fadeOut;\n          animation-name: ajs-fadeOut;\n}\r\n.alertify.ajs-pulse.ajs-in:not(.ajs-hidden) .ajs-dialog {\n  -webkit-animation-name: ajs-pulseIn;\n          animation-name: ajs-pulseIn;\n}\r\n.alertify.ajs-pulse.ajs-out.ajs-hidden .ajs-dialog {\n  -webkit-animation-name: ajs-pulseOut;\n          animation-name: ajs-pulseOut;\n}\r\n.alertify.ajs-flipx.ajs-in:not(.ajs-hidden) .ajs-dialog {\n  -webkit-animation-name: ajs-flipInX;\n          animation-name: ajs-flipInX;\n}\r\n.alertify.ajs-flipx.ajs-out.ajs-hidden .ajs-dialog {\n  -webkit-animation-name: ajs-flipOutX;\n          animation-name: ajs-flipOutX;\n}\r\n.alertify.ajs-flipy.ajs-in:not(.ajs-hidden) .ajs-dialog {\n  -webkit-animation-name: ajs-flipInY;\n          animation-name: ajs-flipInY;\n}\r\n.alertify.ajs-flipy.ajs-out.ajs-hidden .ajs-dialog {\n  -webkit-animation-name: ajs-flipOutY;\n          animation-name: ajs-flipOutY;\n}\r\n@-webkit-keyframes ajs-pulseIn {\n  0%,\n  20%,\n  40%,\n  60%,\n  80%,\n  100% {\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n            transform: scale3d(0.3, 0.3, 0.3);\n  }\n  20% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n            transform: scale3d(1.1, 1.1, 1.1);\n  }\n  40% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\n            transform: scale3d(0.9, 0.9, 0.9);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\n            transform: scale3d(1.03, 1.03, 1.03);\n  }\n  80% {\n    -webkit-transform: scale3d(0.97, 0.97, 0.97);\n            transform: scale3d(0.97, 0.97, 0.97);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n}\r\n@keyframes ajs-pulseIn {\n  0%,\n  20%,\n  40%,\n  60%,\n  80%,\n  100% {\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n            transform: scale3d(0.3, 0.3, 0.3);\n  }\n  20% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n            transform: scale3d(1.1, 1.1, 1.1);\n  }\n  40% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\n            transform: scale3d(0.9, 0.9, 0.9);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\n            transform: scale3d(1.03, 1.03, 1.03);\n  }\n  80% {\n    -webkit-transform: scale3d(0.97, 0.97, 0.97);\n            transform: scale3d(0.97, 0.97, 0.97);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n}\r\n@-webkit-keyframes ajs-pulseOut {\n  20% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\n            transform: scale3d(0.9, 0.9, 0.9);\n  }\n  50%,\n  55% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n            transform: scale3d(1.1, 1.1, 1.1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n            transform: scale3d(0.3, 0.3, 0.3);\n  }\n}\r\n@keyframes ajs-pulseOut {\n  20% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\n            transform: scale3d(0.9, 0.9, 0.9);\n  }\n  50%,\n  55% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n            transform: scale3d(1.1, 1.1, 1.1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n            transform: scale3d(0.3, 0.3, 0.3);\n  }\n}\r\n@-webkit-keyframes ajs-zoomIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.25, 0.25, 0.25);\n            transform: scale3d(0.25, 0.25, 0.25);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n}\r\n@keyframes ajs-zoomIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.25, 0.25, 0.25);\n            transform: scale3d(0.25, 0.25, 0.25);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n}\r\n@-webkit-keyframes ajs-zoomOut {\n  0% {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.25, 0.25, 0.25);\n            transform: scale3d(0.25, 0.25, 0.25);\n  }\n}\r\n@keyframes ajs-zoomOut {\n  0% {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.25, 0.25, 0.25);\n            transform: scale3d(0.25, 0.25, 0.25);\n  }\n}\r\n@-webkit-keyframes ajs-fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\r\n@keyframes ajs-fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\r\n@-webkit-keyframes ajs-fadeOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\r\n@keyframes ajs-fadeOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\r\n@-webkit-keyframes ajs-flipInX {\n  0% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n            transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transition-timing-function: ease-in;\n    opacity: 0;\n  }\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n            transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transition-timing-function: ease-in;\n  }\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n            transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1;\n  }\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n            transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n  }\n  100% {\n    -webkit-transform: perspective(400px);\n            transform: perspective(400px);\n  }\n}\r\n@keyframes ajs-flipInX {\n  0% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n            transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transition-timing-function: ease-in;\n    opacity: 0;\n  }\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n            transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transition-timing-function: ease-in;\n  }\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n            transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1;\n  }\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n            transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n  }\n  100% {\n    -webkit-transform: perspective(400px);\n            transform: perspective(400px);\n  }\n}\r\n@-webkit-keyframes ajs-flipOutX {\n  0% {\n    -webkit-transform: perspective(400px);\n            transform: perspective(400px);\n  }\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n            transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n            transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    opacity: 0;\n  }\n}\r\n@keyframes ajs-flipOutX {\n  0% {\n    -webkit-transform: perspective(400px);\n            transform: perspective(400px);\n  }\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n            transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n            transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    opacity: 0;\n  }\n}\r\n@-webkit-keyframes ajs-flipInY {\n  0% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n            transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transition-timing-function: ease-in;\n    opacity: 0;\n  }\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n            transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    transition-timing-function: ease-in;\n  }\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n            transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    opacity: 1;\n  }\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n            transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n  }\n  100% {\n    -webkit-transform: perspective(400px);\n            transform: perspective(400px);\n  }\n}\r\n@keyframes ajs-flipInY {\n  0% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n            transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transition-timing-function: ease-in;\n    opacity: 0;\n  }\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n            transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    transition-timing-function: ease-in;\n  }\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n            transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    opacity: 1;\n  }\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n            transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n  }\n  100% {\n    -webkit-transform: perspective(400px);\n            transform: perspective(400px);\n  }\n}\r\n@-webkit-keyframes ajs-flipOutY {\n  0% {\n    -webkit-transform: perspective(400px);\n            transform: perspective(400px);\n  }\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n            transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n            transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    opacity: 0;\n  }\n}\r\n@keyframes ajs-flipOutY {\n  0% {\n    -webkit-transform: perspective(400px);\n            transform: perspective(400px);\n  }\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n            transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n            transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    opacity: 0;\n  }\n}\r\n@-webkit-keyframes ajs-slideIn {\n  0% {\n    margin-top: -100%;\n  }\n  100% {\n    margin-top: 5%;\n  }\n}\r\n@keyframes ajs-slideIn {\n  0% {\n    margin-top: -100%;\n  }\n  100% {\n    margin-top: 5%;\n  }\n}\r\n@-webkit-keyframes ajs-slideOut {\n  0% {\n    margin-top: 5%;\n  }\n  100% {\n    margin-top: -100%;\n  }\n}\r\n@keyframes ajs-slideOut {\n  0% {\n    margin-top: 5%;\n  }\n  100% {\n    margin-top: -100%;\n  }\n}\r\n.alertify-notifier {\n  position: fixed;\n  width: 0;\n  overflow: visible;\n  z-index: 1982;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\r\n.alertify-notifier .ajs-message {\n  position: relative;\n  width: 260px;\n  max-height: 0;\n  padding: 0;\n  opacity: 0;\n  margin: 0;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  transition-duration: 250ms;\n  transition-timing-function: linear;\n}\r\n.alertify-notifier .ajs-message.ajs-visible {\n  transition-duration: 500ms;\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  opacity: 1;\n  max-height: 100%;\n  padding: 15px;\n  margin-top: 10px;\n}\r\n.alertify-notifier .ajs-message.ajs-success {\n  background: rgba(91, 189, 114, 0.95);\n}\r\n.alertify-notifier .ajs-message.ajs-error {\n  background: rgba(217, 92, 92, 0.95);\n}\r\n.alertify-notifier .ajs-message.ajs-warning {\n  background: rgba(252, 248, 215, 0.95);\n}\r\n.alertify-notifier .ajs-message .ajs-close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAABGdBTUEAALGPC/xhBQAAAFBJREFUGBl1j0EKADEIA+ve/P9f9bh1hEihNBfjVCO1v7RKVqJK4h8gM5cAPR42AkQEpSXPwMTyoi13n5N9YqJehm3Fnr7nL1D0ZEbD5OubGyC7a9gx+9eNAAAAAElFTkSuQmCC);\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-top-right-radius: 2px;\n}\r\n.alertify-notifier.ajs-top {\n  top: 10px;\n}\r\n.alertify-notifier.ajs-bottom {\n  bottom: 10px;\n}\r\n.alertify-notifier.ajs-right {\n  right: 10px;\n}\r\n.alertify-notifier.ajs-right .ajs-message {\n  right: -320px;\n}\r\n.alertify-notifier.ajs-right .ajs-message.ajs-visible {\n  right: 290px;\n}\r\n.alertify-notifier.ajs-left {\n  left: 10px;\n}\r\n.alertify-notifier.ajs-left .ajs-message {\n  left: -300px;\n}\r\n.alertify-notifier.ajs-left .ajs-message.ajs-visible {\n  left: 0;\n}\r\n.alertify-notifier.ajs-center {\n  left: 50%;\n}\r\n.alertify-notifier.ajs-center .ajs-message {\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\r\n.alertify-notifier.ajs-center .ajs-message.ajs-visible {\n  left: 50%;\n  transition-timing-function: cubic-bezier(0.57, 0.43, 0.1, 0.65);\n}\r\n.alertify-notifier.ajs-center.ajs-top .ajs-message {\n  top: -300px;\n}\r\n.alertify-notifier.ajs-center.ajs-top .ajs-message.ajs-visible {\n  top: 0;\n}\r\n.alertify-notifier.ajs-center.ajs-bottom .ajs-message {\n  bottom: -300px;\n}\r\n.alertify-notifier.ajs-center.ajs-bottom .ajs-message.ajs-visible {\n  bottom: 0;\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./src/styles.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nbody{\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  margin: 0;\n}\ninput ,textarea{\n  padding: 4px;\n  margin: 6px 0 6px 10px;\n  width: 90%;\n}\n.price{\n  width: 150px;\n}\n.but-save {\n  font-family: monospace;\n  font-size: 17px;\n  width: 75px;\n  height: 30px;\n  background: #78b72e;\n  text-align: center;\n  border: solid 1px #b1aaaa;\n  border-radius: 10px;\n  line-height: 1.5;\n  margin: 6px 5px 0 0;\n  box-shadow: 0 1px 2px 0px #B1AAAB;\n  cursor: pointer;\n  position: -webkit-sticky;\n  position: sticky;\n  left: 100%;\n}\n"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/raw-loader!../node_modules/postcss-loader/lib??embedded!./styles.css */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*******************************************************************************!*\
  !*** multi ./src/styles.css ./node_modules/alertifyjs/build/css/alertify.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\נתנאל מנצור\Desktop\demo\msbitTask\src\styles.css */"./src/styles.css");
module.exports = __webpack_require__(/*! C:\Users\נתנאל מנצור\Desktop\demo\msbitTask\node_modules\alertifyjs\build\css\alertify.css */"./node_modules/alertifyjs/build/css/alertify.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map