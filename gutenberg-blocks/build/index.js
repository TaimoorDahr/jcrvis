/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/blocks/add-attribs/index.js":
/*!*****************************************!*\
  !*** ./src/blocks/add-attribs/index.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);










const checkName = name => {
  switch (name) {
    case "core/heading":
      return ["Title", "product-title"];

    case "core/image":
      return ["Image", "product-image"];

    case "core/table":
      return ["Specification Table", "product-specs"];

    case "core/button":
      return ["Link", "product-link"];

    default:
      return [];
  }
}; //restrict to specific block names


const allowedBlocks = ["core/heading", "core/image", "core/table", "core/button"];
/**
 * Add custom attribute for mobile visibility.
 *
 * @param {Object} settings Settings for the block.
 *
 * @return {Object} settings Modified settings.
 */

function addAttributes(settings) {
  //check if object exists for old Gutenberg version compatibility
  //add allowedBlocks restriction
  if (typeof settings.attributes !== "undefined" && allowedBlocks.includes(settings.name)) {
    settings.attributes = { ...settings.attributes,
      productElement: {
        type: "boolean",
        default: false
      }
    };
  }

  if (typeof settings.attributes !== "undefined" && settings.name === "core/heading") {
    settings.attributes = { ...settings.attributes,
      sidebarIcon: {
        type: "string",
        default: ""
      }
    };
  }

  return settings;
}
/**
 * Add mobile visibility controls on Advanced Block Panel.
 *
 * @param {function} BlockEdit Block edit component.
 *
 * @return {function} BlockEdit Modified block edit component.
 */


const withInspectorControl = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__["createHigherOrderComponent"])(BlockEdit => {
  return props => {
    const {
      name,
      attributes,
      setAttributes,
      isSelected
    } = props;
    const {
      productElement,
      sidebarIcon
    } = attributes;
    const title = checkName(name)[0];
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockEdit, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["InspectorAdvancedControls"], null, isSelected && allowedBlocks.includes(name) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Product " + title),
      checked: !!productElement,
      onChange: () => setAttributes({
        productElement: !productElement
      }),
      help: !!productElement ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])(`Selected as Product ${title} of this Group`) : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])(`Not Selected as Product ${title}`)
    }), isSelected && name === "core/heading" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Heading Sidebar TOC Icon"),
      value: sidebarIcon,
      onChange: sidebarIcon => setAttributes({
        sidebarIcon
      }),
      options: [{
        value: "",
        label: "Product Icon"
      }, {
        value: "recommendation",
        label: "Recommendations Icon"
      }, {
        value: "summary",
        label: "Summary Icon"
      }, {
        value: "conclusion",
        label: "Conclusion Icon"
      }]
    })));
  };
}, "withInspectorControl");
/**
 * Add custom element class in save element.
 *
 * @param {Object} extraProps     Block element.
 * @param {Object} blockType      Blocks object.
 * @param {Object} attributes     Blocks attributes.
 *
 * @return {Object} extraProps Modified block element.
 */

function applyExtraClass(extraProps, blockType, attributes) {
  const {
    productElement,
    sidebarIcon
  } = attributes;
  const newClass = checkName(blockType.name)[1];

  if (typeof productElement !== "undefined" && !!productElement && allowedBlocks.includes(blockType.name)) {
    extraProps.className = classnames__WEBPACK_IMPORTED_MODULE_2___default()(extraProps.className, newClass);
  }

  if (typeof sidebarIcon !== "undefined" && blockType.name === "core/heading") {
    switch (sidebarIcon) {
      case "recommendation":
        extraProps.className = classnames__WEBPACK_IMPORTED_MODULE_2___default()(extraProps.className, "icon-recommendation");
        break;

      case "summary":
        extraProps.className = classnames__WEBPACK_IMPORTED_MODULE_2___default()(extraProps.className, "icon-summary");
        break;

      case "conclusion":
        extraProps.className = classnames__WEBPACK_IMPORTED_MODULE_2___default()(extraProps.className, "icon-conclusion");
        break;
    }
  }

  return extraProps;
}

const withClientIdClassName = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__["createHigherOrderComponent"])(BlockListBlock => {
  return props => {
    const {
      name,
      attributes: {
        productElement
      }
    } = props;
    const className = allowedBlocks.includes(name) && productElement ? checkName(name)[1] : "";
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockListBlock, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
      className: className
    }));
  };
}, "withClientIdClassName"); //add filters

Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__["addFilter"])("blocks.registerBlockType", "pak/custom-attributes", addAttributes);
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__["addFilter"])("editor.BlockEdit", "pak/custom-advanced-control", withInspectorControl);
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__["addFilter"])("blocks.getSaveContent.extraProps", "pak/applyExtraClass", applyExtraClass);
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__["addFilter"])("editor.BlockListBlock", "pak/applyEditorExtraClass", withClientIdClassName);

/***/ }),

