(window.webpackJsonp=window.webpackJsonp||[]).push([[49,7,9,10],{347:function(t,n,e){"use strict";e.r(n);var r={props:["title","num"],data:function(){return{count:0}},methods:{toEnglish:function(){window.location="https://coding-insight.com/python/english"+("/"==$nuxt.$route.path?"/python":$nuxt.$route.path)+"-en.html"},speak:function(){if(this.count%2==0)try{var a=new SpeechSynthesisUtterance(document.body.innerText.substring(document.body.innerText.indexOf("읽어주기")+8));a.lang="ko-kr",speechSynthesis.speak(a)}catch(t){alert(":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다. 에러 ("+t+")")}else try{speechSynthesis.cancel()}catch(t){alert(":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다.")}this.count++}}},l=e(63),o=e(171),c=e.n(o),_=e(338),v=e(339),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"text-center"},[e("hr"),t._v(" "),e("br"),t._v(" "),e("v-btn",{staticClass:"ma-2",attrs:{outlined:""},on:{click:t.speak}},[t._v("\n    "+t._s(t.count%2==0?"읽어주기":"멈추기")),e("v-icon",{attrs:{right:""}},[t._v("\n      "+t._s(t.count%2==0?"mdi-bullhorn":"mdi-pause-octagon"))])],1),t._v(" "),e("v-btn",{staticClass:"ma-2",attrs:{outlined:""},on:{click:t.toEnglish}},[t._v("\n    English"),e("v-icon",{attrs:{right:""}},[t._v(" mdi-ab-testing ")])],1),t._v(" "),e("br"),e("br"),t._v(" "),e("h1",{staticClass:"display-6"},[e("span",[t._v(t._s(t.title))]),e("br",{attrs:{id:"lbbr"}}),e("span",{attrs:{id:"txt"}},[t._v("Computer Science Lab (")]),t._v("CSL"),e("span",{attrs:{id:"txt"}},[t._v(")")]),t._v("\n    "+t._s(t.num)+"\n  ")]),t._v(" "),e("br"),t._v(" "),e("hr")],1)}),[],!1,null,null,null);n.default=component.exports;c()(component,{VBtn:_.a,VIcon:v.a})},348:function(t,n,e){"use strict";e.r(n);var r={},l=e(63),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("br"),n("br"),n("br"),n("br")])}],!1,null,null,null);n.default=component.exports},349:function(t,n,e){"use strict";e.r(n);var r={props:["flink","slink"]},l=e(63),o=e(171),c=e.n(o),_=e(338),v=e(339),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("NuxtLink",{staticStyle:{"text-decoration":"none",float:"left"},attrs:{to:"./"+t.flink}},[e("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[e("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),t._v("Back\n    ")],1)],1),t._v(" "),e("NuxtLink",{staticStyle:{"text-decoration":"none",float:"right"},attrs:{to:"./"+t.slink}},[e("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[t._v("\n      Next"),e("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports;c()(component,{VBtn:_.a,VIcon:v.a})},603:function(t,n,e){"use strict";e.r(n);var r=e(63),component=Object(r.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("br"),t._v(" "),e("div",[e("Header",{attrs:{num:"36",title:"반복문 함수"}}),t._v(" "),e("QuadSpace"),t._v(" "),t._m(0),t._v(" "),e("QuadSpace"),t._v(" "),t._m(1)],1),t._v(" "),e("QuadSpace"),t._v(" "),e("BeforeNextButton",{attrs:{flink:"fortype",slink:"while"}}),t._v(" "),e("QuadSpace")],1)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",[e("h1",[t._v("iter()와 __next__()")]),t._v(" "),e("p",[t._v("\n          iter() 메서드를 사용하면 for 반복문을 대신할 수 있습니다."),e("br"),e("br"),t._v("\n\n          iter() 함수를 사용하면 for 반복과 비슷한 이터러블을 만듭니다."),e("br"),e("br"),t._v("\n\n          __next__() 메서드를 사용하면 i의 값을 하나하나 돌려줍니다.\n          __next__()를 사용할 때마다 새로운 값 하나하나가 새롭게\n          나타납니다."),e("br"),e("br"),t._v("\n\n          만일 마지막 값까지 도착했고 더 이상 값이 존재하지 않는데 __next__()\n          메서드를 사용했다면 에러가 생깁니다.\n        ")])]),t._v(" "),e("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/496fc82d74",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}})])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",[e("div",[e("h1",[t._v("range()")]),t._v(" "),e("p",[t._v("\n            range()는 for 반복문을 사용할 때 매우 유용합니다. range() 함수는\n            숫자로 구성된 리스트를 돌려주는 함수입니다."),e("br"),e("br"),t._v("\n\n            range(start, stop, step)가 있습니다."),e("br"),e("br"),t._v("\n\n            start는 숫자의 시작입니다."),e("br"),t._v("\n            stop은 숫자의 끝입니다."),e("br"),t._v("\n            step은 숫자 간의 간격입니다.\n          ")])]),t._v(" "),e("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/31f75bee24",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}})])])}],!1,null,null,null);n.default=component.exports;installComponents(component,{Header:e(347).default,QuadSpace:e(348).default,BeforeNextButton:e(349).default})}}]);