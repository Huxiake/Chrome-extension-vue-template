webpackHotUpdate("vvicGetGoodsNum",{

/***/ "./src/content/vvicGetGoodsNum.js":
/*!****************************************!*\
  !*** ./src/content/vvicGetGoodsNum.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ \"./node_modules/core-js/modules/es6.regexp.replace.js\");\n/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var element_ui_lib_theme_chalk_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! element-ui/lib/theme-chalk/index.css */ \"./node_modules/element-ui/lib/theme-chalk/index.css\");\n/* harmony import */ var element_ui_lib_theme_chalk_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_theme_chalk_index_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var element_ui_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! element-ui/lib */ \"./node_modules/element-ui/lib/index.js\");\n/* harmony import */ var element_ui_lib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_CrxWorkSpace_vue_crx_extend_node_modules_core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/core-js/modules/es6.array.iterator.js */ \"./node_modules/core-js/modules/es6.array.iterator.js\");\n/* harmony import */ var D_CrxWorkSpace_vue_crx_extend_node_modules_core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(D_CrxWorkSpace_vue_crx_extend_node_modules_core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var D_CrxWorkSpace_vue_crx_extend_node_modules_core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/core-js/modules/es6.promise.js */ \"./node_modules/core-js/modules/es6.promise.js\");\n/* harmony import */ var D_CrxWorkSpace_vue_crx_extend_node_modules_core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(D_CrxWorkSpace_vue_crx_extend_node_modules_core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var D_CrxWorkSpace_vue_crx_extend_node_modules_core_js_modules_es6_object_assign_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/core-js/modules/es6.object.assign.js */ \"./node_modules/core-js/modules/es6.object.assign.js\");\n/* harmony import */ var D_CrxWorkSpace_vue_crx_extend_node_modules_core_js_modules_es6_object_assign_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(D_CrxWorkSpace_vue_crx_extend_node_modules_core_js_modules_es6_object_assign_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var D_CrxWorkSpace_vue_crx_extend_node_modules_core_js_modules_es7_promise_finally_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/core-js/modules/es7.promise.finally.js */ \"./node_modules/core-js/modules/es7.promise.finally.js\");\n/* harmony import */ var D_CrxWorkSpace_vue_crx_extend_node_modules_core_js_modules_es7_promise_finally_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(D_CrxWorkSpace_vue_crx_extend_node_modules_core_js_modules_es7_promise_finally_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _node_modules_vue_dist_vue_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../node_modules/vue/dist/vue.js */ \"./node_modules/vue/dist/vue.js\");\n/* harmony import */ var _node_modules_vue_dist_vue_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_dist_vue_js__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\n_node_modules_vue_dist_vue_js__WEBPACK_IMPORTED_MODULE_7___default.a.use(element_ui_lib__WEBPACK_IMPORTED_MODULE_2___default.a, {\n  size: 'small'\n});\nvar app = document.createElement(\"div\");\napp.setAttribute('id', 'app');\ndocument.querySelector('body > div.w.clearfix > div.item-content.clearfix > div.fl.item-left.mt20 > div.product-detail > div.btns.j-unbuy.clearfix').appendChild(app);\nnew _node_modules_vue_dist_vue_js__WEBPACK_IMPORTED_MODULE_7___default.a({\n  el: '#app',\n  data: function data() {\n    return {\n      visible: false\n    };\n  }\n});\nvar MyComponent = _node_modules_vue_dist_vue_js__WEBPACK_IMPORTED_MODULE_7___default.a.extend({\n  methods: {\n    copyGetGoodsInfo: function copyGetGoodsInfo() {\n      var marketInfo = document.querySelector('body > div.w.clearfix > div.item-content.clearfix > div.fr.item-right.mt20 > div.shop-info > div > ul > li:nth-last-child(1) > div.text').innerHTML.replace(/<a\\s[\\s\\S]*/g, '').trim();\n      var sectionNum = document.querySelector('body > div.w.clearfix > div.item-content.clearfix > div.fl.item-left.mt20 > div.product-detail > dl.summary > dd:nth-child(1) > div.value.ff-arial').innerHTML.trim();\n      var amount = document.querySelector('#j_iptAmount').value.trim();\n      var size = document.querySelector('#j-buy > dd:nth-child(2) > div.value.goods-choice > ul > li.selectSize.selected');\n      var color = document.querySelector('#j-buy > dd:nth-child(3) > div.value.color-choice > ul > li.selectColor.selected');\n\n      if (size === null || color === null) {\n        this.$message.error('请先选择sku信息');\n      } else {\n        size = size.getAttribute('data-size').trim();\n        color = color.getAttribute('data-color').trim();\n        var copy = document.querySelector('#copyInput') === null ? document.createElement('input') : document.querySelector('#copyInput');\n        copy.setAttribute('id', 'copyInput');\n        copy.setAttribute('style', 'color:#FFF;border:0px;');\n        copy.value = marketInfo + ' ' + sectionNum + ' ' + color + ' ' + size + ' * ' + amount;\n        document.querySelector('body > div.footer3_wrap > div > div.secur').appendChild(copy);\n        copy.select();\n        document.execCommand(\"Copy\");\n        this.$message.success('复制成功');\n      }\n    }\n  },\n  template: \"<el-button id=\\\"btn\\\" type=\\\"warning\\\" style=\\\"height:40px;font-size:14px\\\" @click=\\\"copyGetGoodsInfo\\\">\\u5FEB\\u901F\\u590D\\u5236</el-button>\"\n});\nnew MyComponent().$mount('#app');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGVudC92dmljR2V0R29vZHNOdW0uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC92dmljR2V0R29vZHNOdW0uanM/OGFhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlIGZyb20gJy4uLy4uL25vZGVfbW9kdWxlcy92dWUvZGlzdC92dWUuanMnXHJcblxyXG5pbXBvcnQgRWxlbWVudFVJIGZyb20gJ2VsZW1lbnQtdWknXHJcbmltcG9ydCAnZWxlbWVudC11aS9saWIvdGhlbWUtY2hhbGsvaW5kZXguY3NzJ1xyXG5cclxuVnVlLnVzZShFbGVtZW50VUksIHsgc2l6ZTogJ3NtYWxsJyB9KVxyXG5cclxudmFyIGFwcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmFwcC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FwcCcpXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBkaXYudy5jbGVhcmZpeCA+IGRpdi5pdGVtLWNvbnRlbnQuY2xlYXJmaXggPiBkaXYuZmwuaXRlbS1sZWZ0Lm10MjAgPiBkaXYucHJvZHVjdC1kZXRhaWwgPiBkaXYuYnRucy5qLXVuYnV5LmNsZWFyZml4JykuYXBwZW5kQ2hpbGQoYXBwKTtcclxuXHJcblxyXG5uZXcgVnVlKHtcclxuICAgIGVsOiAnI2FwcCcsXHJcbiAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4geyB2aXNpYmxlOiBmYWxzZSB9XHJcbiAgICB9XHJcbn0pXHJcblxyXG52YXIgTXlDb21wb25lbnQgPSBWdWUuZXh0ZW5kKHtcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBjb3B5R2V0R29vZHNJbmZvKCkge1xyXG4gICAgICAgICAgICBjb25zdCBtYXJrZXRJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keSA+IGRpdi53LmNsZWFyZml4ID4gZGl2Lml0ZW0tY29udGVudC5jbGVhcmZpeCA+IGRpdi5mci5pdGVtLXJpZ2h0Lm10MjAgPiBkaXYuc2hvcC1pbmZvID4gZGl2ID4gdWwgPiBsaTpudGgtbGFzdC1jaGlsZCgxKSA+IGRpdi50ZXh0JykuaW5uZXJIVE1MLnJlcGxhY2UoLzxhXFxzW1xcc1xcU10qL2csICcnKS50cmltKClcclxuICAgICAgICAgICAgY29uc3Qgc2VjdGlvbk51bSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBkaXYudy5jbGVhcmZpeCA+IGRpdi5pdGVtLWNvbnRlbnQuY2xlYXJmaXggPiBkaXYuZmwuaXRlbS1sZWZ0Lm10MjAgPiBkaXYucHJvZHVjdC1kZXRhaWwgPiBkbC5zdW1tYXJ5ID4gZGQ6bnRoLWNoaWxkKDEpID4gZGl2LnZhbHVlLmZmLWFyaWFsJykuaW5uZXJIVE1MLnRyaW0oKVxyXG4gICAgICAgICAgICBjb25zdCBhbW91bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjal9pcHRBbW91bnQnKS52YWx1ZS50cmltKClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBzaXplID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2otYnV5ID4gZGQ6bnRoLWNoaWxkKDIpID4gZGl2LnZhbHVlLmdvb2RzLWNob2ljZSA+IHVsID4gbGkuc2VsZWN0U2l6ZS5zZWxlY3RlZCcpXHJcbiAgICAgICAgICAgIGxldCBjb2xvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqLWJ1eSA+IGRkOm50aC1jaGlsZCgzKSA+IGRpdi52YWx1ZS5jb2xvci1jaG9pY2UgPiB1bCA+IGxpLnNlbGVjdENvbG9yLnNlbGVjdGVkJylcclxuICAgICAgICAgICAgaWYgKHNpemUgPT09IG51bGwgfHwgY29sb3IgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJG1lc3NhZ2UuZXJyb3IoJ+ivt+WFiOmAieaLqXNrdeS/oeaBrycpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzaXplID0gc2l6ZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2l6ZScpLnRyaW0oKVxyXG4gICAgICAgICAgICAgICAgY29sb3IgPSBjb2xvci5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sb3InKS50cmltKClcclxuICAgICAgICAgICAgICAgIHZhciBjb3B5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvcHlJbnB1dCcpID09PSBudWxsID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb3B5SW5wdXQnKVxyXG4gICAgICAgICAgICAgICAgY29weS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvcHlJbnB1dCcpXHJcbiAgICAgICAgICAgICAgICBjb3B5LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnY29sb3I6I0ZGRjtib3JkZXI6MHB4OycpXHJcbiAgICAgICAgICAgICAgICBjb3B5LnZhbHVlID0gbWFya2V0SW5mbyArICcgJyArIHNlY3Rpb25OdW0gKyAnICcgKyBjb2xvciArICcgJyArIHNpemUgKyAnICogJyArIGFtb3VudFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keSA+IGRpdi5mb290ZXIzX3dyYXAgPiBkaXYgPiBkaXYuc2VjdXInKS5hcHBlbmRDaGlsZChjb3B5KTtcclxuICAgICAgICAgICAgICAgIGNvcHkuc2VsZWN0KCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcIkNvcHlcIilcclxuICAgICAgICAgICAgICAgIHRoaXMuJG1lc3NhZ2Uuc3VjY2Vzcygn5aSN5Yi25oiQ5YqfJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZTogYDxlbC1idXR0b24gaWQ9XCJidG5cIiB0eXBlPVwid2FybmluZ1wiIHN0eWxlPVwiaGVpZ2h0OjQwcHg7Zm9udC1zaXplOjE0cHhcIiBAY2xpY2s9XCJjb3B5R2V0R29vZHNJbmZvXCI+5b+r6YCf5aSN5Yi2PC9lbC1idXR0b24+YFxyXG59KVxyXG5cclxubmV3IE15Q29tcG9uZW50KCkuJG1vdW50KCcjYXBwJylcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXRCQTtBQXdCQTtBQXpCQTtBQTRCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/content/vvicGetGoodsNum.js\n");

/***/ })

})