(window.webpackJsonp=window.webpackJsonp||[]).push([[31,3,4,5],{418:function(t,e,n){"use strict";n.r(e);var r={props:["title","num"],data:function(){return{count:0}},methods:{debuga:function(){window.location="https://coding-insight.com/python/english"+$nuxt.$route.path+"-en.html"},speak:function(){if(this.count%2==0)try{var a=new SpeechSynthesisUtterance(document.body.innerText.substring(document.body.innerText.indexOf("읽어주기")+8));a.lang="ko-kr",speechSynthesis.speak(a)}catch(t){alert(":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다. 에러 ("+t+")")}else try{speechSynthesis.cancel()}catch(t){alert(":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다.")}this.count++}}},l=n(91),c=n(124),_=n.n(c),o=n(207),v=n(182),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("hr"),t._v(" "),n("br"),t._v(" "),n("v-btn",{staticClass:"ma-2",attrs:{outlined:""},on:{click:t.speak}},[t._v("\n    "+t._s(t.count%2==0?"읽어주기":"멈추기")),n("v-icon",{attrs:{right:""}},[t._v("\n      "+t._s(t.count%2==0?"mdi-bullhorn":"mdi-pause-octagon"))])],1),t._v(" "),n("v-btn",{staticClass:"ma-2",attrs:{outlined:""},on:{click:t.debuga}},[t._v("\n    English"),n("v-icon",{attrs:{right:""}},[t._v(" mdi-ab-testing ")])],1),t._v(" "),n("br"),n("br"),t._v(" "),n("h1",{staticClass:"display-6"},[n("span",[t._v(t._s(t.title))]),n("br",{attrs:{id:"lbbr"}}),n("span",{attrs:{id:"txt"}},[t._v("Computer Science Lab (")]),t._v("CSL"),n("span",{attrs:{id:"txt"}},[t._v(")")]),t._v("\n    "+t._s(t.num)+"\n  ")]),t._v(" "),n("br"),t._v(" "),n("hr")],1)}),[],!1,null,null,null);e.default=component.exports;_()(component,{VBtn:o.a,VIcon:v.a})},419:function(t,e,n){"use strict";n.r(e);var r={},l=n(91),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("br"),e("br"),e("br"),e("br")])}],!1,null,null,null);e.default=component.exports},420:function(t,e,n){"use strict";n.r(e);var r={props:["flink","slink"]},l=n(91),c=n(124),_=n.n(c),o=n(207),v=n(182),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NuxtLink",{staticStyle:{"text-decoration":"none",float:"left"},attrs:{to:"./"+t.flink}},[n("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[n("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),t._v("Back\n    ")],1)],1),t._v(" "),n("NuxtLink",{staticStyle:{"text-decoration":"none",float:"right"},attrs:{to:"./"+t.slink}},[n("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[t._v("\n      Next"),n("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;_()(component,{VBtn:o.a,VIcon:v.a})},563:function(t,e,n){"use strict";n.r(e);var r=n(91),l=n(124),c=n.n(l),_=n(159),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("br"),t._v(" "),n("div",{staticClass:"img-div",staticStyle:{display:"flex"}},[t._m(0),t._v(" "),n("div",{staticStyle:{margin:"auto"}},[n("v-img",{staticClass:"img-fluid",attrs:{alt:"python-factory-picture",src:"https://media.istockphoto.com/vectors/magic-wand-line-icon-vector-id1164851035?k=6&m=1164851035&s=612x612&w=0&h=ihapeRsHBDDFTTa7CxId_I5ExnbGrJug8aQEVOOviW4=",width:"300px"}})],1)]),t._v(" "),n("br"),n("br"),t._v(" "),n("Header",{attrs:{num:"80",title:"던더메서드"}}),t._v(" "),n("QuadSpace"),t._v(" "),t._m(1),t._v(" "),n("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/f4dfd29f8c",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}}),t._v(" "),n("QuadSpace"),t._v(" "),t._m(2),t._v(" "),n("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/3c64d6b06e",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}}),t._v(" "),n("QuadSpace"),t._v(" "),t._m(3),t._v(" "),n("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/5505e2e889",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}}),t._v(" "),n("QuadSpace"),t._v(" "),n("BeforeNextButton",{attrs:{flink:"requestmethod",slink:"additionaldundermethod"}}),t._v(" "),n("QuadSpace")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{margin:"auto"}},[n("h1",[t._v("던더 메서드란?")]),t._v(" "),n("p",[t._v("\n        클래스 시간에 __변수 이름 형태인 클래스 변수를 배웠습니다."),n("br"),n("br"),t._v("\n        파이썬에서 "),n("mark",[t._v("__를 함수 이름 앞과 뒤에 붙인 것")]),t._v("을 던더라고\n        합니다. 매직 함수라고도 합니다."),n("br"),n("br"),t._v("\n        이번 시간에는 다양한 던더 메서드에 대하여 배우겠습니다.\n      ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("h1",[t._v("__str__() and __repr__()")]),t._v(" "),n("p",[t._v("\n        1. 내용이 없는 클래스를 만들겠습니다."),n("br"),t._v("\n        2. 그리고 클래스를 출력하겠습니다."),n("br"),n("br"),t._v("\n        하지만 이상한 글씨만 보입니다. 그 글씨는 우리가 만든 Person() 클래스의\n        저장된 위치를 담은 정보입니다."),n("br"),n("br"),t._v("\n        우리의 목표는 print(a)를 출력했을 때 사용자가 이해할 수 있는 정보를\n        출력하는 것입니다."),n("br"),n("br"),t._v("\n        __str__을 사용하면 클래스를 출력할 때 대신 출력되는 값을 넣는\n        함수입니다."),n("br"),n("br"),t._v("\n        __repr__는 repr() 함수를 사용했을 때 대신 출력되는 값을 입력할 수 있는\n        던더 메서드입니다. repr()는 문자로 바꾸는 함수입니다.\n      ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("h1",[t._v("__del__()")]),t._v(" "),n("p",[t._v("\n        클래스를 삭제하려면 del 키워드를 사용할 수 있습니다."),n("br"),n("br"),t._v("\n        파이썬에서 클래스가 삭제되면 실행할 코드를 __del__() 함수 안에 담을 수\n        있습니다.\n      ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("h1",[t._v("__new__()")]),t._v(" "),n("p",[t._v("\n        new는 새롭다는 뜻으로 파이썬에서는 클래스가 만들어졌을 때 실행이 되는\n        코드를 담은 던더 메서드입니다."),n("br"),n("br"),t._v("\n        하지만 꼭 new 던더 메서드에 매개변수로 self를 입력해야 합니다."),n("br"),n("br"),t._v('\n        "I am created by you!"가 출력이 됩니다.\n      ')])])])}],!1,null,null,null);e.default=component.exports;c()(component,{Header:n(418).default,QuadSpace:n(419).default,BeforeNextButton:n(420).default}),c()(component,{VImg:_.a})}}]);