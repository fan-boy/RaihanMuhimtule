(this.webpackJsonpraihanmuhimtule=this.webpackJsonpraihanmuhimtule||[]).push([[0],{128:function(e,t,n){"use strict";n.r(t);var c=n(152),o=n(0),i=n.n(o),a=n(55),s=n.n(a),r=n(151),l=n(154),j=n(142),b=n(31),u=n(4),h=n(156),d=n(159),f=n(141),O=n(157),x=n(144),m=n(145),p=n(160),v=n(3),g=function(e){return Object(v.jsx)(f.a,{borderRadius:"sm",h:"lg",boxShadow:"base",overflow:"hidden",children:Object(v.jsx)(d.a,{src:e.imageUrl,alt:e.hoverText,onClick:function(){return e.onClick(e.item,e.hoverText)}})})},S=function(){var e=Object(h.a)(),t=(e.isOpen,e.onOpen,e.onClose,i.a.useRef(),Object(j.d)()),n=Object(o.useState)(!1),c=Object(u.a)(n,2),a=(c[0],c[1],Object(o.useState)()),s=Object(u.a)(a,2),r=s[0],l=s[1],b=Object(o.useState)(),S=Object(u.a)(b,2),k=S[0],w=S[1],C=Object(o.useState)(),y=Object(u.a)(C,2),z=y[0],E=y[1],R=Object(o.useState)(),F=Object(u.a)(R,2),I=F[0],L=F[1],M=Object(o.useState)(),T=Object(u.a)(M,2),W=(T[0],T[1]),U=(Object(o.useRef)(),function(e,n){var c={item:e};t.push("/work/".concat(n),c)});return Object(o.useEffect)((function(){fetch("https://portfolio-161ec-default-rtdb.firebaseio.com/.json").then((function(e){e&&e.body&&e.json().then((function(e){var t=e;l(t.work),W(t.main),E(t.otherWork)}))}))}),[]),Object(o.useEffect)((function(){var e=[];z&&z.forEach((function(t){e.push(Object(v.jsx)(d.a,{src:t.imageUrl,w:"lg",alt:t.title}))})),L(e)}),[z]),Object(o.useEffect)((function(){var e=[];r&&r.length>0&&r.forEach((function(t,n){e.push(Object(v.jsx)(g,{imageUrl:t.imageSrc,hoverText:t.name,item:t,onClick:U}))})),w(e)}),[r]),Object(v.jsxs)(f.a,{fontSize:"xl",padding:"5",children:[Object(v.jsx)(p.a,{p:"4",columns:[1,null,2],spacing:5,children:k}),z&&z.length>0&&Object(v.jsxs)(O.b,{children:[Object(v.jsx)(x.a,{children:Object(v.jsx)(m.a,{as:"b",fontSize:"3xl",justifySelf:"flex-center",children:"Also Worked with"})}),Object(v.jsx)(O.a,{spacing:"3",children:I})]})]})},k=n(99),w=function(){var e=Object(j.e)(),t=Object(o.useState)(),n=Object(u.a)(t,2),c=n[0],a=n[1],s=Object(o.useState)(),r=Object(u.a)(s,2),l=r[0],b=r[1];Object(o.useEffect)((function(){(null===d||void 0===d?void 0:d.item)?a(d.item):fetch("https://portfolio-161ec-default-rtdb.firebaseio.com/work.json").then((function(t){if(t&&t.body){var n=e.pathname.replace("/work/","");t.json().then((function(e){var t=e.filter((function(e){return e.name===n}));a(t[0])}))}}))}),[]);var d=Object(j.e)().state,x=Object(h.a)(),p=(x.isOpen,x.onOpen,x.onClose,i.a.useRef(),Object(j.d)(),Object(o.useState)(!1)),g=Object(u.a)(p,2),S=(g[0],g[1],Object(o.useState)()),w=Object(u.a)(S,2),C=(w[0],w[1],Object(o.useState)()),y=Object(u.a)(C,2);y[0],y[1];return Object(o.useEffect)((function(){var e=[];c&&c.projects.forEach((function(t){fetch("https://vimeo.com/api/oembed.json?url=".concat(t.videoUrl)).then((function(e){console.log(e),e.json().then((function(e){var t=e;console.log(t.html)}))})),e.push(Object(v.jsxs)(O.b,{children:[Object(v.jsx)(m.a,{as:"b",fontSize:"2xl",justifySelf:"flex-start",children:t.title}),Object(v.jsx)(k.a,{width:"640",height:"360",video:t.videoUrl})]}))})),b(e)}),[c]),Object(v.jsx)(f.a,{fontSize:"xl",padding:"5",children:Object(v.jsx)(O.b,{spacing:"10",children:l})})},C=n(149),y=n(150),z=n(106),E=n(146),R=n(161),F=n(26),I=n(148),L=n(45),M=function(e){var t=function(t){var n,c,o,i,a,s,r;switch(t){case"LinkedIn":(r=null===(n=e.profile)||void 0===n||null===(c=n.social)||void 0===c?void 0:c.find((function(e){return"linkedin"===(null===e||void 0===e?void 0:e.className)})))&&window.open(r.url);break;case"instagram":(r=null===(o=e.profile)||void 0===o||null===(i=o.social)||void 0===i?void 0:i.find((function(e){return"instagram"===(null===e||void 0===e?void 0:e.className)})))&&window.open(r.url);break;case"vimeo":(r=null===(a=e.profile)||void 0===a||null===(s=a.social)||void 0===s?void 0:s.find((function(e){return"vimeo"===(null===e||void 0===e?void 0:e.className)})))&&window.open(r.url)}};return Object(v.jsxs)(p.a,{p:"4",columns:[1,null,2],spacing:5,children:[Object(v.jsx)(x.a,{h:"2xl",children:Object(v.jsxs)(O.b,{children:[Object(v.jsx)(m.a,{as:"b",fontSize:"3xl",justifySelf:"flex-center",children:e.profile.name}),Object(v.jsx)(m.a,{as:"b",fontSize:"2xl",justifySelf:"flex-start",children:e.profile.bio}),Object(v.jsxs)(O.a,{spacing:"3",children:[Object(v.jsx)(E.a,{"aria-label":"Linked In",onClick:function(){return t("LinkedIn")},icon:Object(v.jsx)(I.a,{as:L.b})}),Object(v.jsx)(E.a,{"aria-label":"Instagram",onClick:function(){return t("instagram")},icon:Object(v.jsx)(I.a,{as:L.a})}),Object(v.jsx)(E.a,{"aria-label":"Vimeo",onClick:function(){return t("vimeo")},icon:Object(v.jsx)(I.a,{as:L.e})})]})]})}),Object(v.jsx)(x.a,{h:"2xl",children:Object(v.jsx)(d.a,{src:e.profile.image,h:"2xl",alt:""})})]})},T=function(){var e=Object(o.useState)(),t=Object(u.a)(e,2),n=t[0],c=t[1];return Object(o.useEffect)((function(){fetch("https://portfolio-161ec-default-rtdb.firebaseio.com/main.json").then((function(e){e&&e.body&&e.json().then((function(e){c(e)}))}))}),[]),Object(v.jsx)(v.Fragment,{children:n&&Object(v.jsx)(M,{profile:n})})},W=n(155),U=n(101),B=n(130),N=function(e){var t=Object(B.b)().toggleColorMode,n=Object(B.c)("dark","light"),c=Object(B.c)(L.c,L.d);return Object(v.jsx)(E.a,Object(U.a)({size:"md",fontSize:"lg",variant:"ghost",color:"current",marginLeft:"2",onClick:t,icon:Object(v.jsx)(c,{}),"aria-label":"Switch to ".concat(n," mode")},e))},J=Object(b.a)(),P=function(){var e=Object(h.a)(),t=e.isOpen,n=e.onOpen,c=e.onClose,o=i.a.useRef();return Object(v.jsxs)(j.b,{history:J,children:[Object(v.jsx)(j.c,{children:Object(v.jsx)(j.a,{path:"/",render:function(e){return Object(v.jsx)(f.a,{fontSize:"xl",padding:"5",children:Object(v.jsxs)(C.a,{children:[Object(v.jsx)(f.a,{p:"4",children:Object(v.jsx)(m.a,{as:"b",fontSize:"3xl",justifySelf:"flex-start",children:"Raihan Muhimtule"})}),Object(v.jsx)(y.a,{}),Object(v.jsxs)(f.a,{display:{base:"none",md:"block"},p:"4",children:[Object(v.jsx)(z.a,{m:"2",onClick:function(){return J.push("/")},colorScheme:"teal",variant:"ghost",children:"Work"}),Object(v.jsx)(z.a,{m:"2",colorScheme:"teal",onClick:function(){return J.push("/about")},variant:"ghost",children:"Contact"}),Object(v.jsx)(N,{})]}),Object(v.jsxs)(f.a,{display:{base:"block",md:"none"},p:"4",children:[Object(v.jsx)(E.a,{icon:Object(v.jsx)(W.a,{}),ref:o,onClick:n}),Object(v.jsxs)(R.a,{isOpen:t,placement:"right",onClose:c,finalFocusRef:o,children:[Object(v.jsx)(F.e,{}),Object(v.jsxs)(R.b,{children:[Object(v.jsx)(F.c,{}),Object(v.jsx)(F.b,{children:Object(v.jsxs)(O.b,{spacing:4,align:"stretch",marginTop:"24",children:[Object(v.jsx)(z.a,{m:"2",colorScheme:"teal",variant:"ghost",children:"Work"}),Object(v.jsx)(z.a,{m:"2",colorScheme:"teal",variant:"ghost",children:"Contact"}),Object(v.jsx)(z.a,{m:"2",colorScheme:"teal",variant:"ghost",children:"Button"})]})})]})]})]})]})})}})}),Object(v.jsxs)(j.c,{children:[Object(v.jsx)(j.a,{exact:!0,path:"/",component:S}),Object(v.jsx)(j.a,{exact:!0,path:"/about",component:T}),Object(v.jsx)(j.a,{path:"/work/:id",component:w})]})]})},A=Object(r.a)({config:{initialColorMode:"dark",useSystemColorMode:!1}}),D=function(){return Object(v.jsx)(l.a,{theme:A,children:Object(v.jsx)(P,{})})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,162)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),i(e),a(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(v.jsxs)(o.StrictMode,{children:[Object(v.jsx)(c.a,{initialColorMode:"dark"}),Object(v.jsx)(D,{})]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),V()}},[[128,1,2]]]);
//# sourceMappingURL=main.e5ec514f.chunk.js.map