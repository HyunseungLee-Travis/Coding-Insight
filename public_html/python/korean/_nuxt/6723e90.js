(window.webpackJsonp=window.webpackJsonp||[]).push([[85,3,4,5],{418:function(t,e,n){"use strict";n.r(e);var r={props:["title","num"],data:function(){return{count:0}},methods:{debuga:function(){window.location="https://coding-insight.com/python/english"+$nuxt.$route.path+"-en.html"},speak:function(){if(this.count%2==0)try{var a=new SpeechSynthesisUtterance(document.body.innerText.substring(document.body.innerText.indexOf("읽어주기")+8));a.lang="ko-kr",speechSynthesis.speak(a)}catch(t){alert(":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다. 에러 ("+t+")")}else try{speechSynthesis.cancel()}catch(t){alert(":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다.")}this.count++}}},c=n(91),l=n(124),o=n.n(l),v=n(207),_=n(182),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("hr"),t._v(" "),n("br"),t._v(" "),n("v-btn",{staticClass:"ma-2",attrs:{outlined:""},on:{click:t.speak}},[t._v("\n    "+t._s(t.count%2==0?"읽어주기":"멈추기")),n("v-icon",{attrs:{right:""}},[t._v("\n      "+t._s(t.count%2==0?"mdi-bullhorn":"mdi-pause-octagon"))])],1),t._v(" "),n("v-btn",{staticClass:"ma-2",attrs:{outlined:""},on:{click:t.debuga}},[t._v("\n    English"),n("v-icon",{attrs:{right:""}},[t._v(" mdi-ab-testing ")])],1),t._v(" "),n("br"),n("br"),t._v(" "),n("h1",{staticClass:"display-6"},[n("span",[t._v(t._s(t.title))]),n("br",{attrs:{id:"lbbr"}}),n("span",{attrs:{id:"txt"}},[t._v("Computer Science Lab (")]),t._v("CSL"),n("span",{attrs:{id:"txt"}},[t._v(")")]),t._v("\n    "+t._s(t.num)+"\n  ")]),t._v(" "),n("br"),t._v(" "),n("hr")],1)}),[],!1,null,null,null);e.default=component.exports;o()(component,{VBtn:v.a,VIcon:_.a})},419:function(t,e,n){"use strict";n.r(e);var r={},c=n(91),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("br"),e("br"),e("br"),e("br")])}],!1,null,null,null);e.default=component.exports},420:function(t,e,n){"use strict";n.r(e);var r={props:["flink","slink"]},c=n(91),l=n(124),o=n.n(l),v=n(207),_=n(182),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NuxtLink",{staticStyle:{"text-decoration":"none",float:"left"},attrs:{to:"./"+t.flink}},[n("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[n("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),t._v("Back\n    ")],1)],1),t._v(" "),n("NuxtLink",{staticStyle:{"text-decoration":"none",float:"right"},attrs:{to:"./"+t.slink}},[n("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[t._v("\n      Next"),n("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;o()(component,{VBtn:v.a,VIcon:_.a})},536:function(t,e,n){"use strict";n.r(e);var r={name:"SetPage",methods:{checkAnswer:function(){document.getElementById("question-2-answers-D").checked?alert("1번 맞았습니다!"):alert("1번 틀렸습니다")}}},c=n(91),l=n(124),o=n.n(l),v=n(207),_=n(182),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("br"),t._v(" "),t._m(0),t._v(" "),n("br"),n("br"),t._v(" "),t._m(1),t._v(" "),n("br"),n("br"),t._v(" "),n("Header",{attrs:{num:"24",title:"집합"}}),t._v(" "),n("QuadSpace"),t._v(" "),t._m(2),t._v(" "),n("QuadSpace"),t._v(" "),t._m(3),t._v(" "),n("QuadSpace"),t._v(" "),t._m(4),t._v(" "),n("QuadSpace"),t._v(" "),n("BeforeNextButton",{attrs:{flink:"tuple",slink:"setmethod"}}),t._v(" "),n("QuadSpace"),t._v(" "),n("div",{staticClass:"quiz"},[n("h1",[t._v("퀴즈 풀기!")]),t._v(" "),n("hr"),t._v(" "),n("br"),n("br"),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),n("br"),n("br"),t._v(" "),n("v-btn",{on:{click:t.checkAnswer}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-check-decagram")]),t._v("정답 확인\n    ")],1)],1),t._v(" "),n("QuadSpace")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("h1",[t._v("집합이란?")]),t._v(" "),n("p",[t._v("\n        집합이란 어떤 객관적인 조건에 따라 나뉘어진 목록이라고 할 수\n        있습니다."),n("br"),n("br"),t._v("\n\n        객관적이란 분명한 기준을 뜻합니다. 예를 들어 키 큰 사람은 집합이 될 수\n        없습니다."),n("br"),n("br"),t._v("\n\n        그 이유는 사람마다 키가 크다는 기준이 다르기 때문입니다."),n("br"),n("br"),t._v("\n\n        예를 들어 우리반에서 서울에 사는 친구들의 집합을 만들어 보겠습니다.\n      ")])]),t._v(" "),n("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/17ff96c784",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center"},[e("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/D3sZWUlvDuY",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("h1",[t._v("집합의 특징")]),t._v(" "),n("p",[t._v("집합에는 순서가 없습니다.")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("div",[n("h1",[t._v("집합에 값 더하고 빼기")]),t._v(" "),n("p",[t._v("\n          집합 끝 부분에 값을 더하기 위하여 우리는 'add'라는 함수를 사용해\n          보겠습니다. CODE1 예시를 확인하세요."),n("br"),n("br"),t._v("\n\n          집합을 붙이기 위하여 'update()'을 사용할 수 있습니다. CODE2에서\n          확인할 수 있습니다."),n("br"),n("br"),t._v("\n\n          참고로 집합에서는 순서가 없기 때문에 항상 코드를 실행할 때 마다\n          집합에 있는 값들의 순서는 항상 바뀝니다.\n        ")])]),t._v(" "),n("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/1c4e61a04e",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("h1",[t._v("집합 값 제거")]),t._v(" "),n("p",[t._v("\n        colorSet이라는 집합에 있는 값 중에서 'red'라는 아이템을 remove()를\n        사용해서 제거해 보겠습니다."),n("br"),n("br"),t._v("\n\n        remove()라는 메서드를 사용하는데 만일 'red'라는 아이템이 집합 안에\n        존재하지 않다면 에러가 생깁니다."),n("br"),n("br"),t._v("\n\n        에러가 생기지 않는 것을 원한다면 discard 메서드를 사용하세요.\n      ")])]),t._v(" "),n("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/62528e1b44",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",[t._v('\n      a = {"a", "b", "c", "d", "e"}'),n("br"),t._v('a.remove("f")'),n("br"),t._v("print(a)"),n("br"),n("br"),t._v("\n      코드를 실행하면 출력되는 값은?\n    ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("input",{attrs:{type:"radio",name:"question-2-answers",id:"question-2-answers-A",value:"A"}}),t._v(" "),n("label",{attrs:{for:"question-2-answers-A"}},[t._v('A) {"a", "b", "c", "d", "e"} ')])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("input",{attrs:{type:"radio",name:"question-2-answers",id:"question-2-answers-B",value:"B"}}),t._v(" "),n("label",{attrs:{for:"question-2-answers-B"}},[t._v('B) {"a", "b", "c", "d", "e", "f"}\n      ')])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("input",{attrs:{type:"radio",name:"question-2-answers",id:"question-2-answers-C",value:"C"}}),t._v(" "),n("label",{attrs:{for:"question-2-answers-C"}},[t._v("C) None ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("input",{attrs:{type:"radio",name:"question-2-answers",id:"question-2-answers-D",value:"D"}}),t._v(" "),n("label",{attrs:{for:"question-2-answers-D"}},[t._v("D) 에러 ")])])}],!1,null,null,null);e.default=component.exports;o()(component,{Header:n(418).default,QuadSpace:n(419).default,BeforeNextButton:n(420).default}),o()(component,{VBtn:v.a,VIcon:_.a})}}]);