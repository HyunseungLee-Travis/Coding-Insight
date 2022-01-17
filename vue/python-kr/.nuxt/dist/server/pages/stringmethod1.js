exports.ids = [21,1];
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

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/stringmethod1.vue?vue&type=template&id=c755b40a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<br> <div class=\"text-center\"><iframe width=\"80%\" height=\"315\" src=\"https://www.youtube.com/embed/4_uGNu9IlCU\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen=\"allowfullscreen\"></iframe></div> <br><br> "),_c('Header',{attrs:{"num":"9","title":"문자열 메서드 1"}}),_vm._ssrNode(" <br><br><br><br> <div class=\"header-div\"><div><h1>문자의 길이 구하기</h1> <p>\n            가끔 파이썬에서 문자의 길이를 알아야 할 때가 있습니다.<br><br>\n            예를 들어 사용자가 새로운 암호를 input() 함수 안에 입력하고 있을 때,\n            파이썬 프로그램은 암호가 짧아서 조금 더 긴 암호를 넣으라고 물어 볼 수\n            있습니다.<br><br>\n            문자의 길이를 구하기 위해서 len() 함수를 사용할 수 있습니다.<br><br>\n            len은 영어로 '길이'를 뜻하는 length의 줄임말입니다.<br><br></p></div> <iframe src=\"https://trinket.io/embed/python/41e9ea9617\" width=\"100%\" height=\"356\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" allowfullscreen=\"allowfullscreen\" loading=\"lazy\" style=\"margin: auto\"></iframe></div> <br><br><br><br> <div><div><h1>문자 안에 부분문자열이 존재하는지 확인</h1> <p>\n            부분문자열은 문자 안의 문자입니다.<br><br>\n            예를 들어 문자 'abc'에는 부분문자열 'a','b'등이 존재합니다.<br><br>\n            문자 안에 부분문자열이 존재하는지 알기 위하여 우리는 'in'이라는\n            키워드를 사용할 수 있습니다.<br><br>\n            'in'은 한국어로 '안'이라는 뜻으로 &quot;abc가 abcdef 안에 있나요?&quot;라고\n            파이썬에게 물어보는 것과 같습니다.\n         </p></div> <iframe src=\"https://trinket.io/embed/python/a26965d6fd\" width=\"100%\" height=\"356\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" allowfullscreen=\"allowfullscreen\" loading=\"lazy\" style=\"margin: auto\"></iframe></div> <br><br><br><br> <div class=\"header-div bg-black text-white\"><div><h1>문자의 대소문자</h1> <p>\n            파이썬에서 대문자를 소문자로, 소문자를 대문자로 바꿀 수 있는 방법이\n            있습니다.<br><br>\n            title()은 책 제목 형식(책 제목 형식은 첫 번째 단어의 첫 번째 알파벳이\n            대문자인 형태)으로 바꿉니다.<br><br>\n            upper()은 모든 알파벳을 대문자로 전환합니다.<br><br>\n            lower()은 모든 알파벳을 소문자로 전환합니다.<br><br>\n            casefold()는 모든 알파벳을 소문자로 전환합니다. lower()와 조금 달리\n            영어가 아닌 문자도 소문자로 전환합니다.<br><br>\n            isupper()은 모든 알파벳이 대문자인지 알려줍니다.<br><br>\n            islower()은 모든 알파벳이 소문자인지 알려줍니다.<br><br>\n            istitle()은 책 제목 형식인지 알려주는 역할을 합니다.\n         </p></div> <iframe src=\"https://trinket.io/embed/python3/75c4671dd7\" width=\"100%\" height=\"300\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" allowfullscreen=\"allowfullscreen\" loading=\"lazy\" style=\"margin: auto\"></iframe></div> <br><br><br><br> "),_vm._ssrNode("<div class=\"img-div\" style=\"display: flex\">","</div>",[_vm._ssrNode("<div style=\"margin: auto\"><h1>문자에서 문자의 인덱스</h1> <p>\n            index() 메서드를 사용하여 문자 안에 또 다른 문자가 존재하는지 알 수\n            있습니다.<br><br> <code> print('abcdef'.index('abc')) </code>\n            만일 문자열이 문자 안에 없다면 에러가 생깁니다.\n         </p></div> "),_vm._ssrNode("<div style=\"margin: auto\">","</div>",[_c('v-img',{staticClass:"img-fluid",attrs:{"alt":"python-factory-picture","src":"https://cdn.shopify.com/s/files/1/0952/3604/products/indexbk2_9f2cbceb-31fb-4c4f-968b-2b9b7679152a.jpg?v=1593185298","max-width":"300px"}})],1)],2),_vm._ssrNode(" <br><br><br><br> <div class=\"img-div\" style=\"display: flex\"><div style=\"margin: auto\"><h1>파이썬 문자 센터링</h1> <p>\n            파이썬에서 센터링이란 문자를 ' '로 둘러싸는 것을 뜻합니다. ' '로\n            둘러싸여 있지만 가운데에 있는 것처럼 보입니다.<br><br> <code>\n            txt = &quot;Hello World&quot;<br>\n            x = txt.center(50)<br>\n            print(x)\n            </code>\n            center에서 첫 번째 숫자는 문자를 센터하는 ' '의 수이고 두 번째는\n            문자를 센터할 캐릭터입니다.<br><br> <code>\n            txt = &quot;Hello World&quot;<br>\n            x = txt.center(50, '|')<br>\n            print(x)\n            </code></p></div></div> <br><br> "),_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<a href=\"string\" style=\"text-decoration: none; float: left\">","</a>",[_c('v-btn',{staticClass:"ma-2",attrs:{"outlined":""}},[_c('v-icon',{attrs:{"left":""}},[_vm._v(" mdi-chevron-left ")]),_vm._v("\n            Back\n         ")],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<a href=\"stringmethod2\" style=\"text-decoration: none; float: right\">","</a>",[_c('v-btn',{staticClass:"ma-2",attrs:{"outlined":""}},[_vm._v("\n            Next\n            "),_c('v-icon',{attrs:{"right":""}},[_vm._v(" mdi-chevron-right ")])],1)],1)],2),_vm._ssrNode(" <br><br> "),_vm._ssrNode("<div class=\"quiz\">","</div>",[_vm._ssrNode("<h1>퀴즈 풀기!</h1> <hr> <br><br> <h3>파이썬에서 문자의 길이를 찾는 방법은?</h3> <div><input type=\"radio\" name=\"question-1-answers\" id=\"question-1-answers-A\" value=\"A\"> <label for=\"question-1-answers-A\">A) len </label></div> <div><input type=\"radio\" name=\"question-1-answers\" id=\"question-1-answers-B\" value=\"B\"> <label for=\"question-1-answers-B\">B) len() </label></div> <div><input type=\"radio\" name=\"question-1-answers\" id=\"question-1-answers-C\" value=\"C\"> <label for=\"question-1-answers-C\">C) length </label></div> <div><input type=\"radio\" name=\"question-1-answers\" id=\"question-1-answers-D\" value=\"D\"> <label for=\"question-1-answers-D\">D) length() </label></div> <br><br> <h3>문자 안에 부분문자열이 존재하는지 확인하는 방법은?</h3> <div><input type=\"radio\" name=\"question-2-answers\" id=\"question-2-answers-A\" value=\"A\"> <label for=\"question-2-answers-A\">A) == </label></div> <div><input type=\"radio\" name=\"question-2-answers\" id=\"question-2-answers-B\" value=\"B\"> <label for=\"question-2-answers-B\">B) += </label></div> <div><input type=\"radio\" name=\"question-2-answers\" id=\"question-2-answers-C\" value=\"C\"> <label for=\"question-2-answers-C\">C) in </label></div> <div><input type=\"radio\" name=\"question-2-answers\" id=\"question-2-answers-D\" value=\"D\"> <label for=\"question-2-answers-D\">D) &lt; </label></div> <br><br> <h3>어떤 값의 인덱스를 찾는 방법은?</h3> <div><input type=\"radio\" name=\"question-3-answers\" id=\"question-3-answers-A\" value=\"A\"> <label for=\"question-3-answers-A\">A) in </label></div> <div><input type=\"radio\" name=\"question-3-answers\" id=\"question-3-answers-B\" value=\"B\"> <label for=\"question-3-answers-B\">B) in() </label></div> <div><input type=\"radio\" name=\"question-3-answers\" id=\"question-3-answers-C\" value=\"C\"> <label for=\"question-3-answers-C\">C) index() </label></div> <div><input type=\"radio\" name=\"question-3-answers\" id=\"question-3-answers-D\" value=\"D\"> <label for=\"question-3-answers-D\">D) index </label></div> <br><br> <h3>문자를 대문자로 전환하는 방법과 소문자로 전환하는 방법은?</h3> <div><input type=\"radio\" name=\"question-4-answers\" id=\"question-4-answers-A\" value=\"A\"> <label for=\"question-4-answers-A\">A) upper(), lower() </label></div> <div><input type=\"radio\" name=\"question-4-answers\" id=\"question-4-answers-B\" value=\"B\"> <label for=\"question-4-answers-B\">B) toUpperCase(), toLowerCase()\n         </label></div> <div><input type=\"radio\" name=\"question-4-answers\" id=\"question-4-answers-C\" value=\"C\"> <label for=\"question-4-answers-C\">C) toU(), toL() </label></div> <div><input type=\"radio\" name=\"question-4-answers\" id=\"question-4-answers-D\" value=\"D\"> <label for=\"question-4-answers-D\">D) u(), l() </label></div> <br><br> <h3>파이썬 문자 센터링하는 방법은?</h3> <div><input type=\"radio\" name=\"question-5-answers\" id=\"question-5-answers-A\" value=\"A\"> <label for=\"question-5-answers-A\">A) center() </label></div> <div><input type=\"radio\" name=\"question-5-answers\" id=\"question-5-answers-B\" value=\"B\"> <label for=\"question-5-answers-B\">B) middle() </label></div> <div><input type=\"radio\" name=\"question-5-answers\" id=\"question-5-answers-C\" value=\"C\"> <label for=\"question-5-answers-C\">C) toCenter() </label></div> <div><input type=\"radio\" name=\"question-5-answers\" id=\"question-5-answers-D\" value=\"D\"> <label for=\"question-5-answers-D\">D) toMiddle() </label></div> <br><br> "),_c('v-btn',{on:{"click":_vm.checkAnswer}},[_vm._v("\n      정답 확인\n      ")])],2),_vm._ssrNode(" <br><br>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/stringmethod1.vue?vue&type=template&id=c755b40a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/stringmethod1.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var stringmethod1vue_type_script_lang_js_ = ({
  name: "StringMethod1",
  methods: {
    checkAnswer() {
      if (document.getElementById("question-1-answers-B").checked) {
        alert("1번 맞았습니다!");
      } else {
        alert("1번      틀렸습니다");
      }

      ;

      if (document.getElementById("question-3-answers-C").checked) {
        alert("3번 맞았습니다 :)");
      } else {
        alert("3번 틀렸습니다");
      }

      ;

      if (document.getElementById("question-4-answers-A").checked) {
        alert("4번 맞았습니다 :)");
      } else {
        alert("4번 틀렸습니다");
      }

      ;

      if (document.getElementById("question-5-answers-A").checked) {
        alert("5번 맞았습니다 :)");
      } else {
        alert("5번 틀렸습니다");
      }

      ;
    }

  }
});
// CONCATENATED MODULE: ./pages/stringmethod1.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_stringmethod1vue_type_script_lang_js_ = (stringmethod1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(22);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 3 modules
var VBtn = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(30);

// CONCATENATED MODULE: ./pages/stringmethod1.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_stringmethod1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "9f842b08"
  
)

/* harmony default export */ var stringmethod1 = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents_default()(component, {Header: __webpack_require__(109).default})


/* vuetify-loader */




installComponents_default()(component, {VBtn: VBtn["a" /* default */],VIcon: VIcon["a" /* default */],VImg: VImg["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=stringmethod1.js.map