webpackJsonp([7],{

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadisticaPageModule", function() { return EstadisticaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__estadistica__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EstadisticaPageModule = (function () {
    function EstadisticaPageModule() {
    }
    return EstadisticaPageModule;
}());
EstadisticaPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__estadistica__["a" /* EstadisticaPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__estadistica__["a" /* EstadisticaPage */]),
        ],
    })
], EstadisticaPageModule);

//# sourceMappingURL=estadistica.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstadisticaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EstadisticaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EstadisticaPage = (function () {
    function EstadisticaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EstadisticaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EstadisticaPage');
    };
    return EstadisticaPage;
}());
EstadisticaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-estadistica',template:/*ion-inline-start:"C:\Users\estefania\Documents\Gitkraken\RespaldoDesarrollo\IonicProject\src\pages\Modulo 2\estadistica\estadistica.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-buttons start>\n\n      <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      <ion-icon name="logo-youtube"> ViUCAB</ion-icon>\n\n      <ion-buttons class= \'centrado-porcentual\'  >\n\n          <button  >\n\n        <ion-icon name="videocam" color="primary"></ion-icon>   \n\n      </button>\n\n      </ion-buttons>   \n\n    \n\n    </ion-title>\n\n    \n\n  </ion-navbar>\n\n</ion-header>\n\n \n\n<ion-content padding>\n\n   \n\n  \n\n\n\n     \n\n</ion-content>'/*ion-inline-end:"C:\Users\estefania\Documents\Gitkraken\RespaldoDesarrollo\IonicProject\src\pages\Modulo 2\estadistica\estadistica.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], EstadisticaPage);

//# sourceMappingURL=estadistica.js.map

/***/ })

});
//# sourceMappingURL=7.js.map