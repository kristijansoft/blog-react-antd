(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[17],{215:function(e,t,a){"use strict";function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return s}))},244:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var s=a(215);function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}},39:function(e,t,a){"use strict";var s=a(12),l=a(13),n=a(17),r=a(14),o=a(15),c=a(0),i=a.n(c),m=a(5),d=a(8),u=(a(40),function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(e){var l;return Object(s.a)(this,a),(l=t.call(this,e)).bindHandleScroll=function(e){var t=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);l.setState({scrollTop:t})},l.scrollToAnchor=function(e){if(e){var t=document.getElementById(e);t&&t.scrollIntoView({block:"start",behavior:"smooth"})}},l.state={articleTree:[],scrollTop:null},l.getArticleTree=l.getArticleTree.bind(Object(n.a)(l)),l}return Object(l.a)(a,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,t=[],a=0,s=e.length;a<s-1;a++){var l=e[a].nodeName;"H2"!==l&&"H3"!==l||(e[a].id=e[a].innerText,t.push({name:e[a].innerText,tag:e[a].nodeName}))}this.setState({articleTree:t})}},{key:"setTitle",value:function(){for(var e=this.props.location.pathname.split("/").filter((function(e){return e})),t=0,a=d.a.length;t<a;t++)e[0]===d.a[t].name&&(document.getElementsByTagName("h1")[0].innerHTML=d.a[t].section.length>0?d.a[t].section[e[e.length-1]]:d.a[t].title)}},{key:"componentDidMount",value:function(){this.getArticleTree(),this.setTitle();var e=document.getElementById("header"),t=window.scrollY,a=document.getElementsByClassName("directory-list")[0],s=a.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var l=document.getElementsByClassName("page-footer")[0],n=0;l;)n+=l.offsetTop,l=l.offsetParent;var r=document.body.scrollTop||document.documentElement.scrollTop;if((r+=s+a.offsetHeight)>n+e.offsetHeight)a.style="position:fixed;top:".concat(s-r+n,"px;transition:none");else{var o=window.scrollY;o>e.offsetHeight&&(t<o&&(e.className="ant-layout-header header header-affixed",a.className="directory-list directory-affixed",t=o),t>o&&(e.className="ant-layout-header header header-visible",a.className="directory-list",t=o)),a.style=""}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll)}},{key:"render",value:function(){var e=this,t=this.state,a=t.articleTree,s=t.scrollTop,l=a.length;if(document.getElementById("tree-num-0")&&l>0){for(var n=[],r=0;r<l;r++){var o=document.getElementById(a[r].name);n.push(o.offsetTop)}for(var c=n.findIndex((function(e){return e>s}))-1,m=0;m<l;m++)document.getElementById("tree-num-".concat(m)).className=m===c?"tree-num directory-item-active":"tree-num";-2===c&&(document.getElementById("tree-num-".concat(l-1)).className="tree-num directory-item-active")}return i.a.createElement("div",{className:"directory"},i.a.createElement("ul",{className:"directory-list"},a.map((function(t,a){return i.a.createElement("li",{key:a,id:"tree-num-".concat(a),className:"tree-num",title:t.name,style:{paddingLeft:"H2"===t.tag?10:22},onClick:function(){e.scrollToAnchor("".concat(t.name))}},t.name)}))))}}]),a}(c.Component));t.a=Object(m.f)(u)},40:function(e,t,a){},67:function(e,t,a){var s={"./apl/apl.js":[68,120],"./asciiarmor/asciiarmor.js":[69,121],"./asn.1/asn.1.js":[70,122],"./asterisk/asterisk.js":[71,123],"./brainfuck/brainfuck.js":[72,124],"./clike/clike.js":[55,9],"./clojure/clojure.js":[73,125],"./cmake/cmake.js":[74,126],"./cobol/cobol.js":[75,127],"./coffeescript/coffeescript.js":[56,128],"./commonlisp/commonlisp.js":[76,129],"./crystal/crystal.js":[77,130],"./css/css.js":[48,3],"./cypher/cypher.js":[78,131],"./d/d.js":[79,132],"./dart/dart.js":[80,9,133],"./diff/diff.js":[81,134],"./django/django.js":[82,2,3,92],"./dockerfile/dockerfile.js":[83,106],"./dtd/dtd.js":[84,135],"./dylan/dylan.js":[85,136],"./ebnf/ebnf.js":[86,137],"./ecl/ecl.js":[87,138],"./eiffel/eiffel.js":[88,139],"./elm/elm.js":[89,140],"./erlang/erlang.js":[90,141],"./factor/factor.js":[91,107],"./fcl/fcl.js":[92,142],"./forth/forth.js":[93,143],"./fortran/fortran.js":[94,144],"./gas/gas.js":[95,145],"./gfm/gfm.js":[96,76,105],"./gherkin/gherkin.js":[97,146],"./go/go.js":[98,147],"./groovy/groovy.js":[99,148],"./haml/haml.js":[100,2,3,95],"./handlebars/handlebars.js":[57,101],"./haskell-literate/haskell-literate.js":[101,110],"./haskell/haskell.js":[58,149],"./haxe/haxe.js":[102,150],"./htmlembedded/htmlembedded.js":[103,2,3,91],"./htmlmixed/htmlmixed.js":[47,2,3,111],"./http/http.js":[104,151],"./idl/idl.js":[105,152],"./javascript/javascript.js":[49,2],"./jinja2/jinja2.js":[106,153],"./jsx/jsx.js":[107,2,112],"./julia/julia.js":[108,154],"./livescript/livescript.js":[109,155],"./lua/lua.js":[110,156],"./markdown/markdown.js":[63,76],"./mathematica/mathematica.js":[111,157],"./mbox/mbox.js":[112,158],"./meta.js":[53],"./mirc/mirc.js":[113,159],"./mllike/mllike.js":[114,160],"./modelica/modelica.js":[115,161],"./mscgen/mscgen.js":[116,162],"./mumps/mumps.js":[117,163],"./nginx/nginx.js":[118,164],"./nsis/nsis.js":[119,108],"./ntriples/ntriples.js":[120,165],"./octave/octave.js":[121,166],"./oz/oz.js":[122,167],"./pascal/pascal.js":[123,168],"./pegjs/pegjs.js":[124,2,169],"./perl/perl.js":[125,170],"./php/php.js":[126,2,3,9,102],"./pig/pig.js":[127,171],"./powershell/powershell.js":[128,172],"./properties/properties.js":[129,173],"./protobuf/protobuf.js":[130,174],"./pug/pug.js":[64,2,3,75],"./puppet/puppet.js":[131,175],"./python/python.js":[59,176],"./q/q.js":[132,177],"./r/r.js":[133,178],"./rpm/rpm.js":[134,179],"./rst/rst.js":[135,94],"./ruby/ruby.js":[51,180],"./rust/rust.js":[136,109],"./sas/sas.js":[137,181],"./sass/sass.js":[61,3,182],"./scheme/scheme.js":[138,183],"./shell/shell.js":[139,184],"./sieve/sieve.js":[140,185],"./slim/slim.js":[141,2,3,96],"./smalltalk/smalltalk.js":[142,186],"./smarty/smarty.js":[143,187],"./solr/solr.js":[144,188],"./soy/soy.js":[145,2,3,103],"./sparql/sparql.js":[146,189],"./spreadsheet/spreadsheet.js":[147,190],"./sql/sql.js":[148,191],"./stex/stex.js":[60,192],"./stylus/stylus.js":[65,77],"./swift/swift.js":[149,193],"./tcl/tcl.js":[150,194],"./textile/textile.js":[151,195],"./tiddlywiki/tiddlywiki.js":[152,196],"./tiki/tiki.js":[153,197],"./toml/toml.js":[154,198],"./tornado/tornado.js":[155,2,3,93],"./troff/troff.js":[156,199],"./ttcn-cfg/ttcn-cfg.js":[158,200],"./ttcn/ttcn.js":[157,201],"./turtle/turtle.js":[159,202],"./twig/twig.js":[160,104],"./vb/vb.js":[161,203],"./vbscript/vbscript.js":[162,204],"./velocity/velocity.js":[163,205],"./verilog/verilog.js":[164,206],"./vhdl/vhdl.js":[165,207],"./vue/vue.js":[166,2,3,77,75,88],"./webidl/webidl.js":[167,208],"./xml/xml.js":[46,209],"./xquery/xquery.js":[168,210],"./yacas/yacas.js":[169,211],"./yaml-frontmatter/yaml-frontmatter.js":[170,113],"./yaml/yaml.js":[62,212],"./z80/z80.js":[171,213]};function l(e){if(!a.o(s,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=s[e],l=t[0];return Promise.all(t.slice(1).map(a.e)).then((function(){return a.t(l,7)}))}l.keys=function(){return Object.keys(s)},l.id=67,e.exports=l},895:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return j}));var s=a(244),l=a(12),n=a(13),r=a(14),o=a(15),c=a(0),i=a.n(c),m=a(39),d=a(172),u=(a(54),{theme:"monokai",mode:"CSS",readOnly:!0}),j=function(e){Object(o.a)(c,e);var t=Object(r.a)(c);function c(){var e;Object(l.a)(this,c);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={style:{maxWidth:300,transition:"transform 0.3s",transform:"skew(15deg, 15deg)"}},e}return Object(n.a)(c,[{key:"selectCode",value:function(e){var t=Object(s.a)({},this.state.style);t.transform=0===e?"skew(0)":1===e?"skew(15deg, 15deg)":2===e?"skew(-0.06turn, 18deg)":3===e?"skew(.312rad)":"",this.setState({style:t});for(var a=document.getElementsByClassName("code-box"),l=0,n=a.length;l<n;l++)e===l?a[e].className="code-box code-box-active":a[l].className="code-box"}},{key:"render",value:function(){return i.a.createElement("div",{className:"page-content"},i.a.createElement("div",{className:"article"},i.a.createElement("div",{className:"article-title"},i.a.createElement("h1",null,"skew()")),i.a.createElement("div",{className:"article-content"},i.a.createElement("h2",null,"\u6982\u8ff0"),i.a.createElement("p",null,"skew() \u51fd\u6570\u5b9a\u4e49\u4e86\u4e00\u4e2a\u5143\u7d20\u5728\u4e8c\u7ef4\u5e73\u9762\u4e0a\u7684\u503e\u659c\u8f6c\u6362\u3002\u5b83\u7684\u7ed3\u679c\u662f\u4e00\u4e2a<transform-function> \u6570\u636e\u7c7b\u578b"),i.a.createElement("h2",null,"\u793a\u4f8b"),i.a.createElement("p",null,"\u70b9\u51fb\u4e0b\u9762\u7684\u4ee3\u7801\u5757\u67e5\u770b\u9884\u89c8"),i.a.createElement("div",null,i.a.createElement("div",{className:"code-box"},i.a.createElement("div",{className:"mask",onClick:this.selectCode.bind(this,0)}),i.a.createElement(d.a,{value:"transform: skew(0);",options:u})),i.a.createElement("div",{className:"code-box code-box-active"},i.a.createElement("div",{className:"mask",onClick:this.selectCode.bind(this,1)}),i.a.createElement(d.a,{value:"transform: skew(15deg, 15deg);",options:u})),i.a.createElement("div",{className:"code-box"},i.a.createElement("div",{className:"mask",onClick:this.selectCode.bind(this,2)}),i.a.createElement(d.a,{value:"transform: skew(-0.06turn, 18deg);",options:u})),i.a.createElement("div",{className:"code-box"},i.a.createElement("div",{className:"mask",onClick:this.selectCode.bind(this,3)}),i.a.createElement(d.a,{value:"transform: skew(.312rad);",options:u}))),i.a.createElement("div",{className:"text-center",style:{margin:"50px 0"}},i.a.createElement("img",{src:a(372),alt:"",style:this.state.style})),i.a.createElement("p",null,"\u8fd9\u79cd\u8f6c\u6362\u662f\u4e00\u79cd\u526a\u5207\u6620\u5c04(\u6a2a\u5207)\uff0c\u5b83\u5728\u6c34\u5e73\u548c\u5782\u76f4\u65b9\u5411\u4e0a\u5c06\u5355\u5143\u5185\u7684\u6bcf\u4e2a\u70b9\u626d\u66f2\u4e00\u5b9a\u7684\u89d2\u5ea6\u3002\u6bcf\u4e2a\u70b9\u7684\u5750\u6807\u6839\u636e\u6307\u5b9a\u7684\u89d2\u5ea6\u4ee5\u53ca\u5230\u539f\u70b9\u7684\u8ddd\u79bb\uff0c\u8fdb\u884c\u6210\u6bd4\u4f8b\u7684\u503c\u8c03\u6574\uff1b\u56e0\u6b64\uff0c\u4e00\u4e2a\u70b9\u79bb\u539f\u70b9\u8d8a\u8fdc\uff0c\u5176\u589e\u52a0\u7684\u503c\u5c31\u8d8a\u5927\u3002"),i.a.createElement("h2",null,"\u8bed\u6cd5"),i.a.createElement("p",null,"skew() \u51fd\u6570\u6307\u5b9a\u4e00\u4e2a\u6216\u4e24\u4e2a\u53c2\u6570\uff0c\u5b83\u4eec\u8868\u793a\u5728\u6bcf\u4e2a\u65b9\u5411\u4e0a\u5e94\u7528\u7684\u503e\u659c\u91cf\u3002"),i.a.createElement("ul",null,i.a.createElement("li",null,"skew(ax)"),i.a.createElement("li",null,"skew(ax, ay)")),i.a.createElement("h3",null,"\u53c2\u6570\u503c"),i.a.createElement("ul",null,i.a.createElement("li",null,"ax"),i.a.createElement("p",null,"ax \u662f\u4e00\u4e2a <angle>\uff0c\u8868\u793a\u7528\u4e8e\u6cbf\u6a2a\u5750\u6807\u626d\u66f2\u5143\u7d20\u7684\u89d2\u5ea6\u3002"),i.a.createElement("li",null,"ay"),i.a.createElement("p",null,"ay \u662f\u4e00\u4e2a <angle> \uff0c\u8868\u793a\u7528\u4e8e\u6cbf\u7eb5\u5750\u6807\u626d\u66f2\u5143\u7d20\u7684\u89d2\u5ea6\u3002\u5982\u679c\u672a\u5b9a\u4e49\uff0c\u5219\u5176\u9ed8\u8ba4\u503c\u4e3a 0\uff0c\u5bfc\u81f4\u7eaf\u6c34\u5e73\u503e\u659c\u3002")),i.a.createElement("h2",null,"\u793a\u4f8b"),i.a.createElement("h3",null,"\u4f7f\u7528\u5355\u4e2a\u53c2\u6570"),i.a.createElement("b",null,i.a.createElement("p",null,"HTML")),i.a.createElement(d.a,{value:'<div>Normal</div>\n<div class="skewed">Skewed</div>',options:{theme:"monokai",mode:"HTML",readOnly:!0}}),i.a.createElement("b",null,i.a.createElement("p",null,"CSS")),i.a.createElement(d.a,{value:"div {\n    width: 80px;\n    height: 80px;\n    background-color: skyblue;\n}\n\n.skewed {\n    transform: skew(10deg); /* Equal to skewX(10deg) */\n    background-color: pink;\n}",options:u}),i.a.createElement("b",null,i.a.createElement("p",null,"\u7ed3\u679c")),i.a.createElement("div",{style:{padding:20,border:"1px solid #000",width:"100%",maxWidth:300,margin:"0 auto"}},i.a.createElement("div",{style:{width:80,height:80,backgroundColor:"skyblue"}},"Normal"),i.a.createElement("div",{style:{width:80,height:80,backgroundColor:"pink",transform:"skew(10deg)"}},"Skewed")),i.a.createElement("h3",null,"\u4f7f\u7528\u4e24\u4e2a\u53c2\u6570"),i.a.createElement("b",null,i.a.createElement("p",null,"HTML")),i.a.createElement(d.a,{value:'<div>Normal</div>\n<div class="skewed">Skewed</div>',options:{theme:"monokai",mode:"HTML",readOnly:!0}}),i.a.createElement("b",null,i.a.createElement("p",null,"CSS")),i.a.createElement(d.a,{value:"div {\n    width: 80px;\n    height: 80px;\n    background-color: skyblue;\n}\n  \n.skewed {\n    transform: skew(10deg, 10deg);\n    background-color: pink;\n}",options:u}),i.a.createElement("b",null,i.a.createElement("p",null,"\u7ed3\u679c")),i.a.createElement("div",{style:{padding:20,border:"1px solid #000",width:"100%",maxWidth:300,margin:"0 auto"}},i.a.createElement("div",{style:{width:80,height:80,backgroundColor:"skyblue"}},"Normal"),i.a.createElement("div",{style:{width:80,height:80,backgroundColor:"pink",transform:"skew(10deg,10deg)"}},"Skewed")))),i.a.createElement(m.a,null))}}]),c}(c.Component)}}]);
//# sourceMappingURL=17.050886f8.chunk.js.map