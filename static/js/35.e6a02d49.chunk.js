(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[35],{39:function(e,a,t){"use strict";var n=t(12),l=t(13),r=t(17),o=t(14),m=t(15),i=t(0),s=t.n(i),c=t(5),y=t(8),d=(t(40),function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).bindHandleScroll=function(e){var a=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);l.setState({scrollTop:a})},l.scrollToAnchor=function(e){if(e){var a=document.getElementById(e);a&&a.scrollIntoView({block:"start",behavior:"smooth"})}},l.state={articleTree:[],scrollTop:null},l.getArticleTree=l.getArticleTree.bind(Object(r.a)(l)),l}return Object(l.a)(t,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,a=[],t=0,n=e.length;t<n-1;t++){var l=e[t].nodeName;"H2"!==l&&"H3"!==l||(e[t].id=e[t].innerText,a.push({name:e[t].innerText,tag:e[t].nodeName}))}this.setState({articleTree:a})}},{key:"setTitle",value:function(){for(var e=this.props.location.pathname.split("/").filter((function(e){return e})),a=0,t=y.a.length;a<t;a++)e[0]===y.a[a].name&&(document.getElementsByTagName("h1")[0].innerHTML=y.a[a].section.length>0?y.a[a].section[e[e.length-1]]:y.a[a].title)}},{key:"componentDidMount",value:function(){this.getArticleTree(),this.setTitle();var e=document.getElementById("header"),a=window.scrollY,t=document.getElementsByClassName("directory-list")[0],n=t.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var l=document.getElementsByClassName("page-footer")[0],r=0;l;)r+=l.offsetTop,l=l.offsetParent;var o=document.body.scrollTop||document.documentElement.scrollTop;if((o+=n+t.offsetHeight)>r+e.offsetHeight)t.style="position:fixed;top:".concat(n-o+r,"px;transition:none");else{var m=window.scrollY;m>e.offsetHeight&&(a<m&&(e.className="ant-layout-header header header-affixed",t.className="directory-list directory-affixed",a=m),a>m&&(e.className="ant-layout-header header header-visible",t.className="directory-list",a=m)),t.style=""}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll)}},{key:"render",value:function(){var e=this,a=this.state,t=a.articleTree,n=a.scrollTop,l=t.length;if(document.getElementById("tree-num-0")&&l>0){for(var r=[],o=0;o<l;o++){var m=document.getElementById(t[o].name);r.push(m.offsetTop)}for(var i=r.findIndex((function(e){return e>n}))-1,c=0;c<l;c++)document.getElementById("tree-num-".concat(c)).className=c===i?"tree-num directory-item-active":"tree-num";-2===i&&(document.getElementById("tree-num-".concat(l-1)).className="tree-num directory-item-active")}return s.a.createElement("div",{className:"directory"},s.a.createElement("ul",{className:"directory-list"},t.map((function(a,t){return s.a.createElement("li",{key:t,id:"tree-num-".concat(t),className:"tree-num",title:a.name,style:{paddingLeft:"H2"===a.tag?10:22},onClick:function(){e.scrollToAnchor("".concat(a.name))}},a.name)}))))}}]),t}(i.Component));a.a=Object(c.f)(d)},40:function(e,a,t){},67:function(e,a,t){var n={"./apl/apl.js":[68,120],"./asciiarmor/asciiarmor.js":[69,121],"./asn.1/asn.1.js":[70,122],"./asterisk/asterisk.js":[71,123],"./brainfuck/brainfuck.js":[72,124],"./clike/clike.js":[55,9],"./clojure/clojure.js":[73,125],"./cmake/cmake.js":[74,126],"./cobol/cobol.js":[75,127],"./coffeescript/coffeescript.js":[56,128],"./commonlisp/commonlisp.js":[76,129],"./crystal/crystal.js":[77,130],"./css/css.js":[48,3],"./cypher/cypher.js":[78,131],"./d/d.js":[79,132],"./dart/dart.js":[80,9,133],"./diff/diff.js":[81,134],"./django/django.js":[82,2,3,92],"./dockerfile/dockerfile.js":[83,106],"./dtd/dtd.js":[84,135],"./dylan/dylan.js":[85,136],"./ebnf/ebnf.js":[86,137],"./ecl/ecl.js":[87,138],"./eiffel/eiffel.js":[88,139],"./elm/elm.js":[89,140],"./erlang/erlang.js":[90,141],"./factor/factor.js":[91,107],"./fcl/fcl.js":[92,142],"./forth/forth.js":[93,143],"./fortran/fortran.js":[94,144],"./gas/gas.js":[95,145],"./gfm/gfm.js":[96,76,105],"./gherkin/gherkin.js":[97,146],"./go/go.js":[98,147],"./groovy/groovy.js":[99,148],"./haml/haml.js":[100,2,3,95],"./handlebars/handlebars.js":[57,101],"./haskell-literate/haskell-literate.js":[101,110],"./haskell/haskell.js":[58,149],"./haxe/haxe.js":[102,150],"./htmlembedded/htmlembedded.js":[103,2,3,91],"./htmlmixed/htmlmixed.js":[47,2,3,111],"./http/http.js":[104,151],"./idl/idl.js":[105,152],"./javascript/javascript.js":[49,2],"./jinja2/jinja2.js":[106,153],"./jsx/jsx.js":[107,2,112],"./julia/julia.js":[108,154],"./livescript/livescript.js":[109,155],"./lua/lua.js":[110,156],"./markdown/markdown.js":[63,76],"./mathematica/mathematica.js":[111,157],"./mbox/mbox.js":[112,158],"./meta.js":[53],"./mirc/mirc.js":[113,159],"./mllike/mllike.js":[114,160],"./modelica/modelica.js":[115,161],"./mscgen/mscgen.js":[116,162],"./mumps/mumps.js":[117,163],"./nginx/nginx.js":[118,164],"./nsis/nsis.js":[119,108],"./ntriples/ntriples.js":[120,165],"./octave/octave.js":[121,166],"./oz/oz.js":[122,167],"./pascal/pascal.js":[123,168],"./pegjs/pegjs.js":[124,2,169],"./perl/perl.js":[125,170],"./php/php.js":[126,2,3,9,102],"./pig/pig.js":[127,171],"./powershell/powershell.js":[128,172],"./properties/properties.js":[129,173],"./protobuf/protobuf.js":[130,174],"./pug/pug.js":[64,2,3,75],"./puppet/puppet.js":[131,175],"./python/python.js":[59,176],"./q/q.js":[132,177],"./r/r.js":[133,178],"./rpm/rpm.js":[134,179],"./rst/rst.js":[135,94],"./ruby/ruby.js":[51,180],"./rust/rust.js":[136,109],"./sas/sas.js":[137,181],"./sass/sass.js":[61,3,182],"./scheme/scheme.js":[138,183],"./shell/shell.js":[139,184],"./sieve/sieve.js":[140,185],"./slim/slim.js":[141,2,3,96],"./smalltalk/smalltalk.js":[142,186],"./smarty/smarty.js":[143,187],"./solr/solr.js":[144,188],"./soy/soy.js":[145,2,3,103],"./sparql/sparql.js":[146,189],"./spreadsheet/spreadsheet.js":[147,190],"./sql/sql.js":[148,191],"./stex/stex.js":[60,192],"./stylus/stylus.js":[65,77],"./swift/swift.js":[149,193],"./tcl/tcl.js":[150,194],"./textile/textile.js":[151,195],"./tiddlywiki/tiddlywiki.js":[152,196],"./tiki/tiki.js":[153,197],"./toml/toml.js":[154,198],"./tornado/tornado.js":[155,2,3,93],"./troff/troff.js":[156,199],"./ttcn-cfg/ttcn-cfg.js":[158,200],"./ttcn/ttcn.js":[157,201],"./turtle/turtle.js":[159,202],"./twig/twig.js":[160,104],"./vb/vb.js":[161,203],"./vbscript/vbscript.js":[162,204],"./velocity/velocity.js":[163,205],"./verilog/verilog.js":[164,206],"./vhdl/vhdl.js":[165,207],"./vue/vue.js":[166,2,3,77,75,88],"./webidl/webidl.js":[167,208],"./xml/xml.js":[46,209],"./xquery/xquery.js":[168,210],"./yacas/yacas.js":[169,211],"./yaml-frontmatter/yaml-frontmatter.js":[170,113],"./yaml/yaml.js":[62,212],"./z80/z80.js":[171,213]};function l(e){if(!t.o(n,e))return Promise.resolve().then((function(){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}));var a=n[e],l=a[0];return Promise.all(a.slice(1).map(t.e)).then((function(){return t.t(l,7)}))}l.keys=function(){return Object.keys(n)},l.id=67,e.exports=l},903:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return p}));var n=t(12),l=t(13),r=t(14),o=t(15),m=t(0),i=t.n(m),s=t(172),c=(t(54),t(39)),y=t(188),d=t.n(y),u=d.a.GraphObject.make,g={theme:"monokai",mode:"JSX",readOnly:!0},p=function(e){Object(o.a)(t,e);var a=Object(r.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.diagramRender1(),this.diagramRender2(),this.diagramRender3(),this.diagramRender4(),this.diagramRender5(),this.diagramRender6(),this.diagramRender7(),this.diagramRender8()}},{key:"diagramRender1",value:function(){var e=u(d.a.Diagram,"myDiagramDiv1");e.nodeTemplate=u(d.a.Node,"Auto",u(d.a.Shape,"RoundedRectangle",{fill:"lightblue"}),u(d.a.TextBlock,{margin:8},new d.a.Binding("text","key"))),e.layout=u(d.a.TreeLayout),e.model=u(d.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha"},{key:"Beta"},{key:"Gamma"},{key:"Delta"},{key:"Epsilon"},{key:"Zeta"},{key:"Omega"},{key:"Phi"},{key:"Kappa"}],linkDataArray:[{from:"Alpha",to:"Beta"},{from:"Alpha",to:"Gamma"},{from:"Delta",to:"Alpha"},{from:"Delta",to:"Epsilon"},{from:"Gamma",to:"Zeta"},{from:"Gamma",to:"Omega"},{from:"Epsilon",to:"Kappa"},{from:"Gamma",to:"Phi"}]})}},{key:"diagramRender2",value:function(){var e=u(d.a.Diagram,"myDiagramDiv2");e.nodeTemplate=u(d.a.Node,"Auto",u(d.a.Shape,"RoundedRectangle",{fill:"lightblue"}),u(d.a.TextBlock,{margin:8},new d.a.Binding("text","key"))),e.layout=u(d.a.TreeLayout,{angle:90}),e.model=u(d.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha"},{key:"Beta"},{key:"Gamma"},{key:"Delta"},{key:"Epsilon"},{key:"Zeta"},{key:"Omega"},{key:"Phi"},{key:"Kappa"}],linkDataArray:[{from:"Alpha",to:"Beta"},{from:"Alpha",to:"Gamma"},{from:"Delta",to:"Alpha"},{from:"Delta",to:"Epsilon"},{from:"Gamma",to:"Zeta"},{from:"Gamma",to:"Omega"},{from:"Epsilon",to:"Kappa"},{from:"Gamma",to:"Phi"}]})}},{key:"diagramRender3",value:function(){var e=u(d.a.Diagram,"myDiagramDiv3");e.nodeTemplate=u(d.a.Node,"Auto",u(d.a.Shape,"RoundedRectangle",{fill:"lightblue"}),u(d.a.TextBlock,{margin:8},new d.a.Binding("text","key"))),e.layout=u(d.a.TreeLayout,{angle:90,layerSpacing:20}),e.model=u(d.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha"},{key:"Beta"},{key:"Gamma"},{key:"Delta"},{key:"Epsilon"},{key:"Zeta"},{key:"Omega"},{key:"Phi"},{key:"Kappa"}],linkDataArray:[{from:"Alpha",to:"Beta"},{from:"Alpha",to:"Gamma"},{from:"Delta",to:"Alpha"},{from:"Delta",to:"Epsilon"},{from:"Gamma",to:"Zeta"},{from:"Gamma",to:"Omega"},{from:"Epsilon",to:"Kappa"},{from:"Gamma",to:"Phi"}]})}},{key:"diagramRender4",value:function(){var e=u(d.a.Diagram,"myDiagramDiv4");e.nodeTemplate=u(d.a.Node,"Auto",u(d.a.Shape,"RoundedRectangle",{fill:"lightblue"}),u(d.a.TextBlock,{margin:8},new d.a.Binding("text","key"))),e.layout=u(d.a.TreeLayout,{angle:90,layerSpacing:20,nodeSpacing:100}),e.model=u(d.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha"},{key:"Beta"},{key:"Gamma"},{key:"Delta"},{key:"Epsilon"},{key:"Zeta"},{key:"Omega"},{key:"Phi"},{key:"Kappa"}],linkDataArray:[{from:"Alpha",to:"Beta"},{from:"Alpha",to:"Gamma"},{from:"Delta",to:"Alpha"},{from:"Delta",to:"Epsilon"},{from:"Gamma",to:"Zeta"},{from:"Gamma",to:"Omega"},{from:"Epsilon",to:"Kappa"},{from:"Gamma",to:"Phi"}]})}},{key:"diagramRender5",value:function(){var e=u(d.a.Diagram,"myDiagramDiv5");e.nodeTemplate=u(d.a.Node,"Auto",u(d.a.Shape,"RoundedRectangle",{fill:"lightblue"}),u(d.a.TextBlock,{margin:8},new d.a.Binding("text","key"))),e.layout=u(d.a.TreeLayout,{angle:90,layerSpacing:20,nodeSpacing:100,alignment:d.a.TreeLayout.AlignmentStart}),e.model=u(d.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha"},{key:"Beta"},{key:"Gamma"},{key:"Delta"},{key:"Epsilon"},{key:"Zeta"},{key:"Omega"},{key:"Phi"},{key:"Kappa"}],linkDataArray:[{from:"Alpha",to:"Beta"},{from:"Alpha",to:"Gamma"},{from:"Delta",to:"Alpha"},{from:"Delta",to:"Epsilon"},{from:"Gamma",to:"Zeta"},{from:"Gamma",to:"Omega"},{from:"Epsilon",to:"Kappa"},{from:"Gamma",to:"Phi"}]})}},{key:"diagramRender6",value:function(){var e=u(d.a.Diagram,"myDiagramDiv6");e.nodeTemplate=u(d.a.Node,"Auto",u(d.a.Shape,"RoundedRectangle",{fill:"lightblue"}),u(d.a.TextBlock,{margin:8},new d.a.Binding("text","key"))),e.layout=u(d.a.TreeLayout,{angle:90,layerSpacing:20,nodeSpacing:100,alignment:d.a.TreeLayout.AlignmentStart,sorting:d.a.TreeLayout.SortingAscending,comparer:function(e,a){return e=e.node,a=a.node,e.data.key<a.data.key?-1:e.data.key>a.data.key?1:0}}),e.model=u(d.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha"},{key:"Beta"},{key:"Gamma"},{key:"Delta"},{key:"Epsilon"},{key:"Zeta"},{key:"Omega"},{key:"Phi"},{key:"Kappa"}],linkDataArray:[{from:"Alpha",to:"Beta"},{from:"Alpha",to:"Gamma"},{from:"Delta",to:"Alpha"},{from:"Delta",to:"Epsilon"},{from:"Gamma",to:"Zeta"},{from:"Gamma",to:"Omega"},{from:"Epsilon",to:"Kappa"},{from:"Gamma",to:"Phi"}]})}},{key:"diagramRender7",value:function(){var e=u(d.a.Diagram,"myDiagramDiv7");e.nodeTemplate=u(d.a.Node,"Auto",u(d.a.Shape,"RoundedRectangle",{fill:"lightblue"}),u(d.a.TextBlock,{margin:8},new d.a.Binding("text","key"))),e.layout=u(d.a.TreeLayout,{angle:90,layerSpacing:20,nodeSpacing:100,alignment:d.a.TreeLayout.AlignmentStart,sorting:d.a.TreeLayout.SortingAscending,comparer:function(e,a){return e=e.node,a=a.node,e.data.key<a.data.key?-1:e.data.key>a.data.key?1:0},treeStyle:d.a.TreeLayout.StyleRootOnly}),e.model=u(d.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha"},{key:"Beta"},{key:"Gamma"},{key:"Delta"},{key:"Epsilon"},{key:"Zeta"},{key:"Omega"},{key:"Phi"},{key:"Kappa"}],linkDataArray:[{from:"Alpha",to:"Beta"},{from:"Alpha",to:"Gamma"},{from:"Delta",to:"Alpha"},{from:"Delta",to:"Epsilon"},{from:"Gamma",to:"Zeta"},{from:"Gamma",to:"Omega"},{from:"Epsilon",to:"Kappa"},{from:"Gamma",to:"Phi"}]})}},{key:"diagramRender8",value:function(){var e=u(d.a.Diagram,"myDiagramDiv8");e.nodeTemplate=u(d.a.Node,"Auto",u(d.a.Shape,"RoundedRectangle",{fill:"lightblue"}),u(d.a.TextBlock,{margin:8},new d.a.Binding("text","key"))),e.layout=u(d.a.TreeLayout,{angle:90,layerSpacing:20,nodeSpacing:100,alignment:d.a.TreeLayout.AlignmentStart,sorting:d.a.TreeLayout.SortingAscending,comparer:function(e,a){return e=e.node,a=a.node,e.data.key<a.data.key?-1:e.data.key>a.data.key?1:0},treeStyle:d.a.TreeLayout.StyleRootOnly,alternateAngle:270}),e.model=u(d.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha"},{key:"Beta"},{key:"Gamma"},{key:"Delta"},{key:"Epsilon"},{key:"Zeta"},{key:"Omega"},{key:"Phi"},{key:"Kappa"}],linkDataArray:[{from:"Alpha",to:"Beta"},{from:"Alpha",to:"Gamma"},{from:"Delta",to:"Alpha"},{from:"Delta",to:"Epsilon"},{from:"Gamma",to:"Zeta"},{from:"Gamma",to:"Omega"},{from:"Epsilon",to:"Kappa"},{from:"Gamma",to:"Phi"}]})}},{key:"render",value:function(){return i.a.createElement("div",{className:"page-content"},i.a.createElement("div",{className:"article"},i.a.createElement("div",{className:"article-title"},i.a.createElement("h1",null,"GoJS \u5e03\u5c40\u2014\u2014\u7b2c\u4e09\u8282 \u6811\u5f62\u5e03\u5c40(TreeLayout)")),i.a.createElement("div",{className:"article-content"},i.a.createElement("h2",null,"\u793a\u4f8b"),i.a.createElement(s.a,{value:'let myDiagram = $(go.Diagram, "myDiagramDiv");\nmyDiagram.nodeTemplate =\n    $(go.Node, "Auto", \n        $(go.Shape, "RoundedRectangle", {\n            fill: "lightblue"\n        }),\n        $(go.TextBlock, {\n                margin: 8\n            },\n            new go.Binding("text", "key"))\n    );\nmyDiagram.layout = $(go.TreeLayout);\nmyDiagram.model =\n    $(go.GraphLinksModel, {\n        nodeDataArray: [{\n            key: "Alpha",\n        }, {\n            key: "Beta",\n        }, {\n            key: "Gamma"\n        }, {\n            key: "Delta"\n        }, {\n            key: "Epsilon"\n        }, {\n            key: "Zeta"\n        },{\n            key: "Omega"\n        },{\n            key: "Phi"\n        },{\n            key: "Kappa"\n        }, ],\n        linkDataArray: [\n            {from:"Alpha",to:"Beta"},\n            {from:"Alpha",to:"Gamma"},\n            {from:"Delta",to:"Alpha"},\n            {from:"Delta",to:"Epsilon"},\n            {from:"Gamma",to:"Zeta"},\n            {from:"Gamma",to:"Omega"},\n            {from:"Epsilon",to:"Kappa"},\n            {from:"Gamma",to:"Phi"},\n        ]\n    })',options:g}),i.a.createElement("div",{id:"myDiagramDiv1",className:"diagram",style:{maxWidth:600}}),i.a.createElement("h2",null,"angle"),i.a.createElement("ul",null,i.a.createElement("li",null,"\u51b3\u5b9a Tree \u5c55\u5f00\u7684\u65b9\u5411"),i.a.createElement("li",null,"\u9ed8\u8ba4\u503c:0"),i.a.createElement("li",null,"\u5141\u8bb8\u503c:0 | 90 | 180 | 270")),i.a.createElement(s.a,{value:"myDiagram.layout = $(go.TreeLayout, {\n    angle: 90\n});",options:g}),i.a.createElement("div",{id:"myDiagramDiv2",className:"diagram",style:{height:400,maxWidth:600}}),i.a.createElement("h2",null,"layerSpacing"),i.a.createElement("ul",null,i.a.createElement("li",null,"\u51b3\u5b9a\u7236/\u5b50 Node \u95f4\u7684\u8ddd\u79bb"),i.a.createElement("li",null,"\u9ed8\u8ba4\u503c:50")),i.a.createElement(s.a,{value:"myDiagram.layout = $(go.TreeLayout, {\n    angle: 90,\n    layerSpacing:20\n});",options:g}),i.a.createElement("div",{id:"myDiagramDiv3",className:"diagram",style:{maxWidth:600}}),i.a.createElement("h2",null,"nodeSpacing"),i.a.createElement("ul",null,i.a.createElement("li",null,"\u51b3\u5b9a\u5144\u5f1f Node \u95f4\u7684\u8ddd\u79bb"),i.a.createElement("li",null,"\u9ed8\u8ba4\u503c:20")),i.a.createElement(s.a,{value:"myDiagram.layout = $(go.TreeLayout, {\n    angle: 90,\n    layerSpacing:20,\n    nodeSpacing: 100\n});",options:g}),i.a.createElement("div",{id:"myDiagramDiv4",className:"diagram",style:{maxWidth:600}}),i.a.createElement("h2",null,"alignment"),i.a.createElement("ul",null,i.a.createElement("li",null,"\u51b3\u5b9a\u7236 Node \u76f8\u5bf9\u4e8e\u5176\u5b50 Node \u7684\u9ed8\u8ba4\u5bf9\u9f50\u65b9\u5f0f"),i.a.createElement("li",null,"\u9ed8\u8ba4\u503c:TreeLayout.AlinmentCenterChildrer"),i.a.createElement("li",null,"\u66f4\u591a\u53ef\u9009\u503c\u8bf7\u53c2\u8003 ",i.a.createElement("a",{href:"https://gojs.net/latest/api/symbols/TreeLayout.html",target:"_blank",rel:"noopener noreferrer"},"TreeLayout-alignment"))),i.a.createElement(s.a,{value:"myDiagram.layout = $(go.TreeLayout, {\n    angle: 90,\n    layerSpacing: 20,\n    nodeSpacing: 100,\n    alignment: go.TreeLayout.AlignmentStart\n});",options:g}),i.a.createElement("div",{id:"myDiagramDiv5",className:"diagram",style:{maxWidth:600}}),i.a.createElement("p",null,"TreeLayout.AlignmentStart \u5c06\u7236 Node \u5b9a\u4f4d\u5728\u7b2c\u4e00\u4e2a\u5b50 Node \u9644\u8fd1"),i.a.createElement("h2",null,"sorting"),i.a.createElement("ul",null,i.a.createElement("li",null,"\u51b3\u5b9a\u5b50 Node \u7684\u6392\u5e8f\u987a\u5e8f"),i.a.createElement("li",null,"\u9ed8\u8ba4\u503c:TreeLayout.SortingForwards"),i.a.createElement("li",null,"\u66f4\u591a\u53ef\u9009\u503c\u8bf7\u53c2\u8003 ",i.a.createElement("a",{href:"https://gojs.net/latest/api/symbols/TreeLayout.html",target:"_blank",rel:"noopener noreferrer"},"TreeLayout-sorting"))),i.a.createElement(s.a,{value:"myDiagram.layout = $(go.TreeLayout, {\n    angle: 90,\n    layerSpacing: 20,\n    nodeSpacing: 100,\n    alignment: go.TreeLayout.AlignmentStart,\n    sorting: go.TreeLayout.SortingAscending,\n    comparer: function (a, b) {\n        a = a.node;\n        b = b.node;\n        if (a.data.key < b.data.key) return -1;\n        if (a.data.key > b.data.key) return 1;\n        return 0;\n    }\n});",options:g}),i.a.createElement("div",{id:"myDiagramDiv6",className:"diagram",style:{maxWidth:600}}),i.a.createElement("h2",null,"treeStyle"),i.a.createElement("ul",null,i.a.createElement("li",null,"\u51b3\u5b9a\u54ea\u4e9b\u5b50 Tree \u53d7\u9ed8\u8ba4\u5c5e\u6027\u5f71\u54cd"),i.a.createElement("li",null,"\u9ed8\u8ba4\u503c:TreeLayout.StyleLayered"),i.a.createElement("li",null,"\u66f4\u591a\u53ef\u9009\u503c\u8bf7\u53c2\u8003 ",i.a.createElement("a",{href:"https://gojs.net/latest/api/symbols/TreeLayout.html",target:"_blank",rel:"noopener noreferrer"},"TreeLayout-treeStyle"))),i.a.createElement(s.a,{value:"myDiagram.layout = $(go.TreeLayout, {\n    angle: 90,\n    layerSpacing: 20,\n    nodeSpacing: 100,\n    alignment: go.TreeLayout.AlignmentStart,\n    sorting: go.TreeLayout.SortingAscending,\n    comparer: function (a, b) {\n        a = a.node;\n        b = b.node;\n        if (a.data.key < b.data.key) return -1;\n        if (a.data.key > b.data.key) return 1;\n        return 0;\n    },\n    treeStyle:go.TreeLayout.StyleRootOnly\n});",options:g}),i.a.createElement("div",{id:"myDiagramDiv7",className:"diagram",style:{maxWidth:600}}),i.a.createElement("h2",null,"alternateAngle"),i.a.createElement("ul",null,i.a.createElement("li",null,"alternate","<Style>","\u51b3\u5b9a\u54ea\u4e9b\u5b50 Tree \u53d7 alternate \u5c5e\u6027\u5f71\u54cd"),i.a.createElement("li",null,"alternateAngle \u51b3\u5b9a\u9664 treeStyle \u89c4\u5b9a\u5916\u7684\u5b50 Tree \u7684\u5c55\u5f00\u65b9\u5411"),i.a.createElement("li",null,"\u9ed8\u8ba4\u503c:TreeLayout.StyleLayered"),i.a.createElement("li",null,"\u66f4\u591a\u53ef\u9009\u503c\u8bf7\u53c2\u8003 ",i.a.createElement("a",{href:"https://gojs.net/latest/api/symbols/TreeLayout.html",target:"_blank",rel:"noopener noreferrer"},"TreeLayout-alternateAngle"))),i.a.createElement("div",{className:"tip"},i.a.createElement("div",{className:"tip-content"},i.a.createElement("em",null,'\u4e0a\u9762\u7684 treeStyle \u8bbe\u7f6e\u4e3a TreeLayout.StyleRootOnly,\u5219"alternate"\u5b50\u6811\u4e3a\u9664 root \u8282\u70b9\u5916\u7684\u5b50\u6811'))),i.a.createElement(s.a,{value:"myDiagram.layout = $(go.TreeLayout, {\n    angle: 90,\n    layerSpacing: 20,\n    nodeSpacing: 100,\n    alignment: go.TreeLayout.AlignmentStart,\n    sorting: go.TreeLayout.SortingAscending,\n    comparer: function (a, b) {\n        a = a.node;\n        b = b.node;\n        if (a.data.key < b.data.key) return -1;\n        if (a.data.key > b.data.key) return 1;\n        return 0;\n    },\n    treeStyle: go.TreeLayout.StyleRootOnly,\n    alternateAngle: 270\n});",options:g}),i.a.createElement("div",{id:"myDiagramDiv8",className:"diagram",style:{maxWidth:600}}),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("p",null,"\u76f8\u5173\u4ee3\u7801\uff1a"),i.a.createElement("p",null,i.a.createElement("a",{href:"https://github.com/LiuZheAb/GoJS_Demo/blob/master/09treeLayout.html",target:"_blank",rel:"noopener noreferrer"},"https://github.com/LiuZheAb/GoJS_Demo/blob/master/09treeLayout.html")))),i.a.createElement(c.a,null))}}]),t}(m.Component)}}]);
//# sourceMappingURL=35.e6a02d49.chunk.js.map