/***/ "./src/blocks/at-a-glance/index.js":
/*!*****************************************!*\
  !*** ./src/blocks/at-a-glance/index.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);







const IconAtAGlance = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 512 512",
  width: "24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "m499.513 462.037h-44.098v-281.48c0-6.885-5.602-12.487-12.487-12.487h-28.491c-4.138 0-7.492 3.354-7.492 7.492s3.354 7.492 7.492 7.492h25.994v278.983h-71.167v-278.983h9.943c4.138 0 7.492-3.354 7.492-7.492s-3.354-7.492-7.492-7.492h-12.44c-6.885 0-12.487 5.602-12.487 12.487v281.481h-47.711v-186.627c0-6.885-5.602-12.487-12.487-12.487h-76.162c-6.885 0-12.487 5.602-12.487 12.487v186.626h-47.712v-104.683c0-6.885-5.602-12.487-12.487-12.487h-76.161c-6.885 0-12.487 5.602-12.487 12.487v33.505c0 4.138 3.354 7.492 7.492 7.492s7.492-3.354 7.492-7.492v-31.007h71.166v102.186h-71.166v-36.338c0-4.138-3.354-7.492-7.492-7.492s-7.492 3.354-7.492 7.492v36.338h-44.099c-6.885-.001-12.487 5.601-12.487 12.487v23.891c0 6.885 5.602 12.487 12.487 12.487h487.026c6.885 0 12.487-5.602 12.487-12.487v-23.891c0-6.886-5.602-12.488-12.487-12.488zm-279.096-184.128h71.167v184.129h-71.167zm276.598 218.01h-482.03v-18.896h49.094 86.151 62.696 86.151 62.695 86.151 49.093v18.896z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "m62.246 275.452-4.286 24.989c-1.195 6.968 1.616 13.877 7.335 18.032 3.232 2.348 7.013 3.542 10.819 3.542 2.93 0 5.875-.708 8.597-2.138l22.441-11.798 22.441 11.798c6.256 3.289 13.695 2.751 19.416-1.403 5.719-4.156 8.53-11.066 7.335-18.033l-4.286-24.989 18.155-17.697c5.062-4.934 6.85-12.176 4.666-18.899-2.185-6.724-7.887-11.532-14.883-12.549l-25.09-3.646-11.22-22.735c-3.129-6.34-9.464-10.277-16.534-10.277-7.069 0-13.404 3.938-16.532 10.277l-11.22 22.735-25.091 3.646c-6.996 1.017-12.698 5.824-14.883 12.549-2.184 6.724-.397 13.965 4.665 18.898zm-8.569-31.966c.2-.614.87-2.071 2.787-2.35l26.236-3.813c4.163-.603 7.76-3.217 9.623-6.99l11.734-23.775c.857-1.737 2.45-1.925 3.095-1.925s2.238.187 3.096 1.925l11.734 23.774c1.862 3.773 5.459 6.387 9.621 6.991l26.238 3.813c1.917.279 2.587 1.736 2.787 2.35s.514 2.187-.874 3.538l-18.984 18.506c-3.014 2.935-4.388 7.165-3.676 11.311l4.482 26.132c.327 1.909-.852 2.998-1.374 3.377-.523.379-1.923 1.165-3.635.262l-23.468-12.338c-1.862-.979-3.905-1.468-5.947-1.468s-4.085.49-5.947 1.468l-23.468 12.338c-1.715.902-3.113.117-3.635-.262-.522-.38-1.701-1.468-1.374-3.377l4.482-26.131c.712-4.147-.663-8.376-3.674-11.311l-18.986-18.506c-1.387-1.352-1.073-2.925-.873-3.539z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "m211.093 184.295-4.286 24.99c-1.195 6.967 1.615 13.876 7.334 18.031 3.232 2.348 7.013 3.541 10.82 3.541 2.93 0 5.875-.707 8.597-2.137l22.441-11.798 22.441 11.798c6.257 3.291 13.697 2.752 19.418-1.404 5.719-4.155 8.529-11.065 7.334-18.031l-4.287-24.99 18.156-17.697c5.062-4.934 6.849-12.176 4.665-18.899-2.184-6.724-7.887-11.531-14.884-12.548l-25.089-3.646-11.221-22.736c-3.129-6.339-9.464-10.277-16.533-10.277s-13.404 3.938-16.533 10.277l-11.22 22.736-25.091 3.646c-6.995 1.017-12.698 5.824-14.883 12.548-2.185 6.722-.398 13.965 4.665 18.9zm-8.57-31.966c.2-.614.87-2.07 2.787-2.349l26.24-3.813c4.162-.606 7.757-3.218 9.619-6.99l11.734-23.776c.857-1.737 2.45-1.924 3.095-1.924s2.238.187 3.095 1.924l11.736 23.779c1.861 3.77 5.457 6.381 9.62 6.987l26.238 3.813c1.917.279 2.587 1.737 2.787 2.35.199.614.513 2.186-.874 3.538l-18.986 18.507c-3.011 2.936-4.384 7.163-3.674 11.31l4.482 26.132c.327 1.909-.852 2.997-1.374 3.376-.522.378-1.922 1.166-3.636.262l-23.467-12.337c-1.861-.979-3.904-1.469-5.947-1.469-2.042 0-4.085.49-5.947 1.468l-23.468 12.338c-1.716.903-3.114.116-3.635-.262-.522-.379-1.7-1.467-1.373-3.376l4.482-26.132c.711-4.145-.662-8.373-3.675-11.311l-18.986-18.505c-1.386-1.353-1.072-2.925-.873-3.54z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "m359.94 86.899-4.286 24.989c-1.196 6.967 1.615 13.877 7.334 18.032 5.72 4.155 13.158 4.692 19.417 1.404l22.441-11.798 22.441 11.798c2.722 1.43 5.667 2.137 8.598 2.137 3.807 0 7.588-1.193 10.819-3.541 5.72-4.155 8.53-11.065 7.334-18.032l-4.286-24.989 18.155-17.697c5.063-4.934 6.85-12.176 4.666-18.898-2.184-6.724-7.887-11.532-14.883-12.549l-25.09-3.647-11.221-22.735c-3.129-6.339-9.464-10.277-16.533-10.277s-13.404 3.938-16.533 10.277l-11.221 22.735-25.089 3.647c-6.996 1.016-12.699 5.824-14.884 12.548-2.184 6.722-.397 13.965 4.665 18.899zm-8.569-31.965c.199-.614.869-2.071 2.787-2.35l26.235-3.813c4.166-.604 7.764-3.217 9.624-6.99l11.734-23.775c.858-1.737 2.451-1.924 3.095-1.924s2.239.187 3.095 1.924l11.735 23.776c1.862 3.772 5.46 6.386 9.62 6.989l26.239 3.813c1.917.279 2.588 1.737 2.787 2.35.199.614.513 2.186-.874 3.538l-18.987 18.508c-3.01 2.936-4.384 7.163-3.674 11.31l4.482 26.131c.327 1.91-.852 2.998-1.374 3.377-.521.38-1.921 1.165-3.636.262l-23.467-12.337c-1.862-.979-3.905-1.469-5.947-1.469-2.043 0-4.085.49-5.946 1.468l-23.468 12.338c-1.714.903-3.114.116-3.636-.262-.522-.38-1.7-1.467-1.374-3.377l4.482-26.129c.712-4.146-.661-8.374-3.674-11.313l-18.986-18.507c-1.387-1.352-1.072-2.925-.872-3.538z"
}));
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__["registerBlockType"])("custom-block/at-a-glance", {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("At a Glance"),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Place to show best, staff and budget pick products."),
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("three"), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("at a glance")],
  category: "common",
  icon: IconAtAGlance,
  example: {},
  attributes: {
    title: {
      type: "array",
      source: "children",
      selector: ".at-a-glance__title",
      default: "At a Glance:"
    },
    best_product: {
      type: "object"
    },
    staff_product: {
      type: "object"
    },
    budget_product: {
      type: "object"
    }
  },
  edit: props => {
    const {
      className,
      attributes: {
        title,
        best_product,
        staff_product,
        budget_product
      },
      setAttributes
    } = props;

    const onChangeTitle = title => setAttributes({
      title
    });

    const newClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, "at-a-glance");
    Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(() => {
      document.querySelector(".editor-post-publish-button__button").addEventListener("click", () => {
        setAttributes({ ...atAGlance()
        });
      });
    }, []);
    window.addEventListener("load", () => {
      setAttributes({ ...atAGlance()
      });
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: newClass
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "at-a-glance__header"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"], {
      className: "at-a-glance__title",
      tagName: "p",
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Write At a Glance title…", "custom-block"),
      value: title,
      onChange: onChangeTitle
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "at-a-glance__footer"
    }, best_product && createPick(best_product, "best"), staff_product && createPick(staff_product, "staff"), budget_product && createPick(budget_product, "budget")));
  },
  save: props => {
    const {
      className,
      attributes: {
        title,
        best_product,
        staff_product,
        budget_product
      }
    } = props;
    const newClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, "at-a-glance");
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: newClass
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "at-a-glance__header"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"].Content, {
      className: "at-a-glance__title",
      tagName: "p",
      value: title
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "at-a-glance__footer"
    }, best_product && createPick(best_product, "best"), staff_product && createPick(staff_product, "staff"), budget_product && createPick(budget_product, "budget")));
  }
});

const checkProductElement = (block, name) => block.name === name && block.attributes.productElement === true;

const getPickData = productGroup => {
  var _productGroup$innerBl, _productGroup$innerBl2, _productGroup$innerBl3, _productGroup$innerBl4, _productGroup$innerBl5, _productGroup$innerBl6, _productGroup$innerBl7, _productGroup$innerBl8, _productGroup$innerBl9, _productGroup$innerBl10, _productGroup$innerBl11, _productGroup$innerBl12, _productGroup$innerBl13;

  const pick = ((_productGroup$innerBl = productGroup.innerBlocks.find(block => checkProductElement(block, "custom-block/ribbon"))) === null || _productGroup$innerBl === void 0 ? void 0 : (_productGroup$innerBl2 = _productGroup$innerBl.attributes) === null || _productGroup$innerBl2 === void 0 ? void 0 : _productGroup$innerBl2.content) || "";
  const title = (_productGroup$innerBl3 = productGroup.innerBlocks.find(block => checkProductElement(block, "core/heading"))) === null || _productGroup$innerBl3 === void 0 ? void 0 : (_productGroup$innerBl4 = _productGroup$innerBl3.attributes) === null || _productGroup$innerBl4 === void 0 ? void 0 : _productGroup$innerBl4.content;
  const award = (_productGroup$innerBl5 = productGroup.innerBlocks.find(block => checkProductElement(block, "custom-block/product-award"))) === null || _productGroup$innerBl5 === void 0 ? void 0 : (_productGroup$innerBl6 = _productGroup$innerBl5.attributes) === null || _productGroup$innerBl6 === void 0 ? void 0 : _productGroup$innerBl6.content;
  const image = (_productGroup$innerBl7 = productGroup.innerBlocks.find(block => checkProductElement(block, "core/image"))) === null || _productGroup$innerBl7 === void 0 ? void 0 : (_productGroup$innerBl8 = _productGroup$innerBl7.attributes) === null || _productGroup$innerBl8 === void 0 ? void 0 : _productGroup$innerBl8.url;
  const pros = ((_productGroup$innerBl9 = productGroup.innerBlocks.find(block => checkProductElement(block, "custom-block/pros-n-cons"))) === null || _productGroup$innerBl9 === void 0 ? void 0 : (_productGroup$innerBl10 = _productGroup$innerBl9.attributes) === null || _productGroup$innerBl10 === void 0 ? void 0 : _productGroup$innerBl10.pros) || [];
  const button = ((_productGroup$innerBl11 = productGroup.innerBlocks.find(block => block.name === "core/buttons" && block.innerBlocks.find(button => checkProductElement(button, "core/button")))) === null || _productGroup$innerBl11 === void 0 ? void 0 : (_productGroup$innerBl12 = _productGroup$innerBl11.innerBlocks) === null || _productGroup$innerBl12 === void 0 ? void 0 : (_productGroup$innerBl13 = _productGroup$innerBl12.find(button => checkProductElement(button, "core/button"))) === null || _productGroup$innerBl13 === void 0 ? void 0 : _productGroup$innerBl13.attributes) || {};
  return {
    pick,
    title,
    award,
    image,
    pros,
    button
  };
};

const createPick = (pick_data, pick_class) => {
  const {
    pick,
    title,
    award,
    pros,
    button,
    image
  } = pick_data;
  const elem_title = !!title && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "at-a-glance__product__title"
  }, title);
  const elem_award = !!award && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "at-a-glance__product__seo-title"
  }, award);
  const elem_pros = !!pros && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", {
    className: "at-a-glance__product__pros"
  }, pros.map((item, index) => {
    var _item$props;

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
      key: index
    }, (_item$props = item.props) === null || _item$props === void 0 ? void 0 : _item$props.children);
  }));
  const elem_link = !!(button !== null && button !== void 0 && button.url) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: button === null || button === void 0 ? void 0 : button.url,
    className: "at-a-glance__product__link",
    "aria-label": title,
    target: button === null || button === void 0 ? void 0 : button.linkTarget,
    rel: button === null || button === void 0 ? void 0 : button.rel
  }, "Check Price");
  const elem_img = !!image && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    className: "at-a-glance__product__img",
    src: image,
    alt: title,
    loading: "lazy"
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: `at-a-glance__product ${pick_class}`
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: `at-a-glance__product__ribbon pick-${pick_class}`
  }, pick), elem_award, elem_img, elem_title, elem_pros, elem_link);
};

const atAGlance = () => {
  const allBlocks = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["select"])("core/editor").getBlocks();
  const allGroups = allBlocks.filter(block => block.name === "core/group");
  const best_pick = allGroups.find(group => !!group.innerBlocks.find(block => checkProductElement(block, "custom-block/ribbon") && block.attributes.pickType === "best"));
  const staff_pick = allGroups.find(group => !!group.innerBlocks.find(block => checkProductElement(block, "custom-block/ribbon") && block.attributes.pickType === "staff"));
  const budget_pick = allGroups.find(group => !!group.innerBlocks.find(block => checkProductElement(block, "custom-block/ribbon") && block.attributes.pickType === "budget"));
  const data_best_pick = !!best_pick && getPickData(best_pick);
  const data_staff_pick = !!staff_pick && getPickData(staff_pick);
  const data_budget_pick = !!budget_pick && getPickData(budget_pick);
  return {
    best_product: data_best_pick,
    staff_product: data_staff_pick,
    budget_product: data_budget_pick
  };
};

/***/ }),

