(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{17:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var c,r,o,a,i,s,d,b=n(9),l=n.n(b),j=(n(17),n(18),n(5)),u=n(0),h=n(2),O=n(3),p=O.a.h1(c||(c=Object(h.a)(["\n  color: SaddleBrown;\n  text-align: center;\n"]))),x=O.a.div(r||(r=Object(h.a)(["\n  border: 2px solid SaddleBrown;\n  border-radius: 5px;\n  width: 400px;\n  margin-top: 50px;\n  margin-left: 100px;\n"]))),f=Object(O.a)(p)(o||(o=Object(h.a)(["\n  font-size: 1.5em;\n"]))),g=O.a.div(a||(a=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n"]))),m=O.a.button(i||(i=Object(h.a)(["\n  color: Chocolate;\n  background: white;\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border: 2px solid Chocolate;\n  border-radius: 3px;\n  text-transform: capitalize;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    color: white;\n    background: Chocolate;\n    outline: 2px solid Chocolate;\n  }\n"]))),v=O.a.div(s||(s=Object(h.a)(["\n  font-size: 1.25em;\n  padding-left: 15px;\n  color: Chocolate;\n"]))),k=O.a.p(d||(d=Object(h.a)(["\n  font-size: 1.25em;\n  text-align: center;\n  color: Chocolate;\n"]))),w=n(1),C=function(e){var t=e.title,n=e.children;return Object(w.jsxs)("section",{children:[Object(w.jsx)(f,{children:t}),n]})},S=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(w.jsx)(g,{children:Object.keys(t).map((function(e,t){return Object(w.jsx)(m,{type:"button",name:e,onClick:function(){return n(e)},children:e},t)}))})},y=function(e){var t=e.good,n=e.neutral,c=e.bad,r=e.total,o=e.positivePercentage;return Object(w.jsxs)(v,{children:[Object(w.jsxs)("p",{children:["Good: ",t]}),Object(w.jsxs)("p",{children:["Neutral: ",n]}),Object(w.jsxs)("p",{children:["Bad: ",c]}),Object(w.jsxs)("p",{children:["Total: ",r]}),Object(w.jsxs)("p",{children:["Positive feedback: ",o,"%"]})]})},z=function(e){var t=e.message;return Object(w.jsx)(k,{children:t})};var B=function(){var e=Object(u.useState)(0),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(u.useState)(0),o=Object(j.a)(r,2),a=o[0],i=o[1],s=Object(u.useState)(0),d=Object(j.a)(s,2),b=d[0],l=d[1],h={good:n,neutral:a,bad:b},O=Object.values(h).reduce((function(e,t){return e+t}),0),f=Number.parseInt(n/O*100);return Object(w.jsxs)("div",{children:[Object(w.jsx)(p,{children:"Welcome to cafe Expresso!"}),Object(w.jsxs)(x,{children:[Object(w.jsx)(C,{title:"Please leave feedback",children:Object(w.jsx)(S,{options:h,onLeaveFeedback:function(e){switch(e){case"good":c((function(e){return e+1}));break;case"neutral":i((function(e){return e+1}));break;case"bad":l((function(e){return e+1}));break;default:return}}})}),Object(w.jsx)(C,{title:"Statistics",children:O?Object(w.jsx)(y,{good:n,neutral:a,bad:b,total:O,positivePercentage:f}):Object(w.jsx)(z,{message:"There is no feedback"})})]})]})};l.a.render(Object(w.jsx)(B,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.c1ce475d.chunk.js.map