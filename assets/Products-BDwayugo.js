import{u as c,j as s,s as y,r as a,a as P,b as L,c as u,d as g,e as l,f as $,g as C,L as S}from"./index-BTTXNjDm.js";import{e as q,B as m,s as E,a as b,b as k,P as w}from"./ProductList-6Rq9skoF.js";const M="_title_hizpq_1",R="_options_hizpq_11",z="_option_hizpq_11",r={title:M,options:R,option:z},V=()=>{const e=c(),n=(t,i)=>{e(y({active:t.target.checked,filter:i.name}))};return s.jsxs(s.Fragment,{children:[s.jsx("div",{className:r.title,children:"Vehicle equipment"}),s.jsx("div",{className:r.options,children:q.map(t=>s.jsxs("label",{className:r.option,onChange:i=>n(i,t),children:[s.jsx("input",{type:"checkbox",name:t.name}),s.jsx("svg",{width:"32",height:"32",children:s.jsx("use",{href:`./icons.svg#icon-${t.icon}`})}),t.title]},t.name))})]})},B="_filters_1vhr2_1",I="_title_1vhr2_9",O="_location_1vhr2_17",o={filters:B,title:I,location:O},T="_title_1x7pd_1",A="_options_1x7pd_12",D="_option_1x7pd_12",d={title:T,options:A,option:D},H=()=>{const e=a.useMemo(()=>[{name:"van",title:"Van",icon:"van"},{name:"fully-integrated",title:"Integrated",icon:"integrated"},{name:"alcove",title:"Alcove",icon:"alcove"}],[]),n=c(),t=i=>n(P(i.name));return s.jsxs(s.Fragment,{children:[s.jsx("div",{className:d.title,children:"Vehicle type"}),s.jsx("div",{className:d.options,children:e.map(i=>s.jsxs("label",{className:d.option,onChange:()=>t(i),children:[s.jsx("input",{type:"radio",name:"type",value:i.name}),s.jsx("svg",{width:"40",height:"29",children:s.jsx("use",{href:`./icons.svg#icon-${i.icon}`})}),i.title]},i.name))})]})},G="_location_1u5e0_1",J="_input_1u5e0_5",K="_icon_1u5e0_20",p={location:G,input:J,icon:K},Q=()=>{const e=c(),n=t=>e(L(t.target.value));return s.jsxs("div",{className:p.location,children:[s.jsx("svg",{width:"18",height:"20",className:p.icon,children:s.jsx("use",{href:"./icons.svg#icon-map-pin"})}),s.jsx("input",{className:p.input,type:"text",onChange:n})]})},U=()=>{const e=c();a.useEffect(()=>{e(u())},[e]);const n=()=>{e(g({page:1})),e(u())};return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:o.location,children:[s.jsx("div",{className:o.title,children:"Location"}),s.jsx(Q,{})]}),s.jsx("div",{className:o.title,children:"Filters"}),s.jsxs("div",{className:o.filters,children:[s.jsx(V,{}),s.jsx(H,{})]}),s.jsx(m,{onClick:n,children:"Search"})]})},W="_page_wnpy6_1",X="_filters_wnpy6_7",Y="_main_wnpy6_11",h={page:W,filters:X,main:Y};function ts(){const e=c(),n=l(E),t=l(b),i=l(k),[j,f]=a.useState(!0),[x,_]=a.useState(!0);a.useEffect(()=>{n.page===1?(e($(n)),_(!0)):(e(C(n)),_(!1))},[e,n]),a.useEffect(()=>{const{page:N,limit:F}=n;f(!!t.length&&t.length>=N*F)},[t,n]);const v=()=>{e(g({page:n.page+1})),e(u())};return s.jsxs("div",{className:h.page,children:[s.jsx("div",{className:h.filters,children:s.jsx(U,{})}),s.jsxs("div",{className:h.main,children:[i&&x?s.jsx(S,{}):t.length?s.jsx(w,{products:t}):s.jsx("h3",{style:{alignSelf:"center",padding:"64px 0"},children:"No products found"}),j&&s.jsx(m,{variant:"light",onClick:v,style:{alignSelf:"center"},disabled:i&&!x,children:"Load more"})]})]})}export{ts as default};