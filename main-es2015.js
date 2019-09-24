(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"menu-panel\">\n  <app-panell></app-panell>\n  <div class=\"btn-close\" (click)=\"hidemenu()\">\n    <i class=\"fa fa-times\"></i>\n  </div>\n</div>\n<div class=\"btn-menu\" (click)=\"showmenu()\">\n  <i class=\"fa fa-bars\"></i>\n</div>\n<div class=\"contingut\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/angular/binding/one-way-data/one-way-data.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/angular/binding/one-way-data/one-way-data.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <header>\n    <h1 class=\"title\">Data Bindings</h1>\n    <h2 class=\"subtitle\">One Way - From data</h2>\n    <div class=\"is-divider\"></div>\n  </header>\n  <section>\n    <h3 class=\"subtitle\">{{ 'que.es' | translate }}</h3>\n    <p>{{ 'angular.binding.oneway.explicacio' | translate }}</p>\n    <p>{{ 'representacio.title' | translate }}</p>\n    <ul>\n      <li ngNonBindable><code>{{expression}}</code></li>\n      <li ngNonBindable><code>[target]=\"expression\"</code></li>\n      <li ngNonBindable><code>bind-target=\"expression\"</code></li>\n    </ul>\n    <p [innerHtml]=\"'angular.binding.oneway.on' | translate\"></p>\n\n    <h3 class=\"subtitle\">{{ 'exemple' | translate }} 1</h3>\n\n    <div class=\"columns\">\n      <div class=\"column\">\n        <h4 class=\"subtitle\">{{ 'component' | translate }}</h4>\n        <pre><code [highlight]=\"component\"></code></pre>\n      </div>\n      <div class=\"column\">\n        <h4 class=\"subtitle\">{{ 'vista' | translate }}</h4>\n        <pre><code [highlight]=\"vista1\"></code></pre>\n        <div class=\"is-divider\" [attr.data-content]=\"'or' | translate\"></div>\n        <pre><code [highlight]=\"vista2\"></code></pre>\n        <div class=\"is-divider\" [attr.data-content]=\"'or' | translate\"></div>\n        <pre><code [highlight]=\"vista3\"></code></pre>\n      </div>\n    </div>\n\n    <h4 class=\"subtitle\">{{ 'resultat' | translate }}</h4>\n    <div class=\"columns\">\n      <div class=\"column\">\n        <p>{{variable}}</p>\n      </div>\n      <div class=\"is-divider-vertical\" [attr.data-content]=\"'or' | translate\"></div>\n      <div class=\"column\">\n        <p [innerHTML]=\"variable\"></p>\n      </div>\n      <div class=\"is-divider-vertical\" [attr.data-content]=\"'or' | translate\"></div>\n      <div class=\"column\">\n        <p bind-innerHTML=\"variable\"></p>\n      </div>\n    </div>\n\n    <h3 class=\"subtitle\">{{ 'exemple' | translate }} 2 ({{ 'mateix.component' | translate }})</h3>\n\n    <h4 class=\"subtitle\">{{ 'vista' | translate }}</h4>\n    <div class=\"columns\">\n      <div class=\"column\">\n        <pre><code [highlight]=\"vista4\"></code></pre>\n      </div>\n      <div class=\"is-divider-vertical\" [attr.data-content]=\"'or' | translate\"></div>\n      <div class=\"column\">\n        <pre><code [highlight]=\"vista5\"></code></pre>\n      </div>\n      <div class=\"is-divider-vertical\" [attr.data-content]=\"'or' | translate\"></div>\n      <div class=\"column\">\n        <pre><code [highlight]=\"vista6\"></code></pre>\n      </div>\n    </div>\n\n    <h4 class=\"subtitle\">{{ 'resultat' | translate }}</h4>\n    <div class=\"columns\">\n      <div class=\"column\">\n        <input value=\"{{variable}}\" />\n      </div>\n      <div class=\"is-divider-vertical\" [attr.data-content]=\"'or' | translate\"></div>\n      <div class=\"column\">\n        <input [value]=\"variable\" />\n      </div>\n      <div class=\"is-divider-vertical\" [attr.data-content]=\"'or' | translate\"></div>\n      <div class=\"column\">\n        <input bind-value=\"variable\" />\n      </div>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/angular/binding/one-way-view/one-way-view.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/angular/binding/one-way-view/one-way-view.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <header>\n    <h1 class=\"title\">Data Bindings</h1>\n    <h2 class=\"subtitle\">One Way - From View</h2>\n    <div class=\"is-divider\"></div>\n  </header>\n  <section>\n    <h3 class=\"subtitle\">{{ 'que.es' | translate }}</h3>\n    <p>{{ 'angular.binding.onewaybind.explicacio' | translate }}</p>\n    <p>{{ 'representacio.title' | translate }}</p>\n    <ul>\n      <li ngNonBindable><code>(target)=\"expression\"</code></li>\n      <li ngNonBindable><code>on-target=\"expression\"</code></li>\n    </ul>\n    <p [innerHtml]=\"'angular.binding.onewaybind.on' | translate\"></p>\n\n    <h3 class=\"subtitle\">{{ 'exemple' | translate }} 1</h3>\n\n    <div class=\"columns\">\n      <div class=\"column\">\n        <h4 class=\"subtitle\">{{ 'component' | translate }}</h4>\n        <pre><code [highlight]=\"component\"></code></pre>\n      </div>\n      <div class=\"column\">\n        <h4 class=\"subtitle\">{{ 'vista' | translate }}</h4>\n        <pre><code [highlight]=\"vista1\"></code></pre>\n        <div class=\"is-divider\" [attr.data-content]=\"'or' | translate\"></div>\n        <pre><code [highlight]=\"vista2\"></code></pre>\n      </div>\n    </div>\n\n    <h4 class=\"subtitle\">{{ 'resultat' | translate }}</h4>\n    <div class=\"columns\">\n      <div class=\"column\">\n        <button (click)=\"saludar()\">{{ 'saludar' | translate | titlecase }}</button>\n      </div>\n      <div class=\"is-divider-vertical\" [attr.data-content]=\"'or' | translate\"></div>\n      <div class=\"column\">\n        <button on-click=\"saludar()\">{{ 'saludar' | translate | titlecase }}</button>\n      </div>\n    </div>\n\n    <h3 class=\"subtitle\">{{ 'exemple' | translate }} 2 ({{ 'mateix.component' | translate }})</h3>\n\n    <h4 class=\"subtitle\">{{ 'vista' | translate }}</h4>\n    <div class=\"columns\">\n      <div class=\"column\">\n        <pre><code [highlight]=\"vista3\"></code></pre>\n      </div>\n      <div class=\"is-divider-vertical\" [attr.data-content]=\"'or' | translate\"></div>\n      <div class=\"column\">\n        <pre><code [highlight]=\"vista4\"></code></pre>\n      </div>\n    </div>\n\n    <h4 class=\"subtitle\">{{ 'resultat' | translate }} ({{ 'resultat.escriviu' | translate }})</h4>\n    <div class=\"columns\">\n      <div class=\"column\">\n        <input (keypress)=\"saludar()\" />\n      </div>\n      <div class=\"is-divider-vertical\" [attr.data-content]=\"'or' | translate\"></div>\n      <div class=\"column\">\n        <input on-keypress=\"saludar()\" />\n      </div>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/angular/binding/two-way/two-way.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/angular/binding/two-way/two-way.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <header>\n    <h1 class=\"title\">Data Bindings</h1>\n    <h2 class=\"subtitle\">Two Way</h2>\n    <div class=\"is-divider\"></div>\n  </header>\n  <section>\n    <h3 class=\"subtitle\">{{ 'que.es' | translate }}</h3>\n    <p>{{ 'angular.binding.twoway.explicacio' | translate }}</p>\n    <p>{{ 'representacio.title' | translate }}</p>\n    <ul>\n      <li ngNonBindable><code>[(target)]=\"expression\"</code></li>\n      <li ngNonBindable><code>bindon-target=\"expression\"</code></li>\n    </ul>\n    <p [innerHtml]=\"'angular.binding.twoway.on' | translate\"></p>\n\n    <h3 class=\"subtitle\">{{ 'exemple' | translate }}</h3>\n\n    <div class=\"columns\">\n      <div class=\"column\">\n        <h4 class=\"subtitle\">{{ 'component' | translate }}</h4>\n        <pre><code [highlight]=\"component\"></code></pre>\n      </div>\n      <div class=\"column\">\n        <h4 class=\"subtitle\">{{ 'vista' | translate }}</h4>\n        <pre><code [highlight]=\"vista1\"></code></pre>\n        <div class=\"is-divider\" [attr.data-content]=\"'or' | translate\"></div>\n        <pre><code [highlight]=\"vista2\"></code></pre>\n      </div>\n    </div>\n\n    <h4 class=\"subtitle\">{{ 'resultat' | translate }} ({{ 'resultat.escriviu' | translate }})</h4>\n    <div class=\"columns\">\n      <div class=\"column\">\n        <input [(ngModel)]=\"variable\" />\n        <p>{{variable}}</p>\n      </div>\n      <div class=\"is-divider-vertical\" [attr.data-content]=\"'or' | translate\"></div>\n      <div class=\"column\">\n        <input bindon-ngModel=\"variable\" />\n        <p>{{variable}}</p>\n      </div>\n    </div>\n\n  </section>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/angular/directivas/ngclass/ngclass.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/angular/directivas/ngclass/ngclass.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <header>\n    <h1 class=\"title\">Directives</h1>\n    <h2 class=\"subtitle\">ngClass</h2>\n    <div class=\"is-divider\"></div>\n  </header>\n  <section>\n    <h3 class=\"subtitle\">{{ 'que.es' | translate }}</h3>\n    <p [innerHtml]=\"'angular.directives.ngclass.explicacio1' | translate\"></p>\n    <p [innerHtml]=\"'angular.directives.ngclass.explicacio2' | translate\"></p>\n\n    <table>\n      <tr>\n        <th>{{ 'tipus' | translate }}</th>\n        <th style=\"width: 350px;\">{{ 'exemple' | translate }}</th>\n        <th>{{ 'explicacio' | translate }}</th>\n      </tr>\n      <tr *ngFor=\"let representacion of representacions\">\n        <td>{{representacion.tipus}}</td>\n        <td><code>{{representacion.exemple}}</code></td>\n        <td>{{representacion.desc | translate}}</td>\n      </tr>\n    </table>\n\n    <h3 class=\"subtitle\">{{ 'exemples' | translate }}</h3>\n\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h4 class=\"subtitle\">{{ 'component' | translate }}</h4>\n        <pre><code [highlight]=\"component\"></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h4 class=\"subtitle\">CSS</h4>\n        <pre><code [highlight]=\"css\"></code></pre>\n      </div>\n    </div>\n    <div class=\"is-divider\"></div>\n    <h4 class=\"subtitle\">{{ 'exemple' | translate }} 1</h4>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'vista' | translate }}</h5>\n        <pre><code [highlight]=\"exemple1\"></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'resultat' | translate }}</h5>\n        <p [ngClass]=\"'class1'\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n      </div>\n    </div>\n    <div class=\"is-divider\"></div>\n    <h4 class=\"subtitle\">{{ 'exemple' | translate }} 2</h4>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'vista' | translate }}</h5>\n        <pre><code [highlight]=\"exemple2\"></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'resultat' | translate }}</h5>\n        <p [ngClass]=\"'class1 class2'\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n      </div>\n    </div>\n    <div class=\"is-divider\"></div>\n    <h4 class=\"subtitle\">{{ 'exemple' | translate }} 3</h4>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'vista' | translate }}</h5>\n        <pre><code [highlight]=\"exemple3\"></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'resultat' | translate }}</h5>\n        <p [ngClass]=\"['class1']\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n      </div>\n    </div>\n    <div class=\"is-divider\"></div>\n    <h4 class=\"subtitle\">{{ 'exemple' | translate }} 4</h4>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'vista' | translate }}</h5>\n        <pre><code [highlight]=\"exemple4\"></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'resultat' | translate }}</h5>\n        <p [ngClass]=\"['class1', 'class2']\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n      </div>\n    </div>\n    <div class=\"is-divider\"></div>\n    <h4 class=\"subtitle\">{{ 'exemple' | translate }} 5</h4>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'vista' | translate }}</h5>\n        <pre><code [highlight]=\"exemple5\"></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'resultat' | translate }}</h5>\n        <button (click)=\"reload1()\">Toggle 1</button>\n        <p [ngClass]=\"{ 'class1': condition1 }\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n      </div>\n    </div>\n    <div class=\"is-divider\"></div>\n    <h4 class=\"subtitle\">{{ 'exemple' | translate }} 6</h4>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'vista' | translate }}</h5>\n        <pre><code [highlight]=\"exemple6\"></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'resultat' | translate }}</h5>\n        <button (click)=\"reload1()\">Toggle 1</button>\n        <p [ngClass]=\"{ 'class1 class2': condition1 }\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n      </div>\n    </div>\n    <div class=\"is-divider\"></div>\n    <h4 class=\"subtitle\">{{ 'exemple' | translate }} 7</h4>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'vista' | translate }}</h5>\n        <pre><code [highlight]=\"exemple7\"></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'resultat' | translate }}</h5>\n        <button (click)=\"reload1()\">Toggle 1</button>\n        <button (click)=\"reload2()\">Toggle 2</button>\n        <p [ngClass]=\"{ 'class1 class2': condition1, 'class3': condition2 }\">Lorem ipsum dolor sit amet, consectetur\n          adipiscing elit.</p>\n      </div>\n    </div>\n    <div class=\"is-divider\"></div>\n    <h4 class=\"subtitle\">{{ 'exemple' | translate }} 8</h4>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'vista' | translate }}</h5>\n        <pre><code [highlight]=\"exemple8\"></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'resultat' | translate }}</h5>\n        <p [ngClass]=\"stringVar1\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n      </div>\n    </div>\n    <div class=\"is-divider\"></div>\n    <h4 class=\"subtitle\">{{ 'exemple' | translate }} 9</h4>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'vista' | translate }}</h5>\n        <pre><code [highlight]=\"exemple9\"></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'resultat' | translate }}</h5>\n        <p [ngClass]=\"stringVar2\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n      </div>\n    </div>\n    <div class=\"is-divider\"></div>\n    <h4 class=\"subtitle\">{{ 'exemple' | translate }} 10</h4>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'vista' | translate }}</h5>\n        <pre><code [highlight]=\"exemple10\"></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'resultat' | translate }}</h5>\n        <p [ngClass]=\"arrayVar1\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n      </div>\n    </div>\n    <div class=\"is-divider\"></div>\n    <h4 class=\"subtitle\">{{ 'exemple' | translate }} 11</h4>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'vista' | translate }}</h5>\n        <pre><code [highlight]=\"exemple11\"></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'resultat' | translate }}</h5>\n        <p [ngClass]=\"arrayVar2\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n      </div>\n    </div>\n    <div class=\"is-divider\"></div>\n    <h4 class=\"subtitle\">{{ 'exemple' | translate }} 12</h4>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'vista' | translate }}</h5>\n        <pre><code [highlight]=\"exemple12\"></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'resultat' | translate }}</h5>\n        <button (click)=\"reload1()\">Toggle 1</button>\n        <p [ngClass]=\"objectVar1\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n      </div>\n    </div>\n    <div class=\"is-divider\"></div>\n    <h4 class=\"subtitle\">{{ 'exemple' | translate }} 13</h4>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'vista' | translate }}</h5>\n        <pre><code [highlight]=\"exemple13\"></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'resultat' | translate }}</h5>\n        <button (click)=\"reload1()\">Toggle 1</button>\n        <p [ngClass]=\"objectVar2\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n      </div>\n    </div>\n    <div class=\"is-divider\"></div>\n    <h4 class=\"subtitle\">{{ 'exemple' | translate }} 14</h4>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'vista' | translate }}</h5>\n        <pre><code [highlight]=\"exemple14\"></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'resultat' | translate }}</h5>\n        <button (click)=\"reload1()\">Toggle 1</button>\n        <button (click)=\"reload2()\">Toggle 2</button>\n        <p [ngClass]=\"objectVar3\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n      </div>\n    </div>\n\n  </section>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/angular/directivas/ngfor/ngfor.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/angular/directivas/ngfor/ngfor.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <header>\n    <h1 class=\"title\">Directives</h1>\n    <h2 class=\"subtitle\">ngFor</h2>\n    <div class=\"is-divider\"></div>\n  </header>\n  <section>\n    <h3 class=\"subtitle\">{{ 'que.es' | translate }}</h3>\n    <p [innerHtml]=\"'angular.directives.ngfor.explicacio' | translate\"></p>\n    <p>{{ 'representacio.title' | translate }}</p>\n    <ul>\n      <li><code ngNonBindable>*ngFor=\"let element of array\"</code></li>\n      <li><code ngNonBindable>ngFor let-element [ngForOf]=\"array\"</code>\n        ({{ 'angular.directives.ngif.nomes.ngtemplate' | translate}})</li>\n    </ul>\n    <p [innerHtml]=\"'angular.directives.ngfor.on' | translate\"></p>\n\n    <h3 class=\"subtitle\">{{ 'angular.directives.ngfor.vars.title' | translate }}</h3>\n    <p [innerHtml]=\"'angular.directives.ngfor.vars.explicacio1' | translate\"></p>\n\n    <table>\n      <tr>\n        <th>{{ 'variable' | translate }}</th>\n        <th>{{ 'explicacio' | translate }}</th>\n      </tr>\n      <tr>\n        <td><code>index</code></td>\n        <td [innerHtml]=\"'angular.directives.ngfor.vars.index' | translate\"></td>\n      </tr>\n      <tr>\n        <td><code>first</code></td>\n        <td [innerHtml]=\"'angular.directives.ngfor.vars.first' | translate\"></td>\n      </tr>\n      <tr>\n        <td><code>last</code></td>\n        <td [innerHtml]=\"'angular.directives.ngfor.vars.last' | translate\"></td>\n      </tr>\n      <tr>\n        <td><code>odd</code></td>\n        <td [innerHtml]=\"'angular.directives.ngfor.vars.odd' | translate\"></td>\n      </tr>\n      <tr>\n        <td><code>even</code></td>\n        <td [innerHtml]=\"'angular.directives.ngfor.vars.even' | translate\"></td>\n      </tr>\n    </table>\n\n    <p [innerHtml]=\"'angular.directives.ngfor.vars.explicacio2' | translate\"></p>\n\n    <ul>\n      <li><code ngNonBindable>*ngFor=\"let element of array; variable as alias\"</code></li>\n      <li><code ngNonBindable>ngFor let-element [ngForOf]=\"array\" let-alias=\"variable\"</code>\n        ({{ 'angular.directives.ngif.nomes.ngtemplate' | translate}})</li>\n    </ul>\n    <p [innerHtml]=\"'angular.directives.ngfor.vars.on' | translate\"></p>\n\n    <h3 class=\"subtitle\">{{ 'exemples' | translate }}</h3>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h4 class=\"subtitle\">{{ 'vista' | translate }}</h4>\n        <pre><code [highlight]='exemple1'></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h4 class=\"subtitle\">{{ 'resultat' | translate }}</h4>\n        <ul>\n          <li *ngFor=\"let fruit of ['banana','apple','orange']\">{{fruit}}</li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"is-divider\"></div>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h4 class=\"subtitle\">{{ 'vista' | translate }}</h4>\n        <pre><code [highlight]='exemple2'></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h4 class=\"subtitle\">{{ 'resultat' | translate }}</h4>\n        <ul>\n          <ng-template ngFor let-fruit [ngForOf]=\"['banana','apple','orange']\">\n            <li>{{fruit}}</li>\n          </ng-template>\n        </ul>\n      </div>\n    </div>\n    <div class=\"is-divider\"></div>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h4 class=\"subtitle\">{{ 'vista' | translate }}</h4>\n        <pre><code [highlight]='exemple3'></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h4 class=\"subtitle\">{{ 'resultat' | translate }}</h4>\n        <table>\n          <tr>\n            <th>{{ 'angular.directives.ngfor.exemple.element' | translate}}</th>\n            <th>{{ 'angular.directives.ngfor.exemple.index' | translate}}</th>\n            <th>{{ 'angular.directives.ngfor.exemple.esprimer' | translate}}</th>\n            <th>{{ 'angular.directives.ngfor.exemple.esultim' | translate}}</th>\n            <th>{{ 'angular.directives.ngfor.exemple.espar' | translate}}</th>\n            <th>{{ 'angular.directives.ngfor.exemple.esimpar' | translate}}</th>\n          </tr>\n          <tr *ngFor=\"let fruit of ['banana','apple','orange'];\n              index as i; first as isFirst; last as isLast;\n              even as isEven; odd as isOdd\">\n            <td>{{fruit}}</td>\n            <td>{{i}}</td>\n            <td>{{(isFirst ? 'si' : 'no') | translate}}</td>\n            <td>{{(isLast ? 'si' : 'no') | translate}}</td>\n            <td>{{(isOdd ? 'si' : 'no') | translate}}</td>\n            <td>{{(isEven ? 'si' : 'no') | translate}}</td>\n          </tr>\n        </table>\n      </div>\n    </div>\n    <div class=\"is-divider\"></div>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h4 class=\"subtitle\">{{ 'vista' | translate }}</h4>\n        <pre><code [highlight]='exemple4'></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h4 class=\"subtitle\">{{ 'resultat' | translate }}</h4>\n        <table>\n          <tr>\n            <th>{{ 'angular.directives.ngfor.exemple.element' | translate}}</th>\n            <th>{{ 'angular.directives.ngfor.exemple.index' | translate}}</th>\n            <th>{{ 'angular.directives.ngfor.exemple.esprimer' | translate}}</th>\n            <th>{{ 'angular.directives.ngfor.exemple.esultim' | translate}}</th>\n            <th>{{ 'angular.directives.ngfor.exemple.espar' | translate}}</th>\n            <th>{{ 'angular.directives.ngfor.exemple.esimpar' | translate}}</th>\n          </tr>\n          <ng-template ngFor let-fruit [ngForOf]=\"['banana','apple','orange']\" let-i=\"index\" let-isFirst=\"first\"\n            let-isLast=\"last\" let-isEven=\"even\" let-isOdd=\"odd\">\n            <tr>\n              <td>{{fruit}}</td>\n              <td>{{i}}</td>\n              <td>{{(isFirst ? 'si' : 'no') | translate}}</td>\n              <td>{{(isLast ? 'si' : 'no') | translate}}</td>\n              <td>{{(isOdd ? 'si' : 'no') | translate}}</td>\n              <td>{{(isEven ? 'si' : 'no') | translate}}</td>\n            </tr>\n          </ng-template>\n        </table>\n      </div>\n    </div>\n    <div class=\"is-divider\"></div>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h4 class=\"subtitle\">{{ 'component' | translate }}</h4>\n        <pre><code [highlight]='exemple5component'></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h4 class=\"subtitle\">{{ 'vista' | translate }}</h4>\n        <pre><code [highlight]='exemple5'></code></pre>\n      </div>\n    </div>\n    <h4 class=\"subtitle\">{{ 'resultat' | translate }}</h4>\n    <table>\n      <tr>\n        <th>{{ 'angular.directives.ngfor.exemple.nom' | translate }}</th>\n        <th>{{ 'angular.directives.ngfor.exemple.cognoms' | translate }}</th>\n        <th>{{ 'angular.directives.ngfor.exemple.edat' | translate }}</th>\n      </tr>\n      <tr *ngFor=\"let element of array\">\n        <td>{{element.name}}</td>\n        <td>{{element.surname}}</td>\n        <td>{{element.age}}</td>\n      </tr>\n    </table>\n\n  </section>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/angular/directivas/ngif/ngif.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/angular/directivas/ngif/ngif.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <header>\n    <h1 class=\"title\">Directives</h1>\n    <h2 class=\"subtitle\">ngIf</h2>\n    <div class=\"is-divider\"></div>\n  </header>\n  <section>\n    <h3 class=\"subtitle\">{{ 'que.es' | translate }}</h3>\n    <p [innerHtml]=\"'angular.directives.ngif.explicacio' | translate\"></p>\n    <p>{{ 'representacio.title' | translate }}</p>\n    <ul>\n      <li>\n        <pre><code highlight='<div *ngIf=\"condition\">content</div>'></code></pre>\n      </li>\n      <li>\n        <pre><code highlight='<ng-template [ngIf]=\"condition\">content</ng-template> <!-- ({{ \"angular.directives.ngif.nomes.ngtemplate\" | translate }}) -->'></code></pre>\n      </li>\n    </ul>\n    <p [innerHtml]=\"'angular.directives.ngif.on' | translate\"></p>\n\n    <h3 class=\"subtitle\">Else</h3>\n    <p [innerHtml]=\"'angular.directives.ngif.else.explicacio' | translate\"></p>\n    <p>{{ 'representacio.title' | translate }}</p>\n    <ul>\n      <li>\n        <pre><code [highlight]='elserepresentacio1'></code></pre>\n      </li>\n      <li>\n        <pre><code [highlight]='elserepresentacio2'></code></pre>\n      </li>\n    </ul>\n    <p [innerHtml]=\"'angular.directives.ngif.else.on' | translate\"></p>\n\n    <h3 class=\"subtitle\">Then</h3>\n    <p [innerHtml]=\"'angular.directives.ngif.then.explicacio1' | translate\"></p>\n    <p>{{ 'representacio.single.title' | translate }}</p>\n    <pre><code [highlight]='thenrepresentacio'></code></pre>\n    <p [innerHtml]=\"'angular.directives.ngif.then.on' | translate\"></p>\n    <p [innerHtml]=\"'angular.directives.ngif.then.explicacio2' | translate\"></p>\n\n    <h3 class=\"subtitle\">{{ 'exemples' | translate }}</h3>\n    <div class=\"columns is-desktop\">\n      <div class=\"column\">\n        <h4 class=\"subtitle\">{{ 'component' | translate }}</h4>\n        <pre><code [highlight]='component'></code></pre>\n      </div>\n      <div class=\"column\">\n        <h4 class=\"subtitle\">{{ 'vista' | translate }}</h4>\n        <pre><code [highlight]='exemple1'></code></pre>\n        <h4 class=\"subtitle\">{{ 'resultat' | translate }}</h4>\n        <button (click)=\"show = !show;\">Toggle</button>\n        <span *ngIf=\"show\"> HTML </span>\n      </div>\n    </div>\n    <div class=\"is-divider\"></div>\n    <div class=\"columns is-desktop\">\n      <div class=\"column\">\n        <h4 class=\"subtitle\">{{ 'vista' | translate }} ({{ 'mateix.component' | translate }})</h4>\n        <pre><code [highlight]='exemple2'></code></pre>\n      </div>\n      <div class=\"column\">\n        <h4 class=\"subtitle\">{{ 'resultat' | translate }}</h4>\n        <button (click)=\"show = !show;\">Toggle</button>\n        <ng-template [ngIf]=\"show\">\n          <span> HTML </span>\n        </ng-template>\n      </div>\n    </div>\n    <div class=\"is-divider\"></div>\n    <div class=\"columns is-desktop\">\n      <div class=\"column\">\n        <h4 class=\"subtitle\">{{ 'vista' | translate }} ({{ 'mateix.component' | translate }})</h4>\n        <pre><code [highlight]='exemple3'></code></pre>\n      </div>\n      <div class=\"column\">\n        <h4 class=\"subtitle\">{{ 'resultat' | translate }}</h4>\n        <button (click)=\"show = !show\">Toggle</button>\n        <span *ngIf=\"show; else elseSpan1\"> HTML </span>\n        <ng-template #elseSpan1>\n          <span> Else 1 </span>\n        </ng-template>\n      </div>\n    </div>\n    <div class=\"is-divider\"></div>\n    <div class=\"columns is-desktop\">\n      <div class=\"column\">\n        <h4 class=\"subtitle\">{{ 'vista' | translate }} ({{ 'mateix.component' | translate }})</h4>\n        <pre><code [highlight]='exemple4'></code></pre>\n      </div>\n      <div class=\"column\">\n        <h4 class=\"subtitle\">{{ 'resultat' | translate }}</h4>\n        <button (click)=\"show = !show\">Toggle</button>\n        <ng-template [ngIf]=\"show\" [ngIfElse]=\"elseSpan2\">\n          <span> HTML </span>\n        </ng-template>\n        <ng-template #elseSpan2>\n          <span> Else 2 </span>\n        </ng-template>\n      </div>\n    </div>\n    <div class=\"is-divider\"></div>\n    <div class=\"columns is-desktop\">\n      <div class=\"column\">\n        <h4 class=\"subtitle\">{{ 'vista' | translate }} ({{ 'mateix.component' | translate }})</h4>\n        <pre><code [highlight]='exemple5'></code></pre>\n      </div>\n      <div class=\"column\">\n        <h4 class=\"subtitle\">{{ 'resultat' | translate }}</h4>\n        <button (click)=\"show = !show\">Toggle</button>\n        <div *ngIf=\"show; then thenSpan; else elseSpan3\"></div>\n        <ng-template #thenSpan>\n          <span> Then </span>\n        </ng-template>\n        <ng-template #elseSpan3>\n          <span> Else 3 </span>\n        </ng-template>\n      </div>\n    </div>\n\n  </section>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/angular/directivas/ngmodel/ngmodel.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/angular/directivas/ngmodel/ngmodel.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <header>\n    <h1 class=\"title\">Directives</h1>\n    <h2 class=\"subtitle\">ngModel</h2>\n    <div class=\"is-divider\"></div>\n  </header>\n  <section>\n    <h3 class=\"subtitle\">{{ 'que.es' | translate }}</h3>\n    <p [innerHtml]=\"'angular.directives.ngmodel.explicacio1' | translate\"></p>\n    <p [innerHtml]=\"'angular.directives.ngmodel.explicacio2' | translate\"></p>\n    <p>{{ 'angular.directives.ngmodel.redirect' | translate }} <a routerLink=\"/angular/binding/twoway\">Data Bindings: Two Way</a>.</p>\n  </section>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/angular/directivas/ngstyle/ngstyle.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/angular/directivas/ngstyle/ngstyle.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <header>\n    <h1 class=\"title\">Directives</h1>\n    <h2 class=\"subtitle\">ngStyle</h2>\n    <div class=\"is-divider\"></div>\n  </header>\n  <section>\n    <h3 class=\"subtitle\">{{ 'que.es' | translate }}</h3>\n    <p [innerHtml]=\"'angular.directives.ngstyle.explicacio' | translate\"></p>\n    <p>{{ 'representacio.title' | translate }}</p>\n    <ul>\n      <li *ngFor=\"let representacio of representacions\"><code>{{representacio}}</code></li>\n    </ul>\n    <p [innerHtml]=\"'angular.directives.ngstyle.on1' | translate\"></p>\n    <p [innerHtml]=\"'angular.directives.ngstyle.on2' | translate\"></p>\n\n    <h3 class=\"subtitle\">{{ 'exemples' | translate }}</h3>\n    <h4 class=\"subtitle\">{{ 'component' | translate }}</h4>\n    <pre><code [highlight]=\"component\"></code></pre>\n    <div class=\"is-divider\"></div>\n    <h4 class=\"subtitle\">{{ 'exemple' | translate }} 1</h4>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'vista' | translate }}</h5>\n        <pre><code [highlight]=\"exemple1\"></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'resultat' | translate }}</h5>\n        <p [ngStyle]=\"{'color': 'green'}\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n      </div>\n    </div>\n    <div class=\"is-divider\"></div>\n    <h4 class=\"subtitle\">{{ 'exemple' | translate }} 2</h4>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'vista' | translate }}</h5>\n        <pre><code [highlight]=\"exemple2\"></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'resultat' | translate }}</h5>\n        <p [ngStyle]=\"{'color': 'green', 'background-color': 'blue'}\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n      </div>\n    </div>\n    <div class=\"is-divider\"></div>\n    <h4 class=\"subtitle\">{{ 'exemple' | translate }} 3</h4>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'vista' | translate }}</h5>\n        <pre><code [highlight]=\"exemple3\"></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'resultat' | translate }}</h5>\n        <p [ngStyle]=\"styleObj\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n      </div>\n    </div>\n    <div class=\"is-divider\"></div>\n    <h4 class=\"subtitle\">{{ 'exemple' | translate }} 4</h4>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'vista' | translate }}</h5>\n        <pre><code [highlight]=\"exemple4\"></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'resultat' | translate }}</h5>\n        <p [style.color]=\"'green'\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n      </div>\n    </div>\n    <div class=\"is-divider\"></div>\n    <h4 class=\"subtitle\">{{ 'exemple' | translate }} 5</h4>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'vista' | translate }}</h5>\n        <pre><code [highlight]=\"exemple5\"></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'resultat' | translate }}</h5>\n        <p [style.background-color]=\"styleValue\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n      </div>\n    </div>\n    <div class=\"is-divider\"></div>\n    <h4 class=\"subtitle\">{{ 'exemple' | translate }} 6</h4>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'vista' | translate }}</h5>\n        <pre><code [highlight]=\"exemple6\"></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'resultat' | translate }}</h5>\n        <p [style.font-size.px]=\"'5'\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n      </div>\n    </div>\n    <div class=\"is-divider\"></div>\n    <h4 class=\"subtitle\">{{ 'exemple' | translate }} 7</h4>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'vista' | translate }}</h5>\n        <pre><code [highlight]=\"exemple7\"></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'resultat' | translate }}</h5>\n        <p [style.font-size.em]=\"'5'\" [style.white-space]=\"'nowrap'\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n      </div>\n    </div>\n    <div class=\"is-divider\"></div>\n    <h4 class=\"subtitle\">{{ 'exemple' | translate }} 8</h4>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'vista' | translate }}</h5>\n        <pre><code [highlight]=\"exemple8\"></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'resultat' | translate }}</h5>\n        <p [style.font-size.px]=\"styleValue2\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n      </div>\n    </div>\n    <div class=\"is-divider\"></div>\n    <h4 class=\"subtitle\">{{ 'exemple' | translate }} 9</h4>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'vista' | translate }}</h5>\n        <pre><code [highlight]=\"exemple9\"></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'resultat' | translate }}</h5>\n        <p [style.font-size.em]=\"styleValue2\" [style.white-space]=\"'nowrap'\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n      </div>\n    </div>\n    <div class=\"is-divider\"></div>\n    <h4 class=\"subtitle\">{{ 'exemple' | translate }} 10</h4>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'vista' | translate }}</h5>\n        <pre><code [highlight]=\"exemple10\"></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'resultat' | translate }}</h5>\n        <p [style.font-size]=\"styleValue3\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n      </div>\n    </div>\n    <div class=\"is-divider\"></div>\n\n  </section>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/angular/directivas/ngswitch/ngswitch.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/angular/directivas/ngswitch/ngswitch.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <header>\n    <h1 class=\"title\">Directives</h1>\n    <h2 class=\"subtitle\">ngSwitch</h2>\n    <div class=\"is-divider\"></div>\n  </header>\n  <section>\n    <h3 class=\"subtitle\">{{ 'que.es' | translate }}</h3>\n    <p [innerHtml]=\"'angular.directives.ngswitch.explicacio' | translate\"></p>\n    <p>{{ 'representacio.single.title' | translate }}</p>\n    <pre><code [highlight]='representacio'></code></pre>\n    <p [innerHtml]=\"'angular.directives.ngswitch.on1' | translate\"></p>\n    <p [innerHtml]=\"'angular.directives.ngswitch.on2' | translate\"></p>\n\n    <h3 class=\"subtitle\">{{ 'exemple' | translate }}</h3>\n\n    <div class=\"columns is-desktop\">\n        <div class=\"column is-6-desktop\">\n            <h4 class=\"subtitle\">{{ 'component' | translate }}</h4>\n            <pre><code [highlight]='component'></code></pre>\n        </div>\n        <div class=\"column is-6-desktop\">\n            <h4 class=\"subtitle\">{{ 'vista' | translate }}</h4>\n            <pre><code [highlight]='exemple'></code></pre>\n        </div>\n    </div>\n    <h4 class=\"subtitle\">{{ 'resultat' | translate }}</h4>\n\n    <input id=\"veganRadio\" type=\"radio\" name=\"menu\" value=\"vegan\" [(ngModel)]=\"menu\" />\n    <label for=\"veganRadio\"> Vegan</label><br />\n    <input id=\"pastaRadio\" type=\"radio\" name=\"menu\" value=\"pasta\" [(ngModel)]=\"menu\" />\n    <label for=\"pastaRadio\"> Pasta</label><br />\n    <input id=\"meatRadio\" type=\"radio\" name=\"menu\" value=\"meat\" [(ngModel)]=\"menu\" />\n    <label for=\"meatRadio\"> Meat</label><br />\n    <input id=\"otherRadio\" type=\"radio\" name=\"menu\" value=\"other\" [(ngModel)]=\"menu\" />\n    <label for=\"otherRadio\"> Other</label><br />\n\n    <div [ngSwitch]=\"menu\">\n      <p *ngSwitchCase=\"'vegan'\">Tropical salad</p>\n      <p *ngSwitchCase=\"'pasta'\">Macaroni with carbonara sauce</p>\n      <p *ngSwitchCase=\"'meat'\">Pork Chops</p>\n      <p *ngSwitchDefault>Paella</p>\n    </div>\n\n  </section>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/angular/directivas/ngtemplate/ngtemplate.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/angular/directivas/ngtemplate/ngtemplate.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <header>\n    <h1 class=\"title\">Directives</h1>\n    <h2 class=\"subtitle\">{{ 'angular.directives.structures.title' | translate }}</h2>\n    <div class=\"is-divider\"></div>\n  </header>\n  <section>\n    <h3 class=\"subtitle\">{{ 'que.es' | translate }}</h3>\n\n    <p [innerHtml]=\"'angular.directives.structures.explicacio1' | translate\"></p>\n    <p [innerHtml]=\"'angular.directives.structures.explicacio2' | translate\"></p>\n    <p [innerHtml]=\"'angular.directives.structures.explicacio3' | translate\"></p>\n\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <pre><code [highlight]=\"exemple1\"></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <pre><code [highlight]=\"exemple2\"></code></pre>\n      </div>\n    </div>\n\n    <p [innerHtml]=\"'angular.directives.structures.explicacio4' | translate\"></p>\n    <pre><code [highlight]=\"exemple3\"></code></pre>\n\n    <p [innerHtml]=\"'angular.directives.structures.explicacio5' | translate\"></p>\n\n    <h3 class=\"subtitle\">NgContainer</h3>\n\n    <p [innerHtml]=\"'angular.directives.structures.container.explicacio1' | translate\"></p>\n\n    <p [innerHtml]=\"'angular.directives.structures.container.explicacio2' | translate\"></p>\n\n    <h4 class=\"subtitle\">{{ 'exemple' | translate }}</h4>\n    <p [innerHtml]=\"'angular.directives.structures.container.explicacio3' | translate\"></p>\n\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'vista' | translate }}</h5>\n        <pre><code [highlight]=\"containerExemple1\"></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'resultat' | translate }}</h5>\n        <ng-container>\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n        </ng-container>\n      </div>\n    </div>\n    <div class=\"is-divider\"></div>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'vista' | translate }}</h5>\n        <pre><code [highlight]=\"containerExemple2\"></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'resultat' | translate }}</h5>\n        <button (click)=\"show = !show\">Toggle</button>\n        <ng-container *ngIf=\"show\">\n          <p *ngFor=\"let fruit of ['banana', 'orange', 'apple']\"> {{fruit}} </p>\n        </ng-container>\n      </div>\n    </div>\n\n    <h3 class=\"subtitle\">NgTemplate</h3>\n\n    <p [innerHtml]=\"'angular.directives.structures.template.explicacio1' | translate\"></p>\n    <p [innerHtml]=\"'angular.directives.structures.template.explicacio2' | translate\"></p>\n    <p [innerHtml]=\"'angular.directives.structures.template.explicacio3' | translate\"></p>\n\n    <h4 class=\"subtitle\">{{ 'exemples' | translate }}</h4>\n    <p [innerHtml]=\"'angular.directives.structures.template.explicacio4' | translate\"></p>\n\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'vista' | translate }}</h5>\n        <pre><code [highlight]=\"templateExemple1\"></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'resultat' | translate }}</h5>\n        <ng-template>\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n        </ng-template>\n      </div>\n    </div>\n    <div class=\"is-divider\"></div>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'vista' | translate }}</h5>\n        <pre><code [highlight]=\"templateExemple2\"></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'resultat' | translate }}</h5>\n        <button (click)=\"show = !show\">Toggle</button>\n        <ng-template [ngIf]=\"show\">\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n        </ng-template>\n      </div>\n    </div>\n    <div class=\"is-divider\"></div>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'vista' | translate }}</h5>\n        <pre><code [highlight]=\"templateExemple3\"></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'resultat' | translate }}</h5>\n        <button (click)=\"show = !show\">Toggle</button>\n        <p *ngIf=\"show; then thenHtml; else elseHtml\"></p>\n        <ng-template #thenHtml>\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n        </ng-template>\n        <ng-template #elseHtml>\n          <p>Nulla scelerisque consectetur urna, id hendrerit nunc congue vitae.</p>\n        </ng-template>\n      </div>\n    </div>\n    <div class=\"is-divider\"></div>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'vista' | translate }}</h5>\n        <pre><code [highlight]=\"templateExemple4\"></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'resultat' | translate }}</h5>\n        <ng-template ngFor let-fruit [ngForOf]=\"['banana', 'orange', 'apple']\">\n          <p>{{fruit}}</p>\n        </ng-template>\n      </div>\n    </div>\n    <div class=\"is-divider\"></div>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'vista' | translate }}</h5>\n        <pre><code [highlight]=\"templateExemple5\"></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'resultat' | translate }}</h5>\n        <input id=\"veganRadio\" type=\"radio\" name=\"menu\" value=\"vegan\" [(ngModel)]=\"menu\" />\n        <label for=\"veganRadio\"> Vegan</label><br />\n        <input id=\"pastaRadio\" type=\"radio\" name=\"menu\" value=\"pasta\" [(ngModel)]=\"menu\" />\n        <label for=\"pastaRadio\"> Pasta</label><br />\n        <input id=\"meatRadio\" type=\"radio\" name=\"menu\" value=\"meat\" [(ngModel)]=\"menu\" />\n        <label for=\"meatRadio\"> Meat</label><br />\n        <input id=\"otherRadio\" type=\"radio\" name=\"menu\" value=\"other\" [(ngModel)]=\"menu\" />\n        <label for=\"otherRadio\"> Other</label><br />\n        <div [ngSwitch]=\"menu\">\n          <ng-template [ngSwitchCase]=\"'vegan'\">Tropical salad</ng-template>\n          <ng-template [ngSwitchCase]=\"'pasta'\">Macaroni with carbonara sauce</ng-template>\n          <ng-template [ngSwitchCase]=\"'meat'\">Pork Chops</ng-template>\n          <ng-template ngSwitchDefault>Paella</ng-template>\n        </div>\n      </div>\n    </div>\n    <div class=\"is-divider\"></div>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'vista' | translate }}</h5>\n        <pre><code [highlight]=\"templateExemple6\"></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'resultat' | translate }}</h5>\n        <button (click)=\"show = !show\">Toggle</button>\n        <ng-template *ngIf=\"show\" ngFor let-fruit [ngForOf]=\"['banana', 'orange', 'apple']\">\n          <p>{{fruit}}</p>\n        </ng-template>\n      </div>\n    </div>\n    <div class=\"is-divider\"></div>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'vista' | translate }}</h5>\n        <pre><code [highlight]=\"templateExemple7\"></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'resultat' | translate }}</h5>\n        <input id=\"veganRadio2\" type=\"radio\" name=\"menu2\" value=\"vegan\" [(ngModel)]=\"menu\" />\n        <label for=\"veganRadio2\"> Vegan</label><br />\n        <input id=\"pastaRadio2\" type=\"radio\" name=\"menu2\" value=\"pasta\" [(ngModel)]=\"menu\" />\n        <label for=\"pastaRadio2\"> Pasta</label><br />\n        <input id=\"meatRadio2\" type=\"radio\" name=\"menu2\" value=\"meat\" [(ngModel)]=\"menu\" />\n        <label for=\"meatRadio2\"> Meat</label><br />\n        <input id=\"otherRadio2\" type=\"radio\" name=\"menu2\" value=\"other\" [(ngModel)]=\"menu\" />\n        <label for=\"otherRadio2\"> Other</label><br />\n        <ul [ngSwitch]=\"menu\">\n          <ng-template [ngSwitchCase]=\"'vegan'\"\n            *ngFor=\"let vfood of ['Tropical salad', 'Falafel Tabouli Wrap', 'Vegetable Paella']\">\n            <li>{{vfood}}</li>\n          </ng-template>\n          <ng-template [ngSwitchCase]=\"'pasta'\" *ngFor=\"let pfood of ['Macaroni', 'Spaguettis', 'Tagliatelle']\">\n            <li>{{pfood}}</li>\n          </ng-template>\n          <ng-template [ngSwitchCase]=\"'meat'\" *ngFor=\"let mfood of ['Pork Chops', 'Hamburguer', 'Chicken Wings']\">\n            <li>{{mfood}}</li>\n          </ng-template>\n          <ng-template ngSwitchDefault *ngFor=\"let ofood of ['Paella', 'Fabada']\">\n            <li>{{ofood}}</li>\n          </ng-template>\n        </ul>\n      </div>\n    </div>\n\n  </section>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/angular/directivas/ngtemplateoutlet/ngtemplateoutlet.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/angular/directivas/ngtemplateoutlet/ngtemplateoutlet.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <header>\n    <h1 class=\"title\">Directives</h1>\n    <h2 class=\"subtitle\">NgTemplateOutlet</h2>\n    <div class=\"is-divider\"></div>\n  </header>\n  <section>\n    <h3 class=\"subtitle\">{{ 'que.es' | translate }}</h3>\n    <p [innerHtml]=\"'angular.directives.ngtemplateoutlet.explicacio' | translate\"></p>\n\n    <p>{{ 'representacio.title' | translate }}</p>\n    <ul>\n      <li>\n        <pre><code [highlight]='explicacio1'></code></pre>\n      </li>\n      <li>\n        <pre><code [highlight]='explicacio2'></code></pre>\n      </li>\n      <li>\n        <pre><code [highlight]='explicacio3'></code></pre>\n      </li>\n    </ul>\n    <div [innerHtml]=\"'angular.directives.ngtemplateoutlet.on' | translate\"></div>\n\n    <h3 class=\"subtitle\">{{ 'exemples' | translate }}</h3>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h4 class=\"subtitle\">{{ 'vista' | translate }}</h4>\n        <pre><code [highlight]='exemple1'></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h4 class=\"subtitle\">{{ 'resultat' | translate }}</h4>\n        <ng-container *ngTemplateOutlet=\"greet\"></ng-container>\n        <ng-template #greet><span>Hello</span></ng-template>\n      </div>\n    </div>\n    <div class=\"is-divider\"></div>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h4 class=\"subtitle\">{{ 'vista' | translate }}</h4>\n        <pre><code [highlight]='exemple2'></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h4 class=\"subtitle\">{{ 'resultat' | translate }}</h4>\n        <ng-container *ngTemplateOutlet=\"eng; context: { $implicit: 'World' }\"></ng-container>\n        <ng-template #eng let-name><span>Hello {{name}}!</span></ng-template>\n      </div>\n    </div>\n    <div class=\"is-divider\"></div>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h4 class=\"subtitle\">{{ 'vista' | translate }}</h4>\n        <pre><code [highlight]='exemple3'></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h4 class=\"subtitle\">{{ 'resultat' | translate }}</h4>\n        <ng-container *ngTemplateOutlet=\"svk; context: { $implicit: 'World', localSk: 'Svet' }\"></ng-container>\n        <ng-template #svk let-person=\"localSk\"><span>Ahoj {{person}}!</span></ng-template>\n      </div>\n    </div>\n    <div class=\"is-divider\"></div>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h4 class=\"subtitle\">{{ 'component' | translate }}</h4>\n        <pre><code [highlight]='exemple4component'></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h4 class=\"subtitle\">{{ 'vista' | translate }}</h4>\n        <pre><code [highlight]='exemple4'></code></pre>\n\n        <h4 class=\"subtitle\">{{ 'resultat' | translate }}</h4>\n        <ng-container *ngTemplateOutlet=\"esp; context: myContext\"></ng-container>\n        <ng-template #esp let-person=\"localEs\"><span>¡Hola {{person}}!</span></ng-template>\n      </div>\n    </div>\n\n  </section>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/angular/directivas/ngvalue/ngvalue.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/angular/directivas/ngvalue/ngvalue.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <header>\n    <h1 class=\"title\">Directives</h1>\n    <h2 class=\"subtitle\">NgValue</h2>\n    <div class=\"is-divider\"></div>\n  </header>\n  <section>\n    <h3 class=\"subtitle\">{{ 'que.es' | translate }}</h3>\n    <p [innerHtml]=\"'angular.directives.ngvalue.explicacio1' | translate\"></p>\n    <p [innerHtml]=\"'angular.directives.ngvalue.explicacio2' | translate\"></p>\n\n    <h3 class=\"subtitle\">{{ 'exemples' | translate }}</h3>\n\n    <h5 class=\"subtitle\">{{ 'component' | translate }}</h5>\n    <pre><code [highlight]=\"component\"></code></pre>\n\n    <h4 class=\"subtitle\">{{ 'exemple' | translate }} 1</h4>\n\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'vista' | translate }}</h5>\n        <pre><code [highlight]=\"vista1\"></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'resultat' | translate }}</h5>\n        <select [(ngModel)]=\"value1\">\n          <option [value]=\"''\">Empty</option>\n          <option [value]=\"null\">Null</option>\n          <option [value]=\"undefined\">Undefined</option>\n          <option [value]=\"'text'\">Text</option>\n          <option [value]=\"{name: 'Ramon', surname: 'Garcia'}\">Object</option>\n        </select>\n        <ng-container *ngTemplateOutlet=\"valueParams; context: { $implicit: value1 }\"></ng-container>\n      </div>\n    </div>\n\n    <div class=\"is-divider\"></div>\n    <h4 class=\"subtitle\">{{ 'exemple' | translate }} 2</h4>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'vista' | translate }}</h5>\n        <pre><code [highlight]=\"vista2\"></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h5 class=\"subtitle\">{{ 'resultat' | translate }}</h5>\n        <select [(ngModel)]=\"value2\">\n          <option [ngValue]=\"''\">Empty</option>\n          <option [ngValue]=\"null\">Null</option>\n          <option [ngValue]=\"undefined\">Undefined</option>\n          <option [ngValue]=\"'text'\">Text</option>\n          <option [ngValue]=\"{name: 'Ramon', surname: 'Garcia'}\">Object</option>\n        </select>\n        <ng-container *ngTemplateOutlet=\"valueParams; context: { $implicit: value2 }\"></ng-container>\n\n        <ng-template #valueParams let-value>\n          <ul>\n            <li>Value: {{value}}</li>\n            <li>Type: {{getTypeOf(value)}}</li>\n            <li>Null: {{value === null}}</li>\n            <li>Undefined: {{value === undefined}}</li>\n            <li *ngIf=\"getTypeOf(value) === 'object'\">Full name: {{value.name}} {{value.surname}}</li>\n          </ul>\n        </ng-template>\n      </div>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/angular/http/http.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/angular/http/http.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <header>\n    <h1 class=\"title\">HTTP Client</h1>\n    <div class=\"is-divider\"></div>\n  </header>\n  <section>\n    <h3 class=\"subtitle\">{{ 'que.es' | translate }}</h3>\n    <p [innerHtml]=\"'angular.http.explicacio1' | translate\"></p>\n\n    <p [innerHtml]=\"'angular.http.explicacio2' | translate\"></p>\n    <pre><code [highlight]=\"init1\"></code></pre>\n    <p [innerHtml]=\"'angular.http.explicacio3' | translate\"></p>\n    <pre><code [highlight]=\"init2\"></code></pre>\n    <p [innerHtml]=\"'angular.http.explicacio4' | translate\"></p>\n    <pre><code [highlight]=\"init3\"></code></pre>\n    <p [innerHtml]=\"'angular.http.explicacio5' | translate\"></p>\n    <pre><code [highlight]=\"init4\"></code></pre>\n    <p [innerHtml]=\"'angular.http.explicacio6' | translate\"></p>\n\n    <p [innerHtml]=\"'angular.http.explicacio7' | translate\"></p>\n    <ul>\n      <li><code>get</code>: {{ 'angular.http.get' | translate }}</li>\n      <li><code>post</code>: {{ 'angular.http.post' | translate }}</li>\n      <li><code>put</code>: {{ 'angular.http.put' | translate }}</li>\n      <li><code>patch</code>: {{ 'angular.http.patch' | translate }}</li>\n      <li><code>delete</code>: {{ 'angular.http.delete' | translate }}</li>\n    </ul>\n\n    <p [innerHtml]=\"'angular.http.explicacio8' | translate\"></p>\n\n    <p [innerHtml]=\"'angular.http.exemple1' | translate\"></p>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h4 class=\"subtitle\">{{ 'exemple' | translate }}</h4>\n        <pre><code [highlight]=\"exemple1\"></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h4 class=\"subtitle\">{{ 'resultat' | translate }}</h4>\n        <pre><code [highlight]=\"resultat1\"></code></pre>\n      </div>\n    </div>\n\n    <p [innerHtml]=\"'angular.http.explicacio9' | translate\"></p>\n    <p [innerHtml]=\"'angular.http.explicacio10' | translate\"></p>\n    <ul>\n      <li><b>arrayBuffer</b>: {{ 'angular.http.arrayBuffer' | translate }}</li>\n      <li><b>blob</b>: {{ 'angular.http.blob' | translate }}</li>\n      <li><b>json</b>: {{ 'angular.http.json' | translate }}</li>\n      <li><b>text</b>: {{ 'angular.http.text' | translate }}</li>\n    </ul>\n    <p [innerHtml]=\"'angular.http.exemple2' | translate\"></p>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h4 class=\"subtitle\">{{ 'exemple' | translate }}</h4>\n        <pre><code [highlight]=\"exemple2\"></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h4 class=\"subtitle\">{{ 'resultat' | translate }}</h4>\n        <pre><code [highlight]=\"resultat2\"></code></pre>\n      </div>\n    </div>\n\n    <p [innerHtml]=\"'angular.http.explicacio11' | translate\"></p>\n    <p [innerHtml]=\"'angular.http.exemple3' | translate\"></p>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h4 class=\"subtitle\">{{ 'exemple' | translate }}</h4>\n        <pre><code [highlight]=\"exemple4\"></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h4 class=\"subtitle\">{{ 'resultat' | translate }}</h4>\n        <pre><code [highlight]=\"resultat1\"></code></pre>\n      </div>\n    </div>\n\n    <p [innerHtml]=\"'angular.http.explicacio12' | translate\"></p>\n    <p [innerHtml]=\"'angular.http.exemple4' | translate\"></p>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h4 class=\"subtitle\">{{ 'exemple' | translate }}</h4>\n        <pre><code [highlight]=\"exemple3\"></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h4 class=\"subtitle\">{{ 'resultat' | translate }}</h4>\n        <pre><code [highlight]=\"resultat3\"></code></pre>\n      </div>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/angular/http/interceptors/interceptors.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/angular/http/interceptors/interceptors.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <header>\n    <h1 class=\"title\">HTTP Client</h1>\n    <h2 class=\"subtitle\">Interceptors</h2>\n    <div class=\"is-divider\"></div>\n  </header>\n  <section>\n    <h3 class=\"subtitle\">{{ 'que.es' | translate }}</h3>\n    <p [innerHtml]=\"'angular.http.interceptors.explicacio1' | translate\"></p>\n    <p [innerHtml]=\"'angular.http.interceptors.explicacio2' | translate\"></p>\n    <p [innerHtml]=\"'angular.http.interceptors.explicacio3' | translate\"></p>\n\n    <h3 class=\"subtitle\">{{ 'exemple' | translate }}</h3>\n\n    <p [innerHtml]=\"'angular.http.interceptors.explicacio4' | translate\"></p>\n\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h4 class=\"subtitle\">Interceptor</h4>\n        <pre><code [highlight]=\"interceptor\"></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h4 class=\"subtitle\">app.module.ts</h4>\n        <pre><code [highlight]=\"appmodule\"></code></pre>\n      </div>\n    </div>\n\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-6-desktop\">\n        <h4 class=\"subtitle\">HTTP Client</h4>\n        <pre><code [highlight]=\"exemple\"></code></pre>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <h4 class=\"subtitle\">{{ 'resultat' | translate }}</h4>\n        <pre><code [highlight]=\"resultat\"></code></pre>\n      </div>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/angular/http/progress/progress.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/angular/http/progress/progress.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>progress works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/angular/http/rxjs/rxjs.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/angular/http/rxjs/rxjs.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>rxjs works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/angular/routing/canactivate/canactivate.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/angular/routing/canactivate/canactivate.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <header>\n    <h1 class=\"title\">Routing</h1>\n    <h2 class=\"subtitle\">{{ 'angular.routing.can.activate.title' | translate }}</h2>\n    <div class=\"is-divider\"></div>\n  </header>\n  <section>\n    <h3 class=\"subtitle\">{{ 'que.es' | translate }}</h3>\n    <p [innerHtml]=\"'angular.routing.can.activate.explicacio' | translate\"></p>\n    <h3 class=\"subtitle\">{{ 'exemple' | translate }}</h3>\n    <p [innerHtml]=\"'angular.routing.can.activate.exemple' | translate\"></p>\n    <pre><code [highlight]=\"authguardservice\"></code></pre>\n  </section>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/angular/routing/example/example.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/angular/routing/example/example.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <header>\n    <h1 class=\"title\">Routing</h1>\n    <h2 class=\"subtitle\">{{ 'angular.routing.exemple.title' | translate }}</h2>\n    <div class=\"is-divider\"></div>\n  </header>\n  <section>\n    <p [innerHtml]=\"'angular.routing.exemple.explicacio1' | translate\"></p>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-half-desktop\">\n        <h3 class=\"subtitle\">app.module.ts</h3>\n        <p [innerHtml]=\"'angular.routing.exemple.explicacio2' | translate\"></p>\n        <p [innerHtml]=\"'angular.routing.exemple.explicacio3' | translate\"></p>\n        <p [innerHtml]=\"'angular.routing.exemple.explicacio4' | translate\"></p>\n        <pre><code [highlight]=\"approutingmodulets\"></code></pre>\n      </div>\n      <div class=\"column is-half-desktop\">\n        <h3 class=\"subtitle\">AuthGuardService</h3>\n        <p [innerHtml]=\"'angular.routing.exemple.explicacio5' | translate\"></p>\n        <p [innerHtml]=\"'angular.routing.exemple.explicacio6' | translate\"></p>\n        <pre><code [highlight]=\"authguardservice\"></code></pre>\n      </div>\n    </div>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-half-desktop\">\n        <h3 class=\"subtitle\">AppComponent</h3>\n        <p [innerHtml]=\"'angular.routing.exemple.explicacio7' | translate\"></p>\n        <pre><code [highlight]=\"appcomponent\"></code></pre>\n      </div>\n      <div class=\"column is-half-desktop\">\n        <h3 class=\"subtitle\">LoginComponent</h3>\n        <p [innerHtml]=\"'angular.routing.exemple.explicacio8' | translate\"></p>\n        <pre><code [highlight]=\"logincomponent\"></code></pre>\n      </div>\n    </div>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-half-desktop\">\n        <h3 class=\"subtitle\">WelcomeComponent</h3>\n        <p [innerHtml]=\"'angular.routing.exemple.explicacio9' | translate\"></p>\n        <pre><code [highlight]=\"welcomecomponent\"></code></pre>\n      </div>\n      <div class=\"column is-half-desktop\">\n        <h3 class=\"subtitle\">NotesComponent</h3>\n        <p [innerHtml]=\"'angular.routing.exemple.explicacio10' | translate\"></p>\n        <pre><code [highlight]=\"notescomponent\" [languages]=\"['typescript']\"></code></pre>\n      </div>\n    </div>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-half-desktop\">\n        <h3 class=\"subtitle\">NoteComponent</h3>\n        <p [innerHtml]=\"'angular.routing.exemple.explicacio11' | translate\"></p>\n        <pre><code [highlight]=\"notecomponent\"></code></pre>\n      </div>\n      <div class=\"column is-half-desktop\">\n        <h3 class=\"subtitle\">{{ 'resultat' | translate }}</h3>\n        <img src=\"assets/Routing.gif\" />\n        <p><a href=\"assets/routing.zip\">{{ 'exemple.descarregar' | translate }}</a></p>\n      </div>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/angular/routing/getparam/getparam.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/angular/routing/getparam/getparam.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <header>\n    <h1 class=\"title\">Routing</h1>\n    <h2 class=\"subtitle\">{{ 'angular.routing.get.params.title' | translate }}</h2>\n    <div class=\"is-divider\"></div>\n  </header>\n  <section>\n    <h3 class=\"subtitle\">{{ 'que.es' | translate }}</h3>\n    <p [innerHtml]=\"'angular.routing.get.params.explicacio' | translate\"></p>\n    <pre><code [highlight]=\"recuperarParams\"></code></pre>\n  </section>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/angular/routing/navigation/navigation.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/angular/routing/navigation/navigation.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <header>\n    <h1 class=\"title\">Routing</h1>\n    <h2 class=\"subtitle\">{{ 'angular.routing.navigation.title' | translate }}</h2>\n    <div class=\"is-divider\"></div>\n  </header>\n  <section>\n    <h3 class=\"subtitle\">{{ 'que.es' | translate }}</h3>\n    <p [innerHtml]=\"'angular.routing.navigation.explicacio' | translate\"></p>\n    <!-- Router Outlet -->\n    <h3 class=\"subtitle\">Router Outlet</h3>\n    <p [innerHtml]=\"'angular.routing.navigation.router.outlet1' | translate\"></p>\n    <pre><code highlight=\"<router-outlet></router-outlet>\"></code></pre>\n    <p [innerHtml]=\"'angular.routing.navigation.router.outlet2' | translate\"></p>\n    <!-- Router Link -->\n    <h3 class=\"subtitle\">Router Link</h3>\n    <p [innerHtml]=\"'angular.routing.navigation.router.link' | translate\"></p>\n    <h4 class=\"subtitle\">{{ 'exemples' | translate }}</h4>\n    <p [innerHtml]=\"'angular.routing.navigation.router.link.exemple1' | translate\"></p>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-3-desktop\">\n        <pre><code [highlight]=\"routerlink1\"></code></pre>\n      </div>\n      <div class=\"column is-1-desktop\">\n        <div [ngClass]=\"{'is-divider-vertical': !size.isMobile(), 'is-divider': size.isMobile()}\"\n          [attr.data-content]=\"'or' | translate\">\n        </div>\n      </div>\n      <div class=\"column is-4-desktop\">\n        <pre><code [highlight]=\"routerlink2\"></code></pre>\n      </div>\n      <div class=\"column is-1-desktop\">\n        <div [ngClass]=\"{'is-divider-vertical': !size.isMobile(), 'is-divider': size.isMobile()}\"\n          [attr.data-content]=\"'or' | translate\">\n        </div>\n      </div>\n      <div class=\"column is-3-desktop\">\n        <pre><code [highlight]=\"routerlink3\"></code></pre>\n      </div>\n    </div>\n    <div class=\"is-divider\"></div>\n    <p [innerHtml]=\"'angular.routing.navigation.router.link.exemple2' | translate\"></p>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-5-desktop\">\n        <pre><code [highlight]=\"routerlink4\"></code></pre>\n      </div>\n      <div class=\"column is-1-desktop\">\n        <div [ngClass]=\"{'is-divider-vertical': !size.isMobile(), 'is-divider': size.isMobile()}\"\n          [attr.data-content]=\"'or' | translate\">\n        </div>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <pre><code [highlight]=\"routerlink5\"></code></pre>\n      </div>\n    </div>\n    <div class=\"is-divider\"></div>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-5-desktop\">\n        <p [innerHtml]=\"'angular.routing.navigation.router.link.exemple3' | translate\"></p>\n        <pre><code [highlight]=\"routerlink6\"></code></pre>\n      </div>\n      <div class=\"column is-1-desktop\">\n        <div [ngClass]=\"{'is-divider-vertical': !size.isMobile(), 'is-divider': size.isMobile()}\">\n        </div>\n      </div>\n      <div class=\"column is-6-desktop\">\n        <p [innerHtml]=\"'angular.routing.navigation.router.link.exemple4' | translate\"></p>\n        <pre><code [highlight]=\"routerlink7\"></code></pre>\n      </div>\n    </div>\n    <!-- Router Link Active -->\n    <h3 class=\"subtitle\">Router Link Active</h3>\n    <p [innerHtml]=\"'angular.routing.navigation.router.link.active1' | translate\"></p>\n    <p [innerHtml]=\"'angular.routing.navigation.router.link.active2' | translate\"></p>\n    <br />\n    <h4 class=\"subtitle\">{{ 'exemples' | translate }}</h4>\n    <p [innerHtml]=\"'angular.routing.navigation.router.link.active.exemple1' | translate\"></p>\n    <pre><code [highlight]=\"routerlinkactive1\"></code></pre>\n    <div class=\"is-divider\"></div>\n    <p [innerHtml]=\"'angular.routing.navigation.router.link.active.exemple2' | translate\"></p>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-one-5-desktop\">\n        <pre><code [highlight]=\"routerlinkactive1\"></code></pre>\n      </div>\n      <div class=\"column is-1-desktop\">\n        <div [ngClass]=\"{'is-divider-vertical': !size.isMobile(), 'is-divider': size.isMobile()}\"\n          [attr.data-content]=\"'or' | translate\">\n        </div>\n      </div>\n      <div class=\"column is-one-6-desktop\">\n        <pre><code [highlight]=\"routerlinkactive2\"></code></pre>\n      </div>\n    </div>\n    <div class=\"is-divider\"></div>\n    <p [innerHtml]=\"'angular.routing.navigation.router.link.active.exemple3' | translate\"></p>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-one-5-desktop\">\n        <pre><code [highlight]=\"routerlinkactive3\"></code></pre>\n      </div>\n      <div class=\"column is-1-desktop\">\n        <div [ngClass]=\"{'is-divider-vertical': !size.isMobile(), 'is-divider': size.isMobile()}\"\n          [attr.data-content]=\"'or' | translate\">\n        </div>\n      </div>\n      <div class=\"column is-one-6-desktop\">\n        <pre><code [highlight]=\"routerlinkactive4\"></code></pre>\n      </div>\n    </div>\n    <div class=\"is-divider\"></div>\n    <p [innerHtml]=\"'angular.routing.navigation.router.link.active.exemple4' | translate\"></p>\n    <pre><code [highlight]=\"routerlinkactive5\"></code></pre>\n    <div class=\"is-divider\"></div>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-one-8-desktop\">\n        <pre><code [highlight]=\"routerlinkactive6\"></code></pre>\n      </div>\n      <div class=\"column is-one-6-desktop\">\n        <img src=\"assets/RouterLinkActive.gif\" />\n      </div>\n    </div>\n    <!-- Router -->\n    <h3 class=\"subtitle\">Router</h3>\n    <p [innerHtml]=\"'angular.routing.navigation.router' | translate\"></p>\n    <br />\n    <h4 class=\"subtitle\">{{ 'exemples' | translate }}</h4>\n    <div class=\"columns is-desktop\">\n      <div class=\"column is-one-third-desktop\">\n        <p [innerHtml]=\"'angular.routing.navigation.router.exemple1' | translate\"></p>\n        <pre><code [highlight]=\"routercomponent1\"></code></pre>\n      </div>\n      <div class=\"column is-one-third-desktop\">\n        <p [innerHtml]=\"'angular.routing.navigation.router.exemple2' | translate\"></p>\n        <pre><code [highlight]=\"routercomponent2\"></code></pre>\n      </div>\n      <div class=\"column is-one-third-desktop\">\n        <p [innerHtml]=\"'angular.routing.navigation.router.exemple3' | translate\"></p>\n        <pre><code [highlight]=\"routercomponent3\"></code></pre>\n      </div>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/angular/routing/routing.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/angular/routing/routing.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <header>\n    <h1 class=\"title\">Routing</h1>\n    <div class=\"is-divider\"></div>\n  </header>\n  <section>\n    <!-- QUE ES -->\n    <h3 class=\"subtitle\">{{ 'que.es' | translate }}</h3>\n    <p [innerHtml]=\"'angular.routing.explicacio1' | translate\"></p>\n    <p [innerHtml]=\"'angular.routing.explicacio2' | translate\"></p>\n    <p [innerHtml]=\"'angular.routing.explicacio3' | translate\"></p>\n\n    <!-- CONFIGURACIO APP -->\n    <h3 class=\"subtitle\">{{ 'angular.routing.config.title' | translate }}</h3>\n    <p [innerHtml]=\"'angular.routing.config.explicacio1' | translate\"></p>\n    <pre><code [highlight]=\"approutingts\"></code></pre>\n    <p [innerHtml]=\"'angular.routing.config.explicacio2' | translate\"></p>\n    <pre><code [highlight]=\"appmodulets\"></code></pre>\n    <p [innerHtml]=\"'angular.routing.config.explicacio3' | translate\"></p>\n    <br />\n    <!-- CONFIGURACIO APP CURTA-->\n    <h4 class=\"subtitle\">{{ 'angular.routing.config.subtitle' | translate }}</h4>\n    <p [innerHtml]=\"'angular.routing.config.explicacio4' | translate\"></p>\n    <pre><code [highlight]=\"appmoduletsshort\"></code></pre>\n\n    <!-- CONFIGURACIO RUTES -->\n    <h3 class=\"subtitle\">{{ 'angular.routing.rutes.title' | translate }}</h3>\n    <p [innerHtml]=\"'angular.routing.rutes.explicacio1' | translate\"></p>\n    <p [innerHtml]=\"'angular.routing.rutes.explicacio2' | translate\"></p>\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th style=\"width: 50px;\">{{ 'parametre' | translate }}</th>\n          <th style=\"width: 50px;\">{{ 'tipus' | translate }}</th>\n          <th>{{ 'explicacio' | translate }}</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>\n            <code>path</code>\n          </td>\n          <td>\n            <i>string</i>\n          </td>\n          <td>\n            {{ 'angular.routing.rutes.taula.path' | translate }}\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <code>component</code>\n          </td>\n          <td>\n            <i>component</i>\n          </td>\n          <td>\n            {{ 'angular.routing.rutes.taula.component' | translate }}\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <code>redirectTo</code>\n          </td>\n          <td>\n            <i>string</i>\n          </td>\n          <td>\n            {{ 'angular.routing.rutes.taula.redirectTo' | translate }}\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <code>canActivate</code>\n          </td>\n          <td>\n            <i>CanActivate</i>\n          </td>\n          <td>\n            {{ 'angular.routing.rutes.taula.canActivate' | translate }}\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <br />\n    <!-- CONFIGURACIO RUTES EXEMPLES -->\n    <h4 class=\"subtitle\">{{ 'exemples' | translate }}</h4>\n    <pre><code [highlight]=\"ruteconfigsamples\"></code></pre>\n    <ul>\n      <li [innerHtml]=\"'angular.routing.rutes.exemple1' | translate\"></li>\n      <li [innerHtml]=\"'angular.routing.rutes.exemple2' | translate\"></li>\n      <li [innerHtml]=\"'angular.routing.rutes.exemple3' | translate\"></li>\n      <li [innerHtml]=\"'angular.routing.rutes.exemple4' | translate\"></li>\n      <li [innerHtml]=\"'angular.routing.rutes.exemple5' | translate\"></li>\n    </ul>\n  </section>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/angular/routing/strategy/strategy.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/angular/routing/strategy/strategy.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <header>\n    <h1 class=\"title\">Routing</h1>\n    <h2 class=\"subtitle\">{{ 'angular.routing.location.strategy.title' | translate }}</h2>\n    <div class=\"is-divider\"></div>\n  </header>\n  <section>\n    <h3 class=\"subtitle\">{{ 'que.es' | translate }}</h3>\n    <p [innerHtml]=\"'angular.routing.location.strategy.explicacio' | translate\"></p>\n    <!-- PathLocationStrategy -->\n    <h3 class=\"subtitle\">PathLocationStrategy</h3>\n    <p [innerHtml]=\"'angular.routing.location.strategy.path1' | translate\"></p>\n    <pre><code>http://localhost:4200/my-app/welcome/</code></pre>\n    <p [innerHtml]=\"'angular.routing.location.strategy.path2' | translate\"></p>\n    <p [innerHtml]=\"'angular.routing.location.strategy.path3' | translate\"></p>\n    <p [innerHtml]=\"'angular.routing.location.strategy.path4' | translate\"></p>\n    <pre><code [highlight]=\"pathstrategy\"></code></pre>\n    <!-- HashLocationStrategy -->\n    <h3 class=\"subtitle\">HashLocationStrategy</h3>\n    <p [innerHtml]=\"'angular.routing.location.strategy.hash1' | translate\"></p>\n    <pre><code>http://localhost:4200/my-app/#/welcome/</code></pre>\n    <p [innerHtml]=\"'angular.routing.location.strategy.hash2' | translate\"></p>\n    <p [innerHtml]=\"'angular.routing.location.strategy.hash3' | translate\"></p>\n    <p [innerHtml]=\"'angular.routing.location.strategy.hash4' | translate\"></p>\n    <pre><code [highlight]=\"hashstrategy\"></code></pre>\n  </section>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/panell/panell.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/panell/panell.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"panel\">\n  <p class=\"panel-heading\">\n    {{ 'title' | translate }}\n    <span style=\"float: right\">\n      <a (click)=\"changeLang('ca')\" [ngClass]=\"{'has-text-weight-bold': translate.currentLang === 'ca'}\">CA</a>\n      <span> | </span>\n      <a (click)=\"changeLang('es')\" [ngClass]=\"{'has-text-weight-bold': translate.currentLang === 'es'}\">ES</a>\n    </span>\n  </p>\n  <div class=\"panel-block\">\n    <p class=\"control has-icons-left\">\n      <input class=\"input is-small\" type=\"text\" [placeholder]=\"'cercar' | translate\" [(ngModel)]=\"filtre\">\n      <span class=\"icon is-small is-left\">\n        <i class=\"fas fa-search\" aria-hidden=\"true\"></i>\n      </span>\n      <span class=\"icon is-small is-right netejar\" (click)=\"filtre = ''\" *ngIf=\"filtre\">\n        <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n      </span>\n    </p>\n  </div>\n  <!-- <p class=\"panel-tabs\">\n    <a [ngClass]=\"{'is-active': tipusSeleccionat === null}\"\n      (click)=\"tipusSeleccionat = null\">{{ 'tots' | translate }}</a>\n    <a *ngFor=\"let type of Tipus.values();\" [ngClass]=\"{'is-active': tipusSeleccionat === type}\"\n      (click)=\"tipusSeleccionat = type\">{{type}}</a>\n  </p> -->\n  <div class=\"menu\">\n    <ng-template ngFor let-pagina [ngForOf]=\"pagines | filtre : filtre : tipusSeleccionat\">\n      <span *ngIf=\"!pagina.url; else paginaUrl\" class=\"panel-block\">\n        <span class=\"panel-icon\">\n          <i [ngClass]=\"pagina.icon\" aria-hidden=\"true\"></i>\n        </span>\n        <strong>\n          {{pagina.nom}}\n        </strong>\n      </span>\n      <ng-template #paginaUrl>\n        <a [routerLink]=\"[pagina.url]\" routerLinkActive=\"is-active\" [routerLinkActiveOptions]=\"{exact: true}\"\n          class=\"panel-block\" style=\"padding-left:2em;\">\n          <span class=\"panel-icon\">\n            <i [ngClass]=\"pagina.icon\" aria-hidden=\"true\"></i>\n          </span>\n          <span>{{pagina.traduir ? (pagina.nom | translate) : pagina.nom}}</span>\n        </a>\n      </ng-template>\n    </ng-template>\n  </div>\n  <!-- <div class=\"panel-block\">\n    <button class=\"button is-link is-outlined is-fullwidth\" (click)=\"netejar()\">\n      {{ 'netejar.filtre' | translate }}\n    </button>\n  </div> -->\n</nav>\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contingut {\r\n  padding: 10px 25px;\r\n  max-width: calc(100vw - 400px);\r\n}\r\n\r\n.menu-panel {\r\n  float: left;\r\n  width: 400px;\r\n  height: 100vh;\r\n}\r\n\r\n.btn-menu,\r\n.btn-close {\r\n  position: fixed;\r\n  top: 2px;\r\n  font-size: 20px;\r\n  text-align: center;\r\n  background-color: white;\r\n  cursor: pointer;\r\n  padding: 1px 6px;\r\n  display: none;\r\n}\r\n\r\n.btn-menu {\r\n  left: 5px;\r\n  border: 1px solid darkgray;\r\n}\r\n\r\n.btn-close {\r\n  left: 399px;\r\n  border: 1px solid lightgray;\r\n}\r\n\r\n@media screen and (max-width: 1823px) {\r\n  .contingut {\r\n    padding: 40px 25px 10px 25px;\r\n    max-width: 100vw;\r\n    float: initial;\r\n  }\r\n\r\n  .menu-panel {\r\n    display: none;\r\n    float: left;\r\n    position: absolute;\r\n    z-index: 1;\r\n  }\r\n\r\n  .btn-menu {\r\n    display: block;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1824px) {\r\n  .contingut {\r\n    margin-left: 400px;\r\n  }\r\n\r\n  .menu-panel {\r\n    display: block !important;\r\n  }\r\n\r\n  .btn-menu {\r\n    display: none !important;\r\n  }\r\n\r\n  .btn-close {\r\n    display: none !important;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLFFBQVE7RUFDUixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFNBQVM7RUFDVCwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0U7SUFDRSw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLHdCQUF3QjtFQUMxQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGluZ3V0IHtcclxuICBwYWRkaW5nOiAxMHB4IDI1cHg7XHJcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gNDAwcHgpO1xyXG59XHJcblxyXG4ubWVudS1wYW5lbCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5idG4tbWVudSxcclxuLmJ0bi1jbG9zZSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMnB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDFweCA2cHg7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmJ0bi1tZW51IHtcclxuICBsZWZ0OiA1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZGFya2dyYXk7XHJcbn1cclxuXHJcbi5idG4tY2xvc2Uge1xyXG4gIGxlZnQ6IDM5OXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTgyM3B4KSB7XHJcbiAgLmNvbnRpbmd1dCB7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDI1cHggMTBweCAyNXB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDB2dztcclxuICAgIGZsb2F0OiBpbml0aWFsO1xyXG4gIH1cclxuXHJcbiAgLm1lbnUtcGFuZWwge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcblxyXG4gIC5idG4tbWVudSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE4MjRweCkge1xyXG4gIC5jb250aW5ndXQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1lbnUtcGFuZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5idG4tbWVudSB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYnRuLWNsb3NlIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIl19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_size_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/size.service */ "./src/app/services/size.service.ts");





let AppComponent = class AppComponent {
    constructor(translate, size, titleService) {
        this.translate = translate;
        this.size = size;
        this.titleService = titleService;
        this.translate.addLangs(['ca', 'es']);
        this.translate.setDefaultLang('ca');
        this.translate.onLangChange.subscribe((event) => {
            this.titleService.setTitle(this.translate.instant('title'));
        });
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/ca|es/) ? browserLang : 'ca');
    }
    onResize(event) {
        this.size.innerWidth = window.innerWidth;
        console.log(window.innerWidth);
    }
    hidemenu() {
        let menuPanel = document.getElementsByClassName("menu-panel")[0];
        let btnMenu = document.getElementsByClassName("btn-menu")[0];
        let btnClose = document.getElementsByClassName("btn-close")[0];
        menuPanel.style['display'] = 'none';
        btnMenu.style['display'] = 'block';
        btnClose.style['display'] = 'none';
        console.log("Hidding Menu");
    }
    showmenu() {
        let menuPanel = document.getElementsByClassName("menu-panel")[0];
        let btnMenu = document.getElementsByClassName("btn-menu")[0];
        let btnClose = document.getElementsByClassName("btn-close")[0];
        menuPanel.style['display'] = 'block';
        btnMenu.style['display'] = 'none';
        btnClose.style['display'] = 'block';
        console.log("Showing Menu");
    }
};
AppComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: _services_size_service__WEBPACK_IMPORTED_MODULE_4__["SizeService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
], AppComponent.prototype, "onResize", null);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: hljsLanguages, DynamicLocaleId, HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hljsLanguages", function() { return hljsLanguages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicLocaleId", function() { return DynamicLocaleId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-highlightjs */ "./node_modules/ngx-highlightjs/fesm2015/ngx-highlightjs.js");
/* harmony import */ var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! highlight.js/lib/languages/xml */ "./node_modules/highlight.js/lib/languages/xml.js");
/* harmony import */ var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! highlight.js/lib/languages/typescript */ "./node_modules/highlight.js/lib/languages/typescript.js");
/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var highlight_js_lib_languages_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! highlight.js/lib/languages/css */ "./node_modules/highlight.js/lib/languages/css.js");
/* harmony import */ var highlight_js_lib_languages_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _pipes_filtre_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @pipes/filtre.pipe */ "./src/app/pipes/filtre.pipe.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _interceptors_httpsample_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./interceptors/httpsample.interceptor */ "./src/app/interceptors/httpsample.interceptor.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_panell_panell_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @components/panell/panell.component */ "./src/app/components/panell/panell.component.ts");
/* harmony import */ var _components_angular_binding_one_way_data_one_way_data_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @components/angular/binding/one-way-data/one-way-data.component */ "./src/app/components/angular/binding/one-way-data/one-way-data.component.ts");
/* harmony import */ var _components_angular_binding_one_way_view_one_way_view_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @components/angular/binding/one-way-view/one-way-view.component */ "./src/app/components/angular/binding/one-way-view/one-way-view.component.ts");
/* harmony import */ var _components_angular_binding_two_way_two_way_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @components/angular/binding/two-way/two-way.component */ "./src/app/components/angular/binding/two-way/two-way.component.ts");
/* harmony import */ var _components_angular_directivas_ngif_ngif_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @components/angular/directivas/ngif/ngif.component */ "./src/app/components/angular/directivas/ngif/ngif.component.ts");
/* harmony import */ var _components_angular_directivas_ngfor_ngfor_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @components/angular/directivas/ngfor/ngfor.component */ "./src/app/components/angular/directivas/ngfor/ngfor.component.ts");
/* harmony import */ var _components_angular_directivas_ngswitch_ngswitch_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/angular/directivas/ngswitch/ngswitch.component */ "./src/app/components/angular/directivas/ngswitch/ngswitch.component.ts");
/* harmony import */ var _components_angular_directivas_ngvalue_ngvalue_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/angular/directivas/ngvalue/ngvalue.component */ "./src/app/components/angular/directivas/ngvalue/ngvalue.component.ts");
/* harmony import */ var _components_angular_directivas_ngmodel_ngmodel_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/angular/directivas/ngmodel/ngmodel.component */ "./src/app/components/angular/directivas/ngmodel/ngmodel.component.ts");
/* harmony import */ var _components_angular_directivas_ngclass_ngclass_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @components/angular/directivas/ngclass/ngclass.component */ "./src/app/components/angular/directivas/ngclass/ngclass.component.ts");
/* harmony import */ var _components_angular_directivas_ngstyle_ngstyle_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @components/angular/directivas/ngstyle/ngstyle.component */ "./src/app/components/angular/directivas/ngstyle/ngstyle.component.ts");
/* harmony import */ var _components_angular_directivas_ngtemplate_ngtemplate_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/angular/directivas/ngtemplate/ngtemplate.component */ "./src/app/components/angular/directivas/ngtemplate/ngtemplate.component.ts");
/* harmony import */ var _components_angular_directivas_ngtemplateoutlet_ngtemplateoutlet_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/angular/directivas/ngtemplateoutlet/ngtemplateoutlet.component */ "./src/app/components/angular/directivas/ngtemplateoutlet/ngtemplateoutlet.component.ts");
/* harmony import */ var _components_angular_routing_routing_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @components/angular/routing/routing.component */ "./src/app/components/angular/routing/routing.component.ts");
/* harmony import */ var _components_angular_routing_canactivate_canactivate_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @components/angular/routing/canactivate/canactivate.component */ "./src/app/components/angular/routing/canactivate/canactivate.component.ts");
/* harmony import */ var _components_angular_routing_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @components/angular/routing/strategy/strategy.component */ "./src/app/components/angular/routing/strategy/strategy.component.ts");
/* harmony import */ var _components_angular_routing_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @components/angular/routing/navigation/navigation.component */ "./src/app/components/angular/routing/navigation/navigation.component.ts");
/* harmony import */ var _components_angular_routing_getparam_getparam_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @components/angular/routing/getparam/getparam.component */ "./src/app/components/angular/routing/getparam/getparam.component.ts");
/* harmony import */ var _components_angular_routing_example_example_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @components/angular/routing/example/example.component */ "./src/app/components/angular/routing/example/example.component.ts");
/* harmony import */ var _components_angular_http_http_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/angular/http/http.component */ "./src/app/components/angular/http/http.component.ts");
/* harmony import */ var _components_angular_http_interceptors_interceptors_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/angular/http/interceptors/interceptors.component */ "./src/app/components/angular/http/interceptors/interceptors.component.ts");
/* harmony import */ var _components_angular_http_progress_progress_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/angular/http/progress/progress.component */ "./src/app/components/angular/http/progress/progress.component.ts");
/* harmony import */ var _components_angular_http_rxjs_rxjs_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/angular/http/rxjs/rxjs.component */ "./src/app/components/angular/http/rxjs/rxjs.component.ts");

