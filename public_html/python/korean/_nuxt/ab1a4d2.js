(window.webpackJsonp=window.webpackJsonp||[]).push([[62,3,4,5],{418:function(t,e,n){"use strict";n.r(e);var r={props:["title","num"],data:function(){return{count:0}},methods:{debuga:function(){window.location="https://coding-insight.com/python/english"+$nuxt.$route.path+"-en.html"},speak:function(){if(this.count%2==0)try{var a=new SpeechSynthesisUtterance(document.body.innerText.substring(document.body.innerText.indexOf("읽어주기")+8));a.lang="ko-kr",speechSynthesis.speak(a)}catch(t){alert(":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다. 에러 ("+t+")")}else try{speechSynthesis.cancel()}catch(t){alert(":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다.")}this.count++}}},l=n(91),v=n(124),_=n.n(v),o=n(207),c=n(182),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("hr"),t._v(" "),n("br"),t._v(" "),n("v-btn",{staticClass:"ma-2",attrs:{outlined:""},on:{click:t.speak}},[t._v("\n    "+t._s(t.count%2==0?"읽어주기":"멈추기")),n("v-icon",{attrs:{right:""}},[t._v("\n      "+t._s(t.count%2==0?"mdi-bullhorn":"mdi-pause-octagon"))])],1),t._v(" "),n("v-btn",{staticClass:"ma-2",attrs:{outlined:""},on:{click:t.debuga}},[t._v("\n    English"),n("v-icon",{attrs:{right:""}},[t._v(" mdi-ab-testing ")])],1),t._v(" "),n("br"),n("br"),t._v(" "),n("h1",{staticClass:"display-6"},[n("span",[t._v(t._s(t.title))]),n("br",{attrs:{id:"lbbr"}}),n("span",{attrs:{id:"txt"}},[t._v("Computer Science Lab (")]),t._v("CSL"),n("span",{attrs:{id:"txt"}},[t._v(")")]),t._v("\n    "+t._s(t.num)+"\n  ")]),t._v(" "),n("br"),t._v(" "),n("hr")],1)}),[],!1,null,null,null);e.default=component.exports;_()(component,{VBtn:o.a,VIcon:c.a})},419:function(t,e,n){"use strict";n.r(e);var r={},l=n(91),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("br"),e("br"),e("br"),e("br")])}],!1,null,null,null);e.default=component.exports},420:function(t,e,n){"use strict";n.r(e);var r={props:["flink","slink"]},l=n(91),v=n(124),_=n.n(v),o=n(207),c=n(182),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NuxtLink",{staticStyle:{"text-decoration":"none",float:"left"},attrs:{to:"./"+t.flink}},[n("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[n("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),t._v("Back\n    ")],1)],1),t._v(" "),n("NuxtLink",{staticStyle:{"text-decoration":"none",float:"right"},attrs:{to:"./"+t.slink}},[n("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[t._v("\n      Next"),n("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;_()(component,{VBtn:o.a,VIcon:c.a})},584:function(t,e,n){"use strict";n.r(e);var r=n(91),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("br"),t._v(" "),t._m(0),t._v(" "),n("br"),n("br"),t._v(" "),n("Header",{attrs:{title:"Matplotlib",num:"88"}}),t._v(" "),n("QuadSpace"),t._v(" "),t._m(1),t._v(" "),n("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/40b5ec6e62",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}}),t._v(" "),n("QuadSpace"),t._v(" "),t._m(2),t._v(" "),n("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/6d6b423f37",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}}),t._v(" "),n("QuadSpace"),t._v(" "),t._m(3),t._v(" "),n("QuadSpace"),t._v(" "),t._m(4),t._v(" "),n("QuadSpace"),t._v(" "),t._m(5),t._v(" "),n("QuadSpace"),t._v(" "),t._m(6),t._v(" "),n("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/c4218ab83d",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}}),t._v(" "),n("QuadSpace"),t._v(" "),t._m(7),t._v(" "),n("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/074b4c95ef",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}}),t._v(" "),n("QuadSpace"),t._v(" "),n("BeforeNextButton",{attrs:{flink:"keyboard",slink:"mouse"}}),t._v(" "),n("QuadSpace")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("h1",[t._v("mathplotlib")]),t._v(" "),n("p",[t._v("\n        mathplotlib = math + plot + libarary"),n("br"),n("br"),t._v("\n        matplotlib는 수학과 그래프를 다루는 파이썬 모듈입니다."),n("br"),n("br"),t._v("\n        matplotlib는 모듈이이어서 먼저 가지고 와야합니다."),n("br"),n("br"),t._v(" "),n("code",[t._v("\n        import matplotlib\n        ")]),t._v("\n        matplotlib의 버전을 출력하기 위하여 다음과 같은 방법을 사용할 수 있습니다.\n        "),n("code",[t._v("\n        print(matplotlib.__version__)\n        ")])])]),t._v(" "),n("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/3e28c18725",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("h1",[t._v("그래프 그리기")]),t._v(" "),n("p",[t._v("\n        matplotlib에서는 리스트를 이용하여 함수의 정의역과 치역을 계산합니다."),n("br"),n("br"),t._v("\n        정의역은 x의 값들이고 치역은 y의 값들입니다."),n("br"),n("br"),t._v(" "),n("code",[t._v("\n          import matplotlib.pyplot as plt"),n("br"),n("br"),t._v("\n\n          plt.plot([1, 10], [1, 10])"),n("br"),t._v("\n          plt.show()\n        ")]),t._v("\n\n        pyplot은 matplotlib 모듈의 또 다른 모듈입니다. pyplot은 Python + plot입니다. plt.show()는 그래프를 보여줍니다."),n("br"),n("br"),t._v("\n\n        점을 만들기 위하여 plot 메서드의 세 번째 매개변수로 문자를 입력하면 됩니다. 'x'도 되고 'o'도 됩니다."),n("br"),n("br")]),n("h2",[t._v("정리")]),t._v(" "),n("hr"),t._v("\n      1차 방정식: 리스트 안에 수 2개"),n("br"),t._v("\n      2차 방정식: 3개"),n("br"),t._v("\n      ..."),n("br"),t._v("\n      n차 방정식: n+1개"),n("br"),t._v(" "),n("p")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("마커")]),t._v(" "),n("p"),n("h3",[t._v("marker")]),t._v(" "),n("p",[t._v("matplotlib에서의 마커는 그래프가 꺽이는 부분에 점을 넣을 수 있습니다.")]),t._v(" "),n("p",[n("code",[t._v('\n          plt.plot([1, 10, 30], [1, 10, 20], marker="x")\n          ')])]),t._v(" "),n("p",[t._v("marker 매개변수로 문자를 넣을 수 있습니다.")]),t._v(" "),n("h3",[t._v("문자 fmt")]),t._v(" "),n("p",[t._v("그래프의 마커, 선, 그리고 색을 정하기 위하여 다음과 같은 방법을 사용할 수 있습니다.")]),t._v(" "),n("p",[t._v("첫 번째는 마커의 모양입니다.\n          두 번째는 그래프 선의 모양입니다. (: 점선, - 선, --줄선, -. 줄/점 선)\n          세 번째는 그래프의 색깔입니다. (색깔의 첫 번째 색깔)\n        ")]),t._v(" "),n("p",[n("code",[t._v("\n          plt.plot([1, 10, 20], [1, 24, 44], 'o:r')\n          ")])]),t._v(" "),n("h3",[t._v("마커 크기")]),t._v(" "),n("p",[t._v("마커의 크기는 매개변수 ms에 수를 입력하면 됩니다.")]),t._v(" "),n("p",[n("code",[t._v('\n          plt.plot([1, 10, 20], [1, 24, 44], marker = "o", ms = 30)\n          ')])]),t._v(" "),n("h3",[t._v("마커 윤곽선")]),t._v(" "),n("p",[t._v("마커의 윤곽선은 mec를 이용하여 지정할 수 있습니다.")]),t._v(" "),n("p",[n("code",[t._v("\n          plt.plot([1, 10, 20], [1, 24, 44], marker = \"o\", ms = 30, mec = 'r')\n          ")])]),t._v(" "),n("p",[t._v("mec는 marker + edge + color의 약자입니다.")]),t._v(" "),n("h3",[t._v("마커 색깔")]),t._v(" "),n("p",[t._v("마커의 색깔은 mfc (marker + face + color)로 설정할 수 있습니다.\n          "),n("code",[t._v("\n          plt.plot([1, 10, 20], [1, 24, 44], marker = \"o\", ms = 30, mec = 'r', mfc = 'g')\n          ")])]),t._v(" "),n("p")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("div",[n("h1",[t._v("선")]),t._v(" "),n("p"),n("h2",[t._v("선 스타일")]),t._v("\n        선의 스타일을 정할 수 있는 방법을 알아보겠습니다."),n("br"),n("br"),t._v("\n        선의 스타일로 linestyle 매개변수에 dotted, dotted, dashed, None, dashdot, solid를 사용할 수 있습니다. linestyle은 ls로도 사용할 수\n        있습니다."),n("br"),n("br"),t._v(" "),n("code",[t._v("\n        plt.plot([1, 10, 20], [1, 24, 44], linestyle = 'dashed')\n        ")]),t._v(" "),n("h2",[t._v("선 폭")]),t._v("\n        선의 폭은 linewidth 또는 lw로 설정할 수 있습니다."),n("br"),n("br"),t._v(" "),n("code",[t._v("\n        plt.plot([1, 4, 5], [1, 4, 6], linewidth = '3.14159')\n        ")]),t._v(" "),n("p")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("div",[n("h1",[t._v("레이블과 제목")]),t._v(" "),n("p",[t._v("\n          x 쪽이 무엇인지 사용자에게 알려주어야합니다. 시간일 수도 있고 값일 수도 있습니다."),n("br"),n("br"),t._v(" "),n("code",[t._v('\n          plt.xlabel("Time (h)")'),n("br"),t._v('\n          plt.ylabel("Money (w)") ')]),t._v("\n          그래프의 제목은 title() 메서드를 사용할 수 있습니다."),n("br"),n("br"),t._v(" "),n("code",[t._v('\n          plt.title("Money spent") ')]),t._v("\n          그래프 제목의 스타일과 위치를 바꾸기 위하여 다음과 같은 방법을 사용할 수 있습니다."),n("br"),n("br"),t._v(" "),n("code",[t._v("\n          font1 = {"),n("br"),t._v("\n          'family': \"serif\","),n("br"),t._v("\n          'color': \"black\","),n("br"),t._v("\n          'size': 30"),n("br"),n("br"),t._v("\n          }"),n("br"),t._v('\n          plt.title("Money spent", fontdict = font1)\n          ')])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("div",[n("h1",[t._v("scatter")]),t._v(" "),n("p",[t._v("\n          점을 여러개 만들고 싶다면 scatter 메서드를 사용할 수 있습니다."),n("br"),n("br"),t._v("\n          scatter는 영어로 '튀다'라는 뜻을 가지고 있지만 '퍼져있다'라는 뜻고 가지고 있습니다."),n("br"),n("br"),t._v(" "),n("code",[t._v("\n          plt.scatter([0, 1, 2, 3, 4, 5], [0, 10, 20, 30, 40, 50])"),n("br"),t._v("\n          plt.show() ")]),t._v("\n          매개변수는 다음이 전부입니다."),n("br"),n("br"),t._v('\n          1. color = "color" --- 점의 색깔'),n("br"),t._v('\n          2. c = ["red", "green"] --- 하나하나 점 색칠하기'),n("br"),t._v("\n          3. s = [1, 2, 4] --- 사이즈"),n("br"),t._v("\n          4. alpha = 0.5 --- 투명도 (0~1)\n        ")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("div",[n("h1",[t._v("historgrams")]),t._v(" "),n("p",[t._v("\n          historgrams는 통계에 자주 사용되는 그래프의 종류입니다. 바와 비슷하지만 붙어있습니다."),n("br"),n("br"),t._v("\n          historgrams는 hist() 메서드를 사용할 수 있습니다."),n("br"),n("br")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("div",{staticStyle:{padding:"10px"}},[n("h1",[t._v("pie")]),t._v(" "),n("p",[t._v("\n          pie 그래프? pi 그래프?"),n("br"),n("br"),t._v("\n          pie 그래프란 pie와 모양이 비슷하게 생긴 그래프를 뜻합니다."),n("br"),n("br"),t._v("\n          pie가 무엇인지 모르나요? pie는 파이입니다 (3.14159...가 아니고요! 이 숫자를 생각했다면 유식합니다)."),n("br"),n("br"),t._v("\n          파이차트는 pie() 메서드를 사용할 수 잇습니다."),n("br"),n("br"),t._v("\n          매개변수:"),n("br"),t._v("\n          1. explode = [0.2, 0, 0] --- 터지다! (사실 아닙니다. 어떤 파이처트의 부분이 가운데에서 떨어져 있는 거리를 뜻합니다.)"),n("br"),t._v("\n          2. shadow = True --- 그림자"),n("br"),t._v('\n          3. colors = "colorname"'),n("br"),t._v('\n          4. labels = ["Appple", "Banana"] --- 설명'),n("br"),n("br"),t._v("\n          파이그래프의 재목은 label을 지정하고 legend()를 이용하여 정할 수 있습니다.\n        ")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(418).default,QuadSpace:n(419).default,BeforeNextButton:n(420).default})}}]);