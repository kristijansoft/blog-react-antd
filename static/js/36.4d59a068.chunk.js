(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[36],{39:function(e,a,t){"use strict";var l=t(12),n=t(13),r=t(17),o=t(14),i=t(15),s=t(0),m=t.n(s),c=t(5),d=t(8),u=(t(40),function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).bindHandleScroll=function(e){var a=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);n.setState({scrollTop:a})},n.scrollToAnchor=function(e){if(e){var a=document.getElementById(e);a&&a.scrollIntoView({block:"start",behavior:"smooth"})}},n.state={articleTree:[],scrollTop:null},n.getArticleTree=n.getArticleTree.bind(Object(r.a)(n)),n}return Object(n.a)(t,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,a=[],t=0,l=e.length;t<l-1;t++){var n=e[t].nodeName;"H2"!==n&&"H3"!==n||(e[t].id=e[t].innerText,a.push({name:e[t].innerText,tag:e[t].nodeName}))}this.setState({articleTree:a})}},{key:"setTitle",value:function(){for(var e=this.props.location.pathname.split("/").filter((function(e){return e})),a=0,t=d.a.length;a<t;a++)e[0]===d.a[a].name&&(document.getElementsByTagName("h1")[0].innerHTML=d.a[a].section.length>0?d.a[a].section[e[e.length-1]]:d.a[a].title)}},{key:"componentDidMount",value:function(){this.getArticleTree(),this.setTitle();var e=document.getElementById("header"),a=window.scrollY,t=document.getElementsByClassName("directory-list")[0],l=t.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var n=document.getElementsByClassName("page-footer")[0],r=0;n;)r+=n.offsetTop,n=n.offsetParent;var o=document.body.scrollTop||document.documentElement.scrollTop;if((o+=l+t.offsetHeight)>r+e.offsetHeight)t.style="position:fixed;top:".concat(l-o+r,"px;transition:none");else{var i=window.scrollY;i>e.offsetHeight&&(a<i&&(e.className="ant-layout-header header header-affixed",t.className="directory-list directory-affixed",a=i),a>i&&(e.className="ant-layout-header header header-visible",t.className="directory-list",a=i)),t.style=""}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll)}},{key:"render",value:function(){var e=this,a=this.state,t=a.articleTree,l=a.scrollTop,n=t.length;if(document.getElementById("tree-num-0")&&n>0){for(var r=[],o=0;o<n;o++){var i=document.getElementById(t[o].name);r.push(i.offsetTop)}for(var s=r.findIndex((function(e){return e>l}))-1,c=0;c<n;c++)document.getElementById("tree-num-".concat(c)).className=c===s?"tree-num directory-item-active":"tree-num";-2===s&&(document.getElementById("tree-num-".concat(n-1)).className="tree-num directory-item-active")}return m.a.createElement("div",{className:"directory"},m.a.createElement("ul",{className:"directory-list"},t.map((function(a,t){return m.a.createElement("li",{key:t,id:"tree-num-".concat(t),className:"tree-num",title:a.name,style:{paddingLeft:"H2"===a.tag?10:22},onClick:function(){e.scrollToAnchor("".concat(a.name))}},a.name)}))))}}]),t}(s.Component));a.a=Object(c.f)(u)},40:function(e,a,t){},67:function(e,a,t){var l={"./apl/apl.js":[68,120],"./asciiarmor/asciiarmor.js":[69,121],"./asn.1/asn.1.js":[70,122],"./asterisk/asterisk.js":[71,123],"./brainfuck/brainfuck.js":[72,124],"./clike/clike.js":[55,9],"./clojure/clojure.js":[73,125],"./cmake/cmake.js":[74,126],"./cobol/cobol.js":[75,127],"./coffeescript/coffeescript.js":[56,128],"./commonlisp/commonlisp.js":[76,129],"./crystal/crystal.js":[77,130],"./css/css.js":[48,3],"./cypher/cypher.js":[78,131],"./d/d.js":[79,132],"./dart/dart.js":[80,9,133],"./diff/diff.js":[81,134],"./django/django.js":[82,2,3,92],"./dockerfile/dockerfile.js":[83,106],"./dtd/dtd.js":[84,135],"./dylan/dylan.js":[85,136],"./ebnf/ebnf.js":[86,137],"./ecl/ecl.js":[87,138],"./eiffel/eiffel.js":[88,139],"./elm/elm.js":[89,140],"./erlang/erlang.js":[90,141],"./factor/factor.js":[91,107],"./fcl/fcl.js":[92,142],"./forth/forth.js":[93,143],"./fortran/fortran.js":[94,144],"./gas/gas.js":[95,145],"./gfm/gfm.js":[96,76,105],"./gherkin/gherkin.js":[97,146],"./go/go.js":[98,147],"./groovy/groovy.js":[99,148],"./haml/haml.js":[100,2,3,95],"./handlebars/handlebars.js":[57,101],"./haskell-literate/haskell-literate.js":[101,110],"./haskell/haskell.js":[58,149],"./haxe/haxe.js":[102,150],"./htmlembedded/htmlembedded.js":[103,2,3,91],"./htmlmixed/htmlmixed.js":[47,2,3,111],"./http/http.js":[104,151],"./idl/idl.js":[105,152],"./javascript/javascript.js":[49,2],"./jinja2/jinja2.js":[106,153],"./jsx/jsx.js":[107,2,112],"./julia/julia.js":[108,154],"./livescript/livescript.js":[109,155],"./lua/lua.js":[110,156],"./markdown/markdown.js":[63,76],"./mathematica/mathematica.js":[111,157],"./mbox/mbox.js":[112,158],"./meta.js":[53],"./mirc/mirc.js":[113,159],"./mllike/mllike.js":[114,160],"./modelica/modelica.js":[115,161],"./mscgen/mscgen.js":[116,162],"./mumps/mumps.js":[117,163],"./nginx/nginx.js":[118,164],"./nsis/nsis.js":[119,108],"./ntriples/ntriples.js":[120,165],"./octave/octave.js":[121,166],"./oz/oz.js":[122,167],"./pascal/pascal.js":[123,168],"./pegjs/pegjs.js":[124,2,169],"./perl/perl.js":[125,170],"./php/php.js":[126,2,3,9,102],"./pig/pig.js":[127,171],"./powershell/powershell.js":[128,172],"./properties/properties.js":[129,173],"./protobuf/protobuf.js":[130,174],"./pug/pug.js":[64,2,3,75],"./puppet/puppet.js":[131,175],"./python/python.js":[59,176],"./q/q.js":[132,177],"./r/r.js":[133,178],"./rpm/rpm.js":[134,179],"./rst/rst.js":[135,94],"./ruby/ruby.js":[51,180],"./rust/rust.js":[136,109],"./sas/sas.js":[137,181],"./sass/sass.js":[61,3,182],"./scheme/scheme.js":[138,183],"./shell/shell.js":[139,184],"./sieve/sieve.js":[140,185],"./slim/slim.js":[141,2,3,96],"./smalltalk/smalltalk.js":[142,186],"./smarty/smarty.js":[143,187],"./solr/solr.js":[144,188],"./soy/soy.js":[145,2,3,103],"./sparql/sparql.js":[146,189],"./spreadsheet/spreadsheet.js":[147,190],"./sql/sql.js":[148,191],"./stex/stex.js":[60,192],"./stylus/stylus.js":[65,77],"./swift/swift.js":[149,193],"./tcl/tcl.js":[150,194],"./textile/textile.js":[151,195],"./tiddlywiki/tiddlywiki.js":[152,196],"./tiki/tiki.js":[153,197],"./toml/toml.js":[154,198],"./tornado/tornado.js":[155,2,3,93],"./troff/troff.js":[156,199],"./ttcn-cfg/ttcn-cfg.js":[158,200],"./ttcn/ttcn.js":[157,201],"./turtle/turtle.js":[159,202],"./twig/twig.js":[160,104],"./vb/vb.js":[161,203],"./vbscript/vbscript.js":[162,204],"./velocity/velocity.js":[163,205],"./verilog/verilog.js":[164,206],"./vhdl/vhdl.js":[165,207],"./vue/vue.js":[166,2,3,77,75,88],"./webidl/webidl.js":[167,208],"./xml/xml.js":[46,209],"./xquery/xquery.js":[168,210],"./yacas/yacas.js":[169,211],"./yaml-frontmatter/yaml-frontmatter.js":[170,113],"./yaml/yaml.js":[62,212],"./z80/z80.js":[171,213]};function n(e){if(!t.o(l,e))return Promise.resolve().then((function(){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}));var a=l[e],n=a[0];return Promise.all(a.slice(1).map(t.e)).then((function(){return t.t(n,7)}))}n.keys=function(){return Object.keys(l)},n.id=67,e.exports=n},904:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return p}));var l=t(12),n=t(13),r=t(14),o=t(15),i=t(0),s=t.n(i),m=t(172),c=(t(54),t(39)),d=t(188),u=t.n(d),h=u.a.GraphObject.make,f={theme:"monokai",mode:"JSX",readOnly:!0},p=function(e){Object(o.a)(i,e);var a=Object(r.a)(i);function i(){return Object(l.a)(this,i),a.apply(this,arguments)}return Object(n.a)(i,[{key:"componentDidMount",value:function(){this.diagramRender1(),this.diagramRender2(),this.diagramRender3(),this.diagramRender4(),this.diagramRender5()}},{key:"diagramRender1",value:function(){var e=h(u.a.Diagram,"myDiagramDiv1");e.nodeTemplate=h(u.a.Node,"Auto",h(u.a.Shape,"RoundedRectangle",{fill:"lightblue"}),h(u.a.TextBlock,{margin:8},new u.a.Binding("text","key"))),e.layout=h(u.a.ForceDirectedLayout),e.model=h(u.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha"},{key:"Beta"},{key:"Gamma"},{key:"Delta"},{key:"Epsilon"},{key:"Zeta"},{key:"Omega"},{key:"Phi"},{key:"Kappa"}],linkDataArray:[{from:"Alpha",to:"Beta"},{from:"Alpha",to:"Gamma"},{from:"Alpha",to:"Delta"},{from:"Alpha",to:"Epsilon"},{from:"Alpha",to:"Zeta"},{from:"Alpha",to:"Omega"},{from:"Alpha",to:"Phi"},{from:"Alpha",to:"Kappa"}]})}},{key:"diagramRender2",value:function(){var e=h(u.a.Diagram,"myDiagramDiv2");e.nodeTemplate=h(u.a.Node,"Auto",h(u.a.Shape,"RoundedRectangle",{fill:"lightblue"}),h(u.a.TextBlock,{margin:8},new u.a.Binding("text","key"))),e.layout=h(u.a.ForceDirectedLayout,{defaultElectricalCharge:300}),e.model=h(u.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha"},{key:"Beta"},{key:"Gamma"}],linkDataArray:[{from:"Alpha",to:"Beta"},{from:"Alpha",to:"Gamma"}]})}},{key:"diagramRender3",value:function(){var e=h(u.a.Diagram,"myDiagramDiv3");e.nodeTemplate=h(u.a.Node,"Auto",h(u.a.Shape,"RoundedRectangle",{fill:"lightblue"}),h(u.a.TextBlock,{margin:8},new u.a.Binding("text","key"))),e.layout=h(u.a.ForceDirectedLayout,{defaultElectricalCharge:300,defaultSpringLength:100}),e.model=h(u.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha"},{key:"Beta"},{key:"Gamma"}],linkDataArray:[{from:"Alpha",to:"Beta"},{from:"Alpha",to:"Gamma"}]})}},{key:"diagramRender4",value:function(){var e=h(u.a.Diagram,"myDiagramDiv4");e.nodeTemplate=h(u.a.Node,"Auto",h(u.a.Shape,"RoundedRectangle",{fill:"lightblue"}),h(u.a.TextBlock,{margin:8},new u.a.Binding("text","key"))),e.layout=h(u.a.ForceDirectedLayout,{defaultElectricalCharge:300,defaultSpringLength:100,defaultSpringStiffness:.2}),e.model=h(u.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha"},{key:"Beta"},{key:"Gamma"}],linkDataArray:[{from:"Alpha",to:"Beta"},{from:"Alpha",to:"Gamma"}]})}},{key:"diagramRender5",value:function(){var e=h(u.a.Diagram,"myDiagramDiv5");e.nodeTemplate=h(u.a.Node,"Auto",h(u.a.Shape,"RoundedRectangle",{fill:"lightblue"}),h(u.a.TextBlock,{margin:8},new u.a.Binding("text","key"))),e.layout=h(u.a.ForceDirectedLayout,{defaultElectricalCharge:300,defaultSpringLength:200,defaultSpringStiffness:.2,defaultGravitationalMass:0,isFixed:function(e){var a=e.node;return!!a&&"Beta"===a.data.key}}),e.model=h(u.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha"},{key:"Beta"},{key:"Gamma"}],linkDataArray:[{from:"Alpha",to:"Beta"},{from:"Alpha",to:"Gamma"}]})}},{key:"render",value:function(){return s.a.createElement("div",{className:"page-content"},s.a.createElement("div",{className:"article"},s.a.createElement("div",{className:"article-title"},s.a.createElement("h1",null,"GoJS \u5e03\u5c40\u2014\u2014\u7b2c\u56db\u8282 \u529b\u5bfc\u5411\u5e03\u5c40(ForceDirectedLayout)")),s.a.createElement("div",{className:"article-content"},s.a.createElement("h2",null,"\u793a\u4f8b"),s.a.createElement(m.a,{value:'let myDiagram = $(go.Diagram, "myDiagramDiv");\nmyDiagram.nodeTemplate =\n    $(go.Node, "Auto",\n        $(go.Shape, "RoundedRectangle", {\n            fill: "lightblue"\n        }),\n        $(go.TextBlock, {\n            margin: 8\n        },\n            new go.Binding("text", "key"))\n    );\nmyDiagram.layout = $(go.ForceDirectedLayout);\nmyDiagram.model =\n    $(go.GraphLinksModel, {\n        nodeDataArray: [{\n            key: "Alpha",\n        }, {\n            key: "Beta",\n        }, {\n            key: "Gamma"\n        }, {\n            key: "Delta"\n        }, {\n            key: "Epsilon"\n        }, {\n            key: "Zeta"\n        }, {\n            key: "Omega"\n        }, {\n            key: "Phi"\n        }, {\n            key: "Kappa"\n        },],\n        linkDataArray: [{\n            from: "Alpha",\n            to: "Beta"\n        }, {\n            from: "Alpha",\n            to: "Gamma"\n        }, {\n            from: "Alpha",\n            to: "Delta"\n        }, {\n            from: "Alpha",\n            to: "Epsilon"\n        }, {\n            from: "Alpha",\n            to: "Zeta"\n        }, {\n            from: "Alpha",\n            to: "Omega"\n        }, {\n            from: "Alpha",\n            to: "Phi"\n        }, {\n            from: "Alpha",\n            to: "Kappa"\n        }]\n    })',options:f}),s.a.createElement("div",{id:"myDiagramDiv1",className:"diagram",style:{height:500,maxWidth:600}}),s.a.createElement("h2",null,"\u7b80\u4ecb"),s.a.createElement("p",null,"\u529b\u5bfc\u5411\u5e03\u5c40\u7b97\u6cd5\u662f\u4e00\u7c7b\u7ed8\u56fe\u7b97\u6cd5\uff0c\u5b83\u4ec5\u4ec5\u57fa\u4e8e\u56fe\u7684\u7ed3\u6784\u672c\u8eab\u6765\u7ed8\u56fe\uff0c\u800c\u4e0d\u4f9d\u8d56\u4e8e\u4e0a\u4e0b\u6587\u4fe1\u606f\u3002"),s.a.createElement("p",null,"GoJS ForceDirected Layout \u6709\u4e09\u79cd"),s.a.createElement("ul",null,s.a.createElement("li",null,"\u7535\u573a\u65a5\u529b"),s.a.createElement("li",null,"\u5f15\u529b"),s.a.createElement("li",null,"\u5f39\u7c27\u529b")),s.a.createElement("h2",null,"\u7535\u573a\u65a5\u529b"),s.a.createElement("p",null,"\u628a\u6bcf\u4e2a Node \u770b\u505a\u4e00\u4e2a\u7535\u8377,\u7535\u8377\u4e0e\u7535\u8377\u4e4b\u95f4\u5b58\u5728\u65a5\u529b,\u4e5f\u5c31\u662f\u5e93\u4ed1\u529b,\u6839\u636e\u5e93\u4ed1\u5b9a\u5f8b(Coulomb's law),\u7535\u8377\u4e4b\u95f4\u7684\u65a5\u529b\u53ef\u4ee5\u8fd9\u4e48\u8ba1\u7b97:"),s.a.createElement("div",{className:"text-center"},s.a.createElement("img",{src:t(502),alt:""})),s.a.createElement("p",{className:"text-center"},"Coulomb's law"),s.a.createElement("ul",null,s.a.createElement("li",null,"k \u4e3a\u5e93\u4ed1\u5e38\u6570(\u9759\u7535\u529b\u5e38\u91cf)"),s.a.createElement("li",null,"q \u4e3a\u7535\u8377\u5e26\u7535\u91cf"),s.a.createElement("li",null,"r \u4e3a\u7535\u8377\u95f4\u8ddd")),s.a.createElement("h3",null,"defaultElectricalCharge"),s.a.createElement("ul",null,s.a.createElement("li",null,"\u51b3\u5b9a Node \u95f4\u7684\u8ddd\u79bb\uff0c\u5373 r"),s.a.createElement("li",null,"\u9ed8\u8ba4\u503c\uff1a150")),s.a.createElement(m.a,{value:"myDiagram.layout = $(go.ForceDirectedLayout, {\n     defaultElectricalCharge: 300,\n     }\n});",options:f}),s.a.createElement("div",{id:"myDiagramDiv2",className:"diagram",style:{height:500,maxWidth:600}}),s.a.createElement("h2",null,"\u5f15\u529b"),s.a.createElement("h3",null,"defaultGravitationalMass "),s.a.createElement("ul",null,s.a.createElement("li",null,"\u51b3\u5b9a Node \u95f4\u7684\u5f15\u529b\u7cfb\u6570"),s.a.createElement("li",null,"\u9ed8\u8ba4\u503c\uff1a0")),s.a.createElement("h2",null,"\u5f39\u7c27\u529b"),s.a.createElement("h3",null,"defaultSpringLength"),s.a.createElement("ul",null,s.a.createElement("li",null,"\u51b3\u5b9a Node \u95f4\u5f39\u7c27\u7684\u957f\u5ea6"),s.a.createElement("li",null,"\u9ed8\u8ba4\u503c\uff1a50")),s.a.createElement(m.a,{value:"myDiagram.layout = $(go.ForceDirectedLayout, {\n    defaultElectricalCharge: 300,\n    defaultSpringLength: 100\n    }\n});",options:f}),s.a.createElement("div",{id:"myDiagramDiv3",className:"diagram",style:{height:500,maxWidth:600}}),s.a.createElement("h3",null,"defaultSpringStiffness"),s.a.createElement("ul",null,s.a.createElement("li",null,"\u51b3\u5b9a Node \u95f4\u5f39\u7c27\u7684\u521a\u5ea6"),s.a.createElement("li",null,"\u9ed8\u8ba4\u503c\uff1a0.05")),s.a.createElement(m.a,{value:"myDiagram.layout = $(go.ForceDirectedLayout, {\n    defaultElectricalCharge: 300,\n    defaultSpringLength: 100,\n    defaultSpringStiffness: 0.2,\n    }\n});",options:f}),s.a.createElement("div",{id:"myDiagramDiv4",className:"diagram",style:{height:500,maxWidth:600}}),s.a.createElement("h2",null,"isFixed"),s.a.createElement("ul",null,s.a.createElement("li",null,"\u4e3a true \u65f6 Node \u4e0d\u4f1a\u88ab Layout \u5f71\u54cd\uff0c\u4f46\u4ecd\u7136\u5bf9\u9644\u8fd1\u548c\u8fde\u63a5\u7684 Node \u6709\u5f71\u54cd\u3002\u5373 Node \u81ea\u8eab\u88ab\u56fa\u5b9a")),s.a.createElement(m.a,{value:'myDiagram.layout = $(go.ForceDirectedLayout, {\n    defaultElectricalCharge: 300,\n    defaultSpringLength: 200,\n    defaultSpringStiffness: 0.2,\n    defaultGravitationalMass:0,\n    isFixed: function (v) {\n        let node = v.node;\n        if (!node) return false;\n        else return node.data.key === "Beta";\n    }\n});',options:f}),s.a.createElement("div",{id:"myDiagramDiv5",className:"diagram",style:{height:500,maxWidth:600}}),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("p",null,"\u76f8\u5173\u4ee3\u7801\uff1a"),s.a.createElement("p",null,s.a.createElement("a",{href:"https://github.com/LiuZheAb/GoJS_Demo/blob/master/10forceDirectedLayout.html",target:"_blank",rel:"noopener noreferrer"},"https://github.com/LiuZheAb/GoJS_Demo/blob/master/10forceDirectedLayout.html")))),s.a.createElement(c.a,null))}}]),i}(i.Component)}}]);
//# sourceMappingURL=36.4d59a068.chunk.js.map