webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/Cell/cell.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cell; });
/**
 * Created by hopsh01 on 6/2/2017.
 */
var Cell = (function () {
    function Cell(row, column) {
        this.row = row;
        this.column = column;
        this.covered = true;
        this.isFlagged = false;
        if (this.hasMine = Math.random() * 100 < 30) {
            this.initMineCell();
        }
    }
    Cell.prototype.initMineCell = function () {
        this.img = './../../assets/mine.png';
        this.empty = false;
    };
    Cell.prototype.containsMine = function () {
        return this.hasMine;
    };
    Cell.prototype.isCovered = function () {
        return this.covered;
    };
    Cell.prototype.setUnCovered = function () {
        this.covered = false;
    };
    Cell.prototype.setRedMine = function () {
        this.img = './../../assets/red-mine.png';
    };
    Cell.prototype.setImage = function (adjacentMinesCount) {
        if (adjacentMinesCount === 0) {
            this.img = './../../assets/empty.png';
        }
        else {
            this.img = "./../../assets/number-" + adjacentMinesCount + ".png";
        }
    };
    Cell.prototype.getRow = function () {
        return this.row;
    };
    Cell.prototype.getColumn = function () {
        return this.column;
    };
    Cell.prototype.setEmpty = function (empty) {
        this.empty = empty;
    };
    Cell.prototype.isEmpty = function () {
        return this.empty;
    };
    return Cell;
}());

//# sourceMappingURL=cell.js.map

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{title}}!!\n  </h1>\n\n  <mine-sweeper></mine-sweeper>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Mine Sweeper';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_mineSweeper__ = __webpack_require__("./src/app/model/mineSweeper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__board_board__ = __webpack_require__("./src/app/board/board.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__model_mineSweeper__["a" /* MineSweeperComponent */],
            __WEBPACK_IMPORTED_MODULE_5__board_board__["a" /* BoardComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/board/board.html":
/***/ (function(module, exports) {

module.exports = "<table style=\"line-height:0; border-spacing:0; margin: 50px 0 0 0;\" align=\"center\" oncontextmenu=\"return false;\">\r\n  <tr *ngFor=\"let row of board\">\r\n    <td *ngFor=\"let cell of row\" style=\"padding:0\">\r\n      <img *ngIf=\"isCovered(cell); else uncovered\"\r\n           (click)=\"handleCellClicked(cell)\"\r\n           (contextmenu)=\"cell.isFlagged = !cell.isFlagged\"\r\n           [src]=\"cell.isFlagged ? './../../assets/flag.png' : './../../assets/covered.png'\" />\r\n      <ng-template #uncovered>\r\n        <img [src]=\"cell.img\" />\r\n      </ng-template>\r\n    </td>\r\n  </tr>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/board/board.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Cell_cell__ = __webpack_require__("./src/app/Cell/cell.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardComponent; });
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
 * Created by hopsh01 on 6/2/2017.
 */


var BoardComponent = (function () {
    function BoardComponent() {
    }
    Object.defineProperty(BoardComponent.prototype, "boardSize", {
        set: function (size) {
            this._boardSize = size;
            this.initBoard(size);
        },
        enumerable: true,
        configurable: true
    });
    BoardComponent.prototype.handleCellClicked = function (cell) {
        cell.setUnCovered();
        if (cell.containsMine()) {
            this.lostGame(cell);
        }
        else if (this.checkWinStatus()) {
            this.wonGame();
        }
        else {
            this.exposeEmptyAdjacentCells(cell);
        }
    };
    BoardComponent.prototype.isCovered = function (cell) {
        return cell.isCovered();
    };
    BoardComponent.prototype.initBoard = function (boardSize) {
        this.board = [];
        this.createCells(boardSize);
        this.setCellsImage();
    };
    BoardComponent.prototype.createCells = function (boardSize) {
        for (var row = 0; row < boardSize; row++) {
            this.board[row] = [];
            for (var column = 0; column < boardSize; column++) {
                this.board[row][column] = new __WEBPACK_IMPORTED_MODULE_1__Cell_cell__["a" /* Cell */](row, column);
            }
        }
    };
    BoardComponent.prototype.setCellsImage = function () {
        var _this = this;
        this.board.forEach(function (row) {
            row.filter(function (cell) { return !cell.containsMine(); })
                .map(function (cell) {
                var adjacentMinesCount = _this.countAdjacentMines(cell);
                cell.setEmpty(adjacentMinesCount === 0);
                cell.setImage(adjacentMinesCount);
            });
        });
    };
    BoardComponent.prototype.countAdjacentMines = function (cell) {
        var count = 0;
        this.iterateOnAdjacentCells(cell.getRow(), cell.getColumn(), function (cell) {
            if (cell && cell.containsMine())
                count++;
        });
        return count;
    };
    BoardComponent.prototype.getCell = function (row, column) {
        return this.board[row] ? this.board[row][column] : null;
    };
    BoardComponent.prototype.lostGame = function (cell) {
        var _this = this;
        cell.setRedMine();
        alert('you have lost!');
        setTimeout(function () { return _this.initBoard(_this._boardSize); }, 1000);
    };
    BoardComponent.prototype.wonGame = function () {
        alert('you have won!');
        this.uncoverMines();
    };
    BoardComponent.prototype.exposeEmptyAdjacentCells = function (cell) {
        var _this = this;
        var row = cell.getRow();
        var column = cell.getColumn();
        this.iterateOnAdjacentCells(row, column, function (adjacentCell) {
            _this.uncoverEmptyCell(adjacentCell);
        });
    };
    BoardComponent.prototype.iterateOnAdjacentCells = function (row, column, callBack) {
        var _this = this;
        [-1, 0, 1].forEach(function (i) {
            [-1, 0, 1].filter(function (j) { return i !== 0 || j !== 0; }) // only neighbors allowed
                .forEach(function (j) {
                var adjacentCell = _this.getCell(row + i, column + j);
                callBack(adjacentCell);
            });
        });
    };
    BoardComponent.prototype.uncoverEmptyCell = function (cell) {
        if (cell && cell.isCovered()) {
            if (!cell.containsMine()) {
                cell.setUnCovered();
            }
            if (cell.isEmpty()) {
                this.exposeEmptyAdjacentCells(cell);
            }
        }
    };
    BoardComponent.prototype.checkWinStatus = function () {
        for (var row = 0; row < this._boardSize; row++) {
            for (var column = 0; column < this._boardSize; column++) {
                var cell = this.board[row][column];
                if (cell.isCovered() && (cell.isEmpty() || !cell.containsMine())) {
                    return false;
                }
            }
        }
        return true;
    };
    BoardComponent.prototype.uncoverMines = function () {
        this.board.forEach(function (row) {
            row.filter(function (cell) { return cell.isCovered() && cell.containsMine(); })
                .map(function (cell) { return cell.setUnCovered(); });
        });
    };
    return BoardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])('size'),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], BoardComponent.prototype, "boardSize", null);
BoardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'board',
        template: __webpack_require__("./src/app/board/board.html")
    })
], BoardComponent);

//# sourceMappingURL=board.js.map

/***/ }),

/***/ "./src/app/model/mine-sweeper.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"display: flex; flex-direction: column; align-items: center;\">\r\n  <div>\r\n    <label for=\"select\">\r\n      Level:\r\n      <select id=\"select\" [(ngModel)]=\"model\" (ngModelChange)=\"boardSize = $event\">\r\n        <option *ngFor=\"let level of levels\" [ngValue]=\"level.value\">{{level.name}}</option>\r\n      </select>\r\n    </label>\r\n    <button (click)=\"initBoard(boardSize)\" style=\"margin-left: 10px\">Start New Game</button>\r\n  </div>\r\n  <board *ngIf=\"boardSize\" [size]=\"boardSize\"></board>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/model/mineSweeper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__board_board__ = __webpack_require__("./src/app/board/board.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MineSweeperComponent; });
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
 * Created by hopsh01 on 6/2/2017.
 */


var MineSweeperComponent = (function () {
    function MineSweeperComponent() {
        this.levels = [{ name: 'Beginner', value: 6 }, { name: 'Intermediate', value: 10 }, { name: 'Expert', value: 14 }];
    }
    MineSweeperComponent.prototype.initBoard = function (boardSize) {
        this.boardComponent.initBoard(boardSize);
    };
    return MineSweeperComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__board_board__["a" /* BoardComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__board_board__["a" /* BoardComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__board_board__["a" /* BoardComponent */]) === "function" && _a || Object)
], MineSweeperComponent.prototype, "boardComponent", void 0);
MineSweeperComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'mine-sweeper',
        template: __webpack_require__("./src/app/model/mine-sweeper.html")
    })
], MineSweeperComponent);

var _a;
//# sourceMappingURL=mineSweeper.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map