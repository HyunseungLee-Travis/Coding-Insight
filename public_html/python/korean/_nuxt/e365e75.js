(window.webpackJsonp=window.webpackJsonp||[]).push([[23,3,4,5],{418:function(t,n,e){"use strict";e.r(n);var r={props:["title","num"],data:function(){return{count:0}},methods:{debuga:function(){window.location="https://coding-insight.com/python/english"+$nuxt.$route.path+"-en.html"},speak:function(){if(this.count%2==0)try{var a=new SpeechSynthesisUtterance(document.body.innerText.substring(document.body.innerText.indexOf("읽어주기")+8));a.lang="ko-kr",speechSynthesis.speak(a)}catch(t){alert(":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다. 에러 ("+t+")")}else try{speechSynthesis.cancel()}catch(t){alert(":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다.")}this.count++}}},l=e(91),c=e(124),o=e.n(c),v=e(207),d=e(182),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"text-center"},[e("hr"),t._v(" "),e("br"),t._v(" "),e("v-btn",{staticClass:"ma-2",attrs:{outlined:""},on:{click:t.speak}},[t._v("\n    "+t._s(t.count%2==0?"읽어주기":"멈추기")),e("v-icon",{attrs:{right:""}},[t._v("\n      "+t._s(t.count%2==0?"mdi-bullhorn":"mdi-pause-octagon"))])],1),t._v(" "),e("v-btn",{staticClass:"ma-2",attrs:{outlined:""},on:{click:t.debuga}},[t._v("\n    English"),e("v-icon",{attrs:{right:""}},[t._v(" mdi-ab-testing ")])],1),t._v(" "),e("br"),e("br"),t._v(" "),e("h1",{staticClass:"display-6"},[e("span",[t._v(t._s(t.title))]),e("br",{attrs:{id:"lbbr"}}),e("span",{attrs:{id:"txt"}},[t._v("Computer Science Lab (")]),t._v("CSL"),e("span",{attrs:{id:"txt"}},[t._v(")")]),t._v("\n    "+t._s(t.num)+"\n  ")]),t._v(" "),e("br"),t._v(" "),e("hr")],1)}),[],!1,null,null,null);n.default=component.exports;o()(component,{VBtn:v.a,VIcon:d.a})},419:function(t,n,e){"use strict";e.r(n);var r={},l=e(91),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("br"),n("br"),n("br"),n("br")])}],!1,null,null,null);n.default=component.exports},420:function(t,n,e){"use strict";e.r(n);var r={props:["flink","slink"]},l=e(91),c=e(124),o=e.n(c),v=e(207),d=e(182),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("NuxtLink",{staticStyle:{"text-decoration":"none",float:"left"},attrs:{to:"./"+t.flink}},[e("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[e("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),t._v("Back\n    ")],1)],1),t._v(" "),e("NuxtLink",{staticStyle:{"text-decoration":"none",float:"right"},attrs:{to:"./"+t.slink}},[e("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[t._v("\n      Next"),e("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports;o()(component,{VBtn:v.a,VIcon:d.a})},558:function(t,n,e){"use strict";e.r(n);var r=e(91),l=e(124),c=e.n(l),o=e(159),component=Object(r.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticStyle:{display:"flex"}},[t._m(0),t._v(" "),e("div",{staticStyle:{margin:"auto"}},[e("v-img",{staticClass:"img-fluid",attrs:{alt:"python-factory-picture",src:"https://i.pinimg.com/736x/1c/86/84/1c8684b06bc7ad1e1f6b7b0099d87300.jpg","max-width":"200px"}})],1)]),t._v(" "),e("br"),e("br"),t._v(" "),e("Header",{attrs:{num:"84",title:"코루틴"}}),t._v(" "),e("QuadSpace"),t._v(" "),t._m(1),t._v(" "),e("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/fe3f6eff37",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}}),t._v(" "),e("QuadSpace"),t._v(" "),e("BeforeNextButton",{attrs:{flink:"atexit",slink:"spam"}}),t._v(" "),e("QuadSpace")],1)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticStyle:{margin:"auto"}},[e("h1",[t._v("코루틴 만들기")]),t._v(" "),e("p",[t._v("\n        아주 아주 오래전에 for 반복문에서 yield 키워드에 대하여 배웠습니다."),e("br"),e("br"),t._v("\n\n        하지만 yield 키워드가 값만 돌려주는 것이 아니라 코루틴이라는 것을 쉽게\n        만들 수 있게 도와줍니다.\n      ")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",[e("h1",[t._v("yield - 코루틴")]),t._v(" "),e("p",[t._v("\n        코루틴은 먼저 함수를 만듭니다. 다음에, 변수를 만들고 안에 while\n        반복문을 사용하여 yield a (a 값 찾기)가 기본 모형입니다."),e("br"),e("br"),t._v("\n\n        먼저, 변수 안에 코루틴을 저장하고 기본값을 입력합니다."),e("br"),e("br"),t._v("\n\n        다음에, __next__() 함수를 사용하여 코루틴을 실행시킵니다."),e("br"),e("br"),t._v("\n\n        send() 메서드를 이용하면 yield에서 입력을 받을 수 있습니다."),e("br"),e("br"),t._v("\n\n        마지막으로 close()를 사용하여 코루틴을 끝냅니다.\n      ")])])])}],!1,null,null,null);n.default=component.exports;c()(component,{Header:e(418).default,QuadSpace:e(419).default,BeforeNextButton:e(420).default}),c()(component,{VImg:o.a})}}]);