//Basic Modules



//HTTP Client


//Translate Module



//Highlight Module




//Pipes


//Interceptors


//Components
























const routes = [
    { path: 'angular/binding/onewaydata', component: _components_angular_binding_one_way_data_one_way_data_component__WEBPACK_IMPORTED_MODULE_17__["OneWayDataComponent"] },
    { path: 'angular/binding/onewayview', component: _components_angular_binding_one_way_view_one_way_view_component__WEBPACK_IMPORTED_MODULE_18__["OneWayViewComponent"] },
    { path: 'angular/binding/twoway', component: _components_angular_binding_two_way_two_way_component__WEBPACK_IMPORTED_MODULE_19__["TwoWayComponent"] },
    { path: 'angular/directives/ngif', component: _components_angular_directivas_ngif_ngif_component__WEBPACK_IMPORTED_MODULE_20__["NgifComponent"] },
    { path: 'angular/directives/ngfor', component: _components_angular_directivas_ngfor_ngfor_component__WEBPACK_IMPORTED_MODULE_21__["NgforComponent"] },
    { path: 'angular/directives/ngswitch', component: _components_angular_directivas_ngswitch_ngswitch_component__WEBPACK_IMPORTED_MODULE_22__["NgswitchComponent"] },
    { path: 'angular/directives/ngvalue', component: _components_angular_directivas_ngvalue_ngvalue_component__WEBPACK_IMPORTED_MODULE_23__["NgvalueComponent"] },
    { path: 'angular/directives/ngmodel', component: _components_angular_directivas_ngmodel_ngmodel_component__WEBPACK_IMPORTED_MODULE_24__["NgmodelComponent"] },
    { path: 'angular/directives/ngclass', component: _components_angular_directivas_ngclass_ngclass_component__WEBPACK_IMPORTED_MODULE_25__["NgclassComponent"] },
    { path: 'angular/directives/ngstyle', component: _components_angular_directivas_ngstyle_ngstyle_component__WEBPACK_IMPORTED_MODULE_26__["NgstyleComponent"] },
    { path: 'angular/directives/structures', component: _components_angular_directivas_ngtemplate_ngtemplate_component__WEBPACK_IMPORTED_MODULE_27__["NgtemplateComponent"] },
    { path: 'angular/directives/ngtemplateoutlet', component: _components_angular_directivas_ngtemplateoutlet_ngtemplateoutlet_component__WEBPACK_IMPORTED_MODULE_28__["NgtemplateoutletComponent"] },
    { path: 'angular/routing', component: _components_angular_routing_routing_component__WEBPACK_IMPORTED_MODULE_29__["RoutingComponent"] },
    { path: 'angular/routing/canactivate', component: _components_angular_routing_canactivate_canactivate_component__WEBPACK_IMPORTED_MODULE_30__["CanactivateComponent"] },
    { path: 'angular/routing/strategy', component: _components_angular_routing_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_31__["StrategyComponent"] },
    { path: 'angular/routing/navigation', component: _components_angular_routing_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_32__["NavigationComponent"] },
    { path: 'angular/routing/getparam', component: _components_angular_routing_getparam_getparam_component__WEBPACK_IMPORTED_MODULE_33__["GetparamComponent"] },
    { path: 'angular/routing/example', component: _components_angular_routing_example_example_component__WEBPACK_IMPORTED_MODULE_34__["ExampleComponent"] },
    { path: 'angular/http', component: _components_angular_http_http_component__WEBPACK_IMPORTED_MODULE_35__["HttpComponent"] },
    { path: 'angular/http/interceptors', component: _components_angular_http_interceptors_interceptors_component__WEBPACK_IMPORTED_MODULE_36__["InterceptorsComponent"] },
    { path: 'angular/http/progress', component: _components_angular_http_progress_progress_component__WEBPACK_IMPORTED_MODULE_37__["ProgressComponent"] },
    { path: 'angular/http/rxjs', component: _components_angular_http_rxjs_rxjs_component__WEBPACK_IMPORTED_MODULE_38__["RxjsComponent"] },
    { path: '**', redirectTo: 'angular/binding/onewaydata' }
];
function hljsLanguages() {
    return [
        { name: 'typescript', func: highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_10___default.a },
        { name: 'xml', func: highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_9___default.a },
        { name: 'css', func: highlight_js_lib_languages_css__WEBPACK_IMPORTED_MODULE_11___default.a }
    ];
}
class DynamicLocaleId extends String {
    toString() {
        return this.locale;
    }
}
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__["TranslateHttpLoader"](http, './assets/i18n/');
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"],
            _components_panell_panell_component__WEBPACK_IMPORTED_MODULE_16__["PanellComponent"],
            _components_angular_binding_one_way_data_one_way_data_component__WEBPACK_IMPORTED_MODULE_17__["OneWayDataComponent"],
            _components_angular_binding_one_way_view_one_way_view_component__WEBPACK_IMPORTED_MODULE_18__["OneWayViewComponent"],
            _components_angular_binding_two_way_two_way_component__WEBPACK_IMPORTED_MODULE_19__["TwoWayComponent"],
            _components_angular_directivas_ngif_ngif_component__WEBPACK_IMPORTED_MODULE_20__["NgifComponent"],
            _components_angular_directivas_ngfor_ngfor_component__WEBPACK_IMPORTED_MODULE_21__["NgforComponent"],
            _components_angular_directivas_ngclass_ngclass_component__WEBPACK_IMPORTED_MODULE_25__["NgclassComponent"],
            _components_angular_directivas_ngstyle_ngstyle_component__WEBPACK_IMPORTED_MODULE_26__["NgstyleComponent"],
            _components_angular_directivas_ngtemplate_ngtemplate_component__WEBPACK_IMPORTED_MODULE_27__["NgtemplateComponent"],
            _components_angular_routing_routing_component__WEBPACK_IMPORTED_MODULE_29__["RoutingComponent"],
            _components_angular_routing_canactivate_canactivate_component__WEBPACK_IMPORTED_MODULE_30__["CanactivateComponent"],
            _components_angular_routing_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_31__["StrategyComponent"],
            _components_angular_routing_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_32__["NavigationComponent"],
            _components_angular_routing_getparam_getparam_component__WEBPACK_IMPORTED_MODULE_33__["GetparamComponent"],
            _components_angular_routing_example_example_component__WEBPACK_IMPORTED_MODULE_34__["ExampleComponent"],
            _components_angular_directivas_ngswitch_ngswitch_component__WEBPACK_IMPORTED_MODULE_22__["NgswitchComponent"],
            _components_angular_directivas_ngtemplateoutlet_ngtemplateoutlet_component__WEBPACK_IMPORTED_MODULE_28__["NgtemplateoutletComponent"],
            _components_angular_directivas_ngmodel_ngmodel_component__WEBPACK_IMPORTED_MODULE_24__["NgmodelComponent"],
            _components_angular_directivas_ngvalue_ngvalue_component__WEBPACK_IMPORTED_MODULE_23__["NgvalueComponent"],
            _components_angular_http_http_component__WEBPACK_IMPORTED_MODULE_35__["HttpComponent"],
            _components_angular_http_interceptors_interceptors_component__WEBPACK_IMPORTED_MODULE_36__["InterceptorsComponent"],
            _components_angular_http_progress_progress_component__WEBPACK_IMPORTED_MODULE_37__["ProgressComponent"],
            _components_angular_http_rxjs_rxjs_component__WEBPACK_IMPORTED_MODULE_38__["RxjsComponent"],
            _pipes_filtre_pipe__WEBPACK_IMPORTED_MODULE_12__["FiltrePipe"]
        ],
        imports: [
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled', useHash: true }),
            ngx_highlightjs__WEBPACK_IMPORTED_MODULE_8__["HighlightModule"].forRoot({
                languages: hljsLanguages
            }),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                }
            })
        ],
        providers: [{
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                useClass: _interceptors_httpsample_interceptor__WEBPACK_IMPORTED_MODULE_14__["HttpSampleInterceptor"],
                multi: true,
            }, _angular_common__WEBPACK_IMPORTED_MODULE_13__["TitleCasePipe"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/angular/binding/one-way-data/one-way-data.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/angular/binding/one-way-data/one-way-data.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYW5ndWxhci9iaW5kaW5nL29uZS13YXktZGF0YS9vbmUtd2F5LWRhdGEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/angular/binding/one-way-data/one-way-data.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/angular/binding/one-way-data/one-way-data.component.ts ***!
  \***********************************************************************************/
/*! exports provided: OneWayDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneWayDataComponent", function() { return OneWayDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");



let OneWayDataComponent = class OneWayDataComponent {
    constructor(translate) {
        this.translate = translate;
        this.vista1 = `<p>{{variable}}</p>`;
        this.vista2 = `<p [innerHTML]="variable"></p>`;
        this.vista3 = `<p bind-innerHTML="variable"></p>`;
        this.vista4 = `<input value="{{variable}}"/>`;
        this.vista5 = `<input [value]="variable"/>`;
        this.vista6 = `<input bind-value="variable"/>`;
    }
    ngOnInit() {
        this.load();
        this.translate.onLangChange.subscribe((event) => this.load());
    }
    load() {
        this.translate.get('salutacio').subscribe((text) => {
            this.component = `import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class Component {

  constructor() {}

  variable: string = '` + text + `';

}`;
            this.variable = text;
        });
    }
};
OneWayDataComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
OneWayDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-one-way-data',
        template: __webpack_require__(/*! raw-loader!./one-way-data.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/angular/binding/one-way-data/one-way-data.component.html"),
        styles: [__webpack_require__(/*! ./one-way-data.component.css */ "./src/app/components/angular/binding/one-way-data/one-way-data.component.css")]
    })
], OneWayDataComponent);



