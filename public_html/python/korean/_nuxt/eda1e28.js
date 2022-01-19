(window.webpackJsonp=window.webpackJsonp||[]).push([[78,3,4,5],{418:function(t,e,n){"use strict";n.r(e);var r={props:["title","num"],data:function(){return{count:0}},methods:{debuga:function(){window.location="https://coding-insight.com/python/english"+$nuxt.$route.path+"-en.html"},speak:function(){if(this.count%2==0)try{var a=new SpeechSynthesisUtterance(document.body.innerText.substring(document.body.innerText.indexOf("읽어주기")+8));a.lang="ko-kr",speechSynthesis.speak(a)}catch(t){alert(":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다. 에러 ("+t+")")}else try{speechSynthesis.cancel()}catch(t){alert(":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다.")}this.count++}}},c=n(91),l=n(124),v=n.n(l),_=n(207),o=n(182),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("hr"),t._v(" "),n("br"),t._v(" "),n("v-btn",{staticClass:"ma-2",attrs:{outlined:""},on:{click:t.speak}},[t._v("\n    "+t._s(t.count%2==0?"읽어주기":"멈추기")),n("v-icon",{attrs:{right:""}},[t._v("\n      "+t._s(t.count%2==0?"mdi-bullhorn":"mdi-pause-octagon"))])],1),t._v(" "),n("v-btn",{staticClass:"ma-2",attrs:{outlined:""},on:{click:t.debuga}},[t._v("\n    English"),n("v-icon",{attrs:{right:""}},[t._v(" mdi-ab-testing ")])],1),t._v(" "),n("br"),n("br"),t._v(" "),n("h1",{staticClass:"display-6"},[n("span",[t._v(t._s(t.title))]),n("br",{attrs:{id:"lbbr"}}),n("span",{attrs:{id:"txt"}},[t._v("Computer Science Lab (")]),t._v("CSL"),n("span",{attrs:{id:"txt"}},[t._v(")")]),t._v("\n    "+t._s(t.num)+"\n  ")]),t._v(" "),n("br"),t._v(" "),n("hr")],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:_.a,VIcon:o.a})},419:function(t,e,n){"use strict";n.r(e);var r={},c=n(91),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("br"),e("br"),e("br"),e("br")])}],!1,null,null,null);e.default=component.exports},420:function(t,e,n){"use strict";n.r(e);var r={props:["flink","slink"]},c=n(91),l=n(124),v=n.n(l),_=n(207),o=n(182),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NuxtLink",{staticStyle:{"text-decoration":"none",float:"left"},attrs:{to:"./"+t.flink}},[n("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[n("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),t._v("Back\n    ")],1)],1),t._v(" "),n("NuxtLink",{staticStyle:{"text-decoration":"none",float:"right"},attrs:{to:"./"+t.slink}},[n("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[t._v("\n      Next"),n("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:_.a,VIcon:o.a})},597:function(t,e,n){"use strict";n.r(e);var r=n(91),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("br"),t._v(" "),n("Header",{attrs:{num:"68",title:"파이썬 데코레이터"}}),t._v(" "),n("QuadSpace"),t._v(" "),t._m(0),t._v(" "),n("QuadSpace"),t._v(" "),t._m(1),t._v(" "),n("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/25a3cc23d1",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}}),t._v(" "),n("QuadSpace"),t._v(" "),t._m(2),t._v(" "),n("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/916a1d2442",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}}),t._v(" "),n("QuadSpace"),t._v(" "),n("BeforeNextButton",{attrs:{flink:"decorator",slink:"newline"}}),t._v(" "),n("QuadSpace")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("h1",[t._v("@mydecorator")]),t._v(" "),n("p",[t._v("\n        다음과 같은 클래스를 만들어 보겠습니다."),n("br"),n("br"),t._v(" "),n("code",[t._v("\n          class Teacher:"),n("br"),t._v("\n            def __init__(self, name, subjectTeaching):"),n("br"),t._v("\n              self.name = name"),n("br"),t._v("\n              self.subjectTeaching = subjectTeaching"),n("br"),n("br"),t._v("\n\n              def name(self):"),n("br"),t._v("\n               return self.name\n        ")]),t._v("\n\n        위의 클래스에서 선생님의 이름을 알기 위하여 name()을 사용해야\n        합니다."),n("br"),n("br"),t._v("\n\n        하지만 @property를 사용한다면 name을 사용할 수 있습니다."),n("br"),n("br"),t._v("\n\n        그래서 이 코드를 함수 앞에 넣으면 그 함수는 이제 클래스에서 변수가\n        됩니다."),n("br"),n("br"),t._v(" "),n("code",[t._v("\n          @property def name(self):"),n("br"),t._v("\n             return self.name\n        ")]),t._v("\n\n        그리고 그 값을 바꿀 수도 있습니다."),n("br"),n("br"),t._v(" "),n("code",[t._v("\n          @name.setter #name 함수의 값을 정하는 새로운 함수를 만들겠습니다"),n("br"),t._v("\n          def name(self, val):"),n("br"),t._v("\n            self.name = val\n        ")]),t._v("\n\n        다음과 같은 코드를 실행할 수 있습니다."),n("br"),n("br"),t._v(" "),n("code",[t._v('\n          myFavTeacher = Teacher("MR JAY")'),n("br"),t._v("\n          print(myFavTeacher.name)"),n("br"),t._v("\n          myFavTeacher.name = 'MS GOULD'"),n("br"),t._v("\n          print(myFavTeacher.name)\n        ")]),t._v("\n\n        또 값을 지울 수도 있습니다."),n("br"),n("br"),t._v(" "),n("code",[t._v("\n          @name.deleter def name(self, val):"),n("br"),t._v("\n            print('삭제하겠습니다….)"),n("br"),t._v("\n            del self.name\n        ")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("h1",[t._v("@classmethod")]),t._v(" "),n("p",[t._v("\n        클래스 값을 메서드로 바꿀 수도 있습니다. 하지만 이 코드 뒤에 나오는\n        함수에서 self는 항상 __init__() 밖에 있는 변수들입니다."),n("br"),n("br"),t._v("\n        그래서 __init__() 안에 있는 변수는 다음 함수에서 존재하지 않습니다.\n      ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("h1",[t._v("@staticmethod")]),t._v(" "),n("p",[t._v("\n        다음에 나오는 함수는 클래스 안에서만 함수 또는 변수를 사용할 수\n        있습니다. 만일 클래스 밖에서 사용했다면 에러가 생길 것입니다.\n      ")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(418).default,QuadSpace:n(419).default,BeforeNextButton:n(420).default})}}]);