/***/ "./src/blocks/faq/index.js":
/*!*********************************!*\
  !*** ./src/blocks/faq/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);





const IconFAQs = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24px",
  viewBox: "0 0 24 24",
  width: "24px",
  fill: "#000000"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M15 4v7H5.17l-.59.59-.58.58V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z"
}));
const IconFAQ = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24px",
  viewBox: "0 0 24 24",
  width: "24px",
  fill: "#000000"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M13.25,16.74c0,0.69-0.53,1.26-1.25,1.26c-0.7,0-1.26-0.56-1.26-1.26c0-0.71,0.56-1.25,1.26-1.25 C12.71,15.49,13.25,16.04,13.25,16.74z M11.99,6c-1.77,0-2.98,1.15-3.43,2.49l1.64,0.69c0.22-0.67,0.74-1.48,1.8-1.48 c1.62,0,1.94,1.52,1.37,2.33c-0.54,0.77-1.47,1.29-1.96,2.16c-0.39,0.69-0.31,1.49-0.31,1.98h1.82c0-0.93,0.07-1.12,0.22-1.41 c0.39-0.72,1.11-1.06,1.87-2.17c0.68-1,0.42-2.36-0.02-3.08C14.48,6.67,13.47,6,11.99,6z M19,5H5v14h14V5 M19,3c1.1,0,2,0.9,2,2v14 c0,1.1-0.9,2-2,2H5c-1.1,0-2-0.9-2-2V5c0-1.1,0.9-2,2-2H19L19,3z"
})));
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__["registerBlockType"])("custom-block/faqs", {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("FAQs"),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Write Frequently Asked Questions in it."),
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("faqs"), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Frequently Asked Questions")],
  category: "common",
  icon: IconFAQs,
  example: {},
  attributes: {
    title: {
      type: "array",
      source: "children",
      selector: "h2",
      default: "Frequently Asked Questions"
    }
  },
  edit: props => {
    const {
      className,
      attributes: {
        title
      },
      setAttributes
    } = props;

    const onChangeTitle = value => setAttributes({
      title: value
    });

    const newClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, "wp-block-group faqs");
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: newClass
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "wp-block-group__inner-container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"], {
      tagName: "h2",
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Write FAQs title…", "custom-block"),
      value: title,
      onChange: onChangeTitle,
      className: "icon-faqs"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["InnerBlocks"], {
      allowedBlocks: ["custom-block/faq"]
    })));
  },
  save: props => {
    const {
      className,
      attributes: {
        title
      }
    } = props;
    const newClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, "wp-block-group faqs");
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: newClass
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "wp-block-group__inner-container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"].Content, {
      tagName: "h2",
      value: title,
      className: "icon-faqs"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["InnerBlocks"].Content, null)));
  }
});
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__["registerBlockType"])("custom-block/faq", {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Single FAQ"),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Write Frequently Asked Question in it."),
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("faq"), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Frequently Asked Question")],
  category: "common",
  icon: IconFAQ,
  parent: ["custom-block/faq"],
  example: {},
  attributes: {
    question: {
      type: "array",
      source: "children",
      selector: ".faq__question"
    },
    answer: {
      type: "array",
      source: "children",
      selector: ".faq__answer"
    }
  },
  edit: props => {
    const {
      className,
      attributes: {
        question,
        answer
      },
      setAttributes
    } = props;

    const onChangeQuestion = value => setAttributes({
      question: value
    });

    const onChangeAnswer = value => setAttributes({
      answer: value
    });

    const newClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, "faq");
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: newClass
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"], {
      tagName: "p",
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Write question here", "custom-block"),
      value: question,
      onChange: onChangeQuestion,
      className: "faq__question"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"], {
      tagName: "p",
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Write answer here", "custom-block"),
      value: answer,
      onChange: onChangeAnswer,
      className: "faq__answer"
    }));
  },
  save: props => {
    const {
      className,
      attributes: {
        question,
        answer
      }
    } = props;
    const newClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, "faq");
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: newClass
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"].Content, {
      tagName: "p",
      value: question,
      className: "faq__question"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"].Content, {
      tagName: "p",
      value: answer,
      className: "faq__answer"
    }));
  }
});

/***/ }),