/***/ }),

/***/ "./src/app/components/angular/binding/one-way-view/one-way-view.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/angular/binding/one-way-view/one-way-view.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYW5ndWxhci9iaW5kaW5nL29uZS13YXktdmlldy9vbmUtd2F5LXZpZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/angular/binding/one-way-view/one-way-view.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/angular/binding/one-way-view/one-way-view.component.ts ***!
  \***********************************************************************************/
/*! exports provided: OneWayViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneWayViewComponent", function() { return OneWayViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");




let OneWayViewComponent = class OneWayViewComponent {
    constructor(translate, titleCasePipe) {
        this.translate = translate;
        this.titleCasePipe = titleCasePipe;
    }
    ngOnInit() {
        this.load();
        this.translate.onLangChange.subscribe((event) => this.load());
    }
    load() {
        this.translate.get('salutacio').subscribe((salutacio) => {
            this.translate.get('saludar').subscribe((saludar) => {
                this.salutacio = this.titleCasePipe.transform(salutacio);
                this.component = `import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class Component {

  constructor() {}

  ` + saludar + `() {
    alert('` + this.titleCasePipe.transform(salutacio) + `!');
  }

}`;
                this.vista1 = `<button (click)="` + saludar + `()">` + this.titleCasePipe.transform(saludar) + `</button>`;
                this.vista2 = `<button on-click="` + saludar + `()">` + this.titleCasePipe.transform(saludar) + `</button>`;
                this.vista3 = `<input (keypress)="` + saludar + `()"/>`;
                this.vista4 = `<input on-keypress="` + saludar + `()"/>`;
            });
        });
    }
    saludar() {
        alert(this.salutacio + '!');
    }
};
OneWayViewComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["TitleCasePipe"] }
];
OneWayViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-one-way-view',
        template: __webpack_require__(/*! raw-loader!./one-way-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/angular/binding/one-way-view/one-way-view.component.html"),
        styles: [__webpack_require__(/*! ./one-way-view.component.css */ "./src/app/components/angular/binding/one-way-view/one-way-view.component.css")]
    })
], OneWayViewComponent);



