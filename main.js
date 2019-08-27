(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-product/add-product.component.css":
/*!*******************************************************!*\
  !*** ./src/app/add-product/add-product.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-product {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  margin: auto;\r\n  background: white;\r\n  height: 355px;\r\n  border: solid 1px #d6d6d6;\r\n  width: 50%;\r\n  box-shadow: 0px 21px 200px 16px #404040;\r\n  border-radius: 7px;\r\n\r\n  visibility: visible;\r\n  -webkit-animation: fadeIn 1s;\r\n  animation: fadeIn 1s;\r\n}\r\n\r\n@-webkit-keyframes fadeIn {\r\n  from {opacity: 0;}\r\n  to {opacity: 1;}\r\n}\r\n\r\n@keyframes fadeIn {\r\n  from {opacity: 0;}\r\n  to {opacity:1 ;}\r\n}\r\n\r\n.key {\r\n  padding: 0  0 0 8px;\r\n}\r\n\r\n.img-close{\r\n  position: absolute;\r\n  right: 0;\r\n  padding: 4px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/add-product/add-product.component.html":
/*!********************************************************!*\
  !*** ./src/app/add-product/add-product.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add-product\" >\n\n  <img class=\"img-close\" [src]=\"'./assets/close.png'\" (click)=\"onClosePopup()\">\n  <div>\n    <div class=\"key\">Name </div>\n    <input value=\"{{product.name}}\" [(ngModel)]=\"product.name\">\n  </div>\n\n  <div>\n    <div class=\"key\">Description </div>\n    <textarea type=\"text\" value=\"{{product.description}}\" [(ngModel)]=\"product.description\"></textarea>\n  </div>\n\n  <div>\n    <div class=\"key\">Price </div>\n    <input class=\"price\" type=\"number\" value=\"{{product.price}}\" [(ngModel)]=\"product.price\"> $\n  </div>\n\n  <div>\n    <div class=\"key\">Url </div>\n    <input value=\"{{product.url}}\" [(ngModel)]=\"product.url\">\n  </div>\n\n  <div>\n    <div class=\"key\">ThumbnailUrl </div>\n    <input value=\"{{product.thumbnailUrl}}\" [(ngModel)]=\"product.thumbnailUrl\">\n  </div>\n\n  <div class=\"but-save\" (click)=\"onSave()\">Save</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/add-product/add-product.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add-product/add-product.component.ts ***!
  \******************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_meta_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/meta-data.service */ "./src/app/services/meta-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddProductComponent = /** @class */ (function () {
    function AddProductComponent(metaDataService) {
        this.metaDataService = metaDataService;
        this.closePopup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.product = {};
    }
    AddProductComponent.prototype.onClosePopup = function () {
        this.closePopup.emit(false);
    };
    AddProductComponent.prototype.ngOnInit = function () {
        this.product = {};
    };
    AddProductComponent.prototype.ngOnDestroy = function () {
        this.product = {};
    };
    AddProductComponent.prototype.onSave = function () {
        this.product.id = this.metaDataService.products.length + 1;
        this.product.creationDate = Date.parse(new Date().toString());
        this.metaDataService.products.push(this.product);
        this.onClosePopup();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AddProductComponent.prototype, "closePopup", void 0);
    AddProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-product',
            template: __webpack_require__(/*! ./add-product.component.html */ "./src/app/add-product/add-product.component.html"),
            styles: [__webpack_require__(/*! ./add-product.component.css */ "./src/app/add-product/add-product.component.css")]
        }),
        __metadata("design:paramtypes", [_services_meta_data_service__WEBPACK_IMPORTED_MODULE_1__["MetaDataService"]])
    ], AddProductComponent);
    return AddProductComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tools {\r\n  display: flex;\r\n  margin: 5px 0 5px 15px;\r\n}\r\n\r\n.products-scroll{\r\n  overflow-y:auto ;\r\n  height: 500px;\r\n}\r\n\r\n.search {\r\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAbwAAAG8B8aLcQwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKDSURBVDiNldJPSJNxGAfw7893L777L/vv3i3nnGbO5kFSUMitklxaTo3qVnTyIN48BJ2CUCGEIIvwlpXFDiEF7SStk0EhiZj/lsOG0/J/25jtlaeT4kwDv/Ccfjwf+H15GBFhN0qDGJBp8zpkKq2Z43MFKbm1mklsjidikS4i2sQhYUQExphCZSsatNVf92rMoi49NwZKp8BbHOCdHpp53hdJxRc602vx9weBHABQ2YoGT7XfC+TEJnWNJw3o6b2PS/V1uB24gLyZMHN6G106d+UAE4SSg4BMaRADJ67c8ibDwZzeR4+h1GgAAEXu0/j4bhgqnsFuEsB5m8Vk7PsQgMosQKbN69CYRV3j2Yq9ZQBwuT1wuT0Iv32DtV/L2B4NwVzTYGOMuYhobu8LMpXWnJ4bQ1Wd77COUHe5BdXnL6LA4YC6sMzIq/W1WR1wfK5A6RRy5YpDAQBI/t6C0WQC4zgmU6tLswApubXKWxyIL0SPBIrLKzA7PQVIUubP8o8vWUAmsTnOOz307En/kcBidB7rEofYSHBxZ2fnQxaQiEW6Zl70RVYUFrx82o/9h7W73HP3DpRV/kwqOjlBRCv73xkRQdDl+3XuygG7t1nc/hxCgcMBo8mE2ekprEsclFX+THr4QaLUqsmMfvraOb+w9DoLAAAmCCWafOeQuabBpi4sMzKOY5CkTGwkuJiKTk74a91nystc/MNXYUptbLSnfsaCAAAiyhoALl6tvym3Oro5jrsKwEBEsNvNN/TF7tWmUJzEc61LcpOtlYj+Bf43cqN4zeprWWoKxcnqa4sr9NbAsQAigtxka7P62uJNoTjp3NXf9jo4TpQGMSBY7N1SOjH6F7+gQTMs1XFbAAAAAElFTkSuQmCC');\r\n  width: 250px;\r\n  padding: 0 0 0 30px;\r\n  margin: 5px;\r\n  height: 25px;\r\n  border: solid 1px #cccccc;\r\n  box-shadow: 0px 2px 5px 0 #cccccc;\r\n  font-family: monospace;\r\n  background-repeat: no-repeat;\r\n  background-position: left;\r\n}\r\n\r\n.but-add-scope {\r\n  width: 75px;\r\n  height: 30px;\r\n  background: #78b72e;\r\n  text-align: center;\r\n  border: solid 1px #b1aaaa;\r\n  border-radius: 10px;\r\n  line-height: 1.5;\r\n  margin: 6px 5px 0 0;\r\n  box-shadow: 0 1px 2px 0px #B1AAAB;\r\n  cursor: pointer;\r\n}\r\n\r\n.but-add-text {\r\n  font-family: monospace;\r\n  font-size: 17px;\r\n}\r\n\r\n.img-add {\r\n  width: 10px;\r\n  margin: 0 6px 0 0;\r\n}\r\n\r\n.select-scope {\r\n  margin: 10px 0 0 7px;\r\n}\r\n\r\n.legs-scope{\r\n  position: relative;\r\n}\r\n\r\n.no-data{\r\n  font-size: 30px;\r\n  font-family: monospace;\r\n  color: #c40505;\r\n  margin: 120px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div>\n  <div class=\"tools\">\n    <div class=\"but-add-scope\" (click)=\"toggleAddProduct =! toggleAddProduct\">\n      <img class=\"img-add\" src=\"./assets/add.png\">\n      <span class=\"but-add-text\">Add</span>\n    </div>\n    <input class=\"search\" [(ngModel)]=\"searchText\" placeholder=\"Search...\">\n    <div class=\"select-scope\">\n      <span>Sort by </span>\n      <select [(ngModel)]=\"selectedValue\">\n        <option *ngFor=\"let detail of details\" [ngValue]=\"detail\">{{detail}}</option>\n      </select>\n    </div>\n  </div>\n\n  <div class=\"legs-scope\">\n    <div class=\"products-scroll\">\n      <div *ngFor=\"let product of metaDataService.products | search : searchText : selectedValue\">\n        <app-product [product]=\"product\" (selectedProduct)='selectedProduct($event)'></app-product>\n      </div>\n\n      <div class=\"no-data\" *ngIf=\"metaDataService.products.length === 0\">\n        No data to display :(\n      </div>\n    </div>\n\n    <app-view-product *ngIf=\"viewProduct\" [product]=\"viewProduct\"></app-view-product>\n  </div>\n\n</div>\n\n<app-add-product *ngIf=\"toggleAddProduct\" (closePopup)='closePopupAddProduct($event)' ></app-add-product>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_meta_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/meta-data.service */ "./src/app/services/meta-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(metaDataService) {
        var _this = this;
        this.metaDataService = metaDataService;
        this.toggleAddProduct = false;
        this.selectedValue = 'name';
        this.details = ['description', 'name', 'price'];
        this.metaDataService.getData().subscribe(function (data) {
            _this.metaDataService.products = data;
        });
    }
    AppComponent.prototype.selectedProduct = function (data) {
        this.viewProduct = Object.assign({}, data);
    };
    AppComponent.prototype.closePopupAddProduct = function (toggle) {
        this.toggleAddProduct = toggle;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_meta_data_service__WEBPACK_IMPORTED_MODULE_1__["MetaDataService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _services_meta_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/meta-data.service */ "./src/app/services/meta-data.service.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _view_product_view_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view-product/view-product.component */ "./src/app/view-product/view-product.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-product/add-product.component */ "./src/app/add-product/add-product.component.ts");
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search.pipe */ "./src/app/search.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _view_product_view_product_component__WEBPACK_IMPORTED_MODULE_7__["ViewProductComponent"],
                _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_9__["AddProductComponent"],
                _search_pipe__WEBPACK_IMPORTED_MODULE_10__["SearchPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ],
            providers: [_services_meta_data_service__WEBPACK_IMPORTED_MODULE_5__["MetaDataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\r\n  background: #99abbb;\r\n  width: 100%;\r\n  height: 50px;\r\n  text-align: -webkit-left;\r\n  font-size: 20px;\r\n  font-family: cursive;\r\n  line-height: 2;\r\n  padding: 0 0 0 30px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <label class=\"header-text\">My Store</label>\n</div>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-scope {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  width: 50%;\r\n  box-shadow: 0 1px 4px 0px #b9b6b6;\r\n  border: solid 1px #b9b6b6;\r\n  margin-bottom: 10px;\r\n  position: relative;\r\n  cursor: pointer;\r\n}\r\n\r\n.product-delete {\r\n  height: 25px;\r\n  width: 80px;\r\n  line-height: 1.5;\r\n  box-shadow: 0 1px 1px 1px #777777;\r\n  background-color: #d68206;\r\n  cursor: pointer;\r\n  text-align: -webkit-center;\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: 0;\r\n  margin: 8px;\r\n\r\n}\r\n\r\n.img-product {\r\n  height: 50px;\r\n  margin: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"product-scope\"  (click)=\"onSelect(product)\">\n  <img class=\"img-product\" [src]=\"product.url\">\n  <div>\n    <label>\n      {{product.name}}\n    </label>\n    <p>\n      {{product.description}}\n    </p>\n  </div>\n  <div>\n  <div  class=\"product-delete\" (click)=\"onDelete(product.id)\">Delete</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_meta_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/meta-data.service */ "./src/app/services/meta-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductComponent = /** @class */ (function () {
    function ProductComponent(metaDataService) {
        this.metaDataService = metaDataService;
        this.selectedProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent.prototype.onDelete = function (id) {
        this.metaDataService.deleteProductById(id);
    };
    ProductComponent.prototype.onSelect = function (product) {
        this.selectedProduct.emit(product);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductComponent.prototype, "product", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProductComponent.prototype, "selectedProduct", void 0);
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [_services_meta_data_service__WEBPACK_IMPORTED_MODULE_1__["MetaDataService"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/search.pipe.ts":
/*!********************************!*\
  !*** ./src/app/search.pipe.ts ***!
  \********************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (items, searchText, selectedValue) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items['filter'](function (it) {
            return it[selectedValue].toString().toLowerCase().includes(searchText);
        });
    };
    SearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "./src/app/services/meta-data.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/meta-data.service.ts ***!
  \***********************************************/
/*! exports provided: MetaDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaDataService", function() { return MetaDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MetaDataService = /** @class */ (function () {
    function MetaDataService(http) {
        this.http = http;
        this.products = [];
        this.url = 'https://msbit-exam-products-store.firebaseio.com/products.json';
    }
    MetaDataService.prototype.getData = function () {
        return this.http.get(this.url);
    };
    MetaDataService.prototype.deleteProductById = function (id) {
        var index = this.products.map(function (x) {
            return x['id'];
        }).indexOf(id);
        this.products.splice(index, 1);
    };
    MetaDataService.prototype.updateProduct = function (product) {
        var itemIndex = this.products.findIndex(function (item) { return item['id'] == product.id; });
        this.products[itemIndex] = product;
    };
    MetaDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MetaDataService);
    return MetaDataService;
}());



/***/ }),

/***/ "./src/app/view-product/view-product.component.css":
/*!*********************************************************!*\
  !*** ./src/app/view-product/view-product.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".view-product-scope {\r\n  position: absolute;\r\n  top: 0;\r\n  width: 49%;\r\n  right: 0;\r\n}\r\n\r\n.img-view-product {\r\n  width: 100px;\r\n  height: 100px;\r\n  margin: 15px;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/view-product/view-product.component.html":
/*!**********************************************************!*\
  !*** ./src/app/view-product/view-product.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"view-product-scope\">\n  <fieldset>\n    <legend>{{product.name}}</legend>\n    <div class=\"view\">\n      <img class=\"img-view-product\" [src]=\"product.url\">\n      <div>\n        <div>Name </div>\n        <input value=\"{{product.name}}\" [(ngModel)]=\"product.name\">\n      </div>\n      <div>\n        <div>Description </div>\n        <input type=\"text\" value=\"{{product.description}}\" [(ngModel)]=\"product.description\">\n      </div>\n      <div>\n        <div>Price </div>\n        <input class=\"price\" type=\"number\" value=\"{{product.price}}\" [(ngModel)]=\"product.price\"> $\n      </div>\n      <div class=\"but-save\" (click)=\"onUpdate(product)\">Save</div>\n    </div>\n\n  </fieldset>\n\n</div>\n"

/***/ }),

/***/ "./src/app/view-product/view-product.component.ts":
/*!********************************************************!*\
  !*** ./src/app/view-product/view-product.component.ts ***!
  \********************************************************/
/*! exports provided: ViewProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProductComponent", function() { return ViewProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_meta_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/meta-data.service */ "./src/app/services/meta-data.service.ts");
/* harmony import */ var alertifyjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alertifyjs */ "./node_modules/alertifyjs/build/alertify.js");
/* harmony import */ var alertifyjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alertifyjs__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewProductComponent = /** @class */ (function () {
    function ViewProductComponent(metaDataService) {
        this.metaDataService = metaDataService;
    }
    ViewProductComponent.prototype.ngOnInit = function () {
    };
    ViewProductComponent.prototype.onUpdate = function (product) {
        alertifyjs__WEBPACK_IMPORTED_MODULE_2__["success"]("Thank you for updating product " + product.name);
        this.metaDataService.updateProduct(product);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ViewProductComponent.prototype, "product", void 0);
    ViewProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-product',
            template: __webpack_require__(/*! ./view-product.component.html */ "./src/app/view-product/view-product.component.html"),
            styles: [__webpack_require__(/*! ./view-product.component.css */ "./src/app/view-product/view-product.component.css")]
        }),
        __metadata("design:paramtypes", [_services_meta_data_service__WEBPACK_IMPORTED_MODULE_1__["MetaDataService"]])
    ], ViewProductComponent);
    return ViewProductComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\נתנאל מנצור\Desktop\demo\msbitTask\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map