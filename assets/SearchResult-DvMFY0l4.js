import{u as B,f as se,g as ae,h as Y,i as te,P as le,t as re,j as ue,k as b,l as q,m as ie,w as M,n as a,p as oe,R as j,q as ne,s as ce,v as ve,C as pe,x as de,y as he,z as ye,A as me,B as ge,D as fe,E as He,F as I,G as _,H as Re,I as x,J as ke}from"./app-CUC5uzEW.js";const we=["/","/vuepress/%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9F%9F.html","/404.html","/vuepress/"],Qe="SEARCH_PRO_QUERY_HISTORY",g=B(Qe,[]),qe=()=>{const{queryHistoryCount:t}=x,l=t>0;return{enabled:l,queryHistory:g,addQueryHistory:r=>{l&&(g.value=Array.from(new Set([r,...g.value.slice(0,t-1)])))},removeQueryHistory:r=>{g.value=[...g.value.slice(0,r),...g.value.slice(r+1)]}}},P=t=>we[t.id]+("anchor"in t?`#${t.anchor}`:""),xe="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:U}=x,f=B(xe,[]),Ee=()=>{const t=U>0;return{enabled:t,resultHistory:f,addResultHistory:l=>{if(t){const r={link:P(l),display:l.display};"header"in l&&(r.header=l.header),f.value=[r,...f.value.slice(0,U-1)]}},removeResultHistory:l=>{f.value=[...f.value.slice(0,l),...f.value.slice(l+1)]}}},Se=t=>{const l=pe(),r=Y(),E=de(),i=b(0),k=q(()=>i.value>0),h=he([]);return ye(()=>{const{search:y,terminate:S}=me(),H=Re(c=>{const R=c.join(" "),{searchFilter:A=d=>d,splitWord:C,suggestionsFilter:O,...m}=l.value;R?(i.value+=1,y(c.join(" "),r.value,m).then(d=>A(d,R,r.value,E.value)).then(d=>{i.value-=1,h.value=d}).catch(d=>{console.warn(d),i.value-=1,i.value||(h.value=[])})):h.value=[]},x.searchDelay-x.suggestDelay);M([t,r],([c])=>H(c),{immediate:!0}),ge(()=>{S()})}),{isSearching:k,results:h}};var Ce=se({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(t,{emit:l}){const r=ae(),E=Y(),i=te(le),{enabled:k,addQueryHistory:h,queryHistory:y,removeQueryHistory:S}=qe(),{enabled:H,resultHistory:c,addResultHistory:R,removeResultHistory:A}=Ee(),C=k||H,O=re(t,"queries"),{results:m,isSearching:d}=Se(O),u=ue({isQuery:!0,index:0}),v=b(0),p=b(0),T=q(()=>C&&(y.value.length>0||c.value.length>0)),D=q(()=>m.value.length>0),L=q(()=>m.value[v.value]||null),z=()=>{const{isQuery:e,index:s}=u;s===0?(u.isQuery=!e,u.index=e?c.value.length-1:y.value.length-1):u.index=s-1},G=()=>{const{isQuery:e,index:s}=u;s===(e?y.value.length-1:c.value.length-1)?(u.isQuery=!e,u.index=0):u.index=s+1},J=()=>{v.value=v.value>0?v.value-1:m.value.length-1,p.value=L.value.contents.length-1},V=()=>{v.value=v.value<m.value.length-1?v.value+1:0,p.value=0},K=()=>{p.value<L.value.contents.length-1?p.value+=1:V()},N=()=>{p.value>0?p.value-=1:J()},F=e=>e.map(s=>ke(s)?s:a(s[0],s[1])),W=e=>{if(e.type==="customField"){const s=fe[e.index]||"$content",[o,Q=""]=He(s)?s[E.value].split("$content"):s.split("$content");return e.display.map(n=>a("div",F([o,...n,Q])))}return e.display.map(s=>a("div",F(s)))},w=()=>{v.value=0,p.value=0,l("updateQuery",""),l("close")},X=()=>k?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},i.value.queryHistory),y.value.map((e,s)=>a("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===s}],onClick:()=>{l("updateQuery",e)}},[a(I,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},e),a("button",{class:"search-pro-remove-icon",innerHTML:_,onClick:o=>{o.preventDefault(),o.stopPropagation(),S(s)}})]))])):null,Z=()=>H?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},i.value.resultHistory),c.value.map((e,s)=>a(j,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===s}],onClick:()=>{w()}},()=>[a(I,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[e.header?a("div",{class:"content-header"},e.header):null,a("div",e.display.map(o=>F(o)).flat())]),a("button",{class:"search-pro-remove-icon",innerHTML:_,onClick:o=>{o.preventDefault(),o.stopPropagation(),A(s)}})]))])):null;return ie("keydown",e=>{if(t.isFocusing){if(D.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")K();else if(e.key==="Enter"){const s=L.value.contents[p.value];h(t.queries.join(" ")),R(s),r.push(P(s)),w()}}else if(H){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:s}=u;u.isQuery?(l("updateQuery",y.value[s]),e.preventDefault()):(r.push(c.value[s].link),w())}}}}),M([v,p],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>a("div",{class:["search-pro-result-wrapper",{empty:t.queries.length?!D.value:!T.value}],id:"search-pro-results"},t.queries.length?d.value?a(oe,{hint:i.value.searching}):D.value?a("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:s},o)=>{const Q=v.value===o;return a("li",{class:["search-pro-result-list-item",{active:Q}]},[a("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),s.map((n,ee)=>{const $=Q&&p.value===ee;return a(j,{to:P(n),class:["search-pro-result-item",{active:$,"aria-selected":$}],onClick:()=>{h(t.queries.join(" ")),R(n),w()}},()=>[n.type==="text"?null:a(n.type==="title"?ne:n.type==="heading"?ce:ve,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?a("div",{class:"content-header"},n.header):null,a("div",W(n))])])})])})):i.value.emptyResult:C?T.value?[X(),Z()]:i.value.emptyHistory:i.value.emptyResult)}});export{Ce as default};
