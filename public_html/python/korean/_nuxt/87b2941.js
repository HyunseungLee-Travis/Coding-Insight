(window.webpackJsonp=window.webpackJsonp||[]).push([[96,3,4,5],{418:function(t,n,r){"use strict";r.r(n);var e={props:["title","num"],data:function(){return{count:0}},methods:{debuga:function(){window.location="https://coding-insight.com/python/english"+$nuxt.$route.path+"-en.html"},speak:function(){if(this.count%2==0)try{var a=new SpeechSynthesisUtterance(document.body.innerText.substring(document.body.innerText.indexOf("읽어주기")+8));a.lang="ko-kr",speechSynthesis.speak(a)}catch(t){alert(":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다. 에러 ("+t+")")}else try{speechSynthesis.cancel()}catch(t){alert(":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다.")}this.count++}}},v=r(91),c=r(124),l=r.n(c),o=r(207),h=r(182),component=Object(v.a)(e,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"text-center"},[r("hr"),t._v(" "),r("br"),t._v(" "),r("v-btn",{staticClass:"ma-2",attrs:{outlined:""},on:{click:t.speak}},[t._v("\n    "+t._s(t.count%2==0?"읽어주기":"멈추기")),r("v-icon",{attrs:{right:""}},[t._v("\n      "+t._s(t.count%2==0?"mdi-bullhorn":"mdi-pause-octagon"))])],1),t._v(" "),r("v-btn",{staticClass:"ma-2",attrs:{outlined:""},on:{click:t.debuga}},[t._v("\n    English"),r("v-icon",{attrs:{right:""}},[t._v(" mdi-ab-testing ")])],1),t._v(" "),r("br"),r("br"),t._v(" "),r("h1",{staticClass:"display-6"},[r("span",[t._v(t._s(t.title))]),r("br",{attrs:{id:"lbbr"}}),r("span",{attrs:{id:"txt"}},[t._v("Computer Science Lab (")]),t._v("CSL"),r("span",{attrs:{id:"txt"}},[t._v(")")]),t._v("\n    "+t._s(t.num)+"\n  ")]),t._v(" "),r("br"),t._v(" "),r("hr")],1)}),[],!1,null,null,null);n.default=component.exports;l()(component,{VBtn:o.a,VIcon:h.a})},419:function(t,n,r){"use strict";r.r(n);var e={},v=r(91),component=Object(v.a)(e,(function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("br"),n("br"),n("br"),n("br")])}],!1,null,null,null);n.default=component.exports},420:function(t,n,r){"use strict";r.r(n);var e={props:["flink","slink"]},v=r(91),c=r(124),l=r.n(c),o=r(207),h=r(182),component=Object(v.a)(e,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("NuxtLink",{staticStyle:{"text-decoration":"none",float:"left"},attrs:{to:"./"+t.flink}},[r("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[r("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),t._v("Back\n    ")],1)],1),t._v(" "),r("NuxtLink",{staticStyle:{"text-decoration":"none",float:"right"},attrs:{to:"./"+t.slink}},[r("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[t._v("\n      Next"),r("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports;l()(component,{VBtn:o.a,VIcon:h.a})},609:function(t,n,r){"use strict";r.r(n);var e=r(91),v=r(124),c=r.n(v),l=r(159),component=Object(e.a)({},(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("br"),t._v(" "),r("div",{staticStyle:{display:"flex"}},[t._m(0),t._v(" "),r("div",[r("v-img",{staticClass:"img-fluid",attrs:{alt:"python-factory-picture",src:"data:image/png;base64,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","max-width":"300px"}})],1)]),t._v(" "),r("br"),r("br"),t._v(" "),r("Header",{attrs:{num:"90",title:"터틀"}}),t._v(" "),r("QuadSpace"),t._v(" "),t._m(1),t._v(" "),r("QuadSpace"),t._v(" "),t._m(2),t._v(" "),r("QuadSpace"),t._v(" "),t._m(3),t._v(" "),r("QuadSpace"),t._v(" "),r("BeforeNextButton",{attrs:{flink:"mouse",slink:"pandas"}}),t._v(" "),r("QuadSpace")],1)}),[function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticStyle:{margin:"auto"}},[r("h1",[t._v("Turtle이란?")]),t._v(" "),r("p",[t._v('\n        "Turtle이란 영어로 거북이를 뜻합니다."'),r("br"),r("br"),t._v('\n\n        "빙고!!!"'),r("br"),r("br"),t._v("\n\n        ...라고 할 줄 알았죠? 하지만 터틀은 파이썬에서만은 거북이가\n        아닙니다."),r("br"),r("br"),t._v("\n\n        Turtle은 파이썬에서 그래픽을 만드는데 사용되는 모듈입니다. 원한다면\n        Turtle을 이용하여 간단한 게임을 만드는 것이 가능합니다.\n      ")])])},function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("div",[r("h1",[t._v("터틀 시작하기")]),t._v(" "),r("p",[t._v("\n        Turtle은 모듈입니다. 이 모듈은 파이썬을 깔 때 설치가 저동적으로\n        되어있습니다. 시작하기 위하여 새로운 파일을 만들고 터틀을 가지고\n        옵니다."),r("br"),r("br"),t._v("\n        하지만 절대로 파일의 이름을 turtle이라고 만들지 마세요!!! 그렇게\n        한다면 우리가 터틀을 가지고올 때 터틀 모듈이 아니라 우리의 파일을\n        가지고 옵니다."),r("br"),r("br"),t._v(" "),r("code",[t._v(" import turtle as turty ")])])])])},function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("div",[r("h1",[t._v("Turtle 진짜로 시작")]),t._v(" "),r("p",[t._v("\n        터틀에서 우리의 '거북이'가 움직일 창이 필요합니다. 창을 보이게 하기\n        위하여 'getscreen()' 메서드를 사용해보겠습니다."),r("br"),r("br"),t._v("\n\n        또, 터틀을 만들어야합니다. 터틀이란 파이썬 터틀 모듈에서 주인공입니다.\n        우리가 그 터틀을 기준으로 그림을 그리거나 게임을 만듭니다."),r("br"),r("br"),t._v("\n\n        이 웹사이트에서 '터틀'이라고 하면 파이썬의 모듈 또는 파이썬 모듈의\n        주인공 캐릭터를 뜻합니다.\n      ")])])])},function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("h1",[t._v("Turtle 움직이기")]),t._v(" "),r("p"),r("h3",[t._v("앞, 뒤, 옆으로 움직이기")]),t._v("\n\n          우리가 getscreen 메서드를 사용했을 때 새로은 창이 생겼고 그 가운데에\n          마우스가 있었습니다. 그 마우스를 파이썬에서는 '터틀'이라고 합니다.\n          이 터틀을 움직이게 하기 위하여 4개의 메서드가 있습니다."),r("br"),r("br"),t._v(" "),r("code",[t._v("\n            import turtle as turty"),r("br"),r("br"),t._v("\n\n            mainTurty = turty.Turtle()"),r("br"),r("br"),t._v("\n\n            mainTurty.right(90) #오른쪽으로 90도 돌기"),r("br"),t._v("\n            mainTurty.forward(90) #앞으로 90도 움직이기"),r("br"),t._v("\n            mainTurty.left(90) #왼쪽으로 90도 돌기"),r("br"),t._v("\n            mainTurty.backward(90) #앞으로 90도 움직이기\n          ")]),t._v(" "),r("p",[t._v("\n            right, forward, left, backward 메서드가 있습니다. 이 메서드를 자주\n            사용할 것입니다. 더 효율적이고 보기 쉽게 만들기 위하여 이 네 개\n            메서드의 속기를 알아보겠습니다.\n          ")]),t._v(" "),r("p",[t._v("\n            right, forward, left의 가장 앞과 뒤 자를 따서 rt(), fd(), lt()와\n            backward의 b와 k자를 따서 bk()가 있습니다.\n          ")]),t._v(" "),r("h3",[t._v("x, y 좌표")]),t._v(" "),r("p",[t._v("\n            터틀을 x와 y 좌표 한 점으로 움직이는 것도 가능합니다. 바로 goto(x,\n            y) 메서드를 사용하면 됩니다. GO to your room! (너 방으로 가!)는\n            부모님이 많이 하시는 말씀입니다. 여기서 goto를 따서 터틀을\n            움직이게 할 수 있습니다.\n          ")]),t._v(" "),r("code",[t._v("\n            import turtle as turty"),r("br"),r("br"),t._v("\n\n            mainTurty = turty.Turtle()"),r("br"),r("br"),t._v("\n\n            mainTurty.goto(100, 100)\n          ")]),t._v(" "),r("p",[t._v("\n            또, let's go to your home(집에 가자)은 친구들 사이에서 자주\n            사용되는 말입니다. 집(home)으로 가자는 터틀에서는 0, 0으로 가자를\n            뜻합니다.\n          ")]),t._v(" "),r("p",[t._v("\n            다음 3 메서드 goto, setpos, setposition은 다 같은 것을 하는\n            메서드입니다.\n          ")]),t._v(" "),r("code",[t._v("\n            import turtle as turty"),r("br"),r("br"),t._v("\n\n            mainTurty = turty.Turtle()"),r("br"),r("br"),t._v("\n\n            mainTurty.goto(444, 444)"),r("br"),t._v("\n            mainTurty.setpos(444, 444)"),r("br"),t._v("\n            mainTurty.setposition(444, 444)"),r("br"),r("br"),t._v("\n\n            mainTurty.home()\n          ")]),t._v(" "),r("p",[t._v("\n            x, y 좌표 하나하나 지정하고 싶다면 setx() 또는 sety() 함수를\n            사용할 수 있습니다.\n          ")]),t._v(" "),r("code",[t._v("\n            import turtle as turty"),r("br"),r("br"),t._v("\n\n            mainTurty = turty.Turtle()"),r("br"),r("br"),t._v("\n\n            mainTurty.setx(444)"),r("br"),t._v("\n            mainTurty.sety(444)\n          ")]),t._v(" "),r("h3",[t._v("터틀 방향")]),t._v(" "),r("p",[t._v("\n            터틀의 방향은 right()와 left()를 이용할 수 있지만 지금 캐릭터의\n            방향을 기준으로 x 만큼 터틀이 돌아갑니다.\n          ")]),t._v(" "),r("p",[t._v("\n            각도를 기준으로 터틀이 보는 각도를 정할 수 있습니다.\n            setheading()과 seth()를 이용하여 터틀 보는 방향을 바꿀 수\n            있습니다.\n          ")]),t._v(" "),r("code",[t._v("\n            import turtle as turty"),r("br"),r("br"),t._v("\n\n            mainTurty = turty.Turtle()"),r("br"),r("br"),t._v("\n\n            mainTurty.setheading(180) #190도로 보기\n          ")]),t._v(" "),r("p")])}],!1,null,null,null);n.default=component.exports;c()(component,{Header:r(418).default,QuadSpace:r(419).default,BeforeNextButton:r(420).default}),c()(component,{VImg:l.a})}}]);