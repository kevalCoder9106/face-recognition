(this["webpackJsonpface-recognition"]=this["webpackJsonpface-recognition"]||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),i=n(29),o=n.n(i),c=(n(35),n(2)),r=n(3),l=n(5),u=n(4),h=(n(36),n(37),n(0)),d=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).updateUsername=function(e){a.setState({username:e.target.value})},a.updatePassword=function(e){a.setState({password:e.target.value})},a.onSubmit=function(){fetch("http://localhost:200/login",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:a.state.username,password:a.state.password})}).then((function(e){return e.json()})).then((function(e){"success"===e?a.props.onMasterRouteChange("home"):alert(e)}))},a.state={username:"",password:""},a}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props.onMasterRouteChange;return Object(h.jsx)("div",{className:"login-main main-container",children:Object(h.jsxs)("div",{className:"login-box box-container",children:[Object(h.jsx)("h1",{className:"title",children:"LOGIN"}),Object(h.jsxs)("div",{className:"field",children:[Object(h.jsx)("input",{id:"username",type:"tex",placeholder:"Username",className:"input-field",onChange:this.updateUsername}),Object(h.jsx)("input",{id:"password",type:"password",placeholder:"Password",className:"input-field",onChange:this.updatePassword})]}),Object(h.jsx)("button",{className:"login-button",onClick:this.onSubmit,children:"Login"}),Object(h.jsx)("div",{className:"div-line"}),Object(h.jsxs)("div",{className:"login-page-links",children:[Object(h.jsx)("a",{className:"normal-link",onClick:function(){return e("forgotPass")},children:"Forgot password ?"}),Object(h.jsx)("a",{className:"normal-link",onClick:function(){return e("register")},children:"New user ?"})]})]})})}}]),n}(s.a.Component),j=(n(39),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).updateEmail=function(e){a.setState({email:e.target.value})},a.updateUsername=function(e){a.setState({username:e.target.value})},a.updatePassword=function(e){a.setState({password:e.target.value})},a.onSubmit=function(){fetch("http://localhost:200/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:a.state.username,email:a.state.email,password:a.state.password})}).then((function(e){return e.json()})).then((function(e){"success"===e?a.props.onMasterRouteChange("login"):alert("Cant register, try again")}))},a.state={email:"",username:"",password:""},a}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props.onMasterRouteChange;return Object(h.jsx)("div",{className:"reg-main main-container",children:Object(h.jsxs)("div",{className:"reg-box box-container",children:[Object(h.jsx)("div",{className:"title",children:"REGISTER"}),Object(h.jsxs)("div",{className:"field",children:[Object(h.jsx)("input",{type:"tex",placeholder:"Email",className:"input-field",onChange:this.updateEmail}),Object(h.jsx)("input",{type:"tex",placeholder:"Username",className:"input-field",onChange:this.updateUsername}),Object(h.jsx)("input",{type:"password",placeholder:"Password",className:"input-field",onChange:this.updatePassword})]}),Object(h.jsx)("button",{className:"reg-button",onClick:this.onSubmit,children:"Register"}),Object(h.jsx)("div",{className:"div-line"}),Object(h.jsx)("div",{className:"reg-page-links",children:Object(h.jsx)("a",{className:"normal-link",onClick:function(){return e("login")},children:"already have an account ?"})})]})})}}]),n}(s.a.Component)),b=(n(40),function(e){var t=e.onMasterRouteChange;return Object(h.jsx)("div",{className:"fp-main main-container",children:Object(h.jsxs)("div",{className:"fp-box box-container",children:[Object(h.jsx)("div",{className:"field",children:Object(h.jsx)("input",{type:"tex",placeholder:"Username",className:"input-field"})}),Object(h.jsx)("button",{className:"fp-button",children:"Find"}),Object(h.jsx)("div",{className:"div-line"}),Object(h.jsx)("div",{className:"fp-page-links",children:Object(h.jsx)("a",{onClick:function(){return t("login")},children:"back to login"})})]})})}),m=(n(41),n(42),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).toggleMenu=function(){var e=document.getElementsByClassName("navbar-links")[0],t=document.getElementsByTagName("nav")[0];e.classList.toggle("active"),t.classList.toggle("active")},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props,t=e.changeRoute,n=e.onMasterRouteChange;return Object(h.jsx)("div",{className:"home-nav",children:Object(h.jsxs)("nav",{children:[Object(h.jsx)("div",{className:"title",children:"Faceiotic"}),Object(h.jsxs)("a",{onClick:this.toggleMenu,className:"toggle-button",children:[Object(h.jsx)("span",{className:"bar"}),Object(h.jsx)("span",{className:"bar"}),Object(h.jsx)("span",{className:"bar"})]}),Object(h.jsx)("div",{className:"navbar-links",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)("a",{onClick:function(){return t("desc")},children:"Description"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{onClick:function(){return t("form")},children:"Face Recognition"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{onClick:function(){return n("login")},children:"Sign out"})})]})})]})})}}]),n}(s.a.Component)),g=(n(43),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props.changeRoute;return Object(h.jsxs)("div",{className:"desc-main",children:[Object(h.jsx)("h1",{children:"Welcome,"}),Object(h.jsxs)("h3",{children:["in this webapp you can add picture throgh a link and the AI will detect human face in it. ",Object(h.jsx)("a",{href:"/#",onClick:function(){return e("form")},children:"Try out !"})]})]})}}]),n}(s.a.Component)),p=(n(44),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props,t=e.onFindButton,n=e.onImageLinkChange;return Object(h.jsxs)("div",{className:"hf-main",children:[Object(h.jsx)("input",{type:"tex",placeholder:"Image Link",className:"input-field",onChange:n}),Object(h.jsx)("button",{onClick:t,children:"Find"})]})}}]),n}(s.a.Component)),f=(n(45),function(e){var t=e.imageLink,n=e.box;return Object(h.jsx)("div",{className:"image-container",children:Object(h.jsxs)("div",{className:"image-child-container",children:[Object(h.jsx)("img",{id:"inputImage",alt:"",src:t}),Object(h.jsx)("div",{className:"bounding-box",style:{top:n.topRow,right:n.rightCol,bottom:n.bottomRow,left:n.leftCol}})]})})}),O=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).changeRoute=function(e){a.setState({route:e})},a.state={route:""},a}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props,t=e.onMasterRouteChange,n=e.onFindButton,a=e.onImageLinkChange,s=e.imageLink,i=e.box;return Object(h.jsxs)("div",{className:"home-main",children:[Object(h.jsx)(m,{changeRoute:this.changeRoute,onMasterRouteChange:t}),"form"===this.state.route?Object(h.jsxs)("div",{children:[Object(h.jsx)(p,{onFindButton:n,onImageLinkChange:a}),Object(h.jsx)(f,{imageLink:s,box:i})]}):(this.state.route,Object(h.jsx)(g,{changeRoute:this.changeRoute}))]})}}]),n}(s.a.Component),x=n(30),v=new(n.n(x).a.App)({apiKey:"43c8acfc16d44abd8913ceb2884e0422"}),C=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).onMasterRouteChange=function(e){a.setState({route:e})},a.onImageLinkChange=function(e){a.setState({imageLink:e.target.value})},a.calculateFaceData=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,n=document.getElementById("inputImage"),a=Number(n.width),s=Number(n.height);return{leftCol:t.left_col*a+10,topRow:t.top_row*s-10,rightCol:a-t.right_col*a,bottomRow:s-t.bottom_row*s}},a.displayFaceBox=function(e){console.log(e),a.setState({box:e})},a.onFindButton=function(){v.models.predict("a403429f2ddf4b49b307e318f00e528b",a.state.imageLink).then((function(e){return a.displayFaceBox(a.calculateFaceData(e))})).catch((function(e){return alert(e)}))},a.state={route:"login",imageLink:"",box:{}},a}return Object(r.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{children:"login"===this.state.route?Object(h.jsx)(d,{onMasterRouteChange:this.onMasterRouteChange}):"register"===this.state.route?Object(h.jsx)(j,{onMasterRouteChange:this.onMasterRouteChange}):"forgotPass"===this.state.route?Object(h.jsx)(b,{onMasterRouteChange:this.onMasterRouteChange}):"home"===this.state.route?Object(h.jsx)(O,{onMasterRouteChange:this.onMasterRouteChange,onFindButton:this.onFindButton,onImageLinkChange:this.onImageLinkChange,imageLink:this.state.imageLink,box:this.state.box}):Object(h.jsx)(d,{onMasterRouteChange:this.onMasterRouteChange})})}}]),n}(s.a.Component),N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,86)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),s(e),i(e),o(e)}))};o.a.render(Object(h.jsxs)(s.a.StrictMode,{children:[Object(h.jsx)(C,{}),Object(h.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Monoton&display=swap",rel:"stylesheet"}),Object(h.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap",rel:"stylesheet"}),Object(h.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})]}),document.getElementById("root")),N()}},[[85,1,2]]]);
//# sourceMappingURL=main.b0aa9e5a.chunk.js.map