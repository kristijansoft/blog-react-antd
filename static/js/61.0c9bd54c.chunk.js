(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[61],{39:function(e,t,n){"use strict";var a=n(12),l=n(13),c=n(17),r=n(14),o=n(15),i=n(0),s=n.n(i),m=n(5),d=n(8),u=(n(40),function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(e){var l;return Object(a.a)(this,n),(l=t.call(this,e)).bindHandleScroll=function(e){var t=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);l.setState({scrollTop:t})},l.scrollToAnchor=function(e){if(e){var t=document.getElementById(e);t&&t.scrollIntoView({block:"start",behavior:"smooth"})}},l.state={articleTree:[],scrollTop:null},l.getArticleTree=l.getArticleTree.bind(Object(c.a)(l)),l}return Object(l.a)(n,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,t=[],n=0,a=e.length;n<a-1;n++){var l=e[n].nodeName;"H2"!==l&&"H3"!==l||(e[n].id=e[n].innerText,t.push({name:e[n].innerText,tag:e[n].nodeName}))}this.setState({articleTree:t})}},{key:"setTitle",value:function(){for(var e=this.props.location.pathname.split("/").filter((function(e){return e})),t=0,n=d.a.length;t<n;t++)e[0]===d.a[t].name&&(document.getElementsByTagName("h1")[0].innerHTML=d.a[t].section.length>0?d.a[t].section[e[e.length-1]]:d.a[t].title)}},{key:"componentDidMount",value:function(){this.getArticleTree(),this.setTitle();var e=document.getElementById("header"),t=window.scrollY,n=document.getElementsByClassName("directory-list")[0],a=n.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var l=document.getElementsByClassName("page-footer")[0],c=0;l;)c+=l.offsetTop,l=l.offsetParent;var r=document.body.scrollTop||document.documentElement.scrollTop;if((r+=a+n.offsetHeight)>c+e.offsetHeight)n.style="position:fixed;top:".concat(a-r+c,"px;transition:none");else{var o=window.scrollY;o>e.offsetHeight&&(t<o&&(e.className="ant-layout-header header header-affixed",n.className="directory-list directory-affixed",t=o),t>o&&(e.className="ant-layout-header header header-visible",n.className="directory-list",t=o)),n.style=""}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll)}},{key:"render",value:function(){var e=this,t=this.state,n=t.articleTree,a=t.scrollTop,l=n.length;if(document.getElementById("tree-num-0")&&l>0){for(var c=[],r=0;r<l;r++){var o=document.getElementById(n[r].name);c.push(o.offsetTop)}for(var i=c.findIndex((function(e){return e>a}))-1,m=0;m<l;m++)document.getElementById("tree-num-".concat(m)).className=m===i?"tree-num directory-item-active":"tree-num";-2===i&&(document.getElementById("tree-num-".concat(l-1)).className="tree-num directory-item-active")}return s.a.createElement("div",{className:"directory"},s.a.createElement("ul",{className:"directory-list"},n.map((function(t,n){return s.a.createElement("li",{key:n,id:"tree-num-".concat(n),className:"tree-num",title:t.name,style:{paddingLeft:"H2"===t.tag?10:22},onClick:function(){e.scrollToAnchor("".concat(t.name))}},t.name)}))))}}]),n}(i.Component));t.a=Object(m.f)(u)},40:function(e,t,n){},864:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var a=n(12),l=n(13),c=n(14),r=n(15),o=n(0),i=n.n(o),s=n(39),m=n(16),d=function(e){Object(r.a)(n,e);var t=Object(c.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"page-content"},i.a.createElement("div",{className:"article"},i.a.createElement("div",{className:"article-title"},i.a.createElement("h1",null,"\u5728\u8bc4\u5ba1\u4e2d\u5982\u4f55\u67e5\u770b CL")),i.a.createElement("div",{className:"article-content"},i.a.createElement("h2",null,"\u603b\u7ed3"),i.a.createElement("p",{className:"indent-2"},"\u65e2\u7136\u60a8\u77e5\u9053\u8981",i.a.createElement(m.b,{to:"/codereview/2"},"\u67e5\u770b\u4ec0\u4e48"),"\uff0c\u90a3\u4e48\u7ba1\u7406\u8de8\u591a\u4e2a\u6587\u4ef6\u7684\u8bc4\u5ba1\u7684\u6700\u6709\u6548\u65b9\u6cd5\u662f\u4ec0\u4e48?"),i.a.createElement("ol",{style:{paddingLeft:"2em"}},i.a.createElement("li",null,"\u8fd9\u79cd\u53d8\u5316\u6709\u610f\u4e49\u5417?",i.a.createElement(m.b,{to:"/codereview/7"},"\u63cf\u8ff0"),"\u5f97\u597d\u5417?"),i.a.createElement("li",null,"\u9996\u5148\u770b\u770b\u53d8\u5316\u4e2d\u6700\u91cd\u8981\u7684\u90e8\u5206\u3002\u6574\u4f53\u8bbe\u8ba1\u597d\u5417?"),i.a.createElement("li",null,"\u6309\u7167\u9002\u5f53\u7684\u987a\u5e8f\u67e5\u770b CL \u7684\u5176\u4f59\u90e8\u5206\u3002")),i.a.createElement("h2",null,"\u7b2c\u4e00\u6b65:\u4ece\u66f4\u5e7f\u6cdb\u7684\u89d2\u5ea6\u770b\u5f85\u66f4\u6539"),i.a.createElement("p",{className:"indent-2"},"\u770b\u770b",i.a.createElement(m.b,{to:"/codereview/7"}," CL \u7684\u63cf\u8ff0"),"\uff0c\u4ee5\u53ca CL \u901a\u5e38\u505a\u4ec0\u4e48\u3002\u8fd9\u79cd\u53d8\u5316\u6709\u610f\u4e49\u5417?\u5982\u679c\u8fd9\u4e2a\u53d8\u66f4\u4e00\u5f00\u59cb\u5c31\u4e0d\u5e94\u8be5\u53d1\u751f\uff0c\u8bf7\u7acb\u5373\u56de\u590d\u5e76\u89e3\u91ca\u4e3a\u4ec0\u4e48\u4e0d\u5e94\u8be5\u53d1\u751f\u53d8\u66f4\u3002\u5f53\u60a8\u62d2\u7edd\u8fd9\u6837\u7684\u53d8\u66f4\u65f6\uff0c\u5411\u5f00\u53d1\u4eba\u5458\u5efa\u8bae\u4ed6\u4eec\u5e94\u8be5\u505a\u4ec0\u4e48\u4e5f\u662f\u4e00\u4e2a\u597d\u4e3b\u610f\u3002"),i.a.createElement("p",{className:"indent-2"},"\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u8bf4\u201c\u770b\u8d77\u6765\u4f60\u5728\u8fd9\u65b9\u9762\u505a\u5f97\u4e0d\u9519\uff0c\u8c22\u8c22!\u201d\u4e0d\u8fc7\uff0c\u6211\u4eec\u5b9e\u9645\u4e0a\u662f\u5728\u5220\u9664\u8fd9\u91cc\u4fee\u6539\u7684 FooWidget \u7cfb\u7edf\uff0c\u6240\u4ee5\u6211\u4eec\u73b0\u5728\u4e0d\u60f3\u5bf9\u5b83\u505a\u4efb\u4f55\u65b0\u7684\u4fee\u6539\u3002\u4e0d\u5982\u91cd\u6784\u6211\u4eec\u7684\u65b0 BarWidget \u7c7b?\u201d"),i.a.createElement("p",{className:"indent-2"},"\u6ce8\u610f\uff0c\u8bc4\u5ba1\u4eba\u5458\u4e0d\u4ec5\u62d2\u7edd\u4e86\u5f53\u524d\u7684 CL \u5e76\u63d0\u4f9b\u4e86\u4e00\u4e2a\u66ff\u4ee3\u7684\u5efa\u8bae\uff0c\u800c\u4e14\u4ed6\u4eec\u505a\u5f97\u5f88\u6709\u793c\u8c8c\u3002\u8fd9\u79cd\u793c\u8c8c\u662f\u5f88\u91cd\u8981\u7684\uff0c\u56e0\u4e3a\u6211\u4eec\u60f3\u8981\u8868\u73b0\u51fa\u6211\u4eec\u4f5c\u4e3a\u5f00\u53d1\u4eba\u5458\u5f7c\u6b64\u5c0a\u91cd\uff0c\u5373\u4f7f\u6211\u4eec\u610f\u89c1\u4e0d\u4e00\u81f4\u3002"),i.a.createElement("p",{className:"indent-2"},"\u5982\u679c\u60a8\u5f97\u5230\u4e86\u591a\u4e2a\u8868\u793a\u4e0d\u5e0c\u671b\u8fdb\u884c\u66f4\u6539\u7684 CL \uff0c\u90a3\u4e48\u60a8\u5e94\u8be5\u8003\u8651\u91cd\u65b0\u5904\u7406\u56e2\u961f\u7684\u5f00\u53d1\u6d41\u7a0b\u6216\u5916\u90e8\u8d21\u732e\u8005\u53d1\u5e03\u7684\u6d41\u7a0b\uff0c\u4ee5\u4fbf\u5728\u7f16\u5199 CL \u4e4b\u524d\u6709\u66f4\u591a\u7684\u6c9f\u901a\u3002\u6700\u597d\u5728\u4eba\u4eec\u5b8c\u6210\u5927\u91cf\u5de5\u4f5c\u4e4b\u524d\u5c31\u8bf4\u201c\u4e0d\u201d\uff0c\u8fd9\u4e9b\u5de5\u4f5c\u73b0\u5728\u5fc5\u987b\u6254\u6389\u6216\u5f7b\u5e95\u91cd\u5199\u3002"),i.a.createElement("h2",null,"\u7b2c\u4e8c\u6b65:\u68c0\u67e5 CL \u7684\u4e3b\u8981\u90e8\u5206"),i.a.createElement("p",{className:"indent-2"},"\u67e5\u627e\u4e00\u4e2a\u6216\u591a\u4e2a\u6587\u4ef6\uff0c\u8fd9\u4e9b\u6587\u4ef6\u662f\u8fd9\u4e2a CL \u7684\u201c\u4e3b\u8981\u201d\u90e8\u5206\u3002\u901a\u5e38\uff0c\u53ea\u6709\u4e00\u4e2a\u6587\u4ef6\u5177\u6709\u6700\u591a\u7684\u903b\u8f91\u66f4\u6539\uff0c\u5b83\u662f CL \u7684\u4e3b\u8981\u90e8\u5206\u3002\u9996\u5148\u770b\u770b\u8fd9\u4e9b\u4e3b\u8981\u90e8\u5206\u3002\u8fd9\u6709\u52a9\u4e8e\u4e3a CL \u7684\u6240\u6709\u8f83\u5c0f\u90e8\u5206\u63d0\u4f9b\u4e0a\u4e0b\u6587\uff0c\u5e76\u4e14\u901a\u5e38\u4f1a\u52a0\u901f\u4ee3\u7801\u8bc4\u5ba1\u3002\u5982\u679c CL \u592a\u5927\uff0c\u60a8\u65e0\u6cd5\u786e\u5b9a\u54ea\u4e9b\u90e8\u5206\u662f\u4e3b\u8981\u90e8\u5206\uff0c\u8bf7\u8be2\u95ee\u5f00\u53d1\u4eba\u5458\u5e94\u8be5\u9996\u5148\u67e5\u770b\u4ec0\u4e48\uff0c",i.a.createElement(m.b,{to:"/codereview/8"},"\u6216\u8005\u8ba9\u4ed6\u4eec\u5c06 CL \u5206\u5272\u6210\u591a\u4e2a CL"),"\u3002"),i.a.createElement("p",{className:"indent-2"},"\u5982\u679c\u60a8\u770b\u5230 CL \u7684\u8fd9\u4e00\u90e8\u5206\u5b58\u5728\u4e00\u4e9b\u4e3b\u8981\u7684\u8bbe\u8ba1\u95ee\u9898\uff0c\u60a8\u5e94\u8be5\u7acb\u5373\u53d1\u9001\u8fd9\u4e9b\u8bc4\u8bba\uff0c\u5373\u4f7f\u60a8\u73b0\u5728\u6ca1\u6709\u65f6\u95f4\u6765\u8bc4\u5ba1 CL \u7684\u5176\u4f59\u90e8\u5206\u3002\u4e8b\u5b9e\u4e0a\uff0c\u8bc4\u5ba1 CL \u7684\u5176\u4f59\u90e8\u5206\u53ef\u80fd\u662f\u6d6a\u8d39\u65f6\u95f4\uff0c\u56e0\u4e3a\u5982\u679c\u8bbe\u8ba1\u95ee\u9898\u8db3\u591f\u4e25\u91cd\uff0c\u90a3\u4e48\u8bb8\u591a\u5176\u4ed6\u6b63\u5728\u68c0\u67e5\u7684\u4ee3\u7801\u5c06\u4f1a\u6d88\u5931\uff0c\u4e0d\u7ba1\u600e\u6837\u90fd\u65e0\u5173\u7d27\u8981\u3002"),i.a.createElement("p",{className:"indent-2"},"\u6709\u4e24\u4e2a\u5f88\u91cd\u8981\u7684\u539f\u56e0\uff0c\u5e94\u8be5\u7acb\u5373\u53d1\u9001\u8fd9\u4e9b\u4e3b\u8981\u7684\u8bbe\u8ba1\u610f\u89c1:"),i.a.createElement("ul",{className:"indent-2"},i.a.createElement("li",null,"\u5f00\u53d1\u4eba\u5458\u901a\u5e38\u4f1a\u53d1\u9001\u4e00\u4e2a CL\uff0c\u7136\u540e\u5728\u7b49\u5f85\u8bc4\u5ba1\u65f6\u7acb\u5373\u57fa\u4e8e\u8be5 CL \u5f00\u59cb\u65b0\u7684\u5de5\u4f5c\u3002\u5982\u679c\u60a8\u6b63\u5728\u8bc4\u5ba1\u7684 CL \u4e2d\u5b58\u5728\u4e3b\u8981\u7684\u8bbe\u8ba1\u95ee\u9898\uff0c\u90a3\u4e48\u4ed6\u4eec\u8fd8\u5fc5\u987b\u91cd\u65b0\u7f16\u5199\u540e\u9762\u7684CL\u3002\u63d0\u524d\u6355\u6349\u5b83\u4eec\u4ee5\u514d\u5728\u6709\u95ee\u9898\u7684\u8bbe\u8ba1\u4e0a\u505a\u8fc7\u591a\u989d\u5916\u7684\u5de5\u4f5c\u3002"),i.a.createElement("li",null,"\u5927\u7684\u8bbe\u8ba1\u53d8\u66f4\u6bd4\u5c0f\u7684\u53d8\u66f4\u9700\u8981\u66f4\u957f\u7684\u65f6\u95f4\u3002\u5f00\u53d1\u4eba\u5458\u51e0\u4e4e\u90fd\u6709\u622a\u6b62\u65e5\u671f;\u4e3a\u4e86\u5728\u4ee3\u7801\u5e93\u4e2d\u4fdd\u6301\u9ad8\u8d28\u91cf\u4ee3\u7801\u7684\u540c\u65f6\u5b8c\u6210\u8fd9\u4e9b\u622a\u6b62\u65e5\u671f\uff0c\u5f00\u53d1\u4eba\u5458\u9700\u8981\u6839\u636e CL \u5c3d\u5feb\u5f00\u59cb\u66f4\u65b0\u5de5\u4f5c\u3002")),i.a.createElement("h2",null,"\u7b2c\u4e09\u6b65:\u6309\u7167\u9002\u5f53\u7684\u987a\u5e8f\u67e5\u770b CL \u7684\u5176\u4f59\u90e8\u5206"),i.a.createElement("p",{className:"indent-2"},"\u5f53\u60a8\u786e\u8ba4\u6574\u4e2a CL \u6ca1\u6709\u4e3b\u8981\u7684\u8bbe\u8ba1\u95ee\u9898\u65f6\uff0c\u8bf7\u5c1d\u8bd5\u627e\u51fa\u4e00\u4e2a\u903b\u8f91\u987a\u5e8f\u6765\u68c0\u67e5\u6587\u4ef6\uff0c\u540c\u65f6\u786e\u4fdd\u60a8\u4e0d\u4f1a\u9519\u8fc7\u8bc4\u5ba1\u4efb\u4f55\u6587\u4ef6\u3002\u901a\u5e38\uff0c\u5728\u60a8\u6d4f\u89c8\u5b8c\u4e3b\u8981\u6587\u4ef6\u4e4b\u540e\uff0c\u6309\u7167\u4ee3\u7801\u8bc4\u5ba1\u5de5\u5177\u663e\u793a\u7684\u987a\u5e8f\u6d4f\u89c8\u6bcf\u4e2a\u6587\u4ef6\u662f\u6700\u7b80\u5355\u7684\u3002\u6709\u65f6\u5019\uff0c\u5728\u9605\u8bfb\u4e3b\u4ee3\u7801\u4e4b\u524d\u5148\u9605\u8bfb\u6d4b\u8bd5\u4e5f\u662f\u6709\u5e2e\u52a9\u7684\uff0c\u56e0\u4e3a\u8fd9\u6837\u4f60\u5c31\u77e5\u9053\u4e86\u8fd9\u4e2a\u6539\u53d8\u5e94\u8be5\u505a\u4ec0\u4e48\u3002"))),i.a.createElement(s.a,null))}}]),n}(o.Component)}}]);
//# sourceMappingURL=61.0c9bd54c.chunk.js.map