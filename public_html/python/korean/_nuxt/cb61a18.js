(window.webpackJsonp=window.webpackJsonp||[]).push([[38,2,3,4],{445:function(t,e,n){"use strict";n.r(e);var r={props:["title","num"],data:function(){return{count:0}},methods:{debuga:function(){window.location="https://coding-insight.com/python/english"+$nuxt.$route.path+"-en.html"},speak:function(){if(this.count%2==0)try{var a=new SpeechSynthesisUtterance(document.body.innerText.substring(document.body.innerText.indexOf("읽어주기")+8));a.lang="ko-kr",speechSynthesis.speak(a)}catch(t){alert(":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다. 에러 ("+t+")")}else try{speechSynthesis.cancel()}catch(t){alert(":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다.")}this.count++}}},l=n(94),c=n(134),o=n.n(c),v=n(216),d=n(198),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("hr"),t._v(" "),n("br"),t._v(" "),n("v-btn",{staticClass:"ma-2",attrs:{outlined:""},on:{click:t.speak}},[t._v("\n    "+t._s(t.count%2==0?"읽어주기":"멈추기")),n("v-icon",{attrs:{right:""}},[t._v("\n      "+t._s(t.count%2==0?"mdi-bullhorn":"mdi-pause-octagon"))])],1),t._v(" "),n("v-btn",{staticClass:"ma-2",attrs:{outlined:""},on:{click:t.debuga}},[t._v("\n    English"),n("v-icon",{attrs:{right:""}},[t._v(" mdi-ab-testing ")])],1),t._v(" "),n("br"),n("br"),t._v(" "),n("h1",{staticClass:"display-6"},[n("span",[t._v(t._s(t.title))]),n("br",{attrs:{id:"lbbr"}}),n("span",{attrs:{id:"txt"}},[t._v("Computer Science Lab (")]),t._v("CSL"),n("span",{attrs:{id:"txt"}},[t._v(")")]),t._v("\n    "+t._s(t.num)+"\n  ")]),t._v(" "),n("br"),t._v(" "),n("hr")],1)}),[],!1,null,null,null);e.default=component.exports;o()(component,{VBtn:v.a,VIcon:d.a})},446:function(t,e,n){"use strict";n.r(e);var r={},l=n(94),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("br"),e("br"),e("br"),e("br")])}],!1,null,null,null);e.default=component.exports},447:function(t,e,n){"use strict";n.r(e);var r={props:["flink","slink"]},l=n(94),c=n(134),o=n.n(c),v=n(216),d=n(198),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NuxtLink",{staticStyle:{"text-decoration":"none",float:"left"},attrs:{to:"./"+t.flink}},[n("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[n("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),t._v("Back\n    ")],1)],1),t._v(" "),n("NuxtLink",{staticStyle:{"text-decoration":"none",float:"right"},attrs:{to:"./"+t.slink}},[n("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[t._v("\n      Next"),n("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;o()(component,{VBtn:v.a,VIcon:d.a})},572:function(t,e,n){"use strict";n.r(e);var r=n(94),l=n(134),c=n.n(l),o=n(167),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("br"),t._v(" "),n("div",{staticClass:"d-flex img-div"},[t._m(0),t._v(" "),n("div",{staticClass:"m-auto"},[n("v-img",{staticClass:"img-fluid",attrs:{alt:"python-factory-picture",src:"https://thumbs.dreamstime.com/b/file-icon-folder-dark-background-simple-vector-117046649.jpg",width:"300px"}})],1)]),t._v(" "),n("br"),n("br"),t._v(" "),n("Header",{attrs:{num:"50",title:"파일 읽기"}}),t._v(" "),n("QuadSpace"),t._v(" "),t._m(1),t._v(" "),n("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/69df2c15b8",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}}),t._v(" "),n("QuadSpace"),t._v(" "),t._m(2),t._v(" "),n("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/6b4e266873",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}}),t._v(" "),n("QuadSpace"),t._v(" "),t._m(3),t._v(" "),n("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/8d79bcebaa",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}}),t._v(" "),n("QuadSpace"),t._v(" "),t._m(4),t._v(" "),n("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/a301fbf34c",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}}),t._v(" "),n("QuadSpace"),t._v(" "),n("BeforeNextButton",{attrs:{flink:"file",slink:"filewriting"}}),t._v(" "),n("QuadSpace")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("파일 읽기란?")]),t._v(" "),n("p",[t._v("\n        'text.txt'라는 파일을 만들어보겠습니다."),n("br"),n("br"),t._v("\n\n        그 파일에 'Python is fantastic'이라고 써보겠습니다."),n("br"),n("br"),t._v("\n\n        그 다음에 text 파일의 내용을 변수 안에 저장하기 위하여 open() 함수를\n        사용해보겠습니다."),n("br"),n("br"),t._v("\n\n        첫 번째 매개변수에는 우리가 내용을 읽을 파일의 주소를 넣습니다."),n("br"),n("br"),t._v("\n\n        두 번째 매개변수에는 모드를 입력합니다."),n("br"),n("br"),t._v("\n\n        r은 'reading'의 약자입니다.\n      ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("h1",[t._v("read()")]),t._v(" "),n("p",[t._v("\n        read()는 그 파일의 내용을 다 출력하는 코드입니다. 첫 번째 매개변수는\n        그 파일의 출력할 내용의 길이를 정해줍니다."),n("br"),n("br"),t._v("\n\n        참고로 문자열 앞에 r이 붙으면 raw 문자열이 됩니다."),n("br"),n("br"),t._v("\n\n        raw 문자열이란 이스케이프 캐릭터를 동작시키지 않고 그대로 사용하는\n        문자열을 말합니다."),n("br"),n("br"),t._v('\n\n        이스케이프 캐릭터를 선언하는 코드 "`\\`(역슬래시)"는 파일의 주소에도\n        있으므로 이스케이프 캐릭터를 사용하지 않겠다고 raw 문자열을 사용하여\n        파이썬에게 알려주어야 합니다.\n      ')])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("h1",[t._v("readline()")]),t._v(" "),n("p",[t._v("\n        하나의 줄을 읽으려면 'readline()'을 사용하면 됩니다."),n("br"),n("br"),t._v("\n\n        두 개 이상의 줄을 읽으려면 for 반복문을 사용하여 줄을 시작부터\n        순차적으로 읽을 수 있습니다.\n      ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("h1",[t._v("readlines()")]),t._v(" "),n("p",[t._v("\n        readline()과 readlines()는 비슷해 보이지만 분명한 차이가 있는\n        코드입니다."),n("br"),n("br"),t._v("\n\n        readline()은 한 줄만 읽는 코드이지만 readlines()는 매개변수가 지정하는\n        만큼의 줄을 읽는 코드입니다.\n      ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("h1",[t._v("readable()")]),t._v(" "),n("p",[t._v("\n        파일의 읽기 가능 여부를 확인할 때 readable()을 사용할 수 있습니다.\n        만일 파일을 읽는 것이 가능하면 True를 돌려주고 그렇지 않다면 False를\n        돌려줍니다.\n      ")])])])}],!1,null,null,null);e.default=component.exports;c()(component,{Header:n(445).default,QuadSpace:n(446).default,BeforeNextButton:n(447).default}),c()(component,{VImg:o.a})}}]);