(window.webpackJsonp=window.webpackJsonp||[]).push([[63,7,9,10],{347:function(t,e,n){"use strict";n.r(e);var r={props:["title","num"],data:function(){return{count:0}},methods:{toEnglish:function(){window.location="https://coding-insight.com/python/english"+("/"==$nuxt.$route.path?"/python":$nuxt.$route.path)+"-en.html"},speak:function(){if(this.count%2==0)try{var a=new SpeechSynthesisUtterance(document.body.innerText.substring(document.body.innerText.indexOf("읽어주기")+8));a.lang="ko-kr",speechSynthesis.speak(a)}catch(t){alert(":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다. 에러 ("+t+")")}else try{speechSynthesis.cancel()}catch(t){alert(":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다.")}this.count++}}},l=n(63),o=n(171),c=n.n(o),v=n(338),_=n(339),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("hr"),t._v(" "),n("br"),t._v(" "),n("v-btn",{staticClass:"ma-2",attrs:{outlined:""},on:{click:t.speak}},[t._v("\n    "+t._s(t.count%2==0?"읽어주기":"멈추기")),n("v-icon",{attrs:{right:""}},[t._v("\n      "+t._s(t.count%2==0?"mdi-bullhorn":"mdi-pause-octagon"))])],1),t._v(" "),n("v-btn",{staticClass:"ma-2",attrs:{outlined:""},on:{click:t.toEnglish}},[t._v("\n    English"),n("v-icon",{attrs:{right:""}},[t._v(" mdi-ab-testing ")])],1),t._v(" "),n("br"),n("br"),t._v(" "),n("h1",{staticClass:"display-6"},[n("span",[t._v(t._s(t.title))]),n("br",{attrs:{id:"lbbr"}}),n("span",{attrs:{id:"txt"}},[t._v("Computer Science Lab (")]),t._v("CSL"),n("span",{attrs:{id:"txt"}},[t._v(")")]),t._v("\n    "+t._s(t.num)+"\n  ")]),t._v(" "),n("br"),t._v(" "),n("hr")],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:v.a,VIcon:_.a})},348:function(t,e,n){"use strict";n.r(e);var r={},l=n(63),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("br"),e("br"),e("br"),e("br")])}],!1,null,null,null);e.default=component.exports},349:function(t,e,n){"use strict";n.r(e);var r={props:["flink","slink"]},l=n(63),o=n(171),c=n.n(o),v=n(338),_=n(339),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NuxtLink",{staticStyle:{"text-decoration":"none",float:"left"},attrs:{to:"./"+t.flink}},[n("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[n("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),t._v("Back\n    ")],1)],1),t._v(" "),n("NuxtLink",{staticStyle:{"text-decoration":"none",float:"right"},attrs:{to:"./"+t.slink}},[n("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[t._v("\n      Next"),n("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:v.a,VIcon:_.a})},561:function(t,e,n){"use strict";n.r(e);var r={name:"ListMethod2Page",methods:{checkAnswer:function(){document.getElementById("question-2-answers-B").checked?alert("1번 맞았습니다!"):alert("1번 틀렸습니다")}}},l=n(63),o=n(171),c=n.n(o),v=n(338),_=n(339),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("br"),t._v(" "),t._m(0),t._v(" "),n("br"),t._v(" "),n("Header",{attrs:{title:"파이썬 리스트 메서드 2",num:"20"}}),t._v(" "),n("br"),n("br"),t._v(" "),n("br"),n("br"),t._v(" "),t._m(1),t._v(" "),n("QuadSpace"),t._v(" "),t._m(2),t._v(" "),n("QuadSpace"),t._v(" "),t._m(3),t._v(" "),n("QuadSpace"),t._v(" "),t._m(4),t._v(" "),n("QuadSpace"),t._v(" "),n("BeforeNextButton",{attrs:{flink:"listmethod1",slink:"dictionary"}}),t._v(" "),n("QuadSpace"),t._v(" "),n("div",{staticClass:"quiz"},[n("h1",[t._v("퀴즈 풀기!")]),t._v(" "),n("hr"),t._v(" "),n("br"),n("br"),t._v(" "),n("h3",[t._v('["Hello", "World"].reverse()와 같은 값은?')]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),n("QuadSpace"),t._v(" "),n("v-btn",{on:{click:t.checkAnswer}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-check-decagram")]),t._v("정답 확인\n    ")],1)],1),t._v(" "),n("QuadSpace")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center"},[e("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/hnNX6_xr-3E",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("h1",[t._v("리스트 정리하기")]),t._v(" "),n("p",[t._v("\n        리스트를 알파벳과 숫자 순서로 정리하기 위해서 'sort' 메서드를 사용할\n        수 있습니다 (CODE1)"),n("br"),n("br"),t._v("\n\n        리스트에서 알파벳과 숫자 순서를 거꾸로 정리하려면 sort 안에서\n        'reverse'의 값에 'True'를 입력하면 됩니다. (CODE2)"),n("br"),n("br"),t._v("\n\n        'reverse' 함수를 이용하여 리스트의 순서를 뒤집을 수도 있습니다.\n        (CODE3)"),n("br"),n("br"),t._v("\n\n        우리가 저희만의 규칙을 정할 수 있습니다. CODE4를 보면 문자에서\n        소문자인 것부터 시작하여 대문자로 정리했습니다.\n      ")])]),t._v(" "),n("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/44f3241dca",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("h1",[t._v("append()")]),t._v(" "),n("p",[t._v("\n        리스트 끝에 새로운 값을 더하기 위하여 우리는 'append()'를 사용해\n        보겠습니다."),n("br"),n("br"),t._v("\n\n        list.append(item) 형태로 list 끝에 새로운 item을 더합니다.\n      ")])]),t._v(" "),n("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/12cc090a48",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("h1",[t._v("리스트 합치기")]),t._v(" "),n("p",[t._v("\n        두 리스트를 더하여 새로운 리시트를 만들기 위하여 'extend'를 사용할 수\n        있습니다."),n("br"),n("br"),t._v("\n\n        list1.extend(list2) 형태로 list1이 [list1과 list2]에 있는 아이템을\n        모두 합친 값을 그 변수 안에 저장하는 메서드입니다.\n      ")])]),t._v(" "),n("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/7e53c5b5a9",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("h1",[t._v("리스트 비교하기")]),t._v(" "),n("p",[t._v("\n        리스트가 만일 모두 다 숫자로만 이루어져 있다면 가장 큰 수와 가장 작은\n        수를 max()와 min()을 사용하여 알 수 있습니다.\n      ")])]),t._v(" "),n("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/94a4a72417",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("input",{attrs:{type:"radio",name:"question-2-answers",id:"question-2-answers-A",value:"A"}}),t._v(" "),n("label",{attrs:{for:"question-2-answers-A"}},[t._v('A) ["Hello", "World"] ')])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("input",{attrs:{type:"radio",name:"question-2-answers",id:"question-2-answers-B",value:"B"}}),t._v(" "),n("label",{attrs:{for:"question-2-answers-B"}},[t._v('B) ["World", "Hello"] ')])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("input",{attrs:{type:"radio",name:"question-2-answers",id:"question-2-answers-C",value:"C"}}),t._v(" "),n("label",{attrs:{for:"question-2-answers-C"}},[t._v("C) None ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("input",{attrs:{type:"radio",name:"question-2-answers",id:"question-2-answers-D",value:"D"}}),t._v(" "),n("label",{attrs:{for:"question-2-answers-D"}},[t._v('D) "Hello World" ')])])}],!1,null,null,null);e.default=component.exports;c()(component,{Header:n(347).default,QuadSpace:n(348).default,BeforeNextButton:n(349).default}),c()(component,{VBtn:v.a,VIcon:_.a})}}]);