(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[53],{39:function(e,a,t){"use strict";var n=t(12),i=t(13),l=t(17),r=t(14),o=t(15),s=t(0),m=t.n(s),d=t(5),c=t(8),g=(t(40),function(e){Object(o.a)(t,e);var a=Object(r.a)(t);function t(e){var i;return Object(n.a)(this,t),(i=a.call(this,e)).bindHandleScroll=function(e){var a=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);i.setState({scrollTop:a})},i.scrollToAnchor=function(e){if(e){var a=document.getElementById(e);a&&a.scrollIntoView({block:"start",behavior:"smooth"})}},i.state={articleTree:[],scrollTop:null},i.getArticleTree=i.getArticleTree.bind(Object(l.a)(i)),i}return Object(i.a)(t,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,a=[],t=0,n=e.length;t<n-1;t++){var i=e[t].nodeName;"H2"!==i&&"H3"!==i||(e[t].id=e[t].innerText,a.push({name:e[t].innerText,tag:e[t].nodeName}))}this.setState({articleTree:a})}},{key:"setTitle",value:function(){for(var e=this.props.location.pathname.split("/").filter((function(e){return e})),a=0,t=c.a.length;a<t;a++)e[0]===c.a[a].name&&(document.getElementsByTagName("h1")[0].innerHTML=c.a[a].section.length>0?c.a[a].section[e[e.length-1]]:c.a[a].title)}},{key:"componentDidMount",value:function(){this.getArticleTree(),this.setTitle();var e=document.getElementById("header"),a=window.scrollY,t=document.getElementsByClassName("directory-list")[0],n=t.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var i=document.getElementsByClassName("page-footer")[0],l=0;i;)l+=i.offsetTop,i=i.offsetParent;var r=document.body.scrollTop||document.documentElement.scrollTop;if((r+=n+t.offsetHeight)>l+e.offsetHeight)t.style="position:fixed;top:".concat(n-r+l,"px;transition:none");else{var o=window.scrollY;o>e.offsetHeight&&(a<o&&(e.className="ant-layout-header header header-affixed",t.className="directory-list directory-affixed",a=o),a>o&&(e.className="ant-layout-header header header-visible",t.className="directory-list",a=o)),t.style=""}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll)}},{key:"render",value:function(){var e=this,a=this.state,t=a.articleTree,n=a.scrollTop,i=t.length;if(document.getElementById("tree-num-0")&&i>0){for(var l=[],r=0;r<i;r++){var o=document.getElementById(t[r].name);l.push(o.offsetTop)}for(var s=l.findIndex((function(e){return e>n}))-1,d=0;d<i;d++)document.getElementById("tree-num-".concat(d)).className=d===s?"tree-num directory-item-active":"tree-num";-2===s&&(document.getElementById("tree-num-".concat(i-1)).className="tree-num directory-item-active")}return m.a.createElement("div",{className:"directory"},m.a.createElement("ul",{className:"directory-list"},t.map((function(a,t){return m.a.createElement("li",{key:t,id:"tree-num-".concat(t),className:"tree-num",title:a.name,style:{paddingLeft:"H2"===a.tag?10:22},onClick:function(){e.scrollToAnchor("".concat(a.name))}},a.name)}))))}}]),t}(s.Component));a.a=Object(d.f)(g)},40:function(e,a,t){},67:function(e,a,t){var n={"./apl/apl.js":[68,120],"./asciiarmor/asciiarmor.js":[69,121],"./asn.1/asn.1.js":[70,122],"./asterisk/asterisk.js":[71,123],"./brainfuck/brainfuck.js":[72,124],"./clike/clike.js":[55,9],"./clojure/clojure.js":[73,125],"./cmake/cmake.js":[74,126],"./cobol/cobol.js":[75,127],"./coffeescript/coffeescript.js":[56,128],"./commonlisp/commonlisp.js":[76,129],"./crystal/crystal.js":[77,130],"./css/css.js":[48,3],"./cypher/cypher.js":[78,131],"./d/d.js":[79,132],"./dart/dart.js":[80,9,133],"./diff/diff.js":[81,134],"./django/django.js":[82,2,3,92],"./dockerfile/dockerfile.js":[83,106],"./dtd/dtd.js":[84,135],"./dylan/dylan.js":[85,136],"./ebnf/ebnf.js":[86,137],"./ecl/ecl.js":[87,138],"./eiffel/eiffel.js":[88,139],"./elm/elm.js":[89,140],"./erlang/erlang.js":[90,141],"./factor/factor.js":[91,107],"./fcl/fcl.js":[92,142],"./forth/forth.js":[93,143],"./fortran/fortran.js":[94,144],"./gas/gas.js":[95,145],"./gfm/gfm.js":[96,76,105],"./gherkin/gherkin.js":[97,146],"./go/go.js":[98,147],"./groovy/groovy.js":[99,148],"./haml/haml.js":[100,2,3,95],"./handlebars/handlebars.js":[57,101],"./haskell-literate/haskell-literate.js":[101,110],"./haskell/haskell.js":[58,149],"./haxe/haxe.js":[102,150],"./htmlembedded/htmlembedded.js":[103,2,3,91],"./htmlmixed/htmlmixed.js":[47,2,3,111],"./http/http.js":[104,151],"./idl/idl.js":[105,152],"./javascript/javascript.js":[49,2],"./jinja2/jinja2.js":[106,153],"./jsx/jsx.js":[107,2,112],"./julia/julia.js":[108,154],"./livescript/livescript.js":[109,155],"./lua/lua.js":[110,156],"./markdown/markdown.js":[63,76],"./mathematica/mathematica.js":[111,157],"./mbox/mbox.js":[112,158],"./meta.js":[53],"./mirc/mirc.js":[113,159],"./mllike/mllike.js":[114,160],"./modelica/modelica.js":[115,161],"./mscgen/mscgen.js":[116,162],"./mumps/mumps.js":[117,163],"./nginx/nginx.js":[118,164],"./nsis/nsis.js":[119,108],"./ntriples/ntriples.js":[120,165],"./octave/octave.js":[121,166],"./oz/oz.js":[122,167],"./pascal/pascal.js":[123,168],"./pegjs/pegjs.js":[124,2,169],"./perl/perl.js":[125,170],"./php/php.js":[126,2,3,9,102],"./pig/pig.js":[127,171],"./powershell/powershell.js":[128,172],"./properties/properties.js":[129,173],"./protobuf/protobuf.js":[130,174],"./pug/pug.js":[64,2,3,75],"./puppet/puppet.js":[131,175],"./python/python.js":[59,176],"./q/q.js":[132,177],"./r/r.js":[133,178],"./rpm/rpm.js":[134,179],"./rst/rst.js":[135,94],"./ruby/ruby.js":[51,180],"./rust/rust.js":[136,109],"./sas/sas.js":[137,181],"./sass/sass.js":[61,3,182],"./scheme/scheme.js":[138,183],"./shell/shell.js":[139,184],"./sieve/sieve.js":[140,185],"./slim/slim.js":[141,2,3,96],"./smalltalk/smalltalk.js":[142,186],"./smarty/smarty.js":[143,187],"./solr/solr.js":[144,188],"./soy/soy.js":[145,2,3,103],"./sparql/sparql.js":[146,189],"./spreadsheet/spreadsheet.js":[147,190],"./sql/sql.js":[148,191],"./stex/stex.js":[60,192],"./stylus/stylus.js":[65,77],"./swift/swift.js":[149,193],"./tcl/tcl.js":[150,194],"./textile/textile.js":[151,195],"./tiddlywiki/tiddlywiki.js":[152,196],"./tiki/tiki.js":[153,197],"./toml/toml.js":[154,198],"./tornado/tornado.js":[155,2,3,93],"./troff/troff.js":[156,199],"./ttcn-cfg/ttcn-cfg.js":[158,200],"./ttcn/ttcn.js":[157,201],"./turtle/turtle.js":[159,202],"./twig/twig.js":[160,104],"./vb/vb.js":[161,203],"./vbscript/vbscript.js":[162,204],"./velocity/velocity.js":[163,205],"./verilog/verilog.js":[164,206],"./vhdl/vhdl.js":[165,207],"./vue/vue.js":[166,2,3,77,75,88],"./webidl/webidl.js":[167,208],"./xml/xml.js":[46,209],"./xquery/xquery.js":[168,210],"./yacas/yacas.js":[169,211],"./yaml-frontmatter/yaml-frontmatter.js":[170,113],"./yaml/yaml.js":[62,212],"./z80/z80.js":[171,213]};function i(e){if(!t.o(n,e))return Promise.resolve().then((function(){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}));var a=n[e],i=a[0];return Promise.all(a.slice(1).map(t.e)).then((function(){return t.t(i,7)}))}i.keys=function(){return Object.keys(n)},i.id=67,e.exports=i},922:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return p}));var n=t(12),i=t(13),l=t(14),r=t(15),o=t(0),s=t.n(o),m=t(172),d=(t(54),t(39)),c=t(188),g=t.n(c),u=g.a.GraphObject.make,y={theme:"monokai",mode:"JSX",readOnly:!0},p=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"componentDidMount",value:function(){this.diagramRender1(),this.diagramRender2(),this.diagramRender3(),this.diagramRender4(),this.diagramRender5(),this.diagramRender6(),this.diagramRender7(),this.diagramRender8(),this.diagramRender9(),this.diagramRender10()}},{key:"diagramRender1",value:function(){var e=u(g.a.Diagram,"myDiagramDiv1");e.nodeTemplate=u(g.a.Node,"Auto",u(g.a.Shape,"RoundedRectangle",{fill:"lightblue"}),u(g.a.TextBlock,{margin:8},new g.a.Binding("text","key"))),e.layout=u(g.a.GridLayout),e.model=u(g.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha"},{key:"Beta"},{key:"Gamma"},{key:"Delta"},{key:"Epsilon"},{key:"Zeta"}],linkDataArray:[]})}},{key:"diagramRender2",value:function(){var e=u(g.a.Diagram,"myDiagramDiv2");e.nodeTemplate=u(g.a.Node,"Auto",u(g.a.Shape,"RoundedRectangle",{fill:"lightblue"}),u(g.a.TextBlock,{margin:8},new g.a.Binding("text","key"))),e.layout=u(g.a.GridLayout,{wrappingColumn:3}),e.model=u(g.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha"},{key:"Beta"},{key:"Gamma"},{key:"Delta"},{key:"Epsilon"},{key:"Zeta"}],linkDataArray:[]})}},{key:"diagramRender3",value:function(){var e=u(g.a.Diagram,"myDiagramDiv3");e.nodeTemplate=u(g.a.Node,"Auto",u(g.a.Shape,"RoundedRectangle",{fill:"lightblue"}),u(g.a.TextBlock,{margin:8},new g.a.Binding("text","key"))),e.layout=u(g.a.GridLayout,{wrappingColumn:3,wrappingWidth:1}),e.model=u(g.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha"},{key:"Beta"},{key:"Gamma"},{key:"Delta"},{key:"Epsilon"},{key:"Zeta"}],linkDataArray:[]})}},{key:"diagramRender4",value:function(){var e=u(g.a.Diagram,"myDiagramDiv4");e.nodeTemplate=u(g.a.Node,"Auto",u(g.a.Shape,"RoundedRectangle",{fill:"lightblue"}),u(g.a.TextBlock,{margin:8},new g.a.Binding("text","key"))),e.layout=u(g.a.GridLayout,{wrappingColumn:3,wrappingWidth:NaN,cellSize:new g.a.Size(150,150)}),e.model=u(g.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha"},{key:"Beta"},{key:"Gamma"},{key:"Delta"},{key:"Epsilon"},{key:"Zeta"}],linkDataArray:[]})}},{key:"diagramRender5",value:function(){var e=u(g.a.Diagram,"myDiagramDiv5");e.nodeTemplate=u(g.a.Node,"Auto",u(g.a.Shape,"RoundedRectangle",{fill:"lightblue"}),u(g.a.TextBlock,{margin:8},new g.a.Binding("text","key"))),e.layout=u(g.a.GridLayout,{wrappingColumn:3,wrappingWidth:NaN,cellSize:new g.a.Size(NaN,NaN),spacing:new g.a.Size(50,10)}),e.model=u(g.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha"},{key:"Beta"},{key:"Gamma"},{key:"Delta"},{key:"Epsilon"},{key:"Zeta"}],linkDataArray:[]})}},{key:"diagramRender6",value:function(){var e=u(g.a.Diagram,"myDiagramDiv6");e.nodeTemplate=u(g.a.Node,"Auto",{locationSpot:g.a.Spot.Center},u(g.a.Shape,"RoundedRectangle",{fill:"lightblue"}),u(g.a.TextBlock,{margin:8},new g.a.Binding("text","key"))),e.layout=u(g.a.GridLayout,{wrappingColumn:3,wrappingWidth:NaN,cellSize:new g.a.Size(NaN,NaN),spacing:new g.a.Size(50,10),alignment:g.a.GridLayout.location}),e.model=u(g.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha"},{key:"Beta"},{key:"Gamma"},{key:"Delta"},{key:"Epsilon"},{key:"Zeta"}],linkDataArray:[]})}},{key:"diagramRender7",value:function(){var e=u(g.a.Diagram,"myDiagramDiv7");e.nodeTemplate=u(g.a.Node,"Auto",{locationSpot:g.a.Spot.Center},u(g.a.Shape,"RoundedRectangle",{fill:"lightblue"}),u(g.a.TextBlock,{margin:8},new g.a.Binding("text","key"))),e.layout=u(g.a.GridLayout,{wrappingColumn:3,wrappingWidth:NaN,cellSize:new g.a.Size(NaN,NaN),spacing:new g.a.Size(50,10),alignment:g.a.GridLayout.location,sorting:g.a.GridLayout.Reverse}),e.model=u(g.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha"},{key:"Beta"},{key:"Gamma"},{key:"Delta"},{key:"Epsilon"},{key:"Zeta"}],linkDataArray:[]})}},{key:"diagramRender8",value:function(){var e=u(g.a.Diagram,"myDiagramDiv8");e.nodeTemplate=u(g.a.Node,"Auto",{locationSpot:g.a.Spot.Center},u(g.a.Shape,"RoundedRectangle",{fill:"lightblue"}),u(g.a.TextBlock,{margin:8},new g.a.Binding("text","key"))),e.layout=u(g.a.GridLayout,{wrappingColumn:3,wrappingWidth:NaN,cellSize:new g.a.Size(NaN,NaN),spacing:new g.a.Size(50,10),alignment:g.a.GridLayout.location,sorting:g.a.GridLayout.Ascending}),e.model=u(g.a.GraphLinksModel,{nodeDataArray:[{key:"Zeta"},{key:"Delta"},{key:"Beta"},{key:"Gamma"},{key:"Epsilon"},{key:"Alpha"}],linkDataArray:[]})}},{key:"diagramRender9",value:function(){var e=u(g.a.Diagram,"myDiagramDiv9");e.nodeTemplate=u(g.a.Node,"Auto",{locationSpot:g.a.Spot.Center},u(g.a.Shape,"RoundedRectangle",{fill:"lightblue"}),u(g.a.TextBlock,{margin:8},new g.a.Binding("text","key"))),e.layout=u(g.a.GridLayout,{wrappingColumn:3,wrappingWidth:NaN,cellSize:new g.a.Size(NaN,NaN),spacing:new g.a.Size(50,10),alignment:g.a.GridLayout.location,sorting:g.a.GridLayout.Ascending,comparer:function(e,a){return e.data.key<a.data.key?-1:e.data.key>a.data.key?1:0}}),e.model=u(g.a.GraphLinksModel,{nodeDataArray:[{key:"Zeta"},{key:"Delta"},{key:"Beta"},{key:"Gamma"},{key:"Epsilon"},{key:"Alpha"}],linkDataArray:[]})}},{key:"diagramRender10",value:function(){var e=u(g.a.Diagram,"myDiagramDiv10");e.nodeTemplate=u(g.a.Node,"Auto",{locationSpot:g.a.Spot.Center},u(g.a.Shape,"RoundedRectangle",{fill:"lightblue"}),u(g.a.TextBlock,{margin:8},new g.a.Binding("text","key"))),e.layout=u(g.a.GridLayout,{wrappingColumn:3,wrappingWidth:NaN,cellSize:new g.a.Size(NaN,NaN),spacing:new g.a.Size(50,10),alignment:g.a.GridLayout.location,sorting:g.a.GridLayout.Ascending,comparer:function(e,a){return e.data.key<a.data.key?-1:e.data.key>a.data.key?1:0},arrangement:g.a.GridLayout.RightToLeft}),e.model=u(g.a.GraphLinksModel,{nodeDataArray:[{key:"Zeta"},{key:"Delta"},{key:"Beta"},{key:"Gamma"},{key:"Epsilon"},{key:"Alpha"}],linkDataArray:[]})}},{key:"render",value:function(){return s.a.createElement("div",{className:"page-content"},s.a.createElement("div",{className:"article"},s.a.createElement("div",{className:"article-title"},s.a.createElement("h1",null,"GoJS \u5e03\u5c40\u2014\u2014\u7b2c\u4e8c\u8282 \u7f51\u683c\u5e03\u5c40(GridLayout)")),s.a.createElement("div",{className:"article-content"},s.a.createElement("h2",null,"\u793a\u4f8b"),s.a.createElement(m.a,{value:'let $ = go.GraphObject.make;\nlet myDiagram = $(go.Diagram, "myDiagramDiv");\n\nmyDiagram.nodeTemplate =\n    $(go.Node, "Auto",\n        $(go.Shape, "RoundedRectangle", {\n            fill: "lightblue"\n        }),\n        $(go.TextBlock, {\n                margin: 8\n            },\n            new go.Binding("text", "key"))\n    );\nmyDiagram.layout = $(go.GridLayout);\nmyDiagram.model =\n    $(go.GraphLinksModel, {\n        nodeDataArray: [{\n            key: "Alpha",\n        }, {\n            key: "Beta",\n        }, {\n            key: "Gamma"\n        }, {\n            key: "Delta"\n        }, {\n            key: "Epsilon"\n        }, {\n            key: "Zeta"\n        }, ],\n        linkDataArray: []\n    })',options:y}),s.a.createElement("div",{id:"myDiagramDiv1",className:"diagram",style:{maxWidth:600}}),s.a.createElement("h2",null,"wrappingColumn"),s.a.createElement(m.a,{value:"myDiagram.layout = $(go.GridLayout, {\n    wrappingColumn: 3\n});",options:y}),s.a.createElement("div",{id:"myDiagramDiv2",className:"diagram",style:{maxWidth:600}}),s.a.createElement("h2",null,"wrappingWidth"),s.a.createElement("p",null,"\u786e\u5b9a GridLayout \u7684\u5bbd\u5ea6\uff0c\u82e5\u4f7f\u9002\u5408 wrappingwidth \u7684\u6700\u5927\u5217\u6570\u5c0f\u4e8e wrappingColumn, \u5219 wrappingWidth \u4f18\u5148"),s.a.createElement(m.a,{value:"myDiagram.layout = $(go.GridLayout, {\n    wrappingColumn: 3,\n    wrappingWidth: 1\n});",options:y}),s.a.createElement("div",{id:"myDiagramDiv3",className:"diagram",style:{maxWidth:600}}),s.a.createElement("h2",null,"cellSize"),s.a.createElement("p",null,"\u786e\u5b9a\u6bcf\u4e2a Part \u5728\u7f51\u683c\u4e2d\u6240\u5360\u4f4d\u7f6e\u7684\u6700\u5c0f Part \u5927\u5c0f"),s.a.createElement("p",null,"\u9ed8\u8ba4\u503c::NaN x NaN(\u4f7f\u7528\u6700\u5927\u7684\u90e8\u4ef6\u4f5c\u4e3a cellSize)"),s.a.createElement(m.a,{value:"myDiagram.layout = $(go.GridLayout, {\n    wrappingColumn: 3,\n    wrappingWidth: NaN,\n    cellSize: new go.Size(150, 150)\n});",options:y}),s.a.createElement("div",{id:"myDiagramDiv4",className:"diagram",style:{maxWidth:600}}),s.a.createElement("h2",null,"spacing"),s.a.createElement("p",null,"\u786e\u5b9a Node \u4e4b\u95f4\u7684\u7a7a\u95f4"),s.a.createElement("p",null,"\u9ed8\u8ba4\u503c:10x10"),s.a.createElement(m.a,{value:"myDiagram.layout = $(go.GridLayout, {\n    wrappingColumn: 3,\n    wrappingWidth: NaN,\n    cellSize: new go.Size(NaN, NaN),\n    spacing: new go.Size(50, 10)\n});",options:y}),s.a.createElement("div",{id:"myDiagramDiv5",className:"diagram",style:{maxWidth:600}}),s.a.createElement("h2",null,"alignment"),s.a.createElement("p",null,"\u51b3\u5b9a\u4f7f\u7528 Part.location \u8fd8\u662f Part.position \u6765\u5b89\u6392\u6bcf\u4e2a part"),s.a.createElement("div",{className:"tip"},s.a.createElement("div",{className:"tip-content"},s.a.createElement("em",null,"\u9ed8\u8ba4\u7684\u6392\u5217\u57fa\u51c6\u662f Node \u7684\u5de6\u4e0a\u89d2,Node \u7684 locationSpot \u51b3\u5b9a\u6b64\u5c5e\u6027"))),s.a.createElement(m.a,{value:'myDiagram.nodeTemplate =\n    $(go.Node, "Auto", {\n            locationSpot: go.Spot.Center\n        },\n        $(go.Shape, "RoundedRectangle", {\n            fill: "lightblue"\n        }),\n        $(go.TextBlock, {\n                margin: 8\n            },\n            new go.Binding("text", "key"))\n    );\n    myDiagram.layout = $(go.GridLayout, {\n    wrappingColumn: 3,\n    wrappingWidth: NaN,\n    cellSize: new go.Size(NaN, NaN),\n    spacing: new go.Size(50, 10),\n    alignment: go.GridLayout.location\n});',options:y}),s.a.createElement("div",{id:"myDiagramDiv6",className:"diagram",style:{maxWidth:600}}),s.a.createElement("h2",null,"sorting"),s.a.createElement("ul",null,s.a.createElement("li",null,"\u51b3\u5b9a Part \u7684\u987a\u5e8f")),s.a.createElement("ul",{"data-lake-indent":"1"},s.a.createElement("li",null,"\u53ef\u4ee5\u662f Forward(\u6b63\u5411),Reverse(\u53cd\u5411),Ascending(\u5347\u5e8f)\u6216Descending(\u964d\u5e8f)")),s.a.createElement("ul",null,s.a.createElement("li",null,"Forward / Reverse \u53d6\u51b3\u4e8e\u5143\u7d20\u6570\u636e\u88ab\u68c0\u7d22\u7684\u987a\u5e8f"),s.a.createElement("li",null,'Ascending / Descending \u53d6\u51b3\u4e8e"comparer"\u5c5e\u6027\u51fd\u6570')),s.a.createElement(m.a,{value:"myDiagram.layout = $(go.GridLayout, {\n    wrappingColumn: 3,\n    wrappingWidth: NaN,\n    cellSize: new go.Size(NaN, NaN),\n    spacing: new go.Size(50, 10),\n    alignment: go.GridLayout.location,\n    sorting: go.GridLayout.Reverse\n});",options:y}),s.a.createElement("div",{id:"myDiagramDiv7",className:"diagram",style:{maxWidth:600}}),s.a.createElement("p",null,"\u6539\u53d8 Node \u6570\u636e\u7684\u987a\u5e8f"),s.a.createElement(m.a,{value:'nodeDataArray: [{\n        key: "Zeta",\n    }, {\n        key: "Delta",\n    }, {\n        key: "Beta"\n    }, {\n        key: "Gamma"\n    }, {\n        key: "Epsilon"\n    }, {\n        key: "Alpha"\n}, ],',options:y}),s.a.createElement("p",null,"\u8bbe\u7f6e layout \u7684 sorting \u5c5e\u6027\u4e3a: go.GridLayout.Ascending"),s.a.createElement("div",{id:"myDiagramDiv8",className:"diagram",style:{maxWidth:600}}),s.a.createElement("p",null,"\u8bbe\u7f6e layout \u7684 comparer \u5c5e\u6027\u4e3a"),s.a.createElement(m.a,{value:"myDiagram.layout = $(go.GridLayout, {\n    wrappingColumn: 3,\n    wrappingWidth: NaN,\n    cellSize: new go.Size(NaN, NaN),\n    spacing: new go.Size(50, 10),\n    alignment: go.GridLayout.location,\n    sorting: go.GridLayout.Ascending,\n    comparer: function (a, b) {\n        if (a.data.key < b.data.key) return -1;\n        if (a.data.key > b.data.key) return 1;\n        return 0;\n    }\n});",options:y}),s.a.createElement("div",{id:"myDiagramDiv9",className:"diagram",style:{maxWidth:600}}),s.a.createElement("h2",null,"arrangement"),s.a.createElement("p",null,"\u51b3\u5b9a Node \u6392\u5e8f\u7684\u65b9\u5f0f"),s.a.createElement(m.a,{value:"myDiagram.layout = $(go.GridLayout, {\n    wrappingColumn: 3,\n    wrappingWidth: NaN,\n    cellSize: new go.Size(NaN, NaN),\n    spacing: new go.Size(50, 10),\n    alignment: go.GridLayout.location,\n    sorting: go.GridLayout.Ascending,\n    comparer: function (a, b) {\n        if (a.data.key < b.data.key) return -1;\n        if (a.data.key > b.data.key) return 1;\n        return 0;\n    },\n    arrangement: go.GridLayout.RightToLeft,\n});",options:y}),s.a.createElement("div",{id:"myDiagramDiv10",className:"diagram",style:{maxWidth:600}}),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("p",null,"\u76f8\u5173\u4ee3\u7801\uff1a"),s.a.createElement("p",null,s.a.createElement("a",{href:"https://github.com/LiuZheAb/GoJS_Demo/blob/master/08gridLayout.html",target:"_blank",rel:"noopener noreferrer"},"https://github.com/LiuZheAb/GoJS_Demo/blob/master/08gridLayout.html")))),s.a.createElement(d.a,null))}}]),t}(o.Component)}}]);
//# sourceMappingURL=53.c8bf3e9e.chunk.js.map