/***/ "./src/blocks/product-award/index.js":
/*!*******************************************!*\
  !*** ./src/blocks/product-award/index.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);






const IconProductAward = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 92.35 122.88",
  height: "24px",
  width: "24px",
  fill: "#000000"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M88.96,113.07L77.41,111l-5.73,10.26c-4.16,5.15-6.8-3.32-7.96-6.27L52.57,93.96 c2.57-0.89,5.67-3.46,8.85-6.35c6.35,0.13,12.27-0.97,16.62-6.51l12.81,24.75l1.11,2.38C92.84,111.32,92.38,113.36,88.96,113.07 L88.96,113.07z M46.18,0.01c2.17-0.09,3.88,0.66,5.61,1.76c2.19,1.39,4.66,4.14,7.71,5.88c4.29,2.45,12.23-0.93,16.29,5.11 c2.37,3.52,2.48,6.28,2.66,9.01c0.19,2.94,0.71,5.65,3.72,9.63c4.99,6.6,6.03,10.99,3.46,15.56c-1.75,3.12-5.44,4.85-6.29,6.83 c-1.82,4.2,0.19,7.37-2.29,12.27c-1.73,3.4-4.39,5.64-7.94,6.78c-2.99,0.96-5.99-0.43-8.39,0.58c-4.21,1.77-7.31,5.88-10.66,6.92 c-1.29,0.4-2.58,0.6-3.87,0.59c-1.29,0.01-2.58-0.19-3.87-0.59c-3.35-1.04-6.45-5.15-10.66-6.92c-2.4-1.01-5.4,0.39-8.39-0.58 c-3.55-1.14-6.21-3.38-7.94-6.78c-2.49-4.9-0.48-8.07-2.29-12.27c-0.85-1.98-4.54-3.71-6.29-6.83C4.16,42.39,5.2,38,10.19,31.41 c3.01-3.98,3.53-6.69,3.72-9.63c0.18-2.73,0.29-5.49,2.66-9.01c4.07-6.04,12.01-2.66,16.29-5.11c3.05-1.74,5.52-4.49,7.71-5.88 C42.29,0.67,44.01-0.09,46.18,0.01L46.18,0.01z M39.13,35.79l5.22,4.97l8.98-9.13c0.89-0.9,1.45-1.62,2.54-0.5l3.56,3.64 c1.17,1.16,1.11,1.83,0.01,2.91L46.38,50.52c-2.32,2.28-1.92,2.42-4.28,0.08l-8.97-8.92c-0.49-0.53-0.44-1.07,0.1-1.6l4.13-4.28 C37.99,35.14,38.49,35.18,39.13,35.79L39.13,35.79z M46.18,16.24c13.38,0,24.23,10.85,24.23,24.23c0,13.38-10.85,24.23-24.23,24.23 c-13.38,0-24.23-10.85-24.23-24.23C21.95,27.08,32.8,16.24,46.18,16.24L46.18,16.24z M3.39,113.07L14.95,111l5.73,10.26 c4.16,5.15,6.8-3.32,7.96-6.27l11.15-21.03c-2.57-0.89-5.67-3.46-8.85-6.35c-6.35,0.13-12.27-0.97-16.62-6.51L1.5,105.85 l-1.11,2.38C-0.49,111.32-0.03,113.36,3.39,113.07L3.39,113.07z"
})));
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__["registerBlockType"])("custom-block/product-award", {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Product Award"),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Add in a product group to set product award."),
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("product award"), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("award")],
  category: "common",
  icon: IconProductAward,
  attributes: {
    content: {
      type: "string",
      default: ""
    },
    productElement: {
      type: "boolean",
      default: true
    },
    show: {
      type: "boolean",
      default: true
    },
    alignment: {
      type: "string",
      default: "none"
    }
  },
  example: {},
  edit: props => {
    const {
      className,
      attributes: {
        content,
        show,
        alignment
      },
      setAttributes
    } = props;

    const onChangeAlignment = newAlignment => {
      setAttributes({
        alignment: newAlignment === undefined ? "none" : newAlignment
      });
    };

    const newClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, `product-award`);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["BlockControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["AlignmentToolbar"], {
      value: alignment,
      onChange: onChangeAlignment
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelBody"], {
      title: "Product Award Settings",
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["ToggleControl"], {
      label: "Show on Front-end",
      checked: show,
      onChange: show => setAttributes({
        show
      })
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"], {
      style: {
        textAlign: alignment
      },
      className: newClass,
      tagName: "p",
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Write At a Product Award…", "custom-block"),
      value: content,
      onChange: content => setAttributes({
        content
      })
    }));
  },
  save: props => {
    const {
      className,
      attributes: {
        show,
        content,
        alignment
      }
    } = props;
    const newClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, `product-award has-text-align-${alignment}`);
    return show ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"].Content, {
      className: newClass,
      tagName: "p",
      value: content
    }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null);
  }
});

/***/ }),

