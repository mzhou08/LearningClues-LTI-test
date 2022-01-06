(this["webpackJsonpsearch-bar-component"]=this["webpackJsonpsearch-bar-component"]||[]).push([[0],{168:function(e,t,a){},169:function(e,t,a){},171:function(e,t,a){},172:function(e,t,a){},174:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(11),i=a.n(r),c=(a(93),a(94),a(20)),o=a(21),l=a(23),d=a(22),u=a(79),p=a(80),h=a(78),m=(a(95),a(73)),b=a.n(m),j=a(67),_=a.n(j),f=a(66),v=a.n(f),x=function(e){var t=v.a.create({baseURL:e?"http://clapp1-dev.eba-bfkixsew.us-east-2.elasticbeanstalk.com/":"https://clues.engin.umich.edu/"});return{searchEnable:function(e,a){return t.post("api/search_enable/",{enabled:e,class_id:a})},uploadNotificationEnable:function(e,a,n){return t.post("api/upload_notification_enable/",{enabled:e,class_id:a,user_id:n})},weeklyReportEnable:function(e,a,n){return t.post("api/weekly_report_enable/",{enabled:e,class_id:a,user_id:n})},getLeccapClass:function(e){return t.get("api/get_class_leccap/",{leccap_site_key:e})},getUser:function(e){return t.get("api/get_user/",{email:e})},getUserClassSettings:function(e,a){return t.get("api/get_user_class_settings/",{user_id:e,class_id:a})},search:function(e,a){return t.get("api/search/",{class_id:e,q:a})},getVidTranscript:function(e){return t.get("api/get_vid_transcript/",{vid_id:e})},leccapLogin:function(e){return t.post("api/leccap_login/",{message:e})}}},g=a(2),O=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).fetchTranscript=function(){var e=n.props,t=e.vid,a=e.dev;x(a).getVidTranscript(t).then((function(e){if(!e.ok)throw Error(e.statusText);return e.data})).then((function(e){n.setState({transcript:e.transcript.full_transcript})})).catch((function(e){return console.error(e)}))},n.viewFullTranscript=function(e){e.preventDefault(),""===n.state.transcript&&n.fetchTranscript(),n.setState({expand:!0,videoStartTime:0,display:"moments",autoplay:!1})},n.expandAndPlay=function(e){e.preventDefault(),""===n.state.transcript&&n.fetchTranscript(),n.setState({expand:!0,videoStartTime:0,display:"moments",autoplay:!0})},n.toggleExpandShrink=function(e){e.preventDefault();var t=n.state,a=t.expand;""===t.transcript&&n.fetchTranscript(),n.setState({expand:!a,videoStartTime:0,display:"moments",autoplay:!1})},n.jumpToTimeAt=function(e,t){e.preventDefault(),n.setState({videoStartTime:t,autoplay:!0})},n.displayTranscript=function(e){e.preventDefault(),""===n.state.transcript&&n.fetchTranscript(),n.setState({display:"transcript"})},n.displayTimeContext=function(e){e.preventDefault(),n.setState({display:"moments"})},n.state={expand:!1,autoplay:!1,videoStartTime:0,transcript:"",display:"moments"},n}return Object(o.a)(a,[{key:"render",value:function(){var e,t=this,a=this.props,n=a.name,s=a.date,r=a.imageUrl,i=a.videoUrl,c=a.timestamps,o=a.uploadSrc,l=a.embedToken,d=this.state,u=d.expand,p=d.autoplay,m=d.videoStartTime,j=d.transcript,f=d.display,v="leccap"===o?"".concat(i,"?identity=").concat(l,"&mode=embed#goto=").concat(m):i.replace("watch?v=","embed/"),x=[],O=[],y={},k=Object(h.a)(c);try{for(k.s();!(e=k.n()).done;){var T=e.value,S=Math.floor(+Object.keys(T)[0]),N=Object.values(T)[0].context;x.push(S),O.push(N),y[S]=N}}catch(E){k.e(E)}finally{k.f()}var w=0,C=Object.entries(y).map((function(e){return Object(g.jsxs)("div",{className:"time-context-item",onClick:function(a){return t.jumpToTimeAt(a,e[0])},children:[Object(g.jsx)("div",{className:"time",children:new Date(1e3*e[0]).toISOString().substr(11,8)}),Object(g.jsx)("div",{className:"context",children:'"'.concat(e[1],'"')})]},w++)}));return Object(g.jsxs)("div",{className:"search-result-entry",children:[u?Object(g.jsxs)("div",{className:"video-player",children:[Object(g.jsx)("iframe",{src:"leccap"===o?"".concat(v):p?v+"?start=".concat(m,"&rel=0&autoplay=1"):v+"?start=".concat(m,"&rel=0&autoplay=0"),loading:"lazy",title:n,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,width:"600px",height:"400px"}),Object(g.jsx)("div",{className:"video-player-footer"})]}):Object(g.jsx)("img",{src:r,onClick:this.expandAndPlay,alt:""===r?"Lecture thumbnail does not exist":n,width:"450px",height:"300px"}),Object(g.jsxs)("div",{className:"entry-details",children:[Object(g.jsx)("span",{className:"video-name",children:n}),Object(g.jsx)("span",{className:"video-date",children:s.substring(5,s.length-13)}),u?Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:"nav-buttons",children:[Object(g.jsx)("button",{className:"moments"===f?"selected-button":"moments-button",type:"submit",onClick:this.displayTimeContext,children:"Moments"}),Object(g.jsx)("button",{className:"transcript"===f?"selected-button":"transcript-button",type:"submit",onClick:this.displayTranscript,children:"Transcript"})]}),"moments"===f?Object(g.jsx)("div",{className:"time-context-entries",children:C}):Object(g.jsx)("div",{className:"full-transcript",children:j})]}):Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{className:"first-context",children:O[0]}),Object(g.jsx)("button",{className:"view-transcript-button",type:"submit",onClick:this.viewFullTranscript,children:"View Relevant Moments"})]}),Object(g.jsxs)("footer",{className:"entry-details-fotter",children:[Object(g.jsx)("button",{className:"new-tab-button",type:"submit",children:"Open in a new tab"}),Object(g.jsx)("button",{className:"expand-shrink-button",type:"submit",onClick:this.toggleExpandShrink,children:u?Object(g.jsx)(_.a,{color:"action"}):Object(g.jsx)(b.a,{color:"action"})})]})]})]})}}]),a}(s.a.Component),y=(a(168),a(200)),k=a(196),T=function(e){var t=e.displayTerm;return Object(g.jsx)("div",{className:"error-msg",children:Object(g.jsxs)(y.a,{severity:"warning",children:[Object(g.jsx)(k.a,{className:"msg",children:Object(g.jsx)("strong",{children:'Your search term "'.concat(t,'" did not match any recordings, please try again.')})}),Object(g.jsxs)("div",{className:"suggestion",children:[Object(g.jsx)("strong",{children:"Suggestions:"}),Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:"Check the spellings"}),Object(g.jsx)("li",{children:"Try a different term"}),Object(g.jsx)("li",{children:"Try a shorter term"})]})]})]})})},S=a(197),N=a(198),w=a(202),C=a(203),E=a(199),R=(a(74),a(169),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleEnableSearch=function(){var e=n.props,t=e.class_id,a=e.dev,s=n.state.search_enabled,r=!1;s||(r=!0),n.setState({search_enabled:r}),x(a).searchEnable(r,t).then((function(e){if(!e.ok)throw Error(e.statusText);return e.data})).catch((function(e){n.setState({search_enabled:!r})}))},n.handleUploadNotifications=function(){var e=n.state.upload_notifications,t=n.props,a=t.class_id,s=t.user_id,r=t.dev,i=!1;e||(i=!0),n.setState({upload_notifications:i}),x(r).uploadNotificationEnable(i,a,s).then((function(e){if(!e.ok)throw Error(e.statusText);return e.data})).catch((function(e){n.setState({upload_notifications:!i})}))},n.handleWeeklyReports=function(){var e=n.state.weekly_reports,t=n.props,a=t.class_id,s=t.user_id,r=t.dev,i=!1;e||(i=!0),n.setState({weekly_reports:i}),x(r).weeklyReportEnable(i,a,s).then((function(e){if(!e.ok)throw Error(e.statusText);return e.data})).catch((function(e){n.setState({weekly_reports:!e.reports_enabled})}))},n.toggleSettings=function(e){e.preventDefault();var t=n.state.expand;n.setState({expand:!t})},n.state={expand:!0,search_enabled:n.props.search_enabled,weekly_reports:n.props.weekly_reports,upload_notifications:n.props.upload_notifications,initial_disable:n.props.initial_disable},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.expand,a=e.search_enabled,n=this.props.initial_disable;return Object(g.jsx)("div",{className:"settings",children:t?Object(g.jsx)(S.a,{className:"settings-options",children:Object(g.jsx)(E.a,{title:"You can disable student search during quizs or exams",placement:"bottom",children:Object(g.jsx)(N.a,{disabled:n,control:Object(g.jsx)(w.a,{checked:a,onChange:this.handleEnableSearch,name:"search_enabled",color:"primary"}),label:"Enable Student Searches"})})}):""})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.initial_disable!==t.initial_disable?{search_enabled:e.search_enabled,weekly_reports:e.weekly_reports,upload_notifications:e.upload_notifications,initial_disable:e.initial_disable}:null}}]),a}(s.a.Component)),U=a.p+"static/media/logo.90a3a46e.png",V=(a(171),function(){return Object(g.jsxs)("div",{className:"logo-spinner",children:[Object(g.jsx)("img",{className:"logo",src:U,alt:"logo",width:"300px"}),Object(g.jsx)("div",{className:"dot-pulse"})]})}),F=(a(172),a.p+"static/media/logo_icon.01b372da.png"),q=a(76),D=a.n(q),W=a(77),Z=a.n(W),Y=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault();var t=n.state,a=t.searchCount,s=t.course_id,r=t.queryTerm;""!==r&&(n.setState({loading:!0}),x(n.props.dev).search(s,r).then((function(e){if(!e.ok)throw Error(e.statusText);return e.data})).then((function(e){e.recordings[r]&&0!==Object.keys(e.recordings[r]).length?n.setState({searchCount:a+1,definition:e.definition,apiResponse:e.recordings[r],displayTerm:r,error:!1,loading:!1}):n.setState({error:!0,displayTerm:r,loading:!1})})).catch((function(e){return console.error(e)})))},n.handleChange=function(e){e.preventDefault(),n.setState({queryTerm:e.target.value})},n.clearSearch=function(e){e.preventDefault(),n.setState({searchCount:0,error:!1,queryTerm:"",loading:!1})},n.state={course_id:n.props.course_id,canvas_user_id:n.props.canvas_user_id,user_username:n.props.user_username,user_login_id:n.props.user_login_id,searchCount:0,apiResponse:{},queryTerm:"",displayTerm:"",definition:"",error:!1,loading:!1,class_id:null,user_id:null,email:n.props.unique_name+"@umich.edu",site_key:n.props.site_key,search_enabled:!1,weekly_reports:!1,upload_notifications:!1,initial_disable:!0},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=function(){return Object(g.jsxs)(C.a,{className:"feedback-button",href:"https://forms.gle/PRZDceU3AfWmZW7j9",target:"_blank",rel:"noopener noreferrer",children:[Object(g.jsx)("span",{children:" Send Feedback "}),Object(g.jsx)(D.a,{})]})},a=this.state,n=a.searchCount,s=a.apiResponse,r=a.displayTerm,i=a.error,c=a.loading,o=Object(p.a)(a,["searchCount","apiResponse","displayTerm","error","loading"]),l=Object(g.jsx)("div",{className:"header",children:Object(g.jsxs)("form",{className:"search-form",onSubmit:this.handleSubmit,children:[Object(g.jsxs)("div",{className:"search-flex",children:[Object(g.jsx)("img",{className:"logo-icon",src:F,alt:"logoIcon",width:"50px",onClick:this.clearSearch}),Object(g.jsx)("input",{className:"search-bar",placeholder:"Search for a term or phrase",onChange:this.handleChange,type:"text",value:this.state.queryTerm}),Object(g.jsx)("button",{className:"search-button",type:"submit",onSubmit:this.handleSubmit,children:Object(g.jsx)(Z.a,{color:"action"})}),this.props.owner_manager?Object(g.jsx)(R,Object(u.a)({dev:this.props.dev},o)):""]}),Object(g.jsx)(t,{})]})}),d=0,h=Object.keys(s).map((function(t){return Object(g.jsx)(O,{vid:t,name:s[t].title,date:s[t].vid_date,imageUrl:s[t].image,videoUrl:s[t].video_link,embedToken:e.props.embedToken,timestamps:s[t].timestamps,uploadSrc:s[t].upload_src,dev:e.props.dev},d++)}));return c?Object(g.jsx)(V,{}):i?Object(g.jsxs)("div",{children:[l,Object(g.jsx)(T,{displayTerm:r})]}):0===n?Object(g.jsx)("div",{children:l}):Object(g.jsxs)("div",{children:[l,Object(g.jsxs)("div",{className:"search-results",children:[Object(g.jsx)("div",{className:"term-definition",children:Object(g.jsx)("div",{className:"definition",children:"".concat(this.state.definition)})}),Object(g.jsx)("div",{className:"result-list",children:h})]})]})}}]),a}(s.a.Component),M=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={course_id:n.props.course_id,canvas_user_id:n.props.canvas_user_id,user_username:n.props.user_username,user_login_id:n.props.user_login_id,site_key:null,uniquename:null,owner_manager:!1},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.user_login_id,a=e.course_id;return null===t||null===a?Object(g.jsx)(V,{}):Object(g.jsx)("div",{children:Object(g.jsx)(Y,{course_id:a,canvas_user_id:this.state.canvas_user_id,user_username:this.state.user_username,user_login_id:t,site_key:this.state.site_key,unique_name:this.state.uniquename,embedToken:this.props.embedToken,owner_manager:this.state.owner_manager,dev:this.props.dev})})}}]),a}(s.a.Component);var L=function(){var e=document.querySelector('meta[name="course_id"]').content,t=document.querySelector('meta[name="canvas_user_id"]').content,a=document.querySelector('meta[name="user_username"]').content,n=document.querySelector('meta[name="user_login_id"]').content,s="True"===document.querySelector('meta[name="is_instructor"]').content;return console.log(s),Object(g.jsx)("div",{className:"App",children:Object(g.jsx)(M,{course_id:e,canvas_user_id:t,user_username:a,user_login_id:n,dev:!1,userToken:"ekx4TFF5QVJiL2l6dW9jclRoRTNSOUxqMDN4ZmoxZjRlaGlRUmJJb3kzRXhGNEhjeW5BUU5QQ0dkY2VGWjhteHhXVDRKbWhIRjdMcEVRenFYZndDMFFySll3NXVmRVVma1hVckFnSi9BNWVQUU1CajZxMmFaYzMxWmxkUFRqY2g5VEpEWTU3V0N3bHdMWU1CWGN2aTdia3Ztbk9RQ0NobzBTWTRoN0E9",embedToken:"SERhZm5taTFiYm9aejFJUDNsOENVaEpXYWN4Z0hGZUlnU3U1VExlaVA1VXVYa3BuZnlyNEg1UzJNY2NoOUZ0VndEY3RyTGNXNThsbkN4SnlVVlpEKzdLZkhvakt2eEE9"})})},z=(a(173),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,205)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),r(e),i(e)}))});i.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(L,{})}),document.getElementById("root")),z()},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){}},[[174,1,2]]]);
//# sourceMappingURL=main.ccdac379.chunk.js.map