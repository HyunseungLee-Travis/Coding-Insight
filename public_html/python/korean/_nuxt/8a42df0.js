(window.webpackJsonp=window.webpackJsonp||[]).push([[18,2,3,4],{445:function(t,e,n){"use strict";n.r(e);var r={props:["title","num"],data:function(){return{count:0}},methods:{debuga:function(){window.location="https://coding-insight.com/python/english"+$nuxt.$route.path+"-en.html"},speak:function(){if(this.count%2==0)try{var a=new SpeechSynthesisUtterance(document.body.innerText.substring(document.body.innerText.indexOf("읽어주기")+8));a.lang="ko-kr",speechSynthesis.speak(a)}catch(t){alert(":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다. 에러 ("+t+")")}else try{speechSynthesis.cancel()}catch(t){alert(":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다.")}this.count++}}},l=n(94),c=n(134),o=n.n(c),v=n(216),_=n(198),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("hr"),t._v(" "),n("br"),t._v(" "),n("v-btn",{staticClass:"ma-2",attrs:{outlined:""},on:{click:t.speak}},[t._v("\n    "+t._s(t.count%2==0?"읽어주기":"멈추기")),n("v-icon",{attrs:{right:""}},[t._v("\n      "+t._s(t.count%2==0?"mdi-bullhorn":"mdi-pause-octagon"))])],1),t._v(" "),n("v-btn",{staticClass:"ma-2",attrs:{outlined:""},on:{click:t.debuga}},[t._v("\n    English"),n("v-icon",{attrs:{right:""}},[t._v(" mdi-ab-testing ")])],1),t._v(" "),n("br"),n("br"),t._v(" "),n("h1",{staticClass:"display-6"},[n("span",[t._v(t._s(t.title))]),n("br",{attrs:{id:"lbbr"}}),n("span",{attrs:{id:"txt"}},[t._v("Computer Science Lab (")]),t._v("CSL"),n("span",{attrs:{id:"txt"}},[t._v(")")]),t._v("\n    "+t._s(t.num)+"\n  ")]),t._v(" "),n("br"),t._v(" "),n("hr")],1)}),[],!1,null,null,null);e.default=component.exports;o()(component,{VBtn:v.a,VIcon:_.a})},446:function(t,e,n){"use strict";n.r(e);var r={},l=n(94),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("br"),e("br"),e("br"),e("br")])}],!1,null,null,null);e.default=component.exports},447:function(t,e,n){"use strict";n.r(e);var r={props:["flink","slink"]},l=n(94),c=n(134),o=n.n(c),v=n(216),_=n(198),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NuxtLink",{staticStyle:{"text-decoration":"none",float:"left"},attrs:{to:"./"+t.flink}},[n("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[n("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),t._v("Back\n    ")],1)],1),t._v(" "),n("NuxtLink",{staticStyle:{"text-decoration":"none",float:"right"},attrs:{to:"./"+t.slink}},[n("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[t._v("\n      Next"),n("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;o()(component,{VBtn:v.a,VIcon:_.a})},558:function(t,e,n){"use strict";n.r(e);var r=n(94),l=n(134),c=n.n(l),o=n(167),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("br"),t._v(" "),n("div",{staticClass:"img-div",staticStyle:{display:"flex",color:"black",padding:"10px","border-radius":"5px","background-color":"#ffe500"}},[t._m(0),t._v(" "),n("div",{staticClass:"m-auto"},[n("v-img",{staticClass:"img-fluid",attrs:{alt:"python-factory-picture",src:"https://pbs.twimg.com/profile_images/502406972453289985/AKdzcXPi.png",width:"300px"}})],1)]),t._v(" "),n("br"),n("br"),t._v(" "),n("Header",{attrs:{num:"47",title:"클래스 메서드"}}),t._v(" "),n("QuadSpace"),t._v(" "),t._m(1),t._v(" "),n("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/e0b362c25c",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}}),t._v(" "),n("QuadSpace"),t._v(" "),t._m(2),t._v(" "),n("QuadSpace"),t._v(" "),t._m(3),t._v(" "),n("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/e9f98d6de4",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}}),t._v(" "),n("QuadSpace"),t._v(" "),t._m(4),t._v(" "),n("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/45cfee23ee",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}}),t._v(" "),n("QuadSpace"),t._v(" "),n("BeforeNextButton",{attrs:{flink:"class",slink:"math"}}),t._v(" "),n("QuadSpace")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-auto"},[n("h1",[t._v("계승이란?")]),t._v(" "),n("p",[t._v("\n        계승이란 무언가를 밑으로 물려주는 것을 뜻합니다."),n("br"),n("br"),t._v("\n        파이썬에서는 클래스의\n        "),n("mark",[t._v("함수와 변수를 다른 클래스로 옮기는 작업")]),t._v("을 뜻합니다.\n      ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("h1",[t._v("파이썬에서 계승")]),t._v(" "),n("p",[t._v("\n        클래스에서도 클래스와 클래스끼리 서로 함수와 변수를 주고받을 수\n        있습니다.\n      ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("div",[n("h1",[t._v("계승 문제의 해결")]),t._v(" "),n("p",[t._v("\n          하지만, 문제가 하나 있습니다."),n("br"),n("br"),t._v("\n          우리가 Student 클래스에서 init 메서드를 선언했습니다."),n("br"),n("br"),t._v("\n          이 선언한 값은 다 Person 클래스에서 name, age, 그리고 gender 값이 다\n          없어집니다."),n("br"),n("br"),t._v("\n          이를 방지하기 위하여 Person.__init__(python_class, name, age,\n          gender)를 init 메서드 안에 넣을 수 있습니다.\n        ")])]),t._v(" "),n("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/8e1797ce82",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("div",[n("h1",[t._v("super()")]),t._v(" "),n("p",[t._v("super() 함수를 이용하면 매우 더 편리할 수 있습니다.")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("div",[n("h1",[t._v("attribute")]),t._v(" "),n("p",[t._v("\n          그렇다면 클래스에 있는 attribute(변수들)은 어떻게 바꾸고, 만들고,\n          삭제할까요?"),n("br"),n("br"),t._v("\n          먼저, 변수를 만드는 방법을 알아보겠습니다."),n("br"),n("br"),t._v("\n          이미 만들어진 클래스의 변수들을 바꾸는 것이 가능합니다."),n("br"),n("br"),t._v("\n          첫 번째 매개변수는 클래스 만들어진 변수 이름이고 두 번째는 변수\n          이름이고 세 번째는 변수의 새로운 값입니다."),n("br"),n("br"),t._v("\n          클래스의 변수는 클래스 이름.변수이름으로 알 수 있지만 getattr()\n          메서드를 사용하는 방법도 있습니다."),n("br"),n("br"),t._v("\n          세 번째로, 클래스가 어떤 변수를 가졌는지를 알 수 있는 함수는\n          hasattr()을 사용하면 에러를 피할 수 있습니다."),n("br"),n("br"),t._v("\n          마지막으로, 클래스의 변수를 삭제할 수 있는 무서운 기능이 있는\n          delattr()을 사용하면 변수의 에러를 피하는 것이 가능합니다.\n        ")])])])])}],!1,null,null,null);e.default=component.exports;c()(component,{Header:n(445).default,QuadSpace:n(446).default,BeforeNextButton:n(447).default}),c()(component,{VImg:o.a})}}]);