/***/ "./src/blocks/product-table/index.js":
/*!*******************************************!*\
  !*** ./src/blocks/product-table/index.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_7__);








const IconProductTable = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 -21 512 512",
  width: "24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "m453.332031 469.332031h-394.664062c-32.363281 0-58.667969-26.300781-58.667969-58.664062v-352c0-32.363281 26.304688-58.667969 58.667969-58.667969h394.664062c32.363281 0 58.667969 26.304688 58.667969 58.667969v352c0 32.363281-26.304688 58.664062-58.667969 58.664062zm-394.664062-437.332031c-14.699219 0-26.667969 11.96875-26.667969 26.667969v352c0 14.699219 11.96875 26.664062 26.667969 26.664062h394.664062c14.699219 0 26.667969-11.964843 26.667969-26.664062v-352c0-14.699219-11.96875-26.667969-26.667969-26.667969zm0 0"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "m496 160h-480c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h480c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "m496 266.667969h-480c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h480c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "m496 373.332031h-480c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h480c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "m133.332031 469.332031c-8.832031 0-16-7.167969-16-16v-309.332031c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v309.332031c0 8.832031-7.167969 16-16 16zm0 0"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "m256 469.332031c-8.832031 0-16-7.167969-16-16v-309.332031c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v309.332031c0 8.832031-7.167969 16-16 16zm0 0"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "m378.667969 469.332031c-8.832031 0-16-7.167969-16-16v-309.332031c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v309.332031c0 8.832031-7.167969 16-16 16zm0 0"
}));
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__["registerBlockType"])("custom-block/product-table", {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Product Table"),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Table to show all products."),
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("table"), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("product table")],
  category: "common",
  icon: IconProductTable,
  example: {},
  attributes: {
    products: {
      type: "array",
      default: []
    },
    has_awards: {
      type: "boolean",
      default: false
    },
    category: {
      type: "string",
      default: ""
    }
  },
  edit: props => {
    const {
      className,
      attributes: {
        products,
        has_awards,
        category
      },
      setAttributes
    } = props;
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
      document.querySelector(".editor-post-publish-button__button").addEventListener("click", async () => {
        var _wp$data$select$getEn, _wp$data$select$getEn2;

        const _category = ((_wp$data$select$getEn = wp.data.select("core").getEntityRecords("taxonomy", "category")) === null || _wp$data$select$getEn === void 0 ? void 0 : (_wp$data$select$getEn2 = _wp$data$select$getEn.find(item => item.id === Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__["select"])("core/editor").getCurrentPostAttribute("categories")[0])) === null || _wp$data$select$getEn2 === void 0 ? void 0 : _wp$data$select$getEn2.name) || category;

        setAttributes({ ...getAllProducts(),
          category: _category
        });
      });
    }, []);
    window.addEventListener("load", async () => {
      var _wp$data$select$getEn3, _wp$data$select$getEn4;

      const _category = ((_wp$data$select$getEn3 = wp.data.select("core").getEntityRecords("taxonomy", "category")) === null || _wp$data$select$getEn3 === void 0 ? void 0 : (_wp$data$select$getEn4 = _wp$data$select$getEn3.find(item => item.id === Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__["select"])("core/editor").getCurrentPostAttribute("categories")[0])) === null || _wp$data$select$getEn4 === void 0 ? void 0 : _wp$data$select$getEn4.name) || category;

      setAttributes({ ...getAllProducts(),
        category: _category
      });
    });
    const newClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, "wp-block-table is-style-stripes auto-table");
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("figure", {
      className: newClass
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("thead", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, has_awards && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Award"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Design"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", {
      className: "auto-table__category"
    }, category), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Retailer"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(CreateProductRows, {
      products: products,
      has_awards: has_awards
    }))));
  },
  save: props => {
    const {
      className,
      attributes: {
        products,
        has_awards,
        category
      }
    } = props;
    const newClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, "wp-block-table is-style-stripes auto-table");
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("figure", {
      className: newClass
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("thead", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, has_awards && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Award"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Design"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, category), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Retailer"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(CreateProductRows, {
      products: products,
      has_awards: has_awards
    }))));
  }
});

const CreateProductRows = ({
  products,
  has_awards
}) => products.map((product, index) => {
  const {
    award,
    image,
    title,
    button,
    pick
  } = product;
  const {
    url,
    rel,
    linkTarget
  } = button;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", {
    key: index
  }, has_awards && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, award)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "table__product-image"
  }, !!pick && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: `table__product__ribbon pick-${pick.toLowerCase()}`
  }, pick, " Pick"), !!image && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    src: `${image}`,
    alt: `${title}`,
    loading: "lazy"
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "table__product-title"
  }, title && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: `#${Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_7__["cleanForSlug"])(title)}`
  }, title))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: url,
    rel: rel,
    target: linkTarget,
    className: "wp-block-button__link table__product-button"
  }, "Check Price")));
});

const getAllProducts = () => {
  const products = [];
  let has_awards = false;

  const checkProductElement = (block, name) => block.name === name && block.attributes.productElement === true;

  const allBlocks = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__["select"])("core/editor").getBlocks();
  const allGroups = allBlocks.filter(block => block.name === "core/group");
  const allProductGroups = allGroups.filter(group => !!group.innerBlocks.find(block => checkProductElement(block, "core/heading")));
  allProductGroups.forEach(productGroup => {
    var _productGroup$innerBl, _productGroup$innerBl2, _productGroup$innerBl3, _productGroup$innerBl4, _productGroup$innerBl5, _productGroup$innerBl6, _productGroup$innerBl7, _productGroup$innerBl8, _productGroup$innerBl9, _productGroup$innerBl10, _productGroup$innerBl11;

    let pick = "";

    const _pick = (_productGroup$innerBl = productGroup.innerBlocks.find(block => checkProductElement(block, "custom-block/ribbon"))) === null || _productGroup$innerBl === void 0 ? void 0 : (_productGroup$innerBl2 = _productGroup$innerBl.attributes) === null || _productGroup$innerBl2 === void 0 ? void 0 : _productGroup$innerBl2.content;

    const title = (_productGroup$innerBl3 = productGroup.innerBlocks.find(block => checkProductElement(block, "core/heading"))) === null || _productGroup$innerBl3 === void 0 ? void 0 : (_productGroup$innerBl4 = _productGroup$innerBl3.attributes) === null || _productGroup$innerBl4 === void 0 ? void 0 : _productGroup$innerBl4.content;
    const award = (_productGroup$innerBl5 = productGroup.innerBlocks.find(block => checkProductElement(block, "custom-block/product-award"))) === null || _productGroup$innerBl5 === void 0 ? void 0 : (_productGroup$innerBl6 = _productGroup$innerBl5.attributes) === null || _productGroup$innerBl6 === void 0 ? void 0 : _productGroup$innerBl6.content;
    const image = (_productGroup$innerBl7 = productGroup.innerBlocks.find(block => checkProductElement(block, "core/image"))) === null || _productGroup$innerBl7 === void 0 ? void 0 : (_productGroup$innerBl8 = _productGroup$innerBl7.attributes) === null || _productGroup$innerBl8 === void 0 ? void 0 : _productGroup$innerBl8.url;
    const button = ((_productGroup$innerBl9 = productGroup.innerBlocks.find(block => block.name === "core/buttons" && block.innerBlocks.find(button => checkProductElement(button, "core/button")))) === null || _productGroup$innerBl9 === void 0 ? void 0 : (_productGroup$innerBl10 = _productGroup$innerBl9.innerBlocks) === null || _productGroup$innerBl10 === void 0 ? void 0 : (_productGroup$innerBl11 = _productGroup$innerBl10.find(button => checkProductElement(button, "core/button"))) === null || _productGroup$innerBl11 === void 0 ? void 0 : _productGroup$innerBl11.attributes) || {};

    switch (_pick) {
      case "Best Pick":
        pick = "Best";
        break;

      case "Staff Pick":
        pick = "Staff";
        break;

      case "Budget Pick":
        pick = "Budget";
        break;
    }

    if (award) has_awards = true;
    const product = {
      pick,
      title,
      award,
      image,
      button
    };
    products.push(product);
  });
  return {
    products,
    has_awards
  };
};

/***/ }),

