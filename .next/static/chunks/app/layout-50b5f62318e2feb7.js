(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{7022:function(e,n,t){Promise.resolve().then(t.bind(t,15)),Promise.resolve().then(t.bind(t,1476)),Promise.resolve().then(t.bind(t,8431)),Promise.resolve().then(t.t.bind(t,3222,23)),Promise.resolve().then(t.t.bind(t,6685,23)),Promise.resolve().then(t.bind(t,3242)),Promise.resolve().then(t.bind(t,8874)),Promise.resolve().then(t.t.bind(t,5506,23)),Promise.resolve().then(t.t.bind(t,2471,23)),Promise.resolve().then(t.t.bind(t,270,23)),Promise.resolve().then(t.t.bind(t,5754,23))},1295:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{default:function(){return c},unstable_getImgProps:function(){return a}});let r=t(1024),o=t(2301),i=t(7873),s=t(3222),l=r._(t(5033)),a=e=>{(0,i.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:n}=(0,o.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,t]of Object.entries(n))void 0===t&&delete n[e];return{props:n}},c=s.Image},8874:function(e,n,t){"use strict";t.r(n),t.d(n,{AuthLinks:function(){return u}});var r=t(7437),o=t(1396),i=t.n(o),s=t(7821),l=t.n(s),a=t(2265),c=t(2749);let u=()=>{let[e,n]=(0,a.useState)(!1),{status:t}=(0,c.useSession)();return(0,r.jsxs)(r.Fragment,{children:["unauthenticated"===t?(0,r.jsx)(i(),{href:"/login",className:l().link,children:"Login"}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i(),{href:"/write",className:l().link,children:"Write"}),(0,r.jsx)("span",{className:l().link,onClick:c.signOut,children:"Logout"})]}),(0,r.jsxs)("div",{className:l().burger,onClick:()=>n(!e),children:[(0,r.jsx)("div",{className:l().line}),(0,r.jsx)("div",{className:l().line}),(0,r.jsx)("div",{className:l().line})]}),e&&(0,r.jsxs)("div",{className:l().responsiveMenu,children:[(0,r.jsx)(i(),{href:"/",children:"HomePage"}),(0,r.jsx)(i(),{href:"/",children:"About"}),(0,r.jsx)(i(),{href:"/",children:"Contact"}),"notauthenticated"===t?(0,r.jsx)(i(),{href:"/login",children:"Login"}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i(),{href:"/write",children:"Write"}),(0,r.jsx)("span",{className:l().link,children:"Logout"})]})]})]})}},3242:function(e,n,t){"use strict";t.r(n),t.d(n,{ThemeToggle:function(){return u}});var r=t(7437),o=t(6691),i=t.n(o),s=t(6708),l=t.n(s),a=t(2265),c=t(1476);let u=()=>{let{theme:e,toggle:n}=(0,a.useContext)(c.ThemeContext);return(0,r.jsxs)("div",{className:l().container,onClick:n,style:"dark"===e?{backgroundColor:"white"}:{backgroundColor:"#0f172a"},children:[(0,r.jsx)(i(),{src:"/moon.png",alt:"",width:14,height:14}),(0,r.jsx)("div",{className:l().ball,style:"dark"===e?{left:1,backgroundColor:"#0f172a"}:{right:1,backgroundColor:"white"}}),(0,r.jsx)(i(),{src:"/sun.png",alt:"",width:14,height:14})]})}},1476:function(e,n,t){"use strict";t.r(n),t.d(n,{ThemeContext:function(){return i},ThemeContextProvider:function(){return l}});var r=t(7437),o=t(2265);let i=(0,o.createContext)(),s=()=>{{let e=localStorage.getItem("theme");return e||"light"}},l=e=>{let{children:n}=e,[t,l]=(0,o.useState)(()=>s());return(0,o.useEffect)(()=>{localStorage.setItem("theme",t)},[t]),(0,r.jsx)(i.Provider,{value:{theme:t,toggle:()=>{l("light"===t?"dark":"light")}},children:n})}},8431:function(e,n,t){"use strict";t.r(n);var r=t(7437);t(2265);var o=t(2749);n.default=e=>{let{children:n}=e;return(0,r.jsx)(o.SessionProvider,{children:n})}},15:function(e,n,t){"use strict";t.r(n),t.d(n,{ThemeProvider:function(){return s}});var r=t(7437),o=t(1476),i=t(2265);let s=e=>{let{children:n}=e,{theme:t}=(0,i.useContext)(o.ThemeContext),[s,l]=(0,i.useState)(!1);if((0,i.useEffect)(()=>{l(!0)},[]),s)return(0,r.jsx)("div",{className:t,children:n})}},2471:function(){},7821:function(e){e.exports={link:"authLinks_link__yirEv",burger:"authLinks_burger__pRjeS",line:"authLinks_line__hpTU5",responsiveMenu:"authLinks_responsiveMenu__nnHTP"}},5754:function(e){e.exports={container:"footer_container__cL_uA",info:"footer_info__uKSJc",logo:"footer_logo__pe9i3",logoText:"footer_logoText__QUSlJ",desc:"footer_desc__4TFpC",icons:"footer_icons__owG1o",links:"footer_links__t81SU",list:"footer_list__TA6Rj",listTitle:"footer_listTitle__wUBPu"}},270:function(e){e.exports={container:"navbar_container__CZncu",social:"navbar_social__Zhp3T",logo:"navbar_logo__uZP7g",links:"navbar_links__zwFDW",link:"navbar_link__AyfKG"}},6708:function(e){e.exports={container:"themeToggle_container__qFM4I",ball:"themeToggle_ball__I_org"}},5506:function(e){e.exports={style:{fontFamily:"'__Inter_36bd41', '__Inter_Fallback_36bd41'",fontStyle:"normal"},className:"__className_36bd41"}},6691:function(e,n,t){e.exports=t(1295)},1396:function(e,n,t){e.exports=t(6685)}},function(e){e.O(0,[954,749,685,971,596,744],function(){return e(e.s=7022)}),_N_E=e.O()}]);