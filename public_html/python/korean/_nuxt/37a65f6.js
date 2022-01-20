(window.webpackJsonp=window.webpackJsonp||[]).push([[55,7,9,10],{347:function(t,e,n){"use strict";n.r(e);var r={props:["title","num"],data:function(){return{count:0}},methods:{toEnglish:function(){window.location="https://coding-insight.com/python/english"+("/"==$nuxt.$route.path?"/python":$nuxt.$route.path)+"-en.html"},speak:function(){if(this.count%2==0)try{var a=new SpeechSynthesisUtterance(document.body.innerText.substring(document.body.innerText.indexOf("읽어주기")+8));a.lang="ko-kr",speechSynthesis.speak(a)}catch(t){alert(":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다. 에러 ("+t+")")}else try{speechSynthesis.cancel()}catch(t){alert(":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다.")}this.count++}}},l=n(63),c=n(171),o=n.n(c),v=n(338),_=n(339),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("hr"),t._v(" "),n("br"),t._v(" "),n("v-btn",{staticClass:"ma-2",attrs:{outlined:""},on:{click:t.speak}},[t._v("\n    "+t._s(t.count%2==0?"읽어주기":"멈추기")),n("v-icon",{attrs:{right:""}},[t._v("\n      "+t._s(t.count%2==0?"mdi-bullhorn":"mdi-pause-octagon"))])],1),t._v(" "),n("v-btn",{staticClass:"ma-2",attrs:{outlined:""},on:{click:t.toEnglish}},[t._v("\n    English"),n("v-icon",{attrs:{right:""}},[t._v(" mdi-ab-testing ")])],1),t._v(" "),n("br"),n("br"),t._v(" "),n("h1",{staticClass:"display-6"},[n("span",[t._v(t._s(t.title))]),n("br",{attrs:{id:"lbbr"}}),n("span",{attrs:{id:"txt"}},[t._v("Computer Science Lab (")]),t._v("CSL"),n("span",{attrs:{id:"txt"}},[t._v(")")]),t._v("\n    "+t._s(t.num)+"\n  ")]),t._v(" "),n("br"),t._v(" "),n("hr")],1)}),[],!1,null,null,null);e.default=component.exports;o()(component,{VBtn:v.a,VIcon:_.a})},348:function(t,e,n){"use strict";n.r(e);var r={},l=n(63),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("br"),e("br"),e("br"),e("br")])}],!1,null,null,null);e.default=component.exports},349:function(t,e,n){"use strict";n.r(e);var r={props:["flink","slink"]},l=n(63),c=n(171),o=n.n(c),v=n(338),_=n(339),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NuxtLink",{staticStyle:{"text-decoration":"none",float:"left"},attrs:{to:"./"+t.flink}},[n("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[n("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),t._v("Back\n    ")],1)],1),t._v(" "),n("NuxtLink",{staticStyle:{"text-decoration":"none",float:"right"},attrs:{to:"./"+t.slink}},[n("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[t._v("\n      Next"),n("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;o()(component,{VBtn:v.a,VIcon:_.a})},558:function(t,e,n){"use strict";n.r(e);var r={page:"IfMasterPage"},l=n(63),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("br"),t._v(" "),t._m(0),t._v(" "),n("br"),n("br"),t._v(" "),n("Header",{attrs:{num:"27",title:"조건문 마스터"}}),t._v(" "),n("br"),n("br"),t._v(" "),t._m(1),t._v(" "),n("QuadSpace"),t._v(" "),t._m(2),t._v(" "),n("QuadSpace"),t._v(" "),t._m(3),t._v(" "),n("br"),n("br"),n("br"),t._v(" "),n("BeforeNextButton",{attrs:{flink:"if",slink:"none"}}),t._v(" "),n("QuadSpace")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center"},[e("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/SW8JgnjD9_s",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"color-contrast-div"},[n("div",[n("h1",[t._v("조건문 간단히 하기")]),t._v(" "),n("p",[t._v("\n        if-else 조건문은 다음과 같은 형태로도 사용할 수 있습니다."),n("br"),n("br"),t._v("\n\n        형태는\n        "),n("code",[t._v("(if 조건이 맞았다면 실행할 코드) if (조건) else (if조건이\n          틀리다면)}입니다.")]),n("br"),n("br"),t._v("\n\n        if-elif-else 조건문을 다음과 같이 사용할 수 있습니다."),n("br"),n("br"),t._v("\n\n        형태는\n        "),n("code",[t._v("(if 조건 1이 맞았다면 실행할 코드) if (조건) else (if 조건2가\n          맞았다면 실행할 코드) if (조건2) else (if 조건문이 둘 다 틀리다면\n          실행할 코드)")])])]),t._v(" "),n("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/73c3356df0",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("div",{staticStyle:{padding:"10px"}},[n("h1",[t._v("Switch")]),t._v(" "),n("p",[t._v("\n          다른 언어 (예: 자바스크립트)에서는 switch라는 키워드가 있습니다."),n("br"),n("br"),t._v("\n\n          switch는 어떤 변수와 다른 값을 비교하는 키워드입니다."),n("br"),n("br"),t._v("\n\n          조건문인데 두 값을 비교하는 조건문입니다."),n("br"),n("br"),t._v("\n\n          하지만 파이썬에서는 switch가 없습니다. 그래서 다음과 같은 방법만으로\n          사용할 수 있습니다.\n        ")])]),t._v(" "),n("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/cb9b932e10",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("h1",[t._v("들여쓰기")]),t._v(" "),n("p",[t._v("\n        들여쓰기란 새로운 문단을 쓸 때 코드 앞에 공백을 놓고 시작하는 것을\n        뜻합니다."),n("br"),n("br"),t._v("\n\n        파이썬에서는 조건문을 만들때 들여쓰기는 필수입니다."),n("br"),n("br"),t._v("\n\n        위의 코드와 같이 print()는 조건문 "),n("b",[t._v("안에")]),t._v(" 있으므로 들여쓰기를 해야\n        합니다."),n("br"),n("br"),t._v("\n\n        항상 어떤 코드는 어떤 것(함수, 조건문, 반복문 등) 안에 있거나 밖에\n        있는지를 고려하며 들여쓰기를 해야합니다.\n      ")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(347).default,QuadSpace:n(348).default,BeforeNextButton:n(349).default})}}]);