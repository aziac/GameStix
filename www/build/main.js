webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_customer_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_form_customer_form__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomersPage = (function () {
    function CustomersPage(viewCtrl, navCtrl, customerService, loadingCtrl, alertCtrl) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.customerService = customerService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    CustomersPage.prototype.openCustomerForm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__customer_form_customer_form__["a" /* CustomerFormPage */]);
    };
    CustomersPage.prototype.openEditCustomerForm = function (customer) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__customer_form_customer_form__["a" /* CustomerFormPage */], customer);
    };
    CustomersPage.prototype.dismissLoading = function () {
        this.loading.dismiss();
    };
    CustomersPage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: "Please wait...",
        });
        this.loading.present();
    };
    CustomersPage.prototype.presentConfirm = function (customer) {
        this.alert = this.alertCtrl.create({
            title: 'Confirm deletion',
            message: "Are you sure that you want to delete '" + customer.name + "' ?",
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () { }
                },
                {
                    text: 'Delete',
                    handler: function () {
                        //this.deleteCustomer(customer)
                    }
                }
            ]
        });
        this.alert.present();
    };
    CustomersPage.prototype.ionViewWillEnter = function () {
        this.viewCtrl.showBackButton(false);
    };
    CustomersPage.prototype.ngOnInit = function () {
        //this.populateCustomers();
    };
    CustomersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-costumers',template:/*ion-inline-start:"/home/ubuntu/Escritorio/apis angular/ionic-angular-crud/src/pages/customers/customers.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Ionic Angular - CRUD Customers</ion-title>\n      <ion-buttons end>\n          <button ion-button icon-only (click)="openCustomerForm()">\n              <ion-icon name="person-add"></ion-icon>\n          </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n      <ion-item *ngFor="let customer of customers">\n          <ion-card>\n              <ion-card-content>\n                  <ion-item><ion-icon name="person"></ion-icon> {{customer.id}} - {{customer.name}}</ion-item>\n                  <ion-item><ion-icon name="at"></ion-icon> {{customer.email}}</ion-item>\n                  <ion-item><ion-icon name="phone-portrait"></ion-icon> {{customer.phone}}</ion-item>\n                  <ion-item><ion-icon name="pin"></ion-icon> {{customer.address}} {{customer.city}}, {{customer.state}} {{customer.zipcode}}</ion-item>\n                  <ion-buttons block>\n                      <button ion-button icon-left (click)="openEditCustomerForm(customer)">\n                          <ion-icon name="create"></ion-icon>\n                          Edit\n                      </button>\n                      <button ion-button icon-left color="danger" (click)="presentConfirm(customer)">\n                          <ion-icon name="remove"></ion-icon>\n                          Remove\n                      </button>\n                  </ion-buttons>\n              </ion-card-content>\n          </ion-card>\n      </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/ubuntu/Escritorio/apis angular/ionic-angular-crud/src/pages/customers/customers.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_customer_service__["a" /* CustomerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_customer_service__["a" /* CustomerService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object])
    ], CustomersPage);
    return CustomersPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=customers.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_api_service__ = __webpack_require__(282);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerService = (function (_super) {
    __extends(CustomerService, _super);
    function CustomerService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.http.get("http://localhost:5000/customers/");
        console.log('MENSAJE', _this.http.get("http://localhost:5000/customers/"));
        return _this;
    }
    CustomerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], CustomerService);
    return CustomerService;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_3__base_api_service__["a" /* BaseApiService */]));

