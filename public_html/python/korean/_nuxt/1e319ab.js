(window.webpackJsonp=window.webpackJsonp||[]).push([[28,3,4,5],{418:function(t,n,r){"use strict";r.r(n);var e={props:["title","num"],data:function(){return{count:0}},methods:{debuga:function(){window.location="https://coding-insight.com/python/english"+$nuxt.$route.path+"-en.html"},speak:function(){if(this.count%2==0)try{var a=new SpeechSynthesisUtterance(document.body.innerText.substring(document.body.innerText.indexOf("읽어주기")+8));a.lang="ko-kr",speechSynthesis.speak(a)}catch(t){alert(":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다. 에러 ("+t+")")}else try{speechSynthesis.cancel()}catch(t){alert(":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다.")}this.count++}}},c=r(91),l=r(124),o=r.n(l),v=r(207),x=r(182),component=Object(c.a)(e,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"text-center"},[r("hr"),t._v(" "),r("br"),t._v(" "),r("v-btn",{staticClass:"ma-2",attrs:{outlined:""},on:{click:t.speak}},[t._v("\n    "+t._s(t.count%2==0?"읽어주기":"멈추기")),r("v-icon",{attrs:{right:""}},[t._v("\n      "+t._s(t.count%2==0?"mdi-bullhorn":"mdi-pause-octagon"))])],1),t._v(" "),r("v-btn",{staticClass:"ma-2",attrs:{outlined:""},on:{click:t.debuga}},[t._v("\n    English"),r("v-icon",{attrs:{right:""}},[t._v(" mdi-ab-testing ")])],1),t._v(" "),r("br"),r("br"),t._v(" "),r("h1",{staticClass:"display-6"},[r("span",[t._v(t._s(t.title))]),r("br",{attrs:{id:"lbbr"}}),r("span",{attrs:{id:"txt"}},[t._v("Computer Science Lab (")]),t._v("CSL"),r("span",{attrs:{id:"txt"}},[t._v(")")]),t._v("\n    "+t._s(t.num)+"\n  ")]),t._v(" "),r("br"),t._v(" "),r("hr")],1)}),[],!1,null,null,null);n.default=component.exports;o()(component,{VBtn:v.a,VIcon:x.a})},419:function(t,n,r){"use strict";r.r(n);var e={},c=r(91),component=Object(c.a)(e,(function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("br"),n("br"),n("br"),n("br")])}],!1,null,null,null);n.default=component.exports},420:function(t,n,r){"use strict";r.r(n);var e={props:["flink","slink"]},c=r(91),l=r(124),o=r.n(l),v=r(207),x=r(182),component=Object(c.a)(e,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("NuxtLink",{staticStyle:{"text-decoration":"none",float:"left"},attrs:{to:"./"+t.flink}},[r("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[r("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),t._v("Back\n    ")],1)],1),t._v(" "),r("NuxtLink",{staticStyle:{"text-decoration":"none",float:"right"},attrs:{to:"./"+t.slink}},[r("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[t._v("\n      Next"),r("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports;o()(component,{VBtn:v.a,VIcon:x.a})},561:function(t,n,r){"use strict";r.r(n);var e=r(91),c=r(124),l=r.n(c),o=r(159),component=Object(e.a)({},(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("br"),t._v(" "),r("div",{staticStyle:{display:"flex"}},[r("div",{staticStyle:{margin:"auto"}},[r("v-img",{staticClass:"img-fluid",attrs:{alt:"python-factory-picture",src:"data:image/png;base64,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"}})],1),t._v(" "),t._m(0)]),t._v(" "),r("br"),r("br"),t._v(" "),r("Header",{attrs:{num:"66",title:"데코레이터"}}),t._v(" "),r("QuadSpace"),t._v(" "),t._m(1),t._v(" "),r("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/867aac4aa9",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}}),t._v(" "),r("QuadSpace"),t._v(" "),t._m(2),t._v(" "),r("QuadSpace"),t._v(" "),t._m(3),t._v(" "),r("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/659cf1cdb5",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}}),t._v(" "),r("QuadSpace"),t._v(" "),r("BeforeNextButton",{attrs:{flink:"zlib",slink:"mydecorator"}}),t._v(" "),r("QuadSpace")],1)}),[function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticStyle:{margin:"auto"}},[r("p",[t._v("\n        데코레이터는 한국어로 번역하면 '장식하는 물체'입니다."),r("br"),r("br"),t._v("\n\n        하지만 파이썬에서는 조금 다른 개념입니다."),r("br"),r("br"),t._v("\n\n        데코레이터는 파이썬 함수를 장식하는 또 다른 함수로\n        "),r("mark",[t._v("함수에 추가 기능을 더합니다")]),t._v(".\n      ")])])},function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("div",[r("h1",[t._v("데코레이터 예시")]),t._v(" "),r("p",[t._v("\n        어떤 수의 제곱근을 계산하는 함수를 만들어 보겠습니다."),r("br"),r("br"),t._v("\n\n        밑에 있는 함수에 4를 입력하면 2가 출력이 됩니다."),r("br"),r("br"),t._v("\n\n        하지만, 만일 a 값이 0보다 작다면 어떻게 대처를 할 수 있을까요?"),r("br"),r("br"),t._v("\n\n        조건문을 사용한다면 가능하겠지만 매우 복잡해집니다. 이 상황에서\n        데코레이터를 사용할 수 있습니다."),r("br"),r("br"),t._v("\n\n        이제 우리가 원하는 값을 반환하는 함수를 만들겠습니다. 입력을 사용하여\n        사용자가 지정한 값을 반환하는 것도 가능하지만 이 예시에서는 쉽게\n        설명하기 위하여 -4를 돌려주는 함수를 만들겠습니다."),r("br"),r("br"),t._v(" "),r("code",[t._v("\n          def returnVal():"),r("br"),t._v("\n            return -4\n        ")]),t._v("\n\n        위의 함수는 데코레이터의 예시입니다."),r("br"),r("br"),t._v("\n\n        먼저, 데코레이터 함수를 만들기 위하여 메인 함수를 매개변수 안에\n        만듭니다. 이 mainFunction은 어떤 다른 함수에서 돌려주는\n        값(squreRootOf에서는 a의 제곱근)입니다."),r("br"),r("br"),t._v("\n\n        함수 안에 또 다른 함수를 만들어서 func 변수 안에 저장하고 새로운 값인\n        abs() 함수를 사용하여 새로운 값을 돌려줍니다."),r("br"),r("br"),t._v("\n\n        밑에 있는 예시를 확인하세요. 하지만 이렇게 하면 많이 복잡합니다.\n        그래서 파이썬에는 더 쉬운 방법이 있습니다.\n      ")])])])},function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("div",[r("h1",[t._v("데코레이터 사용 방법")]),t._v(" "),r("p",[t._v("\n        데코레이터를 사용하기 위하여 returnVal() 함수를 선언하기 바로 전에\n        다음과 같은 코드를 붙여넣습니다."),r("br"),r("br"),t._v(" "),r("code",[t._v("\n          @minusDecorator"),r("br"),t._v("\n          def returnVal():return -4\n        ")]),t._v("\n\n        위 코드의 첫 번째 매개변수는 함수이지만 @를 하면 바로 다음에 나오는\n        코드를 실행합니다."),r("br"),r("br"),t._v("\n\n        returnVal()에서 돌려주는 절댓값을 계산하기 위하여 쉽게 returnVal()\n        함수만 사용하면 됩니다."),r("br"),r("br"),t._v("\n\n        원래는 minusDecorator(returnVal())을 사용하여 절댓값을 계산하지만 @를\n        사용하면 바로 returnVal()을 실행해도 데코레이터에 있는 함수가 실행되어\n        절댓값을 출력할 수 있습니다.\n      ")])])])},function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("div",[r("h1",[t._v("2개 이상 데코레이터")]),t._v(" "),r("p",[t._v("\n        데코레이터를 2개 이상 사용하기 위하여 @minusDecorator 밑에 또 다른\n        데코레이터 코드를 넣고 그다음에 함수를 넣을 수 있습니다.\n      ")])])])}],!1,null,null,null);n.default=component.exports;l()(component,{Header:r(418).default,QuadSpace:r(419).default,BeforeNextButton:r(420).default}),l()(component,{VImg:o.a})}}]);