(window.webpackJsonp=window.webpackJsonp||[]).push([[106,7,9,10],{347:function(t,e,r){"use strict";r.r(e);var n={props:["title","num"],data:function(){return{count:0}},methods:{toEnglish:function(){window.location="https://coding-insight.com/python/english"+("/"==$nuxt.$route.path?"/python":$nuxt.$route.path)+"-en.html"},speak:function(){if(this.count%2==0)try{var a=new SpeechSynthesisUtterance(document.body.innerText.substring(document.body.innerText.indexOf("읽어주기")+8));a.lang="ko-kr",speechSynthesis.speak(a)}catch(t){alert(":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다. 에러 ("+t+")")}else try{speechSynthesis.cancel()}catch(t){alert(":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다.")}this.count++}}},o=r(63),l=r(171),c=r.n(l),A=r(338),v=r(339),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-center"},[r("hr"),t._v(" "),r("br"),t._v(" "),r("v-btn",{staticClass:"ma-2",attrs:{outlined:""},on:{click:t.speak}},[t._v("\n    "+t._s(t.count%2==0?"읽어주기":"멈추기")),r("v-icon",{attrs:{right:""}},[t._v("\n      "+t._s(t.count%2==0?"mdi-bullhorn":"mdi-pause-octagon"))])],1),t._v(" "),r("v-btn",{staticClass:"ma-2",attrs:{outlined:""},on:{click:t.toEnglish}},[t._v("\n    English"),r("v-icon",{attrs:{right:""}},[t._v(" mdi-ab-testing ")])],1),t._v(" "),r("br"),r("br"),t._v(" "),r("h1",{staticClass:"display-6"},[r("span",[t._v(t._s(t.title))]),r("br",{attrs:{id:"lbbr"}}),r("span",{attrs:{id:"txt"}},[t._v("Computer Science Lab (")]),t._v("CSL"),r("span",{attrs:{id:"txt"}},[t._v(")")]),t._v("\n    "+t._s(t.num)+"\n  ")]),t._v(" "),r("br"),t._v(" "),r("hr")],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:A.a,VIcon:v.a})},348:function(t,e,r){"use strict";r.r(e);var n={},o=r(63),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("br"),e("br"),e("br"),e("br")])}],!1,null,null,null);e.default=component.exports},349:function(t,e,r){"use strict";r.r(e);var n={props:["flink","slink"]},o=r(63),l=r(171),c=r.n(l),A=r(338),v=r(339),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("NuxtLink",{staticStyle:{"text-decoration":"none",float:"left"},attrs:{to:"./"+t.flink}},[r("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[r("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),t._v("Back\n    ")],1)],1),t._v(" "),r("NuxtLink",{staticStyle:{"text-decoration":"none",float:"right"},attrs:{to:"./"+t.slink}},[r("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[t._v("\n      Next"),r("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:A.a,VIcon:v.a})},408:function(t,e,r){t.exports=r.p+"img/helloworld.b462201.jpg"},409:function(t,e,r){var content=r(410);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(57).default)("421e27d6",content,!0,{sourceMap:!1})},410:function(t,e,r){var n=r(56)(!1);n.push([t.i,".theme--light.v-stepper{background:#fff}.theme--light.v-stepper .v-stepper__step:not(.v-stepper__step--active):not(.v-stepper__step--complete):not(.v-stepper__step--error) .v-stepper__step__step{background:rgba(0,0,0,.38)}.theme--light.v-stepper .v-stepper__step__step,.theme--light.v-stepper .v-stepper__step__step .v-icon{color:#fff}.theme--light.v-stepper .v-stepper__header .v-divider{border-color:rgba(0,0,0,.12)}.theme--light.v-stepper .v-stepper__step--active .v-stepper__label{text-shadow:0 0 0 #000}.theme--light.v-stepper .v-stepper__step--editable:hover{background:rgba(0,0,0,.06)}.theme--light.v-stepper .v-stepper__step--editable:hover .v-stepper__label{text-shadow:0 0 0 #000}.theme--light.v-stepper .v-stepper__step--complete .v-stepper__label{color:rgba(0,0,0,.87)}.theme--light.v-stepper .v-stepper__step--inactive.v-stepper__step--editable:not(.v-stepper__step--error):hover .v-stepper__step__step{background:rgba(0,0,0,.54)}.theme--light.v-stepper .v-stepper__label{color:rgba(0,0,0,.38)}.theme--light.v-stepper--non-linear .v-stepper__step:not(.v-stepper__step--complete):not(.v-stepper__step--error) .v-stepper__label,.theme--light.v-stepper .v-stepper__label small{color:rgba(0,0,0,.6)}.v-application--is-ltr .theme--light.v-stepper--vertical .v-stepper__content:not(:last-child){border-left:1px solid rgba(0,0,0,.12)}.v-application--is-rtl .theme--light.v-stepper--vertical .v-stepper__content:not(:last-child){border-right:1px solid rgba(0,0,0,.12)}.theme--dark.v-stepper{background:#303030}.theme--dark.v-stepper .v-stepper__step:not(.v-stepper__step--active):not(.v-stepper__step--complete):not(.v-stepper__step--error) .v-stepper__step__step{background:hsla(0,0%,100%,.5)}.theme--dark.v-stepper .v-stepper__step__step,.theme--dark.v-stepper .v-stepper__step__step .v-icon{color:#fff}.theme--dark.v-stepper .v-stepper__header .v-divider{border-color:hsla(0,0%,100%,.12)}.theme--dark.v-stepper .v-stepper__step--active .v-stepper__label{text-shadow:0 0 0 #fff}.theme--dark.v-stepper .v-stepper__step--editable:hover{background:hsla(0,0%,100%,.06)}.theme--dark.v-stepper .v-stepper__step--editable:hover .v-stepper__label{text-shadow:0 0 0 #fff}.theme--dark.v-stepper .v-stepper__step--complete .v-stepper__label{color:hsla(0,0%,100%,.87)}.theme--dark.v-stepper .v-stepper__step--inactive.v-stepper__step--editable:not(.v-stepper__step--error):hover .v-stepper__step__step{background:hsla(0,0%,100%,.75)}.theme--dark.v-stepper .v-stepper__label{color:hsla(0,0%,100%,.5)}.theme--dark.v-stepper--non-linear .v-stepper__step:not(.v-stepper__step--complete):not(.v-stepper__step--error) .v-stepper__label,.theme--dark.v-stepper .v-stepper__label small{color:hsla(0,0%,100%,.7)}.v-application--is-ltr .theme--dark.v-stepper--vertical .v-stepper__content:not(:last-child){border-left:1px solid hsla(0,0%,100%,.12)}.v-application--is-rtl .theme--dark.v-stepper--vertical .v-stepper__content:not(:last-child){border-right:1px solid hsla(0,0%,100%,.12)}.v-sheet.v-stepper{border-radius:4px}.v-sheet.v-stepper:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-stepper.v-sheet--shaped{border-radius:24px 4px}.v-stepper{border-radius:4px;overflow:hidden;position:relative}.v-stepper__header{height:72px;align-items:stretch;display:flex;flex-wrap:wrap;justify-content:space-between;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-stepper__header .v-divider{align-self:center;margin:0 -16px}.v-stepper__items{position:relative;overflow:hidden}.v-stepper__step__step{align-items:center;border-radius:50%;display:inline-flex;font-size:.75rem;justify-content:center;height:24px;min-width:24px;width:24px;transition:.3s cubic-bezier(.25,.8,.25,1)}.v-application--is-ltr .v-stepper__step__step{margin-right:8px}.v-application--is-rtl .v-stepper__step__step{margin-left:8px}.v-stepper__step__step .v-icon.v-icon{font-size:1.25rem}.v-stepper__step__step .v-icon.v-icon.v-icon--svg{height:1.25rem;width:1.25rem}.v-stepper__step{align-items:center;display:flex;flex-direction:row;padding:24px;position:relative}.v-stepper__step--active .v-stepper__label{transition:.3s cubic-bezier(.4,0,.6,1)}.v-stepper__step--editable{cursor:pointer}.v-stepper__step.v-stepper__step--error .v-stepper__step__step{background:transparent;color:inherit}.v-stepper__step.v-stepper__step--error .v-stepper__step__step .v-icon{font-size:1.5rem;color:inherit}.v-stepper__step.v-stepper__step--error .v-stepper__label{color:inherit;text-shadow:none;font-weight:500}.v-stepper__step.v-stepper__step--error .v-stepper__label small{color:inherit}.v-stepper__label{display:block;flex-grow:1;line-height:1}.v-application--is-ltr .v-stepper__label{text-align:left}.v-application--is-rtl .v-stepper__label{text-align:right}.v-stepper__label small{display:block;font-size:.75rem;font-weight:300;text-shadow:none}.v-stepper__wrapper{overflow:hidden;transition:none}.v-stepper__content{top:0;padding:24px 24px 16px;flex:1 0 auto;width:100%}.v-stepper__content>.v-btn{margin:24px 8px 8px 0}.v-stepper--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-stepper--is-booted .v-stepper__content,.v-stepper--is-booted .v-stepper__wrapper{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-stepper--vertical{padding-bottom:36px}.v-stepper--vertical .v-stepper__content{width:auto}.v-application--is-ltr .v-stepper--vertical .v-stepper__content{padding:16px 60px 16px 23px}.v-application--is-rtl .v-stepper--vertical .v-stepper__content{padding:16px 23px 16px 60px}.v-application--is-ltr .v-stepper--vertical .v-stepper__content{margin:-8px -36px -16px 36px}.v-application--is-rtl .v-stepper--vertical .v-stepper__content{margin:-8px 36px -16px -36px}.v-stepper--vertical .v-stepper__step{padding:24px 24px 16px}.v-application--is-ltr .v-stepper--vertical .v-stepper__step__step{margin-right:12px}.v-application--is-rtl .v-stepper--vertical .v-stepper__step__step{margin-left:12px}.v-stepper--alt-labels .v-stepper__header{height:auto}.v-stepper--alt-labels .v-stepper__header .v-divider{margin:35px -67px 0;align-self:flex-start}.v-stepper--alt-labels .v-stepper__step{flex-direction:column;justify-content:flex-start;align-items:center;flex-basis:175px}.v-stepper--alt-labels .v-stepper__step small{text-align:center}.v-stepper--alt-labels .v-stepper__step__step{margin-bottom:11px;margin-left:0;margin-right:0}@media only screen and (max-width:959.98px){.v-stepper:not(.v-stepper--vertical) .v-stepper__label{display:none}.v-stepper:not(.v-stepper--vertical) .v-stepper__step__step{margin-left:0;margin-right:0}}",""]),t.exports=n},484:function(t,e,r){"use strict";r(16),r(12),r(25),r(14),r(26);var n=r(3),o=(r(360),r(361),r(64),r(33),r(17),r(4),r(409),r(178)),l=r(177),c=r(375),A=r(82),v=r(19);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=Object(A.a)(o.a,Object(l.b)("stepper"),c.a);e.a=d.extend({name:"v-stepper",provide:function(){return{stepClick:this.stepClick,isVertical:this.vertical}},props:{altLabels:Boolean,nonLinear:Boolean,flat:Boolean,vertical:Boolean},data:function(){var data={isBooted:!1,steps:[],content:[],isReverse:!1};return data.internalLazyValue=null!=this.value?this.value:(data[0]||{}).step||1,data},computed:{classes:function(){return _({"v-stepper--flat":this.flat,"v-stepper--is-booted":this.isBooted,"v-stepper--vertical":this.vertical,"v-stepper--alt-labels":this.altLabels,"v-stepper--non-linear":this.nonLinear},o.a.options.computed.classes.call(this))},styles:function(){return _({},o.a.options.computed.styles.call(this))}},watch:{internalValue:function(t,e){this.isReverse=Number(t)<Number(e),e&&(this.isBooted=!0),this.updateView()}},created:function(){this.$listeners.input&&Object(v.a)("@input","@change",this)},mounted:function(){this.updateView()},methods:{register:function(t){"v-stepper-step"===t.$options.name?this.steps.push(t):"v-stepper-content"===t.$options.name&&(t.isVertical=this.vertical,this.content.push(t))},unregister:function(t){"v-stepper-step"===t.$options.name?this.steps=this.steps.filter((function(i){return i!==t})):"v-stepper-content"===t.$options.name&&(t.isVertical=this.vertical,this.content=this.content.filter((function(i){return i!==t})))},stepClick:function(t){var e=this;this.$nextTick((function(){return e.internalValue=t}))},updateView:function(){for(var t=this.steps.length;--t>=0;)this.steps[t].toggle(this.internalValue);for(var e=this.content.length;--e>=0;)this.content[e].toggle(this.internalValue,this.isReverse)}},render:function(t){return t(this.tag,{staticClass:"v-stepper",class:this.classes,style:this.styles},this.$slots.default)}})},485:function(t,e,r){"use strict";r(64),r(71),r(4),r(76);var n=r(374),o=r(177),l=r(5),c=r(82),A=Object(c.a)(Object(o.a)("stepper","v-stepper-content","v-stepper"));e.a=A.extend().extend({name:"v-stepper-content",inject:{isVerticalProvided:{from:"isVertical"}},props:{step:{type:[Number,String],required:!0}},data:function(){return{height:0,isActive:null,isReverse:!1,isVertical:this.isVerticalProvided}},computed:{computedTransition:function(){return(this.$vuetify.rtl?!this.isReverse:this.isReverse)?n.e:n.f},styles:function(){return this.isVertical?{height:Object(l.h)(this.height)}:{}}},watch:{isActive:function(t,e){t&&null==e?this.height="auto":this.isVertical&&(this.isActive?this.enter():this.leave())}},mounted:function(){this.$refs.wrapper.addEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.register(this)},beforeDestroy:function(){this.$refs.wrapper.removeEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.unregister(this)},methods:{onTransition:function(t){this.isActive&&"height"===t.propertyName&&(this.height="auto")},enter:function(){var t=this,e=0;requestAnimationFrame((function(){e=t.$refs.wrapper.scrollHeight})),this.height=0,setTimeout((function(){return t.isActive&&(t.height=e||"auto")}),450)},leave:function(){var t=this;this.height=this.$refs.wrapper.clientHeight,setTimeout((function(){return t.height=0}),10)},toggle:function(t,e){this.isActive=t.toString()===this.step.toString(),this.isReverse=e}},render:function(t){var e={staticClass:"v-stepper__content"},r={staticClass:"v-stepper__wrapper",style:this.styles,ref:"wrapper"};this.isVertical||(e.directives=[{name:"show",value:this.isActive}]);var n=t("div",r,[this.$slots.default]),content=t("div",e,[n]);return t(this.computedTransition,{on:this.$listeners},[content])}})},486:function(t,e,r){"use strict";r(64),r(4),r(76);var n=r(336),o=r(85),l=r(177),c=r(176),A=r(82),v=r(5),h=Object(A.a)(o.a,Object(l.a)("stepper","v-stepper-step","v-stepper"));e.a=h.extend().extend({name:"v-stepper-step",directives:{ripple:c.a},inject:["stepClick"],props:{color:{type:String,default:"primary"},complete:Boolean,completeIcon:{type:String,default:"$complete"},editable:Boolean,editIcon:{type:String,default:"$edit"},errorIcon:{type:String,default:"$error"},rules:{type:Array,default:function(){return[]}},step:[Number,String]},data:function(){return{isActive:!1,isInactive:!0}},computed:{classes:function(){return{"v-stepper__step--active":this.isActive,"v-stepper__step--editable":this.editable,"v-stepper__step--inactive":this.isInactive,"v-stepper__step--error error--text":this.hasError,"v-stepper__step--complete":this.complete}},hasError:function(){return this.rules.some((function(t){return!0!==t()}))}},mounted:function(){this.stepper&&this.stepper.register(this)},beforeDestroy:function(){this.stepper&&this.stepper.unregister(this)},methods:{click:function(t){t.stopPropagation(),this.$emit("click",t),this.editable&&this.stepClick(this.step)},genIcon:function(t){return this.$createElement(n.a,t)},genLabel:function(){return this.$createElement("div",{staticClass:"v-stepper__label"},this.$slots.default)},genStep:function(){var t=!(this.hasError||!this.complete&&!this.isActive)&&this.color;return this.$createElement("span",this.setBackgroundColor(t,{staticClass:"v-stepper__step__step"}),this.genStepContent())},genStepContent:function(){var t=[];return this.hasError?t.push(this.genIcon(this.errorIcon)):this.complete?this.editable?t.push(this.genIcon(this.editIcon)):t.push(this.genIcon(this.completeIcon)):t.push(String(this.step)),t},keyboardClick:function(t){t.keyCode===v.x.space&&this.click(t)},toggle:function(t){this.isActive=t.toString()===this.step.toString(),this.isInactive=Number(t)<Number(this.step)}},render:function(t){return t("div",{attrs:{tabindex:this.editable?0:-1},staticClass:"v-stepper__step",class:this.classes,directives:[{name:"ripple",value:this.editable}],on:{click:this.click,keydown:this.keyboardClick}},[this.genStep(),this.genLabel()])}})},496:function(t,e,r){t.exports=r.p+"img/vscode.322619c.jpg"},497:function(t,e,r){t.exports=r.p+"img/vscodesetup.58e72a0.jpg"},498:function(t,e,r){t.exports=r.p+"img/agree.11d83a1.jpg"},499:function(t,e,r){t.exports=r.p+"img/nextvscode.5774fce.jpg"},500:function(t,e,r){t.exports=r.p+"img/installvscode.a7f9c52.jpg"},501:function(t,e,r){t.exports=r.p+"img/vscodefinish.7c541af.jpg"},502:function(t,e,r){t.exports=r.p+"img/cube.9f4e8f1.jpg"},503:function(t,e,r){t.exports=r.p+"img/input.2a0ab4f.jpg"},504:function(t,e,r){t.exports=r.p+"img/extinstall.772790e.jpg"},505:function(t,e,r){t.exports=r.p+"img/coderunner.4382836.jpg"},506:function(t,e,r){t.exports=r.p+"img/file.79384a3.jpg"},507:function(t,e,r){t.exports=r.p+"img/choose.e4baf23.jpg"},508:function(t,e,r){t.exports=r.p+"img/newfile.c87dd41.jpg"},509:function(t,e,r){t.exports=r.p+"img/filename.fb849d3.jpg"},510:function(t,e,r){t.exports=r.p+"img/tri.6238167.jpg"},511:function(t,e,r){t.exports=r.p+"img/run.efd91e4.jpg"},573:function(t,e,r){"use strict";r.r(e);var n={name:"VSCodePage",data:function(){return{e3:1,e4:1,e5:1}}},o=r(63),l=r(171),c=r.n(l),A=r(338),v=r(363),h=r(355),_=r(364),d=r(538),f=r(484),m=r(485),y=r(486),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("br"),t._v(" "),n("div",{staticStyle:{display:"flex",gap:"10px","flex-wrap":"wrap","text-align":"center"}},[n("div",[n("v-list-item-title",[t._v("VSCode 설치")]),t._v(" "),n("v-stepper",{attrs:{vertical:"",width:"700px"},model:{value:t.e5,callback:function(e){t.e5=e},expression:"e5"}},[n("v-stepper-step",{attrs:{complete:t.e5>1,step:"1"}},[n("a",{staticStyle:{"text-decoration":"none",color:"yellow"},attrs:{target:"_blank",href:"https://code.visualstudio.com/download"}},[t._v("VSCode 설치 페이지")]),t._v("를 방문합니다. & 알맞은 컴퓨터 소프트웨어를 선택합니다."),n("br"),n("br"),t._v(" "),n("small",[t._v("키보드에 창문 그림이 있으면 왼쪽, 없으면 오른쪽입니다")])]),t._v(" "),n("v-stepper-content",{attrs:{step:"1"}},[n("v-card",{staticClass:"mb-12",attrs:{color:"grey lighten-1",height:"200px"}},[n("v-img",{staticClass:"img-fluid",attrs:{alt:"python-factory-picture",src:r(496)}})],1),t._v(" "),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.e5=2}}},[t._v(" Continue ")])],1),t._v(" "),n("v-stepper-step",{attrs:{complete:t.e5>2,step:"2"}},[t._v("\n          새로운 박스가 생길 것이고 설치가 100% 다 되면 그 박스를 클릭하세요.\n        ")]),t._v(" "),n("v-stepper-content",{attrs:{step:"2"}},[n("v-card",{staticClass:"mb-12",attrs:{color:"grey lighten-1",height:"200px"}},[n("v-img",{staticClass:"img-fluid",attrs:{alt:"python-factory-picture",src:r(497)}})],1),t._v(" "),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.e5=3}}},[t._v(" Continue ")])],1),t._v(" "),n("v-stepper-step",{attrs:{complete:t.e5>3,step:"3"}},[t._v("\n          동의합니다 그리고 다음을 누르세요.\n        ")]),t._v(" "),n("v-stepper-content",{attrs:{step:"3"}},[n("v-card",{staticClass:"mb-12",attrs:{color:"grey lighten-1",height:"200px"}},[n("v-img",{staticClass:"img-fluid",attrs:{alt:"python-factory-picture",src:r(498)}})],1),t._v(" "),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.e5=4}}},[t._v(" Continue ")])],1),t._v(" "),n("v-stepper-step",{attrs:{complete:t.e5>4,step:"4"}},[t._v("\n          또 다음을 누르세요.\n        ")]),t._v(" "),n("v-stepper-content",{attrs:{step:"4"}},[n("v-card",{staticClass:"mb-12",attrs:{color:"grey lighten-1",height:"200px"}},[n("v-img",{staticClass:"img-fluid",attrs:{alt:"python-factory-picture",src:r(499)}})],1),t._v(" "),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.e5=5}}},[t._v(" Continue ")])],1),t._v(" "),n("v-stepper-step",{attrs:{complete:t.e5>5,step:"5"}},[t._v("\n          설치 버튼을 누르세요.\n        ")]),t._v(" "),n("v-stepper-content",{attrs:{step:"5"}},[n("v-card",{staticClass:"mb-12",attrs:{color:"grey lighten-1",height:"200px"}},[n("v-img",{staticClass:"img-fluid",attrs:{alt:"python-factory-picture",src:r(500)}})],1),t._v(" "),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.e5=6}}},[t._v(" Continue ")])],1),t._v(" "),n("v-stepper-step",{attrs:{complete:t.e5>5,step:"6"}},[t._v("\n          끝내기 버튼을 누르세요.\n        ")]),t._v(" "),n("v-stepper-content",{attrs:{step:"6"}},[n("v-card",{staticClass:"mb-12",attrs:{color:"grey lighten-1",height:"200px"}},[n("v-img",{staticClass:"img-fluid",attrs:{alt:"python-factory-picture",src:r(501)}})],1)],1)],1)],1),t._v(" "),n("div",[n("v-list-item-title",[t._v("VSCode에서 파이썬 프로그래밍 준비")]),t._v(" "),n("v-stepper",{attrs:{vertical:"",width:"700px"},model:{value:t.e4,callback:function(e){t.e4=e},expression:"e4"}},[n("v-stepper-step",{attrs:{complete:t.e4>1,step:"1"}},[t._v("\n          VSCode 왼쪽 바에 4 큐브 모양의 버튼이 있습니다. 클릭하세요."),n("br"),n("br"),t._v(" "),n("small",[n("kbd",[t._v("CTRL+SHIFT+X")])])]),t._v(" "),n("v-stepper-content",{attrs:{step:"1"}},[n("v-card",{staticClass:"mb-12",attrs:{color:"grey lighten-1",height:"200px"}},[n("v-img",{staticClass:"img-fluid",attrs:{alt:"python-factory-picture",src:r(502)}})],1),t._v(" "),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.e4=2}}},[t._v(" Continue ")])],1),t._v(" "),n("v-stepper-step",{attrs:{complete:t.e4>2,step:"2"}},[t._v("\n          Python이라고 친 후 기다리세요\n        ")]),t._v(" "),n("v-stepper-content",{attrs:{step:"2"}},[n("v-card",{staticClass:"mb-12",attrs:{color:"grey lighten-1",height:"200px"}},[n("v-img",{staticClass:"img-fluid",attrs:{alt:"python-factory-picture",src:r(503)}})],1),t._v(" "),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.e4=3}}},[t._v(" Continue ")])],1),t._v(" "),n("v-stepper-step",{attrs:{complete:t.e4>3,step:"3"}},[t._v("\n          처음으로 나타나는 확장 도구을 설치하세요 (install 버튼 누르기)\n        ")]),t._v(" "),n("v-stepper-content",{attrs:{step:"3"}},[n("v-card",{staticClass:"mb-12",attrs:{color:"grey lighten-1",height:"200px"}},[n("v-img",{staticClass:"img-fluid",attrs:{alt:"python-factory-picture",src:r(504)}})],1),t._v(" "),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.e4=4}}},[t._v(" Continue ")])],1),t._v(" "),n("v-stepper-step",{attrs:{complete:t.e4>4,step:"4"}},[t._v("\n          Code Runner을 치고 가장 먼저 나오는 확장 도구을 설치하세요 (install)\n        ")]),t._v(" "),n("v-stepper-content",{attrs:{step:"4"}},[n("v-card",{staticClass:"mb-12",attrs:{color:"grey lighten-1",height:"200px"}},[n("v-img",{staticClass:"img-fluid",attrs:{alt:"python-factory-picture",src:r(505)}})],1),t._v(" "),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.e4=5}}},[t._v(" Continue ")])],1)],1)],1)]),t._v(" "),n("QuadSpace"),t._v(" "),n("Header",{attrs:{num:"3",title:"VSCode 설치"}}),t._v(" "),n("QuadSpace"),t._v(" "),n("div",[n("v-list-item-title",[t._v("VSCode에서 파이썬 프로그래밍하기")]),t._v(" "),n("v-stepper",{attrs:{vertical:"",width:"700px"},model:{value:t.e3,callback:function(e){t.e3=e},expression:"e3"}},[n("v-stepper-step",{attrs:{complete:t.e3>1,step:"1"}},[t._v("\n        파이썬 코드를 저장하기 위한 폴더가 필요합니다. CTRL+SHIFT+E 또는 왼쪽\n        바에 있는 파일 버튼(버튼 중 맨 위)을 누르세요.\n      ")]),t._v(" "),n("v-stepper-content",{attrs:{step:"1"}},[n("v-card",{staticClass:"mb-12",attrs:{color:"grey lighten-1",height:"200px"}},[n("v-img",{staticClass:"img-fluid",attrs:{alt:"python-factory-picture",src:r(506)}})],1),t._v(" "),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.e3=2}}},[t._v(" Continue ")])],1),t._v(" "),n("v-stepper-step",{attrs:{complete:t.e3>2,step:"2"}},[t._v('\n        "Open Folder" 버튼을 누르고 코드를 저장할 파일을 선택하세요\n      ')]),t._v(" "),n("v-stepper-content",{attrs:{step:"2"}},[n("v-card",{staticClass:"mb-12",attrs:{color:"grey lighten-1",height:"200px"}},[n("v-img",{staticClass:"img-fluid",attrs:{alt:"python-factory-picture",src:r(507)}})],1),t._v(" "),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.e3=3}}},[t._v(" Continue ")])],1),t._v(" "),n("v-stepper-step",{attrs:{complete:t.e3>3,step:"3"}},[t._v("\n        파일 이름 옆에 보면 4개의 버튼이 있습니다. 가장 왼쪽 버튼을\n        클릭하세요.\n      ")]),t._v(" "),n("v-stepper-content",{attrs:{step:"3"}},[n("v-card",{staticClass:"mb-12",attrs:{color:"grey lighten-1",height:"200px"}},[n("v-img",{staticClass:"img-fluid",attrs:{alt:"python-factory-picture",src:r(508)}})],1),t._v(" "),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.e3=4}}},[t._v(" Continue ")])],1),t._v(" "),n("v-stepper-step",{attrs:{complete:t.e3>4,step:"4"}},[t._v("\n        파이썬 파일 이름을 입력 후 '.py'로 끝내고 엔터를 누르세요.\n      ")]),t._v(" "),n("v-stepper-content",{attrs:{step:"4"}},[n("v-card",{staticClass:"mb-12",attrs:{color:"grey lighten-1",height:"200px"}},[n("v-img",{staticClass:"img-fluid",attrs:{alt:"python-factory-picture",src:r(509)}})],1),t._v(" "),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.e3=5}}},[t._v(" Continue ")])],1),t._v(" "),n("v-stepper-step",{attrs:{complete:t.e3>5,step:"5"}},[t._v('\n        파일 안에 파이썬 코드를 입력합니다. print("Hello World")\n      ')]),t._v(" "),n("v-stepper-content",{attrs:{step:"5"}},[n("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.e3=6}}},[t._v(" Continue ")])],1),t._v(" "),n("v-stepper-step",{attrs:{complete:t.e3>6,step:"6"}},[t._v("\n        파이썬 파일 위쪽 코너에 보면 삼각형이 있습니다. 그 삼각형을\n        클릭하세요.\n      ")]),t._v(" "),n("v-stepper-content",{attrs:{step:"6"}},[n("v-card",{staticClass:"mb-12",attrs:{color:"grey lighten-1",height:"200px"}},[n("v-row",[n("v-img",{staticClass:"img-fluid",attrs:{alt:"python-factory-picture",src:r(510)}}),t._v(" "),n("v-img",{staticClass:"v-img-fluid",attrs:{alt:"python-factory-picture",src:r(511),"max-width":"400px"}})],1)],1),t._v(" "),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.e3=7}}},[t._v(" Continue ")])],1),t._v(" "),n("v-stepper-step",{attrs:{complete:t.e3>7,step:"7"}},[t._v("\n        Hello World가 출력되었을 것입니다...\n      ")]),t._v(" "),n("v-stepper-content",{attrs:{step:"7"}},[n("v-card",{staticClass:"mb-12",attrs:{color:"grey lighten-1",height:"200px"}},[n("v-row",[n("v-img",{staticClass:"v-img-fluid",attrs:{alt:"python-factory-picture",src:r(408),"max-width":"400px"}})],1)],1)],1)],1)],1),t._v(" "),n("div",{staticClass:"img-div",staticStyle:{display:"flex",padding:"10px"}},[t._m(0),t._v(" "),n("div",{staticClass:"mx-auto"},[n("v-img",{staticClass:"v-img-fluid",staticStyle:{display:"block"},attrs:{alt:"python-factory-picture",src:"data:image/jpeg;base64,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","max-width":"400px"}})],1)]),t._v(" "),n("QuadSpace"),t._v(" "),n("BeforeNextButton",{attrs:{flink:"install",slink:"io"}}),t._v(" "),n("QuadSpace")],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v(".py?")]),t._v(" "),r("p",[t._v('\n        위의 설명에서 항상 파이썬 파일을 만들때 "이름.py" 형태로 정해야한다고\n        했습니다.\n      ')]),t._v(" "),r("br"),t._v(" "),r("p",[t._v("\n        그 이유는 컴퓨터에게 파일의 형태(종류)가 무엇이지 설명해야하기\n        때문입니다.\n      ")]),t._v(" "),r("br"),t._v(" "),r("p",[t._v("\n        .py는 python의 약자로 컴퓨터에게 우리가 만든 파일이 파이썬 파일이라고\n        알려줍니다.\n      ")])])}],!1,null,null,null);e.default=component.exports;c()(component,{QuadSpace:r(348).default,Header:r(347).default,BeforeNextButton:r(349).default}),c()(component,{VBtn:A.a,VCard:v.a,VImg:h.a,VListItemTitle:_.b,VRow:d.a,VStepper:f.a,VStepperContent:m.a,VStepperStep:y.a})}}]);