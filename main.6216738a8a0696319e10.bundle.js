webpackJsonp([1],{"/fcW":function(n,t){function e(n){throw new Error("Cannot find module '"+n+"'.")}e.keys=function(){return[]},e.resolve=e,n.exports=e,e.id="/fcW"},0:function(n,t,e){n.exports=e("x35b")},"1A80":function(n,t,e){"use strict";function l(n){return u._15(0,[(n()(),u._16(0,null,null,7,"div",[["style","text-align:center"]],null,null,null,null,null)),(n()(),u._17(null,["\n  "])),(n()(),u._16(0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),u._17(null,["\n    Welcome to ","!!\n  "])),(n()(),u._17(null,["\n\n  "])),(n()(),u._16(0,null,null,1,"mine-sweeper",[],null,null,null,o.a,o.b)),u._18(49152,null,0,_.a,[],null,null),(n()(),u._17(null,["\n"])),(n()(),u._17(null,["\n\n"]))],null,function(n,t){n(t,3,0,t.component.title)})}function i(n){return u._15(0,[(n()(),u._16(0,null,null,1,"app-root",[],null,null,null,l,c)),u._18(49152,null,0,s.a,[],null,null)],null,null)}var r=e("Ni5f"),u=e("3j3K"),o=e("uHDU"),_=e("Slsd"),s=e("YWx4");e.d(t,"a",function(){return p});var a=[r.a],c=u._14({encapsulation:0,styles:a,data:{}}),p=u._19("app-root",s.a,i,{},{},[])},AShd:function(n,t,e){"use strict";var l=e("Szfz");e.d(t,"a",function(){return i});var i=function(){function n(){}return Object.defineProperty(n.prototype,"boardSize",{set:function(n){this._boardSize=n,this.initBoard(n)},enumerable:!0,configurable:!0}),n.prototype.handleCellClicked=function(n){n.setUnCovered(),n.containsMine()?this.lostGame(n):this.checkWinStatus()?this.wonGame():this.exposeEmptyAdjacentCells(n)},n.prototype.isCovered=function(n){return n.isCovered()},n.prototype.initBoard=function(n){this.board=[],this.createCells(n),this.setCellsImage()},n.prototype.createCells=function(n){for(var t=0;t<n;t++){this.board[t]=[];for(var e=0;e<n;e++)this.board[t][e]=new l.a(t,e)}},n.prototype.setCellsImage=function(){var n=this;this.board.forEach(function(t){t.filter(function(n){return!n.containsMine()}).map(function(t){var e=n.countAdjacentMines(t);t.setEmpty(0===e),t.setImage(e)})})},n.prototype.countAdjacentMines=function(n){var t=0;return this.iterateOnAdjacentCells(n.getRow(),n.getColumn(),function(n){n&&n.containsMine()&&t++}),t},n.prototype.getCell=function(n,t){return this.board[n]?this.board[n][t]:null},n.prototype.lostGame=function(n){var t=this;n.setRedMine(),alert("you have lost!"),setTimeout(function(){return t.initBoard(t._boardSize)},1e3)},n.prototype.wonGame=function(){alert("you have won!"),this.uncoverMines()},n.prototype.exposeEmptyAdjacentCells=function(n){var t=this,e=n.getRow(),l=n.getColumn();this.iterateOnAdjacentCells(e,l,function(n){t.uncoverEmptyCell(n)})},n.prototype.iterateOnAdjacentCells=function(n,t,e){var l=this;[-1,0,1].forEach(function(i){[-1,0,1].filter(function(n){return 0!==i||0!==n}).forEach(function(r){var u=l.getCell(n+i,t+r);e(u)})})},n.prototype.uncoverEmptyCell=function(n){n&&n.isCovered()&&(n.containsMine()||n.setUnCovered(),n.isEmpty()&&this.exposeEmptyAdjacentCells(n))},n.prototype.checkWinStatus=function(){for(var n=0;n<this._boardSize;n++)for(var t=0;t<this._boardSize;t++){var e=this.board[n][t];if(e.isCovered()&&(e.isEmpty()||!e.containsMine()))return!1}return!0},n.prototype.uncoverMines=function(){this.board.forEach(function(n){n.filter(function(n){return n.isCovered()&&n.containsMine()}).map(function(n){return n.setUnCovered()})})},n}()},Iksp:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=function(){function n(){}return n}()},Ni5f:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=[""]},Slsd:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=function(){function n(){this.levels=[{name:"Beginner",value:6},{name:"Intermediate",value:10},{name:"Expert",value:14}]}return n.prototype.initBoard=function(n){this.boardComponent.initBoard(n)},n}()},Szfz:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=function(){function n(n,t){this.row=n,this.column=t,this.covered=!0,this.isFlagged=!1,(this.hasMine=100*Math.random()<30)&&this.initMineCell()}return n.prototype.initMineCell=function(){this.img="./../../minesweeper/assets/mine.png",this.empty=!1},n.prototype.containsMine=function(){return this.hasMine},n.prototype.isCovered=function(){return this.covered},n.prototype.setUnCovered=function(){this.covered=!1},n.prototype.setRedMine=function(){this.img="./../../minesweeper/assets/red-mine.png"},n.prototype.setImage=function(n){this.img=0===n?"./../../minesweeper/assets/empty.png":"./../../minesweeper/assets/number-"+n+".png"},n.prototype.getRow=function(){return this.row},n.prototype.getColumn=function(){return this.column},n.prototype.setEmpty=function(n){this.empty=n},n.prototype.isEmpty=function(){return this.empty},n}()},YWx4:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=function(){function n(){this.title="Mine Sweeper"}return n}()},kZql:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l={production:!0}},kke6:function(n,t,e){"use strict";var l=e("3j3K"),i=e("Iksp"),r=e("2Je8"),u=e("Qbdm"),o=e("NVOs"),_=e("1A80");e.d(t,"a",function(){return c});var s=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])};return function(t,e){function l(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(l.prototype=e.prototype,new l)}}(),a=function(n){function t(t){return n.call(this,t,[_.a],[_.a])||this}return s(t,n),Object.defineProperty(t.prototype,"_LOCALE_ID_11",{get:function(){return null==this.__LOCALE_ID_11&&(this.__LOCALE_ID_11=l.b(this.parent.get(l.c,null))),this.__LOCALE_ID_11},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_NgLocalization_12",{get:function(){return null==this.__NgLocalization_12&&(this.__NgLocalization_12=new r.a(this._LOCALE_ID_11)),this.__NgLocalization_12},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Compiler_13",{get:function(){return null==this.__Compiler_13&&(this.__Compiler_13=new l.d),this.__Compiler_13},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_APP_ID_14",{get:function(){return null==this.__APP_ID_14&&(this.__APP_ID_14=l.e()),this.__APP_ID_14},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_IterableDiffers_15",{get:function(){return null==this.__IterableDiffers_15&&(this.__IterableDiffers_15=l.f()),this.__IterableDiffers_15},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_KeyValueDiffers_16",{get:function(){return null==this.__KeyValueDiffers_16&&(this.__KeyValueDiffers_16=l.g()),this.__KeyValueDiffers_16},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_DomSanitizer_17",{get:function(){return null==this.__DomSanitizer_17&&(this.__DomSanitizer_17=new u.b(this.parent.get(u.c))),this.__DomSanitizer_17},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Sanitizer_18",{get:function(){return null==this.__Sanitizer_18&&(this.__Sanitizer_18=this._DomSanitizer_17),this.__Sanitizer_18},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_HAMMER_GESTURE_CONFIG_19",{get:function(){return null==this.__HAMMER_GESTURE_CONFIG_19&&(this.__HAMMER_GESTURE_CONFIG_19=new u.d),this.__HAMMER_GESTURE_CONFIG_19},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_EVENT_MANAGER_PLUGINS_20",{get:function(){return null==this.__EVENT_MANAGER_PLUGINS_20&&(this.__EVENT_MANAGER_PLUGINS_20=[new u.e(this.parent.get(u.c)),new u.f(this.parent.get(u.c)),new u.g(this.parent.get(u.c),this._HAMMER_GESTURE_CONFIG_19)]),this.__EVENT_MANAGER_PLUGINS_20},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_EventManager_21",{get:function(){return null==this.__EventManager_21&&(this.__EventManager_21=new u.h(this._EVENT_MANAGER_PLUGINS_20,this.parent.get(l.h))),this.__EventManager_21},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ɵDomSharedStylesHost_22",{get:function(){return null==this.__ɵDomSharedStylesHost_22&&(this.__ɵDomSharedStylesHost_22=new u.i(this.parent.get(u.c))),this.__ɵDomSharedStylesHost_22},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ɵDomRendererFactory2_23",{get:function(){return null==this.__ɵDomRendererFactory2_23&&(this.__ɵDomRendererFactory2_23=new u.j(this._EventManager_21,this._ɵDomSharedStylesHost_22)),this.__ɵDomRendererFactory2_23},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_RendererFactory2_24",{get:function(){return null==this.__RendererFactory2_24&&(this.__RendererFactory2_24=this._ɵDomRendererFactory2_23),this.__RendererFactory2_24},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ɵSharedStylesHost_25",{get:function(){return null==this.__ɵSharedStylesHost_25&&(this.__ɵSharedStylesHost_25=this._ɵDomSharedStylesHost_22),this.__ɵSharedStylesHost_25},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Testability_26",{get:function(){return null==this.__Testability_26&&(this.__Testability_26=new l.i(this.parent.get(l.h))),this.__Testability_26},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Meta_27",{get:function(){return null==this.__Meta_27&&(this.__Meta_27=new u.k(this.parent.get(u.c))),this.__Meta_27},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Title_28",{get:function(){return null==this.__Title_28&&(this.__Title_28=new u.l(this.parent.get(u.c))),this.__Title_28},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ɵi_29",{get:function(){return null==this.__ɵi_29&&(this.__ɵi_29=new o.a),this.__ɵi_29},enumerable:!0,configurable:!0}),t.prototype.createInternal=function(){return this._CommonModule_0=new r.b,this._ErrorHandler_1=u.m(),this._APP_INITIALIZER_2=[l.j,u.n(this.parent.get(u.o,null),this.parent.get(l.k,null))],this._ApplicationInitStatus_3=new l.l(this._APP_INITIALIZER_2),this._ɵf_4=new l.m(this.parent.get(l.h),this.parent.get(l.n),this,this._ErrorHandler_1,this.componentFactoryResolver,this._ApplicationInitStatus_3),this._ApplicationRef_5=this._ɵf_4,this._ApplicationModule_6=new l.o(this._ApplicationRef_5),this._BrowserModule_7=new u.p(this.parent.get(u.p,null)),this._ɵba_8=new o.b,this._FormsModule_9=new o.c,this._AppModule_10=new i.a,this._AppModule_10},t.prototype.getInternal=function(n,t){return n===r.b?this._CommonModule_0:n===l.p?this._ErrorHandler_1:n===l.q?this._APP_INITIALIZER_2:n===l.l?this._ApplicationInitStatus_3:n===l.m?this._ɵf_4:n===l.r?this._ApplicationRef_5:n===l.o?this._ApplicationModule_6:n===u.p?this._BrowserModule_7:n===o.b?this._ɵba_8:n===o.c?this._FormsModule_9:n===i.a?this._AppModule_10:n===l.c?this._LOCALE_ID_11:n===r.c?this._NgLocalization_12:n===l.d?this._Compiler_13:n===l.s?this._APP_ID_14:n===l.t?this._IterableDiffers_15:n===l.u?this._KeyValueDiffers_16:n===u.q?this._DomSanitizer_17:n===l.v?this._Sanitizer_18:n===u.r?this._HAMMER_GESTURE_CONFIG_19:n===u.s?this._EVENT_MANAGER_PLUGINS_20:n===u.h?this._EventManager_21:n===u.i?this._ɵDomSharedStylesHost_22:n===u.j?this._ɵDomRendererFactory2_23:n===l.w?this._RendererFactory2_24:n===u.t?this._ɵSharedStylesHost_25:n===l.i?this._Testability_26:n===u.k?this._Meta_27:n===u.l?this._Title_28:n===o.a?this._ɵi_29:t},t.prototype.destroyInternal=function(){this._ɵf_4.ngOnDestroy(),this.__ɵDomSharedStylesHost_22&&this._ɵDomSharedStylesHost_22.ngOnDestroy()},t}(l.x),c=new l.y(a,i.a)},oQjS:function(n,t,e){"use strict";function l(n){return s._15(0,[(n()(),s._16(0,null,null,0,"img",[],[[8,"src",4]],[[null,"click"],[null,"contextmenu"]],function(n,t,e){var l=!0,i=n.component;if("click"===t){l=!1!==i.handleCellClicked(n.parent.context.$implicit)&&l}if("contextmenu"===t){l=!1!=(n.parent.context.$implicit.isFlagged=!n.parent.context.$implicit.isFlagged)&&l}return l},null,null))],null,function(n,t){n(t,0,0,t.parent.context.$implicit.isFlagged?"./../../minesweeper/assets/flag.png":"./../../minesweeper/assets/covered.png")})}function i(n){return s._15(0,[(n()(),s._17(null,["\n        "])),(n()(),s._16(0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),s._17(null,["\n      "]))],null,function(n,t){n(t,1,0,t.parent.context.$implicit.img)})}function r(n){return s._15(0,[(n()(),s._16(0,null,null,6,"td",[["style","padding:0"]],null,null,null,null,null)),(n()(),s._17(null,["\n      "])),(n()(),s._23(16777216,null,null,1,null,l)),s._18(16384,null,0,a.g,[s._1,s._2],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(n()(),s._17(null,["\n      "])),(n()(),s._23(0,[["uncovered",2]],null,0,null,i)),(n()(),s._17(null,["\n    "]))],function(n,t){n(t,3,0,t.component.isCovered(t.context.$implicit),s._21(t,5))},null)}function u(n){return s._15(0,[(n()(),s._16(0,null,null,4,"tr",[],null,null,null,null,null)),(n()(),s._17(null,["\n    "])),(n()(),s._23(16777216,null,null,1,null,r)),s._18(802816,null,0,a.f,[s._1,s._2,s.t],{ngForOf:[0,"ngForOf"]},null),(n()(),s._17(null,["\n  "]))],function(n,t){n(t,3,0,t.context.$implicit)},null)}function o(n){return s._15(0,[(n()(),s._16(0,null,null,5,"table",[["align","center"],["oncontextmenu","return false;"],["style","line-height:0; border-spacing:0; margin: 50px 0 0 0;"]],null,null,null,null,null)),(n()(),s._17(null,["\n  "])),(n()(),s._16(0,null,null,3,"tbody",[],null,null,null,null,null)),(n()(),s._23(16777216,null,null,1,null,u)),s._18(802816,null,0,a.f,[s._1,s._2,s.t],{ngForOf:[0,"ngForOf"]},null),(n()(),s._17(null,["\n"])),(n()(),s._17(null,["\n"]))],function(n,t){n(t,4,0,t.component.board)},null)}function _(n){return s._15(0,[(n()(),s._16(0,null,null,1,"board",[],null,null,null,o,f)),s._18(49152,null,0,c.a,[],null,null)],null,null)}var s=e("3j3K"),a=e("2Je8"),c=e("AShd");e.d(t,"b",function(){return f}),t.a=o;var p=[],f=s._14({encapsulation:2,styles:p,data:{}});s._19("board",c.a,_,{boardSize:"size"},{},[])},uHDU:function(n,t,e){"use strict";function l(n){return o._15(0,[(n()(),o._16(0,null,null,3,"option",[],null,null,null,null,null)),o._18(147456,null,0,_.d,[o.W,o.X,[2,_.e]],{ngValue:[0,"ngValue"]},null),o._18(147456,null,0,_.f,[o.W,o.X,[8,null]],{ngValue:[0,"ngValue"]},null),(n()(),o._17(null,["",""]))],function(n,t){n(t,1,0,t.context.$implicit.value),n(t,2,0,t.context.$implicit.value)},function(n,t){n(t,3,0,t.context.$implicit.name)})}function i(n){return o._15(0,[(n()(),o._16(0,null,null,1,"board",[],null,null,null,s.a,s.b)),o._18(49152,[[1,4]],0,a.a,[],{boardSize:[0,"boardSize"]},null)],function(n,t){n(t,1,0,t.component.boardSize)},null)}function r(n){return o._15(0,[o._20(671088640,1,{boardComponent:0}),(n()(),o._16(0,null,null,24,"div",[["style","display: flex; flex-direction: column; align-items: center;"]],null,null,null,null,null)),(n()(),o._17(null,["\n  "])),(n()(),o._16(0,null,null,18,"div",[],null,null,null,null,null)),(n()(),o._17(null,["\n    "])),(n()(),o._16(0,null,null,12,"label",[["for","select"]],null,null,null,null,null)),(n()(),o._17(null,["\n      Level:\n      "])),(n()(),o._16(0,null,null,9,"select",[["id","select"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(n,t,e){var l=!0,i=n.component;if("change"===t){l=!1!==o._21(n,8).onChange(e.target.value)&&l}if("blur"===t){l=!1!==o._21(n,8).onTouched()&&l}if("ngModelChange"===t){l=!1!==(i.model=e)&&l}if("ngModelChange"===t){l=!1!==(i.boardSize=e)&&l}return l},null,null)),o._18(16384,null,0,_.e,[o.X,o.W],null,null),o._22(1024,null,_.g,function(n){return[n]},[_.e]),o._18(671744,null,0,_.h,[[8,null],[8,null],[8,null],[2,_.g]],{model:[0,"model"]},{update:"ngModelChange"}),o._22(2048,null,_.i,null,[_.h]),o._18(16384,null,0,_.j,[_.i],null,null),(n()(),o._17(null,["\n        "])),(n()(),o._23(16777216,null,null,1,null,l)),o._18(802816,null,0,p.f,[o._1,o._2,o.t],{ngForOf:[0,"ngForOf"]},null),(n()(),o._17(null,["\n      "])),(n()(),o._17(null,["\n    "])),(n()(),o._17(null,["\n    "])),(n()(),o._16(0,null,null,1,"button",[["style","margin-left: 10px"]],null,[[null,"click"]],function(n,t,e){var l=!0,i=n.component;if("click"===t){l=!1!==i.initBoard(i.boardSize)&&l}return l},null,null)),(n()(),o._17(null,["Start New Game"])),(n()(),o._17(null,["\n  "])),(n()(),o._17(null,["\n  "])),(n()(),o._23(16777216,null,null,1,null,i)),o._18(16384,null,0,p.g,[o._1,o._2],{ngIf:[0,"ngIf"]},null),(n()(),o._17(null,["\n"])),(n()(),o._17(null,["\n"]))],function(n,t){var e=t.component;n(t,10,0,e.model),n(t,15,0,e.levels),n(t,24,0,e.boardSize)},function(n,t){n(t,7,0,o._21(t,12).ngClassUntouched,o._21(t,12).ngClassTouched,o._21(t,12).ngClassPristine,o._21(t,12).ngClassDirty,o._21(t,12).ngClassValid,o._21(t,12).ngClassInvalid,o._21(t,12).ngClassPending)})}function u(n){return o._15(0,[(n()(),o._16(0,null,null,1,"mine-sweeper",[],null,null,null,r,h)),o._18(49152,null,0,c.a,[],null,null)],null,null)}var o=e("3j3K"),_=e("NVOs"),s=e("oQjS"),a=e("AShd"),c=e("Slsd"),p=e("2Je8");e.d(t,"b",function(){return h}),t.a=r;var f=[],h=o._14({encapsulation:2,styles:f,data:{}});o._19("mine-sweeper",c.a,u,{},{},[])},x35b:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=e("3j3K"),i=e("kZql"),r=e("Qbdm"),u=e("kke6");i.a.production&&e.i(l.a)(),e.i(r.a)().bootstrapModuleFactory(u.a)}},[0]);
