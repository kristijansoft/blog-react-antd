(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[41],{39:function(e,a,t){"use strict";var n=t(12),r=t(13),i=t(17),l=t(14),s=t(15),o=t(0),d=t.n(o),c=t(5),m=t(8),u=(t(40),function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).bindHandleScroll=function(e){var a=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);r.setState({scrollTop:a})},r.scrollToAnchor=function(e){if(e){var a=document.getElementById(e);a&&a.scrollIntoView({block:"start",behavior:"smooth"})}},r.state={articleTree:[],scrollTop:null},r.getArticleTree=r.getArticleTree.bind(Object(i.a)(r)),r}return Object(r.a)(t,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,a=[],t=0,n=e.length;t<n-1;t++){var r=e[t].nodeName;"H2"!==r&&"H3"!==r||(e[t].id=e[t].innerText,a.push({name:e[t].innerText,tag:e[t].nodeName}))}this.setState({articleTree:a})}},{key:"setTitle",value:function(){for(var e=this.props.location.pathname.split("/").filter((function(e){return e})),a=0,t=m.a.length;a<t;a++)e[0]===m.a[a].name&&(document.getElementsByTagName("h1")[0].innerHTML=m.a[a].section.length>0?m.a[a].section[e[e.length-1]]:m.a[a].title)}},{key:"componentDidMount",value:function(){this.getArticleTree(),this.setTitle();var e=document.getElementById("header"),a=window.scrollY,t=document.getElementsByClassName("directory-list")[0],n=t.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var r=document.getElementsByClassName("page-footer")[0],i=0;r;)i+=r.offsetTop,r=r.offsetParent;var l=document.body.scrollTop||document.documentElement.scrollTop;if((l+=n+t.offsetHeight)>i+e.offsetHeight)t.style="position:fixed;top:".concat(n-l+i,"px;transition:none");else{var s=window.scrollY;s>e.offsetHeight&&(a<s&&(e.className="ant-layout-header header header-affixed",t.className="directory-list directory-affixed",a=s),a>s&&(e.className="ant-layout-header header header-visible",t.className="directory-list",a=s)),t.style=""}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll)}},{key:"render",value:function(){var e=this,a=this.state,t=a.articleTree,n=a.scrollTop,r=t.length;if(document.getElementById("tree-num-0")&&r>0){for(var i=[],l=0;l<r;l++){var s=document.getElementById(t[l].name);i.push(s.offsetTop)}for(var o=i.findIndex((function(e){return e>n}))-1,c=0;c<r;c++)document.getElementById("tree-num-".concat(c)).className=c===o?"tree-num directory-item-active":"tree-num";-2===o&&(document.getElementById("tree-num-".concat(r-1)).className="tree-num directory-item-active")}return d.a.createElement("div",{className:"directory"},d.a.createElement("ul",{className:"directory-list"},t.map((function(a,t){return d.a.createElement("li",{key:t,id:"tree-num-".concat(t),className:"tree-num",title:a.name,style:{paddingLeft:"H2"===a.tag?10:22},onClick:function(){e.scrollToAnchor("".concat(a.name))}},a.name)}))))}}]),t}(o.Component));a.a=Object(c.f)(u)},40:function(e,a,t){},67:function(e,a,t){var n={"./apl/apl.js":[68,120],"./asciiarmor/asciiarmor.js":[69,121],"./asn.1/asn.1.js":[70,122],"./asterisk/asterisk.js":[71,123],"./brainfuck/brainfuck.js":[72,124],"./clike/clike.js":[55,9],"./clojure/clojure.js":[73,125],"./cmake/cmake.js":[74,126],"./cobol/cobol.js":[75,127],"./coffeescript/coffeescript.js":[56,128],"./commonlisp/commonlisp.js":[76,129],"./crystal/crystal.js":[77,130],"./css/css.js":[48,3],"./cypher/cypher.js":[78,131],"./d/d.js":[79,132],"./dart/dart.js":[80,9,133],"./diff/diff.js":[81,134],"./django/django.js":[82,2,3,92],"./dockerfile/dockerfile.js":[83,106],"./dtd/dtd.js":[84,135],"./dylan/dylan.js":[85,136],"./ebnf/ebnf.js":[86,137],"./ecl/ecl.js":[87,138],"./eiffel/eiffel.js":[88,139],"./elm/elm.js":[89,140],"./erlang/erlang.js":[90,141],"./factor/factor.js":[91,107],"./fcl/fcl.js":[92,142],"./forth/forth.js":[93,143],"./fortran/fortran.js":[94,144],"./gas/gas.js":[95,145],"./gfm/gfm.js":[96,76,105],"./gherkin/gherkin.js":[97,146],"./go/go.js":[98,147],"./groovy/groovy.js":[99,148],"./haml/haml.js":[100,2,3,95],"./handlebars/handlebars.js":[57,101],"./haskell-literate/haskell-literate.js":[101,110],"./haskell/haskell.js":[58,149],"./haxe/haxe.js":[102,150],"./htmlembedded/htmlembedded.js":[103,2,3,91],"./htmlmixed/htmlmixed.js":[47,2,3,111],"./http/http.js":[104,151],"./idl/idl.js":[105,152],"./javascript/javascript.js":[49,2],"./jinja2/jinja2.js":[106,153],"./jsx/jsx.js":[107,2,112],"./julia/julia.js":[108,154],"./livescript/livescript.js":[109,155],"./lua/lua.js":[110,156],"./markdown/markdown.js":[63,76],"./mathematica/mathematica.js":[111,157],"./mbox/mbox.js":[112,158],"./meta.js":[53],"./mirc/mirc.js":[113,159],"./mllike/mllike.js":[114,160],"./modelica/modelica.js":[115,161],"./mscgen/mscgen.js":[116,162],"./mumps/mumps.js":[117,163],"./nginx/nginx.js":[118,164],"./nsis/nsis.js":[119,108],"./ntriples/ntriples.js":[120,165],"./octave/octave.js":[121,166],"./oz/oz.js":[122,167],"./pascal/pascal.js":[123,168],"./pegjs/pegjs.js":[124,2,169],"./perl/perl.js":[125,170],"./php/php.js":[126,2,3,9,102],"./pig/pig.js":[127,171],"./powershell/powershell.js":[128,172],"./properties/properties.js":[129,173],"./protobuf/protobuf.js":[130,174],"./pug/pug.js":[64,2,3,75],"./puppet/puppet.js":[131,175],"./python/python.js":[59,176],"./q/q.js":[132,177],"./r/r.js":[133,178],"./rpm/rpm.js":[134,179],"./rst/rst.js":[135,94],"./ruby/ruby.js":[51,180],"./rust/rust.js":[136,109],"./sas/sas.js":[137,181],"./sass/sass.js":[61,3,182],"./scheme/scheme.js":[138,183],"./shell/shell.js":[139,184],"./sieve/sieve.js":[140,185],"./slim/slim.js":[141,2,3,96],"./smalltalk/smalltalk.js":[142,186],"./smarty/smarty.js":[143,187],"./solr/solr.js":[144,188],"./soy/soy.js":[145,2,3,103],"./sparql/sparql.js":[146,189],"./spreadsheet/spreadsheet.js":[147,190],"./sql/sql.js":[148,191],"./stex/stex.js":[60,192],"./stylus/stylus.js":[65,77],"./swift/swift.js":[149,193],"./tcl/tcl.js":[150,194],"./textile/textile.js":[151,195],"./tiddlywiki/tiddlywiki.js":[152,196],"./tiki/tiki.js":[153,197],"./toml/toml.js":[154,198],"./tornado/tornado.js":[155,2,3,93],"./troff/troff.js":[156,199],"./ttcn-cfg/ttcn-cfg.js":[158,200],"./ttcn/ttcn.js":[157,201],"./turtle/turtle.js":[159,202],"./twig/twig.js":[160,104],"./vb/vb.js":[161,203],"./vbscript/vbscript.js":[162,204],"./velocity/velocity.js":[163,205],"./verilog/verilog.js":[164,206],"./vhdl/vhdl.js":[165,207],"./vue/vue.js":[166,2,3,77,75,88],"./webidl/webidl.js":[167,208],"./xml/xml.js":[46,209],"./xquery/xquery.js":[168,210],"./yacas/yacas.js":[169,211],"./yaml-frontmatter/yaml-frontmatter.js":[170,113],"./yaml/yaml.js":[62,212],"./z80/z80.js":[171,213]};function r(e){if(!t.o(n,e))return Promise.resolve().then((function(){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}));var a=n[e],r=a[0];return Promise.all(a.slice(1).map(t.e)).then((function(){return t.t(r,7)}))}r.keys=function(){return Object.keys(n)},r.id=67,e.exports=r},909:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return f}));var n=t(12),r=t(13),i=t(14),l=t(15),s=t(0),o=t.n(s),d=t(172),c=(t(54),t(39)),m=t(188),u=t.n(m),g=u.a.GraphObject.make,h={theme:"monokai",mode:"JSX",readOnly:!0},f=function(e){Object(l.a)(t,e);var a=Object(i.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.diagramRender1(),this.diagramRender2(),this.diagramRender3(),this.diagramRender4(),this.diagramRender5(),this.diagramRender6()}},{key:"diagramRender1",value:function(){g(u.a.Diagram,"myDiagramDiv1").add(g(u.a.Part,"Graduated",{background:"white"},g(u.a.Shape,"LineH",{width:300}),g(u.a.Shape,"LineV",{height:10})))}},{key:"diagramRender2",value:function(){g(u.a.Diagram,"myDiagramDiv2").add(g(u.a.Part,"Graduated",{background:"white"},g(u.a.Shape,"LineH",{width:300}),g(u.a.Shape,"LineV",{height:10}),g(u.a.TextBlock,{segmentOffset:new u.a.Point(0,20)})))}},{key:"diagramRender3",value:function(){g(u.a.Diagram,"myDiagramDiv3").add(g(u.a.Part,"Graduated",{background:"white",graduatedMin:0,graduatedMax:200,graduatedTickUnit:20},g(u.a.Shape,"LineH",{width:300}),g(u.a.Shape,"LineV",{height:10}),g(u.a.TextBlock,{segmentOffset:new u.a.Point(0,20)})))}},{key:"diagramRender4",value:function(){g(u.a.Diagram,"myDiagramDiv4").add(g(u.a.Part,"Graduated",{background:"white",graduatedMin:0,graduatedMax:200,graduatedTickUnit:20,graduatedTickBase:15},g(u.a.Shape,"LineH",{width:300}),g(u.a.Shape,"LineV",{height:10}),g(u.a.TextBlock,{segmentOffset:new u.a.Point(0,20)})))}},{key:"diagramRender5",value:function(){g(u.a.Diagram,"myDiagramDiv5").add(g(u.a.Part,"Graduated",{background:"white",graduatedMin:0,graduatedMax:200,graduatedTickUnit:10,graduatedTickBase:0},g(u.a.Shape,"LineH",{width:300}),g(u.a.Shape,"LineV",{height:10,interval:2}),g(u.a.TextBlock,{segmentOffset:new u.a.Point(0,10),interval:2,stroke:"blue",font:"10px sans-serif"})))}},{key:"diagramRender6",value:function(){g(u.a.Diagram,"myDiagramDiv6").add(g(u.a.Part,"Graduated",{background:"white",graduatedMin:0,graduatedMax:200,graduatedTickUnit:10,graduatedTickBase:0},g(u.a.Shape,"LineH",{width:300}),g(u.a.Shape,"LineV",{height:10,interval:2}),g(u.a.TextBlock,{segmentOffset:new u.a.Point(0,10),interval:2,stroke:"blue",font:"10px sans-serif"}),g(u.a.TextBlock,{segmentOffset:new u.a.Point(0,20),interval:4,font:"bold 12px sans-serif"})))}},{key:"render",value:function(){return o.a.createElement("div",{className:"page-content"},o.a.createElement("div",{className:"article"},o.a.createElement("div",{className:"article-title"},o.a.createElement("h1",null,"GoJS \u9762\u677f\u2014\u2014\u7b2c\u4e09\u8282 \u523b\u5ea6\u9762\u677f(Graduated Panel)")),o.a.createElement("div",{className:"article-content"},o.a.createElement("h2",null,"Graduated Panels"),o.a.createElement("ul",null,o.a.createElement("li",null,"\u7528\u4e8e\u6cbf\u7740\u4e3b\u8981 Shape \u7684\u8fb9\u7ed8\u5236\u89c4\u5219\u7684\u6807\u8bb0\u6216\u6587\u672c\u6807\u7b7e"),o.a.createElement("li",null,"\u5fc5\u987b\u6709 2 \u4e2a\u610f\u601d\u5143\u7d20"),o.a.createElement("li",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4e3b Shape \u5143\u7d20\u662f\u7b2c\u4e00\u4e2a\u5143\u7d20\u2014\u2014\u53ef\u4ee5\u66f4\u6539")),o.a.createElement(d.a,{value:'let $ = go.GraphObject.make;\nlet myDiagram = $(go.Diagram, "myDiagramDiv");\nmyDiagram.add(\n    $(go.Part, "Graduated", {\n            background: "white"\n        },\n        $(go.Shape, "LineH", {\n            width: 300\n        }),\n        $(go.Shape, "LineV", {\n            height: 10\n        })\n    )\n);',options:h}),o.a.createElement("div",{id:"myDiagramDiv1",className:"diagram",style:{maxWidth:400}}),o.a.createElement("h2",null,"Graduated Panel Properties"),o.a.createElement("h3",null,"graduatedMin\u3001graduatedMax"),o.a.createElement("ul",null,o.a.createElement("li",null,'Graduated Panel \u8303\u56f4\u5305\u62ec\u5176"graduatedMin"\u548c"graduatedMax"\u4e4b\u95f4\u7684\u503c')),o.a.createElement("ul",{"data-lake-indent":"1"},o.a.createElement("li",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5b83\u4eec\u5206\u522b\u662f O \u548c 100")),o.a.createElement("h3",null,"graduatedTickUnit"),o.a.createElement("ul",null,o.a.createElement("li",null,'"graduatedTickUnit"\u2014\u2014\u751f\u6210\u6807\u8bb0\u7684\u9891\u7387')),o.a.createElement("ul",{"data-lake-indent":"1"},o.a.createElement("li",null,"\u9ed8\u8ba4\u503c\u662f 10\u2014\u2014\u6bcf 10 \u4e2a\u5355\u4f4d\uff0c\u751f\u6210\u4e00\u4e2a\u6807\u8bb0")),o.a.createElement(d.a,{value:'myDiagram.add(\n    $(go.Part, "Graduated", {\n            background: "white"\n        },\n        $(go.Shape, "LineH", {\n            width: 300\n        }),\n        $(go.Shape, "LineV", {\n            height: 10\n        }),\n        $(go.TextBlock, {\n            segmentOffset: new go.Point(0, 20)\n        })\n    )\n);',options:h}),o.a.createElement("div",{id:"myDiagramDiv2",className:"diagram",style:{maxWidth:400}}),o.a.createElement("h3",null,"segmentOffset"),o.a.createElement("ul",null,o.a.createElement("li",null,"segmentOffset \u51b3\u5b9a\u4e86\u523b\u5ea6\u7684\u504f\u79fb\u91cf")),o.a.createElement(d.a,{value:'myDiagram.add(\n    $(go.Part, "Graduated", {\n            background: "white",\n            graduatedMin: 0,\n            graduatedMax: 200,\n            graduatedTickUnit: 20\n        },\n        $(go.Shape, "LineH", {\n            width: 300\n        }),\n        $(go.Shape, "LineV", {\n            height: 10\n        }),\n        $(go.TextBlock, {\n            segmentOffset: new go.Point(0, 20)\n        })\n    )\n);',options:h}),o.a.createElement("div",{id:"myDiagramDiv3",className:"diagram",style:{maxWidth:400}}),o.a.createElement("h3",null,"graduatedTickBase"),o.a.createElement("ul",null,o.a.createElement("li",null,"graduatedTickBase \u51b3\u5b9a\u4e86\u6807\u8bb0\u7684\u8d77\u59cb\u503c")),o.a.createElement(d.a,{value:'myDiagram.add(\n    $(go.Part, "Graduated", {\n            background: "white",\n            graduatedMin: 0,\n            graduatedMax: 200,\n            graduatedTickUnit: 20,\n            graduatedTickBase: 15\n        },\n        $(go.Shape, "LineH", {\n            width: 300\n        }),\n        $(go.Shape, "LineV", {\n            height: 10\n        }),\n        $(go.TextBlock, {\n            segmentOffset: new go.Point(0, 20)\n        })\n    )\n);',options:h}),o.a.createElement("div",{id:"myDiagramDiv4",className:"diagram",style:{maxWidth:400}}),o.a.createElement("h3",null,"interval"),o.a.createElement("ul",null,o.a.createElement("li",null,"interval \u5c5e\u6027\u51b3\u5b9a\u4e86\u523b\u5ea6\u6216\u6807\u7b7e\u51fa\u73b0\u7684\u9891\u7387")),o.a.createElement(d.a,{value:'myDiagram.add(\n    $(go.Part, "Graduated", {\n            background: "white",\n            graduatedMin: 0,\n            graduatedMax: 200,\n            graduatedTickUnit: 10,\n            graduatedTickBase: 0\n        },\n        $(go.Shape, "LineH", {\n            width: 300\n        }),\n        $(go.Shape, "LineV", {\n            height: 10,\n            interval: 2,\n        }),\n        $(go.TextBlock, {\n            segmentOffset: new go.Point(0, 10),\n            interval: 2,\n            stroke: "blue",\n            font: "10px sans-serif"\n        })\n    )\n);',options:h}),o.a.createElement("div",{id:"myDiagramDiv5",className:"diagram",style:{maxWidth:400}}),o.a.createElement("h3",null,"\u4e24\u7ec4\u6807\u7b7e"),o.a.createElement("p",null,"\u6dfb\u52a0\u7b2c\u4e8c\u7ec4\u6807\u7b7e"),o.a.createElement(d.a,{value:'myDiagram.add(\n    $(go.Part, "Graduated", {\n            background: "white",\n            graduatedMin: 0,\n            graduatedMax: 200,\n            graduatedTickUnit: 10,\n            graduatedTickBase: 0\n        },\n        $(go.Shape, "LineH", {\n            width: 300\n        }),\n        $(go.Shape, "LineV", {\n            height: 10,\n            interval: 2,\n        }),\n        $(go.TextBlock, {\n            segmentOffset: new go.Point(0, 10),\n            interval: 2,\n            stroke: "blue",\n            font: "10px sans-serif"\n        }),\n        $(go.TextBlock, {\n            segmentOffset: new go.Point(0, 20),\n            interval: 4,\n            font: "bold 12px sans-serif"\n        }),\n    )\n);',options:h}),o.a.createElement("div",{id:"myDiagramDiv6",className:"diagram",style:{maxWidth:400}}),o.a.createElement("p",null,o.a.createElement("br",null)),o.a.createElement("p",null,o.a.createElement("br",null)),o.a.createElement("p",null,"\u76f8\u5173\u4ee3\u7801\uff1a"),o.a.createElement("p",null,o.a.createElement("a",{href:"https://github.com/LiuZheAb/GoJS_Demo/blob/master/15graduatedPanel.html",target:"_blank",rel:"noopener noreferrer"},"https://github.com/LiuZheAb/GoJS_Demo/blob/master/15graduatedPanel.html")))),o.a.createElement(c.a,null))}}]),t}(s.Component)}}]);
//# sourceMappingURL=41.6605c06c.chunk.js.map