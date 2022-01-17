exports.ids = [8,1];
exports.modules = {

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=template&id=66a14d61&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"text-center"},[_vm._ssrNode("<hr> <br> "),_c('v-btn',{staticClass:"ma-2",attrs:{"outlined":""}},[_vm._v("\n    읽어주기"),_c('v-icon',{attrs:{"right":""}},[_vm._v(" mdi-bullhorn ")])],1),_vm._ssrNode(" "),_c('v-btn',{staticClass:"ma-2",attrs:{"outlined":""}},[_vm._v("\n    English"),_c('v-icon',{attrs:{"right":""}},[_vm._v(" mdi-ab-testing ")])],1),_vm._ssrNode(" <br><br> <h1 class=\"display-6\"><span>"+_vm._ssrEscape(_vm._s(_vm.title))+"</span><br id=\"lbbr\"><span id=\"txt\">Computer Science Lab (</span>CSL<span id=\"txt\">)</span>"+_vm._ssrEscape("\n    "+_vm._s(_vm.num)+"\n  ")+"</h1> <br> <hr>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Header.vue?vue&type=template&id=66a14d61&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Headervue_type_script_lang_js_ = ({
  props: ['title', 'num']
});
// CONCATENATED MODULE: ./components/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(22);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 3 modules
var VBtn = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(32);

// CONCATENATED MODULE: ./components/Header.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5f415dc8"
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VBtn: VBtn["a" /* default */],VIcon: VIcon["a" /* default */]})


