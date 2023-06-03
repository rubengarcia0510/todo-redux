"use strict";
(self["webpackChunktodo_redux"] = self["webpackChunktodo_redux"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _todos_todo_page_todo_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos/todo-page/todo-page.component */ 6050);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ 970);



class AppComponent {
  constructor() {
    this.title = 'todo-redux';
  }

}

AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};

AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 2,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-todo-page")(1, "app-footer");
    }
  },
  dependencies: [_todos_todo_page_todo_page_component__WEBPACK_IMPORTED_MODULE_0__.TodoPageComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _todos_todo_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos/todo.module */ 8537);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ 970);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store-devtools */ 5242);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.reducer */ 8191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);












class AppModule {}

AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};

AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _todos_todo_module__WEBPACK_IMPORTED_MODULE_1__.TodoModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_8__.StoreModule.forRoot(_app_reducer__WEBPACK_IMPORTED_MODULE_4__.appReducers), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__.StoreDevtoolsModule.instrument({
    maxAge: 25,
    logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.production
  })]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _todos_todo_module__WEBPACK_IMPORTED_MODULE_1__.TodoModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_8__.StoreRootModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__.StoreDevtoolsModule]
  });
})();

/***/ }),

/***/ 8191:
/*!********************************!*\
  !*** ./src/app/app.reducer.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appReducers": () => (/* binding */ appReducers)
/* harmony export */ });
/* harmony import */ var _todos_todo_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos/todo.reducer */ 229);
/* harmony import */ var _filtro_filtro_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filtro/filtro.reducer */ 4691);


const appReducers = {
  todos: _todos_todo_reducer__WEBPACK_IMPORTED_MODULE_0__.todoReducer,
  filtro: _filtro_filtro_reducer__WEBPACK_IMPORTED_MODULE_1__.filtroReducer
};

/***/ }),

/***/ 1727:
/*!******************************************!*\
  !*** ./src/app/filtro/filtro.actions.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setFiltro": () => (/* binding */ setFiltro)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const setFiltro = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[FILTRO] Set Filtro', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 4691:
/*!******************************************!*\
  !*** ./src/app/filtro/filtro.reducer.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filtroReducer": () => (/* binding */ filtroReducer),
/* harmony export */   "initialState": () => (/* binding */ initialState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _filtro_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filtro.actions */ 1727);


const initialState = 'todos';

const _filtroReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_filtro_actions__WEBPACK_IMPORTED_MODULE_0__.setFiltro, (state, {
  filtro
}) => filtro));

function filtroReducer(state, action) {
  return _filtroReducer(state, action);
}

/***/ }),

/***/ 970:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FooterComponent {
  constructor() {}

  ngOnInit() {}

}

FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)();
};

FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 15,
  vars: 0,
  consts: [[1, "info"], ["href", "http://sindresorhus.com"], ["href", "http://todomvc.com"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Double-click to edit a todo");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Template by ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sindre Sorhus");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Created by ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "you");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Part of ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "TodoMVC");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3526:
/*!**************************************!*\
  !*** ./src/app/todos/filtro.pipe.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiltroPipe": () => (/* binding */ FiltroPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FiltroPipe {
  transform(todos, filtro) {
    switch (filtro) {
      case 'completados':
        return todos.filter(todo => todo.completado);

      case 'pendientes':
        return todos.filter(todo => !todo.completado);

      default:
        return todos;
    }
  }

}

FiltroPipe.ɵfac = function FiltroPipe_Factory(t) {
  return new (t || FiltroPipe)();
};

FiltroPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "filtroTodo",
  type: FiltroPipe,
  pure: true
});

/***/ }),

/***/ 7185:
/*!********************************************!*\
  !*** ./src/app/todos/models/todo.model.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Todo": () => (/* binding */ Todo)
/* harmony export */ });
class Todo {
  constructor(texto) {
    this.id = Math.random();
    this.texto = texto;
    this.completado = false;
  }

}

/***/ }),

/***/ 7140:
/*!******************************************************!*\
  !*** ./src/app/todos/todo-add/todo-add.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoAddComponent": () => (/* binding */ TodoAddComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _todo_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../todo.actions */ 2590);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 3488);