/***/ }),

/***/ "./src/app/components/angular/binding/two-way/two-way.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/angular/binding/two-way/two-way.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYW5ndWxhci9iaW5kaW5nL3R3by13YXkvdHdvLXdheS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/angular/binding/two-way/two-way.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/angular/binding/two-way/two-way.component.ts ***!
  \*************************************************************************/
/*! exports provided: TwoWayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwoWayComponent", function() { return TwoWayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");



let TwoWayComponent = class TwoWayComponent {
    constructor(translate) {
        this.translate = translate;
        this.vista1 = `<input [(ngModel)]="variable" />
<p>{{variable}}</p>`;
        this.vista2 = `<input bindon-ngModel="variable" />
<p>{{variable}}</p>`;
    }
    ngOnInit() {
        this.load();
        this.translate.onLangChange.subscribe((event) => this.load());
    }
    load() {
        this.translate.get('salutacio').subscribe((salutacio) => {
            this.variable = salutacio;
            this.component = `import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class Component {

  constructor() {}

  variable: string = '` + salutacio + `';

}`;
        });
    }
};
TwoWayComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
TwoWayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-two-way',
        template: __webpack_require__(/*! raw-loader!./two-way.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/angular/binding/two-way/two-way.component.html"),
        styles: [__webpack_require__(/*! ./two-way.component.css */ "./src/app/components/angular/binding/two-way/two-way.component.css")]
    })
], TwoWayComponent);



