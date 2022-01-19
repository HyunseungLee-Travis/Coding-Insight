(window.webpackJsonp=window.webpackJsonp||[]).push([[41,7,9,10],{347:function(_,t,n){"use strict";n.r(t);var e={props:["title","num"],data:function(){return{count:0}},methods:{toEnglish:function(){window.location="https://coding-insight.com/python/english"+("/"==$nuxt.$route.path?"/python":$nuxt.$route.path)+"-en.html"},speak:function(){if(this.count%2==0)try{var a=new SpeechSynthesisUtterance(document.body.innerText.substring(document.body.innerText.indexOf("읽어주기")+8));a.lang="ko-kr",speechSynthesis.speak(a)}catch(_){alert(":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다. 에러 ("+_+")")}else try{speechSynthesis.cancel()}catch(_){alert(":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다.")}this.count++}}},r=n(63),l=n(171),v=n.n(l),o=n(338),c=n(339),component=Object(r.a)(e,(function(){var _=this,t=_.$createElement,n=_._self._c||t;return n("div",{staticClass:"text-center"},[n("hr"),_._v(" "),n("br"),_._v(" "),n("v-btn",{staticClass:"ma-2",attrs:{outlined:""},on:{click:_.speak}},[_._v("\n    "+_._s(_.count%2==0?"읽어주기":"멈추기")),n("v-icon",{attrs:{right:""}},[_._v("\n      "+_._s(_.count%2==0?"mdi-bullhorn":"mdi-pause-octagon"))])],1),_._v(" "),n("v-btn",{staticClass:"ma-2",attrs:{outlined:""},on:{click:_.toEnglish}},[_._v("\n    English"),n("v-icon",{attrs:{right:""}},[_._v(" mdi-ab-testing ")])],1),_._v(" "),n("br"),n("br"),_._v(" "),n("h1",{staticClass:"display-6"},[n("span",[_._v(_._s(_.title))]),n("br",{attrs:{id:"lbbr"}}),n("span",{attrs:{id:"txt"}},[_._v("Computer Science Lab (")]),_._v("CSL"),n("span",{attrs:{id:"txt"}},[_._v(")")]),_._v("\n    "+_._s(_.num)+"\n  ")]),_._v(" "),n("br"),_._v(" "),n("hr")],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{VBtn:o.a,VIcon:c.a})},348:function(_,t,n){"use strict";n.r(t);var e={},r=n(63),component=Object(r.a)(e,(function(){var _=this,t=_.$createElement;_._self._c;return _._m(0)}),[function(){var _=this.$createElement,t=this._self._c||_;return t("div",[t("br"),t("br"),t("br"),t("br")])}],!1,null,null,null);t.default=component.exports},349:function(_,t,n){"use strict";n.r(t);var e={props:["flink","slink"]},r=n(63),l=n(171),v=n.n(l),o=n(338),c=n(339),component=Object(r.a)(e,(function(){var _=this,t=_.$createElement,n=_._self._c||t;return n("div",[n("NuxtLink",{staticStyle:{"text-decoration":"none",float:"left"},attrs:{to:"./"+_.flink}},[n("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[n("v-icon",{attrs:{left:""}},[_._v(" mdi-chevron-left ")]),_._v("Back\n    ")],1)],1),_._v(" "),n("NuxtLink",{staticStyle:{"text-decoration":"none",float:"right"},attrs:{to:"./"+_.slink}},[n("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[_._v("\n      Next"),n("v-icon",{attrs:{right:""}},[_._v(" mdi-chevron-right ")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{VBtn:o.a,VIcon:c.a})},598:function(_,t,n){"use strict";n.r(t);var e=n(63),component=Object(e.a)({},(function(){var _=this,t=_.$createElement,n=_._self._c||t;return n("div",[n("br"),_._v(" "),n("Header",{attrs:{num:"82",title:"기타 던더메서드"}}),_._v(" "),n("QuadSpace"),_._v(" "),_._m(0),_._v(" "),n("QuadSpace"),_._v(" "),_._m(1),_._v(" "),n("QuadSpace"),_._v(" "),_._m(2),_._v(" "),n("QuadSpace"),_._v(" "),_._m(3),_._v(" "),n("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/2dc115b16f",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}}),_._v(" "),n("QuadSpace"),_._v(" "),n("BeforeNextButton",{attrs:{flink:"additionaldundermethod",slink:"atexit"}}),_._v(" "),n("QuadSpace")],1)}),[function(){var _=this,t=_.$createElement,n=_._self._c||t;return n("div",[n("div",[n("h1",[_._v("숫자 던더 메서드")]),_._v(" "),n("p",[n("code",[_._v("\n          __neg__()"),n("br"),_._v("\n          __pos__()"),n("br"),_._v("\n          __abs__()"),n("br"),_._v("\n          __invert__() #- 또는 + 또는 ~"),n("br"),_._v("\n          __complex__()"),n("br"),_._v("\n          __int__()"),n("br"),_._v("\n          __float__()"),n("br"),_._v("\n          __index__()"),n("br"),_._v("\n          __round__()"),n("br"),_._v("\n          __trunc__()"),n("br"),_._v("\n          __floor__()"),n("br"),_._v("\n          __ceil__()\n        ")]),_._v("\n\n        위의 던더 메서드는 __없는 함수가 클래스에 실행이 될 때 따로 나만의\n        코드를 실행할 수 있게 해주는 던더 메서드입니다.\n      ")])])])},function(){var _=this,t=_.$createElement,n=_._self._c||t;return n("div",[n("div",[n("h1",[_._v("연산자 던더 메서드")]),_._v(" "),n("p",[n("code",[_._v("\n          __radd__(self, a) # +"),n("br"),_._v("\n          __rsub__(self, a) # -"),n("br"),_._v("\n          __rmul__(self, a) # *"),n("br"),_._v("\n          __rtruediv__(self, a) # /"),n("br"),_._v("\n          __rfloordiv__(self, a) # //"),n("br"),_._v("\n          __rmod__(self, a) # %"),n("br"),_._v("\n          __rpow__(self, a) # pow()"),n("br"),n("br"),_._v("\n\n          __iadd__(self, a) # 클래스+=av __isub__(self, a) # -="),n("br"),_._v("\n          __imul__(self, a) # *="),n("br"),_._v("\n          __itruediv__(self, a) # /="),n("br"),_._v("\n          __ifloordiv__(self, a) # //="),n("br"),_._v("\n          __imod__(self, a) # %="),n("br"),_._v("\n          __ipow__(self, other) # **="),n("br"),n("br"),_._v("\n\n          __lt__(self, other) # <= __ge__(self, other) #>=\n        ")]),_._v("\n\n        첫 번째는 self이고 두 번째는 클래스 + 연산자 + x 형태에서 x입니다.\n      ")])])])},function(){var _=this,t=_.$createElement,n=_._self._c||t;return n("div",[n("div",[n("h1",[_._v("더 다양한 던더 메서드")]),_._v(" "),n("p",[n("code",[_._v("\n          __contains__(self, ITEM)"),n("br"),_._v("\n          __reversed__(self)"),n("br"),_._v("\n          __iter__(self)"),n("br"),_._v("\n          __missing__(self, key) # __getitem__()에서 키가 없다"),n("br"),_._v("\n          __delitem__(self, key) # del dict[key]가 실행되면"),n("br"),_._v("\n          __dir__(self, key)"),n("br"),_._v("\n          __delattr__(self, name)"),n("br"),_._v("\n          __setattr__(self, name, value)"),n("br"),_._v("\n          __getattribute__(self, name)"),n("br"),_._v("\n          __bool__(self)\n        ")])])])])},function(){var _=this,t=_.$createElement,n=_._self._c||t;return n("div",[n("div",[n("h1",[_._v("__doc__")]),_._v(" "),n("p",[_._v("\n        함수를 만들 때, 파이썬에서는 맨 위에 한 줄 이상 주석을 달아 그것의\n        기능, 매개변수 등을 설명할 수 있습니다."),n("br"),n("br"),_._v("\n\n        그 설명을 __doc__를 사용하여 출력할 수 있습니다.\n      ")])])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{Header:n(347).default,QuadSpace:n(348).default,BeforeNextButton:n(349).default})}}]);