/***/ "./src/blocks/pros-n-cons/index.js":
/*!*****************************************!*\
  !*** ./src/blocks/pros-n-cons/index.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);





const IconProsNCons = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 -58 512 511",
  width: "24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "m236.667969 374.5c0 11.046875-8.953125 20-20 20h-196.667969c-11.046875 0-20-8.953125-20-20s8.953125-20 20-20h196.667969c11.042969 0 20 8.953125 20 20zm127-235.667969h60c11.046875 0 20-8.953125 20-20s-8.953125-20-20-20h-60c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20zm-147 137h-196.667969c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20h196.667969c11.046875 0 20-8.953125 20-20s-8.957031-20-20-20zm58.664062-157c0-65.246093 53.085938-118.332031 118.335938-118.332031 65.246093 0 118.332031 53.085938 118.332031 118.332031 0 65.25-53.085938 118.335938-118.332031 118.335938-65.25 0-118.335938-53.085938-118.335938-118.335938zm40 0c0 43.195313 35.140625 78.335938 78.332031 78.335938 43.195313 0 78.335938-35.140625 78.335938-78.335938 0-43.191406-35.140625-78.332031-78.332031-78.332031-43.195313 0-78.335938 35.140625-78.335938 78.332031zm176.667969 157h-196.667969c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20h196.667969c11.046875 0 20-8.953125 20-20s-8.953125-20-20-20zm0 78.667969h-196.667969c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20h196.667969c11.046875 0 20-8.953125 20-20s-8.953125-20-20-20zm-343.667969-255.667969h-10v-10c0-11.046875-8.953125-20-20-20s-20 8.953125-20 20v10h-10c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20h10v10c0 11.046875 8.953125 20 20 20s20-8.953125 20-20v-10h10c11.046875 0 20-8.953125 20-20s-8.953125-20-20-20zm88.335938 20c0 65.25-53.085938 118.335938-118.332031 118.335938-65.25 0-118.335938-53.085938-118.335938-118.335938 0-65.246093 53.085938-118.332031 118.332031-118.332031 65.25 0 118.335938 53.085938 118.335938 118.332031zm-40 0c0-43.191406-35.140625-78.332031-78.332031-78.332031-43.195313 0-78.335938 35.140625-78.335938 78.332031 0 43.195313 35.140625 78.335938 78.332031 78.335938 43.195313 0 78.335938-35.140625 78.335938-78.335938zm0 0"
}));
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__["registerBlockType"])("custom-block/pros-n-cons", {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Pros & Cons"),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Write product pros & cons in it."),
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("pros & cons"), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("good"), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("bad")],
  category: "common",
  icon: IconProsNCons,
  example: {},
  attributes: {
    prosTitle: {
      type: "array",
      source: "children",
      selector: ".pros h4",
      default: "Pros"
    },
    consTitle: {
      type: "array",
      source: "children",
      selector: ".cons h4",
      default: "Cons"
    },
    pros: {
      type: "array",
      source: "children",
      selector: ".pros ul"
    },
    cons: {
      type: "array",
      source: "children",
      selector: ".cons ul"
    },
    productElement: {
      type: "boolean",
      default: true
    }
  },
  edit: props => {
    const {
      className,
      attributes: {
        pros,
        cons,
        prosTitle,
        consTitle
      },
      setAttributes
    } = props;

    const onChangePros = value => setAttributes({
      pros: value
    });

    const onChangeCons = value => setAttributes({
      cons: value
    });

    const onChangeProsTitle = value => setAttributes({
      prosTitle: value
    });

    const onChangeConsTitle = value => setAttributes({
      consTitle: value
    });

    const newClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, "wp-block-columns pnc");
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: newClass
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "wp-block-column pros"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"], {
      tagName: "h4",
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Write Pros title…", "custom-block"),
      value: prosTitle,
      onChange: onChangeProsTitle
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"], {
      tagName: "ul",
      multiline: "li",
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Write the pros…", "custom-block"),
      value: pros,
      onChange: onChangePros
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "wp-block-column cons"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"], {
      tagName: "h4",
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Write Cons title…", "custom-block"),
      value: consTitle,
      onChange: onChangeConsTitle
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"], {
      tagName: "ul",
      multiline: "li",
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Write the cons…", "custom-block"),
      value: cons,
      onChange: onChangeCons
    })));
  },
  save: props => {
    const {
      className,
      attributes: {
        pros,
        cons,
        prosTitle,
        consTitle
      }
    } = props;
    const newClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, "wp-block-columns pnc");
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: newClass
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "wp-block-column pros"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"].Content, {
      tagName: "h4",
      value: prosTitle
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"].Content, {
      tagName: "ul",
      multiline: "li",
      value: pros
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "wp-block-column cons"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"].Content, {
      tagName: "h4",
      value: consTitle
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"].Content, {
      tagName: "ul",
      multiline: "li",
      value: cons
    })));
  }
});

/***/ }),