/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/escapechar.vue?vue&type=template&id=328d1cba&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<br> <div><div><h1>이스케이프 문자란?</h1> <p>\n        이스케이프는 탈출하다를 뜻합니다. 이스케이프 캐릭터는\n        <mark>에러를 피하는 것을 도와줍니다</mark>.<br><br>\n\n        옆에 있는 예시를 보겠습니다.<br><br>\n\n        이 코드를 실행하면 에러가 생깁니다. 그 이유는 파이썬은 첫 번째 &quot;&quot;이\n        페어이고 다음의 &quot; 문자란...&quot;이 또 다른 문자라고 인식합니다.<br><br>\n\n        모든 이스케이프는 다 \\와 원하는 캐릭터를 사용합니다.\n      </p></div> <iframe src=\"https://trinket.io/embed/python/cb2f50d77b\" width=\"100%\" height=\"356\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" allowfullscreen=\"allowfullscreen\" loading=\"lazy\" style=\"margin: auto\"></iframe></div> <br><br> <div class=\"text-center\"><iframe width=\"80%\" height=\"315\" src=\"https://www.youtube.com/embed/X3D4VTMiLL4\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen=\"allowfullscreen\"></iframe></div> <br><br> "),_c('Header',{attrs:{"num":"11","title":"이스케이프 문자"}}),_vm._ssrNode(" <br><br><br><br> <div class=\"img-div\" style=\"display: flex\"><div style=\"margin: auto\"><h1>\\'와 \\&quot;</h1> <p>\n        \\'와 \\&quot;는 각각 ', &quot;와 충돌하지 않게 도와주는 문자입니다.<br><br>\n\n        \\'는 '의 이스케이프 케릭터로 다릅니다.<br><br>\n\n        그래서 '' 안에 에러 없이 \\'를 사용할 수 있습니다.<br><br>\n\n        \\&quot;도 &quot;&quot; 안에서 문제 없이 사용이 가능합니다.<br><br></p></div> <iframe src=\"https://trinket.io/embed/python/5d4e5680b4\" width=\"60%\" height=\"356\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" allowfullscreen=\"allowfullscreen\" loading=\"lazy\" style=\"margin: auto\"></iframe></div> <br> <mark>참고할 내용: 컴퓨터에 따라 W와 선이 그어진 모양으로 보일 수 있고 / 옆으로\n    뒤집어진 모양으로 보일 수도 있습니다.</mark> <br><br><br><br> <div class=\"img-div\" style=\"display: flex\"><div style=\"margin: auto\"><h1>\\n</h1> <p>\n        영어로 새로운 줄은 newline이라고 합니다. \\n는 엔터와 같습니다.<br><br>\n\n        &quot;&quot;와 ''안에는 항상 한 줄 안에만 값이 있어야 합니다.<br><br>\n\n        &quot;&quot;&quot; &quot;&quot;&quot; 또는 ''' '''를 사용하지 않고 \\n를 사용하여 새로운 줄을 만들 수\n        있습니다.<br><br></p></div> <iframe src=\"https://trinket.io/embed/python/c420acd5f8\" width=\"60%\" height=\"356\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" allowfullscreen=\"allowfullscreen\" loading=\"lazy\" style=\"margin: auto\"></iframe></div> <br><br><br><br> <div><div><h1>\\r</h1> <p>\n        return은 &quot;돌려주다&quot;라는 뜻입니다. 다시 말해, \\r를 사용하면 \\r 전에\n        있는 캐릭터가 없어집니다.<br><br>\n\n        더 흔한 사용은 저번에 있는 캐릭터를 지우고 새로운 캐릭터를 넣는\n        방법입니다.<br><br>\n\n        옆에서 이 코드를 실행할 수 없습니다. 기 이유는 end를 사용할 수 없기\n        때문입니다.<br><br>\n\n        가능하면 컴퓨터 VSCode에서 실행하세요.\n      </p></div> <iframe src=\"https://trinket.io/embed/python/e24eef8879\" width=\"100%\" height=\"356\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" allowfullscreen=\"allowfullscreen\" loading=\"lazy\" style=\"margin: auto\"></iframe></div> <br><br><br><br> <div><div><h1>\\t</h1> <p>\n        탭은 스페이스바를 4번 누른 것과 같습니다. 탭은 우리 자판에서 tab\n        버튼을 누르면 됩니다.<br><br> <code>\n          essay = &quot;안녕하세요.\\t저는 파이썬을 코딩할 줄 알아요...&quot;\n        </code></p></div></div> <br><br><br><br> <div><div><h1>r'문자' 형태</h1> <p>\n        파이썬에서 문자인데 이스케이프 문자를 사용하지 않는 문자를 만들고\n        싶다면 어떻게 할까요?<br><br>\n\n        문자 ''(따움표) 앞에 'r'을 붙이면 됩니다. r은 rawstring의 약자로\n        이스케이프 문자를 사용하지 않겠다고 선언하는 역할을 합니다.<br><br>\n\n        옆에 있는 예시를 보면 \\n은 새로운 줄로 출력되지 않고 그냥 \\n로\n        출력됩니다.\n      </p></div> <iframe src=\"https://trinket.io/embed/python/6366397170\" width=\"100%\" height=\"356\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" allowfullscreen=\"allowfullscreen\" loading=\"lazy\" style=\"margin: auto\"></iframe></div> <br><br><br><br> "),_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<a href=\"vscode\" style=\"text-decoration: none; float: left\">","</a>",[_c('v-btn',{staticClass:"ma-2",attrs:{"outlined":""}},[_c('v-icon',{attrs:{"left":""}},[_vm._v(" mdi-chevron-left ")]),_vm._v("Back\n      ")],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<a href=\"variable\" style=\"text-decoration: none; float: right\">","</a>",[_c('v-btn',{staticClass:"ma-2",attrs:{"outlined":""}},[_vm._v("\n        Next"),_c('v-icon',{attrs:{"right":""}},[_vm._v(" mdi-chevron-right ")])],1)],1)],2),_vm._ssrNode(" <br><br><br><br> "),_vm._ssrNode("<div class=\"quiz\">","</div>",[_vm._ssrNode("<h1>퀴즈 풀기!</h1> <hr> <br><br> <h3>새로운 줄을 &quot;&quot;와 ''에 넣을 수 있는 방법은?</h3> <div><input type=\"radio\" name=\"question-1-answers\" id=\"question-1-answers-A\" value=\"A\"> <label for=\"question-1-answers-A\">A) \\n </label></div> <div><input type=\"radio\" name=\"question-1-answers\" id=\"question-1-answers-B\" value=\"B\"> <label for=\"question-1-answers-B\">B) \\a </label></div> <div><input type=\"radio\" name=\"question-1-answers\" id=\"question-1-answers-C\" value=\"C\"> <label for=\"question-1-answers-C\">C) \\r </label></div> <div><input type=\"radio\" name=\"question-1-answers\" id=\"question-1-answers-D\" value=\"D\"> <label for=\"question-1-answers-D\">D) \\t </label></div> <br><br> "),_c('v-btn',{on:{"click":_vm.checkAnsewr}},[_vm._v(" 정답 확인 ")])],2),_vm._ssrNode(" <br><br>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/escapechar.vue?vue&type=template&id=328d1cba&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/escapechar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var escapecharvue_type_script_lang_js_ = ({
  name: 'EscapeChar',
  methods: {
    checkAnswer() {
      if (document.getElementById('question-1-answers-A').checked) {
        alert('1번 맞았습니다!');
      } else {
        alert('1번 틀렸습니다');
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/escapechar.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_escapecharvue_type_script_lang_js_ = (escapecharvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(22);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 3 modules
var VBtn = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(32);

// CONCATENATED MODULE: ./pages/escapechar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_escapecharvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7b74ab6a"
  
)

/* harmony default export */ var escapechar = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents_default()(component, {Header: __webpack_require__(109).default})


/* vuetify-loader */



installComponents_default()(component, {VBtn: VBtn["a" /* default */],VIcon: VIcon["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=escapechar.js.map