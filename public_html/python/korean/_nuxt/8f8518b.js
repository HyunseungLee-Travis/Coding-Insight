(window.webpackJsonp=window.webpackJsonp||[]).push([[67,3,4,5],{418:function(t,n,e){"use strict";e.r(n);var r={props:["title","num"],data:function(){return{count:0}},methods:{debuga:function(){window.location="https://coding-insight.com/python/english"+$nuxt.$route.path+"-en.html"},speak:function(){if(this.count%2==0)try{var a=new SpeechSynthesisUtterance(document.body.innerText.substring(document.body.innerText.indexOf("읽어주기")+8));a.lang="ko-kr",speechSynthesis.speak(a)}catch(t){alert(":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다. 에러 ("+t+")")}else try{speechSynthesis.cancel()}catch(t){alert(":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다.")}this.count++}}},c=e(91),l=e(124),o=e.n(l),v=e(207),d=e(182),component=Object(c.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"text-center"},[e("hr"),t._v(" "),e("br"),t._v(" "),e("v-btn",{staticClass:"ma-2",attrs:{outlined:""},on:{click:t.speak}},[t._v("\n    "+t._s(t.count%2==0?"읽어주기":"멈추기")),e("v-icon",{attrs:{right:""}},[t._v("\n      "+t._s(t.count%2==0?"mdi-bullhorn":"mdi-pause-octagon"))])],1),t._v(" "),e("v-btn",{staticClass:"ma-2",attrs:{outlined:""},on:{click:t.debuga}},[t._v("\n    English"),e("v-icon",{attrs:{right:""}},[t._v(" mdi-ab-testing ")])],1),t._v(" "),e("br"),e("br"),t._v(" "),e("h1",{staticClass:"display-6"},[e("span",[t._v(t._s(t.title))]),e("br",{attrs:{id:"lbbr"}}),e("span",{attrs:{id:"txt"}},[t._v("Computer Science Lab (")]),t._v("CSL"),e("span",{attrs:{id:"txt"}},[t._v(")")]),t._v("\n    "+t._s(t.num)+"\n  ")]),t._v(" "),e("br"),t._v(" "),e("hr")],1)}),[],!1,null,null,null);n.default=component.exports;o()(component,{VBtn:v.a,VIcon:d.a})},419:function(t,n,e){"use strict";e.r(n);var r={},c=e(91),component=Object(c.a)(r,(function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("br"),n("br"),n("br"),n("br")])}],!1,null,null,null);n.default=component.exports},420:function(t,n,e){"use strict";e.r(n);var r={props:["flink","slink"]},c=e(91),l=e(124),o=e.n(l),v=e(207),d=e(182),component=Object(c.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("NuxtLink",{staticStyle:{"text-decoration":"none",float:"left"},attrs:{to:"./"+t.flink}},[e("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[e("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),t._v("Back\n    ")],1)],1),t._v(" "),e("NuxtLink",{staticStyle:{"text-decoration":"none",float:"right"},attrs:{to:"./"+t.slink}},[e("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[t._v("\n      Next"),e("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports;o()(component,{VBtn:v.a,VIcon:d.a})},589:function(t,n,e){"use strict";e.r(n);var r=e(91),component=Object(r.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("br"),t._v(" "),e("Header",{attrs:{num:"67",title:"나만의 데코레이터"}}),t._v(" "),e("QuadSpace"),t._v(" "),t._m(0),t._v(" "),e("iframe",{attrs:{src:"https://trinket.io/embed/python3/98ddcafe80",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}}),t._v(" "),e("QuadSpace"),t._v(" "),e("BeforeNextButton",{attrs:{flink:"decorator",slink:"pythondecorator"}}),t._v(" "),e("QuadSpace")],1)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",[e("h1",[t._v("@mydecorator")]),t._v(" "),e("p",[t._v("데코레이터를 사용하면 나만의 기능을 더 추가할 수 있습니다.")])])])}],!1,null,null,null);n.default=component.exports;installComponents(component,{Header:e(418).default,QuadSpace:e(419).default,BeforeNextButton:e(420).default})}}]);