/***/ "./src/blocks/related-box/index.js":
/*!*****************************************!*\
  !*** ./src/blocks/related-box/index.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);





const IconRelatedBox = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  width: "24",
  viewBox: "0 0 100 100"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  fill: "none",
  stroke: "#000",
  strokeWidth: "3.5",
  strokeMiterlimit: "10",
  d: "M50 50L25.875 77.188"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  fill: "none",
  stroke: "#000",
  strokeWidth: "3.5",
  strokeMiterlimit: "10",
  d: "M22.25 26.25L50 50"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  fill: "none",
  stroke: "#000",
  strokeWidth: "3.5",
  strokeMiterlimit: "10",
  d: "M62.25 19.687L50 50"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  fill: "none",
  stroke: "#000",
  strokeWidth: "3.5",
  strokeMiterlimit: "10",
  d: "M82.625 52.188L50 50"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  fill: "none",
  stroke: "#000",
  strokeWidth: "3.5",
  strokeMiterlimit: "10",
  d: "M69.922 80.578L50 50"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
  cx: "22.25",
  cy: "26.25",
  r: "7",
  stroke: "#000",
  strokeWidth: "3.5",
  strokeMiterlimit: "10",
  fill: "#fff"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
  cx: "82.625",
  cy: "52.188",
  r: "7.375",
  stroke: "#000",
  strokeWidth: "3.5",
  strokeMiterlimit: "10",
  fill: "#fff"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
  cx: "62.25",
  cy: "19.687",
  r: "9.125",
  stroke: "#000",
  strokeWidth: "3.5",
  strokeMiterlimit: "10",
  fill: "#fff"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
  cx: "50",
  cy: "50",
  r: "5.188",
  stroke: "#000",
  strokeWidth: "3.5",
  strokeMiterlimit: "10",
  fill: "#fff"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
  cx: "25.875",
  cy: "77.188",
  r: "7.375",
  stroke: "#000",
  strokeWidth: "3.5",
  strokeMiterlimit: "10",
  fill: "#fff"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
  cx: "69.922",
  cy: "80.578",
  r: "9.422",
  stroke: "#000",
  strokeWidth: "3.5",
  strokeMiterlimit: "10",
  fill: "#fff"
}));
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__["registerBlockType"])("custom-block/related-box", {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Related Article"),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Write related article in it."),
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("related article"), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("related")],
  category: "common",
  icon: IconRelatedBox,
  example: {},
  attributes: {
    title: {
      type: "array",
      selector: ".related-box__link",
      source: "children",
      default: ""
    }
  },
  edit: props => {
    const {
      className,
      attributes: {
        title
      },
      setAttributes
    } = props;

    const onChangeTitle = title => setAttributes({
      title
    });

    const newClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, "related-box");
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: newClass
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "related-box__info"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, "Related Article:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"], {
      className: "related-box__link",
      tagName: "p",
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Related Article title…", "custom-block"),
      value: title,
      onChange: onChangeTitle
    })));
  },
  save: props => {
    const {
      className,
      attributes: {
        title
      }
    } = props;
    const newClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, "related-box");
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: newClass
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "related-box__img"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "related-box__img-container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: "[related_box_img]",
      height: "40",
      alt: "Related Icon"
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "related-box__info"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, "Related Article:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"].Content, {
      className: "related-box__link",
      tagName: "p",
      value: title
    })));
  }
});

/***/ }),

/***/ "./src/blocks/ribbon/index.js":
/*!************************************!*\
  !*** ./src/blocks/ribbon/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);






const IconRibbon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24px",
  viewBox: "0 0 24 24",
  width: "24px",
  fill: "#000000"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"
}));
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__["registerBlockType"])("custom-block/ribbon", {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Ribbon"),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Add in a product group to make it specific pick."),
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("best pick"), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("staff pick"), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("budget pick"), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("ribbon")],
  category: "common",
  icon: IconRibbon,
  attributes: {
    pickType: {
      type: "string",
      default: "best"
    },
    content: {
      type: "string",
      default: "Best Pick"
    },
    productElement: {
      type: "boolean",
      default: true
    }
  },
  example: {},
  edit: props => {
    const {
      className,
      attributes: {
        pickType,
        content
      },
      setAttributes
    } = props;

    const onChangeType = pickType => {
      switch (pickType) {
        case "best":
          setAttributes({
            pickType,
            content: "Best Pick"
          });
          break;

        case "staff":
          setAttributes({
            pickType,
            content: "Staff Pick"
          });
          break;

        case "budget":
          setAttributes({
            pickType,
            content: "Budget Pick"
          });
          break;
      }
    };

    const newClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, `product-ribbon pick-${pickType}`);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelBody"], {
      title: "Ribbon Settings",
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["SelectControl"], {
      label: "Ribbon Type",
      value: pickType,
      options: [{
        label: "Best Pick",
        value: "best"
      }, {
        label: "Staff Pick",
        value: "staff"
      }, {
        label: "Budget Pick",
        value: "budget"
      }],
      onChange: onChangeType
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: newClass
    }, content));
  },
  save: props => {
    const {
      className,
      attributes: {
        pickType,
        content
      }
    } = props;
    const newClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, `product-ribbon pick-${pickType}`);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: newClass
    }, content);
  }
});

/***/ }),

