(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[16],{215:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return n}))},244:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(215);function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}},39:function(e,t,a){"use strict";var n=a(12),r=a(13),l=a(17),o=a(14),s=a(15),i=a(0),c=a.n(i),d=a(5),m=a(8),u=(a(40),function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).bindHandleScroll=function(e){var t=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);r.setState({scrollTop:t})},r.scrollToAnchor=function(e){if(e){var t=document.getElementById(e);t&&t.scrollIntoView({block:"start",behavior:"smooth"})}},r.state={articleTree:[],scrollTop:null},r.getArticleTree=r.getArticleTree.bind(Object(l.a)(r)),r}return Object(r.a)(a,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,t=[],a=0,n=e.length;a<n-1;a++){var r=e[a].nodeName;"H2"!==r&&"H3"!==r||(e[a].id=e[a].innerText,t.push({name:e[a].innerText,tag:e[a].nodeName}))}this.setState({articleTree:t})}},{key:"setTitle",value:function(){for(var e=this.props.location.pathname.split("/").filter((function(e){return e})),t=0,a=m.a.length;t<a;t++)e[0]===m.a[t].name&&(document.getElementsByTagName("h1")[0].innerHTML=m.a[t].section.length>0?m.a[t].section[e[e.length-1]]:m.a[t].title)}},{key:"componentDidMount",value:function(){this.getArticleTree(),this.setTitle();var e=document.getElementById("header"),t=window.scrollY,a=document.getElementsByClassName("directory-list")[0],n=a.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var r=document.getElementsByClassName("page-footer")[0],l=0;r;)l+=r.offsetTop,r=r.offsetParent;var o=document.body.scrollTop||document.documentElement.scrollTop;if((o+=n+a.offsetHeight)>l+e.offsetHeight)a.style="position:fixed;top:".concat(n-o+l,"px;transition:none");else{var s=window.scrollY;s>e.offsetHeight&&(t<s&&(e.className="ant-layout-header header header-affixed",a.className="directory-list directory-affixed",t=s),t>s&&(e.className="ant-layout-header header header-visible",a.className="directory-list",t=s)),a.style=""}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll)}},{key:"render",value:function(){var e=this,t=this.state,a=t.articleTree,n=t.scrollTop,r=a.length;if(document.getElementById("tree-num-0")&&r>0){for(var l=[],o=0;o<r;o++){var s=document.getElementById(a[o].name);l.push(s.offsetTop)}for(var i=l.findIndex((function(e){return e>n}))-1,d=0;d<r;d++)document.getElementById("tree-num-".concat(d)).className=d===i?"tree-num directory-item-active":"tree-num";-2===i&&(document.getElementById("tree-num-".concat(r-1)).className="tree-num directory-item-active")}return c.a.createElement("div",{className:"directory"},c.a.createElement("ul",{className:"directory-list"},a.map((function(t,a){return c.a.createElement("li",{key:a,id:"tree-num-".concat(a),className:"tree-num",title:t.name,style:{paddingLeft:"H2"===t.tag?10:22},onClick:function(){e.scrollToAnchor("".concat(t.name))}},t.name)}))))}}]),a}(i.Component));t.a=Object(d.f)(u)},40:function(e,t,a){},67:function(e,t,a){var n={"./apl/apl.js":[68,120],"./asciiarmor/asciiarmor.js":[69,121],"./asn.1/asn.1.js":[70,122],"./asterisk/asterisk.js":[71,123],"./brainfuck/brainfuck.js":[72,124],"./clike/clike.js":[55,9],"./clojure/clojure.js":[73,125],"./cmake/cmake.js":[74,126],"./cobol/cobol.js":[75,127],"./coffeescript/coffeescript.js":[56,128],"./commonlisp/commonlisp.js":[76,129],"./crystal/crystal.js":[77,130],"./css/css.js":[48,3],"./cypher/cypher.js":[78,131],"./d/d.js":[79,132],"./dart/dart.js":[80,9,133],"./diff/diff.js":[81,134],"./django/django.js":[82,2,3,92],"./dockerfile/dockerfile.js":[83,106],"./dtd/dtd.js":[84,135],"./dylan/dylan.js":[85,136],"./ebnf/ebnf.js":[86,137],"./ecl/ecl.js":[87,138],"./eiffel/eiffel.js":[88,139],"./elm/elm.js":[89,140],"./erlang/erlang.js":[90,141],"./factor/factor.js":[91,107],"./fcl/fcl.js":[92,142],"./forth/forth.js":[93,143],"./fortran/fortran.js":[94,144],"./gas/gas.js":[95,145],"./gfm/gfm.js":[96,76,105],"./gherkin/gherkin.js":[97,146],"./go/go.js":[98,147],"./groovy/groovy.js":[99,148],"./haml/haml.js":[100,2,3,95],"./handlebars/handlebars.js":[57,101],"./haskell-literate/haskell-literate.js":[101,110],"./haskell/haskell.js":[58,149],"./haxe/haxe.js":[102,150],"./htmlembedded/htmlembedded.js":[103,2,3,91],"./htmlmixed/htmlmixed.js":[47,2,3,111],"./http/http.js":[104,151],"./idl/idl.js":[105,152],"./javascript/javascript.js":[49,2],"./jinja2/jinja2.js":[106,153],"./jsx/jsx.js":[107,2,112],"./julia/julia.js":[108,154],"./livescript/livescript.js":[109,155],"./lua/lua.js":[110,156],"./markdown/markdown.js":[63,76],"./mathematica/mathematica.js":[111,157],"./mbox/mbox.js":[112,158],"./meta.js":[53],"./mirc/mirc.js":[113,159],"./mllike/mllike.js":[114,160],"./modelica/modelica.js":[115,161],"./mscgen/mscgen.js":[116,162],"./mumps/mumps.js":[117,163],"./nginx/nginx.js":[118,164],"./nsis/nsis.js":[119,108],"./ntriples/ntriples.js":[120,165],"./octave/octave.js":[121,166],"./oz/oz.js":[122,167],"./pascal/pascal.js":[123,168],"./pegjs/pegjs.js":[124,2,169],"./perl/perl.js":[125,170],"./php/php.js":[126,2,3,9,102],"./pig/pig.js":[127,171],"./powershell/powershell.js":[128,172],"./properties/properties.js":[129,173],"./protobuf/protobuf.js":[130,174],"./pug/pug.js":[64,2,3,75],"./puppet/puppet.js":[131,175],"./python/python.js":[59,176],"./q/q.js":[132,177],"./r/r.js":[133,178],"./rpm/rpm.js":[134,179],"./rst/rst.js":[135,94],"./ruby/ruby.js":[51,180],"./rust/rust.js":[136,109],"./sas/sas.js":[137,181],"./sass/sass.js":[61,3,182],"./scheme/scheme.js":[138,183],"./shell/shell.js":[139,184],"./sieve/sieve.js":[140,185],"./slim/slim.js":[141,2,3,96],"./smalltalk/smalltalk.js":[142,186],"./smarty/smarty.js":[143,187],"./solr/solr.js":[144,188],"./soy/soy.js":[145,2,3,103],"./sparql/sparql.js":[146,189],"./spreadsheet/spreadsheet.js":[147,190],"./sql/sql.js":[148,191],"./stex/stex.js":[60,192],"./stylus/stylus.js":[65,77],"./swift/swift.js":[149,193],"./tcl/tcl.js":[150,194],"./textile/textile.js":[151,195],"./tiddlywiki/tiddlywiki.js":[152,196],"./tiki/tiki.js":[153,197],"./toml/toml.js":[154,198],"./tornado/tornado.js":[155,2,3,93],"./troff/troff.js":[156,199],"./ttcn-cfg/ttcn-cfg.js":[158,200],"./ttcn/ttcn.js":[157,201],"./turtle/turtle.js":[159,202],"./twig/twig.js":[160,104],"./vb/vb.js":[161,203],"./vbscript/vbscript.js":[162,204],"./velocity/velocity.js":[163,205],"./verilog/verilog.js":[164,206],"./vhdl/vhdl.js":[165,207],"./vue/vue.js":[166,2,3,77,75,88],"./webidl/webidl.js":[167,208],"./xml/xml.js":[46,209],"./xquery/xquery.js":[168,210],"./yacas/yacas.js":[169,211],"./yaml-frontmatter/yaml-frontmatter.js":[170,113],"./yaml/yaml.js":[62,212],"./z80/z80.js":[171,213]};function r(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return Promise.all(t.slice(1).map(a.e)).then((function(){return a.t(r,7)}))}r.keys=function(){return Object.keys(n)},r.id=67,e.exports=r},893:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return g}));var n=a(244),r=a(12),l=a(13),o=a(14),s=a(15),i=a(0),c=a.n(i),d=a(39),m=a(172),u=(a(54),{theme:"monokai",mode:"CSS",readOnly:!0}),g=function(e){Object(s.a)(i,e);var t=Object(o.a)(i);function i(){var e;Object(r.a)(this,i);for(var a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state={divStyle:{width:"100%",height:300,maxWidth:300,margin:"0 auto 8px",background:"linear-gradient(#e66465, #9198e5)"}},e}return Object(l.a)(i,[{key:"selectCode",value:function(e){var t=Object(n.a)({},this.state.divStyle);t.background=0===e?"linear-gradient(#e66465, #9198e5)":1===e?"linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)":2===e?"linear-gradient(to left, #333, #333 50%, #eee 75%, #333 75%)":3===e?"linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)":"",this.setState({divStyle:t});for(var a=document.getElementsByClassName("code-box"),r=0,l=a.length;r<l;r++)e===r?a[e].className="code-box code-box-active":a[r].className="code-box"}},{key:"render",value:function(){return c.a.createElement("div",{className:"page-content"},c.a.createElement("div",{className:"article"},c.a.createElement("div",{className:"article-title"},c.a.createElement("h1",null,"linear-gradient()")),c.a.createElement("div",{className:"article-content"},c.a.createElement("h2",null,"\u6982\u8ff0"),c.a.createElement("p",null,"CSS linear-gradient() \u51fd\u6570\u7528\u4e8e\u521b\u5efa\u4e00\u4e2a\u8868\u793a\u4e24\u79cd\u6216\u591a\u79cd\u989c\u8272\u7ebf\u6027\u6e10\u53d8\u7684\u56fe\u7247\u3002\u5176\u7ed3\u679c\u5c5e\u4e8e<gradient>\u6570\u636e\u7c7b\u578b\uff0c\u662f\u4e00\u79cd\u7279\u522b\u7684<image>\u6570\u636e\u7c7b\u578b\u3002"),c.a.createElement(m.a,{value:"/* \u6e10\u53d8\u8f74\u4e3a45\u5ea6\uff0c\u4ece\u84dd\u8272\u6e10\u53d8\u5230\u7ea2\u8272 */\nlinear-gradient(45deg, blue, red);\n\n/* \u4ece\u53f3\u4e0b\u5230\u5de6\u4e0a\u3001\u4ece\u84dd\u8272\u6e10\u53d8\u5230\u7ea2\u8272 */\nlinear-gradient(to left top, blue, red);\n\n/* \u4ece\u4e0b\u5230\u4e0a\uff0c\u4ece\u84dd\u8272\u5f00\u59cb\u6e10\u53d8\u3001\u5230\u9ad8\u5ea640%\u4f4d\u7f6e\u662f\u7eff\u8272\u6e10\u53d8\u5f00\u59cb\u3001\u6700\u540e\u4ee5\u7ea2\u8272\u7ed3\u675f */\nlinear-gradient(0deg, blue, green 40%, red);",options:u}),c.a.createElement("h2",null,"\u793a\u4f8b"),c.a.createElement("p",null,"\u70b9\u51fb\u4e0b\u9762\u7684\u4ee3\u7801\u5757\u67e5\u770b\u9884\u89c8"),c.a.createElement("div",{style:{width:"100%",maxWidth:800,margin:"0 auto"}},c.a.createElement("div",{className:"code-box code-box-active"},c.a.createElement("div",{className:"mask",onClick:this.selectCode.bind(this,0)}),c.a.createElement(m.a,{value:"background: linear-gradient(#e66465, #9198e5);",options:u})),c.a.createElement("div",{className:"code-box"},c.a.createElement("div",{className:"mask",onClick:this.selectCode.bind(this,1)}),c.a.createElement(m.a,{value:"background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);",options:u})),c.a.createElement("div",{className:"code-box"},c.a.createElement("div",{className:"mask",onClick:this.selectCode.bind(this,2)}),c.a.createElement(m.a,{value:"background: linear-gradient(to left, #333, #333 50%, #eee 75%, #333 75%);",options:u})),c.a.createElement("div",{className:"code-box"},c.a.createElement("div",{className:"mask",onClick:this.selectCode.bind(this,3)}),c.a.createElement(m.a,{value:"background: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),\n            linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),\n            linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);",options:u}))),c.a.createElement("div",{style:this.state.divStyle}),c.a.createElement("p",null,"\u5177\u6709\u591a\u4e2a\u989c\u8272\u505c\u6b62\u7684\u6e10\u53d8"),c.a.createElement(m.a,{value:"background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);",options:u}),c.a.createElement("div",{style:{margin:"10px 0",background:"linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)",width:"100%",height:20}}),c.a.createElement("div",{className:"tip"},c.a.createElement("div",{className:"tip-content"},c.a.createElement("p",null,c.a.createElement("em",null,"\u7531\u4e8e<gradient>\u6570\u636e\u7c7b\u578b\u7cfb<image>\u7684\u5b50\u6570\u636e\u7c7b\u578b\uff0c<gradient>\u53ea\u80fd\u88ab\u7528\u4e8e<image>\u53ef\u4ee5\u4f7f\u7528\u7684\u5730\u65b9\u3002\u56e0\u6b64\uff0clinear-gradient() \u5e76\u4e0d\u9002\u7528\u4e8ebackground-color\u4ee5\u53ca\u7c7b\u4f3c\u7684\u4f7f\u7528 <color>\u6570\u636e\u7c7b\u578b\u7684\u5c5e\u6027\u4e2d\u3002")))),c.a.createElement("h2",null,"\u7ebf\u5f62\u6e10\u53d8\u7684\u6784\u6210"),c.a.createElement("div",{className:"text-center"},c.a.createElement("img",{src:a(505),alt:"",style:{width:300}})),c.a.createElement("p",null,"\u7ebf\u6027\u6e10\u53d8\u7531\u4e00\u4e2a\u8f74 (\u68af\u5ea6\u7ebf) \u5b9a\u4e49\uff0c\u5176\u4e0a\u7684\u6bcf\u4e2a\u70b9\u5177\u6709\u4e24\u79cd\u6216\u591a\u79cd\u7684\u989c\u8272\uff0c\u4e14\u8f74\u4e0a\u7684\u6bcf\u4e2a\u70b9\u90fd\u5177\u6709\u72ec\u7acb\u7684\u989c\u8272\u3002\u4e3a\u4e86\u6784\u5efa\u51fa\u5e73\u6ed1\u7684\u6e10\u53d8\uff0clinear-gradient() \u51fd\u6570\u6784\u5efa\u4e00\u7cfb\u5217\u5782\u76f4\u4e8e\u6e10\u53d8\u7ebf\u7684\u7740\u8272\u7ebf\uff0c\u6bcf\u4e00\u6761\u7740\u8272\u7ebf\u7684\u989c\u8272\u5219\u53d6\u51b3\u4e8e\u4e0e\u4e4b\u5782\u76f4\u76f8\u4ea4\u7684\u6e10\u53d8\u7ebf\u4e0a\u7684\u8272\u70b9\u3002"),c.a.createElement("p",null,"\u6e10\u53d8\u7ebf\u7531\u5305\u542b\u6e10\u53d8\u56fe\u5f62\u7684\u5bb9\u5668\u7684\u4e2d\u5fc3\u70b9\u548c\u4e00\u4e2a\u89d2\u5ea6\u6765\u5b9a\u4e49\u7684\u3002\u6e10\u53d8\u7ebf\u4e0a\u7684\u989c\u8272\u503c\u662f\u7531\u4e0d\u540c\u7684\u70b9\u6765\u5b9a\u4e49\uff0c\u5305\u62ec\u8d77\u59cb\u70b9\uff0c\u7ec8\u70b9\uff0c\u4ee5\u53ca\u4e24\u8005\u4e4b\u95f4\u7684\u53ef\u9009\u7684\u4e2d\u95f4\u70b9\uff08\u4e2d\u95f4\u70b9\u53ef\u4ee5\u6709\u591a\u4e2a\uff09\u3002"),c.a.createElement("p",null,"\u8d77\u59cb\u70b9\u662f\u6e10\u53d8\u7ebf\u4e0a\u4ee3\u8868\u8d77\u59cb\u989c\u8272\u503c\u7684\u70b9\u3002\u8d77\u59cb\u70b9\u7531\u6e10\u53d8\u7ebf\u548c\u8fc7\u5bb9\u5668\u9876\u70b9\u7684\u5782\u76f4\u7ebf\u4e4b\u95f4\u7684\u4ea4\u53c9\u70b9\u6765\u5b9a\u4e49\u3002\uff08\u5782\u76f4\u7ebf\u8ddf\u6e10\u53d8\u7ebf\u5728\u540c\u4e00\u8c61\u9650\u5185\uff09\u3002"),c.a.createElement("p",null,"\u540c\u6837\u7684\uff0c\u7ec8\u70b9\u662f\u6e10\u53d8\u7ebf\u4e0a\u4ee3\u8868\u6700\u7ec8\u989c\u8272\u503c\u7684\u70b9\u3002\u7ec8\u70b9\u4e5f\u662f\u7531\u6e10\u53d8\u7ebf\u548c\u4ece\u6700\u8fd1\u7684\u9876\u70b9\u53d1\u51fa\u7684\u5782\u76f4\u7ebf\u4e4b\u95f4\u7684\u4ea4\u53c9\u70b9\u5b9a\u4e49\u7684\uff0c\u7136\u800c\u4ece\u8d77\u59cb\u70b9\u7684\u5bf9\u79f0\u70b9\u6765\u5b9a\u4e49\u7ec8\u70b9\u662f\u66f4\u5bb9\u6613\u7406\u89e3\u7684\u4e00\u79cd\u65b9\u5f0f\uff0c\u56e0\u4e3a\u7ec8\u70b9\u662f\u8d77\u70b9\u5173\u4e8e\u5bb9\u5668\u7684\u4e2d\u5fc3\u70b9\u7684\u53cd\u5c04\u70b9\u3002"),c.a.createElement("p",null,"\u5173\u4e8e\u8d77\u70b9\u548c\u7ec8\u70b9\u7684\u7a0d\u5fae\u6709\u4e9b\u590d\u6742\u7684\u5b9a\u4e49\u5bfc\u81f4\u4e86\u4e00\u4e2a\u6709\u8da3\u7684\u6027\u8d28\uff0c\u6709\u65f6\u5019\u88ab\u53eb\u505a\u4e0d\u53ef\u601d\u8bae\u7684\u9876\u70b9\u6548\u5e94\uff1a\u8d77\u70b9\u9644\u8fd1\u7684\u70b9\u5177\u6709\u8ddf\u8d77\u70b9\u76f8\u540c\u7684\u989c\u8272\u503c\uff0c\u7ec8\u70b9\u9644\u8fd1\u7684\u70b9\u5177\u6709\u8ddf\u7ec8\u70b9\u76f8\u540c\u7684\u989c\u8272\u503c\u3002"),c.a.createElement("p",null,"\u4e0d\u4ec5\u4ec5\u53ea\u6709\u8d77\u70b9\u548c\u7ec8\u70b9\u7684\u989c\u8272\u503c\u53ef\u4ee5\u6307\u5b9a\u3002\u901a\u8fc7\u63d0\u4f9b\u989d\u5916\u7684\u989c\u8272\u4e2d\u95f4\u70b9\uff0cWeb\u5f00\u53d1\u8005\u53ef\u4ee5\u6784\u5efa\u5728\u8d77\u59cb\u989c\u8272\u503c\u548c\u7ec8\u70b9\u989c\u8272\u503c\u4e4b\u95f4\u7684\u81ea\u5b9a\u4e49\u66f4\u5f3a\u7684\u8fc7\u6e21\u6548\u679c\uff0c\u53e6\u5916\u8fd8\u53ef\u4ee5\u63d0\u4f9b\u591a\u79cd\u989c\u8272\u503c\u7684\u6e10\u53d8\u7ebf\u3002"),c.a.createElement("p",null,"\u5f53\u989c\u8272\u4e2d\u95f4\u70b9\u7684\u4f4d\u7f6e\u88ab\u9690\u5f0f\u5b9a\u4e49\uff0c\u5b83\u88ab\u653e\u7f6e\u5728\u4f4d\u4e8e\u5b83\u4e4b\u524d\u7684\u70b9\u548c\u4f4d\u4e8e\u5b83\u4e4b\u540e\u7684\u70b9\u4e4b\u95f4\u7684\u4e2d\u95f4\u4f4d\u7f6e\u5904\u3002\u5229\u7528<length>\u6216\u8005<percentage>\u6570\u636e\u7c7b\u578b\u53ef\u4ee5\u663e\u793a\u5b9a\u4e49\u4e00\u4e2a\u4f4d\u7f6e\u3002"),c.a.createElement(m.a,{value:"linear-gradient(red, orange, yellow, green, blue); \nlinear-gradient(red 0%, orange 25%, yellow 50%, green 75%, blue 100%);",options:u}),c.a.createElement("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4ece\u4e00\u4e2a\u989c\u8272\u7684\u7ec8\u6b62\u70b9\u5e73\u6ed1\u7684\u8fc7\u6e21\u5230\u53e6\u4e00\u4e2a\u989c\u8272\u7684\u7ec8\u6b62\u70b9\uff0c\u989c\u8272\u4e4b\u95f4\u7684\u4e2d\u70b9\u662f\u4e24\u4e2a\u989c\u8272\u989c\u8272\u8f6c\u6362\u7684\u4e2d\u70b9\u3002\u4f60\u53ef\u4ee5\u5c06\u4e2d\u70b9\u79fb\u52a8\u5230\u8fd9\u4e24\u4e2a\u989c\u8272\u4e4b\u95f4\u7684\u4efb\u610f\u4f4d\u7f6e\uff0c\u65b9\u6cd5\u662f\u5728\u4e24\u4e2a\u989c\u8272\u4e4b\u95f4\u6dfb\u52a0\u672a\u6807\u8bb0\u7684 %\uff0c\u4ee5\u6307\u793a\u989c\u8272\u7684\u4e2d\u8f6c\u4f4d\u7f6e\u3002\u4e0b\u9762\u7684\u793a\u4f8b\u662f\u4ece\u8d77\u59cb\u70b9\u5230 10% \u7684\u4f4d\u7f6e\u6807\u8bb0\u7ea2\u8272\uff0c\u4ece90%\u5230\u7ed3\u675f\u6807\u8bb0\u84dd\u8272\u3002\u5728 10% \u5230 90% \u4e4b\u95f4\uff0c\u989c\u8272\u4ece\u7ea2\u8272\u8fc7\u6e21\u5230\u84dd\u8272\uff0c\u7136\u800c\u8fc7\u6e21\u7684\u4e2d\u70b9\u662f\u5728 30% \u7684\u6807\u8bb0\u4e0a\uff0c\u800c\u4e0d\u662f\u5728\u6ca1\u6709 30% \u4e2d\u8f6c\u70b9\u7684\u60c5\u51b5\u4e0b\u4f1a\u9ed8\u8ba4\u4e3a 50%\u3002"),c.a.createElement(m.a,{value:"linear-gradient(red 10%, 30%, blue 90%);",options:u}),c.a.createElement("p",null,"\u5982\u679c\u4e24\u4e2a\u6216\u591a\u4e2a\u989c\u8272\u7ec8\u6b62\u5728\u540c\u4e00\u4f4d\u7f6e\uff0c\u5219\u5728\u8be5\u4f4d\u7f6e\u58f0\u660e\u7684\u7b2c\u4e00\u4e2a\u989c\u8272\u548c\u6700\u540e\u4e00\u4e2a\u989c\u8272\u4e4b\u95f4\u7684\u8fc7\u6e21\u5c06\u662f\u4e00\u6761\u751f\u786c\u7ebf\u3002"),c.a.createElement("p",null,"\u989c\u8272\u7ec8\u6b62\u5217\u8868\u4e2d\u989c\u8272\u7684\u7ec8\u6b62\u70b9\u5e94\u8be5\u662f\u4f9d\u6b21\u9012\u589e\u7684\u3002\u5982\u679c\u540e\u9762\u7684\u989c\u8272\u7ec8\u6b62\u70b9\u5c0f\u4e8e\u524d\u9762\u989c\u8272\u7684\u7ec8\u6b62\u70b9\u5219\u540e\u9762\u7684\u4f1a\u88ab\u8986\u76d6\uff0c\u4ece\u800c\u521b\u5efa\u4e00\u4e2a\u786c\u8f6c\u6362\u3002\u4e0b\u9762\u7684\u53d8\u5316\u662f\u4ece\u7ea2\u8272\u5230\u9ec4\u8272\u5728 40% \u7684\u4f4d\u7f6e\uff0c\u7136\u540e\u8fc7\u6e21\u4ece\u9ec4\u8272\u5230\u84dd\u8272\u7ec8\u6b62\u4e8e 65% \u7684\u4f4d\u7f6e\u5904\u3002"),c.a.createElement(m.a,{value:"linear-gradient(red 40%, yellow 30%, blue 65%);",options:u}),c.a.createElement("p",null,"\u5141\u8bb8\u989c\u8272\u591a\u4e2a\u989c\u8272\u7ec8\u6b62\u4f4d\u7f6e\u3002\u901a\u8fc7\u5728 CSS \u58f0\u660e\u4e2d\u5305\u542b\u4e24\u4e2a\u4f4d\u7f6e\uff0c\u53ef\u4ee5\u5c06\u4e00\u4e2a\u989c\u8272\u58f0\u660e\u4e3a\u4e24\u4e2a\u76f8\u90bb\u7684\u989c\u8272\u7ec8\u6b62\u3002\u4ee5\u4e0b\u4e09\u4e2a\u68af\u5ea6\u662f\u76f8\u7b49\u7684:"),c.a.createElement(m.a,{value:"linear-gradient(red 0%, orange 10%, orange 30%, yellow 50%, yellow 70%, green 90%, green 100%);\nlinear-gradient(red, orange 10% 30%, yellow 50% 70%, green 90%);\nlinear-gradient(red 0%, orange 10% 30%, yellow 50% 70%, green 90% 100%);",options:u}),c.a.createElement("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u4e0d\u5e26 0% \u7ec8\u6b62\u7684\u989c\u8272\uff0c\u5219\u5728\u8be5\u70b9\u58f0\u660e\u7684\u7b2c\u4e00\u4e2a\u989c\u8272\u3002\u7c7b\u4f3c\u5730\uff0c\u6700\u540e\u4e00\u79cd\u989c\u8272\u5c06\u6301\u7eed\u5230 100% \u6807\u8bb0\uff0c\u6216\u8005\u5982\u679c\u5728\u6700\u540e\u4e00\u4e2a\u6ca1\u6709\u58f0\u660e\u957f\u5ea6\uff0c\u5219\u5728 100% \u6807\u8bb0\u5904\u3002"),c.a.createElement("h2",null,"\u8bed\u6cd5"),c.a.createElement("ul",null,c.a.createElement("li",null,"<side-or-corner>"),c.a.createElement("p",null,"\u63cf\u8ff0\u6e10\u53d8\u7ebf\u7684\u8d77\u59cb\u70b9\u4f4d\u7f6e\u3002\u5b83\u5305\u542b to \u548c\u4e24\u4e2a\u5173\u952e\u8bcd\uff1a\u7b2c\u4e00\u4e2a\u6307\u51fa\u6c34\u5e73\u4f4d\u7f6e left or right\uff0c\u7b2c\u4e8c\u4e2a\u6307\u51fa\u5782\u76f4\u4f4d\u7f6e top or bottom\u3002\u5173\u952e\u8bcd\u7684\u5148\u540e\u987a\u5e8f\u65e0\u5f71\u54cd\uff0c\u4e14\u90fd\u662f\u53ef\u9009\u7684\u3002"),c.a.createElement("p",null,"to top, to bottom, to left \u548c to right \u8fd9\u4e9b\u503c\u4f1a\u88ab\u8f6c\u6362\u6210\u89d2\u5ea6 0 \u5ea6\u3001180 \u5ea6\u3001270 \u5ea6\u548c 90 \u5ea6\u3002\u5176\u4f59\u503c\u4f1a\u88ab\u8f6c\u6362\u4e3a\u4e00\u4e2a\u4ee5\u5411\u9876\u90e8\u4e2d\u592e\u65b9\u5411\u4e3a\u8d77\u70b9\u987a\u65f6\u9488\u65cb\u8f6c\u7684\u89d2\u5ea6\u3002\u6e10\u53d8\u7ebf\u7684\u7ed3\u675f\u70b9\u4e0e\u5176\u8d77\u70b9\u4e2d\u5fc3\u5bf9\u79f0\u3002"),c.a.createElement("li",null,"<angle>"),c.a.createElement("p",null,"\u7528\u89d2\u5ea6\u503c\u6307\u5b9a\u6e10\u53d8\u7684\u65b9\u5411\uff08\u6216\u89d2\u5ea6\uff09\u3002\u89d2\u5ea6\u987a\u65f6\u9488\u589e\u52a0\u3002 "),c.a.createElement("li",null,"<linear-color-stop>"),c.a.createElement("p",null,"\u7531\u4e00\u4e2a<color>\u503c\u7ec4\u6210\uff0c\u5e76\u4e14\u8ddf\u968f\u7740\u4e00\u4e2a\u53ef\u9009\u7684\u7ec8\u70b9\u4f4d\u7f6e\uff08\u53ef\u4ee5\u662f\u4e00\u4e2a\u767e\u5206\u6bd4\u503c\u6216\u8005\u662f\u6cbf\u7740\u6e10\u53d8\u8f74\u7684<length>\uff09\u3002CSS \u6e10\u53d8\u7684\u989c\u8272\u6e32\u67d3\u91c7\u53d6\u4e86\u4e0e SVG \u76f8\u540c\u7684\u89c4\u5219\u3002"),c.a.createElement("li",null,"<color-hint>"),c.a.createElement("p",null,"\u989c\u8272\u4e2d\u8f6c\u70b9\u662f\u4e00\u4e2a\u63d2\u503c\u63d0\u793a\uff0c\u5b83\u5b9a\u4e49\u4e86\u5728\u76f8\u90bb\u989c\u8272\u4e4b\u95f4\u6e10\u53d8\u5982\u4f55\u8fdb\u884c\u3002\u957f\u5ea6\u5b9a\u4e49\u4e86\u5728\u4e24\u79cd\u989c\u8272\u4e4b\u95f4\u7684\u54ea\u4e2a\u70b9\u505c\u6b62\u6e10\u53d8\u989c\u8272\u5e94\u8be5\u8fbe\u5230\u989c\u8272\u8fc7\u6e21\u7684\u4e2d\u70b9\u3002\u5982\u679c\u7701\u7565\uff0c\u989c\u8272\u8f6c\u6362\u7684\u4e2d\u70b9\u662f\u4e24\u4e2a\u989c\u8272\u505c\u6b62\u4e4b\u95f4\u7684\u4e2d\u70b9\u3002 ")),c.a.createElement("h3",null,"\u6b63\u5f0f\u8bed\u6cd5"),c.a.createElement(m.a,{value:"linear-gradient(\n    [ <angle> | to <side-or-corner> ,]? <color-stop-list> )\n   \\---------------------------------/ \\-------------------/\n      Definition of the gradient line        List of color stops  \n  \n  where <side-or-corner> = [ left | right ] || [ top | bottom ]\n    and <color-stop-list> = [ <linear-color-stop> [, <color-hint>? ]? ]#, <linear-color-stop>\n    and <linear-color-stop> = <color> [ <color-stop-length> ]?\n    and <color-stop-length> = [ <percentage> | <length> ]{1,2}\n    and <color-hint> = [ <percentage> | <length> ]",options:u}),c.a.createElement("h2",null,"\u4f7f\u7528\u900f\u660e\u5ea6"),c.a.createElement(m.a,{value:"background: linear-gradient(to bottom right, red, rgba(0,0,0,0));",options:u}),c.a.createElement("div",{style:{margin:"10px 0",background:"linear-gradient(to bottom right, red, rgba(0,0,0,0))",width:"100%",height:20}}),c.a.createElement("h2",null,"\u8de8\u6d4f\u89c8\u5668\u517c\u5bb9\u6027"),c.a.createElement("p",null),c.a.createElement(m.a,{value:"background-color: #F07575; /* \u4e0d\u652f\u6301\u6e10\u53d8\u7684\u6d4f\u89c8\u5668\u56de\u9000\u65b9\u6848 */\nbackground-image: -webkit-linear-gradient(top, hsl(0, 80%, 70%), #bada55); /* \u652f\u6301 Chrome 25 and Safari 6, iOS 6.1, Android 4.3 */\nbackground-image:    -moz-linear-gradient(top, hsl(0, 80%, 70%), #bada55); /* \u652f\u6301 Firefox (3.6 to 15) */\nbackground-image:      -o-linear-gradient(top, hsl(0, 80%, 70%), #bada55); /* \u652f\u6301\u65e7 Opera (11.1 to 12.0) */ \nbackground-image:         linear-gradient(to bottom, hsl(0, 80%, 70%), #bada55); /* \u6807\u51c6\u8bed\u6cd5; \u9700\u8981\u6700\u65b0\u7248\u672c */",options:u}),c.a.createElement("p",null,"-moz-\u524d\u7f00\u7684\u89c4\u5219\u7528\u4e8e\u517c\u5bb9 Fx 3.6 to Fx 15 \u7684\u706b\u72d0\u6d4f\u89c8\u5668\u3002 -webkit-\u524d\u7f00\u7684\u89c4\u5219\u7528\u4e8e\u517c\u5bb9\u5728 Android 4.3 \u4ee5\u524d\u7248\u672c\u3001iOS 6.1 \u4ee5\u524d\u7248\u672c\u3001Safari 6\u3002\u5f53\u4f7f\u7528\u5e26\u524d\u7f00\u7684\u89c4\u5219\u65f6\uff0c\u4e0d\u8981\u52a0\u201c to \u201d\u5173\u952e\u5b57\u3002"))),c.a.createElement(d.a,null))}}]),i}(i.Component)}}]);
//# sourceMappingURL=16.3d3c8847.chunk.js.map