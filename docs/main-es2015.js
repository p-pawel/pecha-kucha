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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/slide/slide.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/slide/slide.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"body\">\n\n  <div class=\"id\">#{{id}}</div>\n\n\n  <div class=\"progress\" [ngStyle]=\"{width: progress + '%' }\"></div>\n\n  <div class=\"contents\" style=\"background: #1d4f65\" *ngIf=\"id==1\">\n    <img src=\"assets/loom.png\" style=\"width: 30%;     position: absolute;\n    top: 50%;\n    left: 50%;\n    margin: -15% 0 0 -15%;\">\n  </div>\n\n  <div class=\"contents\"\n       style=\"background-image: url('assets/2016-11-21-roman-drits-barnimages-010.jpg'); background-size: cover\"\n       *ngIf=\"id==2\">\n\n  </div>\n\n  <div class=\"contents\" style=\"background: #1d4f65\" *ngIf=\"id==3\">\n    <img src=\"assets/sync.png\" style=\"width: 20%;     position: absolute;\n    top: 50%;\n    left: 50%;\n    margin: -10% 0 0 -30%;\">\n\n    <img src=\"assets/async.png\" style=\"width: 20%;     position: absolute;\n    top: 50%;\n    left: 50%;\n    margin: -10% 0 0 10%;\">\n\n  </div>\n\n  <div class=\"contents\" style=\"background-image: url('assets/manhuntuna.0.jpg'); background-size: cover\" *ngIf=\"id==4\">\n    <div style=\"position: absolute;\n    width: 40%;\n    bottom: 80%;\n    left: 5%;\n    top: 30%;\n    font-size: 8rem;\n    color: white;\n    font-variant-caps: petite-caps;\n    text-shadow: 0 0 13px black;\">\n      Eat your cake\n      and have it\n    </div>\n  </div>\n\n\n  <div class=\"contents\" style=\" background-image: url('assets/61yQBy7lDlL._UL1001_.jpg');\n\n    background-repeat:   no-repeat;\n    background-position: center center;   \" *ngIf=\"id==5\">\n\n    <div style=\"position: absolute;\n    bottom: 50%;\n    left: 20%;\n    right: 20%;\n    top: 15%;\n    font-size: 8rem;\n    color: white;\n    font-variant-caps: petite-caps;\n    text-shadow: 0 0 13px black;\">\n      Make Concurrency\n      Simple Again\n    </div>\n  </div>\n\n  <div class=\"contents\" style=\"background:white\" *ngIf=\"id==6\">\n\n    <article>\n      <h1 style=\"color: gray\">Project Loom</h1>\n      <ul style=\"line-height: 2em;\">\n        <li>Fibers (lightweight user-mode threads)</li>\n        <li>Delimited continuations</li>\n        <li>Tail-call elimination</li>\n      </ul>\n    </article>\n  </div>\n\n\n  <div class=\"contents\" style=\"background:white\" *ngIf=\"id==7\">\n    <article>\n      <h1>What is a continuation?</h1>\n      <p></p>\n    </article>\n  </div>\n\n\n  <div class=\"contents\" style=\"background-color: #333\" *ngIf=\"id==8\">\n\n    <div style=\"text-align: left;font-size: 2rem; margin: 5% 5% 0 5%\">\n      <div [innerHTML]=\"code1 | safeHtml\"></div>\n    </div>\n    <div style=\"text-align: left;font-size: 2rem; margin: 2% 5% 0 5%\">\n      <div [innerHTML]=\"code1out | safeHtml\"></div>\n    </div>\n  </div>\n\n  <div class=\"contents\" style=\"background:white\" *ngIf=\"id==9\">\n\n    <article >\n      <h1 >Current limitations</h1>\n      <ul style=\"line-height: 2em;\">\n        <li>cannot yield with native frames on continuation stack</li>\n        <li>cannot yield while holding monitor</li>\n      </ul>\n    </article>\n  </div>\n\n\n\n  <div class=\"contents\" style=\"background:white\" *ngIf=\"id==10\">\n    <article >\n      <h1 >What is a fiber?</h1>\n      <p>Fiber is a <i>light-weight</i> (or <i>user-mode</i>) thread that is scheduled by the Java virtual machine, not\n        by the operating system (kernel).</p>\n      <p>Fibers are intended to be very small footprint, so that we should be able to have millions of them with\n        negligible task-switching overhead.</p>\n    </article>\n  </div>\n\n\n  <div class=\"contents\" style=\"background-color: #333\" *ngIf=\"id==11\">\n    <div style=\"text-align: left;font-size: 2rem; margin: 5% 5% 0 5%\">\n      <div [innerHTML]=\"'fiber code' | safeHtml\"></div>\n    </div>\n  </div>\n\n\n  <div class=\"contents\" style=\"background:white\" *ngIf=\"id==12\">\n    <article >\n      <h1>...</h1>\n    </article>\n  </div>\n\n  <div class=\"contents\" style=\"background:white\" *ngIf=\"id==13\">\n    <article >\n      <h1>Fibers vs Threads</h1>\n    </article>\n  </div>\n\n  <div class=\"contents\" style=\"background:white\" *ngIf=\"id==14\">\n    <article >\n      <h1>GOTO considered harmful</h1>\n    </article>\n  </div>\n\n  <div class=\"contents\" style=\"background:white\" *ngIf=\"id==16\">\n    <article >\n      <h1>Concurrent fire and forget</h1>\n    </article>\n  </div>\n\n  <div class=\"contents\" style=\"background:white\" *ngIf=\"id==16\">\n    <article >\n      <h1>Concurrent fire and forget</h1>\n    </article>\n  </div>\n\n  <div class=\"contents\" style=\"background:white\" *ngIf=\"id==17\">\n    <article >\n      <h1>Rethink of threads</h1>\n    </article>\n  </div>\n\n  <div class=\"contents\" style=\"background:white\" *ngIf=\"id==18\">\n    <article >\n      <h1 >When?</h1>\n    </article>\n  </div>\n\n  <div class=\"contents\" style=\"background:white\" *ngIf=\"id==19\">\n    <article >\n      <ul style=\"line-height: 2em;\">\n        <li>nitka</li>\n        <li>włókno</li>\n        <li>pasmo</li>\n      </ul>\n    </article>\n  </div>\n\n  <div class=\"contents\" style=\"background: #1d4f65\" *ngIf=\"id==20\">\n    <img src=\"assets/loom.png\" style=\"width: 30%;     position: absolute;\n    top: 50%;\n    left: 50%;\n    margin: -15% 0 0 -15%;\">\n  </div>\n\n\n  <div class=\"contents\" style=\"background-color: #333\" *ngIf=\"id>20\"></div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/SafeHtmlPipe.ts":
/*!*********************************!*\
  !*** ./src/app/SafeHtmlPipe.ts ***!
  \*********************************/