//# sourceMappingURL=customer.service.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 156;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_customer_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__records_customer__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__customers_customers__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CustomerFormPage = (function () {
    function CustomerFormPage(navCtrl, navParams, customerService, loadingCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.customerService = customerService;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.customer = navParams.data;
        console.log('COMIDAAA ', this.customer);
        if (this.customer && this.customer.id && !this.customer.address) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__customers_customers__["a" /* CustomersPage */]);
        }
        this.formGroup = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            phone: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            address: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            city: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            state: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            zipcode: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
        });
    }
    CustomerFormPage.prototype.saveCustomer = function () {
        var _this = this;
        this.presentLoading();
        console.log('MKKKKK ', this.customer);
        this.customerService.saveCustomer(this.customer)
            .then(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__customers_customers__["a" /* CustomersPage */]);
            _this.dismissLoading();
        })
            .catch(function () {
            _this.dismissLoading();
        });
    };
    CustomerFormPage.prototype.dismissLoading = function () {
        this.loading.dismiss();
    };
    CustomerFormPage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: "Please wait...",
        });
        this.loading.present();
    };
    CustomerFormPage.prototype.ngOnInit = function () {
        if (this.customer.id) {
            this.title = "Edit Customer " + this.customer.id;
        }
        else {
            this.customer = new __WEBPACK_IMPORTED_MODULE_5__records_customer__["a" /* CustomerRecord */]();
            this.title = 'New Customer';
        }
    };
    CustomerFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'customer-form',template:/*ion-inline-start:"/home/ubuntu/Escritorio/apis angular/ionic-angular-crud/src/pages/customer-form/customer-form.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Ionic Angular - CRUD Customers</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-item>{{title}}</ion-item>\n    <form [formGroup]="formGroup" (ngSubmit)="saveCustomer()">\n        <ion-item>\n            <ion-label color="primary" floating>Name</ion-label>\n            <ion-input type="text" [(ngModel)]="customer.name" name="name" formControlName="name"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label color="primary" floating>E-mail</ion-label>\n            <ion-input type="email" [(ngModel)]="customer.email" formControlName="email"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label color="primary" floating>Phone</ion-label>\n            <ion-input type="tel" [(ngModel)]="customer.phone" formControlName="phone" mask="999-999-9999"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label color="primary" floating>Address</ion-label>\n            <ion-input type="text" [(ngModel)]="customer.address" formControlName="address"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label color="primary" floating>City</ion-label>\n            <ion-input type="text" [(ngModel)]="customer.city" formControlName="city"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label color="primary" floating>State</ion-label>\n            <ion-input type="text" [(ngModel)]="customer.state" formControlName="state"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label color="primary" floating>Zipcode</ion-label>\n            <ion-input type="number" [(ngModel)]="customer.zipcode" formControlName="zipcode" mask="99999"></ion-input>\n        </ion-item>\n        <ion-buttons end>\n            <button ion-button type="submit" [disabled]="!formGroup.valid">\n                <ion-icon name="checkmark"></ion-icon>\n                Save\n            </button>\n        </ion-buttons>\n    </form>\n</ion-content>'/*ion-inline-end:"/home/ubuntu/Escritorio/apis angular/ionic-angular-crud/src/pages/customer-form/customer-form.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__services_customer_service__["a" /* CustomerService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], CustomerFormPage);
    return CustomerFormPage;
}());

//# sourceMappingURL=customer-form.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export deepLinkConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic2_mask_directive__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_customer_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_customers_customers__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_customer_form_customer_form__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var deepLinkConfig = {
    links: [
        {
            component: __WEBPACK_IMPORTED_MODULE_10__pages_customers_customers__["a" /* CustomersPage */],
            name: "Customer List",
            segment: "customers"
        }, {
            component: __WEBPACK_IMPORTED_MODULE_11__pages_customer_form_customer_form__["a" /* CustomerFormPage */],
            name: "Customer Form New",
            segment: "customer",
            defaultHistory: [__WEBPACK_IMPORTED_MODULE_10__pages_customers_customers__["a" /* CustomersPage */]]
        }, {
            component: __WEBPACK_IMPORTED_MODULE_11__pages_customer_form_customer_form__["a" /* CustomerFormPage */],
            name: "Customer Form Edit",
            segment: "customer/:id",
            defaultHistory: [__WEBPACK_IMPORTED_MODULE_10__pages_customers_customers__["a" /* CustomersPage */]]
        }
    ]
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_customers_customers__["a" /* CustomersPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_customer_form_customer_form__["a" /* CustomerFormPage */],
                __WEBPACK_IMPORTED_MODULE_7_ionic2_mask_directive__["a" /* Ionic2MaskDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], { locationStrategy: 'path' }, deepLinkConfig)
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_customers_customers__["a" /* CustomersPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_customer_form_customer_form__["a" /* CustomerFormPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__services_customer_service__["a" /* CustomerService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_customers_customers__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_customers_customers__["a" /* CustomersPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/ubuntu/Escritorio/apis angular/ionic-angular-crud/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/ubuntu/Escritorio/apis angular/ionic-angular-crud/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(100);

var BaseApiService = (function () {
    function BaseApiService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        });
    }
    BaseApiService.prototype._toHttpParams = function (obj) {
        return Object.getOwnPropertyNames(obj)
            .reduce(function (p, key) { return p.set(key, obj[key]); }, new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]());
    };
    BaseApiService.prototype._get = function (url) {
        return this.http
            .get(url)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    BaseApiService.prototype._post = function (url, body) {
        return this.http
            .post(url, body, { headers: this.headers })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    BaseApiService.prototype._put = function (url, body) {
        return this.http
            .put(url, body, { headers: this.headers })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    BaseApiService.prototype._delete = function (url) {
        return this.http
            .delete(url, { headers: this.headers })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    BaseApiService.prototype.extractData = function (res) {
        return res || {};
    };
    BaseApiService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return BaseApiService;
}());

//# sourceMappingURL=base-api.service.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerRecord; });
var CustomerRecord = (function () {
    function CustomerRecord() {
    }
    return CustomerRecord;
}());

//# sourceMappingURL=customer.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map