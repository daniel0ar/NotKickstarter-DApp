(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[910],{58731:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/campaigns/details",function(){return r(49947)}])},49947:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return T}});var n=r(47568),a=r(51438),s=r(52951),i=r(88029),o=r(60460),u=r(34051),c=r.n(u),h=r(85893),d=r(67294),l=r(63762),p=r(18005),m=r(80967),f=r(83544),v=r(14148),Z=r(1508),g=r(4111),x=r(14924),b=r(75424),w=r(60416),j=r(68156),C=r(96215),k=function(e){(0,i.Z)(r,e);var t=(0,o.Z)(r);function r(){var e;(0,a.Z)(this,r),e=t.apply(this,arguments),(0,x.Z)((0,g.Z)(e),"state",{value:"",errorMessage:"",loading:!1});var s=(0,g.Z)(e);return(0,x.Z)((0,g.Z)(e),"onSubmit",function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=(0,v.Z)(s.props.address),s.setState({loading:!0,errorMessage:""}),e.prev=3,e.next=6,Z.Z.eth.getAccounts();case 6:return n=e.sent,e.next=9,r.methods.contribute().send({from:n[0],value:Z.Z.utils.toWei(s.state.value,"ether")});case 9:C.Router.replaceRoute("/campaigns/".concat(s.props.address)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),s.setState({errorMessage:e.t0.message});case 15:s.setState({loading:!1,value:""});case 16:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}()),e}return(0,s.Z)(r,[{key:"render",value:function(){var e=this;return(0,h.jsxs)(b.Z,{onSubmit:this.onSubmit,error:!!this.state.errorMessage,children:[(0,h.jsxs)(b.Z.Field,{children:[(0,h.jsx)("label",{children:"Amount to contribute"}),(0,h.jsx)(w.Z,{value:this.state.value,onChange:function(t){return e.setState({value:t.target.value})},label:"ETH",labelPosition:"right"})]}),(0,h.jsx)(m.Z,{primary:!0,loading:this.state.loading,children:"Contribute!"}),(0,h.jsx)(j.Z,{error:!0,header:"Something went wrong!",content:this.state.errorMessage})]})}}]),r}(d.Component),y=k,_=function(e){(0,i.Z)(r,e);var t=(0,o.Z)(r);function r(){return(0,a.Z)(this,r),t.apply(this,arguments)}return(0,s.Z)(r,[{key:"renderCards",value:function(){var e=this.props,t=e.balance,r=e.manager,n=e.minimumContribution,a=e.requestsCount,s=e.approversCount,i=[{header:Z.Z.utils.fromWei(t,"ether")+" ETH",description:"The amount in Ether that this campaign has raised",meta:"Total Raised"},{header:r,description:"The creator of the campaign who can create requests",meta:"Address of manager",style:{overflowWrap:"break-word"}},{header:Z.Z.utils.fromWei(n,"ether")+" ETH",description:"The minimum ammount that the owner of the campaign has set for a contribution",meta:"Minimum Contribution"},{header:a,description:"The total of requests that the campaign owner has created",meta:"Requests"},{header:s,description:"The total number of people who have donated to tgis campaign",meta:"Contributors"}];return(0,h.jsx)(l.Z.Group,{items:i})}},{key:"render",value:function(){return(0,h.jsxs)(f.Z,{children:[(0,h.jsx)(C.Link,{route:"/",children:(0,h.jsx)("a",{children:"< Go Back"})}),(0,h.jsx)("h3",{children:"Campaign Details"}),(0,h.jsx)(p.Z,{children:(0,h.jsxs)(p.Z.Row,{children:[(0,h.jsxs)(p.Z.Column,{width:12,children:[this.renderCards(),(0,h.jsx)("br",{}),(0,h.jsx)(C.Link,{route:"/campaigns/".concat(this.props.address,"/requests"),children:(0,h.jsx)("a",{children:(0,h.jsx)(m.Z,{primary:!0,children:"View Requests"})})})]}),(0,h.jsx)(p.Z.Column,{width:4,children:(0,h.jsx)(y,{address:this.props.address})})]})})]})}}],[{key:"getInitialProps",value:function(e){return(0,n.Z)(c().mark((function t(){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=(0,v.Z)(e.query.address),t.next=3,r.methods.getSummary().call();case 3:return n=t.sent,t.abrupt("return",{address:e.query.address,minimumContribution:n[0],balance:n[1],requestsCount:n[2],approversCount:n[3],manager:n[4]});case 5:case"end":return t.stop()}}),t)})))()}}]),r}(d.Component),T=_}},function(e){e.O(0,[774,482,714,469,578,299,937,888,179],(function(){return t=58731,e(e.s=t);var t}));var t=e.O();_N_E=t}]);