class TodoAddComponent {
  constructor(store) {
    this.store = store;
    this.txtInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required);
  }

  ngOnInit() {}

  agregar() {
    if (this.txtInput.invalid) {
      return;
    }

    this.store.dispatch(_todo_actions__WEBPACK_IMPORTED_MODULE_0__.add({
      texto: this.txtInput.value
    }));
    this.txtInput.reset();
  }

}

TodoAddComponent.ɵfac = function TodoAddComponent_Factory(t) {
  return new (t || TodoAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store));
};

TodoAddComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: TodoAddComponent,
  selectors: [["app-todo-add"]],
  decls: 4,
  vars: 1,
  consts: [[1, "header"], ["placeholder", "Que quieres hacer?", "autofocus", "", 1, "new-todo", 3, "formControl", "keyup.enter"]],
  template: function TodoAddComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header", 0)(1, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "todos");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup.enter", function TodoAddComponent_Template_input_keyup_enter_3_listener() {
        return ctx.agregar();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.txtInput);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4978:
/*!************************************************************!*\
  !*** ./src/app/todos/todo-footer/todo-footer.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoFooterComponent": () => (/* binding */ TodoFooterComponent)
/* harmony export */ });
/* harmony import */ var _filtro_filtro_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../filtro/filtro.actions */ 1727);
/* harmony import */ var _todo_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todo.actions */ 2590);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);






function TodoFooterComponent_li_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoFooterComponent_li_6_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const filtro_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.cambiarFiltro(filtro_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const filtro_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("selected", filtro_r1 === ctx_r0.filtroActual);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 3, filtro_r1));
  }
}

class TodoFooterComponent {
  constructor(store) {
    this.store = store;
    this.filtroActual = 'todos';
    this.filtros = ['todos', 'completados', 'pendientes'];
    this.pendientes = 0;
  }

  ngOnInit() {
    this.store.select('filtro').subscribe(filtro => {
      this.filtroActual = filtro;
    });
    this.store.subscribe(store => {
      this.filtroActual = store.filtro;
      this.pendientes = store.todos.filter(todo => !todo.completado).length;
    });
  }

  cambiarFiltro(filtro) {
    this.filtroActual = filtro;
    this.store.dispatch(_filtro_filtro_actions__WEBPACK_IMPORTED_MODULE_0__.setFiltro({
      filtro: filtro
    }));
  }

  clearCompleted() {
    this.store.dispatch(_todo_actions__WEBPACK_IMPORTED_MODULE_1__.borrarCompletados());
  }

}

TodoFooterComponent.ɵfac = function TodoFooterComponent_Factory(t) {
  return new (t || TodoFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store));
};

TodoFooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: TodoFooterComponent,
  selectors: [["app-todo-footer"]],
  decls: 9,
  vars: 2,
  consts: [[1, "footer"], [1, "todo-count"], [1, "filters"], [3, "click", 4, "ngFor", "ngForOf"], [1, "clear-completed", 3, "click"], [3, "click"], ["href", "#/completed"]],
  template: function TodoFooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "footer", 0)(1, "span", 1)(2, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " item left");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ul", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, TodoFooterComponent_li_6_Template, 4, 5, "li", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoFooterComponent_Template_button_click_7_listener() {
        return ctx.clearCompleted();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Clear completed");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.pendientes);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.filtros);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.TitleCasePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7789:
/*!********************************************************!*\
  !*** ./src/app/todos/todo-item/todo-item.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoItemComponent": () => (/* binding */ TodoItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _todo_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../todo.actions */ 2590);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 3488);





const _c0 = ["inputFisico"];
class TodoItemComponent {
  constructor(store) {
    this.store = store;
    this.editando = false;
  }

  ngOnInit() {
    this.chkCompletado = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(this.todo.completado);
    this.inputText = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(this.todo.texto, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required);
    this.chkCompletado.valueChanges.subscribe(() => {
      this.store.dispatch(_todo_actions__WEBPACK_IMPORTED_MODULE_0__.toggle({
        id: this.todo.id
      }));
    });
  }

  editar() {
    this.editando = true;
    setTimeout(() => {
      this.textInputFisico.nativeElement.select();
    }, 1);
  }

  update() {
    this.editando = false;
    if (this.inputText.invalid) return;
    if (this.inputText.value === this.todo.texto) return;
    this.store.dispatch(_todo_actions__WEBPACK_IMPORTED_MODULE_0__.editar({
      id: this.todo.id,
      texto: this.inputText.value
    }));
  }