/***/ }),

/***/ "./src/app/components/angular/directivas/ngclass/ngclass.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/angular/directivas/ngclass/ngclass.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".class1 {\r\n    background-color: blue;\r\n}\r\n\r\n.class2 {\r\n    color: greenyellow;\r\n}\r\n\r\n.class3 {\r\n    background-color: aquamarine;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbmd1bGFyL2RpcmVjdGl2YXMvbmdjbGFzcy9uZ2NsYXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FuZ3VsYXIvZGlyZWN0aXZhcy9uZ2NsYXNzL25nY2xhc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGFzczEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxufVxyXG5cclxuLmNsYXNzMiB7XHJcbiAgICBjb2xvcjogZ3JlZW55ZWxsb3c7XHJcbn1cclxuXHJcbi5jbGFzczMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/angular/directivas/ngclass/ngclass.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/angular/directivas/ngclass/ngclass.component.ts ***!
  \****************************************************************************/
/*! exports provided: NgclassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgclassComponent", function() { return NgclassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NgclassComponent = class NgclassComponent {
    constructor() {
        this.css = `.class1 {
  background-color: blue;
}

.class2 {
  color: greenyellow;
}

.class3 {
    background-color: aquamarine;
}`;
        this.component = `import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.html',
  stylesUrls: ['./component.css']
})
export class Component {

  constructor() {}

  condition1: boolean = false;

  condition2: boolean = false;

  stringVar1: string = 'class1';

  stringVar2: string = 'class1 class2';

  arrayVar1: string[] = ['class1'];

  arrayVar2: string[] = ['class1', 'class2'];

  objectVar1 = {'class1': this.condition1};

  objectVar2 = {'class1 class2': this.condition1};

  objectVar3 = {'class1 class2': this.condition1, 'class3': this.condition2};

  reload1() {
    this.condition1 = !this.condition1;
    this.objectVar1 = { 'class1': this.condition1 };
    this.objectVar2 = { 'class1 class2': this.condition1 };
    this.objectVar3 = { 'class1 class2': this.condition1, 'class3': this.condition2 };
  }

  reload2() {
    this.condition2 = !this.condition2;
    this.objectVar3 = { 'class1 class2': this.condition1, 'class3': this.condition2 };
  }

}`;
        this.exemple1 = `<p [ngClass]="'class1'">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;
        this.exemple2 = `<p [ngClass]="'class1 class2'">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;
        this.exemple3 = `<p [ngClass]="['class1']">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;
        this.exemple4 = `<p [ngClass]="['class1', 'class2']">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;
        this.exemple5 = `<button (click)="reload1()">Toggle 1</button>
<p [ngClass]="{ 'class1': condition1 }">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;
        this.exemple6 = `<button (click)="reload1()">Toggle 1</button>
<p [ngClass]="{ 'class1 class2': condition1 }">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;
        this.exemple7 = `<button (click)="reload1()">Toggle 1</button>
<button (click)="reload2()">Toggle 2</button>
<p [ngClass]="{ 'class1 class2': condition1, 'class3': condition2 }">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;
        this.exemple8 = `<p [ngClass]="stringVar1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;
        this.exemple9 = `<p [ngClass]="stringVar2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;
        this.exemple10 = `<p [ngClass]="arrayVar1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;
        this.exemple11 = `<p [ngClass]="arrayVar2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;
        this.exemple12 = `<button (click)="reload1()">Toggle 1</button>
<p [ngClass]="objectVar1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;
        this.exemple13 = `<button (click)="reload1()">Toggle 1</button>
<p [ngClass]="objectVar2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;
        this.exemple14 = `<button (click)="reload1()">Toggle 1</button>
<button (click)="reload2()">Toggle 2</button>
<p [ngClass]="objectVar3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;
        this.condition1 = false;
        this.condition2 = false;
        this.stringVar1 = 'class1';
        this.stringVar2 = 'class1 class2';
        this.arrayVar1 = ['class1'];
        this.arrayVar2 = ['class1', 'class2'];
        this.objectVar1 = { 'class1': this.condition1 };
        this.objectVar2 = { 'class1 class2': this.condition1 };
        this.objectVar3 = { 'class1 class2': this.condition1, 'class3': this.condition2 };
        this.representacions = [
            {
                tipus: 'string',
                exemple: `[ngClass]="'class'"`,
                desc: 'angular.directives.ngclass.string.explicacio',
            },
            {
                tipus: '',
                exemple: `[ngClass]="'class1 class2'"`,
                desc: ``,
            },
            {
                tipus: '',
                exemple: `[ngClass]="stringVar"`,
                desc: ``,
            },
            {
                tipus: 'array',
                exemple: `[ngClass]="['class']"`,
                desc: 'angular.directives.ngclass.array.explicacio',
            },
            {
                tipus: '',
                exemple: `[ngClass]="['class1', 'class2']"`,
                desc: ``,
            },
            {
                tipus: '',
                exemple: `[ngClass]="arrayVar"`,
                desc: ``,
            },
            {
                tipus: 'object',
                exemple: `[ngClass]="{'class': condition}"`,
                desc: 'angular.directives.ngclass.object.explicacio1',
            },
            {
                tipus: '',
                exemple: `[ngClass]="{'class1 class2': condition}"`,
                desc: 'angular.directives.ngclass.object.explicacio2',
            },
            {
                tipus: '',
                exemple: `[ngClass]="objectVar"`,
                desc: ``,
            },
        ];
    }
    ngOnInit() { }
    reload1() {
        this.condition1 = !this.condition1;
        this.objectVar1 = { 'class1': this.condition1 };
        this.objectVar2 = { 'class1 class2': this.condition1 };
        this.objectVar3 = { 'class1 class2': this.condition1, 'class3': this.condition2 };
    }
    reload2() {
        this.condition2 = !this.condition2;
        this.objectVar3 = { 'class1 class2': this.condition1, 'class3': this.condition2 };
    }
};
NgclassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ngclass',
        template: __webpack_require__(/*! raw-loader!./ngclass.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/angular/directivas/ngclass/ngclass.component.html"),
        styles: [__webpack_require__(/*! ./ngclass.component.css */ "./src/app/components/angular/directivas/ngclass/ngclass.component.css")]
    })
], NgclassComponent);