/*! exports provided: SafeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



/**
 * Generated class for the SafeHtmlPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */ let SafeHtmlPipe = class SafeHtmlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }
};
SafeHtmlPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SafeHtmlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'safeHtml',
    })
], SafeHtmlPipe);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'pecha-kucha';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _slide_slide_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slide/slide.component */ "./src/app/slide/slide.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _SafeHtmlPipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SafeHtmlPipe */ "./src/app/SafeHtmlPipe.ts");








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _slide_slide_component__WEBPACK_IMPORTED_MODULE_5__["SlideComponent"],
            _SafeHtmlPipe__WEBPACK_IMPORTED_MODULE_7__["SafeHtmlPipe"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([
                {
                    path: '',
                    component: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
                },
                {
                    path: 'slide/:id',
                    component: _slide_slide_component__WEBPACK_IMPORTED_MODULE_5__["SlideComponent"]
                },
            ])
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/slide/slide.component.scss":
/*!********************************************!*\
  !*** ./src/app/slide/slide.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".progress {\n  display: block;\n  background: #4200b7;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 4px;\n  z-index: 100;\n}\n\n.id {\n  display: block;\n  position: absolute;\n  top: 0;\n  right: 8px;\n  z-index: 100;\n  opacity: 0.25;\n  font-size: 3rem;\n}\n\nhtml, body, .body {\n  padding: 0px;\n  margin: 0px;\n  height: 100%;\n  text-align: center;\n}\n\n.contents {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n.contents article {\n  position: absolute;\n  bottom: 15%;\n  left: 20%;\n  right: 20%;\n  top: 15%;\n  font-size: 3rem;\n  color: black;\n  text-align: left;\n}\n\n.contents article h1 {\n  font-size: 5rem;\n  color: gray;\n}\n\n.prism-code {\n  color: #9cdcfe;\n  background-color: #1e1e1e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9vcHQvcHBhd2VsL3BlY2hhL3BlY2hhLWt1Y2hhL3NyYy9hcHAvc2xpZGUvc2xpZGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NsaWRlL3NsaWRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQUY7O0FESUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ0RGOztBRElBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtBQ0RGOztBREdFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0RKOztBREdJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNETjs7QURPQTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBQ0pGIiwiZmlsZSI6InNyYy9hcHAvc2xpZGUvc2xpZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5wcm9ncmVzcyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjNDIwMGI3O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiA0cHg7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuXG4uaWQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiA4cHg7XG4gIHotaW5kZXg6IDEwMDtcbiAgb3BhY2l0eTogMC4yNTA7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuaHRtbCwgYm9keSwgLmJvZHkge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRlbnRzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG5cbiAgYXJ0aWNsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTUlO1xuICAgIGxlZnQ6IDIwJTtcbiAgICByaWdodDogMjAlO1xuICAgIHRvcDogMTUlO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAgIGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgICAgIGNvbG9yOiBncmF5O1xuICAgIH1cbiAgfVxufVxuXG5cbi5wcmlzbS1jb2RlIHtcbiAgY29sb3I6IHJnYigxNTYsIDIyMCwgMjU0KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMwLCAzMCwgMzApO1xufVxuXG4iLCIucHJvZ3Jlc3Mge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogIzQyMDBiNztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogNHB4O1xuICB6LWluZGV4OiAxMDA7XG59XG5cbi5pZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDhweDtcbiAgei1pbmRleDogMTAwO1xuICBvcGFjaXR5OiAwLjI1O1xuICBmb250LXNpemU6IDNyZW07XG59XG5cbmh0bWwsIGJvZHksIC5ib2R5IHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250ZW50cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xufVxuLmNvbnRlbnRzIGFydGljbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTUlO1xuICBsZWZ0OiAyMCU7XG4gIHJpZ2h0OiAyMCU7XG4gIHRvcDogMTUlO1xuICBmb250LXNpemU6IDNyZW07XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5jb250ZW50cyBhcnRpY2xlIGgxIHtcbiAgZm9udC1zaXplOiA1cmVtO1xuICBjb2xvcjogZ3JheTtcbn1cblxuLnByaXNtLWNvZGUge1xuICBjb2xvcjogIzljZGNmZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/slide/slide.component.ts":
/*!******************************************!*\
  !*** ./src/app/slide/slide.component.ts ***!
  \******************************************/
/*! exports provided: SlideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideComponent", function() { return SlideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let SlideComponent = class SlideComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.showTime = 20;
        this.code1 = `<pre class="prism-code language-java" style="color: rgb(156, 220, 254); background-color: rgb(30, 30, 30);"><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token keyword" style="color: rgb(86, 156, 214);">public</span><span class="token plain"> </span><span class="token keyword" style="color: rgb(86, 156, 214);">class</span><span class="token plain"> </span><span class="token class-name" style="color: rgb(78, 201, 176);">HelloContinuations</span><span class="token plain"> </span><span class="token punctuation" style="color: rgb(212, 212, 212);">{</span><span class="token plain"></span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain">    </span><span class="token keyword" style="color: rgb(86, 156, 214);">public</span><span class="token plain"> </span><span class="token keyword" style="color: rgb(86, 156, 214);">static</span><span class="token plain"> </span><span class="token keyword" style="color: rgb(86, 156, 214);">void</span><span class="token plain"> </span><span class="token function" style="color: rgb(220, 220, 170);">main</span><span class="token punctuation" style="color: rgb(212, 212, 212);">(</span><span class="token class-name" style="color: rgb(78, 201, 176);">String</span><span class="token punctuation" style="color: rgb(212, 212, 212);">[</span><span class="token punctuation" style="color: rgb(212, 212, 212);">]</span><span class="token plain"> args</span><span class="token punctuation" style="color: rgb(212, 212, 212);">)</span><span class="token plain"> </span><span class="token keyword" style="color: rgb(86, 156, 214);">throws</span><span class="token plain"> </span><span class="token class-name" style="color: rgb(78, 201, 176);">InterruptedException</span><span class="token plain"> </span><span class="token punctuation" style="color: rgb(212, 212, 212);">{</span><span class="token plain"></span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain">        </span><span class="token keyword" style="color: rgb(86, 156, 214);">var</span><span class="token plain"> scope </span><span class="token operator" style="color: rgb(212, 212, 212);">=</span><span class="token plain"> </span><span class="token keyword" style="color: rgb(86, 156, 214);">new</span><span class="token plain"> </span><span class="token class-name" style="color: rgb(78, 201, 176);">ContinuationScope</span><span class="token punctuation" style="color: rgb(212, 212, 212);">(</span><span class="token string" style="color: rgb(206, 145, 120);">"demo"</span><span class="token punctuation" style="color: rgb(212, 212, 212);">)</span><span class="token punctuation" style="color: rgb(212, 212, 212);">;</span><span class="token plain"></span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain">        </span><span class="token keyword" style="color: rgb(86, 156, 214);">var</span><span class="token plain"> cont </span><span class="token operator" style="color: rgb(212, 212, 212);">=</span><span class="token plain"> </span><span class="token keyword" style="color: rgb(86, 156, 214);">new</span><span class="token plain"> </span><span class="token class-name" style="color: rgb(78, 201, 176);">Continuation</span><span class="token punctuation" style="color: rgb(212, 212, 212);">(</span><span class="token plain">scope</span><span class="token punctuation" style="color: rgb(212, 212, 212);">,</span><span class="token plain"> </span><span class="token punctuation" style="color: rgb(212, 212, 212);">(</span><span class="token punctuation" style="color: rgb(212, 212, 212);">)</span><span class="token plain"> </span><span class="token operator" style="color: rgb(212, 212, 212);">-&gt;</span><span class="token plain"> </span><span class="token punctuation" style="color: rgb(212, 212, 212);">{</span><span class="token plain"></span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain">            </span><span class="token class-name" style="color: rgb(78, 201, 176);">System</span><span class="token punctuation" style="color: rgb(212, 212, 212);">.</span><span class="token plain">out</span><span class="token punctuation" style="color: rgb(212, 212, 212);">.</span><span class="token function" style="color: rgb(220, 220, 170);">println</span><span class="token punctuation" style="color: rgb(212, 212, 212);">(</span><span class="token string" style="color: rgb(206, 145, 120);">"A"</span><span class="token punctuation" style="color: rgb(212, 212, 212);">)</span><span class="token punctuation" style="color: rgb(212, 212, 212);">;</span><span class="token plain"></span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain">            </span><span class="token class-name" style="color: rgb(78, 201, 176);">Continuation</span><span class="token punctuation" style="color: rgb(212, 212, 212);">.</span><span class="token function" style="color: rgb(220, 220, 170);">yield</span><span class="token punctuation" style="color: rgb(212, 212, 212);">(</span><span class="token plain">scope</span><span class="token punctuation" style="color: rgb(212, 212, 212);">)</span><span class="token punctuation" style="color: rgb(212, 212, 212);">;</span><span class="token plain"></span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain">            </span><span class="token class-name" style="color: rgb(78, 201, 176);">System</span><span class="token punctuation" style="color: rgb(212, 212, 212);">.</span><span class="token plain">out</span><span class="token punctuation" style="color: rgb(212, 212, 212);">.</span><span class="token function" style="color: rgb(220, 220, 170);">println</span><span class="token punctuation" style="color: rgb(212, 212, 212);">(</span><span class="token string" style="color: rgb(206, 145, 120);">"B"</span><span class="token punctuation" style="color: rgb(212, 212, 212);">)</span><span class="token punctuation" style="color: rgb(212, 212, 212);">;</span><span class="token plain"></span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain">            </span><span class="token class-name" style="color: rgb(78, 201, 176);">Continuation</span><span class="token punctuation" style="color: rgb(212, 212, 212);">.</span><span class="token function" style="color: rgb(220, 220, 170);">yield</span><span class="token punctuation" style="color: rgb(212, 212, 212);">(</span><span class="token plain">scope</span><span class="token punctuation" style="color: rgb(212, 212, 212);">)</span><span class="token punctuation" style="color: rgb(212, 212, 212);">;</span><span class="token plain"></span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain">            </span><span class="token class-name" style="color: rgb(78, 201, 176);">System</span><span class="token punctuation" style="color: rgb(212, 212, 212);">.</span><span class="token plain">out</span><span class="token punctuation" style="color: rgb(212, 212, 212);">.</span><span class="token function" style="color: rgb(220, 220, 170);">println</span><span class="token punctuation" style="color: rgb(212, 212, 212);">(</span><span class="token string" style="color: rgb(206, 145, 120);">"C"</span><span class="token punctuation" style="color: rgb(212, 212, 212);">)</span><span class="token punctuation" style="color: rgb(212, 212, 212);">;</span><span class="token plain"></span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain">        </span><span class="token punctuation" style="color: rgb(212, 212, 212);">}</span><span class="token punctuation" style="color: rgb(212, 212, 212);">)</span><span class="token punctuation" style="color: rgb(212, 212, 212);">;</span><span class="token plain"></span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain" style="display: inline-block;"></span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain">        </span><span class="token keyword" style="color: rgb(86, 156, 214);">while</span><span class="token plain"> </span><span class="token punctuation" style="color: rgb(212, 212, 212);">(</span><span class="token operator" style="color: rgb(212, 212, 212);">!</span><span class="token plain">cont</span><span class="token punctuation" style="color: rgb(212, 212, 212);">.</span><span class="token function" style="color: rgb(220, 220, 170);">isDone</span><span class="token punctuation" style="color: rgb(212, 212, 212);">(</span><span class="token punctuation" style="color: rgb(212, 212, 212);">)</span><span class="token punctuation" style="color: rgb(212, 212, 212);">)</span><span class="token plain"> </span><span class="token punctuation" style="color: rgb(212, 212, 212);">{</span><span class="token plain"></span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain">            </span><span class="token class-name" style="color: rgb(78, 201, 176);">System</span><span class="token punctuation" style="color: rgb(212, 212, 212);">.</span><span class="token plain">out</span><span class="token punctuation" style="color: rgb(212, 212, 212);">.</span><span class="token function" style="color: rgb(220, 220, 170);">println</span><span class="token punctuation" style="color: rgb(212, 212, 212);">(</span><span class="token string" style="color: rgb(206, 145, 120);">"Run"</span><span class="token punctuation" style="color: rgb(212, 212, 212);">)</span><span class="token punctuation" style="color: rgb(212, 212, 212);">;</span><span class="token plain"></span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain">            </span><span class="token class-name" style="color: rgb(78, 201, 176);">Thread</span><span class="token punctuation" style="color: rgb(212, 212, 212);">.</span><span class="token function" style="color: rgb(220, 220, 170);">sleep</span><span class="token punctuation" style="color: rgb(212, 212, 212);">(</span><span class="token number" style="color: rgb(181, 206, 168);">1000</span><span class="token punctuation" style="color: rgb(212, 212, 212);">)</span><span class="token punctuation" style="color: rgb(212, 212, 212);">;</span><span class="token plain"></span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain">            cont</span><span class="token punctuation" style="color: rgb(212, 212, 212);">.</span><span class="token function" style="color: rgb(220, 220, 170);">run</span><span class="token punctuation" style="color: rgb(212, 212, 212);">(</span><span class="token punctuation" style="color: rgb(212, 212, 212);">)</span><span class="token punctuation" style="color: rgb(212, 212, 212);">;</span><span class="token plain"></span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain">        </span><span class="token punctuation" style="color: rgb(212, 212, 212);">}</span><span class="token plain"></span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain">    </span><span class="token punctuation" style="color: rgb(212, 212, 212);">}</span><span class="token plain"></span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain"></span><span class="token punctuation" style="color: rgb(212, 212, 212);">}</span></div></pre>`;
        this.code1out = `<pre class="prism-code language-" style="color: rgb(156, 220, 254); background-color: rgb(30, 30, 30);"><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain">Run</span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain">A</span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain">Run</span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain">B</span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain">Run</span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain">C</span></div></pre>`;
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            this.id = +params.get("id");
            this.startTime = new Date().getTime();
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(50).subscribe(() => this.updateTimeline());
    }
    switchDayFromKeyboard(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (event.target['tagName'] == "INPUT") {
                return;
            }
            let key = event.key;
            if (key == "ArrowLeft") {
                yield this.switchSlide(this.id - 1);
            }
            if (key == "ArrowRight") {
                yield this.switchSlide(this.id + 1);
            }
        });
    }
    switchSlide(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (id < 1) {
                yield this.router.navigate([''], { relativeTo: this.route, });
            }
            yield this.router.navigate(['/slide', id], { relativeTo: this.route, });
        });
    }
    updateTimeline() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.id > 20) {
                this.progress = 0;
                return;
            }
            this.newTime = new Date().getTime();
            this.progress = (this.newTime - this.startTime) / 1000 / this.showTime * 100;
            if (this.progress >= 100) {
                yield this.switchSlide(this.id + 1);
            }
        });
    }
};
SlideComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown', ['$event'])
], SlideComponent.prototype, "switchDayFromKeyboard", null);
SlideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-slide',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./slide.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/slide/slide.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./slide.component.scss */ "./src/app/slide/slide.component.scss")).default]
    })
], SlideComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /opt/ppawel/pecha/pecha-kucha/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map