(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pkg_rust8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pkg/rust8 */ \"./pkg/rust8.js\");\n\n\n_pkg_rust8__WEBPACK_IMPORTED_MODULE_0__[\"greet\"](\"Jake\");\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./pkg/rust8.js":
/*!**********************!*\
  !*** ./pkg/rust8.js ***!
  \**********************/
/*! exports provided: __wbg_alert_b3c30adb816799f8, greet, __wbindgen_throw, __wbindgen_object_drop_ref */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(TextDecoder, TextEncoder) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_alert_b3c30adb816799f8\", function() { return __wbg_alert_b3c30adb816799f8; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"greet\", function() { return greet; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony import */ var _rust8_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rust8_bg */ \"./pkg/rust8_bg.wasm\");\n\n\nlet cachedTextDecoder = new TextDecoder('utf-8');\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _rust8_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_rust8_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nfunction __wbg_alert_b3c30adb816799f8(arg0, arg1) {\n    let varg0 = getStringFromWasm(arg0, arg1);\n    try {\n        alert(varg0);\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n\nlet cachedTextEncoder = new TextEncoder('utf-8');\n\nlet WASM_VECTOR_LEN = 0;\n\nlet passStringToWasm;\nif (typeof cachedTextEncoder.encodeInto === 'function') {\n    passStringToWasm = function(arg) {\n\n        if (typeof(arg) !== 'string') throw new Error('expected a string argument');\n\n        let size = arg.length;\n        let ptr = _rust8_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](size);\n        let writeOffset = 0;\n        while (true) {\n            const view = getUint8Memory().subarray(ptr + writeOffset, ptr + size);\n            const { read, written } = cachedTextEncoder.encodeInto(arg, view);\n            arg = arg.substring(read);\n            writeOffset += written;\n            if (arg.length === 0) {\n                break;\n            }\n            ptr = _rust8_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"](ptr, size, size * 2);\n            size *= 2;\n        }\n        WASM_VECTOR_LEN = writeOffset;\n        return ptr;\n    };\n} else {\n    passStringToWasm = function(arg) {\n\n        if (typeof(arg) !== 'string') throw new Error('expected a string argument');\n\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = _rust8_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](buf.length);\n        getUint8Memory().set(buf, ptr);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    };\n}\n/**\n* @param {string} name\n* @returns {void}\n*/\nfunction greet(name) {\n    const ptr0 = passStringToWasm(name);\n    const len0 = WASM_VECTOR_LEN;\n    try {\n        return _rust8_bg__WEBPACK_IMPORTED_MODULE_0__[\"greet\"](ptr0, len0);\n\n    } finally {\n        _rust8_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](ptr0, len0 * 1);\n\n    }\n\n}\n\nfunction __wbindgen_throw(ptr, len) {\n    throw new Error(getStringFromWasm(ptr, len));\n}\n\nconst heap = new Array(32);\n\nheap.fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nlet heap_next = heap.length;\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction __wbindgen_object_drop_ref(i) { dropObject(i); }\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! text-encoding */ \"./node_modules/text-encoding/index.js\")[\"TextDecoder\"], __webpack_require__(/*! text-encoding */ \"./node_modules/text-encoding/index.js\")[\"TextEncoder\"]))\n\n//# sourceURL=webpack:///./pkg/rust8.js?");

/***/ }),

/***/ "./pkg/rust8_bg.wasm":
/*!***************************!*\
  !*** ./pkg/rust8_bg.wasm ***!
  \***************************/
/*! exports provided: memory, __rustc_debug_gdb_scripts_section__, greet, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./rust8 */ \"./pkg/rust8.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./pkg/rust8_bg.wasm?");

/***/ })

}]);