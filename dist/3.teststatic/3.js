webpackJsonp([3],{

/***/ 10:
/***/ function(module, exports) {

	"use strict";

	// <template>
	//     this is the compoent base.
	// </template>
	//
	// <script>
	module.exports = {};
	// </script>
	//

/***/ },

/***/ 16:
/***/ function(module, exports) {

	module.exports = "\n    this is the compoent base.\n";

/***/ },

/***/ 19:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(10)
	__vue_template__ = __webpack_require__(16)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (true) {(function () {  module.hot.accept()
	  var hotAPI = __webpack_require__(1)
	  hotAPI.install(__webpack_require__(2), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/banama/work/vue-webpack-init/components/base-com.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }

});