/***/ }),

/***/ "./src/app/components/angular/directivas/ngfor/ngfor.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/angular/directivas/ngfor/ngfor.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYW5ndWxhci9kaXJlY3RpdmFzL25nZm9yL25nZm9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/angular/directivas/ngfor/ngfor.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/angular/directivas/ngfor/ngfor.component.ts ***!
  \************************************************************************/
/*! exports provided: NgforComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgforComponent", function() { return NgforComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");



let NgforComponent = class NgforComponent {
    constructor(translate) {
        this.translate = translate;
        this.exemple1 = `<ul>
  <li *ngFor="let fruit of ['banana','apple','orange']">{{fruit}}</li>
</ul>`;
        this.exemple2 = `<ul>
  <ng-template ngFor let-fruit [ngForOf]="['banana','apple','orange']">
    <li>{{fruit}}</li>
  </ng-template>
</ul>`;
        this.exemple5component = `import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class Component {

  constructor() {}

  array = [
    { name: 'John', surname: 'Snow', age: 20 },
    { name: 'Daenerys', surname: 'Targaryen', age: 18 },
    { name: 'Bran', surname: 'Stark', age: 13 },
    { name: 'Brienne', surname: 'de Tarth', age: 20 },
    { name: 'Sansa', surname: 'Stark', age: 16 },
    { name: 'Arya', surname: 'Stark', age: 14 }
  ];

}`;
        this.array = [
            { name: 'John', surname: 'Snow', age: 20 },
            { name: 'Daenerys', surname: 'Targaryen', age: 18 },
            { name: 'Bran', surname: 'Stark', age: 13 },
            { name: 'Brienne', surname: 'de Tarth', age: 20 },
            { name: 'Sansa', surname: 'Stark', age: 16 },
            { name: 'Arya', surname: 'Stark', age: 14 }
        ];
    }
    ngOnInit() {
        this.load();
        this.translate.onLangChange.subscribe((event) => this.load());
    }
    load() {
        this.translate.get('si').subscribe((si) => {
            const no = this.translate.instant('no');
            const element = this.translate.instant('angular.directives.ngfor.exemple.element');
            const index = this.translate.instant('angular.directives.ngfor.exemple.index');
            const esprimer = this.translate.instant('angular.directives.ngfor.exemple.esprimer');
            const esultim = this.translate.instant('angular.directives.ngfor.exemple.esultim');
            const espar = this.translate.instant('angular.directives.ngfor.exemple.espar');
            const esimpar = this.translate.instant('angular.directives.ngfor.exemple.esimpar');
            const nom = this.translate.instant('angular.directives.ngfor.exemple.nom');
            const cognoms = this.translate.instant('angular.directives.ngfor.exemple.cognoms');
            const edat = this.translate.instant('angular.directives.ngfor.exemple.edat');
            this.exemple3 = `<table>
  <tr>
    <th>` + element + `</th>
    <th>` + index + `</th>
    <th>` + esprimer + `</th>
    <th>` + esultim + `</th>
    <th>` + espar + `</th>
    <th>` + esimpar + `</th>
  </tr>
  <tr *ngFor="let fruit of ['banana','apple','orange'];
      index as i; first as isFirst; last as isLast;
      even as isEven; odd as isOdd">
    <td>{{fruit}}</td>
    <td>{{i}}</td>
    <td>{{isFirst ? '` + si + `' : '` + no + `'}}</td>
    <td>{{isLast ? '` + si + `' : '` + no + `'}}</td>
    <td>{{isOdd ? '` + si + `' : '` + no + `'}}</td>
    <td>{{isEven ? '` + si + `' : '` + no + `'}}</td>
  </tr>
</table>`;
            this.exemple4 = `<table>
  <tr>
    <th>` + element + `</th>
    <th>` + index + `</th>
    <th>` + esprimer + `</th>
    <th>` + esultim + `</th>
    <th>` + espar + `</th>
    <th>` + esimpar + `</th>
  </tr>
  <ng-template ngFor let-fruit [ngForOf]="['banana','apple','orange']"
      let-i="index" let-isFirst="first" let-isLast="last"
      let-isEven="even" let-isOdd="odd">
    <tr>
      <td>{{fruit}}</td>
      <td>{{i}}</td>
      <td>{{isFirst ? '` + si + `' : '` + no + `'}}</td>
      <td>{{isLast ? '` + si + `' : '` + no + `'}}</td>
      <td>{{isOdd ? '` + si + `' : '` + no + `'}}</td>
      <td>{{isEven ? '` + si + `' : '` + no + `'}}</td>
    </tr>
  </ng-template>
</table>`;
            this.exemple5 = `<table>
  <tr>
    <th>` + nom + `</th>
    <th>` + cognoms + `</th>
    <th>` + edat + `</th>
  </tr>
  <tr *ngFor="let element of array">
    <td>{{element.name}}</td>
    <td>{{element.surname}}</td>
    <td>{{element.age}}</td>
  </tr>
</table>`;
        });
    }
};
NgforComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
NgforComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ngfor',
        template: __webpack_require__(/*! raw-loader!./ngfor.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/angular/directivas/ngfor/ngfor.component.html"),
        styles: [__webpack_require__(/*! ./ngfor.component.css */ "./src/app/components/angular/directivas/ngfor/ngfor.component.css")]
    })
], NgforComponent);



/***/ }),

/***/ "./src/app/components/angular/directivas/ngif/ngif.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/angular/directivas/ngif/ngif.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYW5ndWxhci9kaXJlY3RpdmFzL25naWYvbmdpZi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/angular/directivas/ngif/ngif.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/angular/directivas/ngif/ngif.component.ts ***!
  \**********************************************************************/
/*! exports provided: NgifComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgifComponent", function() { return NgifComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");



let NgifComponent = class NgifComponent {
    constructor(translate) {
        this.translate = translate;
        this.show = false;
        this.elserepresentacio1 = `<div *ngIf="condition; else templateId">content</div>
<ng-template #templateId>elsecontent</ng-template>`;
        this.thenrepresentacio = `<div *ngIf="show; then templateId; else elseTemplateId"></div>
<ng-template #templateId>thencontent</ng-template>
<ng-template #elseTemplateId>elsecontent</ng-template>`;
        this.exemple1 = `<button (click)="show = !show;">Toggle</button>
<span *ngIf="show"> HTML </span>`;
        this.exemple2 = `<button (click)="show = !show;">Toggle</button>
<ng-template [ngIf]="show">
  <span> HTML </span>
</ng-template>`;
        this.exemple3 = `<button (click)="show = !show">Toggle</button>
<span *ngIf="show; else elseSpan1"> HTML </span>
<ng-template #elseSpan1>
  <span> Else 1 </span>
</ng-template>`;
        this.exemple4 = `<button (click)="show = !show">Toggle</button>
<ng-template [ngIf]="show" [ngIfElse]="elseSpan2">
  <span> HTML </span>
</ng-template>
<ng-template #elseSpan2>
  <span> Else 2 </span>
</ng-template>`;
        this.exemple5 = `<button (click)="show = !show">Toggle</button>
<div *ngIf="show; then thenSpan; else elseSpan3"></div>
<ng-template #thenSpan>
  <span> Then </span>
</ng-template>
<ng-template #elseSpan3>
  <span> Else 3 </span>
</ng-template>`;
        this.component = `import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class Component {

  constructor() {}

  show: boolean = false;

}`;
    }
    ngOnInit() {
        this.load();
        this.translate.onLangChange.subscribe((event) => this.load());
    }
    load() {
        this.translate.get('angular.directives.ngif.nomes.ngtemplate').subscribe((text) => {
            this.elserepresentacio2 = `<ng-template [ngIf]="condition" [ngIfElse]="templateId">content<ng-template> <!-- (` + text + `) -->
<ng-template #templateId>elsecontent</ng-template>`;
        });
    }
};
NgifComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
NgifComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ngif',
        template: __webpack_require__(/*! raw-loader!./ngif.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/angular/directivas/ngif/ngif.component.html"),
        styles: [__webpack_require__(/*! ./ngif.component.css */ "./src/app/components/angular/directivas/ngif/ngif.component.css")]
    })
], NgifComponent);



/***/ }),

/***/ "./src/app/components/angular/directivas/ngmodel/ngmodel.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/angular/directivas/ngmodel/ngmodel.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYW5ndWxhci9kaXJlY3RpdmFzL25nbW9kZWwvbmdtb2RlbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/angular/directivas/ngmodel/ngmodel.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/angular/directivas/ngmodel/ngmodel.component.ts ***!
  \****************************************************************************/
/*! exports provided: NgmodelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgmodelComponent", function() { return NgmodelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NgmodelComponent = class NgmodelComponent {
    constructor() { }
    ngOnInit() {
    }
};
NgmodelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ngmodel',
        template: __webpack_require__(/*! raw-loader!./ngmodel.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/angular/directivas/ngmodel/ngmodel.component.html"),
        styles: [__webpack_require__(/*! ./ngmodel.component.css */ "./src/app/components/angular/directivas/ngmodel/ngmodel.component.css")]
    })
], NgmodelComponent);



/***/ }),

/***/ "./src/app/components/angular/directivas/ngstyle/ngstyle.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/angular/directivas/ngstyle/ngstyle.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYW5ndWxhci9kaXJlY3RpdmFzL25nc3R5bGUvbmdzdHlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/angular/directivas/ngstyle/ngstyle.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/angular/directivas/ngstyle/ngstyle.component.ts ***!
  \****************************************************************************/
/*! exports provided: NgstyleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgstyleComponent", function() { return NgstyleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NgstyleComponent = class NgstyleComponent {
    constructor() {
        this.representacions = [
            `[ngStyle]="{'styleName': styleValue}"`,
            `[ngStyle]="{'styleName': styleValue, 'styleName': styleValue}"`,
            `[ngStyle]="object"`,
            `[style.styleName]="'styleValue'"`,
            `[style.styleName]="variable"`,
            `[style.styleName.styleUnit]="'styleValue'"`,
            `[style.styleName.styleUnit]="variable"`,
        ];
        this.component = `import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.html',
  stylesUrls: ['./component.css']
})
export class Component {

  constructor() {}

  styleObj = {'color': 'yellow', 'background-color': 'black'};
  styleValue: string = 'orange';
  styleValue2: string = '7';
  styleValue3: string = '12px';

}`;
        this.styleObj = { 'color': 'yellow', 'background-color': 'black' };
        this.styleValue = 'orange';
        this.styleValue2 = '7';
        this.styleValue3 = '12px';
        this.exemple1 = `<p [ngStyle]="{'color': 'green'}">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;
        this.exemple2 = `<p [ngStyle]="{'color': 'green', 'background-color': 'blue'}">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;
        this.exemple3 = `<p [ngStyle]="styleObj">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;
        this.exemple4 = `<p [style.color]="'green'">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;
        this.exemple5 = `<p [style.background-color]="styleValue">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;
        this.exemple6 = `<p [style.font-size.px]="'5'">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;
        this.exemple7 = `<p [style.font-size.em]="'5'" [style.white-space]="'nowrap'">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;
        this.exemple8 = `<p [style.font-size.px]="styleValue2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;
        this.exemple9 = `<p [style.font-size.em]="styleValue2" [style.white-space]="'nowrap'">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;
        this.exemple10 = `<p [style.font-size]="styleValue3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;
    }
    ngOnInit() { }
};
NgstyleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ngstyle',
        template: __webpack_require__(/*! raw-loader!./ngstyle.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/angular/directivas/ngstyle/ngstyle.component.html"),
        styles: [__webpack_require__(/*! ./ngstyle.component.css */ "./src/app/components/angular/directivas/ngstyle/ngstyle.component.css")]
    })
], NgstyleComponent);



/***/ }),

/***/ "./src/app/components/angular/directivas/ngswitch/ngswitch.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/angular/directivas/ngswitch/ngswitch.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYW5ndWxhci9kaXJlY3RpdmFzL25nc3dpdGNoL25nc3dpdGNoLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/angular/directivas/ngswitch/ngswitch.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/angular/directivas/ngswitch/ngswitch.component.ts ***!
  \******************************************************************************/
/*! exports provided: NgswitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgswitchComponent", function() { return NgswitchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NgswitchComponent = class NgswitchComponent {
    constructor() {
        this.representacio = `<div [ngSwitch]="variable">
  <p *ngSwitchCase="value">content</p>
  <p *ngSwitchCase="value">content</p>
  <p *ngSwitchCase="value">content</p>
  <p *ngSwitchDefault>content</p>
</div>`;
        this.menu = 'vegan';
        this.component = `import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class Component {

  constructor() {}

  menu: string = 'vegan';

}`;
        this.exemple = `<input id="veganRadio" type="radio" name="menu" value="vegan" [(ngModel)]="menu" />
<label for="veganRadio"> Vegan</label><br />
<input id="pastaRadio" type="radio" name="menu" value="pasta" [(ngModel)]="menu" />
<label for="pastaRadio"> Pasta</label><br />
<input id="meatRadio" type="radio" name="menu" value="meat" [(ngModel)]="menu" />
<label for="meatRadio"> Meat</label><br />
<input id="otherRadio" type="radio" name="menu" value="other" [(ngModel)]="menu" />
<label for="otherRadio"> Other</label><br />

<div [ngSwitch]="menu">
  <p *ngSwitchCase="'vegan'">Tropical salad</p>
  <p *ngSwitchCase="'pasta'">Macaroni with carbonara sauce</p>
  <p *ngSwitchCase="'meat'">Pork Chops</p>
  <p *ngSwitchDefault>Paella</p>
</div>`;
    }
    ngOnInit() { }
};
NgswitchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ngswitch',
        template: __webpack_require__(/*! raw-loader!./ngswitch.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/angular/directivas/ngswitch/ngswitch.component.html"),
        styles: [__webpack_require__(/*! ./ngswitch.component.css */ "./src/app/components/angular/directivas/ngswitch/ngswitch.component.css")]
    })
], NgswitchComponent);



/***/ }),

/***/ "./src/app/components/angular/directivas/ngtemplate/ngtemplate.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/components/angular/directivas/ngtemplate/ngtemplate.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYW5ndWxhci9kaXJlY3RpdmFzL25ndGVtcGxhdGUvbmd0ZW1wbGF0ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/angular/directivas/ngtemplate/ngtemplate.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/angular/directivas/ngtemplate/ngtemplate.component.ts ***!
  \**********************************************************************************/
