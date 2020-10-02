(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./app/javascript/packs/classes.js":
/*!*****************************************!*\
  !*** ./app/javascript/packs/classes.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Plan = /*#__PURE__*/function () {
  function Plan(number, data) {
    var autopay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    _classCallCheck(this, Plan);

    this.number = number;
    this.data = data;
    this.autopay = autopay;
  } // Getter


  _createClass(Plan, [{
    key: "findRow",
    // Method
    value: function findRow() {
      return document.getElementById("price-".concat(this.number));
    }
  }, {
    key: "findAutoRow",
    value: function findAutoRow() {
      return document.getElementById("price-".concat(this.number, "-autopay"));
    }
  }, {
    key: "findButton",
    value: function findButton() {
      return document.getElementById("col-".concat(this.number, "-btn"));
    }
  }, {
    key: "findColumn",
    value: function findColumn() {
      return document.getElementById("col-".concat(this.number));
    }
  }, {
    key: "findMinus",
    value: function findMinus() {
      return document.getElementById("minus-".concat(this.number));
    }
  }, {
    key: "calcPrices",
    value: function calcPrices() {
      return this.data;
    }
  }, {
    key: "row",
    get: function get() {
      return this.findRow();
    }
  }, {
    key: "autoRow",
    get: function get() {
      return this.findAutoRow();
    }
  }, {
    key: "button",
    get: function get() {
      return this.findButton();
    }
  }, {
    key: "column",
    get: function get() {
      return this.findColumn();
    }
  }, {
    key: "prices",
    get: function get() {
      return this.calcPrices();
    }
  }, {
    key: "minus",
    get: function get() {
      return this.findMinus();
    }
  }]);

  return Plan;
}();

/* harmony default export */ __webpack_exports__["default"] = (Plan);

/***/ }),

/***/ "./app/javascript/packs/data.js":
/*!**************************************!*\
  !*** ./app/javascript/packs/data.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes.js */ "./app/javascript/packs/classes.js");

var prices = {};
prices = {
  line1: 75,
  line2: 130,
  line3: 155,
  line4: 180,
  line5: 205,
  line6: 230,
  line7: 255,
  line8: 280,
  line9: 310,
  line10: 340,
  line11: 370,
  line12: 400
};
var magVoice = new _classes_js__WEBPACK_IMPORTED_MODULE_0__["default"](2, prices);
prices = {
  line1: 90,
  line2: 150,
  line3: 185,
  line4: 220,
  line5: 255,
  line6: 290,
  line7: 325,
  line8: 360,
  line9: 400,
  line10: 440,
  line11: 480,
  line12: 520
};
var magPlus = new _classes_js__WEBPACK_IMPORTED_MODULE_0__["default"](3, prices);
prices = {
  line1: 65,
  line2: 100,
  line3: 120,
  line4: 140,
  line5: 160,
  line6: 180,
  line7: 'N/A',
  line8: 'N/A',
  line9: 'N/A',
  line10: 'N/A',
  line11: 'N/A',
  line12: 'N/A'
};
var essVoice = new _classes_js__WEBPACK_IMPORTED_MODULE_0__["default"](4, prices);
prices = {
  line1: 45,
  line2: 65,
  line3: 'N/A',
  line4: 'N/A',
  line5: 'N/A',
  line6: 'N/A',
  line7: 'N/A',
  line8: 'N/A',
  line9: 'N/A',
  line10: 'N/A',
  line11: 'N/A',
  line12: 'N/A'
};
var ess55 = new _classes_js__WEBPACK_IMPORTED_MODULE_0__["default"](5, prices);
prices = {
  line1: 55,
  line2: 80,
  line3: 'N/A',
  line4: 'N/A',
  line5: 'N/A',
  line6: 'N/A',
  line7: 'N/A',
  line8: 'N/A',
  line9: 'N/A',
  line10: 'N/A',
  line11: 'N/A',
  line12: 'N/A'
};
var mag55 = new _classes_js__WEBPACK_IMPORTED_MODULE_0__["default"](6, prices);
prices = {
  line1: 60,
  line2: 90,
  line3: 105,
  line4: 120,
  line5: 135,
  line6: 150,
  line7: 175,
  line8: 200,
  line9: 225,
  line10: 250,
  line11: 275,
  line12: 300
};
var magMil = new _classes_js__WEBPACK_IMPORTED_MODULE_0__["default"](7, prices);
prices = {
  line1: 'N/A',
  line2: 110,
  line3: 135,
  line4: 160,
  line5: 185,
  line6: 210,
  line7: 245,
  line8: 280,
  line9: 315,
  line10: 350,
  line11: 285,
  line12: 420
};
var magMilPlus = new _classes_js__WEBPACK_IMPORTED_MODULE_0__["default"](8, prices); // prices = {
//   line1: 'N/A',
//   line2: 'N/A',
//   line3: 'N/A',
//   line4: 120,
//   line5: 145,
//   line6: 170,
//   line7: 'N/A',
//   line8: 'N/A',
//   line9: 'N/A',
//   line10: 'N/A',
//   line11: 'N/A',
//   line12: 'N/A',
// };
// const valEssVoice = new Plan(9, prices);

