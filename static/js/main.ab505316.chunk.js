(this["webpackJsonpactions-demo"]=this["webpackJsonpactions-demo"]||[]).push([[0],{195:function(e,t,n){},196:function(e,t,n){},340:function(e,t,n){},341:function(e,t,n){"use strict";n.r(t);var a=n(8),r=n(0),s=n.n(r),c=n(30),i=n.n(c),o=(n(195),n(46)),l=n(47),j=n(49),d=n(48),u=(n(196),n(92)),m=n(32),b=n(343),h=n(350),O=n(75),p=O.a.SubMenu,f=b.a.Sider,x=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)(f,{width:200,className:"site-layout-background",children:Object(a.jsx)(O.a,{mode:"inline",defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],style:{height:"100%",borderRight:0},children:Object(a.jsx)(p,{icon:Object(a.jsx)(h.a,{}),title:"\u7cfb\u7edf\u7ba1\u7406",children:Object(a.jsx)(O.a.Item,{children:Object(a.jsx)(u.b,{to:"/employee",children:"\u4eba\u5458\u4fe1\u606f"})},"1")},"sub1")})})}}]),n}(r.Component),g=n(348),y=n(349),v=n(60),k=n(344),w=[{title:"Name",dataIndex:"name",key:"name",render:function(e){return Object(a.jsx)("div",{children:e})}},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"},{title:"Tags",key:"tags",dataIndex:"tags",render:function(e){return Object(a.jsx)(a.Fragment,{children:e.map((function(e){var t=e.length>5?"geekblue":"green";return"loser"===e&&(t="volcano"),Object(a.jsx)(g.a,{color:t,children:e.toUpperCase()},e)}))})}},{title:"Action",key:"action",render:function(e,t){return Object(a.jsxs)(y.b,{size:"middle",children:[Object(a.jsxs)(v.a,{type:"text",children:["Invite ",t.name]}),Object(a.jsx)(v.a,{type:"text",children:"Delete"})]})}}],F=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={dataArr:[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["loser"]},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]}]},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)(k.a,{columns:w,dataSource:this.state.dataArr})})}}]),n}(r.Component),N=n(77),P=n(345),I=n(346),C=n(99),S=n(177),L=n.n(S),R=n(347),A=L.a.create({baseURL:"/api",timeout:6e3});A.interceptors.request.use((function(e){return e})),A.interceptors.response.use((function(e){return e}),(function(e){switch(e.response.status){case 401:if(e.config.customErr&&401===e.config.customErr.code)return Promise.reject(e);window.location.href="/401";break;case 403:break;case 409:if(e.config.customErr&&409===e.config.customErr.code)return Promise.reject(e);R.b.error(e.response.data.message),setTimeout((function(){window.location.reload()}),2e3);break;default:return R.b.error(e.response.data.message),Promise.reject(e)}}));var T=A,q={base:{list:function(e){return T.get("/todos/1",{params:e})}}},E={labelCol:{span:4},wrapperCol:{span:20}},J={wrapperCol:{offset:4,span:20}},U=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).onFinish=function(e){console.log("Success:",e)},a.onFinishFailed=function(e){console.log("Failed:",e)},a.state={list:[]},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;q.base.list({a:1}).then((function(t){console.log(t),e.setState({list:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(a.jsxs)(P.a,Object(N.a)(Object(N.a)({},E),{},{name:"basic",initialValues:{remember:!0},onFinish:this.onFinish,onFinishFailed:this.onFinishFailed,children:[Object(a.jsx)(P.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(a.jsx)(I.a,{})}),Object(a.jsx)(P.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(a.jsx)(I.a.Password,{})}),Object(a.jsx)(P.a.Item,Object(N.a)(Object(N.a)({},J),{},{name:"remember",valuePropName:"checked",children:Object(a.jsx)(C.a,{children:"Remember me"})})),Object(a.jsx)(P.a.Item,Object(N.a)(Object(N.a)({},J),{},{children:Object(a.jsx)(v.a,{type:"primary",htmlType:"submit",children:"Submit"})}))]}))}}]),n}(r.Component),B=b.a.Header,D=b.a.Content,M=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(b.a,{children:[Object(a.jsx)(B,{className:"header",children:Object(a.jsx)("div",{className:"logo"})}),Object(a.jsxs)(b.a,{children:[Object(a.jsx)(x,{}),Object(a.jsx)(b.a,{style:{padding:"24px"},children:Object(a.jsx)(D,{className:"site-layout-background",style:{padding:24,margin:0,minHeight:280},children:Object(a.jsxs)(m.c,{children:[Object(a.jsx)(m.a,{path:"/employee/add",component:U}),Object(a.jsx)(m.a,{path:"/employee",component:F})]})})})]})]})})}}]),n}(r.Component),H=(n(340),n(351)),K=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).formRef=s.a.createRef(),a.onFinish=function(e){a.props.history.push("/"),console.log("Received values of form: ",e)},a.state={form:{remember:!0,username:""},rules:{name:[{required:!0,message:"Please input your Username!"}],pwd:[{required:!0,message:"Please input your Password!"}]}},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"login-page",children:Object(a.jsxs)("div",{className:"login-form",children:[Object(a.jsx)("p",{className:"login-title",children:"XX\u7cfb\u7edf"}),Object(a.jsxs)(P.a,{ref:this.formRef,name:"normal_login",initialValues:this.state.form,onFinish:this.onFinish,children:[Object(a.jsx)(P.a.Item,{name:"username",rules:this.state.rules.name,children:Object(a.jsx)(I.a,{prefix:Object(a.jsx)(h.a,{className:"site-form-item-icon"}),placeholder:"Username"})}),Object(a.jsx)(P.a.Item,{name:"password",rules:this.state.rules.pwd,children:Object(a.jsx)(I.a,{prefix:Object(a.jsx)(H.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})}),Object(a.jsx)(P.a.Item,{children:Object(a.jsx)(P.a.Item,{name:"remember",valuePropName:"checked",noStyle:!0,children:Object(a.jsx)(C.a,{children:"Remember me"})})}),Object(a.jsx)(P.a.Item,{children:Object(a.jsx)(v.a,{type:"primary",htmlType:"submit",className:"login-form-button",children:"Log in"})})]})]})})}}]),n}(r.Component),V=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)(u.a,{children:Object(a.jsxs)(m.c,{children:[Object(a.jsx)(m.a,{path:"/login",component:K}),Object(a.jsx)(m.a,{path:"/",component:M})]})})}}]),n}(r.Component),X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,352)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))};i.a.render(Object(a.jsx)(s.a.Fragment,{children:Object(a.jsx)(V,{})}),document.getElementById("root")),X()}},[[341,1,2]]]);
//# sourceMappingURL=main.ab505316.chunk.js.map