/*! exports provided: NgtemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgtemplateComponent", function() { return NgtemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NgtemplateComponent = class NgtemplateComponent {
    constructor() {
        this.show = true;
        this.menu = 'vegan';
        this.exemple1 = `<span *ngIf="show"> HTML </span>`;
        this.exemple2 = `<ng-template [ngIf]="show">
  <span> HTML </span>
</ng-template>`;
        this.exemple3 = `<p *ngIf="show" *ngFor="let fruit of ['banana', 'orange', 'apple']"> {{fruit}} </p>`;
        this.containerExemple1 = `<ng-container>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</ng-container>`;
        this.containerExemple2 = `<button (click)="show = !show">Toggle</button>
<ng-container *ngIf="show">
  <p *ngFor="let fruit of ['banana', 'orange', 'apple']"> {{fruit}} </p>
</ng-container>`;
        this.templateExemple1 = `<ng-template>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</ng-template>`;
        this.templateExemple2 = `<button (click)="show = !show">Toggle</button>
<ng-template [ngIf]="show">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</ng-template>`;
        this.templateExemple3 = `<button (click)="show = !show">Toggle</button>
<p *ngIf="show; then thenHtml; else elseHtml"></p>
<ng-template #thenHtml>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</ng-template>
<ng-template #elseHtml>
  <p>Nulla scelerisque consectetur urna, id hendrerit nunc congue vitae.</p>
</ng-template>`;
        this.templateExemple4 = `<ng-template let-fruit [ngForOf]="['banana', 'orange', 'apple']">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</ng-template>`;
        this.templateExemple5 = `<input id="veganRadio" type="radio" name="menu" value="vegan" [(ngModel)]="menu" />
<label for="veganRadio"> Vegan</label><br />
<input id="pastaRadio" type="radio" name="menu" value="pasta" [(ngModel)]="menu" />
<label for="pastaRadio"> Pasta</label><br />
<input id="meatRadio" type="radio" name="menu" value="meat" [(ngModel)]="menu" />
<label for="meatRadio"> Meat</label><br />
<input id="otherRadio" type="radio" name="menu" value="other" [(ngModel)]="menu" />
<label for="otherRadio"> Other</label><br />
<div [ngSwitch]="menu">
  <ng-template [ngSwitchCase]="'vegan'">Tropical salad</ng-template>
  <ng-template [ngSwitchCase]="'pasta'">Macaroni with carbonara sauce</ng-template>
  <ng-template [ngSwitchCase]="'meat'">Pork Chops</ng-template>
  <ng-template ngSwitchDefault>Paella</ng-template>
</div>`;
        this.templateExemple6 = `<button (click)="show = !show">Toggle</button>
<ng-template *ngIf="show" ngFor let-fruit [ngForOf]="['banana', 'orange', 'apple']">
  <p>{{fruit}}</p>
</ng-template>`;
        this.templateExemple7 = `<input id="veganRadio2" type="radio" name="menu2" value="vegan" [(ngModel)]="menu" />
<label for="veganRadio2"> Vegan</label><br />
<input id="pastaRadio2" type="radio" name="menu2" value="pasta" [(ngModel)]="menu" />
<label for="pastaRadio2"> Pasta</label><br />
<input id="meatRadio2" type="radio" name="menu2" value="meat" [(ngModel)]="menu" />
<label for="meatRadio2"> Meat</label><br />
<input id="otherRadio2" type="radio" name="menu2" value="other" [(ngModel)]="menu" />
<label for="otherRadio2"> Other</label><br />
<ul [ngSwitch]="menu">
  <ng-template [ngSwitchCase]="'vegan'" *ngFor="let vfood of ['Tropical salad', 'Falafel Tabouli Wrap', 'Vegetable Paella']">
    <li>{{vfood}}</li>
  </ng-template>
  <ng-template [ngSwitchCase]="'pasta'" *ngFor="let pfood of ['Macaroni', 'Spaguettis', 'Tagliatelle']">
    <li>{{pfood}}</li>
  </ng-template>
  <ng-template [ngSwitchCase]="'meat'" *ngFor="let mfood of ['Pork Chops', 'Hamburguer', 'Chicken Wings']">
    <li>{{mfood}}</li>
  </ng-template>
  <ng-template ngSwitchDefault *ngFor="let ofood of ['Paella', 'Fabada']">
    <li>{{ofood}}</li>
  </ng-template>
</ul>`;
    }
    ngOnInit() { }
};
NgtemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ngtemplate',
        template: __webpack_require__(/*! raw-loader!./ngtemplate.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/angular/directivas/ngtemplate/ngtemplate.component.html"),
        styles: [__webpack_require__(/*! ./ngtemplate.component.css */ "./src/app/components/angular/directivas/ngtemplate/ngtemplate.component.css")]
    })
], NgtemplateComponent);



/***/ }),

/***/ "./src/app/components/angular/directivas/ngtemplateoutlet/ngtemplateoutlet.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/angular/directivas/ngtemplateoutlet/ngtemplateoutlet.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYW5ndWxhci9kaXJlY3RpdmFzL25ndGVtcGxhdGVvdXRsZXQvbmd0ZW1wbGF0ZW91dGxldC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/angular/directivas/ngtemplateoutlet/ngtemplateoutlet.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/angular/directivas/ngtemplateoutlet/ngtemplateoutlet.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: NgtemplateoutletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgtemplateoutletComponent", function() { return NgtemplateoutletComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NgtemplateoutletComponent = class NgtemplateoutletComponent {
    constructor() {
        this.explicacio1 = `<ng-container *ngTemplateOutlet="idTemplate"></ng-container>
<ng-template #idTemplate>content</ng-template>`;
        this.explicacio2 = `<ng-container *ngTemplateOutlet="idTemplate; context: { $implicit: 'defaultValue', variable: 'variableValue' }"></ng-container>
<ng-template #idTemplate let-default>{{default}}</ng-template>`;
        this.explicacio3 = `<ng-container *ngTemplateOutlet="idTemplate; context: contextObj"></ng-container>
<ng-template #idTemplate let-alias="variable">{{alias}}</ng-template>`;
        this.myContext = { $implicit: 'World', localEs: 'Mundo' };
        this.exemple1 = `<ng-container *ngTemplateOutlet="greet"></ng-container>
<ng-template #greet><span>Hello</span></ng-template>`;
        this.exemple2 = `<ng-container *ngTemplateOutlet="eng; context: { $implicit: 'World' }"></ng-container>
<ng-template #eng let-name><span>Hello {{name}}!</span></ng-template>`;
        this.exemple3 = `<ng-container *ngTemplateOutlet="svk; context: { $implicit: 'World', localSk: 'Svet' }"></ng-container>
<ng-template #svk let-person="localSk"><span>Ahoj {{person}}!</span></ng-template>`;
        this.exemple4 = `<ng-container *ngTemplateOutlet="esp; context: myContext"></ng-container>
<ng-template #esp let-person="localEs"><span>¡Hola {{person}}!</span></ng-template>`;
        this.exemple4component = `import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class Component {

  constructor() {}

  myContext = { $implicit: 'World', localEs: 'Mundo' };

}`;
    }
    ngOnInit() { }
};
NgtemplateoutletComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ngtemplateoutlet',
        template: __webpack_require__(/*! raw-loader!./ngtemplateoutlet.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/angular/directivas/ngtemplateoutlet/ngtemplateoutlet.component.html"),
        styles: [__webpack_require__(/*! ./ngtemplateoutlet.component.css */ "./src/app/components/angular/directivas/ngtemplateoutlet/ngtemplateoutlet.component.css")]
    })
], NgtemplateoutletComponent);



/***/ }),

/***/ "./src/app/components/angular/directivas/ngvalue/ngvalue.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/angular/directivas/ngvalue/ngvalue.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYW5ndWxhci9kaXJlY3RpdmFzL25ndmFsdWUvbmd2YWx1ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/angular/directivas/ngvalue/ngvalue.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/angular/directivas/ngvalue/ngvalue.component.ts ***!
  \****************************************************************************/
/*! exports provided: NgvalueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgvalueComponent", function() { return NgvalueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NgvalueComponent = class NgvalueComponent {
    constructor() {
        this.value1 = '';
        this.value2 = '';
        this.component = `import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class Component {

  constructor() {}

  value: any = '';

  getTypeOf(variable) {
    return typeof variable;
  }

}`;
        this.vista1 = `<select [(ngModel)]="value">
  <option [value]="''">Empty</option>
  <option [value]="null">Null</option>
  <option [value]="undefined">Undefined</option>
  <option [value]="'text'">Text</option>
  <option [value]="{name: 'Ramon', surname: 'Garcia'}">Object</option>
</select>
<ul>
  <li>Value: {{value}}</li>
  <li>Type: {{getTypeOf(value)}}</li>
  <li>Null: {{value === null}}</li>
  <li>Undefined: {{value === undefined}}</li>
  <li *ngIf="getTypeOf(value) === 'object'">Full name: {{value.name}} {{value.surname}}</li>
</ul>`;
        this.vista2 = `<select [(ngModel)]="value">
  <option [ngValue]="''">Empty</option>
  <option [ngValue]="null">Null</option>
  <option [ngValue]="undefined">Undefined</option>
  <option [ngValue]="'text'">Text</option>
  <option [ngValue]="{name: 'Ramon', surname: 'Garcia'}">Object</option>
</select>
<ul>
  <li>Value: {{value}}</li>
  <li>Type: {{getTypeOf(value)}}</li>
  <li>Null: {{value === null}}</li>
  <li>Undefined: {{value === undefined}}</li>
  <li *ngIf="getTypeOf(value) === 'object'">Full name: {{value.name}} {{value.surname}}</li>
</ul>`;
    }
    ngOnInit() { }
    getTypeOf(variable) {
        return typeof variable;
    }
};
NgvalueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ngvalue',
        template: __webpack_require__(/*! raw-loader!./ngvalue.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/angular/directivas/ngvalue/ngvalue.component.html"),
        styles: [__webpack_require__(/*! ./ngvalue.component.css */ "./src/app/components/angular/directivas/ngvalue/ngvalue.component.css")]
    })
], NgvalueComponent);



/***/ }),

/***/ "./src/app/components/angular/http/http.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/angular/http/http.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYW5ndWxhci9odHRwL2h0dHAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/angular/http/http.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/angular/http/http.component.ts ***!
  \***********************************************************/
/*! exports provided: HttpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpComponent", function() { return HttpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_httpclient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/httpclient.service */ "./src/app/services/httpclient.service.ts");



let HttpComponent = class HttpComponent {
    constructor(service) {
        this.service = service;
        this.init1 = `import { HttpClientModule } from '@angular/common/http';`;
        this.init2 = `imports: [
  HttpClientModule
]`;
        this.init3 = `import { HttpClient } from '@angular/common/http';`;
        this.init4 = `constructor(private http: HttpClient) { }`;
        this.exemple1 = `this.http.get('https://jsonplaceholder.typicode.com/todos/1')
  .subscribe(data => {
      console.log(data['title']);
  });`;
        this.resultat1 = `delectus aut autem`;
        this.exemple2 = `this.http.get('https://jsonplaceholder.typicode.com/todos/1', {responseType: 'text'})
  .subscribe(data => {
      console.log(data); // <--- string
  });`;
        this.resultat2 = `{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}`;
        this.exemple3 = `this.http.get('https://jsonplaceholder.typicode.com/todos/1', {observe: 'response'})
  .subscribe(response => {
    console.log('Status: ' + response.status);
    console.log('URL: ' + response.url);
    console.log('Title: ' + response.body['title']);
  });`;
        this.resultat3 = `Status: 200
URL: https://jsonplaceholder.typicode.com/todos/1
Title: delectus aut autem`;
        this.exemple4 = `interface Todo {
  title: string;
}

this.http.get<Todo>('https://jsonplaceholder.typicode.com/todos/1').subscribe(data => {
  console.log(data.title); // OK
  //console.log(data.test); // Error
});`;
    }
    ngOnInit() {
        this.service.exemple1();
        this.service.exemple2();
        this.service.exemple3();
        this.service.exemple4();
    }
};
HttpComponent.ctorParameters = () => [
    { type: _services_httpclient_service__WEBPACK_IMPORTED_MODULE_2__["HttpclientService"] }
];
HttpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-http',
        template: __webpack_require__(/*! raw-loader!./http.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/angular/http/http.component.html"),
        styles: [__webpack_require__(/*! ./http.component.css */ "./src/app/components/angular/http/http.component.css")]
    })
], HttpComponent);



/***/ }),

/***/ "./src/app/components/angular/http/interceptors/interceptors.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/angular/http/interceptors/interceptors.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYW5ndWxhci9odHRwL2ludGVyY2VwdG9ycy9pbnRlcmNlcHRvcnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/angular/http/interceptors/interceptors.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/angular/http/interceptors/interceptors.component.ts ***!
  \********************************************************************************/
/*! exports provided: InterceptorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptorsComponent", function() { return InterceptorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_httpclient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/httpclient.service */ "./src/app/services/httpclient.service.ts");



let InterceptorsComponent = class InterceptorsComponent {
    constructor(service) {
        this.service = service;
        this.appmodule = `//Basic Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//HTTP Client
import { HttpClientModule } from '@angular/common/http'; // <---

//Interceptors
import { HTTP_INTERCEPTORS } from '@angular/common/http'; // <---
import { HttpSampleInterceptor }
  from '@interceptors/httpsample.interceptor'; // <---

//Components
import { Component } from '@components/component';

@NgModule({
  declarations: [
    AppComponent,
    Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule // <---
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, // <---
    useClass: HttpSampleInterceptor, // <---
    multi: true, // <---
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }`;
        this.exemple = `this.http.get('http://localhost:3000/injectionsample', { responseType: 'text' })
  .subscribe(data => {
    console.log(data);
  });`;
        this.resultat = `{"msg":"Hello World"}`;
        this.interceptor = `import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { HttpclientService } from '@services/httpclient.service';

@Injectable()
export class HttpSampleInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authReq = req.clone({ headers: req.headers.append('sample', 'Hello World') });
        return next.handle(authReq);
    }
}`;
    }
    ngOnInit() {
        this.service.exemple5();
    }
};
InterceptorsComponent.ctorParameters = () => [
    { type: _services_httpclient_service__WEBPACK_IMPORTED_MODULE_2__["HttpclientService"] }
];
InterceptorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-interceptors',
        template: __webpack_require__(/*! raw-loader!./interceptors.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/angular/http/interceptors/interceptors.component.html"),
        styles: [__webpack_require__(/*! ./interceptors.component.css */ "./src/app/components/angular/http/interceptors/interceptors.component.css")]
    })
], InterceptorsComponent);



/***/ }),

/***/ "./src/app/components/angular/http/progress/progress.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/angular/http/progress/progress.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYW5ndWxhci9odHRwL3Byb2dyZXNzL3Byb2dyZXNzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/angular/http/progress/progress.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/angular/http/progress/progress.component.ts ***!
  \************************************************************************/
/*! exports provided: ProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressComponent", function() { return ProgressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProgressComponent = class ProgressComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProgressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-progress',
        template: __webpack_require__(/*! raw-loader!./progress.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/angular/http/progress/progress.component.html"),
        styles: [__webpack_require__(/*! ./progress.component.css */ "./src/app/components/angular/http/progress/progress.component.css")]
    })
], ProgressComponent);



/***/ }),

/***/ "./src/app/components/angular/http/rxjs/rxjs.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/angular/http/rxjs/rxjs.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYW5ndWxhci9odHRwL3J4anMvcnhqcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/angular/http/rxjs/rxjs.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/angular/http/rxjs/rxjs.component.ts ***!
  \****************************************************************/
/*! exports provided: RxjsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxjsComponent", function() { return RxjsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RxjsComponent = class RxjsComponent {
    constructor() { }
    ngOnInit() {
    }
};
RxjsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rxjs',
        template: __webpack_require__(/*! raw-loader!./rxjs.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/angular/http/rxjs/rxjs.component.html"),
        styles: [__webpack_require__(/*! ./rxjs.component.css */ "./src/app/components/angular/http/rxjs/rxjs.component.css")]
    })
], RxjsComponent);



/***/ }),

/***/ "./src/app/components/angular/routing/canactivate/canactivate.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/angular/routing/canactivate/canactivate.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYW5ndWxhci9yb3V0aW5nL2NhbmFjdGl2YXRlL2NhbmFjdGl2YXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/angular/routing/canactivate/canactivate.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/angular/routing/canactivate/canactivate.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CanactivateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanactivateComponent", function() { return CanactivateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_size_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/size.service */ "./src/app/services/size.service.ts");



let CanactivateComponent = class CanactivateComponent {
    constructor(size) {
        this.size = size;
        this.authguardservice = `import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public router: Router) { }

  user: string = null;

  canActivate(): boolean {
    if (this.user === null) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}`;
    }
    ngOnInit() { }
};
CanactivateComponent.ctorParameters = () => [
    { type: _services_size_service__WEBPACK_IMPORTED_MODULE_2__["SizeService"] }
];
CanactivateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-canactivate',
        template: __webpack_require__(/*! raw-loader!./canactivate.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/angular/routing/canactivate/canactivate.component.html"),
        styles: [__webpack_require__(/*! ./canactivate.component.css */ "./src/app/components/angular/routing/canactivate/canactivate.component.css")]
    })
], CanactivateComponent);



/***/ }),

/***/ "./src/app/components/angular/routing/example/example.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/angular/routing/example/example.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYW5ndWxhci9yb3V0aW5nL2V4YW1wbGUvZXhhbXBsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/angular/routing/example/example.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/angular/routing/example/example.component.ts ***!
  \*************************************************************************/
/*! exports provided: ExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleComponent", function() { return ExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_size_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/size.service */ "./src/app/services/size.service.ts");



let ExampleComponent = class ExampleComponent {
    constructor(size) {
        this.size = size;
        this.approutingmodulets = `import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NotesComponent } from './components/notes/notes.component';
import { NoteComponent } from './components/note/note.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'login',    component: LoginComponent },
  { path: 'welcome',  component: WelcomeComponent, canActivate: [AuthGuardService] },
  { path: 'notes',    component: NotesComponent,   canActivate: [AuthGuardService] },
  { path: 'note/:id', component: NoteComponent,    canActivate: [AuthGuardService] },
  { path: '**',       redirectTo: 'notes' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotesComponent,
    NoteComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } `;
        this.authguardservice = `import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public router: Router) { }

  user: string = null;

  canActivate(): boolean {
    if (this.user === null) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}`;
        this.logincomponent = `import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from '../../services/auth-guard.service';

@Component({
  selector: 'app-login',
  template: \`
<div>
  Username: <input [(ngModel)]="username" /><br />
  Password: <input [(ngModel)]="password" type="password" /><br />
  <button (click)="login()">Login</button>
</div>
\`
})
export class LoginComponent {

  username: string;
  password: string;

  constructor(public router: Router,
    public authService: AuthGuardService) { }

  login() {
    if (this.username === 'admin' && this.password === '1234') {
      this.authService.user = this.username;
      this.router.navigate(['welcome']);
    } else {
      alert('Username or password incorrect.')
    }
  }

}`;
        this.appcomponent = `import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

@Component({
  selector: 'app-root',
  template: \`
  <div *ngIf="this.router.url !== '/login'">
    <a routerLink="welcome" routerLinkActive="activated">Welcome</a> | 
    <a routerLink="notes" routerLinkActive="activated">Notes</a> | 
    <a href="#" (click)="logout()">Log out</a>
    <br />
  </div>
  <router-outlet></router-outlet>
  \`,
  styles: ['.activated { font-weight: bold; }']
})
export class AppComponent {

  constructor(public router: Router,
    public authService: AuthGuardService) { }

  logout() {
    this.authService.user = null;
    this.router.navigate(['/login']);
  }

}`;
        this.welcomecomponent = `import { Component } from '@angular/core';
import { AuthGuardService } from '../../services/auth-guard.service';

@Component({
  selector: 'app-welcome',
  template: '<div>Welcome {{authService.user}}!</div>'
})
export class WelcomeComponent {

  constructor(public authService: AuthGuardService) { }

}`;
        this.notescomponent = `import { Component } from '@angular/core';

@Component({
  selector: 'app-notes',
  template: \`
  <div>
    <table border="1">
      <tr>
        <th>ID</th>
        <th>Name</th>
      </tr>
      <tr *ngFor="let n of notes">
        <td><a [routerLink]="['/note', n.id]">{{n.id}}</a></td>
        <td>{{n.name}}</td>
      </tr>
    </table>
  </div>
\`
})
export class NotesComponent {

  notes = [{
    id: 1,
    name: 'Note 1'
  }, {
    id: 2,
    name: 'Note 2'
  }, {
    id: 3,
    name: 'Note 3'
  }];

}`;
        this.notecomponent = `import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note',
  template: '<div>Note {{id}}</div>'
})
export class NoteComponent implements OnInit {

  id: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

}`;
    }
    ngOnInit() { }
};
ExampleComponent.ctorParameters = () => [
    { type: _services_size_service__WEBPACK_IMPORTED_MODULE_2__["SizeService"] }
];
ExampleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-example',
        template: __webpack_require__(/*! raw-loader!./example.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/angular/routing/example/example.component.html"),
        styles: [__webpack_require__(/*! ./example.component.css */ "./src/app/components/angular/routing/example/example.component.css")]
    })
], ExampleComponent);



