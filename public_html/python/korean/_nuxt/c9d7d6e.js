(window.webpackJsonp=window.webpackJsonp||[]).push([[14,2,3,4],{445:function(t,n,e){"use strict";e.r(n);var r={props:["title","num"],data:function(){return{count:0}},methods:{debuga:function(){window.location="https://coding-insight.com/python/english"+$nuxt.$route.path+"-en.html"},speak:function(){if(this.count%2==0)try{var a=new SpeechSynthesisUtterance(document.body.innerText.substring(document.body.innerText.indexOf("읽어주기")+8));a.lang="ko-kr",speechSynthesis.speak(a)}catch(t){alert(":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다. 에러 ("+t+")")}else try{speechSynthesis.cancel()}catch(t){alert(":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다.")}this.count++}}},c=e(94),o=e(134),v=e.n(o),l=e(216),d=e(198),component=Object(c.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"text-center"},[e("hr"),t._v(" "),e("br"),t._v(" "),e("v-btn",{staticClass:"ma-2",attrs:{outlined:""},on:{click:t.speak}},[t._v("\n    "+t._s(t.count%2==0?"읽어주기":"멈추기")),e("v-icon",{attrs:{right:""}},[t._v("\n      "+t._s(t.count%2==0?"mdi-bullhorn":"mdi-pause-octagon"))])],1),t._v(" "),e("v-btn",{staticClass:"ma-2",attrs:{outlined:""},on:{click:t.debuga}},[t._v("\n    English"),e("v-icon",{attrs:{right:""}},[t._v(" mdi-ab-testing ")])],1),t._v(" "),e("br"),e("br"),t._v(" "),e("h1",{staticClass:"display-6"},[e("span",[t._v(t._s(t.title))]),e("br",{attrs:{id:"lbbr"}}),e("span",{attrs:{id:"txt"}},[t._v("Computer Science Lab (")]),t._v("CSL"),e("span",{attrs:{id:"txt"}},[t._v(")")]),t._v("\n    "+t._s(t.num)+"\n  ")]),t._v(" "),e("br"),t._v(" "),e("hr")],1)}),[],!1,null,null,null);n.default=component.exports;v()(component,{VBtn:l.a,VIcon:d.a})},446:function(t,n,e){"use strict";e.r(n);var r={},c=e(94),component=Object(c.a)(r,(function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("br"),n("br"),n("br"),n("br")])}],!1,null,null,null);n.default=component.exports},447:function(t,n,e){"use strict";e.r(n);var r={props:["flink","slink"]},c=e(94),o=e(134),v=e.n(o),l=e(216),d=e(198),component=Object(c.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("NuxtLink",{staticStyle:{"text-decoration":"none",float:"left"},attrs:{to:"./"+t.flink}},[e("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[e("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),t._v("Back\n    ")],1)],1),t._v(" "),e("NuxtLink",{staticStyle:{"text-decoration":"none",float:"right"},attrs:{to:"./"+t.slink}},[e("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[t._v("\n      Next"),e("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports;v()(component,{VBtn:l.a,VIcon:d.a})},555:function(t,n,e){"use strict";e.r(n);var r=e(94),c=e(134),o=e.n(c),v=e(167),component=Object(r.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("br"),t._v(" "),e("div",{staticClass:"img-div",attrs:{class:"img-div"}},[t._m(0),t._v(" "),e("div",{staticClass:"m-auto"},[e("v-img",{staticClass:"img-fluid",attrs:{alt:"python-factory-picture",src:"data:image/png;base64,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",width:"100px"}})],1)]),t._v(" "),e("br"),e("br"),t._v(" "),e("Header",{attrs:{num:"70",title:"비동기"}}),t._v(" "),e("QuadSpace"),t._v(" "),t._m(1),t._v(" "),e("QuadSpace"),t._v(" "),t._m(2),t._v(" "),e("QuadSpace"),t._v(" "),e("BeforeNextButton",{attrs:{flink:"newline",slink:"asyncio"}}),t._v(" "),e("QuadSpace")],1)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h1",[t._v("비동기란?")]),t._v(" "),e("p",[t._v("\n        밥을 먹는데 숟가락과 포크를 같이 사용할 수 있고 하나씩 사용할 수도\n        있습니다."),e("br"),e("br"),t._v("\n\n        비동기란 "),e("mark",[t._v("'동시에 일어나지 않는다'")]),t._v("를 뜻입니다."),e("br"),e("br"),t._v("\n\n        파이썬에서 비동기는 어떤 두 작업이 서로에게 영향을 주지 않게 하는\n        모듈입니다. 이를 이용하여 여러 문제들을 해결할 수 있습니다.\n      ")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",[e("h1",[t._v("비동기 모듈")]),t._v(" "),e("p",[t._v("\n        모듈을 가지고 오기 위하여 다음 코드를 실행하겠습니다."),e("br"),e("br"),t._v(" "),e("code",[t._v(" import asyncio ")])])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",[e("h1",[t._v("비동기 설명")]),t._v(" "),e("p",[t._v("\n        다음 예시를 보겠습니다."),e("br"),e("br"),t._v(" "),e("code",[t._v('\n          print("Hello")'),e("br"),t._v('\n          print("World")\n        ')]),t._v('\n\n        위의 예시에서는 print("Hello")가 먼저 실행이 되고 다음에\n        print("Word")가 실행됩니다. 파이썬은 항상\n        '),e("mark",[t._v("한 함수를 실행하고 끝날 때까지 기다리고 넘어갑니다")]),t._v("."),e("br"),e("br"),t._v("\n\n        하지만 만일 실행하는데 아주아주 오래 걸리는 코드가 있다고 가정을\n        해봅시다."),e("br"),e("br"),t._v("\n\n        사용자가 앱을 실행하는데 오래 걸리는 함수 때문에 아무것도 할 수 없을\n        수 있습니다."),e("br"),e("br"),t._v("\n\n        하지만 asyncio를 사용한다면 오래 걸리는 함수를 동시에 실행하는 것이\n        가능합니다.\n      ")])])])}],!1,null,null,null);n.default=component.exports;o()(component,{Header:e(445).default,QuadSpace:e(446).default,BeforeNextButton:e(447).default}),o()(component,{VImg:v.a})}}]);