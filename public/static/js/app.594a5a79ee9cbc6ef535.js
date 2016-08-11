webpackJsonp([2,0],[function(t,e,n){"use strict";function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e["default"]=t,e}function a(t){return t&&t.__esModule?t:{"default":t}}var i=n(1),u=a(i),s=n(83),l=n(161),r=o(l);s.Router.start(u["default"].extend(r),"#app")},,function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),i=o(a),u=n(171),s=o(u),l=n(172),r=(o(l),n(72)),c=o(r),d=n(70),f=o(d),p=n(75),v=o(p),_=n(78),h=o(_);i["default"].use(s["default"]),e["default"]=new s["default"].Store({modules:{auth:c["default"],account:f["default"],notification:v["default"],post:h["default"]},strict:!1,plugins:[]})},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.FETCH_ACCOUNT="FETCH_ACCOUNT",e.CLEAR_ACCOUNT="CLEAR_ACCOUNT",e.CHECK_AUTHENTICATION="CHECK_AUTHENTICATION",e.LOGOUT="LOGOUT",e.LOGIN="LOGIN",e.ADD_NOTIFICATION="ADD_NOTIFICATION",e.DELETE_NOTIFICATION="DELETE_NOTIFICATION",e.FETCH_POSTS="FETCH_POSTS",e.CLEAR_POST="CLEAR_POST"},,,function(t,e,n){"use strict";function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e["default"]=t,e}Object.defineProperty(e,"__esModule",{value:!0}),e.deleteNotification=e.addNotification=void 0;var a=n(3),i=o(a);e.addNotification=function(t,e){var n=t.dispatch;n(i.ADD_NOTIFICATION,e)},e.deleteNotification=function(t,e){var n=t.dispatch;n(i.DELETE_NOTIFICATION,e)}},,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={page:function(t,e){return n(175)("./"+t+"/"+e+"/"+e+".vue")},layout:function(t){return n(174)("./"+t+"/"+t+".vue")},component:function(t){return n(173)("./"+t+"/"+t+".vue")}}},,,,,,,function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(26),i=o(a),u=n(68),s=o(u),l=n(69),r=o(l);e["default"]={all:i["default"],destroy:s["default"],store:r["default"]}},,,,,,,function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(66),i=o(a),u=n(67),s=o(u);e["default"]={login:i["default"],logout:s["default"]}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),i=o(a),u=n(2),s=o(u),l=n(48),r=n(6),c=n(82),d=o(c),f=n(81),p=o(f),v=function(t){var e=t.data,n=p["default"].fetch(e.pagination),o=d["default"].fetchCollection(e.data);(0,l.fetchPosts)(s["default"],o,n)},_=function(){(0,r.addNotification)(s["default"],{type:"danger",message:"Fetching posts failed!"})};e["default"]=function(){var t=arguments.length<=0||void 0===arguments[0]?1:arguments[0],e=arguments.length<=1||void 0===arguments[1]?5:arguments[1];i["default"].http.get("posts?page="+t+"&limit="+e).then(v,_)}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(19),i=o(a),u=n(20),s=o(u),l=function(){function t(){(0,i["default"])(this,t)}return(0,s["default"])(t,null,[{key:"fetchCollection",value:function(t){var e=this,n=[];return t.forEach(function(t){n.push(e.fetch(t))}),n}},{key:"sendCollection",value:function(t){var e=this,n=[];return t.forEach(function(t){n.push(e.send(t))}),n}}]),t}();e["default"]=l},,,,,,,,,,,,,,,,,function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(65),i=o(a);e["default"]={find:i["default"]}},function(t,e,n){"use strict";function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e["default"]=t,e}Object.defineProperty(e,"__esModule",{value:!0}),e.clearAccount=e.fetchAccount=void 0;var a=n(3),i=o(a);e.fetchAccount=function(t,e){var n=t.dispatch;n(i.FETCH_ACCOUNT,e)},e.clearAccount=function(t){var e=t.dispatch;e(i.CLEAR_ACCOUNT)}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.state={id:null,email:null,name:null}},function(t,e,n){"use strict";function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e["default"]=t,e}Object.defineProperty(e,"__esModule",{value:!0}),e.checkAuthentication=e.logout=e.login=void 0;var a=n(3),i=o(a);e.login=function(t,e){var n=t.dispatch;n(i.LOGIN,e)},e.logout=function(t){var e=t.dispatch;e(i.LOGOUT)},e.checkAuthentication=function(t){var e=t.dispatch;e(i.CHECK_AUTHENTICATION)}},function(t,e,n){"use strict";function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e["default"]=t,e}Object.defineProperty(e,"__esModule",{value:!0}),e.clearPost=e.fetchPosts=void 0;var a=n(3),i=o(a);e.fetchPosts=function(t,e,n){var o=t.dispatch;o(i.FETCH_POSTS,e,n)},e.clearPost=function(t){var e=t.dispatch;e(i.CLEAR_POST)}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.state={all:[],pagination:{totalCount:0,totalPages:0,currentPage:1,limit:5}}},,,,,,,,,,,,,,,function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.redirects=e.routes=void 0;var a=n(11),i=o(a);e.routes={"/account":{name:"account.show",component:i["default"].page("account","show"),auth:!0},"/post":{name:"post.index",component:i["default"].page("post","index"),auth:!0},"/post/create":{name:"post.create",component:i["default"].page("post","create"),auth:!0},"/login":{name:"login.index",component:i["default"].page("login","index"),guest:!0}},e.redirects={"/":"/account"}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),i=o(a),u=n(80),s=o(u),l=n(2),r=o(l),c=n(45),d=n(6),f=function(t){var e=t.data,n=s["default"].fetch(e);(0,c.fetchAccount)(r["default"],n)},p=function(){(0,d.addNotification)(r["default"],{type:"danger",message:"Fetching account failed!"})};e["default"]=function(){i["default"].http.get("account").then(f,p)}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),i=o(a),u=n(44),s=o(u),l=n(18),r=o(l),c=n(2),d=o(c),f=n(6),p=n(47),v=function(t){var e=t.data;(0,p.login)(d["default"],e.token),r["default"].all(),s["default"].find(),(0,f.addNotification)(d["default"],{type:"success",message:"Login successful!"}),window.router.go({name:"post.index"})},_=function(){(0,f.addNotification)(d["default"],{type:"danger",message:"Login failed!"})};e["default"]=function(t){i["default"].http.post("auth",t).then(v,_)}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),i=o(a),u=n(6),s=n(47),l=n(45),r=n(48);e["default"]=function(){(0,s.logout)(i["default"]),(0,l.clearAccount)(i["default"]),(0,r.clearPost)(i["default"]),(0,u.addNotification)(i["default"],{type:"success",message:"Logout successful!"}),window.router.go({name:"login.index"})}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),i=o(a),u=n(26),s=o(u),l=n(2),r=o(l),c=n(6),d=function(){(0,s["default"])(),(0,c.addNotification)(r["default"],{type:"success",message:"The post has been deleted!"}),window.router.go({name:"post.index"})},f=function(){(0,c.addNotification)(r["default"],{type:"danger",message:"Deleting post failed!"})};e["default"]=function(t){i["default"].http["delete"]("posts/"+t).then(d,f)}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),i=o(a),u=n(26),s=o(u),l=n(2),r=o(l),c=n(6),d=function(){(0,s["default"])(),(0,c.addNotification)(r["default"],{type:"success",message:"The post has been created!"}),window.router.go({name:"post.index"})},f=function(){(0,c.addNotification)(r["default"],{type:"danger",message:"Saving post failed!"})};e["default"]=function(t){i["default"].http.post("posts",t).then(d,f)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(46),a=n(71);e["default"]={state:o.state,mutations:a.mutations}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.mutations=void 0;var a,i=n(21),u=o(i),s=n(3),l=n(46);e.mutations=(a={},(0,u["default"])(a,s.FETCH_ACCOUNT,function(t,e){t.id=e.id,t.email=e.email,t.name=e.name}),(0,u["default"])(a,s.CLEAR_ACCOUNT,function(t){t.id=l.state.id,t.email=l.state.email,t.name=l.state.name}),a)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(74),a=n(73);e["default"]={state:o.state,mutations:a.mutations}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.mutations=void 0;var a,i=n(21),u=o(i),s=n(1),l=o(s),r=n(3);e.mutations=(a={},(0,u["default"])(a,r.CHECK_AUTHENTICATION,function(t){t.authenticated=!!localStorage.getItem("id_token"),t.authenticated&&(l["default"].http.headers.common.Authorization="Bearer "+localStorage.getItem("id_token"))}),(0,u["default"])(a,r.LOGIN,function(t,e){t.authenticated=!0,localStorage.setItem("id_token",e),l["default"].http.headers.common.Authorization="Bearer "+e}),(0,u["default"])(a,r.LOGOUT,function(t){t.authenticated=!1,localStorage.removeItem("id_token"),l["default"].http.headers.common.Authorization=null}),a)},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.state={authenticated:!1}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(77),a=n(76);e["default"]={state:o.state,mutations:a.mutations}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.mutations=void 0;var a,i=n(21),u=o(i),s=n(149),l=o(s),r=n(3);e.mutations=(a={},(0,u["default"])(a,r.ADD_NOTIFICATION,function(t,e){e.id=l["default"].v4(),t.all.push(e)}),(0,u["default"])(a,r.DELETE_NOTIFICATION,function(t,e){t.all=t.all.filter(function(t){return t.id!==e?t:void 0})}),a)},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.state={all:[]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(49),a=n(79);e["default"]={state:o.state,mutations:a.mutations}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.mutations=void 0;var a,i=n(21),u=o(i),s=n(49),l=n(3);e.mutations=(a={},(0,u["default"])(a,l.FETCH_POSTS,function(t,e,n){t.all=e,t.pagination=n}),(0,u["default"])(a,l.CLEAR_POST,function(t){t.all=s.state.all,t.pagination=s.state.pagination}),a)},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(28),i=o(a),u=n(19),s=o(u),l=n(20),r=o(l),c=n(30),d=o(c),f=n(29),p=o(f),v=n(27),_=o(v),h=function(t){function e(){return(0,s["default"])(this,e),(0,d["default"])(this,(0,i["default"])(e).apply(this,arguments))}return(0,p["default"])(e,t),(0,r["default"])(e,null,[{key:"fetch",value:function(t){return{id:t.id,email:t.email,name:t.name}}},{key:"send",value:function(t){return{id:t.id,email:t.email,name:t.name}}}]),e}(_["default"]);e["default"]=h},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(28),i=o(a),u=n(19),s=o(u),l=n(20),r=o(l),c=n(30),d=o(c),f=n(29),p=o(f),v=n(27),_=o(v),h=function(t){function e(){return(0,s["default"])(this,e),(0,d["default"])(this,(0,i["default"])(e).apply(this,arguments))}return(0,p["default"])(e,t),(0,r["default"])(e,null,[{key:"fetch",value:function(t){return{totalCount:t.total_count,totalPages:t.total_pages,currentPage:t.current_page,limit:t.limit}}},{key:"send",value:function(t){return{total_count:t.totalCount,total_pages:t.totalPages,current_page:t.currentPage,limit:t.limit}}}]),e}(_["default"]);e["default"]=h},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(28),i=o(a),u=n(19),s=o(u),l=n(20),r=o(l),c=n(30),d=o(c),f=n(29),p=o(f),v=n(27),_=o(v),h=function(t){function e(){return(0,s["default"])(this,e),(0,d["default"])(this,(0,i["default"])(e).apply(this,arguments))}return(0,p["default"])(e,t),(0,r["default"])(e,null,[{key:"fetch",value:function(t){return{id:t.id,title:t.title,content:t.content}}},{key:"send",value:function(t){return{id:t.id,title:t.title,content:t.content}}}]),e}(_["default"]);e["default"]=h},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.Router=void 0;var a=n(1),i=o(a),u=n(168),s=o(u),l=n(25),r=o(l),c=n(170),d=o(c),f=n(2),p=o(f),v=n(169),_=o(v),h=n(64),m=n(147),g=o(m);i["default"].config.debug=!1,i["default"].use(s["default"]),i["default"].http.headers.common.Accept="application/json",i["default"].http.options.root="api/v1",i["default"].http.interceptors.push(function(t,e){e(function(t){401===t.status&&r["default"].logout()})}),p["default"].dispatch("CHECK_AUTHENTICATION"),i["default"].use(_["default"]);var y=new _["default"]({hashbang:!1});y.map(h.routes),y.redirect(h.redirects),y.beforeEach(function(t){t.to.auth&&!p["default"].state.auth.authenticated&&t.redirect({name:"login.index"}),t.to.guest&&p["default"].state.auth.authenticated&&t.redirect({name:"account.show"}),t.next()}),d["default"].sync(p["default"],y),window.router=y,window.$=window.jQuery=g["default"],n(97),n(145),n(146),e.Router=y},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{style:{type:String,required:!1,"default":function(){return"primary"}},message:{type:String,required:!0},id:{type:String,required:!0},closeFunction:{type:Function,required:!0}},methods:{startTimer:function(){var t=this;setTimeout(function(){t.closeFunction(t.id)},5e3)}},computed:{classNames:function n(){var n=["alert"];return n.push("alert-"+this.style),n}},ready:function(){this.startTimer()}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{switchFunction:{type:Function,required:!0},pagination:{type:Object,required:!0}},computed:{previousDisabled:function(){return this.pagination.currentPage<=1},nextDisabled:function(){return this.pagination.currentPage>=this.pagination.totalPages}},methods:{goToPage:function(t){this.switchFunction(t,this.pagination.limit)},previousPage:function(){this.previousDisabled||this.goToPage(this.pagination.currentPage-1)},nextPage:function(){this.nextDisabled||this.goToPage(this.pagination.currentPage+1)}}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(25),i=o(a);e["default"]={methods:{logout:function(){i["default"].logout()}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(11),i=o(a);e["default"]={vuex:{getters:{account:function(t){var e=t.account;return e}}},components:{VLayout:i["default"].layout("default")}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(25),i=o(a),u=n(11),s=o(u);e["default"]={data:function(){return{user:{email:null,password:null}}},methods:{login:function(){i["default"].login(this.user)}},components:{VLayout:s["default"].layout("minimal")}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(18),i=o(a),u=n(11),s=o(u);e["default"]={data:function(){return{post:{title:"",content:""}}},methods:{store:function(){i["default"].store(this.post)}},components:{VLayout:s["default"].layout("default")}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(11),i=o(a),u=n(18),s=o(u);e["default"]={vuex:{getters:{posts:function(t){var e=t.post;return e.all},pagination:function(t){var e=t.post;return e.pagination}}},computed:{limit:{get:function(){return this.pagination.limit},set:function(t){s["default"].all(1,t)}}},methods:{all:function(t,e){return s["default"].all(t,e)},destroy:function(t){return s["default"].destroy(t)}},components:{VLayout:i["default"].layout("default"),VPagination:i["default"].component("pagination")}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),i=o(a),u=n(6),s=n(11),l=o(s),r=n(18),c=o(r),d=n(44),f=o(d);e["default"]={store:i["default"],vuex:{getters:{authenticated:function(t){var e=t.auth;return e.authenticated},notifications:function(t){var e=t.notification;return e.all}},actions:{deleteNotification:u.deleteNotification}},ready:function(){this.authenticated&&(c["default"].all(),f["default"].find())},components:{alert:l["default"].component("alert")}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},,,,function(t,e){t.exports=' <div> <router-view></router-view> <div class=notification-wrapper> <div class=container> <div class=row> <div class="col-md-3 pull-right"> <alert v-for="notification in notifications" :style=notification.type :message=notification.message :id=notification.id :close-function=deleteNotification></alert> </div> </div> </div> </div> </div> '},function(t,e){t.exports="<div :class=classNames> <button type=button class=close @click.prevent=closeFunction(id)> <span aria-hidden=true>&times;</span> </button> {{message}} </div> "},function(t,e){t.exports='<nav> <ul class="pagination no-margin"> <li :class="{\'disabled\' : this.previousDisabled }"> <a href=# @click.prevent=previousPage> <span>&laquo;</span> </a> </li> <li v-for="page in pagination.totalPages" :class="{\'active\': $index + 1 === pagination.currentPage}"> <a href=# @click.prevent="goToPage($index + 1)">{{$index + 1}}</a> </li> <li :class="{\'disabled\' : this.nextDisabled }"> <a href=# @click.prevent=nextPage> <span>&raquo;</span> </a> </li> </ul> </nav> '},function(t,e){t.exports='<div> <nav class="navbar navbar-default"> <div class=container> <div class=navbar-header> <button type=button class=navbar-toggle data-toggle=collapse data-target=#navbar> <span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span> </button> <a class=navbar-brand v-link="{name: \'post.index\'}">Login Example</a> </div> <div class="collapse navbar-collapse" id=navbar> <ul class="nav navbar-nav"> <li class=nav-item> <a class=nav-link v-link="{ name: \'post.index\' }">Posts</a> </li> <li class=nav-item> <a class=nav-link v-link="{ name: \'account.show\' }">Account</a> </li> </ul> <ul class="nav navbar-nav navbar-right"> <li><a href=# @click.prevent=logout><i class="glyphicon glyphicon-log-out"></i></a></li> </ul> </div> </div> </nav> <div class=container> <div class=row> <div class=col-md-12> <slot></slot> </div> </div> </div> </div> '},function(t,e){t.exports='<div class=container> <div class=row> <div class="col-md-6 col-md-offset-3"> <slot></slot> </div> </div> </div> '},function(t,e){t.exports='<v-layout> <div class="panel panel-primary"> <div class=panel-heading> <h1 class=panel-title> My Account </h1> </div> <div class=panel-body> <table class="table table-striped"> <thead> <tr> <th> Name </th> <th> Email </th> </tr> </thead> <tbody> <tr> <td> {{account.name}} </td> <td> {{account.email}} </td> </tr> </tbody> </table> </div> </div> </v-layout> '},function(t,e){t.exports='<v-layout> <div class="panel panel-primary"> <div class=panel-heading> <h1 class=panel-title> Login </h1> </div> <div class=panel-body> <form @submit.prevent=login> <div class=form-group> <div class=input-group> <div class=input-group-addon> <i class="glyphicon glyphicon-envelope"></i> </div> <input v-model=user.email type=email placeholder=Email class=form-control> </div> </div> <div class=form-group> <div class=input-group> <div class=input-group-addon> <i class="glyphicon glyphicon-lock"></i> </div> <input v-model=user.password type=password placeholder=Password class=form-control> </div> </div> <div class=form-group> <button class="btn btn-primary"> Login </button> </div> </form> </div> </div> </v-layout> '},function(t,e){t.exports='<v-layout> <div class="panel panel-primary"> <div class=panel-heading> <h1 class=panel-title> Create Post </h1> </div> <div class=panel-body> <form class=form-horizontal @submit.prevent=store> <div class=form-group> <label for=title class="col-sm-2 control-label"> Title </label> <div class=col-sm-10> <input id=title class=form-control placeholder=Title v-model=post.title type=text> </div> </div> <div class=form-group> <label for=content class="col-sm-2 control-label"> Content </label> <div class=col-sm-10> <textarea id=content class=form-control placeholder=Content v-model=post.content></textarea> </div> </div> <div class=form-group> <div class="col-sm-offset-2 col-sm-10"> <button class="btn btn-primary"> <span class="glyphicon glyphicon-floppy-save" aria-hidden=true></span> Save </button> <a class="btn btn-danger" v-link="{name: \'post.index\'}"> <span class="glyphicon glyphicon-remove" aria-hidden=true></span> Cancel </a> </div> </div> </form> </div> </div> </v-layout> '},function(t,e){t.exports='<v-layout> <div class=pull-right> <a class="btn btn-primary" v-link="{name: \'post.create\'}"> Create Post </a> </div> <div class=clearfix></div> <br/> <div class="panel panel-primary"> <div class=panel-heading> <h1 class=panel-title> Posts </h1> </div> <div class=panel-body> <table class="table table-striped"> <thead> <tr> <th> Id </th> <th> Title </th> <th> Content </th> <th> Actions </th> </tr> </thead> <tbody> <tr v-if="posts.length === 0"> <td colspan=4>No posts</td> </tr> <tr v-for="post in posts"> <td> {{post.id}} </td> <td> {{post.title}} </td> <td> {{post.content}} </td> <td> <a class="btn btn-danger" @click.prevent=destroy(post.id)> <i class="glyphicon glyphicon-trash"></i> </a> </td> </tr> </tbody> </table> <div class=row> <div class=col-md-10> <v-pagination :pagination=pagination :switch-function=all></v-pagination> </div> <div class=col-md-2> <select class=form-control v-model=limit> <option>5</option> <option>10</option> <option>15</option> </select> </div> </div> </div> </div> </v-layout> '},function(t,e,n){var o,a;o=n(84),a=n(151),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},function(t,e,n){var o,a;o=n(85),a=n(152),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},function(t,e,n){var o,a;o=n(92),a=n(150),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},function(t,e,n){var o,a;o=n(86),a=n(153),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},function(t,e,n){var o,a;o=n(87),a=n(154),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},function(t,e,n){var o,a;o=n(88),a=n(155),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},function(t,e,n){var o,a;o=n(89),a=n(156),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},function(t,e,n){var o,a;o=n(90),a=n(157),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},function(t,e,n){var o,a;o=n(91),a=n(158),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},,,,,,function(t,e,n){function o(t){return n(a(t))}function a(t){return i[t]||function(){throw new Error("Cannot find module '"+t+"'.")}()}var i={"./alert/alert.vue":159,"./pagination/pagination.vue":160};o.keys=function(){return Object.keys(i)},o.resolve=a,t.exports=o,o.id=173},function(t,e,n){function o(t){return n(a(t))}function a(t){return i[t]||function(){throw new Error("Cannot find module '"+t+"'.")}()}var i={"./default/default.vue":162,"./minimal/minimal.vue":163};o.keys=function(){return Object.keys(i)},o.resolve=a,t.exports=o,o.id=174},function(t,e,n){function o(t){return n(a(t))}function a(t){return i[t]||function(){throw new Error("Cannot find module '"+t+"'.")}()}var i={"./account/show/show.vue":164,"./login/index/index.vue":165,"./post/create/create.vue":166,"./post/index/index.vue":167};o.keys=function(){return Object.keys(i)},o.resolve=a,t.exports=o,o.id=175}]);
//# sourceMappingURL=app.594a5a79ee9cbc6ef535.js.map