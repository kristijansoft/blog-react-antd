(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[70],{39:function(e,t,n){"use strict";var l=n(12),a=n(13),r=n(17),c=n(14),o=n(15),i=n(0),s=n.n(i),m=n(5),u=n(8),d=(n(40),function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).bindHandleScroll=function(e){var t=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);a.setState({scrollTop:t})},a.scrollToAnchor=function(e){if(e){var t=document.getElementById(e);t&&t.scrollIntoView({block:"start",behavior:"smooth"})}},a.state={articleTree:[],scrollTop:null},a.getArticleTree=a.getArticleTree.bind(Object(r.a)(a)),a}return Object(a.a)(n,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,t=[],n=0,l=e.length;n<l-1;n++){var a=e[n].nodeName;"H2"!==a&&"H3"!==a||(e[n].id=e[n].innerText,t.push({name:e[n].innerText,tag:e[n].nodeName}))}this.setState({articleTree:t})}},{key:"setTitle",value:function(){for(var e=this.props.location.pathname.split("/").filter((function(e){return e})),t=0,n=u.a.length;t<n;t++)e[0]===u.a[t].name&&(document.getElementsByTagName("h1")[0].innerHTML=u.a[t].section.length>0?u.a[t].section[e[e.length-1]]:u.a[t].title)}},{key:"componentDidMount",value:function(){this.getArticleTree(),this.setTitle();var e=document.getElementById("header"),t=window.scrollY,n=document.getElementsByClassName("directory-list")[0],l=n.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var a=document.getElementsByClassName("page-footer")[0],r=0;a;)r+=a.offsetTop,a=a.offsetParent;var c=document.body.scrollTop||document.documentElement.scrollTop;if((c+=l+n.offsetHeight)>r+e.offsetHeight)n.style="position:fixed;top:".concat(l-c+r,"px;transition:none");else{var o=window.scrollY;o>e.offsetHeight&&(t<o&&(e.className="ant-layout-header header header-affixed",n.className="directory-list directory-affixed",t=o),t>o&&(e.className="ant-layout-header header header-visible",n.className="directory-list",t=o)),n.style=""}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll)}},{key:"render",value:function(){var e=this,t=this.state,n=t.articleTree,l=t.scrollTop,a=n.length;if(document.getElementById("tree-num-0")&&a>0){for(var r=[],c=0;c<a;c++){var o=document.getElementById(n[c].name);r.push(o.offsetTop)}for(var i=r.findIndex((function(e){return e>l}))-1,m=0;m<a;m++)document.getElementById("tree-num-".concat(m)).className=m===i?"tree-num directory-item-active":"tree-num";-2===i&&(document.getElementById("tree-num-".concat(a-1)).className="tree-num directory-item-active")}return s.a.createElement("div",{className:"directory"},s.a.createElement("ul",{className:"directory-list"},n.map((function(t,n){return s.a.createElement("li",{key:n,id:"tree-num-".concat(n),className:"tree-num",title:t.name,style:{paddingLeft:"H2"===t.tag?10:22},onClick:function(){e.scrollToAnchor("".concat(t.name))}},t.name)}))))}}]),n}(i.Component));t.a=Object(m.f)(d)},40:function(e,t,n){},874:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var l=n(12),a=n(13),r=n(14),c=n(15),o=n(0),i=n.n(o),s=n(39),m=n(16),u=function(e){Object(c.a)(n,e);var t=Object(r.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"page-content"},i.a.createElement("div",{className:"article"},i.a.createElement("div",{className:"article-title"},i.a.createElement("h1",null,"\u53ef\u89c6\u5316\u6570\u636e\u64cd\u4f5cDemo")),i.a.createElement("div",{className:"article-content"},i.a.createElement("h2",null,"\u7b80\u4ecb"),i.a.createElement("p",null,"\u57fa\u4e8eecharts\u5b9e\u73b0\u4e86\u4e0b\u5217\u529f\u80fd\uff1a"),i.a.createElement("ul",null,i.a.createElement("li",null,"\u8bfb\u53d6json\u6587\u4ef6\u5e76\u5904\u7406\u6570\u636e\uff1b"),i.a.createElement("li",null,"\u6839\u636e\u6570\u636e\u7ed8\u5236\u70ed\u529b\u56fe\u3001\u7ebf\u56fe\uff08\u7d2b\u7ebf\u4e3a\u767d\u7ebf\u63d2\u503c\u7ed3\u679c\uff09\uff1b"),i.a.createElement("li",null,"\u901a\u8fc7\u9f20\u6807\u5728\u56fe\u8868\u4e0a\u62d6\u52a8\uff0c\u53ef\u4fee\u6539\u767d\u7ebf\uff1b"),i.a.createElement("li",null,"\u5728\u56fe\u8868\u4e0aCtrl+\u5de6\u952e\u5355\u673a\u53ef\u622a\u65ad\u9f20\u6807\u5bf9\u5e94\u6a2a\u5750\u6807\u5de6\u4fa7\u7684\u767d\u7ebf\uff0cShift+\u5de6\u952e\u5355\u673a\u622a\u65ad\u53f3\u4fa7\uff1b"),i.a.createElement("li",null,"\u4fee\u6539\u767d\u7ebf\u540e\u5b9e\u65f6\u63d2\u503c\u751f\u6210\u7d2b\u7ebf\u6570\u636e\u5e76\u7ed8\u5236\uff1b"),i.a.createElement("li",null,"\u5b9e\u65f6\u6839\u636e\u7d2b\u7ebf\u751f\u6210\u53f3\u4fa7\u9ed1\u7ebf\u56fe\uff1b"),i.a.createElement("li",null,"\u4e0b\u8f7d\u63d2\u503c\u7ed3\u679c\u6587\u4ef6\uff1b"),i.a.createElement("li",null,"\u5176\u4ed6......")),i.a.createElement("p",null,"\u8be6\u60c5\u8bf7\u70b9\u51fb\u4e0b\u65b9demo\u5730\u5740\u67e5\u770b\u3002"),i.a.createElement(m.b,{to:"/demo/3/preview",target:"_blank"},"demo\u9884\u89c8"),i.a.createElement("p",null,"PC\u7aef\u6d4f\u89c8\u4f53\u9a8c\u6700\u4f73\uff0c\u79fb\u52a8\u7aef\u5efa\u8bae\u6a2a\u5c4f\u6d4f\u89c8\u3002"))),i.a.createElement(s.a,null))}}]),n}(o.Component)}}]);
//# sourceMappingURL=70.01bff0b9.chunk.js.map