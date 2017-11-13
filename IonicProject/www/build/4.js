webpackJsonp([4],{

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuPageModule = (function () {
    function MenuPageModule() {
    }
    return MenuPageModule;
}());
MenuPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */]),
        ],
    })
], MenuPageModule);

//# sourceMappingURL=menu.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
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


var MenuPage = (function () {
    function MenuPage(navCtrl) {
        this.navCtrl = navCtrl;
        // Basic root for our content view
        this.rootPage = 'TabsPage';
        this.pages = [
            { title: 'Inicio', pageName: 'TabsPage', tabComponent: 'InicioPage', index: 0, icon: 'home' },
            //Aqui van los links de las paginas principales de los demas grupos
            //{ title: 'Configuración de usuario', pageName: 'UsuarioPage', icon: 'contact' },
            //{ title: 'Mi canal', pageName: 'CanalPage', icon: 'play' },
            { title: 'Mis listas', pageName: 'ListasPage', icon: 'star-half' },
            { title: 'Estadísticas', pageName: 'EstadisticaPage', icon: 'stats' }
        ];
        this.MyChannelSubmenu = false;
        this.SettingsSubmenu = false;
    }
    MenuPage.prototype.openPage = function (page) {
        var params = {};
        // The index is equal to the order of our tabs inside tabs.ts
        if (page.index) {
            params = { tabIndex: page.index };
        }
        // The active child nav is our Tabs Navigation
        if (this.nav.getActiveChildNav() && page.index != undefined) {
            this.nav.getActiveChildNav().select(page.index);
        }
        else {
            // Tabs are not active, so reset the root page 
            // In this case: moving to or from SpecialPage
            this.nav.setRoot(page.pageName, params);
        }
    };
    MenuPage.prototype.isActive = function (page) {
        // Again the Tabs Navigation
        var childNav = this.nav.getActiveChildNav();
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'secondary';
            }
            return;
        }
        // Fallback needed when there is no active childnav (tabs not active)
        if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
            return 'secondary';
        }
        return;
    };
    MenuPage.prototype.MyChannelItemHandler = function () {
        this.MyChannelSubmenu = !this.MyChannelSubmenu;
        this.SettingsSubmenu = false;
    };
    MenuPage.prototype.SettingsItemHandler = function () {
        this.SettingsSubmenu = !this.SettingsSubmenu;
        this.MyChannelSubmenu = false;
    };
    return MenuPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
], MenuPage.prototype, "nav", void 0);
MenuPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-menu',template:/*ion-inline-start:"C:\Users\estefania\Documents\Gitkraken\RespaldoDesarrollo\IonicProject\src\pages\Modulo 2\menu\menu.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n      <ion-navbar color="morado2">\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n    </ion-navbar>\n\n  </ion-header>\n\n \n\n  <ion-content>\n\n      <ion-list id="sidenav">\n\n          <!-- other menu items will go here -->\n\n            <button ion-item menuClose *ngFor="let p of pages" (click)="openPage(p)" >\n\n                <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n\n                {{ p.title }}\n\n            </button>\n\n            <button ion-item (click)="MyChannelItemHandler()"> <ion-icon item-start name="contact" color="isActive(this)"></ion-icon> Mi canal</button>\n\n            <ion-item submenu-item *ngIf="MyChannelSubmenu" (click)="MyChannelItemHandler()"> <ion-icon name="film"></ion-icon>  Mis Videos</ion-item>\n\n            <ion-item submenu-item *ngIf="MyChannelSubmenu" (click)="MyChannelItemHandler()"> <ion-icon name="people"></ion-icon> Suscripciones</ion-item>\n\n            <ion-item submenu-item *ngIf="MyChannelSubmenu" (click)="MyChannelItemHandler()"> <ion-icon name="chatbubbles"></ion-icon> Notificaciones</ion-item>\n\n            <button ion-item (click)="SettingsItemHandler()"> <ion-icon item-start name="settings"></ion-icon> Configuración de Usuario</button>\n\n            <ion-item submenu-item *ngIf="SettingsSubmenu" (click)="SettingsItemHandler()"> <ion-icon name="person"></ion-icon> Config de Perfil de Usuario</ion-item>\n\n            <ion-item submenu-item *ngIf="SettingsSubmenu" (click)="SettingsItemHandler()"> <ion-icon name="eye-off"></ion-icon> Config de Filtros</ion-item>\n\n          <!-- other menu items will go here -->\n\n          </ion-list>\n\n    <ion-list>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n \n\n<!-- main navigation -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false" ></ion-nav>'/*ion-inline-end:"C:\Users\estefania\Documents\Gitkraken\RespaldoDesarrollo\IonicProject\src\pages\Modulo 2\menu\menu.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], MenuPage);

//# sourceMappingURL=menu.js.map

/***/ })

});
//# sourceMappingURL=4.js.map