(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[8],{39:function(e,t,a){"use strict";var n=a(12),r=a(13),l=a(17),c=a(14),o=a(15),m=a(0),i=a.n(m),s=a(5),u=a(8),d=(a(40),function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).bindHandleScroll=function(e){var t=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);r.setState({scrollTop:t})},r.scrollToAnchor=function(e){if(e){var t=document.getElementById(e);t&&t.scrollIntoView({block:"start",behavior:"smooth"})}},r.state={articleTree:[],scrollTop:null},r.getArticleTree=r.getArticleTree.bind(Object(l.a)(r)),r}return Object(r.a)(a,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,t=[],a=0,n=e.length;a<n-1;a++){var r=e[a].nodeName;"H2"!==r&&"H3"!==r||(e[a].id=e[a].innerText,t.push({name:e[a].innerText,tag:e[a].nodeName}))}this.setState({articleTree:t})}},{key:"setTitle",value:function(){for(var e=this.props.location.pathname.split("/").filter((function(e){return e})),t=0,a=u.a.length;t<a;t++)e[0]===u.a[t].name&&(document.getElementsByTagName("h1")[0].innerHTML=u.a[t].section.length>0?u.a[t].section[e[e.length-1]]:u.a[t].title)}},{key:"componentDidMount",value:function(){this.getArticleTree(),this.setTitle();var e=document.getElementById("header"),t=window.scrollY,a=document.getElementsByClassName("directory-list")[0],n=a.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var r=document.getElementsByClassName("page-footer")[0],l=0;r;)l+=r.offsetTop,r=r.offsetParent;var c=document.body.scrollTop||document.documentElement.scrollTop;if((c+=n+a.offsetHeight)>l+e.offsetHeight)a.style="position:fixed;top:".concat(n-c+l,"px;transition:none");else{var o=window.scrollY;o>e.offsetHeight&&(t<o&&(e.className="ant-layout-header header header-affixed",a.className="directory-list directory-affixed",t=o),t>o&&(e.className="ant-layout-header header header-visible",a.className="directory-list",t=o)),a.style=""}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll)}},{key:"render",value:function(){var e=this,t=this.state,a=t.articleTree,n=t.scrollTop,r=a.length;if(document.getElementById("tree-num-0")&&r>0){for(var l=[],c=0;c<r;c++){var o=document.getElementById(a[c].name);l.push(o.offsetTop)}for(var m=l.findIndex((function(e){return e>n}))-1,s=0;s<r;s++)document.getElementById("tree-num-".concat(s)).className=s===m?"tree-num directory-item-active":"tree-num";-2===m&&(document.getElementById("tree-num-".concat(r-1)).className="tree-num directory-item-active")}return i.a.createElement("div",{className:"directory"},i.a.createElement("ul",{className:"directory-list"},a.map((function(t,a){return i.a.createElement("li",{key:a,id:"tree-num-".concat(a),className:"tree-num",title:t.name,style:{paddingLeft:"H2"===t.tag?10:22},onClick:function(){e.scrollToAnchor("".concat(t.name))}},t.name)}))))}}]),a}(m.Component));t.a=Object(s.f)(d)},40:function(e,t,a){},537:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return p}));var n=a(12),r=a(13),l=a(14),c=a(15),o=a(0),m=a.n(o),i=a(39),s=a(1450),u=a(270),d=Object(s.a)({scriptUrl:"//at.alicdn.com/t/font_1764079_wbj57wahdm.js"}),p=function(e){Object(c.a)(o,e);var t=Object(l.a)(o);function o(){return Object(n.a)(this,o),t.apply(this,arguments)}return Object(r.a)(o,[{key:"render",value:function(){return m.a.createElement("div",{className:"page-content"},m.a.createElement("div",{className:"article"},m.a.createElement("div",{className:"article-title"},m.a.createElement("h1",null,"\u5173\u4e8e\u672c\u7ad9")),m.a.createElement("div",{className:"article-content"},m.a.createElement("h2",null,"\u4e3a\u4ec0\u4e48\u5efa\u672c\u7ad9"),m.a.createElement("p",{className:"indent-2"},"\u6700\u521d\u53ea\u662f\u60f3\u62ff\u6765\u5199\u6587\u6863\u7684\u3002\u53ea\u662f\u5199\u6587\u6863\u7684\u8bdd\uff0c\u4e3a\u4ec0\u4e48\u6709\u77e5\u4e4e\u3001\u7b80\u4e66\u3001\u6398\u91d1\u3001\u8bed\u96c0\u7b49\u7f51\u7ad9\u4e0d\u7528\uff0c\u975e\u8981\u8d39\u52b2\u81ea\u5df1\u5efa\u7ad9\u5462\uff1f"),m.a.createElement("p",{className:"indent-2"},"\u8fd9\u662f\u7531\u4e8e\u524d\u6bb5\u65f6\u95f4\u60f3\u8981\u7cfb\u7edf\u5730\u5b66\u4e60\u4e00\u4e0b GoJS\uff0c\u6574\u7406\u4e00\u4efd\u6587\u6863\u3002\u5176\u5b9e\u6700\u5f00\u59cb\u662f\u5728\u8bed\u96c0\u4e0a\u5199\u6587\u6863\u7684\u3002\u4e0d\u5f97\u4e0d\u8bf4\uff0c\u529f\u80fd\u5f88\u5f3a\u5927\uff0c\u4f46\u662f\u53ea\u80fd\u653e\u4e00\u4e9b\u666e\u901a\u7684\u6587\u5b57\u3001\u56fe\u7247\u3001\u94fe\u63a5\u4e4b\u7c7b\u7684\uff0c\u5199\u4e86\u5927\u6982\u6709\u56db\u4e94\u8282\uff0c\u7a81\u7136\u60f3\u628a\u5176\u5b9e\u73b0\u7684\u6548\u679c\u5c55\u793a\u5728\u6587\u6863\u4e2d\uff0c\u53ef\u662f\u6587\u6863\u91cc\u6ca1\u529e\u6cd5\u63d2\u5165\u53ef\u4ea4\u4e92\u7684 HTML \u5143\u7d20",m.a.createElement(d,{type:"emoji-jiong"}),"\uff0c\u4e8e\u662f\u4e4e\uff0c\u5c31\u5f00\u59cb\u8c03\u7814\u54ea\u4e9b\u7f51\u7ad9\u53ef\u4ee5\u6ee1\u8db3\u81ea\u5df1\u7684\u9700\u6c42\u3002"),m.a.createElement("p",{className:"indent-2"},"\u5728\u8fd9\u671f\u95f4\uff0c\u770b\u4e86\u77e5\u4e4e\u3001\u7b80\u4e66\u3001\u6398\u91d1\u7b49\u4e00\u4f17\u7f51\u7ad9\uff0c\u5c31\u4e0d\u4e00\u4e00\u5217\u4e3e\u4e86\uff0c\u53d1\u73b0\u90fd\u6ee1\u8db3\u4e0d\u4e86\u81ea\u5df1\u7684\u9700\u6c42\uff08\u4e5f\u53ef\u80fd\u662f\u592a\u7b28\u4e86\uff0c\u6ca1\u5b66\u4f1a\u600e\u4e48\u7528\uff0c\u54c8\u54c8\u54c8\u54c8\u54c8\uff0c\u5c34\u5c2c",m.a.createElement(d,{type:"emoji-ganga"}),"\uff09\u3002\u7136\u540e\u5c31\u840c\u751f\u4e86\u81ea\u5df1\u5efa\u7ad9\u7684\u60f3\u6cd5",m.a.createElement(d,{type:"emoji-jiling"}),"\u3002"),m.a.createElement("p",{className:"indent-2"},"\u60f3\u5efa\u7ad9\u4f46\u662f\u4e0d\u60f3\u82b1\u94b1\u4e70\u670d\u52a1\u5668\uff0c\u7a77\u5440",m.a.createElement(d,{type:"emoji-jiong"}),"\uff0c\u600e\u4e48\u529e\uff1f\u4e56\u4e56\u767e\u5ea6\u627e\u529e\u6cd5\uff0c\u7136\u540e\u53d1\u73b0\u4e86 github-pages\uff08\u4ee5\u4e0b\u7b80\u79f0 gp\uff09\u8fd9\u4e2a\u597d\u4e1c\u897f\uff0c\u53ef\u4ee5\u62ff\u6765\u505a\u4e2a\u4eba\u535a\u5ba2\uff0c\u867d\u8bf4 github \u5728\u56fd\u5185\u8bbf\u95ee\u7684\u901f\u5ea6\u4e0d\u592a\u5feb\u5427\uff0c\u4f46\u662f\u5b83\u514d\u8d39\u5440",m.a.createElement(d,{type:"emoji-caimi"}),"\uff0c\u8fd8\u6311\u5565\u3002So\uff0c\u5f00\u59cb\u7814\u7a76 gp \u600e\u4e48\u7528\u3002"),m.a.createElement("p",{className:"indent-2"},"\u7b2c\u4e00\u65f6\u95f4\u60f3\u5230\u7684\u5c31\u662f\u6700\u7b28\u7684\u65b9\u6cd5\uff0c\u7eaf HTML\u3001CSS \u80af\u5b9a\u662f\u884c\u5f97\u901a\u7684\u3002\u800c\u4e14\u8bed\u96c0\u6709\u81ea\u5e26\u7684\u5c06\u6587\u6863\u8f6c\u4e3a HTML \u7684\u529f\u80fd\uff0c\u8fd8\u662f\u5f88\u597d\u7528\u7684\uff0c\u6240\u4ee5\u5c31\u60f3\u7740\u5148\u5728\u8bed\u96c0\u91cc\u5199\u597d\u6587\u6863\uff0c\u518d\u8f6c\u6210 HTML\uff0c\u7136\u540e\u5728\u9700\u8981\u7684\u4f4d\u7f6e\u63d2\u5165\u4ee3\u7801\u3002\u968f\u540e\u628a\u60f3\u6cd5\u6d4b\u8bd5\u4e86\u4e00\u4e0b\uff0c\u653e\u5230 gp \u4e0a\u6ca1\u95ee\u9898\uff0cGood\u3002"),m.a.createElement("p",{className:"indent-2"},"\u65e2\u7136\u90fd\u5efa\u7ad9\u4e86\uff0c\u7d22\u6027\u5c31\u5f04\u4e2a\u535a\u5ba2\u5427\uff0c\u4e0a\u9762\u7684\u529e\u6cd5\u53ef\u4ee5\u662f\u53ef\u4ee5\uff0c\u53ef\u662f\u6bcf\u4e2a\u9875\u9762\u90fd\u8981\u5199\u4e2a HTML \u6587\u4ef6\uff0c\u8fd9\u672a\u514d\u4e5f\u592a\u8822\u4e86",m.a.createElement(d,{type:"emoji-xianqi"}),"\uff0c\u60f3\u60f3\u679c\u65ad\u653e\u5f03\u4e86\u3002"),m.a.createElement("p",{className:"indent-2"},"\u7136\u540e\u5c31\u81ea\u7136\u800c\u7136\u5730\u5f00\u59cb\u627e\u535a\u5ba2\u6a21\u677f\uff0c\u7136\u540e\u5c31\u627e\u5230\u4e86\u4e2a\u53ef\u4ee5\u5feb\u901f\u6784\u5efa\u4e2a\u4eba\u535a\u5ba2\u7684\u597d\u4e1c\u897f\uff0cHexo\uff0c\u60f3\u4e86\u89e3\u7684\u5c0f\u4f19\u4f34\u8bf7\u79fb\u6b65 ",m.a.createElement("a",{href:"https://hexo.io/",target:"_blank",rel:"noopener noreferrer"},"Hexo \u5b98\u7f51"),"\u3002"),m.a.createElement("p",{className:"indent-2"},"\u5de5\u5177\u627e\u597d\u4e86\uff0c\u4e0b\u4e00\u6b65\u662f\u4ec0\u4e48\uff1f\u4f7f\u7528\uff1f\u522b\u6025\uff0c\u5148\u627e\u6559\u7a0b\uff0c\u7701\u65f6\u7701\u529b\u4e0d\u6389\u5751\u3002\u627e\u4e86\u6709\u51e0\u7bc7\uff0c\u6700\u540e\u53c2\u8003\u7684\u662f\u8fd9\u4e2a",m.a.createElement("a",{href:"https://zhuanlan.zhihu.com/p/26625249",target:"_blank",rel:"noopener noreferrer"},"https://zhuanlan.zhihu.com/p/26625249"),"\uff0c\u6587\u7ae0\u5199\u5f97\u5f88\u8be6\u7ec6\uff0c\u624b\u628a\u624b\u6559\u5b66\uff0c\u53ef\u662f\u6211\u4e0a\u6765\u5c31\u5ffd\u7565\u4e86\u7b2c\u4e00\u70b9\uff0c",m.a.createElement("b",null,"\u4ed3\u5e93\u540d\u5e94\u8be5\u4e3a\uff1a\u7528\u6237\u540d.github.io "),"\uff0c\u540e\u8fb9\u7684\u6cea\u5c31\u4e0d\u63d0\u4e86",m.a.createElement(d,{type:"emoji-wunai"}),"\u3002\u3002\u3002"),m.a.createElement("p",{className:"indent-2"},"Hexo \u9664\u4e86\u5feb\u901f\u5efa\u7ad9\u4e4b\u5916\uff0c\u8fd8\u6709\u5f88\u591a\u4e3b\u9898\u9009\u62e9\uff0c\u611f\u5174\u8da3\u7684\u53ef\u4ee5\u770b\u4e00\u4e0b",m.a.createElement("a",{href:"https://hexo.io/themes/",target:"_blank",rel:"noopener noreferrer"},"Hexo \u5b98\u65b9 Themes"),"\uff0c\u5c06\u8fd1 300 \u4e2a\uff0c\u771f\u7684\u5f88\u591a\uff0c\u800c\u4e14\u62c9\u53d6\u3001\u914d\u7f6e\u90fd\u5f88\u4fbf\u6377\u3002"),m.a.createElement("p",{className:"indent-2"},"\u6298\u817e\u4e86\u5927\u6982\u6709\u4e09\u56db\u4e2a\u5c0f\u65f6\uff0c\u5176\u5b9e\u5927\u90e8\u5206\u65f6\u95f4\u90fd\u7528\u5728\u6311\u4e3b\u9898\u4e0a\u4e86\u3002\u3002\u3002\u7136\u540e\u5c31\u6b63\u5f0f\u5f00\u59cb\u641e\uff0c\u7136\u540e\u5c31\u6ca1\u6709\u7136\u540e\u4e86",m.a.createElement(d,{type:"emoji-dai"}),"\u3002\u3002\u3002\u5f00\u59cb\u7528\u6211\u624d\u53d1\u73b0\uff0cHexo \u7528 Markdown \u89e3\u6790\u6587\u7ae0\uff0c\u5b83\u53ea\u80fd\u89e3\u6790\u6587\u7ae0\u554a\uff0c\u8fd8\u662f\u4e0d\u80fd\u6ee1\u8db3\u9700\u6c42\u968f\u5fc3\u6240\u6b32\u7684\u63d2 HTML \u5143\u7d20\uff08\u4e5f\u53ef\u80fd\u6ca1\u5b66\u4f1a\u600e\u4e48\u7528\uff09\uff0c\u5173\u952e\u662f\u611f\u89c9\u5199\u8d77\u6765\u8fd8\u633a\u9ebb\u70e6\u7684\uff0c\u6240\u4ee5\u53c8\u653e\u5f03 Hexo\u4e86\u3002"),m.a.createElement("p",{className:"indent-2"},"\u968f\u540e\u53c8\u5f00\u59cb\u627e\u65b0\u7684\u529e\u6cd5\uff0c\u7ec8\u4e8e\u60f3\u5230\u4e86\u7528\u81ea\u5df1\u6bd4\u8f83\u719f\u6089\u7684React\u6765\u5efa\u7ad9\uff0c\u8001\u8def\u5b50\uff0c\u6559\u7a0b\u53c2\u8003\u8fd9\u91cc",m.a.createElement("a",{href:"https://zhuanlan.zhihu.com/p/88481760",target:"_blank",rel:"noopener noreferrer"},"https://zhuanlan.zhihu.com/p/88481760"),"\u3002"),m.a.createElement("p",{className:"indent-2"},"\u6d4b\u8bd5\u4e86\u4e00\u4e0b\uff0c\u5c06 React \u6253\u5305\u540e\u7684\u4ee3\u7801\u4e22\u5230 github \u4e0a\uff0c\u53ef\u884c\uff0c\u4e8e\u662f\u5c31\u8fd9\u4e48\u6109\u5feb\u5730\u51b3\u5b9a\u4e86",m.a.createElement(d,{type:"emoji-ku"}),"\u3002"),m.a.createElement("br",null),m.a.createElement("p",{className:"indent-2"},"\u4ee5\u4e0a\u57fa\u672c\u4e0a\u5c31\u662f\u5efa\u7ad9\u7684\u6574\u4e2a\u5386\u7a0b\u3002"),m.a.createElement("br",null),m.a.createElement("div",{className:"text-right"},m.a.createElement("em",null,"\u5199\u4e8e 2020-4-6 \u51cc\u6668")),m.a.createElement("hr",null),m.a.createElement("h2",null,"\u7565\u6709\u5c0f\u611f"),m.a.createElement("p",{className:"indent-2"},"\u575a\u6301\u5199\u535a\u5ba2\u5df2\u7ecf\u6709\u4e8c\u5341\u591a\u5929\u4e86\uff0c\u4eca\u5929\u5199\u70b9\u6700\u8fd1\u5199\u535a\u5ba2\u4ee5\u6765\u7684\u611f\u53d7\u3002"),m.a.createElement("p",{className:"indent-2"},"\u9996\u5148\u8bf4\u4e00\u70b9\uff0c\u5f04\u535a\u5ba2\u771f\u7684\u5f88\u82b1\u8d39\u65f6\u95f4\u3002\u6211\u51e0\u4e4e\u6bcf\u5929\u81f3\u5c11\u5728\u535a\u5ba2\u4e0a\u82b1\u8d39\u4e94\u516d\u4e2a\u5c0f\u65f6\uff0c\u751a\u81f3\uff0c4\u670810\u53f7\u665a\u4e0a\u5f04\u4e86\u4e2a\u901a\u5bb5\uff0c\u5176\u5b9e\u6211\u90fd\u5df2\u7ecf\u5f88\u4e45\u6ca1\u6709\u8fd9\u4e48\u71ac\u8fc7\u591c\u4e86\uff0c\u4f46\u662f\u5199\u4ee3\u7801\u5b9e\u5728\u662f\u592a\u6709\u610f\u601d\u4e86",m.a.createElement(d,{type:"emoji-daxiao"}),"\uff0c\u54c8\u54c8\u54c8\uff0c\u6839\u672c\u505c\u4e0d\u4e0b\u6765\u5440~"),m.a.createElement("p",{className:"indent-2"},"\u4e3a\u4ec0\u4e48\u5728\u535a\u5ba2\u4e0a\u82b1\u4e86\u8fd9\u4e48\u591a\u65f6\u95f4\u5462\uff1f\u5176\u5b9e\u6211\u5e76\u6ca1\u6709\u5728\u5199\u6587\u7ae0\u4e0a\u82b1\u8d39\u592a\u591a\u65f6\u95f4\uff0c\u56e0\u4e3a\u535a\u5ba2\u76ee\u524d\u8fd8\u5904\u4e8e\u521d\u671f\u9636\u6bb5\uff0c\u5e76\u672a\u6210\u578b\uff0c\u6240\u4ee5\u5927\u90e8\u5206\u65f6\u95f4\u90fd\u7528\u5728\u7f51\u7ad9\u8c03\u6574\u548c\u4f18\u5316\u4e86\u3002\u5199\u5230\u8fd9\u91cc\uff0c\u6211\u53bb\u770b\u4e86\u4e0b\u6211\u535a\u5ba2\u6e90\u4ee3\u7801\u5728 GitHub \u4e0a\u7684 ",m.a.createElement("a",{href:"https://github.com/LiuZheAb/blog_react/commits/master",target:"_blank",rel:"noopener noreferrer"},"commits")," \u8bb0\u5f55\uff0c\u53d1\u73b0\u521a\u597d 100 \u6761\u4e86\uff0c\u771f\u662f\u5de7\u3002"),m.a.createElement("p",{className:"indent-2"},"\u4e8c\u5341\u591a\u5929\uff0c\u6211\u7684\u535a\u5ba2\u7684\u4ee3\u7801\u7ed3\u6784\u662f\u6539\u4e86\u53c8\u6539\uff0c\u7ec4\u4ef6\u5316\u4e5f\u8d8a\u6765\u8d8a\u5f7b\u5e95\u3002\u867d\u7136\u6ca1\u6709\u540e\u7aef\uff0c\u4f46\u662f\u901a\u8fc7\u516c\u5171 data \u6570\u636e\u6587\u4ef6\u5b9e\u73b0\u4e86\u7c7b\u4f3c\u6570\u636e\u5e93\u7684\u529f\u80fd\uff0c\u9762\u5305\u5c51\u3001\u83dc\u5355\u3001\u9875\u811a\u3001\u76ee\u5f55\u7ec4\u4ef6\u5185\u7684\u6570\u636e\u7edf\u4e00\u8c03\u7528\u6b64\u6570\u636e\u3002\u7f51\u7ad9\u7684\u7ef4\u62a4\u3001\u66f4\u65b0\u5de5\u4f5c\u6bd4\u521a\u5f00\u59cb\u7684\u65f6\u5019\u7b80\u5316\u4e86\u8bb8\u591a(\u521a\u5f00\u59cb\u7684\u65f6\u5019\uff0c\u8981\u60f3\u53d1\u4e00\u7bc7\u65b0\u6587\u7ae0\uff0c\u6211\u5f97\u624b\u52a8\u5c06\u9762\u5305\u5c51\u3001\u83dc\u5355\u3001\u9875\u811a\u3001\u76ee\u5f55\u7ec4\u4ef6\u9010\u4e00\u4fee\u6539\u624d\u884c\uff0c\u6548\u7387\u5b9e\u5728\u662f\u4f4e)\u3002"),m.a.createElement("p",{className:"indent-2"},"\u535a\u5ba2\u8fd9\u73a9\u610f\u513f\uff0c\u771f\u7684\u4f1a\u8ba9\u4eba\u4e0a\u763e",m.a.createElement(d,{type:"emoji-fangguang"}),"\u3002\u5199\u535a\u5ba2\u4e4b\u524d\u5427\uff0c\u6bcf\u5929\u95f2\u65f6\u57fa\u672c\u90fd\u5728\u6253\u6e38\u620f\u3001\u770b\u89c6\u9891\uff0c\u53ef\u662f\u5f00\u59cb\u5199\u535a\u5ba2\u540e\u5462\uff0c\u88ab\u540c\u4e8b\u79f0\u4e3a\u201c\u4efb\u52a1\u5c0f\u738b\u5b50\u201d\u7684\u6211\u90fd\u653e\u5f03\u6e38\u620f\u4e86\uff0c\u4e3a\u4ec0\u4e48\uff0c\u56e0\u4e3a\u5199\u535a\u5ba2\u771f\u7684\u5f88\u8fc7\u763e\u554a",m.a.createElement(d,{type:"emoji-xiaoku"}),"\u3002\u770b\u7740\u81ea\u5df1\u4e00\u70b9\u4e00\u70b9\u642d\u8d77\u6765\u7684\u7f51\u7ad9\u9010\u6e10\u5b8c\u5584\uff0c\u4ee3\u7801\u4e5f\u8d8a\u6765\u8d8a\u6f02\u4eae\uff0c\u8fd9\u5176\u4e2d\u7684\u7f8e\u5999\u4e0d\u53ef\u8a00\u8bf4\u3002"),m.a.createElement("p",{className:"indent-2"},"\u6240\u4ee5\u8bf4\uff0c\u5199\u535a\u5ba2\u6709\u4e2a\u6700\u5927\u7684\u597d\u5904\uff0c\u5c31\u662f\u8ba9\u4eba\u6709\u4e8b\u5e72\uff0c\u5c24\u5176\u5bf9\u4e8e\u50cf\u6211\u8fd9\u79cd\u6bd4\u8f83\u95f2\u7684\u4eba\uff0c\u771f\u7684\u80fd\u63a8\u7740\u4eba\u5f80\u524d\u8d70\u3002\u5728\u5199\u535a\u5ba2\u7684\u8fc7\u7a0b\u4e2d\uff0c\u6211\u771f\u771f\u5207\u5207\u5730\u5b66\u5230\u4e86\u5f88\u591a\u4e1c\u897f\uff0c\u6bcf\u5929\u90fd\u8fc7\u5f97\u5f88\u5145\u5b9e\uff0c\u4e5f\u611f\u53d7\u5230\u6bcf\u5929\u90fd\u5728\u8fdb\u6b65\u3002"),m.a.createElement("p",{className:"indent-2"},"\u9769\u547d\u5c1a\u672a\u6210\u529f\uff0c\u540c\u5fd7\u4ecd\u9700\u52aa\u529b\u3002\u52a0\u6cb9\u5427\uff0c\u5e74\u8f7b\u4eba\uff0c\u4e3a\u4e86\u5fc3\u4e2d\u7684\u7406\u60f3\u4e61",m.a.createElement(d,{type:"emoji-jiling"})),m.a.createElement("br",null),m.a.createElement("p",{className:"indent-2"},"\u4ee5\u4e0a\u3002"),m.a.createElement("br",null),m.a.createElement("div",{className:"text-right"},m.a.createElement("em",null,"\u5199\u4e8e 2020-4-18 \u4e0b\u5348")),m.a.createElement("h2",null,"\u7528\u5230\u4e86\u54ea\u4e9b"),m.a.createElement("ul",{className:"indent-2 dependencies"},m.a.createElement("li",null,m.a.createElement("a",{href:"https://react.docschina.org/",target:"_blank",rel:"noopener noreferrer"},m.a.createElement(u.a,{type:"iconReact"}),"React")),m.a.createElement("li",null,m.a.createElement("a",{href:"https://ant.design/",target:"_blank",rel:"noopener noreferrer"},m.a.createElement("img",{src:a(498),alt:"AntDesign"}),"AntDesign")),m.a.createElement("li",null,m.a.createElement("a",{href:"http://lesscss.cn/",target:"_blank",rel:"noopener noreferrer"},m.a.createElement("img",{src:a(504),alt:"Less"}),"Less")),m.a.createElement("li",null,m.a.createElement("a",{href:"https://gojs.net/latest/index.html",target:"_blank",rel:"noopener noreferrer"},m.a.createElement("img",{src:a(503),alt:"GoJS"}),"GoJS")),m.a.createElement("li",null,m.a.createElement("a",{href:"https://www.iconfont.cn/",target:"_blank",rel:"noopener noreferrer"},m.a.createElement(u.a,{type:"iconiconfont"}),"IconFont")),m.a.createElement("li",null,m.a.createElement("a",{href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"},m.a.createElement(u.a,{type:"iconGithub-2"}),"GitHub Pages"))),m.a.createElement("br",null),m.a.createElement("p",{className:"indent-2"},"UI \u90e8\u5206\u53c2\u8003\u4e86\u8bed\u96c0"),m.a.createElement("br",null))),m.a.createElement(i.a,null))}}]),o}(o.Component)}}]);
//# sourceMappingURL=8.0518a022.chunk.js.map