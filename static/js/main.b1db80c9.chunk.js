(this["webpackJsonpspeaking-club-questions"]=this["webpackJsonpspeaking-club-questions"]||[]).push([[0],{40:function(e,t,n){e.exports=n(60)},54:function(e,t,n){},55:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(22),o=n.n(c),u=n(13),s=n(25),i=n(12),l=n(39),S=n(15),p={SUBMIT_QUESTIONS_START:"SUBMIT_QUESTIONS_START",SUBMIT_QUESTIONS_SUCCESS:"SUBMIT_QUESTIONS_SUCCESS",SUBMIT_QUESTIONS_FAILURE:"SUBMIT_QUESTIONS_FAILURE",FETCH_QUESTIONS_START:"FETCH_QUESTIONS_START",FETCH_QUESTIONS_SUCCESS:"FETCH_QUESTIONS_SUCCESS",FETCH_QUESTIONS_FAILURE:"FETCH_QUESTIONS_FAILURE"},E={questions:[],error:""},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.FETCH_QUESTIONS_SUCCESS:return Object(S.a)({},e,{questions:t.payload,error:null});case p.FETCH_QUESTIONS_START:case p.SUBMIT_QUESTIONS_SUCCESS:return Object(S.a)({},e,{error:null});case p.FETCH_QUESTIONS_FAILURE:return Object(S.a)({},e,{error:t.payload});default:return e}},b={GENERATE_RANDOM_COLOR:"GENERATE_RANDOM_COLOR"},m=function(){for(var e=function(e){return parseInt(Math.random()*e)}(16777215).toString(16),t=e.length,n=0;n<t;n++)t<6&&(e=0+e,t++);return"#"+e},T={currentColor:"#000"},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.GENERATE_RANDOM_COLOR:return Object(S.a)({},e,{currentColor:m()});default:return e}},d=Object(i.c)({question:f,color:O}),_=n(5),U=n.n(_),v=n(8),I=function(e){return{type:p.FETCH_QUESTIONS_SUCCESS,payload:e}},h=n(27),C=n(18),N=n(19),y=n.n(N);n(50);y.a.initializeApp({apiKey:"AIzaSyAomEn7onFeUv4AZvyigsSUI0p_7Zj0x3o",authDomain:"react-firebase-authentic-5bd64.firebaseapp.com",databaseURL:"https://react-firebase-authentic-5bd64.firebaseio.com",projectId:"react-firebase-authentic-5bd64",storageBucket:"react-firebase-authentic-5bd64.appspot.com",messagingSenderId:"205531836502",appId:"1:205531836502:web:5083c2603469715a6ecbf7",measurementId:"G-2ZBTBNHNYH"});var j=y.a.firestore(),g=function(){var e=Object(C.a)(U.a.mark((function e(t){var n,r;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=j.collection("speaking-club").doc("questions"),e.prev=1,e.next=4,n.update({questions:(r=y.a.firestore.FieldValue).arrayUnion.apply(r,Object(h.a)(t))});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log("error submiting new questions",e.t0.message);case 9:return e.abrupt("return",n);case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(C.a)(U.a.mark((function e(){var t,n,r,a;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=j.collection("speaking-club").doc("questions"),e.next=3,t.get();case 3:return n=e.sent,r=n.data(),a=r.questions,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=(y.a,U.a.mark(F)),x=U.a.mark(q),A=U.a.mark(M),w=U.a.mark(B),k=U.a.mark(H);function F(e){var t;return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload.questions,n.prev=1,n.next=4,Object(v.b)(g,t);case 4:return n.next=6,Object(v.c)({type:p.SUBMIT_QUESTIONS_SUCCESS});case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(1),n.next=12,Object(v.c)((r=n.t0,{type:p.SUBMIT_QUESTIONS_FAILURE,payload:r}));case 12:case"end":return n.stop()}var r}),Q,null,[[1,8]])}function q(){var e;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(v.b)(R);case 3:return e=t.sent,t.next=6,Object(v.c)(I(e));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(v.c)((n=t.t0,{type:p.FETCH_QUESTIONS_FAILURE,payload:n}));case 12:case"end":return t.stop()}var n}),x,null,[[0,8]])}function M(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.d)(p.SUBMIT_QUESTIONS_START,F);case 2:case"end":return e.stop()}}),A)}function B(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.d)(p.FETCH_QUESTIONS_START,q);case 2:case"end":return e.stop()}}),w)}function H(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.a)([Object(v.b)(M),Object(v.b)(B)]);case 2:case"end":return e.stop()}}),k)}var L=U.a.mark(D);function D(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.a)([Object(v.b)(H)]);case 2:case"end":return e.stop()}}),L)}var G=Object(l.a)(),Z=[G],z=Object(i.e)(d,i.a.apply(void 0,Z));G.run(D);n(54);var J=n(6),P=n(28),K=function(){return{type:b.GENERATE_RANDOM_COLOR}},V=(n(55),Object(u.b)(null,(function(e){return{submitQuestionsStart:function(t){return e(function(e){return{type:p.SUBMIT_QUESTIONS_START,payload:{questions:e}}}(t))},generateRandomColor:function(){return e(K())}}}))(Object(J.f)((function(e){var t=e.history,n=e.submitQuestionsStart,c=e.generateRandomColor,o=Object(r.useState)(["","","","",""]),u=Object(P.a)(o,2),s=u[0],i=u[1],l=function(e){var t=e.target,n=t.name,r=t.value,a=Object(h.a)(s);a[n]=r,i(a)};return a.a.createElement("div",null,a.a.createElement("h2",{className:"page-title"},"Please Submit 5 Questions"),a.a.createElement("form",{onSubmit:function(e){n(s),c(),t.push("/questions"),e.preventDefault()}},s.map((function(e,t){return a.a.createElement("input",{type:"text",name:t,key:"question-".concat(t),value:e,onChange:l})})),a.a.createElement("input",{type:"submit",value:"Submit Questions"})))})))),Y=(n(57),function(e){var t=e.color,n=e.question;return a.a.createElement("p",{className:"question",style:{color:t}},n)}),W=(n(58),Object(u.b)((function(e){return{questions:e.question.questions,color:e.color.currentColor}}),(function(e){return{fetchQuestionsStart:function(){return e({type:p.FETCH_QUESTIONS_START})},generateRandomColor:function(){return e(K())}}}))((function(e){var t=e.color,n=e.questions,c=e.fetchQuestionsStart,o=e.generateRandomColor,u=Object(r.useState)(Math.floor(Math.random()*n.length)),s=Object(P.a)(u,2),i=s[0],l=s[1];Object(r.useEffect)((function(){c()}),[c]);return a.a.createElement("div",{className:""},a.a.createElement(Y,{question:n[i],color:t}),a.a.createElement("a",{href:"empty",className:"btn",style:{backgroundColor:t},onClick:function(e){l(Math.floor(Math.random()*n.length)),o(),e.preventDefault()}},"New Question"))}))),X=function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"Not Found Page"),a.a.createElement("p",null,"Sorry the url you entered was not found."))},$=(n(59),Object(u.b)((function(e){return{color:e.color.currentColor}}))((function(e){var t=e.color;return document.getElementsByTagName("body")[0].style.backgroundColor=t,a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"sub-container"},a.a.createElement(J.c,null,a.a.createElement(J.a,{exact:!0,path:"/",component:V}),a.a.createElement(J.a,{exact:!0,path:"/questions",component:W}),a.a.createElement(J.a,{path:"/*",component:X}))))})));o.a.render(a.a.createElement(u.a,{store:z},a.a.createElement(s.a,{basename:"".concat("/Speaking-Club-Questions")},a.a.createElement($,null))),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.b1db80c9.chunk.js.map