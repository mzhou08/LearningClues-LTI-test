(this["webpackJsonpsearch-bar-component"]=this["webpackJsonpsearch-bar-component"]||[]).push([[0],{168:function(e,t,n){},169:function(e,t,n){},171:function(e,t,n){},172:function(e,t,n){},174:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(11),r=n.n(i),c=(n(93),n(94),n(20)),o=n(21),l=n(23),d=n(22),u=n(79),p=n(80),h=n(78),b=(n(95),n(73)),m=n.n(b),j=n(67),f=n.n(j),v=n(66),x=n.n(v),g=function(e){var t=x.a.create({baseURL:e?"http://clapp1-dev.eba-bfkixsew.us-east-2.elasticbeanstalk.com/":"https://clues.engin.umich.edu/"});return{searchEnable:function(e,n){return t.post("api/search_enable/",{enabled:e,class_id:n})},uploadNotificationEnable:function(e,n,a){return t.post("api/upload_notification_enable/",{enabled:e,class_id:n,user_id:a})},weeklyReportEnable:function(e,n,a){return t.post("api/weekly_report_enable/",{enabled:e,class_id:n,user_id:a})},getLeccapClass:function(e){return t.get("api/get_class_leccap/",{leccap_site_key:e})},getUser:function(e){return t.get("api/get_user/",{email:e})},getUserClassSettings:function(e,n){return t.get("api/get_user_class_settings/",{user_id:e,class_id:n})},search:function(e,n){return t.get("api/search/",{class_id:e,q:n})},getVidTranscript:function(e){return t.get("api/get_vid_transcript/",{vid_id:e})},leccapLogin:function(e){return t.post("api/leccap_login/",{message:e})}}},_=n(2),O=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).fetchTranscript=function(){var e=a.props,t=e.vid,n=e.dev;g(n).getVidTranscript(t).then((function(e){if(!e.ok)throw Error(e.statusText);return e.data})).then((function(e){a.setState({transcript:e.transcript.full_transcript})})).catch((function(e){return console.error(e)}))},a.viewFullTranscript=function(e){e.preventDefault(),""===a.state.transcript&&a.fetchTranscript(),a.setState({expand:!0,videoStartTime:0,display:"moments",autoplay:!1})},a.expandAndPlay=function(e){e.preventDefault(),""===a.state.transcript&&a.fetchTranscript(),a.setState({expand:!0,videoStartTime:0,display:"moments",autoplay:!0})},a.toggleExpandShrink=function(e){e.preventDefault();var t=a.state,n=t.expand;""===t.transcript&&a.fetchTranscript(),a.setState({expand:!n,videoStartTime:0,display:"moments",autoplay:!1})},a.jumpToTimeAt=function(e,t){e.preventDefault(),a.setState({videoStartTime:t,autoplay:!0})},a.displayTranscript=function(e){e.preventDefault(),""===a.state.transcript&&a.fetchTranscript(),a.setState({display:"transcript"})},a.displayTimeContext=function(e){e.preventDefault(),a.setState({display:"moments"})},a.state={expand:!1,autoplay:!1,videoStartTime:0,transcript:"",display:"moments"},a}return Object(o.a)(n,[{key:"render",value:function(){var e,t=this,n=this.props,a=n.name,s=n.date,i=n.imageUrl,r=n.videoUrl,c=n.timestamps,o=n.uploadSrc,l=n.embedToken,d=this.state,u=d.expand,p=d.autoplay,b=d.videoStartTime,j=d.transcript,v=d.display,x="leccap"===o?"".concat(r,"?identity=").concat(l,"&mode=embed#goto=").concat(b):r.replace("watch?v=","embed/"),g=[],O=[],y={},k=Object(h.a)(c);try{for(k.s();!(e=k.n()).done;){var T=e.value,S=Math.floor(+Object.keys(T)[0]),N=Object.values(T)[0].context;g.push(S),O.push(N),y[S]=N}}catch(C){k.e(C)}finally{k.f()}var w=0,E=Object.entries(y).map((function(e){return Object(_.jsxs)("div",{className:"time-context-item",onClick:function(n){return t.jumpToTimeAt(n,e[0])},children:[Object(_.jsx)("div",{className:"time",children:new Date(1e3*e[0]).toISOString().substr(11,8)}),Object(_.jsx)("div",{className:"context",children:'"'.concat(e[1],'"')})]},w++)}));return Object(_.jsxs)("div",{className:"search-result-entry",children:[u?Object(_.jsxs)("div",{className:"video-player",children:[Object(_.jsx)("iframe",{src:"leccap"===o?"".concat(x):p?x+"?start=".concat(b,"&rel=0&autoplay=1"):x+"?start=".concat(b,"&rel=0&autoplay=0"),loading:"lazy",title:a,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,width:"600px",height:"400px"}),Object(_.jsx)("div",{className:"video-player-footer"})]}):Object(_.jsx)("img",{src:i,onClick:this.expandAndPlay,alt:""===i?"Lecture thumbnail does not exist":a,width:"450px",height:"300px"}),Object(_.jsxs)("div",{className:"entry-details",children:[Object(_.jsx)("span",{className:"video-name",children:a}),Object(_.jsx)("span",{className:"video-date",children:s.substring(5,s.length-13)}),u?Object(_.jsxs)("div",{children:[Object(_.jsxs)("div",{className:"nav-buttons",children:[Object(_.jsx)("button",{className:"moments"===v?"selected-button":"moments-button",type:"submit",onClick:this.displayTimeContext,children:"Moments"}),Object(_.jsx)("button",{className:"transcript"===v?"selected-button":"transcript-button",type:"submit",onClick:this.displayTranscript,children:"Transcript"})]}),"moments"===v?Object(_.jsx)("div",{className:"time-context-entries",children:E}):Object(_.jsx)("div",{className:"full-transcript",children:j})]}):Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{className:"first-context",children:O[0]}),Object(_.jsx)("button",{className:"view-transcript-button",type:"submit",onClick:this.viewFullTranscript,children:"View Relevant Moments"})]}),Object(_.jsxs)("footer",{className:"entry-details-fotter",children:[Object(_.jsx)("button",{className:"new-tab-button",type:"submit",children:"Open in a new tab"}),Object(_.jsx)("button",{className:"expand-shrink-button",type:"submit",onClick:this.toggleExpandShrink,children:u?Object(_.jsx)(f.a,{color:"action"}):Object(_.jsx)(m.a,{color:"action"})})]})]})]})}}]),n}(s.a.Component),y=(n(168),n(200)),k=n(196),T=function(e){var t=e.displayTerm;return Object(_.jsx)("div",{className:"error-msg",children:Object(_.jsxs)(y.a,{severity:"warning",children:[Object(_.jsx)(k.a,{className:"msg",children:Object(_.jsx)("strong",{children:'Your search term "'.concat(t,'" did not match any recordings, please try again.')})}),Object(_.jsxs)("div",{className:"suggestion",children:[Object(_.jsx)("strong",{children:"Suggestions:"}),Object(_.jsxs)("ul",{children:[Object(_.jsx)("li",{children:"Check the spellings"}),Object(_.jsx)("li",{children:"Try a different term"}),Object(_.jsx)("li",{children:"Try a shorter term"})]})]})]})})},S=n(197),N=n(198),w=n(202),E=n(203),C=n(199),U=(n(74),n(169),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleEnableSearch=function(){var e=a.props,t=e.class_id,n=e.dev,s=a.state.search_enabled,i=!1;s||(i=!0),a.setState({search_enabled:i}),g(n).searchEnable(i,t).then((function(e){if(!e.ok)throw Error(e.statusText);return e.data})).catch((function(e){a.setState({search_enabled:!i})}))},a.handleUploadNotifications=function(){var e=a.state.upload_notifications,t=a.props,n=t.class_id,s=t.user_id,i=t.dev,r=!1;e||(r=!0),a.setState({upload_notifications:r}),g(i).uploadNotificationEnable(r,n,s).then((function(e){if(!e.ok)throw Error(e.statusText);return e.data})).catch((function(e){a.setState({upload_notifications:!r})}))},a.handleWeeklyReports=function(){var e=a.state.weekly_reports,t=a.props,n=t.class_id,s=t.user_id,i=t.dev,r=!1;e||(r=!0),a.setState({weekly_reports:r}),g(i).weeklyReportEnable(r,n,s).then((function(e){if(!e.ok)throw Error(e.statusText);return e.data})).catch((function(e){a.setState({weekly_reports:!e.reports_enabled})}))},a.toggleSettings=function(e){e.preventDefault();var t=a.state.expand;a.setState({expand:!t})},a.state={expand:!0,search_enabled:a.props.search_enabled,weekly_reports:a.props.weekly_reports,upload_notifications:a.props.upload_notifications,initial_disable:a.props.initial_disable},a}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.expand,n=e.search_enabled,a=this.props.initial_disable;return Object(_.jsx)("div",{className:"settings",children:t?Object(_.jsx)(S.a,{className:"settings-options",children:Object(_.jsx)(C.a,{title:"You can disable student search during quizs or exams",placement:"bottom",children:Object(_.jsx)(N.a,{disabled:a,control:Object(_.jsx)(w.a,{checked:n,onChange:this.handleEnableSearch,name:"search_enabled",color:"primary"}),label:"Enable Student Searches"})})}):""})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.initial_disable!==t.initial_disable?{search_enabled:e.search_enabled,weekly_reports:e.weekly_reports,upload_notifications:e.upload_notifications,initial_disable:e.initial_disable}:null}}]),n}(s.a.Component)),R=n.p+"static/media/logo.90a3a46e.png",V=(n(171),function(){return Object(_.jsxs)("div",{className:"logo-spinner",children:[Object(_.jsx)("img",{className:"logo",src:R,alt:"logo",width:"300px"}),Object(_.jsx)("div",{className:"dot-pulse"})]})}),D=(n(172),n.p+"static/media/logo_icon.01b372da.png"),F=n(76),q=n.n(F),W=n(77),Z=n.n(W),M=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.searchCount,s=t.class_id,i=t.queryTerm;""!==i&&(a.setState({loading:!0}),g(a.props.dev).search(s,i).then((function(e){if(!e.ok)throw Error(e.statusText);return e.data})).then((function(e){e.recordings[i]&&0!==Object.keys(e.recordings[i]).length?a.setState({searchCount:n+1,definition:e.definition,apiResponse:e.recordings[i],displayTerm:i,error:!1,loading:!1}):a.setState({error:!0,displayTerm:i,loading:!1})})).catch((function(e){return console.error(e)})))},a.handleChange=function(e){e.preventDefault(),a.setState({queryTerm:e.target.value})},a.clearSearch=function(e){e.preventDefault(),a.setState({searchCount:0,error:!1,queryTerm:"",loading:!1})},a.state={searchCount:0,apiResponse:{},queryTerm:"",displayTerm:"",definition:"",error:!1,loading:!1,class_id:null,user_id:null,email:a.props.unique_name+"@umich.edu",site_key:a.props.site_key,search_enabled:!1,weekly_reports:!1,upload_notifications:!1,initial_disable:!0},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=null,n=null;g(this.props.dev).getLeccapClass(this.state.site_key).then((function(e){if(!e.ok)throw Error(e.statusText);return e.data})).then((function(a){e.setState({search_enabled:a.search_enabled,class_id:a.class_id}),t=a.class_id,g(e.props.dev).getUser(e.state.email).then((function(e){if(!e.ok)throw Error(e.statusText);return e.data})).then((function(a){e.setState({user_id:a.user_id}),n=a.user_id,g(e.props.dev).getUserClassSettings(n,t).then((function(e){if(!e.ok)throw Error(e.statusText);return e.data})).then((function(t){e.setState({initial_disable:!1,upload_notifications:t.upload_notification,weekly_reports:t.weekly_report})}))}))})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this,t=function(){return Object(_.jsxs)(E.a,{className:"feedback-button",href:"https://forms.gle/PRZDceU3AfWmZW7j9",target:"_blank",rel:"noopener noreferrer",children:[Object(_.jsx)("span",{children:" Send Feedback "}),Object(_.jsx)(q.a,{})]})},n=this.state,a=n.searchCount,s=n.apiResponse,i=n.displayTerm,r=n.error,c=n.loading,o=Object(p.a)(n,["searchCount","apiResponse","displayTerm","error","loading"]),l=Object(_.jsx)("div",{className:"header",children:Object(_.jsxs)("form",{className:"search-form",onSubmit:this.handleSubmit,children:[Object(_.jsxs)("div",{className:"search-flex",children:[Object(_.jsx)("img",{className:"logo-icon",src:D,alt:"logoIcon",width:"50px",onClick:this.clearSearch}),Object(_.jsx)("input",{className:"search-bar",placeholder:"Search for a term or phrase",onChange:this.handleChange,type:"text",value:this.state.queryTerm}),Object(_.jsx)("button",{className:"search-button",type:"submit",onSubmit:this.handleSubmit,children:Object(_.jsx)(Z.a,{color:"action"})}),this.props.owner_manager?Object(_.jsx)(U,Object(u.a)({dev:this.props.dev},o)):""]}),Object(_.jsx)(t,{})]})}),d=0,h=Object.keys(s).map((function(t){return Object(_.jsx)(O,{vid:t,name:s[t].title,date:s[t].vid_date,imageUrl:s[t].image,videoUrl:s[t].video_link,embedToken:e.props.embedToken,timestamps:s[t].timestamps,uploadSrc:s[t].upload_src,dev:e.props.dev},d++)}));return c?Object(_.jsx)(V,{}):r?Object(_.jsxs)("div",{children:[l,Object(_.jsx)(T,{displayTerm:i})]}):0===a?Object(_.jsx)("div",{children:l}):Object(_.jsxs)("div",{children:[l,Object(_.jsxs)("div",{className:"search-results",children:[Object(_.jsx)("div",{className:"term-definition",children:Object(_.jsx)("div",{className:"definition",children:"".concat(this.state.definition)})}),Object(_.jsx)("div",{className:"result-list",children:h})]})]})}}]),n}(s.a.Component),Y=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={site_key:null,uniquename:null,owner_manager:!1},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.userToken,a=t.dev;g(a).leccapLogin(n).then((function(e){if(!e.ok)throw Error(e.statusText);return console.log(e.data),e.data})).then((function(t){e.setState({site_key:t.site_key,uniquename:t.uniquename,owner_manager:t.success})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.site_key,n=e.uniquename;return null===t||null===n?Object(_.jsx)(V,{}):Object(_.jsx)("div",{children:Object(_.jsx)(M,{site_key:t,unique_name:n,embedToken:this.props.embedToken,owner_manager:this.state.owner_manager,dev:this.props.dev})})}}]),n}(s.a.Component);var L=function(){return console.log("-------subject_id here----------"),console.log(document.querySelector('meta[name="subject_id"]').content),Object(_.jsx)("div",{className:"App",children:Object(_.jsx)(Y,{userToken:"ekx4TFF5QVJiL2l6dW9jclRoRTNSOUxqMDN4ZmoxZjRlaGlRUmJJb3kzRXhGNEhjeW5BUU5QQ0dkY2VGWjhteHhXVDRKbWhIRjdMcEVRenFYZndDMFFySll3NXVmRVVma1hVckFnSi9BNWVQUU1CajZxMmFaYzMxWmxkUFRqY2g5VEpEWTU3V0N3bHdMWU1CWGN2aTdia3Ztbk9RQ0NobzBTWTRoN0E9",embedToken:"SERhZm5taTFiYm9aejFJUDNsOENVaEpXYWN4Z0hGZUlnU3U1VExlaVA1VXVYa3BuZnlyNEg1UzJNY2NoOUZ0VndEY3RyTGNXNThsbkN4SnlVVlpEKzdLZkhvakt2eEE9",dev:!1})})},z=(n(173),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,205)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),i(e),r(e)}))});r.a.render(Object(_.jsx)(s.a.StrictMode,{children:Object(_.jsx)(L,{})}),document.getElementById("root")),z()},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){}},[[174,1,2]]]);
//# sourceMappingURL=main.a9e25c5b.chunk.js.map