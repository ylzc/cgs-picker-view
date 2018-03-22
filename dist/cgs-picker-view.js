(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"));
	else if(typeof define === 'function' && define.amd)
		define("cgs-picker-view", ["angular"], factory);
	else if(typeof exports === 'object')
		exports["cgs-picker-view"] = factory(require("angular"));
	else
		root["cgs-picker-view"] = factory(root["angular"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directive__ = __webpack_require__(1);

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__directive__["a" /* default */]);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pickerView__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pickerView___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__pickerView__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pickerView_css__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pickerView_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__pickerView_css__);



__WEBPACK_IMPORTED_MODULE_0_angular___default.a.module("cgs-picker-view", []).directive("pickerView", function () {
  return {
    restrict: "A",
    require: 'ngModel',
    scope: {
      options: "=",
      datas: "="
    },
    link: function link($scope, $element, $attrs, $ngModelCtrl) {
      console.log($element);
      $element.bind("click", function () {
        var pickerView = new PickerView({
          bindElem: $element[0],
          // 绑定的元素
          data: $scope.options.datas ? $scope.options.datas : $scope.datas,
          // 说明：该参数必须符合json格式 且最里层是个数组，如上面的data变量所展示的[3,4]。
          title: $scope.options.title ? $scope.options.title : "选择框",
          // 顶部标题文本 默认为“标题”
          leftText: '取消',
          // 头部左侧按钮文本 默认为‘取消’
          rightText: '确定',
          // 头部右侧按钮文本 默认为“确定”
          rightFn: function rightFn(selectArr) {
            // 点击头部右侧按钮的回调函数，参数为一个数组，数组对应滚轮中每项对应的值
            $ngModelCtrl.$setViewValue(selectArr);
          }
        });
      });
    }
  };
});
/* harmony default export */ __webpack_exports__["a"] = ("cgs-picker-view");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// created by zhouatie
(function () {
  var util = {
    extend: function extend(target) {
      for (var i = 1, len = arguments.length; i < len; i++) {
        for (var prop in arguments[i]) {
          if (arguments[i].hasOwnProperty(prop)) {
            target[prop] = arguments[i][prop];
          }
        }
      }

      return target;
    },
    indexOf: function indexOf(array, item) {
      var result = -1;

      for (var i = 0, len = array.length; i < len; i++) {
        if (array[i] === item) {
          result = i;
          break;
        }
      }

      return result;
    },
    css: function css(elem, obj) {
      for (var i in obj) {
        elem.style[i] = obj[i];
      }
    },
    addClass: function addClass(element, className) {
      var classNames = element.className.split(/\s+/);

      if (util.indexOf(classNames, className) == -1) {
        classNames.push(className);
      }

      element.className = classNames.join(' ');
    },
    removeClass: function removeClass(element, className) {
      var classNames = element.className.split(/\s+/);
      var index = util.indexOf(classNames, className);

      if (index !== -1) {
        classNames.splice(index, 1);
      }

      element.className = classNames.join(' ');
    },
    hasClass: function hasClass(element, className) {
      if (!element || !element.className) return false;
      var classNames = element.className.split(/\s+/);
      return util.indexOf(classNames, className) != -1;
    },
    parents: function parents(elem, pClass) {
      // 递归函数通过父亲的classname获取元素
      if (!elem) return null;
      var parent = elem.parentNode;
      if (parent === document) return null;
      if (!this.hasClass(parent, pClass)) parent = this.parents(parent, pClass);
      return parent;
    },
    isObj: function isObj(o) {
      return Object.prototype.toString.call(o) == "[object Object]";
    },
    isArray: function isArray(o) {
      return Object.prototype.toString.call(o) == "[object Array]";
    }
  };

  function PickerView(opt) {
    var _this = this;

    this.Opt = {
      title: '标题',
      leftText: '取消',
      rightText: '确定',
      saveFn: function saveFn(selectArr) {}
    }; // 同步参数

    for (var i in opt) {
      if (opt[i]) this.Opt[i] = opt[i];
    }

    this._y_start = "";
    this._y_move = "";
    this._y_end = "";
    this.top_start = 0; // 移动起始点

    this.isMove = false; // 是否是移动聊天框

    this.elem_wrap = null; // 最外层的容器

    this.elem_leftBtn = null; // 左按钮元素

    this.elem_rightBtn = null; // 右按钮元素

    this.elem_contents = null; // items容器

    this.elem_mask = null; // 黑色背景

    var selectcache = this.Opt.bindElem.getAttribute("selectcache");
    this.selectcache = selectcache ? selectcache.split(",") : [];
    this.selectArr = []; // 选项对应的元素序列号 如：[0,0,0]

    this.init();
  }

  PickerView.VERSION = '1.0.0';
  PickerView.defaultOpt = {
    headerHeight: 45,
    // 头部默认高度
    itemHeight: 34 // 每个item的默认高度

  };
  PickerView.prototype = {
    constructor: PickerView,
    getItemTpl: function getItemTpl(keys) {
      var item_html = "";

      for (var i = 0; i < keys.length; i++) {
        item_html += '<div class="pickerView-item">' + keys[i] + '</div>';
      }

      ;
      return item_html;
    },
    getItemsTpl: function getItemsTpl(keys) {
      var fieldIndex = this.selectcache[this.selectArr.length] ? this.selectcache[this.selectArr.length] : 0;
      this.selectArr.push(fieldIndex);
      var html = "",
          len = -fieldIndex * PickerView.defaultOpt.itemHeight,
          item_html = this.getItemTpl(keys);
      html += '<div index="' + (this.selectArr.length - 1) + '" class="pickerView-box-content">' + '<div style="background-size:100% ' + this.padding + 'px;" class="pickerView-box-content-mask"></div>' + '<div style="top:' + this.padding + 'px;" class="pickerView-box-content-indicator"></div>' + '<div style="padding:' + this.padding + 'px 0;transform:translate3d(0,' + len + 'px,0)" fieldIndex="0" class="pickerView-items">' + item_html + '</div>' + '</div>';
      return html;
    },
    renderItems: function renderItems(obj) {
      var _this = this,
          html = "",
          arr = obj,
          isObj = util.isObj(obj);

      if (isObj) arr = Object.keys(obj);
      html += this.getItemsTpl(arr);
      var fieldIndex = this.selectArr[this.selectArr.length - 1];
      if (isObj) html += this.renderItems(obj[arr[fieldIndex]]);
      return html;
    },
    getTpl: function getTpl() {
      var html = '<div class="pickerView-mask"></div><div class="pickerView-box">' + '<div class="pickerView-box-header">' + '<div class="pickerView-box-header-left pickerView-box-header-btn">取消</div>' + '<div class="pickerView-box-header-title">' + this.Opt.title + '</div>' + '<div class="pickerView-box-header-right pickerView-box-header-btn">确定</div>' + '</div>' + '<div class="pickerView-box-content-wrap">';
      html += this.renderItems(this.Opt.data);
      html += '</div></div>';
      return html;
    },
    init: function init() {
      var _this = this,
          body = document.getElementsByTagName("body")[0],
          div = document.createElement("div");

      div.className = "pickerView-wrap";
      this.elem_wrap = div;
      this.padding = (document.documentElement.clientHeight * 0.4 - PickerView.defaultOpt.headerHeight - PickerView.defaultOpt.itemHeight) / 2;
      div.innerHTML = this.getTpl();
      body.appendChild(div);
      this.elem_mask = this.elem_wrap.getElementsByClassName("pickerView-mask")[0];
      this.elem_contents = this.elem_wrap.getElementsByClassName("pickerView-box-content-wrap")[0];
      this.elem_leftBtn = this.elem_wrap.getElementsByClassName("pickerView-box-header-left")[0];
      this.elem_rightBtn = this.elem_wrap.getElementsByClassName("pickerView-box-header-right")[0];
      this.elem_contents.addEventListener("touchstart", function (e) {
        _this.moveObj = util.parents(e.target, "pickerView-box-content").children[2];

        _this.touchstart(e);

        e.stopPropagation();
      }, false);
      this.elem_contents.addEventListener("touchmove", function (e) {
        _this.touchmove(e);

        e.stopPropagation();
        e.preventDefault();
      }, false);
      this.elem_contents.addEventListener("touchend", function (e) {
        _this.touchend(e);

        e.stopPropagation();
      }, false);
      this.elem_mask.addEventListener("touchend", function (e) {
        _this.closeComponent();

        e.stopPropagation();
        e.preventDefault();
      }, false);
      this.elem_leftBtn.addEventListener("touchend", function (e) {
        _this.closeComponent();

        e.stopPropagation();
        e.preventDefault();
      }, false);
      this.elem_rightBtn.addEventListener("touchend", function (e) {
        var selectArr = [];

        for (var i = 0; i < _this.elem_contents.children.length; i++) {
          var items = _this.elem_contents.children[i].children[2],
              field = items.children.length > 0 ? items.children[_this.selectArr[i]].innerText : "";
          selectArr.push(field);
        }

        _this.Opt.rightFn(selectArr);

        _this.closeComponent(); // 绑定元素


        _this.Opt.bindElem.setAttribute("selectcache", _this.selectArr);

        e.stopPropagation();
        e.preventDefault();
      }, false);
    },
    touchstart: function touchstart(e) {
      this._y_start = e.touches[0].pageY;
      this.isMove = false;
      this.top_start = parseInt(this.moveObj.style.transform.split(",")[1]);
    },
    touchmove: function touchmove(e) {
      var _this = this;

      this.isMove = true;
      this._y_move = e.touches[0].pageY;
      var len = parseFloat(this._y_move) - parseFloat(this._y_start) + parseFloat(this.top_start);
      util.css(_this.moveObj, {
        "transform": 'translate3d(0,' + len + 'px,0)'
      });
      this.top_end = len;
    },
    touchend: function touchend(e) {
      if (!this.isMove) return;
      this.isMove = false;

      var _this = this,
          itemHeight = PickerView.defaultOpt.itemHeight,
          sign = this.top_end >= 0 ? 1 : -1,
          index = this.moveObj.parentNode.getAttribute("index"),
          fieldIndex = Math.round(Math.abs(this.top_end) / itemHeight),
          len = sign * (fieldIndex * itemHeight);

      if (len > 0) {
        len = 0;
        fieldIndex = 0;
      } else if (len < -(this.moveObj.children.length - 1) * itemHeight) {
        len = -(this.moveObj.children.length - 1) * itemHeight;
        fieldIndex = this.moveObj.children.length - 1;
      }

      ;
      this.selectArr[index] = fieldIndex;
      this.moveObj.setAttribute("fieldIndex", fieldIndex);
      this.moveObj.style.transition = "0.3s cubic-bezier(0,0,0.2,1.15)";
      util.css(_this.moveObj, {
        "transform": 'translate3d(0,' + len + 'px,0)'
      });

      _this.changeNext(index);

      _this.moveObj.addEventListener("transitionend", function (event) {
        _this.moveObj.style.transition = "";
      }, false);

      _this.moveObj.addEventListener("webkitTransitionEnd", function (event) {
        _this.moveObj.style.transition = "";
      }, false);
    },
    changeNext: function changeNext(index) {
      var data = this.Opt.data,
          arr = [];

      for (var i = 0; i < this.selectArr.length; i++) {
        var elem_items = this.elem_contents.children[i].children[2];

        if (i > index) {
          util.css(elem_items, {
            "transform": 'translate3d(0,0,0)'
          });
          this.selectArr[i] = 0;
          arr = util.isObj(data) ? Object.keys(data) : data;
          elem_items.innerHTML = this.getItemTpl(arr);
          var field = arr[0];
          data = data[field];
        } else {
          var field = elem_items.children[this.selectArr[i]].innerText;
          data = data[field];
        }
      }
    },
    closeComponent: function closeComponent() {
      var body = document.getElementsByTagName("body")[0];
      body.removeChild(this.elem_wrap);
    }
  };
  window.PickerView = PickerView;
})();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(5);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(7)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../node_modules/css-loader/index.js??ref--1-1!./pickerView.css", function() {
		var newContent = require("!!../node_modules/css-loader/index.js??ref--1-1!./pickerView.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "@keyframes slideUp{0%{bottom:-40%}to{bottom:0}}@-moz-keyframes slideUp{0%{bottom:-40%}to{bottom:0}}@-webkit-keyframes slideUp{0%{bottom:-40%}to{bottom:0}}@-o-keyframes slideUp{0%{bottom:-40%}to{bottom:0}}.pickerView-wrap *{margin:0;padding:0;list-style:none;-webkit-box-sizing:border-box;-ms-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;font-size:0}.pickerView-wrap{position:fixed;left:0;top:0;height:100%;width:100%}.pickerView-mask{height:100%;width:100%;background:rgba(0,0,0,.4)}.pickerView-box{height:40%;bottom:0;padding-top:45px;animation:slideUp .3s}.pickerView-box,.pickerView-box-header{width:100%;position:absolute;left:0;background:#fff}.pickerView-box-header{text-align:center;height:45px;border-bottom:1px solid #ddd;padding:0 50px;top:0;z-index:10}.pickerView-box-header>div{line-height:44px;font-size:16px}.pickerView-box-header-btn{height:100%;width:50px;position:absolute;top:0;color:#108ee9}.pickerView-box-header-left{left:0}.pickerView-box-header-right{right:0}.pickerView-box-header-title{text-align:center;height:100%;width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.pickerView-box-content-wrap{height:100%;width:100%;overflow:hidden;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.pickerView-box-content{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;position:relative}.pickerView-box-content-mask{position:absolute;left:0;bottom:0;height:100%;margin:0 auto;width:100%;z-index:3;background-image:-webkit-linear-gradient(top,hsla(0,0%,100%,.95),hsla(0,0%,100%,.6)),-webkit-linear-gradient(bottom,hsla(0,0%,100%,.95),hsla(0,0%,100%,.6));background-image:-webkit-gradient(linear,left top,left bottom,from(hsla(0,0%,100%,.95)),to(hsla(0,0%,100%,.6))),-webkit-gradient(linear,left bottom,left top,from(hsla(0,0%,100%,.95)),to(hsla(0,0%,100%,.6)));background-image:linear-gradient(180deg,hsla(0,0%,100%,.95),hsla(0,0%,100%,.6)),linear-gradient(0deg,hsla(0,0%,100%,.95),hsla(0,0%,100%,.6));background-position:top,bottom;background-size:100% 102px;background-repeat:no-repeat}.pickerView-box-content-indicator{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:34px;position:absolute;left:0;top:102px;z-index:3;border-top:1px solid #ddd;border-bottom:1px solid #ddd}.pickerView-items{position:absolute;left:0;top:0;width:100%;z-index:1;padding:102px 0}.pickerView-item{touch-action:manipulation;text-align:center;font-size:16px;height:34px;line-height:34px;color:#000;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}", ""]);

// exports


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(8);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);
});
//# sourceMappingURL=cgs-picker-view.js.map