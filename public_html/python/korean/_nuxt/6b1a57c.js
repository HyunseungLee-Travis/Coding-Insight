(window.webpackJsonp=window.webpackJsonp||[]).push([[50,2,3,4],{445:function(t,n,r){"use strict";r.r(n);var e={props:["title","num"],data:function(){return{count:0}},methods:{debuga:function(){window.location="https://coding-insight.com/python/english"+$nuxt.$route.path+"-en.html"},speak:function(){if(this.count%2==0)try{var a=new SpeechSynthesisUtterance(document.body.innerText.substring(document.body.innerText.indexOf("읽어주기")+8));a.lang="ko-kr",speechSynthesis.speak(a)}catch(t){alert(":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다. 에러 ("+t+")")}else try{speechSynthesis.cancel()}catch(t){alert(":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다.")}this.count++}}},c=r(94),l=r(134),o=r.n(l),v=r(216),d=r(198),component=Object(c.a)(e,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"text-center"},[r("hr"),t._v(" "),r("br"),t._v(" "),r("v-btn",{staticClass:"ma-2",attrs:{outlined:""},on:{click:t.speak}},[t._v("\n    "+t._s(t.count%2==0?"읽어주기":"멈추기")),r("v-icon",{attrs:{right:""}},[t._v("\n      "+t._s(t.count%2==0?"mdi-bullhorn":"mdi-pause-octagon"))])],1),t._v(" "),r("v-btn",{staticClass:"ma-2",attrs:{outlined:""},on:{click:t.debuga}},[t._v("\n    English"),r("v-icon",{attrs:{right:""}},[t._v(" mdi-ab-testing ")])],1),t._v(" "),r("br"),r("br"),t._v(" "),r("h1",{staticClass:"display-6"},[r("span",[t._v(t._s(t.title))]),r("br",{attrs:{id:"lbbr"}}),r("span",{attrs:{id:"txt"}},[t._v("Computer Science Lab (")]),t._v("CSL"),r("span",{attrs:{id:"txt"}},[t._v(")")]),t._v("\n    "+t._s(t.num)+"\n  ")]),t._v(" "),r("br"),t._v(" "),r("hr")],1)}),[],!1,null,null,null);n.default=component.exports;o()(component,{VBtn:v.a,VIcon:d.a})},446:function(t,n,r){"use strict";r.r(n);var e={},c=r(94),component=Object(c.a)(e,(function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("br"),n("br"),n("br"),n("br")])}],!1,null,null,null);n.default=component.exports},447:function(t,n,r){"use strict";r.r(n);var e={props:["flink","slink"]},c=r(94),l=r(134),o=r.n(l),v=r(216),d=r(198),component=Object(c.a)(e,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("NuxtLink",{staticStyle:{"text-decoration":"none",float:"left"},attrs:{to:"./"+t.flink}},[r("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[r("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),t._v("Back\n    ")],1)],1),t._v(" "),r("NuxtLink",{staticStyle:{"text-decoration":"none",float:"right"},attrs:{to:"./"+t.slink}},[r("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[t._v("\n      Next"),r("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports;o()(component,{VBtn:v.a,VIcon:d.a})},531:function(t,n,r){"use strict";r.r(n);var e={name:"InstallPage"},c=r(94),l=r(134),o=r.n(l),v=r(167),component=Object(c.a)(e,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("div",{staticClass:"d-flex img-div"},[r("div",{staticStyle:{display:"flex","justify-content":"center"}},[r("v-img",{staticClass:"img-fluid",attrs:{alt:"python-factory-picture","max-width":"300px",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hQGGTvkDEUH9Bgtv9YRcwhjO8mwFpd5tQA&usqp=CAU"}})],1),t._v(" "),t._m(0)]),t._v(" "),r("QuadSpace"),t._v(" "),r("Header",{attrs:{num:"2",title:"설치 & 첫 프로그램"}}),t._v(" "),r("QuadSpace"),t._v(" "),r("div",[r("div",{staticClass:"d-flex img-div"},[r("div",{staticStyle:{padding:"30px"}},[r("h1",[t._v("설치")]),t._v(" "),r("p",[t._v("\n          1.\n          "),r("a",{staticStyle:{color:"yellow","text-decoration":"none"},attrs:{href:"https://www.python.org/downloads/"}},[t._v("파이썬 사이트")]),t._v("\n          설치 페이지로 들어가기."),r("br"),r("br"),t._v("\n          2. 노란색 버튼 'Download Python 3.10.0' 누르기"),r("br"),r("br"),t._v("\n          3. 새로운 설치 박스가 브라우저 밑에 생기는데 이를 클릭하기"),r("br"),r("br"),t._v(" "),r("v-img",{staticClass:"img-fluid",attrs:{alt:"python-factory-picture",src:"/img/다운로드.jpg"}}),r("br"),r("br"),t._v("\n\n          4. Add Python to Path 옵션을 클릭"),r("br"),r("br"),t._v("\n          5. Customize installation 버튼을 누르기"),r("br"),r("br"),t._v(" "),r("v-img",{staticClass:"img-fluid",attrs:{alt:"python-factory-picture",src:"/img/installnow.jpg"}}),r("br"),r("br"),t._v("\n\n          6. 모두 선택하고 Next 버튼을 누르기"),r("br"),r("br"),t._v(" "),r("v-img",{staticClass:"img-fluid",attrs:{alt:"python-factory-picture",src:"/img/설치2.jpg"}}),r("br"),r("br"),t._v("\n\n          7. 1부터 5번째 옵션을 선택하기"),r("br"),r("br"),t._v("\n          8. Install 버튼 누르기"),r("br"),r("br"),t._v(" "),r("v-img",{staticClass:"img-fluid",attrs:{alt:"python-factory-picture",src:"/img/adopt.jpg"}}),r("br"),r("br"),t._v("\n\n          9. Close 버튼을 눌러주세요.\n        ")],1)]),t._v(" "),r("div",{staticStyle:{padding:"30px"}},[r("h1",[t._v("사용 방법")]),t._v(" "),r("p",[t._v("\n          저희는 파이썬의 IDLE이라는 편집기를 사용하겠습니다."),r("br"),r("br"),t._v("\n\n          먼저 파이썬의 IDLE을 이용하려면 앱을 찾고 실행을 해야 합니다."),r("br"),r("br"),t._v(" "),r("kbd",[t._v("windows+s")]),t._v("버튼을 누른 후 'idle'라고 치면 파이썬 IDLE가\n          뜹니다. 열기 또는 엔터를 누르세요."),r("br"),r("br"),t._v(" "),r("v-img",{staticClass:"img-fluid",attrs:{alt:"python-factory-picture",src:"/img/idle.jpg"}}),r("br"),r("br"),t._v("\n\n          파이썬 코드를 실행하기 위해서 >>> 다음에 넣고 엔터를 누르면\n          됩니다."),r("br"),r("br"),t._v(" "),r("v-img",{staticClass:"img-fluid",attrs:{alt:"python-factory-picture",src:"/img/idle2.jpg"}}),r("br"),r("br"),t._v(" "),r("kbd",[t._v('print("Hello World")')]),t._v("라고 친 후 엔터를 누르겠습니다."),r("br"),r("br"),t._v(" "),r("v-img",{staticClass:"img-fluid",attrs:{alt:"python-factory-picture",src:"/img/printhelloworld.jpg"}})],1)])])]),t._v(" "),r("QuadSpace"),t._v(" "),r("div",{staticClass:"img-div",staticStyle:{display:"flex","justify-content":"center","background-color":"#2c2c32",padding:"10px","border-radius":"5px"}},[r("div",{staticStyle:{"text-align":"center",margin:"auto"}},[r("v-img",{staticClass:"img-fluid",attrs:{alt:"python-factory-picture",src:"data:image/png;base64,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"}})],1),t._v(" "),t._m(1)]),t._v(" "),r("QuadSpace"),t._v(" "),r("BeforeNextButton",{attrs:{flink:"index",slink:"vscode"}}),t._v(" "),r("QuadSpace")],1)}),[function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("p",{staticStyle:{margin:"auto"}},[t._v("\n      파이썬을 기기에 설치하기"),r("br"),r("br"),t._v("\n      파이썬이 이진수 (0과 1)로 컴파일이 되어서 기계가 이해하기를 도와주기\n      위해서 먼저 공식 사이트에서 컴파일러를 설치해야 합니다.\n    ")])},function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"m-auto"},[r("h1",[t._v("VSCode란?")]),t._v(" "),r("p",[t._v("\n        VSCode를 사용해보겠습니다."),r("br"),r("br"),t._v("\n\n        VSCode는 파이썬 코드를 편집하는 과정을 쉽게 만들어주는\n        플랫폼입니다."),r("br"),r("br"),t._v("\n\n        지금까지는 IDLE을 사용했지만 VSCode를 사용하면 매우 더 쉬워집니다."),r("br"),r("br"),t._v("\n\n        VSCode 설치 방법과 사용방법은 다음 시간에 설명하겠습니다.\n      ")])])}],!1,null,null,null);n.default=component.exports;o()(component,{QuadSpace:r(446).default,Header:r(445).default,BeforeNextButton:r(447).default}),o()(component,{VImg:v.a})}}]);