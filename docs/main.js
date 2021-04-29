(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/adityamundhara/Desktop/personal/me/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");







class AppComponent {
    constructor(titleService) {
        var i = 0;
        var words = [
            '👨‍💻 Aditya 👨‍💻',
            '💻 Developer 💻',
            'Angular',
            'Node.js',
            'NGRX/NGXS',
            'Ts/Js',
            'C++',
            'D3.js,HighCharts,Canvas',
            'Docker',
        ];
        titleService.setTitle(words[i]);
        setInterval(() => {
            if (i === words.length) {
                i = 0;
            }
            titleService.setTitle(words[i]);
            i++;
        }, 1500);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [["fxFlex", "", "fxLayout", "column", 2, "margin", "10px"], ["fxFlex", "15"], ["fxFlex", "20"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n  background-color: #0c0c0c;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQ0xHO0VETUgsZ0JBQUE7QUFESiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vLi4vYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMuc2Nzcyc7XG5cbjpob3N0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59IiwiJGJsYWNrOiMwYzBjMGM7XG4kbWF0cml4LWdyZWVuOnJnYig3NSwgMjU1LCAxNjUpO1xuJGdyYXk6I2FhYTtcbiR3aGl0ZTojZmZmIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _resume_component_resume_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resume-component/resume-component.component */ "zyk5");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./skills/skills.component */ "fGbd");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _resume_component_resume_component_component__WEBPACK_IMPORTED_MODULE_5__["ResumeComponentComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
        _skills_skills_component__WEBPACK_IMPORTED_MODULE_13__["SkillsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _resume_component_resume_component_component__WEBPACK_IMPORTED_MODULE_5__["ResumeComponentComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                    _skills_skills_component__WEBPACK_IMPORTED_MODULE_13__["SkillsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");








function HeaderComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "engineering");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Skills");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/skills");
} }
function HeaderComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/aditya");
} }
class HeaderComponent {
    constructor(router) {
        this.router = router;
        this.isHome = false;
    }
    ngOnInit() {
    }
    clicked() {
        this.isHome = !this.isHome;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 21, vars: 3, consts: [["fxFlex", "", "fxLayout", "row", "fxLayoutAlign", "space-around center"], ["href", "./../../assets/aditya_mundhara.docx", "download", "", 1, "name"], [1, "rName"], [1, "bolder-white"], ["fxFlex", "", "fxLayoutAlign", "end center", "fxLayoutGap", "10px"], ["mat-button", "", 3, "routerLink", 4, "ngIf"], ["mat-button", "", 3, "matMenuTriggerFor"], [1, "greenButton", 2, "font-size", "20px"], ["menu", "matMenu"], ["mat-menu-item", "", "href", "https://adityamundhara.github.io/sorting_visualizer/", "target", "_blank", 1, "bolder-green"], ["mat-menu-item", "", "href", "https://adityamundhara.github.io/asteroids/", "target", "_blank", 1, "bolder-green"], ["mat-button", "", 3, "routerLink"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Aditya ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "/>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeaderComponent_button_9_Template, 4, 1, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HeaderComponent_button_10_Template, 4, 1, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-menu", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Sorting Visualizer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Asteroids");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.router.url === "/aditya");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.router.url === "/skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r2);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".fixName[_ngcontent-%COMP%] {\n  position: absolute;\n}\n\n.name[_ngcontent-%COMP%] {\n  color: #aaa;\n  font-size: 30px;\n  text-decoration: none;\n  line-height: 30px;\n  cursor: pointer;\n}\n\n.name[_ngcontent-%COMP%]   .rName[_ngcontent-%COMP%]   .bolder-white[_ngcontent-%COMP%] {\n  color: #4bffa5;\n}\n\n.bolder-green[_ngcontent-%COMP%], .greenButton[_ngcontent-%COMP%] {\n  color: #4bffa5;\n}\n\n  .mat-menu-panel {\n  background: #858585 !important;\n}\n\n@media screen and (max-width: 480px) {\n  .name[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7QUFBSjs7QUFFQTtFQUNJLFdDSEU7RURJRixlQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFDUTtFQUNJLGNDWEU7QURZZDs7QUFHQTtFQUNJLGNDaEJVO0FEZ0JkOztBQUtBO0VBQ1EsOEJBQUE7QUFGUjs7QUFJQTtFQUNJO0lBQ00sZUFBQTtFQURSO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi8uLi8uLi9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzJztcbi5maXhOYW1le1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5uYW1le1xuICAgIGNvbG9yOiAkZ3JheTtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGxpbmUtaGVpZ2h0OjMwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC5yTmFtZXtcbiAgICAgICAgLmJvbGRlci13aGl0ZXtcbiAgICAgICAgICAgIGNvbG9yOiRtYXRyaXgtZ3JlZW47XG4gICAgICAgIH1cbiAgICB9XG59XG4uYm9sZGVyLWdyZWVue1xuICAgIGNvbG9yOiRtYXRyaXgtZ3JlZW47XG59XG4uZ3JlZW5CdXR0b257XG4gICAgQGV4dGVuZCAuYm9sZGVyLWdyZWVuO1xufVxuOjpuZy1kZWVwIC5tYXQtbWVudS1wYW5lbHtcbiAgICAgICAgYmFja2dyb3VuZDogIzg1ODU4NSAhaW1wb3J0YW50O1xuICAgIH1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgLm5hbWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuICAgICAgfSIsIiRibGFjazojMGMwYzBjO1xuJG1hdHJpeC1ncmVlbjpyZ2IoNzUsIDI1NSwgMTY1KTtcbiRncmF5OiNhYWE7XG4kd2hpdGU6I2ZmZiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "fGbd":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");



class SkillsComponent {
    constructor() {
        this.angular = 80;
        this.typescript = 80;
        this.docker = 70;
        this.d3 = 60;
        this.ngrx = 60;
        this.cpp = 40;
        this.git = 50;
        this.node = 70;
        this.postgres = 70;
    }
    ngOnInit() {
    }
    downloadRes() {
        var anchor = document.createElement('a');
        anchor.setAttribute('href', './../../assets/aditya_mundhara.docx');
        anchor.setAttribute('download', '');
        document.body.appendChild(anchor);
        anchor.click();
        anchor.parentNode.removeChild(anchor);
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(); };
SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 55, vars: 16, consts: [["fxFlex", "", "fxLayout", "column"], ["fxFlex", "80", "fxLayout", "row"], ["fxFlex", "50", "fxLayout", "column", "fxLayoutAlign", "space-around start", 1, "rightBorder", "commonPadding"], ["fxFlex", "", "fxLayout", "column", 1, "widthControl"], ["fxFlex", "35"], ["fxFlex", "", "fxLayout", "row"], [1, "defaultBar", 3, "fxFlex"], ["fxFlex", "", 1, "nonDefault"], ["fxFlex", "50", "fxLayout", "column", "fxLayoutAlign", "space-around start", 1, "commonPadding"], ["fxFlex", "", 1, "relativeDisp"], [1, "btn", 3, "click"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillsComponent_Template_button_click_53_listener() { return ctx.downloadRes(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Download CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Angular5+ ( ", ctx.angular, "% )");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", ctx.angular);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Typescript/Javascript ( ", ctx.typescript, "% )");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", ctx.typescript);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("D3.js/Highcharts.js ( ", ctx.d3, "% )");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", ctx.d3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Ngrx and Ngxs Store ( ", ctx.ngrx, "% )");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", ctx.ngrx);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Node.js with Express.js/Koa.js ( ", ctx.node, "% )");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", ctx.node);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Postgres SQL / Influx SQL ( ", ctx.postgres, "% )");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", ctx.postgres);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Docker ( ", ctx.docker, "% )");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", ctx.docker);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("C++ ( ", ctx.cpp, "% )");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", ctx.cpp);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\n.rightBorder[_ngcontent-%COMP%] {\n  border-right: 1px solid rgba(255, 255, 255, 0.07);\n}\n\n.commonPadding[_ngcontent-%COMP%] {\n  padding: 0px 20px 0 20px;\n}\n\n.widthControl[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.defaultBar[_ngcontent-%COMP%] {\n  background-color: #4bffa5;\n  height: 3px;\n}\n\n.nonDefault[_ngcontent-%COMP%] {\n  background-color: #fff;\n  height: 3px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  border: 2px solid #4bffa5;\n  background-color: #0c0c0c;\n  color: #4bffa5;\n  margin: 0;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  height: 50%;\n  width: 25%;\n  font-size: 20px;\n  cursor: pointer;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 30px 0px rgba(75, 255, 165, 0.7);\n}\n\n.relativeDisp[_ngcontent-%COMP%] {\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFESjs7QUFJQTtFQUNJLGlEQUFBO0FBREo7O0FBSUE7RUFDSSx3QkFBQTtBQURKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFBSjs7QUFFQTtFQUNJLHlCQ2xCVTtFRG1CVixXQUFBO0FBQ0o7O0FBQ0E7RUFDSSxzQkNwQkc7RURxQkgsV0FBQTtBQUVKOztBQUFBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkM5Qkc7RUQrQkgsY0M5QlU7RUQrQlYsU0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBR0o7O0FBQUE7RUFDUSxvREFBQTtBQUdSOztBQUFBO0VBQ0ksa0JBQUE7QUFHSiIsImZpbGUiOiJzcmMvYXBwL3NraWxscy9za2lsbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzLnNjc3MnO1xuXG46aG9zdCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ucmlnaHRCb3JkZXIge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjA3KTtcbn1cblxuLmNvbW1vblBhZGRpbmcge1xuICAgIHBhZGRpbmc6IDBweCAyMHB4IDAgMjBweDtcbn1cbi53aWR0aENvbnRyb2x7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4uZGVmYXVsdEJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjokbWF0cml4LWdyZWVuO1xuICAgIGhlaWdodDozcHg7XG59XG4ubm9uRGVmYXVsdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjokd2hpdGU7XG4gICAgaGVpZ2h0OjNweDtcbn1cbi5idG57XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlcjoycHggc29saWQgIzRiZmZhNTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2s7XG4gICAgY29sb3I6JG1hdHJpeC1ncmVlbjtcbiAgICBtYXJnaW46IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGhlaWdodDo1MCU7XG4gICAgd2lkdGg6MjUlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idG46aG92ZXJ7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMzBweCAwcHggcmdiYSg3NSwgMjU1LCAxNjUsIDAuNyk7XG4gICAgfVxuXG4ucmVsYXRpdmVEaXNwe1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn0iLCIkYmxhY2s6IzBjMGMwYztcbiRtYXRyaXgtZ3JlZW46cmdiKDc1LCAyNTUsIDE2NSk7XG4kZ3JheTojYWFhO1xuJHdoaXRlOiNmZmYiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skills',
                templateUrl: './skills.component.html',
                styleUrls: ['./skills.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");





class FooterComponent {
    constructor() {
        this.faPhone = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPhone"];
        this.faEnvelope = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEnvelope"];
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 7, vars: 2, consts: [["fxFlex", "", "fxLayout", "column", "fxLayoutAlign", "center none", "fxLayoutGap", "20px"], [1, "grayFont"], [3, "icon"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " mundhraaditya3@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " 8939206397 / 6363484802");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faEnvelope);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faPhone);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"]], styles: [".grayFont[_ngcontent-%COMP%] {\n  color: #aaa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzLnNjc3MnO1xuLmdyYXlGb250e1xuICAgIGNvbG9yOiRncmF5O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _resume_component_resume_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resume-component/resume-component.component */ "zyk5");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skills/skills.component */ "fGbd");






const routes = [
    { path: '', redirectTo: 'aditya', pathMatch: 'full' },
    { path: 'aditya', component: _resume_component_resume_component_component__WEBPACK_IMPORTED_MODULE_2__["ResumeComponentComponent"] },
    { path: 'skills', component: _skills_skills_component__WEBPACK_IMPORTED_MODULE_3__["SkillsComponent"] },
    { path: '**', redirectTo: 'aditya' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zyk5":
/*!****************************************************************!*\
  !*** ./src/app/resume-component/resume-component.component.ts ***!
  \****************************************************************/
/*! exports provided: ResumeComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponentComponent", function() { return ResumeComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "8tEE");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "twK/");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");






class ResumeComponentComponent {
    constructor() {
        this.faEnvelope = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEnvelope"];
        this.faLinkedinIn = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLinkedinIn"];
        this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGithub"];
    }
    ngOnInit() {
    }
}
ResumeComponentComponent.ɵfac = function ResumeComponentComponent_Factory(t) { return new (t || ResumeComponentComponent)(); };
ResumeComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResumeComponentComponent, selectors: [["app-resume-component"]], decls: 14, vars: 3, consts: [["fxFlex", "", "fxLayoutAlign", "space-around stretch", 1, "backgroundDiv"], ["fxFlex", "50", 1, "myPhoto"], ["fxFlex", "30", 1, "fontStyle", "styleDiv"], [1, "greenFont"], ["fxFlex", "20", "fxLayout", "column", "fxLayoutAlign", "center end", "fxLayoutGap", "15px", 1, "fontAwesomesize"], ["href", "https://www.linkedin.com/in/aditya-mundhara-b8977a126/", "target", "_blank", "title", "LinkedIn"], [3, "icon"], ["href", "https://github.com/adityaMundhara", "target", "_blank", "title", "Github"], ["href", "mailto::mundhraaditya3@gmail.com", "target", "_blank", "title", "Mail"]], template: function ResumeComponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Hello,I'm ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Aditya Mundhara");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ", Full-Stack Developer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faLinkedinIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faGithub);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faEnvelope);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"]], styles: ["[_nghost-%COMP%] {\n  background-color: #0c0c0c;\n  height: 100%;\n  width: 100%;\n}\n\n.myPhoto[_ngcontent-%COMP%] {\n  background-image: url('aditya.jpg');\n  height: 100%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  -webkit-clip-path: polygon(31% 0, 100% 25%, 61% 100%, 0 93%);\n          clip-path: polygon(31% 0, 100% 25%, 61% 100%, 0 93%);\n  background-position-y: center;\n  background-position-x: 40%;\n  filter: grayscale(1);\n}\n\n.fontStyle[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 300;\n  line-height: 23px;\n}\n\n.styleDiv[_ngcontent-%COMP%] {\n  position: relative;\n  top: 85%;\n  left: -10%;\n}\n\n.greenFont[_ngcontent-%COMP%] {\n  color: #4bffa5;\n}\n\n.fontAwesomesize[_ngcontent-%COMP%] {\n  padding: 0px 5% 0px 0px;\n  font-size: 25px;\n}\n\n.backgroundDiv[_ngcontent-%COMP%] {\n  margin: 0px 5px;\n}\n\n@media screen and (max-width: 480px) {\n  .styleDiv[_ngcontent-%COMP%] {\n    top: 70%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lLWNvbXBvbmVudC9yZXN1bWUtY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSx5QkNIRztFRElILFlBQUE7RUFDQSxXQUFBO0FBREo7O0FBR0E7RUFDSSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNERBQUE7VUFBQSxvREFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtBQUFKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFFSjs7QUFDQTtFQUNJLGNDNUJVO0FEOEJkOztBQUFBO0VBQ0ksdUJBQUE7RUFDQSxlQUFBO0FBR0o7O0FBREE7RUFDSSxlQUFBO0FBSUo7O0FBREE7RUFDSTtJQUNJLFFBQUE7RUFJTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcmVzdW1lLWNvbXBvbmVudC9yZXN1bWUtY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi8uLi8uLi9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzJztcblxuOmhvc3R7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5teVBob3Rve1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLy4uLy4uL2Fzc2V0cy9hZGl0eWEuanBnKTsgIFxuICAgIGhlaWdodDoxMDAlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBjbGlwLXBhdGg6cG9seWdvbigzMSUgMCwxMDAlIDI1JSw2MSUgMTAwJSwwIDkzJSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OmNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6NDAlIDtcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcbn1cbi5mb250U3R5bGV7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbGluZS1oZWlnaHQ6MjNweDtcbn1cbi5zdHlsZURpdntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOjg1JTtcbiAgICBsZWZ0Oi0xMCU7XG59XG5cbi5ncmVlbkZvbnR7XG4gICAgY29sb3I6JG1hdHJpeC1ncmVlbjtcbn1cbi5mb250QXdlc29tZXNpemV7XG4gICAgcGFkZGluZzowcHggNSUgMHB4IDBweDtcbiAgICBmb250LXNpemU6MjVweDtcbn1cbi5iYWNrZ3JvdW5kRGl2e1xuICAgIG1hcmdpbjowcHggNXB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIC5zdHlsZURpdiB7XG4gICAgICAgIHRvcDo3MCU7XG4gICAgICAgIH1cbiAgICAgIH0iLCIkYmxhY2s6IzBjMGMwYztcbiRtYXRyaXgtZ3JlZW46cmdiKDc1LCAyNTUsIDE2NSk7XG4kZ3JheTojYWFhO1xuJHdoaXRlOiNmZmYiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resume-component',
                templateUrl: './resume-component.component.html',
                styleUrls: ['./resume-component.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map