(this["webpackJsonpreact-fluid-aspect-ratio-grid-example"]=this["webpackJsonpreact-fluid-aspect-ratio-grid-example"]||[]).push([[0],{16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);a(9);var n=a(0),r=a.n(n),c=a(6),i=a.n(c),l=a(4),u=a(7),o=a(3),m=a.n(o);function s(e){var t,a=e.children,c=e.maxAspectRatio,i=e.gap,l=Object(n.useRef)(),u=Object(n.useState)({width:0,height:0}),o=u[0],m=u[1],s=Object(n.useState)(1),p=s[0],d=s[1];Object(n.useEffect)((function(){return f(),function(){return t.disconnect()}}),[]),Object(n.useLayoutEffect)((function(){d(function(e,t,a){for(var n=e.width,r=e.height,c=1,i=0;i<t;i++){if(n/c/(r/Math.ceil(t/c))<a||c===t)break;c++}return c}(o,a.length,c))}),[o,a.length]);var f=function(){(t=new ResizeObserver((function(e){var t=e[0].contentRect,a=t.width,n=t.height;m({width:a,height:n})}))).observe(l.current)};return r.a.createElement("div",{ref:l,style:{display:"grid",height:"100%",gridTemplateColumns:"repeat("+p+", minmax(0, 1fr))",gridGap:""+i}},a)}s.propTypes={sizmaxAspectRatioe:m.a.number,gap:m.a.string};var p=s;a(16);var d=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",null,r.a.createElement("header",null,r.a.createElement("h1",null,"react-fluid-aspect-ratio-grid example"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/DavideDeFeudis/react-fluid-aspect-ratio-grid",target:"_blank"},"GitHub repo")),r.a.createElement("p",null,r.a.createElement("a",{href:"https://www.npmjs.com/package/react-fluid-aspect-ratio-grid",target:"_blank"},"Npm package")),r.a.createElement("p",null,"Add/remove items and resize the window."),r.a.createElement("button",{onClick:function(){c([].concat(Object(l.a)(a),[{}]))}},"Add item"),r.a.createElement("button",{onClick:function(){var e=Object(l.a)(a);e.pop(),c(e)}},"Remove item")),r.a.createElement("section",null,r.a.createElement(p,{maxAspectRatio:2.2,gap:"1rem"},a.map((function(e,t){return r.a.createElement("div",{className:"grid-item",key:t})}))))))};i.a.render(r.a.createElement(d,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(17)},9:function(e,t,a){}},[[8,1,2]]]);
//# sourceMappingURL=main.b1456e2c.chunk.js.map