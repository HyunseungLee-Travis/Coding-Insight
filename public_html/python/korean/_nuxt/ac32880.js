(window.webpackJsonp=window.webpackJsonp||[]).push([[12,2,3,4],{445:function(t,e,n){"use strict";n.r(e);var r={props:["title","num"],data:function(){return{count:0}},methods:{debuga:function(){window.location="https://coding-insight.com/python/english"+$nuxt.$route.path+"-en.html"},speak:function(){if(this.count%2==0)try{var a=new SpeechSynthesisUtterance(document.body.innerText.substring(document.body.innerText.indexOf("읽어주기")+8));a.lang="ko-kr",speechSynthesis.speak(a)}catch(t){alert(":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다. 에러 ("+t+")")}else try{speechSynthesis.cancel()}catch(t){alert(":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다.")}this.count++}}},l=n(94),c=n(134),o=n.n(c),v=n(216),h=n(198),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("hr"),t._v(" "),n("br"),t._v(" "),n("v-btn",{staticClass:"ma-2",attrs:{outlined:""},on:{click:t.speak}},[t._v("\n    "+t._s(t.count%2==0?"읽어주기":"멈추기")),n("v-icon",{attrs:{right:""}},[t._v("\n      "+t._s(t.count%2==0?"mdi-bullhorn":"mdi-pause-octagon"))])],1),t._v(" "),n("v-btn",{staticClass:"ma-2",attrs:{outlined:""},on:{click:t.debuga}},[t._v("\n    English"),n("v-icon",{attrs:{right:""}},[t._v(" mdi-ab-testing ")])],1),t._v(" "),n("br"),n("br"),t._v(" "),n("h1",{staticClass:"display-6"},[n("span",[t._v(t._s(t.title))]),n("br",{attrs:{id:"lbbr"}}),n("span",{attrs:{id:"txt"}},[t._v("Computer Science Lab (")]),t._v("CSL"),n("span",{attrs:{id:"txt"}},[t._v(")")]),t._v("\n    "+t._s(t.num)+"\n  ")]),t._v(" "),n("br"),t._v(" "),n("hr")],1)}),[],!1,null,null,null);e.default=component.exports;o()(component,{VBtn:v.a,VIcon:h.a})},446:function(t,e,n){"use strict";n.r(e);var r={},l=n(94),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("br"),e("br"),e("br"),e("br")])}],!1,null,null,null);e.default=component.exports},447:function(t,e,n){"use strict";n.r(e);var r={props:["flink","slink"]},l=n(94),c=n(134),o=n.n(c),v=n(216),h=n(198),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NuxtLink",{staticStyle:{"text-decoration":"none",float:"left"},attrs:{to:"./"+t.flink}},[n("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[n("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),t._v("Back\n    ")],1)],1),t._v(" "),n("NuxtLink",{staticStyle:{"text-decoration":"none",float:"right"},attrs:{to:"./"+t.slink}},[n("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[t._v("\n      Next"),n("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;o()(component,{VBtn:v.a,VIcon:h.a})},553:function(t,e,n){"use strict";n.r(e);var r=n(94),l=n(134),c=n.n(l),o=n(167),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("br"),t._v(" "),n("div",{staticClass:"d-flex img-div"},[t._m(0),t._v(" "),n("div",{staticClass:"m-auto"},[n("v-img",{staticClass:"img-fluid",attrs:{alt:"python-factory-picture",src:"data:image/png;base64,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","max-width":"200px"}})],1)]),t._v(" "),n("Header",{attrs:{num:"83",title:"atexit"}}),t._v(" "),n("QuadSpace"),t._v(" "),t._m(1),t._v(" "),n("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/2390219212",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}}),t._v(" "),n("QuadSpace"),t._v(" "),t._m(2),t._v(" "),n("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/ee9dc05bf9",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}}),t._v(" "),n("QuadSpace"),t._v(" "),n("BeforeNextButton",{attrs:{flink:"etcdundermethod",slink:"coroutine"}}),t._v(" "),n("QuadSpace")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{margin:"auto",padding:"10px"}},[n("h1",[t._v("파이썬 함수 등록")]),t._v(" "),n("p",[t._v("\n        파이썬에서 어떤 코드가 실행이 끝나면 어떤 함수를 실행하는 것이\n        가능합니다."),n("br"),n("br"),t._v("\n\n        atexit 모듈을 사용하여 "),n("mark",[t._v("함수를 '등록'")]),t._v("할 수 있습니다."),n("br"),n("br"),t._v("\n\n        만일 atexit 모듈을 사용하지 않고 그냥 파일 끝에 코드를 넣는다면\n        exit(), quit() 등 그 상황에서 끝내버리는 함수들을 대비할 수\n        없습니다."),n("br"),n("br"),t._v("\n\n        그래서 atexit 모듈이 존재합니다.\n      ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("h1",[t._v("register()")]),t._v(" "),n("p",[t._v("\n        파이썬을 이용하여 파일 에디터를 만들어보겠습니다."),n("br"),n("br"),t._v("\n\n        만일 프로그램이 실행되고 있어서 파일을 닫지 못하면 어떻게 될까요?"),n("br"),n("br"),t._v("\n\n        파일을 아직 쓰고 있는데 "),n("kbd",[t._v("ctrl+c")]),t._v("를 누르면 에러가 생길 수\n        있습니다."),n("br"),n("br"),t._v("\n\n        atexit.register() 메서드를 이용하여 파일 작업을 마무리 지울 수\n        있습니다.\n      ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("h1",[t._v("atexit 데코레이터")]),t._v(" "),n("p",[t._v("\n        데코레이터를 함수에 붙이면 그 함수는 프로그램이 끝날 때 실행이 됩니다.\n      ")])])])}],!1,null,null,null);e.default=component.exports;c()(component,{Header:n(445).default,QuadSpace:n(446).default,BeforeNextButton:n(447).default}),c()(component,{VImg:o.a})}}]);