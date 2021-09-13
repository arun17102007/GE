(function () {
  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunko9z46s_run"] = self["webpackChunko9z46s_run"] || []).push([["main"], {
    /***/
    98255: function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    55041: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @progress/kendo-data-query */
      30622);
      /* harmony import */


      var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./model */
      83304);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      33927);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _edit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./edit.service */
      80006);
      /* harmony import */


      var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @progress/kendo-angular-grid */
      80668);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function AppComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Add new");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_ng_template_3_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);

            return ctx_r3.saveChanges(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Save Changes");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_ng_template_3_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);

            return ctx_r5.cancelChanges(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Cancel Changes");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r1.editService.hasChanges());

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r1.editService.hasChanges());
        }
      }

      function AppComponent_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Remove");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _AppComponent = /*#__PURE__*/function () {
        function _AppComponent(formBuilder, editService) {
          _classCallCheck(this, _AppComponent);

          this.formBuilder = formBuilder;
          this.editService = editService;
          this.gridState = {
            sort: [],
            skip: 0,
            take: 10
          };
          this.changes = {};
        }

        _createClass(_AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.view = this.editService.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (data) {
              return (0, _progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_0__.process)(data, _this.gridState);
            }));
            this.editService.read();
          }
        }, {
          key: "onStateChange",
          value: function onStateChange(state) {
            this.gridState = state;
            this.editService.read();
          }
        }, {
          key: "cellClickHandler",
          value: function cellClickHandler(_ref) {
            var sender = _ref.sender,
                rowIndex = _ref.rowIndex,
                columnIndex = _ref.columnIndex,
                dataItem = _ref.dataItem,
                isEdited = _ref.isEdited;

            if (!isEdited) {
              sender.editCell(rowIndex, columnIndex, this.createFormGroup(dataItem));
            }
          }
        }, {
          key: "cellCloseHandler",
          value: function cellCloseHandler(args) {
            var formGroup = args.formGroup,
                dataItem = args.dataItem;

            if (!formGroup.valid) {
              // prevent closing the edited cell if there are invalid values.
              args.preventDefault();
            } else if (formGroup.dirty) {
              this.editService.assignValues(dataItem, formGroup.value);
              this.editService.update(dataItem);
            }
          }
        }, {
          key: "addHandler",
          value: function addHandler(_ref2) {
            var sender = _ref2.sender;
            sender.addRow(this.createFormGroup(new _model__WEBPACK_IMPORTED_MODULE_1__.Product()));
          }
        }, {
          key: "cancelHandler",
          value: function cancelHandler(_ref3) {
            var sender = _ref3.sender,
                rowIndex = _ref3.rowIndex;
            sender.closeRow(rowIndex);
          }
        }, {
          key: "saveHandler",
          value: function saveHandler(_ref4) {
            var sender = _ref4.sender,
                formGroup = _ref4.formGroup,
                rowIndex = _ref4.rowIndex;

            if (formGroup.valid) {
              this.editService.create(formGroup.value);
              sender.closeRow(rowIndex);
            }
          }
        }, {
          key: "removeHandler",
          value: function removeHandler(_ref5) {
            var sender = _ref5.sender,
                dataItem = _ref5.dataItem;
            this.editService.remove(dataItem);
            sender.cancelCell();
          }
        }, {
          key: "saveChanges",
          value: function saveChanges(grid) {
            grid.closeCell();
            grid.cancelCell();
            this.editService.saveChanges();
          }
        }, {
          key: "cancelChanges",
          value: function cancelChanges(grid) {
            grid.cancelCell();
            this.editService.cancelChanges();
          }
        }, {
          key: "createFormGroup",
          value: function createFormGroup(dataItem) {
            return this.formBuilder.group({
              'ProductID': dataItem.ProductID,
              'ProductName': [dataItem.ProductName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
              'UnitPrice': dataItem.UnitPrice,
              'UnitsInStock': [dataItem.UnitsInStock, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[0-9]{1,3}')])],
              'Discontinued': dataItem.Discontinued
            });
          }
        }]);

        return _AppComponent;
      }();

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_edit_service__WEBPACK_IMPORTED_MODULE_2__.EditService));
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["my-app"]],
        decls: 10,
        vars: 10,
        consts: [[3, "data", "height", "pageSize", "skip", "sort", "pageable", "sortable", "navigable", "dataStateChange", "cellClick", "cellClose", "cancel", "save", "remove", "add"], ["grid", ""], ["kendoGridToolbarTemplate", ""], ["field", "ProductName", "title", "Product Name"], ["field", "UnitPrice", "editor", "numeric", "title", "Price"], ["field", "Discontinued", "editor", "boolean", "title", "Discontinued"], ["field", "UnitsInStock", "editor", "numeric", "title", "Units In Stock"], ["title", "command", "width", "220"], ["kendoGridCellTemplate", ""], ["kendoGridAddCommand", ""], [1, "k-button", 3, "disabled", "click"], ["kendoGridRemoveCommand", ""], ["kendoGridSaveCommand", ""], ["kendoGridCancelCommand", ""]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "kendo-grid", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("dataStateChange", function AppComponent_Template_kendo_grid_dataStateChange_0_listener($event) {
              return ctx.onStateChange($event);
            })("cellClick", function AppComponent_Template_kendo_grid_cellClick_0_listener($event) {
              return ctx.cellClickHandler($event);
            })("cellClose", function AppComponent_Template_kendo_grid_cellClose_0_listener($event) {
              return ctx.cellCloseHandler($event);
            })("cancel", function AppComponent_Template_kendo_grid_cancel_0_listener($event) {
              return ctx.cancelHandler($event);
            })("save", function AppComponent_Template_kendo_grid_save_0_listener($event) {
              return ctx.saveHandler($event);
            })("remove", function AppComponent_Template_kendo_grid_remove_0_listener($event) {
              return ctx.removeHandler($event);
            })("add", function AppComponent_Template_kendo_grid_add_0_listener($event) {
              return ctx.addHandler($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AppComponent_ng_template_3_Template, 6, 2, "ng-template", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "kendo-grid-column", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "kendo-grid-column", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "kendo-grid-column", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "kendo-grid-column", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "kendo-grid-command-column", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, AppComponent_ng_template_9_Template, 6, 0, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 8, ctx.view))("height", 533)("pageSize", ctx.gridState.take)("skip", ctx.gridState.skip)("sort", ctx.gridState.sort)("pageable", true)("sortable", true)("navigable", true);
          }
        },
        directives: [_progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_6__.GridComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_6__.ToolbarTemplateDirective, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_6__.ColumnComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_6__.CommandColumnComponent, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_6__.CellTemplateDirective, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_6__.AddCommandDirective, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_6__.FocusableDirective, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_6__.RemoveCommandDirective, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_6__.SaveCommandDirective, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_6__.CancelCommandDirective],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
        encapsulation: 2
      });
      /***/
    },

    /***/
    36747: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      20718);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @progress/kendo-angular-grid */
      80668);
      /* harmony import */


      var _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @progress/kendo-angular-dropdowns */
      82871);
      /* harmony import */


      var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @progress/kendo-angular-dialog */
      12083);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _edit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./edit.service */
      80006);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        providers: [_edit_service__WEBPACK_IMPORTED_MODULE_1__.EditService],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_6__.GridModule, _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_7__.DropDownsModule, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_8__.DialogModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientJsonpModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_6__.GridModule, _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_7__.DropDownsModule, _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_8__.DialogModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientJsonpModule]
        });
      })();
      /***/

    },

    /***/
    80006: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditService": function EditService() {
          return (
            /* binding */
            _EditService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      76491);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      90490);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      33927);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      53882);

      var CREATE_ACTION = 'create';
      var UPDATE_ACTION = 'update';
      var REMOVE_ACTION = 'destroy';

      var itemIndex = function itemIndex(item, data) {
        for (var idx = 0; idx < data.length; idx++) {
          if (data[idx].ProductID === item.ProductID) {
            return idx;
          }
        }

        return -1;
      };

      var cloneData = function cloneData(data) {
        return data.map(function (item) {
          return Object.assign({}, item);
        });
      };

      var _EditService = /*#__PURE__*/function (_rxjs__WEBPACK_IMPORT) {
        _inherits(_EditService, _rxjs__WEBPACK_IMPORT);

        var _super = _createSuper(_EditService);

        function _EditService(http) {
          var _this2;

          _classCallCheck(this, _EditService);

          _this2 = _super.call(this, []);
          _this2.http = http;
          _this2.data = [];
          _this2.originalData = [];
          _this2.createdItems = [];
          _this2.updatedItems = [];
          _this2.deletedItems = [];
          return _this2;
        }

        _createClass(_EditService, [{
          key: "read",
          value: function read() {
            var _this3 = this;

            if (this.data.length) {
              return _get(_getPrototypeOf(_EditService.prototype), "next", this).call(this, this.data);
            }

            this.fetch().subscribe(function (data) {
              _this3.data = data;
              _this3.originalData = cloneData(data);

              _get(_getPrototypeOf(_EditService.prototype), "next", _this3).call(_this3, data);
            });
          }
        }, {
          key: "create",
          value: function create(item) {
            this.createdItems.push(item);
            this.data.unshift(item);

            _get(_getPrototypeOf(_EditService.prototype), "next", this).call(this, this.data);
          }
        }, {
          key: "update",
          value: function update(item) {
            if (!this.isNew(item)) {
              var index = itemIndex(item, this.updatedItems);

              if (index !== -1) {
                this.updatedItems.splice(index, 1, item);
              } else {
                this.updatedItems.push(item);
              }
            } else {
              var _index = this.createdItems.indexOf(item);

              this.createdItems.splice(_index, 1, item);
            }
          }
        }, {
          key: "remove",
          value: function remove(item) {
            var index = itemIndex(item, this.data);
            this.data.splice(index, 1);
            index = itemIndex(item, this.createdItems);

            if (index >= 0) {
              this.createdItems.splice(index, 1);
            } else {
              this.deletedItems.push(item);
            }

            index = itemIndex(item, this.updatedItems);

            if (index >= 0) {
              this.updatedItems.splice(index, 1);
            }

            _get(_getPrototypeOf(_EditService.prototype), "next", this).call(this, this.data);
          }
        }, {
          key: "isNew",
          value: function isNew(item) {
            return !item.ProductID;
          }
        }, {
          key: "hasChanges",
          value: function hasChanges() {
            return Boolean(this.deletedItems.length || this.updatedItems.length || this.createdItems.length);
          }
        }, {
          key: "saveChanges",
          value: function saveChanges() {
            var _this4 = this;

            if (!this.hasChanges()) {
              return;
            }

            var completed = [];

            if (this.deletedItems.length) {
              completed.push(this.fetch(REMOVE_ACTION, this.deletedItems));
            }

            if (this.updatedItems.length) {
              completed.push(this.fetch(UPDATE_ACTION, this.updatedItems));
            }

            if (this.createdItems.length) {
              completed.push(this.fetch(CREATE_ACTION, this.createdItems));
            }

            this.reset();
            (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.zip).apply(void 0, completed).subscribe(function () {
              return _this4.read();
            });
          }
        }, {
          key: "cancelChanges",
          value: function cancelChanges() {
            this.reset();
            this.data = this.originalData;
            this.originalData = cloneData(this.originalData);

            _get(_getPrototypeOf(_EditService.prototype), "next", this).call(this, this.data);
          }
        }, {
          key: "assignValues",
          value: function assignValues(target, source) {
            Object.assign(target, source);
          }
        }, {
          key: "reset",
          value: function reset() {
            this.data = [];
            this.deletedItems = [];
            this.updatedItems = [];
            this.createdItems = [];
          }
        }, {
          key: "fetch",
          value: function fetch() {
            var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var data = arguments.length > 1 ? arguments[1] : undefined;
            return this.http.jsonp("https://demos.telerik.com/kendo-ui/service/Products/".concat(action, "?").concat(this.serializeModels(data)), 'callback').pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (res) {
              return res;
            }));
          }
        }, {
          key: "serializeModels",
          value: function serializeModels(data) {
            return data ? "&models=".concat(JSON.stringify(data)) : '';
          }
        }]);

        return _EditService;
      }(rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject);

      _EditService.ɵfac = function EditService_Factory(t) {
        return new (t || _EditService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
      };

      _EditService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: _EditService,
        factory: _EditService.ɵfac
      });
      /***/
    },

    /***/
    83304: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Product": function Product() {
          return (
            /* binding */
            _Product
          );
        }
        /* harmony export */

      });

      var _Product = function _Product() {
        _classCallCheck(this, _Product);

        this.ProductName = '';
        this.Discontinued = false;
        this.UnitPrice = 0;
      };
      /***/

    },

    /***/
    14431: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./polyfills */
      7435);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app/app.module */
      36747);

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule, {
        preserveWhitespaces: true
      }).then(function (ref) {
        // Ensure Angular destroys itself on hot reloads.
        if (window['ngRef']) {
          window['ngRef'].destroy();
        }

        window['ngRef'] = ref; // Otherise, log the boot error
      })["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    7435: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var core_js_es6_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! core-js/es6/symbol */
      83686);
      /* harmony import */


      var core_js_es6_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_symbol__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var core_js_es6_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! core-js/es6/object */
      15883);
      /* harmony import */


      var core_js_es6_object__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_object__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var core_js_es6_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! core-js/es6/function */
      43401);
      /* harmony import */


      var core_js_es6_function__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_function__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var core_js_es6_parse_int__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! core-js/es6/parse-int */
      42156);
      /* harmony import */


      var core_js_es6_parse_int__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_parse_int__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var core_js_es6_parse_float__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! core-js/es6/parse-float */
      56605);
      /* harmony import */


      var core_js_es6_parse_float__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_parse_float__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var core_js_es6_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! core-js/es6/number */
      16869);
      /* harmony import */


      var core_js_es6_number__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_number__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var core_js_es6_math__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! core-js/es6/math */
      99785);
      /* harmony import */


      var core_js_es6_math__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_math__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var core_js_es6_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! core-js/es6/string */
      41562);
      /* harmony import */


      var core_js_es6_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_string__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var core_js_es6_date__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! core-js/es6/date */
      13945);
      /* harmony import */


      var core_js_es6_date__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_date__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var core_js_es6_array__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! core-js/es6/array */
      49784);
      /* harmony import */


      var core_js_es6_array__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_array__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var core_js_es6_regexp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! core-js/es6/regexp */
      35351);
      /* harmony import */


      var core_js_es6_regexp__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_regexp__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var core_js_es6_map__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! core-js/es6/map */
      31120);
      /* harmony import */


      var core_js_es6_map__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_map__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var core_js_es6_set__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! core-js/es6/set */
      69252);
      /* harmony import */


      var core_js_es6_set__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_set__WEBPACK_IMPORTED_MODULE_12__);
      /* harmony import */


      var web_animations_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! web-animations-js */
      7116);
      /* harmony import */


      var web_animations_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(web_animations_js__WEBPACK_IMPORTED_MODULE_13__);
      /* harmony import */


      var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! core-js/es6/reflect */
      61281);
      /* harmony import */


      var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_14__);
      /* harmony import */


      var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! core-js/es7/reflect */
      98347);
      /* harmony import */


      var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_15__);
      /* harmony import */


      var zone_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! zone.js */
      47761);
      /* harmony import */


      var zone_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_16__);
      /**
       * This file includes polyfills needed by Angular and is loaded before the app.
       * You can add your own extra polyfills to this file.
       *
       * This file is divided into 2 sections:
       *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
       *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
       *      file.
       *
       * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
       * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
       * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
       *
       * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
       */

      /***************************************************************************************************
       * BROWSER POLYFILLS
       */

      /** IE9, IE10 and IE11 requires all of the following polyfills. **/

      /** IE10 and IE11 requires the following for NgClass support on SVG elements */
      // import 'classlist.js';  // Run `npm install --save classlist.js`.

      /** IE10 and IE11 requires the following to support `@angular/animation`. */
      // polyfill for @angular/animations
      // https://github.com/angular/angular/issues/24769


      if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector;
      }
      /** Evergreen browsers require these. **/

      /** ALL Firefox browsers require the following to support `@angular/animation`. **/
      // import 'web-animations-js';  // Run `npm install --save web-animations-js`.

      /***************************************************************************************************
       * Zone JS is required by Angular itself.
       */
      // Included with Angular CLI.

      /***************************************************************************************************
       * APPLICATION IMPORTS
       */

      /**
       * Date, currency, decimal and percent pipes.
       * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
       */
      // import 'intl';  // Run `npm install --save intl`.

      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map