prices = {
  line1: 60,
  line2: 90,
  line3: 105,
  line4: 120,
  line5: 135,
  line6: 150,
  line7: 165,
  line8: 180,
  line9: 195,
  line10: 210,
  line11: 225,
  line12: 240
};
var firRes = new _classes_js__WEBPACK_IMPORTED_MODULE_0__["default"](10, prices);
prices = {
  line1: 'N/A',
  line2: 110,
  line3: 135,
  line4: 160,
  line5: 185,
  line6: 210,
  line7: 235,
  line8: 260,
  line9: 285,
  line10: 310,
  line11: 335,
  line12: 360
};
var firResPlus = new _classes_js__WEBPACK_IMPORTED_MODULE_0__["default"](11, prices);
prices = {
  line1: 'N/A',
  line2: 100,
  line3: 'N/A',
  line4: 'N/A',
  line5: 'N/A',
  line6: 'N/A',
  line7: 'N/A',
  line8: 'N/A',
  line9: 'N/A',
  line10: 'N/A',
  line11: 'N/A',
  line12: 'N/A'
};
var mag55Plus = new _classes_js__WEBPACK_IMPORTED_MODULE_0__["default"](12, prices);
var plans = [firRes, firResPlus, magVoice, magPlus, essVoice, ess55, mag55, magMil, magMilPlus, mag55Plus];
/* harmony default export */ __webpack_exports__["default"] = (plans);

/***/ }),

/***/ "./app/javascript/packs/home.js":
/*!**************************************!*\
  !*** ./app/javascript/packs/home.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./app/javascript/packs/data.js");

var dropdown = document.getElementById('extras-dropdown');
var plusMinus = document.getElementById('plus-minus');
var minus = '<i class="fas fa-minus fa-2x"></i>';
var plus = '<i class="fas fa-plus fa-2x"></i>';
var calcButton = document.querySelector('.calculate');

function planListener(btn, col, min) {
  var button = btn;
  minusListener(min, button);
  button.addEventListener('click', function () {
    var column = col;
    col.parentNode.append(col);
    column.style.display = 'inline-block';
    button.style.display = 'none';
    flipElement(dropdown);
    flipPlus();
  });
}

function minusListener(item, button) {
  item.addEventListener('click', function () {
    var icon = item;
    icon.parentNode.style.display = 'none';
    flipElement(button);
  });
}

plusMinus.addEventListener('click', function () {
  flipElement(dropdown);
  flipPlus();
});

function flipElement(item) {
  var element = item;

  if (element.style.display !== 'block') {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }
}

function flipPlus() {
  if (document.querySelector('.fa-plus')) {
    plusMinus.innerHTML = minus;
  } else {
    plusMinus.innerHTML = plus;
  }
}

function showPrices(number, plan) {
  var p = plan;
  var auto = 0;
  var value = p.prices["line".concat(number)];

  if (number <= 8) {
    auto = value - 5 * number;
  } else if (number > 8) {
    auto = value - 40;
  } else {
    auto = value;
  }

  if (isNaN(value)) {
    p.row.innerHTML = '&nbsp;';
    p.autoRow.innerHTML = 'N/A';
  } else {
    p.row.innerHTML = "$".concat(value, " Regular");
    p.autoRow.innerHTML = "$".concat(auto, " w/AutoPay");
  }
}

document.querySelector('#input').value = 1;
_data_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(function (plan) {
  planListener(plan.button, plan.column, plan.minus);
  showPrices(1, plan);
});
calcButton.addEventListener('click', function () {
  var count = document.getElementById('input').value;
  _data_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(function (plan) {
    showPrices(count, plan);
  });
});

function calcEnter() {
  document.addEventListener('keydown', logKey);

  function logKey(e) {
    if (e.code === 'Enter') {
      calcButton.click();
    }
  }
}

;
calcEnter();

/***/ })

}]);
//# sourceMappingURL=0-fd6db6d6e39a12962389.chunk.js.map