/***/ "./src/blocks/table-of-contents/index.js":
/*!***********************************************!*\
  !*** ./src/blocks/table-of-contents/index.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_5__);






const IconTableOfContents = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "-76 30 552 340",
  width: "24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
  transform: "matrix(1,0,0,-1,4.5932203,1291.0078)"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M-1,973.7c0-11.1-3.9-20.4-11.6-28.2s-17.1-11.6-28.2-11.6     s-20.4,3.9-28.2,11.6s-11.6,17.1-11.6,28.2s3.9,20.4,11.6,28.2c7.7,7.7,17.1,11.6,28.2,11.6s20.4-3.9,28.2-11.6     C-4.9,994.1-1,984.7-1,973.7z M-1,1079.8c0-11.1-3.9-20.4-11.6-28.2s-17.1-11.6-28.2-11.6s-20.4,3.9-28.2,11.6     s-11.6,17.1-11.6,28.2s3.9,20.4,11.6,28.2s17.1,11.6,28.2,11.6s20.4-3.9,28.2-11.6S-1,1090.8-1,1079.8z M290.8,993.5v-39.8     c0-1.8-0.7-3.4-2-4.7s-2.9-2-4.7-2h-252c-1.8,0-3.4,0.7-4.7,2c-1.3,1.3-2,2.9-2,4.7v39.8c0,1.8,0.7,3.4,2,4.7     c1.3,1.3,2.9,2,4.7,2h252c1.8,0,3.4-0.7,4.7-2S290.8,995.3,290.8,993.5z M-1,1185.9c0-11.1-3.9-20.4-11.6-28.2     s-17.1-11.6-28.2-11.6s-20.4,3.9-28.2,11.6s-11.6,17.1-11.6,28.2s3.9,20.4,11.6,28.2s17.1,11.6,28.2,11.6s20.4-3.9,28.2-11.6     S-1,1196.9-1,1185.9z M290.8,1099.7v-39.8c0-1.8-0.7-3.4-2-4.7s-2.9-2-4.7-2h-252c-1.8,0-3.4,0.7-4.7,2c-1.3,1.3-2,2.9-2,4.7     v39.8c0,1.8,0.7,3.4,2,4.7c1.3,1.3,2.9,2,4.7,2h252c1.8,0,3.4-0.7,4.7-2S290.8,1101.5,290.8,1099.7z M290.8,1205.8V1166     c0-1.8-0.7-3.4-2-4.7s-2.9-2-4.7-2h-252c-1.8,0-3.4,0.7-4.7,2c-1.3,1.3-2,2.9-2,4.7v39.8c0,1.8,0.7,3.4,2,4.7     c1.3,1.3,2.9,2,4.7,2h252c1.8,0,3.4-0.7,4.7-2S290.8,1207.6,290.8,1205.8z"
})));
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__["registerBlockType"])("custom-block/table-of-contents", {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Table of Contents"),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("List of all H2 and H3 in the page."),
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("contents"), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("table of contents")],
  category: "common",
  icon: IconTableOfContents,
  example: {},
  attributes: {
    headings: {
      type: "array",
      default: []
    }
  },
  edit: props => {
    const {
      className,
      attributes: {
        headings
      },
      setAttributes
    } = props;

    const getHeadings = () => {
      const _headings = [];
      document.querySelectorAll(".is-root-container :is(h2,h3)").forEach(item => {
        const tier = item.tagName === "H2" ? "2" : "3";
        const slug = Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_5__["cleanForSlug"])(item.innerText);
        const title = item.innerText;

        _headings.push({
          tier,
          slug,
          title
        });
      });
      setAttributes({
        headings: _headings
      });
    };

    Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
      document.querySelector(".editor-post-publish-button__button").addEventListener("click", async () => {
        getHeadings();
      });
    }, []);
    window.addEventListener("load", async () => {
      getHeadings();
    });
    const newClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, "toc");
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: newClass
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "toc_info"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", {
      className: "toc_info_heading"
    }, "Table of Contents"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
      className: "toc_info_btn"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
      className: "icon",
      xmlns: "https://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      d: "M24 24H0V0h24v24z",
      fill: "none",
      opacity: ".87"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", {
      className: "toc_content"
    }, headings.map((item, index) => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
      tier: item.tier,
      key: index
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: `#${item.slug}`
    }, item.title)))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
      className: "toc_btn"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
      className: "icon",
      xmlns: "https://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      d: "M0 0h24v24H0V0z",
      fill: "none"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
      className: "icon",
      xmlns: "https://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      d: "M24 24H0V0h24v24z",
      fill: "none",
      opacity: ".87"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"
    }))));
  },
  save: props => {
    const {
      className,
      attributes: {
        headings
      }
    } = props;
    const newClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, "toc");

    const openToc = e => {
      console.log(e);
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: newClass
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "toc_info"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", {
      className: "toc_info_heading"
    }, "Table of Contents"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
      className: "toc_info_btn"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
      className: "icon",
      xmlns: "https://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      d: "M24 24H0V0h24v24z",
      fill: "none",
      opacity: ".87"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", {
      className: "toc_content"
    }, headings.map((item, index) => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
      tier: item.tier,
      key: index
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: `#${item.slug}`
    }, item.title)))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
      className: "toc_btn",
      onClick: e => openToc(e)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
      className: "icon",
      xmlns: "https://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      d: "M0 0h24v24H0V0z",
      fill: "none"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
      className: "icon",
      xmlns: "https://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      d: "M24 24H0V0h24v24z",
      fill: "none",
      opacity: ".87"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"
    }))));
  }
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_add_attribs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/add-attribs */ "./src/blocks/add-attribs/index.js");
/* harmony import */ var _blocks_pros_n_cons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/pros-n-cons */ "./src/blocks/pros-n-cons/index.js");
/* harmony import */ var _blocks_faq__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/faq */ "./src/blocks/faq/index.js");
/* harmony import */ var _blocks_ribbon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/ribbon */ "./src/blocks/ribbon/index.js");
/* harmony import */ var _blocks_at_a_glance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/at-a-glance */ "./src/blocks/at-a-glance/index.js");
/* harmony import */ var _blocks_product_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/product-table */ "./src/blocks/product-table/index.js");
/* harmony import */ var _blocks_table_of_contents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/table-of-contents */ "./src/blocks/table-of-contents/index.js");
/* harmony import */ var _blocks_related_box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/related-box */ "./src/blocks/related-box/index.js");
/* harmony import */ var _blocks_product_award__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks/product-award */ "./src/blocks/product-award/index.js");










/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["compose"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["hooks"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ "@wordpress/url":
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["url"]; }());

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map