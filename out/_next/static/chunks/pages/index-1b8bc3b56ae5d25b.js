(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{75557:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(53678)}])},53678:function(e,n,t){"use strict";t.r(n);var r=t(47568),a=t(51438),c=t(52951),i=t(88029),s=t(60460),l=t(34051),o=t.n(l),u=t(85893),d=t(67294),p=t(63762),m=t(80967),h=t(12889),f=t(83544),Z=t(96215),k=function(e){(0,i.Z)(t,e);var n=(0,s.Z)(t);function t(){return(0,a.Z)(this,t),n.apply(this,arguments)}return(0,c.Z)(t,[{key:"renderCampaigns",value:function(){var e=this.props.campaigns.map((function(e){return{header:e,description:(0,u.jsx)(Z.Link,{route:"/campaigns/".concat(e),children:(0,u.jsx)("a",{children:"View Campaign"})}),fluid:!0}}));return(0,u.jsx)(p.Z.Group,{items:e})}},{key:"render",value:function(){return(0,u.jsx)(f.Z,{children:(0,u.jsxs)("div",{children:[(0,u.jsx)("h1",{children:"All campaigns:"}),(0,u.jsx)("br",{}),(0,u.jsx)(Z.Link,{route:"campaigns/new",children:(0,u.jsx)("a",{children:(0,u.jsx)(m.Z,{content:"New Campaign",icon:"add",primary:!0})})}),(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),(0,u.jsx)("div",{children:this.renderCampaigns()})]})})}}],[{key:"getInitialProps",value:function(){return(0,r.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.Z.methods.getDeployedCampaigns().call();case 2:return n=e.sent,e.abrupt("return",{campaigns:n});case 4:case"end":return e.stop()}}),e)})))()}}]),t}(d.Component);n.default=k},63762:function(e,n,t){"use strict";t.d(n,{Z:function(){return E}});var r=t(87462),a=t(75068),c=t(86010),i=t(67294),s=t(98459),l=t(28935),o=t(12519),u=t(92248),d=t(80650),p=t(69591);function m(e){var n=e.children,t=e.className,a=e.content,d=e.textAlign,p=(0,c.Z)((0,s.X4)(d),"description",t),h=(0,l.Z)(m,e),f=(0,o.Z)(m,e);return i.createElement(f,(0,r.Z)({},h,{className:p}),u.kK(n)?a:n)}m.handledProps=["as","children","className","content","textAlign"],m.propTypes={};var h=m;function f(e){var n=e.children,t=e.className,a=e.content,d=e.textAlign,p=(0,c.Z)((0,s.X4)(d),"header",t),m=(0,l.Z)(f,e),h=(0,o.Z)(f,e);return i.createElement(h,(0,r.Z)({},m,{className:p}),u.kK(n)?a:n)}f.handledProps=["as","children","className","content","textAlign"],f.propTypes={};var Z=f;function k(e){var n=e.children,t=e.className,a=e.content,d=e.textAlign,p=(0,c.Z)((0,s.X4)(d),"meta",t),m=(0,l.Z)(k,e),h=(0,o.Z)(k,e);return i.createElement(h,(0,r.Z)({},m,{className:p}),u.kK(n)?a:n)}k.handledProps=["as","children","className","content","textAlign"],k.propTypes={};var x=k;function N(e){var n=e.children,t=e.className,a=e.content,d=e.description,m=e.extra,f=e.header,k=e.meta,g=e.textAlign,v=(0,c.Z)((0,s.lG)(m,"extra"),(0,s.X4)(g),"content",t),y=(0,l.Z)(N,e),C=(0,o.Z)(N,e);return u.kK(n)?u.kK(a)?i.createElement(C,(0,r.Z)({},y,{className:v}),(0,p.Go)(Z,(function(e){return{content:e}}),f,{autoGenerateKey:!1}),(0,p.Go)(x,(function(e){return{content:e}}),k,{autoGenerateKey:!1}),(0,p.Go)(h,(function(e){return{content:e}}),d,{autoGenerateKey:!1})):i.createElement(C,(0,r.Z)({},y,{className:v}),a):i.createElement(C,(0,r.Z)({},y,{className:v}),n)}N.handledProps=["as","children","className","content","description","extra","header","meta","textAlign"],N.propTypes={};var g=N,v=t(13871);function y(e){var n=e.centered,t=e.children,a=e.className,d=e.content,p=e.doubling,m=e.items,h=e.itemsPerRow,f=e.stackable,Z=e.textAlign,k=(0,c.Z)("ui",(0,s.lG)(n,"centered"),(0,s.lG)(p,"doubling"),(0,s.lG)(f,"stackable"),(0,s.X4)(Z),(0,s.H0)(h),"cards",a),x=(0,l.Z)(y,e),N=(0,o.Z)(y,e);if(!u.kK(t))return i.createElement(N,(0,r.Z)({},x,{className:k}),t);if(!u.kK(d))return i.createElement(N,(0,r.Z)({},x,{className:k}),d);var g=(0,v.Z)(m,(function(e){var n,t=null!=(n=e.key)?n:[e.header,e.description].join("-");return i.createElement(E,(0,r.Z)({key:t},e))}));return i.createElement(N,(0,r.Z)({},x,{className:k}),g)}y.handledProps=["as","centered","children","className","content","doubling","items","itemsPerRow","stackable","textAlign"],y.propTypes={};var C=y,E=function(e){function n(){for(var n,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return(n=e.call.apply(e,[this].concat(r))||this).handleClick=function(e){var t=n.props.onClick;t&&t(e,n.props)},n}return(0,a.Z)(n,e),n.prototype.render=function(){var e=this.props,t=e.centered,a=e.children,p=e.className,m=e.color,h=e.content,f=e.description,Z=e.extra,k=e.fluid,x=e.header,N=e.href,v=e.image,y=e.link,C=e.meta,E=e.onClick,G=e.raised,w=(0,c.Z)("ui",m,(0,s.lG)(t,"centered"),(0,s.lG)(k,"fluid"),(0,s.lG)(y,"link"),(0,s.lG)(G,"raised"),"card",p),j=(0,l.Z)(n,this.props),K=(0,o.Z)(n,this.props,(function(){if(E)return"a"}));return u.kK(a)?u.kK(h)?i.createElement(K,(0,r.Z)({},j,{className:w,href:N,onClick:this.handleClick}),d.Z.create(v,{autoGenerateKey:!1,defaultProps:{ui:!1,wrapped:!0}}),(f||x||C)&&i.createElement(g,{description:f,header:x,meta:C}),Z&&i.createElement(g,{extra:!0},Z)):i.createElement(K,(0,r.Z)({},j,{className:w,href:N,onClick:this.handleClick}),h):i.createElement(K,(0,r.Z)({},j,{className:w,href:N,onClick:this.handleClick}),a)},n}(i.Component);E.handledProps=["as","centered","children","className","color","content","description","extra","fluid","header","href","image","link","meta","onClick","raised"],E.propTypes={},E.Content=g,E.Description=h,E.Group=C,E.Header=Z,E.Meta=x}},function(e){e.O(0,[774,482,714,469,509,888,179],(function(){return n=75557,e(e.s=n);var n}));var n=e.O();_N_E=n}]);