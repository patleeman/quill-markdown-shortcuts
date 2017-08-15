var MarkdownShortcuts =
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Quill.js Plugin - Markdown Shortcuts
// This is a module for the Quill.js WYSIWYG editor (https://quilljs.com/)
// which converts text entered as markdown to rich text.
//
// v0.0.1
//
// Author: Patrick Lee (me@patricklee.nyc)
//
// (c) Copyright 2017 Patrick Lee (me@patricklee.nyc).
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
//
var MarkdownShortcuts = function () {
  function MarkdownShortcuts(quill, options) {
    var _this = this;

    _classCallCheck(this, MarkdownShortcuts);

    this.quill = quill;
    this.options = options;

    this.matches = [{
      name: 'header',
      pattern: /^(#){1,6}\s/g,
      action: function action(text, selection) {
        switch (text.trim()) {
          case '#':
            _this.quill.formatLine(selection.index, 0, 'header', 1);
            break;
          case '##':
            _this.quill.formatLine(selection.index, 0, 'header', 2);
            break;
          case '###':
            _this.quill.formatLine(selection.index, 0, 'header', 3);
            break;
          case '####':
            _this.quill.formatLine(selection.index, 0, 'header', 4);
            break;
          case '#####':
            _this.quill.formatLine(selection.index, 0, 'header', 5);
            break;
          case '######':
            _this.quill.formatLine(selection.index, 0, 'header', 6);
            break;
        }
        // Need to defer this action https://github.com/quilljs/quill/issues/1134
        setTimeout(function () {
          _this.quill.deleteText(selection.index - text.length, text.length);
        }, 0);
      }
    }, {
      name: 'blockquote',
      pattern: /^(>)\s/g,
      action: function action(text, selection) {
        // Need to defer this action https://github.com/quilljs/quill/issues/1134
        setTimeout(function () {
          _this.quill.formatLine(selection.index, 1, 'blockquote', true);
          _this.quill.deleteText(selection.index - 2, 2);
        }, 0);
      }
    }, {
      name: 'code-block',
      pattern: /^`{3}(?:\s|\n)/g,
      action: function action(text, selection) {
        // Need to defer this action https://github.com/quilljs/quill/issues/1134
        setTimeout(function () {
          _this.quill.formatLine(selection.index, 1, 'code-block', true);
          _this.quill.deleteText(selection.index - 4, 4);
        }, 0);
      }
    }, {
      name: 'bolditalic',
      pattern: /(\*|_){3}(.+?)(\*|_){3}/g,
      action: function action(text, selection, pattern) {
        var startIndex = text.search(pattern);
        if (startIndex !== -1) {
          var matchedText = text.slice(startIndex + 3, text.length - 4);
          var start = selection.index - (matchedText.length + 7);
          setTimeout(function () {
            _this.quill.deleteText(start, matchedText.length + 6);
            _this.quill.insertText(start, matchedText, { bold: true, italic: true });
            _this.quill.format('bold', false);
            _this.quill.format('italic', false);
          }, 0);
        }
      }
    }, {
      name: 'bold',
      pattern: /(\*|_){2}(.+?)(\*|_){2}/g,
      action: function action(text, selection, pattern) {
        var startIndex = text.search(pattern);
        if (startIndex !== -1) {
          var matchedText = text.slice(startIndex + 2, text.length - 3);
          var start = selection.index - (matchedText.length + 5);
          setTimeout(function () {
            _this.quill.deleteText(start, matchedText.length + 4);
            _this.quill.insertText(start, matchedText, { bold: true });
            _this.quill.format('bold', false);
          }, 0);
        }
      }
    }, {
      name: 'italic',
      pattern: /(\*|_){1}(.+?)(\*|_){1}/g,
      action: function action(text, selection, pattern) {
        var startIndex = text.search(pattern);
        if (startIndex !== -1) {
          var matchedText = text.slice(startIndex + 1, text.length - 2);
          var start = selection.index - (matchedText.length + 3);
          setTimeout(function () {
            _this.quill.deleteText(start, matchedText.length + 2);
            _this.quill.insertText(start, matchedText, { italic: true });
            _this.quill.format('italic', false);
          }, 0);
        }
      }
    }, {
      name: 'strikethrough',
      pattern: /(~~)(.+?)(~~)/g,
      action: function action(text, selection, pattern) {
        var startIndex = text.search(pattern);
        if (startIndex !== -1) {
          var matchedText = text.slice(startIndex + 2, text.length - 3);
          var start = selection.index - (matchedText.length + 5);
          setTimeout(function () {
            _this.quill.deleteText(start, matchedText.length + 4);
            _this.quill.insertText(start, matchedText, { strike: true });
            _this.quill.format('strike', false);
          }, 0);
        }
      }
    }, {
      name: 'code',
      pattern: /(`)(.+?)(`)/g,
      action: function action(text, selection, pattern) {
        var startIndex = text.search(pattern);
        if (startIndex !== -1) {
          var matchedText = text.slice(startIndex + 1, text.length - 2);
          var start = selection.index - (matchedText.length + 3);
          setTimeout(function () {
            _this.quill.deleteText(start, matchedText.length + 2);
            _this.quill.insertText(start, matchedText, { code: true });
            _this.quill.format('code', false);
            _this.quill.insertText(_this.quill.getSelection(), ' ');
          }, 0);
        }
      }
    }, {
      name: 'asterisk-ul',
      pattern: /^(\*|\+)\s$/g,
      action: function action(text, selection, pattern) {
        setTimeout(function () {
          _this.quill.formatLine(selection.index, 1, 'list', 'unordered');
          _this.quill.deleteText(selection.index - 2, 2);
        }, 0);
      }
    }, {
      name: 'image',
      pattern: /(?:!\[(.+?)\])(?:\((.+?)\))/g,
      action: function action(text, selection, pattern) {
        var startIndex = text.search(pattern);
        var matchedText = text.match(pattern)[0];
        // const hrefText = text.match(/(?:!\[(.*?)\])/g)[0]
        var hrefLink = text.match(/(?:\((.*?)\))/g)[0];
        var start = selection.index - matchedText.length - 1;
        if (startIndex !== -1) {
          setTimeout(function () {
            _this.quill.deleteText(start, matchedText.length);
            _this.quill.insertEmbed(start, 'image', hrefLink.slice(1, hrefLink.length - 1));
          }, 0);
        }
      }
    }, {
      name: 'link',
      pattern: /(?:\[(.+?)\])(?:\((.+?)\))/g,
      action: function action(text, selection, pattern) {
        var startIndex = text.search(pattern);
        var matchedText = text.match(pattern)[0];
        var hrefText = text.match(/(?:\[(.*?)\])/g)[0];
        var hrefLink = text.match(/(?:\((.*?)\))/g)[0];
        var start = selection.index - matchedText.length - 1;
        if (startIndex !== -1) {
          setTimeout(function () {
            _this.quill.deleteText(start, matchedText.length);
            _this.quill.insertText(start, hrefText.slice(1, hrefText.length - 1), 'link', hrefLink.slice(1, hrefLink.length - 1));
          }, 0);
        }
      }
    }];

    // Handler that looks for insert deltas that match specific characters
    this.quill.on('text-change', function (delta, oldContents, source) {
      for (var i = 0; i < delta.ops.length; i++) {
        if (delta.ops[i].hasOwnProperty('insert')) {
          if (delta.ops[i].insert === ' ') {
            _this.onSpace();
          }
        }
      }
    });
  }

  _createClass(MarkdownShortcuts, [{
    key: 'onSpace',
    value: function onSpace() {
      var selection = this.quill.getSelection();
      var line = this.quill.getLine(selection.index);
      var text = line[0].domNode.textContent;
      if (typeof text !== 'undefined' && text) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.matches[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var match = _step.value;

            var matchedText = text.match(match.pattern);
            if (matchedText) {
              match.action(text, selection, match.pattern);
              return;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }
  }]);

  return MarkdownShortcuts;
}();

module.exports = MarkdownShortcuts;

/***/ })
/******/ ]);
//# sourceMappingURL=markdownShortcuts.js.map