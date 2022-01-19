(window.webpackJsonp=window.webpackJsonp||[]).push([[43,7,9,10],{347:function(t,n,e){"use strict";e.r(n);var r={props:["title","num"],data:function(){return{count:0}},methods:{toEnglish:function(){window.location="https://coding-insight.com/python/english"+("/"==$nuxt.$route.path?"/python":$nuxt.$route.path)+"-en.html"},speak:function(){if(this.count%2==0)try{var a=new SpeechSynthesisUtterance(document.body.innerText.substring(document.body.innerText.indexOf("읽어주기")+8));a.lang="ko-kr",speechSynthesis.speak(a)}catch(t){alert(":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다. 에러 ("+t+")")}else try{speechSynthesis.cancel()}catch(t){alert(":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다.")}this.count++}}},l=e(63),c=e(171),o=e.n(c),v=e(338),h=e(339),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"text-center"},[e("hr"),t._v(" "),e("br"),t._v(" "),e("v-btn",{staticClass:"ma-2",attrs:{outlined:""},on:{click:t.speak}},[t._v("\n    "+t._s(t.count%2==0?"읽어주기":"멈추기")),e("v-icon",{attrs:{right:""}},[t._v("\n      "+t._s(t.count%2==0?"mdi-bullhorn":"mdi-pause-octagon"))])],1),t._v(" "),e("v-btn",{staticClass:"ma-2",attrs:{outlined:""},on:{click:t.toEnglish}},[t._v("\n    English"),e("v-icon",{attrs:{right:""}},[t._v(" mdi-ab-testing ")])],1),t._v(" "),e("br"),e("br"),t._v(" "),e("h1",{staticClass:"display-6"},[e("span",[t._v(t._s(t.title))]),e("br",{attrs:{id:"lbbr"}}),e("span",{attrs:{id:"txt"}},[t._v("Computer Science Lab (")]),t._v("CSL"),e("span",{attrs:{id:"txt"}},[t._v(")")]),t._v("\n    "+t._s(t.num)+"\n  ")]),t._v(" "),e("br"),t._v(" "),e("hr")],1)}),[],!1,null,null,null);n.default=component.exports;o()(component,{VBtn:v.a,VIcon:h.a})},348:function(t,n,e){"use strict";e.r(n);var r={},l=e(63),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("br"),n("br"),n("br"),n("br")])}],!1,null,null,null);n.default=component.exports},349:function(t,n,e){"use strict";e.r(n);var r={props:["flink","slink"]},l=e(63),c=e(171),o=e.n(c),v=e(338),h=e(339),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("NuxtLink",{staticStyle:{"text-decoration":"none",float:"left"},attrs:{to:"./"+t.flink}},[e("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[e("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),t._v("Back\n    ")],1)],1),t._v(" "),e("NuxtLink",{staticStyle:{"text-decoration":"none",float:"right"},attrs:{to:"./"+t.slink}},[e("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[t._v("\n      Next"),e("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports;o()(component,{VBtn:v.a,VIcon:h.a})},599:function(t,n,e){"use strict";e.r(n);var r=e(63),component=Object(r.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("br"),t._v(" "),e("Header",{attrs:{num:"39",title:"다양한 함수"}}),t._v(" "),e("QuadSpace"),t._v(" "),t._m(0),t._v(" "),e("QuadSpace"),t._v(" "),t._m(1),t._v(" "),e("QuadSpace"),t._v(" "),e("BeforeNextButton",{attrs:{flink:"oneliner",slink:"module"}}),t._v(" "),e("QuadSpace")],1)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",[e("h1",[t._v("quit()과 exit()")]),t._v(" "),e("p",[t._v("\n        파이썬 코드가 계속 실행이 될 때가 있습니다."),e("br"),e("br"),t._v("\n        예를 들어 코드가 무한으로 실행되는 while 문이나 매우 오래 걸리는 for\n        문이 있다고 가정을 해보겠습니다."),e("br"),e("br"),t._v("\n        이와 같은 상황을 대비하기 위하여 중간에 프로그램을 멈추는 것이\n        가능합니다."),e("br"),e("br"),t._v("\n        quit() 대신 exit()을 사용해도 됩니다. quit과 exit은 같습니다.\n      ")])]),t._v(" "),e("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/8b75210243",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}})])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",[e("h1",[t._v("help()")]),t._v(" "),e("p",[t._v("\n        파이썬에서는 아주 좋은 도움말 프로그램이 있습니다."),e("br"),e("br"),t._v("\n        도움 프로그램을 실행하기 위하여 help() 함수를 사용할 수 있습니다.\n      ")])]),t._v(" "),e("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/ea0c810c1a",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}})])}],!1,null,null,null);n.default=component.exports;installComponents(component,{Header:e(347).default,QuadSpace:e(348).default,BeforeNextButton:e(349).default})}}]);