/***/ }),

/***/ "./src/app/components/angular/routing/getparam/getparam.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/angular/routing/getparam/getparam.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYW5ndWxhci9yb3V0aW5nL2dldHBhcmFtL2dldHBhcmFtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/angular/routing/getparam/getparam.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/angular/routing/getparam/getparam.component.ts ***!
  \***************************************************************************/
/*! exports provided: GetparamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetparamComponent", function() { return GetparamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_size_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/size.service */ "./src/app/services/size.service.ts");



let GetparamComponent = class GetparamComponent {
    constructor(size) {
        this.size = size;
        this.recuperarParams = `import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // <---

@Component({
  selector: 'app-compoment',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class Component implements OnInit {

  constructor(private route: ActivatedRoute,) { } // <---

  id: string;

  ngOnInit() {
    this.route.params.subscribe(params => { // <---
      this.id = params['id'];
    });
  }

}`;
    }
    ngOnInit() { }
};
GetparamComponent.ctorParameters = () => [
    { type: _services_size_service__WEBPACK_IMPORTED_MODULE_2__["SizeService"] }
];
GetparamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-getparam',
        template: __webpack_require__(/*! raw-loader!./getparam.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/angular/routing/getparam/getparam.component.html"),
        styles: [__webpack_require__(/*! ./getparam.component.css */ "./src/app/components/angular/routing/getparam/getparam.component.css")]
    })
], GetparamComponent);



/***/ }),

/***/ "./src/app/components/angular/routing/navigation/navigation.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/angular/routing/navigation/navigation.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYW5ndWxhci9yb3V0aW5nL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/angular/routing/navigation/navigation.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/angular/routing/navigation/navigation.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_size_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/size.service */ "./src/app/services/size.service.ts");



let NavigationComponent = class NavigationComponent {
    constructor(size) {
        this.size = size;
        this.routerlink1 = '<a routerLink="/link">Link</a>';
        this.routerlink2 = `<a [routerLink]="'/link'">Link</a>`;
        this.routerlink3 = `<a [routerLink]="['/link']">Link</a>`;
        this.routerlink4 = '<a [routerLink]="link">Link</a>';
        this.routerlink5 = '<a [routerLink]="[link]">Link</a>';
        this.routerlink6 = `<a [routerLink]="['/link', id]">Link</a>`;
        this.routerlink7 = '<a [routerLink]="[link, id]">Link</a>';
        this.routerlinkactive1 = '<a routerLink="/link" routerLinkActive="activated">Link</a>';
        this.routerlinkactive2 = '<a routerLink="/link/1" routerLinkActive="activated">Link</a>';
        this.routerlinkactive3 = `<div routerLinkActive="activated">
  <a routerLink="/link">Link</a>
</div>`;
        this.routerlinkactive4 = `<div routerLinkActive="activated">
  <a routerLink="/link/1">Link</a>
</div>`;
        this.routerlinkactive5 = '<a routerLink="/link/1" routerLinkActive="activated" [routerLinkActiveOptions]="{exact: true}">Link</a>';
        this.routerlinkactive6 = `<style>a { color: blue; } .activated { font-weight: bold; }</style>
<a routerLink="/link" routerLinkActive="activated">Link</a>
<br/>
<a routerLink="/link" routerLinkActive="activated" [routerLinkActiveOptions]="{exact: true}">Link Exact</a>
<br/>
<div routerLinkActive="activated">
  <a routerLink="/link/1">Link 1</a>
</div>
<a routerLink="/link/2" routerLinkActive="activated">Link 2</a>`;
        this.routercomponent1 = `import { Component } from '@angular/core';
import { Router } from '@angular/router'; // <---

@Component({
  selector: 'app-compoment',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class Component {

  constructor(public router: Router) { } // <---

  redirect() {
    this.router.navigate(['link']); // <---
  }

}`;
        this.routercomponent2 = `import { Component } from '@angular/core';
import { Router } from '@angular/router'; // <---

@Component({
  selector: 'app-compoment',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class Component {

  constructor(public router: Router) { } // <---

  redirect(id: string) {
    this.router.navigate(['link', id]); // <---
  }

}`;
        this.routercomponent3 = `import { Component } from '@angular/core';
import { Router } from '@angular/router'; // <---

@Component({
  selector: 'app-compoment',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class Component {

  constructor(public router: Router) { // <---
    console.log(this.router.url); // <---
  }

}`;
    }
    ngOnInit() { }
};
NavigationComponent.ctorParameters = () => [
    { type: _services_size_service__WEBPACK_IMPORTED_MODULE_2__["SizeService"] }
];
NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navigation',
        template: __webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/angular/routing/navigation/navigation.component.html"),
        styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/components/angular/routing/navigation/navigation.component.css")]
    })
], NavigationComponent);



/***/ }),

/***/ "./src/app/components/angular/routing/routing.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/angular/routing/routing.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYW5ndWxhci9yb3V0aW5nL3JvdXRpbmcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/angular/routing/routing.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/angular/routing/routing.component.ts ***!
  \*****************************************************************/
/*! exports provided: RoutingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingComponent", function() { return RoutingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_size_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/size.service */ "./src/app/services/size.service.ts");



let RoutingComponent = class RoutingComponent {
    constructor(size) {
        this.size = size;
        this.approutingts = `import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }`;
        this.appmodulets = `import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // <---

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule // <---
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }`;
        this.appmoduletsshort = `import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router'; // <---

const routes: Routes = []; // <---

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes) // <---
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }`;
        this.ruteconfigsamples = `const routes: Routes = [
  { path: 'login',    component: LoginComponent },
  { path: 'welcome',  component: WelcomeComponent, canActivate: [AuthGuardService] },
  { path: 'notes',    component: NotesComponent,   canActivate: [AuthGuardService] },
  { path: 'note/:id', component: NoteComponent,    canActivate: [AuthGuardService] },
  { path: '**',       redirectTo: 'notes' }
];`;
    }
    ngOnInit() { }
};
RoutingComponent.ctorParameters = () => [
    { type: _services_size_service__WEBPACK_IMPORTED_MODULE_2__["SizeService"] }
];
RoutingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-routing',
        template: __webpack_require__(/*! raw-loader!./routing.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/angular/routing/routing.component.html"),
        styles: [__webpack_require__(/*! ./routing.component.css */ "./src/app/components/angular/routing/routing.component.css")]
    })
], RoutingComponent);



/***/ }),

/***/ "./src/app/components/angular/routing/strategy/strategy.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/angular/routing/strategy/strategy.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYW5ndWxhci9yb3V0aW5nL3N0cmF0ZWd5L3N0cmF0ZWd5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/angular/routing/strategy/strategy.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/angular/routing/strategy/strategy.component.ts ***!
  \***************************************************************************/
/*! exports provided: StrategyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrategyComponent", function() { return StrategyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_size_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/size.service */ "./src/app/services/size.service.ts");



let StrategyComponent = class StrategyComponent {
    constructor(size) {
        this.size = size;
        this.pathstrategy = 'RouterModule.forRoot(routes, {useHash: false})';
        this.hashstrategy = 'RouterModule.forRoot(routes, {useHash: true})';
    }
    ngOnInit() { }
};
StrategyComponent.ctorParameters = () => [
    { type: _services_size_service__WEBPACK_IMPORTED_MODULE_2__["SizeService"] }
];
StrategyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-strategy',
        template: __webpack_require__(/*! raw-loader!./strategy.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/angular/routing/strategy/strategy.component.html"),
        styles: [__webpack_require__(/*! ./strategy.component.css */ "./src/app/components/angular/routing/strategy/strategy.component.css")]
    })
], StrategyComponent);



/***/ }),

/***/ "./src/app/components/panell/panell.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/panell/panell.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel {\r\n  position: fixed;\r\n  width: 400px;\r\n  height: 100vh;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: white;\r\n}\r\n\r\n.menu {\r\n  overflow: auto;\r\n  /* height: calc(100% - 180px); */\r\n  height: calc(100% - 91px);\r\n}\r\n\r\n.fas.fa-rxjs {\r\n  background-image: url('/assets/rxjs.png');\r\n  background-size: 14px 14px;\r\n  height: 14px;\r\n  width: 14px;\r\n}\r\n\r\n.is-active .fas.fa-rxjs {\r\n  background-image: url('/assets/rxjs_active.png');\r\n}\r\n\r\n.netejar {\r\n  margin-left: -28px;\r\n  color: black !important;\r\n  cursor: pointer !important;\r\n  pointer-events: initial !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYW5lbGwvcGFuZWxsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYixNQUFNO0VBQ04sT0FBTztFQUNQLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQ0FBZ0M7RUFDaEMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0RBQWdEO0FBQ2xEOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsa0NBQWtDO0FBQ3BDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYW5lbGwvcGFuZWxsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFuZWwge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1lbnUge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIC8qIGhlaWdodDogY2FsYygxMDAlIC0gMTgwcHgpOyAqL1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gOTFweCk7XHJcbn1cclxuXHJcbi5mYXMuZmEtcnhqcyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL3J4anMucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxNHB4IDE0cHg7XHJcbiAgaGVpZ2h0OiAxNHB4O1xyXG4gIHdpZHRoOiAxNHB4O1xyXG59XHJcblxyXG4uaXMtYWN0aXZlIC5mYXMuZmEtcnhqcyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL3J4anNfYWN0aXZlLnBuZycpO1xyXG59XHJcblxyXG4ubmV0ZWphciB7XHJcbiAgbWFyZ2luLWxlZnQ6IC0yOHB4O1xyXG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/panell/panell.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/panell/panell.component.ts ***!
  \*******************************************************/
/*! exports provided: PanellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanellComponent", function() { return PanellComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _enums_Tipus_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @enums/Tipus.enum */ "./src/app/enums/Tipus.enum.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");




let PanellComponent = 
// tslint:disable: max-line-length
class PanellComponent {
    constructor(translate) {
        this.translate = translate;
        this.Tipus = _enums_Tipus_enum__WEBPACK_IMPORTED_MODULE_2__["Tipus"];
        this.tipusSeleccionat = null;
        this.pagines = [
            // { nom: Tipus.Javascript,                            tipus: Tipus.Javascript,  icon: 'fab fa-js-square' },
            // { nom: Tipus.Typescript,                            tipus: Tipus.Typescript,  icon: 'fab fa-tumblr-square' },
            // { nom: Tipus.Angular,                               tipus: Tipus.Angular,     icon: 'fab fa-angular' },
            { nom: 'Data Bindings: One Way - From data', tipus: _enums_Tipus_enum__WEBPACK_IMPORTED_MODULE_2__["Tipus"].Angular, icon: 'fa fa-long-arrow-alt-left', url: '/angular/binding/onewaydata' },
            { nom: 'Data Bindings: One Way - From view', tipus: _enums_Tipus_enum__WEBPACK_IMPORTED_MODULE_2__["Tipus"].Angular, icon: 'fa fa-long-arrow-alt-right', url: '/angular/binding/onewayview' },
            { nom: 'Data Bindings: Two Way', tipus: _enums_Tipus_enum__WEBPACK_IMPORTED_MODULE_2__["Tipus"].Angular, icon: 'fa fa-arrows-alt-h', url: '/angular/binding/twoway' },
            { nom: 'Directives: ngIf', tipus: _enums_Tipus_enum__WEBPACK_IMPORTED_MODULE_2__["Tipus"].Angular, icon: 'fa fa-question', url: '/angular/directives/ngif' },
            { nom: 'Directives: ngFor', tipus: _enums_Tipus_enum__WEBPACK_IMPORTED_MODULE_2__["Tipus"].Angular, icon: 'fa fa-sync-alt', url: '/angular/directives/ngfor' },
            { nom: 'Directives: ngSwitch', tipus: _enums_Tipus_enum__WEBPACK_IMPORTED_MODULE_2__["Tipus"].Angular, icon: 'fa fa-random', url: '/angular/directives/ngswitch' },
            { nom: 'Directives: ngValue', tipus: _enums_Tipus_enum__WEBPACK_IMPORTED_MODULE_2__["Tipus"].Angular, icon: 'fa fa-long-arrow-alt-right', url: '/angular/directives/ngvalue' },
            { nom: 'Directives: ngModel', tipus: _enums_Tipus_enum__WEBPACK_IMPORTED_MODULE_2__["Tipus"].Angular, icon: 'fa fa-arrows-alt-h', url: '/angular/directives/ngmodel' },
            { nom: 'Directives: ngClass', tipus: _enums_Tipus_enum__WEBPACK_IMPORTED_MODULE_2__["Tipus"].Angular, icon: 'fab fa-css3-alt', url: '/angular/directives/ngclass' },
            { nom: 'Directives: ngStyle', tipus: _enums_Tipus_enum__WEBPACK_IMPORTED_MODULE_2__["Tipus"].Angular, icon: 'fa fa-border-style', url: '/angular/directives/ngstyle' },
            { nom: 'angular.directives.structures.menu', tipus: _enums_Tipus_enum__WEBPACK_IMPORTED_MODULE_2__["Tipus"].Angular, icon: 'fas fa-code', url: '/angular/directives/structures', traduir: true },
            { nom: 'Directives: NgTemplateOutlet', tipus: _enums_Tipus_enum__WEBPACK_IMPORTED_MODULE_2__["Tipus"].Angular, icon: 'far fa-file-code', url: '/angular/directives/ngtemplateoutlet' },
            { nom: 'Routing', tipus: _enums_Tipus_enum__WEBPACK_IMPORTED_MODULE_2__["Tipus"].Angular, icon: 'fas fa-directions', url: '/angular/routing' },
            { nom: 'Routing: Can Activate', tipus: _enums_Tipus_enum__WEBPACK_IMPORTED_MODULE_2__["Tipus"].Angular, icon: 'fas fa-shield-alt', url: '/angular/routing/canactivate' },
            { nom: 'angular.routing.location.strategy.menu', tipus: _enums_Tipus_enum__WEBPACK_IMPORTED_MODULE_2__["Tipus"].Angular, icon: 'far fa-compass', url: '/angular/routing/strategy', traduir: true },
            { nom: 'angular.routing.navigation.menu', tipus: _enums_Tipus_enum__WEBPACK_IMPORTED_MODULE_2__["Tipus"].Angular, icon: 'fas fa-route', url: '/angular/routing/navigation', traduir: true },
            { nom: 'angular.routing.get.params.menu', tipus: _enums_Tipus_enum__WEBPACK_IMPORTED_MODULE_2__["Tipus"].Angular, icon: 'fas fa-subscript', url: '/angular/routing/getparam', traduir: true },
            { nom: 'angular.routing.exemple.menu', tipus: _enums_Tipus_enum__WEBPACK_IMPORTED_MODULE_2__["Tipus"].Angular, icon: 'fas fa-vial', url: '/angular/routing/example', traduir: true },
            { nom: 'HTTP Client', tipus: _enums_Tipus_enum__WEBPACK_IMPORTED_MODULE_2__["Tipus"].Angular, icon: 'fas fa-globe-europe', url: '/angular/http' },
            { nom: 'HTTP Client: Interceptors', tipus: _enums_Tipus_enum__WEBPACK_IMPORTED_MODULE_2__["Tipus"].Angular, icon: 'fas fa-syringe', url: '/angular/http/interceptors' },
        ];
    }
    ngOnInit() { }
    netejar() {
        this.filtre = null;
        this.tipusSeleccionat = null;
    }
    changeLang(lang) {
        this.translate.use(lang);
        this.netejar();
    }
};
PanellComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }
];
PanellComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-panell',
        template: __webpack_require__(/*! raw-loader!./panell.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/panell/panell.component.html"),
        styles: [__webpack_require__(/*! ./panell.component.css */ "./src/app/components/panell/panell.component.css")]
    })
    // tslint:disable: max-line-length
], PanellComponent);



/***/ }),

/***/ "./src/app/enums/Tipus.enum.ts":
/*!*************************************!*\
  !*** ./src/app/enums/Tipus.enum.ts ***!
  \*************************************/
/*! exports provided: Tipus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tipus", function() { return Tipus; });
var Tipus;
(function (Tipus) {
    Tipus["Javascript"] = "Javascript";
    Tipus["Typescript"] = "Typescript";
    Tipus["Angular"] = "Angular";
    Tipus["AngularCLI"] = "AngularCLI";
})(Tipus || (Tipus = {}));
(function (Tipus) {
    function values() {
        return Object.keys(Tipus).filter((type) => isNaN(type) && type !== 'values');
    }
    Tipus.values = values;
})(Tipus || (Tipus = {}));


/***/ }),

/***/ "./src/app/interceptors/httpsample.interceptor.ts":
/*!********************************************************!*\
  !*** ./src/app/interceptors/httpsample.interceptor.ts ***!
  \********************************************************/
/*! exports provided: HttpSampleInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpSampleInterceptor", function() { return HttpSampleInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_httpclient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/httpclient.service */ "./src/app/services/httpclient.service.ts");



let HttpSampleInterceptor = class HttpSampleInterceptor {
    constructor(service) {
        this.service = service;
    }
    intercept(req, next) {
        const sample = this.service.token;
        const authReq = req.clone({ headers: req.headers.append('sample', `${sample}`) });
        return next.handle(authReq);
    }
};
HttpSampleInterceptor.ctorParameters = () => [
    { type: _services_httpclient_service__WEBPACK_IMPORTED_MODULE_2__["HttpclientService"] }
];
HttpSampleInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], HttpSampleInterceptor);



/***/ }),

/***/ "./src/app/pipes/filtre.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/filtre.pipe.ts ***!
  \**************************************/
/*! exports provided: FiltrePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltrePipe", function() { return FiltrePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");



let FiltrePipe = class FiltrePipe {
    constructor(translate) {
        this.translate = translate;
    }
    transform(pagines, filtre, tipus) {
        const arrayTemp = [];
        for (const pagina of pagines) {
            let prop1 = this.normalize(pagina.nom);
            if (pagina.traduir === true) {
                prop1 = this.normalize(this.translate.instant(pagina.nom));
            }
            const prop2 = this.normalize(filtre);
            if ((!pagina.url || !filtre || prop1.includes(prop2)) && (tipus == null || pagina.tipus === tipus)) {
                arrayTemp.push(pagina);
            }
        }
        return arrayTemp;
    }
    normalize(text) {
        return text ? text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') : text;
    }
};
FiltrePipe.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
FiltrePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filtre'
    })
], FiltrePipe);



/***/ }),

/***/ "./src/app/services/httpclient.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/httpclient.service.ts ***!
  \************************************************/
/*! exports provided: HttpclientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpclientService", function() { return HttpclientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HttpclientService = class HttpclientService {
    constructor(http) {
        this.http = http;
        this.token = 'Hello World';
        this.url = 'https://jsonplaceholder.typicode.com/todos/1';
    }
    exemple1() {
        this.http.get(this.url)
            .subscribe(data => {
            console.log(data['title']);
        });
    }
    exemple2() {
        this.http.get(this.url, { responseType: 'text' })
            .subscribe(data => {
            console.log(data);
        });
    }
    exemple3() {
        this.http.get(this.url, { observe: 'response' })
            .subscribe(response => {
            console.log('Status: ' + response.status);
            console.log('URL: ' + response.url);
            console.log('Title: ' + response.body['title']);
        });
    }
    exemple4() {
        this.http.get(this.url).subscribe(data => {
            console.log(data.title); // OK
            //console.log(data.test); // Error
        });
    }
    exemple5() {
        this.http.get('http://localhost:3000/injectionsample', { responseType: 'text' })
            .subscribe(data => {
            console.log(data);
        });
    }
};
HttpclientService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpclientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpclientService);



/***/ }),

/***/ "./src/app/services/size.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/size.service.ts ***!
  \******************************************/
/*! exports provided: SizeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizeService", function() { return SizeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SizeService = class SizeService {
    isMobile() {
        return innerWidth < 1024;
    }
};
SizeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SizeService);



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/c/Users/0010637/Desktop/Curs Angular/exemples/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map