  borrar() {
    this.store.dispatch(_todo_actions__WEBPACK_IMPORTED_MODULE_0__.borrar({
      id: this.todo.id
    }));
  }

}

TodoItemComponent.ɵfac = function TodoItemComponent_Factory(t) {
  return new (t || TodoItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store));
};

TodoItemComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: TodoItemComponent,
  selectors: [["app-todo-item"]],
  viewQuery: function TodoItemComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.textInputFisico = _t.first);
    }
  },
  inputs: {
    todo: "todo"
  },
  decls: 8,
  vars: 7,
  consts: [[1, "view"], ["type", "checkbox", 1, "toggle", 3, "formControl"], [3, "dblclick"], [1, "destroy", 3, "click"], ["type", "text", 1, "edit", 3, "formControl", "blur"], ["inputFisico", ""]],
  template: function TodoItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "input", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("dblclick", function TodoItemComponent_Template_label_dblclick_3_listener() {
        return ctx.editar();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TodoItemComponent_Template_button_click_5_listener() {
        return ctx.borrar();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("blur", function TodoItemComponent_Template_input_blur_6_listener() {
        return ctx.update();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("completed", ctx.todo.completado)("editing", ctx.editando);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.chkCompletado);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.todo.texto);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.inputText);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4969:
/*!********************************************************!*\
  !*** ./src/app/todos/todo-list/todo-list.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoListComponent": () => (/* binding */ TodoListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../todo-item/todo-item.component */ 7789);
/* harmony import */ var _filtro_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../filtro.pipe */ 3526);






function TodoListComponent_app_todo_item_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-todo-item", 2);
  }

  if (rf & 2) {
    const todo_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("todo", todo_r1);
  }
}

class TodoListComponent {
  constructor(store) {
    this.store = store;
  }

  ngOnInit() {
    this.store.subscribe(state => {
      this.todos = state.todos;
      this.filtroActual = state.filtro;
    });
  }

}

TodoListComponent.ɵfac = function TodoListComponent_Factory(t) {
  return new (t || TodoListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store));
};

TodoListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: TodoListComponent,
  selectors: [["app-todo-list"]],
  decls: 3,
  vars: 4,
  consts: [[1, "todo-list"], [3, "todo", 4, "ngFor", "ngForOf"], [3, "todo"]],
  template: function TodoListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TodoListComponent_app_todo_item_1_Template, 1, 1, "app-todo-item", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "filtroTodo");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, ctx.todos, ctx.filtroActual));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_0__.TodoItemComponent, _filtro_pipe__WEBPACK_IMPORTED_MODULE_1__.FiltroPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6050:
/*!********************************************************!*\
  !*** ./src/app/todos/todo-page/todo-page.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoPageComponent": () => (/* binding */ TodoPageComponent)
/* harmony export */ });
/* harmony import */ var _todo_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../todo.actions */ 2590);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _todo_add_todo_add_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todo-add/todo-add.component */ 7140);
/* harmony import */ var _todo_footer_todo_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todo-footer/todo-footer.component */ 4978);
/* harmony import */ var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../todo-list/todo-list.component */ 4969);






class TodoPageComponent {
  constructor(store) {
    this.store = store;
    this.completado = false;
  }

  ngOnInit() {}

  toggleAll() {
    this.completado = !this.completado;
    this.store.dispatch(_todo_actions__WEBPACK_IMPORTED_MODULE_0__.toggleAll({
      completado: this.completado
    }));
  }

}

TodoPageComponent.ɵfac = function TodoPageComponent_Factory(t) {
  return new (t || TodoPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store));
};

TodoPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: TodoPageComponent,
  selectors: [["app-todo-page"]],
  decls: 8,
  vars: 0,
  consts: [[1, "todoapp"], [1, "main"], ["id", "toggle-all", "type", "checkbox", 1, "toggle-all", 3, "click"], ["for", "toggle-all"]],
  template: function TodoPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-todo-add");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "section", 1)(3, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TodoPageComponent_Template_input_click_3_listener() {
        return ctx.toggleAll();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Mark all as complete");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "app-todo-list");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "app-todo-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_todo_add_todo_add_component__WEBPACK_IMPORTED_MODULE_1__.TodoAddComponent, _todo_footer_todo_footer_component__WEBPACK_IMPORTED_MODULE_2__.TodoFooterComponent, _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_3__.TodoListComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2590:
/*!***************************************!*\
  !*** ./src/app/todos/todo.actions.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "borrar": () => (/* binding */ borrar),
/* harmony export */   "borrarCompletados": () => (/* binding */ borrarCompletados),
/* harmony export */   "editar": () => (/* binding */ editar),
/* harmony export */   "toggle": () => (/* binding */ toggle),
/* harmony export */   "toggleAll": () => (/* binding */ toggleAll)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const add = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[TODO] Add', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const toggle = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[TODO] Toggle', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const toggleAll = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[TODO] ToggleAll', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const borrarCompletados = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[TODO] Borrar Completados');
const editar = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[TODO] Edit', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const borrar = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[TODO] Borrar', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 8537:
/*!**************************************!*\
  !*** ./src/app/todos/todo.module.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoModule": () => (/* binding */ TodoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _todo_add_todo_add_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-add/todo-add.component */ 7140);
/* harmony import */ var _todo_footer_todo_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-footer/todo-footer.component */ 4978);
/* harmony import */ var _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-item/todo-item.component */ 7789);
/* harmony import */ var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo-list/todo-list.component */ 4969);
/* harmony import */ var _todo_page_todo_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-page/todo-page.component */ 6050);
/* harmony import */ var _filtro_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filtro.pipe */ 3526);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);









class TodoModule {}

TodoModule.ɵfac = function TodoModule_Factory(t) {
  return new (t || TodoModule)();
};

TodoModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: TodoModule
});
TodoModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](TodoModule, {
    declarations: [_todo_add_todo_add_component__WEBPACK_IMPORTED_MODULE_0__.TodoAddComponent, _todo_footer_todo_footer_component__WEBPACK_IMPORTED_MODULE_1__.TodoFooterComponent, _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_2__.TodoItemComponent, _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_3__.TodoListComponent, _todo_page_todo_page_component__WEBPACK_IMPORTED_MODULE_4__.TodoPageComponent, _filtro_pipe__WEBPACK_IMPORTED_MODULE_5__.FiltroPipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule],
    exports: [_todo_page_todo_page_component__WEBPACK_IMPORTED_MODULE_4__.TodoPageComponent]
  });
})();

/***/ }),

/***/ 229:
/*!***************************************!*\
  !*** ./src/app/todos/todo.reducer.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "todoReducer": () => (/* binding */ todoReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _todo_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.actions */ 2590);
/* harmony import */ var _models_todo_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/todo.model */ 7185);



const initialState = [new _models_todo_model__WEBPACK_IMPORTED_MODULE_1__.Todo("Salvar al mundo"), new _models_todo_model__WEBPACK_IMPORTED_MODULE_1__.Todo("Vencer a Thanos"), new _models_todo_model__WEBPACK_IMPORTED_MODULE_1__.Todo("Robar escudo del Capitan America")];

const _todoReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_todo_actions__WEBPACK_IMPORTED_MODULE_0__.add, (state, {
  texto
}) => [...state, new _models_todo_model__WEBPACK_IMPORTED_MODULE_1__.Todo(texto)]), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_todo_actions__WEBPACK_IMPORTED_MODULE_0__.borrar, (state, {
  id
}) => state.filter(todo => todo.id !== id)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_todo_actions__WEBPACK_IMPORTED_MODULE_0__.borrarCompletados, state => state.filter(todo => todo.completado == false)), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_todo_actions__WEBPACK_IMPORTED_MODULE_0__.toggleAll, (state, {
  completado
}) => state.map(todo => {
  return { ...todo,
    completado: completado
  };
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_todo_actions__WEBPACK_IMPORTED_MODULE_0__.toggle, (state, {
  id
}) => {
  return state.map(todo => {
    let salida;

    if (todo.id === id) {
      salida = { ...todo,
        completado: !todo.completado
      };
    } else {
      salida = todo;
    }

    return salida;
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_todo_actions__WEBPACK_IMPORTED_MODULE_0__.editar, (state, {
  id,
  texto
}) => {
  return state.map(todo => {
    let salida;

    if (todo.id === id) {
      salida = { ...todo,
        texto: texto
      };
    } else {
      salida = todo;
    }

    return salida;
  });
}));

function todoReducer(state, action) {
  return _todoReducer(state, action);
}

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}

_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map