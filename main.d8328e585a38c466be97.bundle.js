webpackJsonp([1],{"/fcW":function(n,t){function e(n){throw new Error("Cannot find module '"+n+"'.")}e.keys=function(){return[]},e.resolve=e,n.exports=e,e.id="/fcW"},0:function(n,t,e){n.exports=e("x35b")},"1A80":function(n,t,e){"use strict";function l(n){return o._15(0,[(n()(),o._16(0,null,null,7,"div",[["style","text-align:center"]],null,null,null,null,null)),(n()(),o._17(null,["\n  "])),(n()(),o._16(0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),o._17(null,["\n    Welcome to ","!!\n  "])),(n()(),o._17(null,["\n\n  "])),(n()(),o._16(0,null,null,1,"mine-sweeper",[],null,null,null,u.a,u.b)),o._18(49152,null,0,_.a,[],null,null),(n()(),o._17(null,["\n"])),(n()(),o._17(null,["\n\n"]))],null,function(n,t){n(t,3,0,t.component.title)})}function i(n){return o._15(0,[(n()(),o._16(0,null,null,1,"app-root",[],null,null,null,l,c)),o._18(49152,null,0,s.a,[],null,null)],null,null)}var r=e("Ni5f"),o=e("3j3K"),u=e("uHDU"),_=e("Slsd"),s=e("YWx4");e.d(t,"a",function(){return p});var a=[r.a],c=o._14({encapsulation:0,styles:a,data:{}}),p=o._19("app-root",s.a,i,{},{},[])},AShd:function(n,t,e){"use strict";var l=e("3j3K"),i=e("Szfz");e.d(t,"a",function(){return r});var r=function(){function n(){this.hasWon=new l.S}return Object.defineProperty(n.prototype,"boardSize",{set:function(n){this._boardSize=n,this.initBoard(n)},enumerable:!0,configurable:!0}),n.prototype.cellClicked=function(n){this.uncoverCell(n),n.containsMine()?this.lostGame(n):this.exposeEmptyAdjacentCells(n)},n.prototype.isCovered=function(n){return n.isCovered()},n.prototype.initBoard=function(n){this.board=[],this.uncoveredCells=0,this.mineCount=0,this.createCells(n),this.setCellsImage()},n.prototype.handleCoveredCell=function(n){return this.hasWonGame()?n.getImage():n.isFlagged?"./../../assets/flag.png":"./../../assets/covered.png"},n.prototype.createCells=function(n){for(var t=0;t<n;t++){this.board[t]=[];for(var e=0;e<n;e++){var l=new i.a(t,e);l.containsMine()&&this.mineCount++,this.board[t][e]=l}}},n.prototype.setCellsImage=function(){var n=this;this.board.forEach(function(t){t.filter(function(n){return!n.containsMine()}).map(function(t){var e=n.countAdjacentMines(t);t.setEmpty(0===e),t.setImage(e)})})},n.prototype.countAdjacentMines=function(n){var t=0;return this.iterateOnAdjacentCells(n.getRow(),n.getColumn(),function(n){n&&n.containsMine()&&t++}),t},n.prototype.getCell=function(n,t){return this.board[n]?this.board[n][t]:null},n.prototype.lostGame=function(n){n.setRedMine(),this.hasWon.emit(!1)},n.prototype.exposeEmptyAdjacentCells=function(n){var t=this,e=n.getRow(),l=n.getColumn();this.iterateOnAdjacentCells(e,l,function(n){t.uncoverEmptyCell(n)})},n.prototype.iterateOnAdjacentCells=function(n,t,e){var l=this;[-1,0,1].forEach(function(i){[-1,0,1].filter(function(n){return 0!==i||0!==n}).forEach(function(r){var o=l.getCell(n+i,t+r);e(o)})})},n.prototype.uncoverEmptyCell=function(n){n&&n.isCovered()&&(n.containsMine()||this.uncoverCell(n),n.isEmpty()&&this.exposeEmptyAdjacentCells(n))},n.prototype.hasWonGame=function(){var n=this._boardSize*this._boardSize-this.uncoveredCells===this.mineCount;return n&&this.hasWon.emit(!0),n},n.prototype.uncoverCell=function(n){n.setUnCovered(),this.uncoveredCells++},n}()},Iksp:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=function(){function n(){}return n}()},Ni5f:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=[""]},Slsd:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=function(){function n(){this.levels=[{name:"Beginner",value:6},{name:"Intermediate",value:10},{name:"Expert",value:14}],this.buttonLabel="New Game"}return n.prototype.initBoard=function(n){this.buttonLabel="New Game",this.boardComponent.initBoard(n)},n.prototype.setButtonText=function(n){this.buttonLabel=n?"Woo hoo You Won!":"oops! Try Again!"},n}()},Szfz:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=function(){function n(n,t){this.row=n,this.column=t,this.covered=!0,this.isFlagged=!1,(this.hasMine=100*Math.random()<30)&&this.initMineCell()}return n.prototype.initMineCell=function(){this.img="./../../assets/mine.png",this.empty=!1},n.prototype.containsMine=function(){return this.hasMine},n.prototype.isCovered=function(){return this.covered},n.prototype.setUnCovered=function(){this.covered=!1},n.prototype.setRedMine=function(){this.img="./../../assets/red-mine.png"},n.prototype.setImage=function(n){this.img=0===n?"./../../assets/empty.png":"./../../assets/number-"+n+".png"},n.prototype.getImage=function(){return this.img},n.prototype.getRow=function(){return this.row},n.prototype.getColumn=function(){return this.column},n.prototype.setEmpty=function(n){this.empty=n},n.prototype.isEmpty=function(){return this.empty},n}()},"YM+3":function(n,t,e){"use strict";var l=e("kZql");e.d(t,"a",function(){return i});var i=function(){function n(){}return n.prototype.transform=function(n){return l.a.production?n.replace(/assets/i,"minesweeper/assets"):n},n}()},YWx4:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=function(){function n(){this.title="Mine Sweeper"}return n}()},kZql:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l={production:!0}},kke6:function(n,t,e){"use strict";var l=e("3j3K"),i=e("Iksp"),r=e("2Je8"),o=e("Qbdm"),u=e("NVOs"),_=e("1A80");e.d(t,"a",function(){return c});var s=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])};return function(t,e){function l(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(l.prototype=e.prototype,new l)}}(),a=function(n){function t(t){return n.call(this,t,[_.a],[_.a])||this}return s(t,n),Object.defineProperty(t.prototype,"_LOCALE_ID_11",{get:function(){return null==this.__LOCALE_ID_11&&(this.__LOCALE_ID_11=l.b(this.parent.get(l.c,null))),this.__LOCALE_ID_11},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_NgLocalization_12",{get:function(){return null==this.__NgLocalization_12&&(this.__NgLocalization_12=new r.a(this._LOCALE_ID_11)),this.__NgLocalization_12},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Compiler_13",{get:function(){return null==this.__Compiler_13&&(this.__Compiler_13=new l.d),this.__Compiler_13},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_APP_ID_14",{get:function(){return null==this.__APP_ID_14&&(this.__APP_ID_14=l.e()),this.__APP_ID_14},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_IterableDiffers_15",{get:function(){return null==this.__IterableDiffers_15&&(this.__IterableDiffers_15=l.f()),this.__IterableDiffers_15},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_KeyValueDiffers_16",{get:function(){return null==this.__KeyValueDiffers_16&&(this.__KeyValueDiffers_16=l.g()),this.__KeyValueDiffers_16},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_DomSanitizer_17",{get:function(){return null==this.__DomSanitizer_17&&(this.__DomSanitizer_17=new o.b(this.parent.get(o.c))),this.__DomSanitizer_17},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Sanitizer_18",{get:function(){return null==this.__Sanitizer_18&&(this.__Sanitizer_18=this._DomSanitizer_17),this.__Sanitizer_18},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_HAMMER_GESTURE_CONFIG_19",{get:function(){return null==this.__HAMMER_GESTURE_CONFIG_19&&(this.__HAMMER_GESTURE_CONFIG_19=new o.d),this.__HAMMER_GESTURE_CONFIG_19},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_EVENT_MANAGER_PLUGINS_20",{get:function(){return null==this.__EVENT_MANAGER_PLUGINS_20&&(this.__EVENT_MANAGER_PLUGINS_20=[new o.e(this.parent.get(o.c)),new o.f(this.parent.get(o.c)),new o.g(this.parent.get(o.c),this._HAMMER_GESTURE_CONFIG_19)]),this.__EVENT_MANAGER_PLUGINS_20},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_EventManager_21",{get:function(){return null==this.__EventManager_21&&(this.__EventManager_21=new o.h(this._EVENT_MANAGER_PLUGINS_20,this.parent.get(l.h))),this.__EventManager_21},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ɵDomSharedStylesHost_22",{get:function(){return null==this.__ɵDomSharedStylesHost_22&&(this.__ɵDomSharedStylesHost_22=new o.i(this.parent.get(o.c))),this.__ɵDomSharedStylesHost_22},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ɵDomRendererFactory2_23",{get:function(){return null==this.__ɵDomRendererFactory2_23&&(this.__ɵDomRendererFactory2_23=new o.j(this._EventManager_21,this._ɵDomSharedStylesHost_22)),this.__ɵDomRendererFactory2_23},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_RendererFactory2_24",{get:function(){return null==this.__RendererFactory2_24&&(this.__RendererFactory2_24=this._ɵDomRendererFactory2_23),this.__RendererFactory2_24},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ɵSharedStylesHost_25",{get:function(){return null==this.__ɵSharedStylesHost_25&&(this.__ɵSharedStylesHost_25=this._ɵDomSharedStylesHost_22),this.__ɵSharedStylesHost_25},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Testability_26",{get:function(){return null==this.__Testability_26&&(this.__Testability_26=new l.i(this.parent.get(l.h))),this.__Testability_26},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Meta_27",{get:function(){return null==this.__Meta_27&&(this.__Meta_27=new o.k(this.parent.get(o.c))),this.__Meta_27},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Title_28",{get:function(){return null==this.__Title_28&&(this.__Title_28=new o.l(this.parent.get(o.c))),this.__Title_28},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ɵi_29",{get:function(){return null==this.__ɵi_29&&(this.__ɵi_29=new u.a),this.__ɵi_29},enumerable:!0,configurable:!0}),t.prototype.createInternal=function(){return this._CommonModule_0=new r.b,this._ErrorHandler_1=o.m(),this._APP_INITIALIZER_2=[l.j,o.n(this.parent.get(o.o,null),this.parent.get(l.k,null))],this._ApplicationInitStatus_3=new l.l(this._APP_INITIALIZER_2),this._ɵf_4=new l.m(this.parent.get(l.h),this.parent.get(l.n),this,this._ErrorHandler_1,this.componentFactoryResolver,this._ApplicationInitStatus_3),this._ApplicationRef_5=this._ɵf_4,this._ApplicationModule_6=new l.o(this._ApplicationRef_5),this._BrowserModule_7=new o.p(this.parent.get(o.p,null)),this._ɵba_8=new u.b,this._FormsModule_9=new u.c,this._AppModule_10=new i.a,this._AppModule_10},t.prototype.getInternal=function(n,t){return n===r.b?this._CommonModule_0:n===l.p?this._ErrorHandler_1:n===l.q?this._APP_INITIALIZER_2:n===l.l?this._ApplicationInitStatus_3:n===l.m?this._ɵf_4:n===l.r?this._ApplicationRef_5:n===l.o?this._ApplicationModule_6:n===o.p?this._BrowserModule_7:n===u.b?this._ɵba_8:n===u.c?this._FormsModule_9:n===i.a?this._AppModule_10:n===l.c?this._LOCALE_ID_11:n===r.c?this._NgLocalization_12:n===l.d?this._Compiler_13:n===l.s?this._APP_ID_14:n===l.t?this._IterableDiffers_15:n===l.u?this._KeyValueDiffers_16:n===o.q?this._DomSanitizer_17:n===l.v?this._Sanitizer_18:n===o.r?this._HAMMER_GESTURE_CONFIG_19:n===o.s?this._EVENT_MANAGER_PLUGINS_20:n===o.h?this._EventManager_21:n===o.i?this._ɵDomSharedStylesHost_22:n===o.j?this._ɵDomRendererFactory2_23:n===l.w?this._RendererFactory2_24:n===o.t?this._ɵSharedStylesHost_25:n===l.i?this._Testability_26:n===o.k?this._Meta_27:n===o.l?this._Title_28:n===u.a?this._ɵi_29:t},t.prototype.destroyInternal=function(){this._ɵf_4.ngOnDestroy(),this.__ɵDomSharedStylesHost_22&&this._ɵDomSharedStylesHost_22.ngOnDestroy()},t}(l.x),c=new l.y(a,i.a)},oQjS:function(n,t,e){"use strict";function l(n){return s._15(0,[(n()(),s._16(0,null,null,1,"img",[],[[8,"src",4]],[[null,"click"],[null,"contextmenu"]],function(n,t,e){var l=!0,i=n.component;if("click"===t){l=!1!==i.cellClicked(n.parent.context.$implicit)&&l}if("contextmenu"===t){l=!1!=(n.parent.context.$implicit.isFlagged=!n.parent.context.$implicit.isFlagged)&&l}return l},null,null)),s._24(1)],null,function(n,t){var e=t.component;n(t,0,0,s._25(t,0,0,n(t,1,0,s._21(t.parent.parent.parent,0),e.handleCoveredCell(t.parent.context.$implicit))))})}function i(n){return s._15(0,[(n()(),s._17(null,["\n        "])),(n()(),s._16(0,null,null,1,"img",[],[[8,"src",4]],null,null,null,null)),s._24(1),(n()(),s._17(null,["\n      "]))],null,function(n,t){n(t,1,0,s._25(t,1,0,n(t,2,0,s._21(t.parent.parent.parent,0),t.parent.context.$implicit.img)))})}function r(n){return s._15(0,[(n()(),s._16(0,null,null,6,"td",[["style","padding:0"]],null,null,null,null,null)),(n()(),s._17(null,["\n      "])),(n()(),s._23(16777216,null,null,1,null,l)),s._18(16384,null,0,a.g,[s._1,s._2],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(n()(),s._17(null,["\n      "])),(n()(),s._23(0,[["uncovered",2]],null,0,null,i)),(n()(),s._17(null,["\n    "]))],function(n,t){n(t,3,0,t.component.isCovered(t.context.$implicit),s._21(t,5))},null)}function o(n){return s._15(0,[(n()(),s._16(0,null,null,4,"tr",[],null,null,null,null,null)),(n()(),s._17(null,["\n    "])),(n()(),s._23(16777216,null,null,1,null,r)),s._18(802816,null,0,a.f,[s._1,s._2,s.t],{ngForOf:[0,"ngForOf"]},null),(n()(),s._17(null,["\n  "]))],function(n,t){n(t,3,0,t.context.$implicit)},null)}function u(n){return s._15(0,[s._26(0,c.a,[]),(n()(),s._16(0,null,null,5,"table",[["align","center"],["oncontextmenu","return false;"],["style","line-height:0; border-spacing:0; margin: 50px 0 0 0;"]],null,null,null,null,null)),(n()(),s._17(null,["\n  "])),(n()(),s._16(0,null,null,3,"tbody",[],null,null,null,null,null)),(n()(),s._23(16777216,null,null,1,null,o)),s._18(802816,null,0,a.f,[s._1,s._2,s.t],{ngForOf:[0,"ngForOf"]},null),(n()(),s._17(null,["\n"])),(n()(),s._17(null,["\n"]))],function(n,t){n(t,5,0,t.component.board)},null)}function _(n){return s._15(0,[(n()(),s._16(0,null,null,1,"board",[],null,null,null,u,f)),s._18(49152,null,0,p.a,[],null,null)],null,null)}var s=e("3j3K"),a=e("2Je8"),c=e("YM+3"),p=e("AShd");e.d(t,"b",function(){return f}),t.a=u;var h=[],f=s._14({encapsulation:2,styles:h,data:{}});s._19("board",p.a,_,{boardSize:"size"},{hasWon:"hasWon"},[])},uHDU:function(n,t,e){"use strict";function l(n){return u._15(0,[(n()(),u._16(0,null,null,3,"option",[],null,null,null,null,null)),u._18(147456,null,0,_.d,[u.W,u.X,[2,_.e]],{ngValue:[0,"ngValue"]},null),u._18(147456,null,0,_.f,[u.W,u.X,[8,null]],{ngValue:[0,"ngValue"]},null),(n()(),u._17(null,["",""]))],function(n,t){n(t,1,0,t.context.$implicit.value),n(t,2,0,t.context.$implicit.value)},function(n,t){n(t,3,0,t.context.$implicit.name)})}function i(n){return u._15(0,[(n()(),u._16(0,null,null,1,"board",[],null,[[null,"hasWon"]],function(n,t,e){var l=!0,i=n.component;if("hasWon"===t){l=!1!==i.setButtonText(e)&&l}return l},s.a,s.b)),u._18(49152,[[1,4]],0,a.a,[],{boardSize:[0,"boardSize"]},{hasWon:"hasWon"})],function(n,t){n(t,1,0,t.component.boardSize)},null)}function r(n){return u._15(0,[u._20(671088640,1,{boardComponent:0}),(n()(),u._16(0,null,null,24,"div",[["style","display: flex; flex-direction: column; align-items: center;"]],null,null,null,null,null)),(n()(),u._17(null,["\n  "])),(n()(),u._16(0,null,null,18,"div",[],null,null,null,null,null)),(n()(),u._17(null,["\n    "])),(n()(),u._16(0,null,null,12,"label",[["for","select"]],null,null,null,null,null)),(n()(),u._17(null,["\n      Level:\n      "])),(n()(),u._16(0,null,null,9,"select",[["id","select"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(n,t,e){var l=!0,i=n.component;if("change"===t){l=!1!==u._21(n,8).onChange(e.target.value)&&l}if("blur"===t){l=!1!==u._21(n,8).onTouched()&&l}if("ngModelChange"===t){l=!1!==(i.model=e)&&l}if("ngModelChange"===t){l=!1!==(i.boardSize=e)&&l}return l},null,null)),u._18(16384,null,0,_.e,[u.X,u.W],null,null),u._22(1024,null,_.g,function(n){return[n]},[_.e]),u._18(671744,null,0,_.h,[[8,null],[8,null],[8,null],[2,_.g]],{model:[0,"model"]},{update:"ngModelChange"}),u._22(2048,null,_.i,null,[_.h]),u._18(16384,null,0,_.j,[_.i],null,null),(n()(),u._17(null,["\n        "])),(n()(),u._23(16777216,null,null,1,null,l)),u._18(802816,null,0,p.f,[u._1,u._2,u.t],{ngForOf:[0,"ngForOf"]},null),(n()(),u._17(null,["\n      "])),(n()(),u._17(null,["\n    "])),(n()(),u._17(null,["\n    "])),(n()(),u._16(0,null,null,1,"button",[["style","margin-left: 10px"]],null,[[null,"click"]],function(n,t,e){var l=!0,i=n.component;if("click"===t){l=!1!==i.initBoard(i.boardSize)&&l}return l},null,null)),(n()(),u._17(null,["",""])),(n()(),u._17(null,["\n  "])),(n()(),u._17(null,["\n  "])),(n()(),u._23(16777216,null,null,1,null,i)),u._18(16384,null,0,p.g,[u._1,u._2],{ngIf:[0,"ngIf"]},null),(n()(),u._17(null,["\n"])),(n()(),u._17(null,["\n"]))],function(n,t){var e=t.component;n(t,10,0,e.model),n(t,15,0,e.levels),n(t,24,0,e.boardSize)},function(n,t){var e=t.component;n(t,7,0,u._21(t,12).ngClassUntouched,u._21(t,12).ngClassTouched,u._21(t,12).ngClassPristine,u._21(t,12).ngClassDirty,u._21(t,12).ngClassValid,u._21(t,12).ngClassInvalid,u._21(t,12).ngClassPending),n(t,20,0,e.buttonLabel)})}function o(n){return u._15(0,[(n()(),u._16(0,null,null,1,"mine-sweeper",[],null,null,null,r,f)),u._18(49152,null,0,c.a,[],null,null)],null,null)}var u=e("3j3K"),_=e("NVOs"),s=e("oQjS"),a=e("AShd"),c=e("Slsd"),p=e("2Je8");e.d(t,"b",function(){return f}),t.a=r;var h=[],f=u._14({encapsulation:2,styles:h,data:{}});u._19("mine-sweeper",c.a,o,{},{},[])},x35b:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=e("3j3K"),i=e("kZql"),r=e("Qbdm"),o=e("kke6");i.a.production&&e.i(l.a)(),e.i(r.a)().bootstrapModuleFactory(o.a)}},[0]);