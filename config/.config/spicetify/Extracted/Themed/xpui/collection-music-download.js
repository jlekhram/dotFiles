"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[4246],{64508:(e,a,r)=>{r.d(a,{z:()=>m});var s=r(16428),i=r(85802),n=r(85399),t=r(34315),u=r(78710),c=r(96791),o=r(92126),l=r(4637);function m(e,a){switch(e.type){case c.p.ALBUM:return(0,l.jsx)(s.r,{uri:e.uri,name:e.name,images:e.images,sharingInfo:null,artists:e.artists,index:a},e.uri);case c.p.ARTIST:return(0,l.jsx)(i.I,{uri:e.uri,name:e.name,images:e.images,index:a},e.uri);case c.p.SHOW:return(0,l.jsx)(u._,{uri:e.uri,name:e.name,images:e.images,publisher:e.publisher,sharingInfo:null,mediaType:o.E.UNKNOWN,index:a},e.uri);case c.p.AUDIOBOOK:return(0,l.jsx)(n.c,{uri:e.uri,name:e.name,images:e.images,authorName:e.authorName,index:a},e.uri);case c.p.PLAYLIST:return(0,l.jsx)(t.Z,{uri:e.uri,name:e.name,images:e.images,description:"",authorName:e.creatorName,index:a},e.uri);default:return null}}},54029:(e,a,r)=>{r.r(a),r.d(a,{LibraryMusicDownloads:()=>g,default:()=>h});r(99692);var s=r(59496),i=r(94),n=r(63840),t=r(64508),u=r(11021),c=r(55119),o=r(5788),l=r(38055),m=r(57922),d=r(4637);const g=(0,s.memo)((function(){const{isLoading:e,hasError:a,items:r}=(0,l.G)();return e||a?(0,d.jsx)(u.h,{hasError:a,errorMessage:n.ag.get("error.request-collection-music-downloads-failure")}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.D,{as:"h1",variant:"canon",className:m.Z.header,children:n.ag.get("music_downloads")}),(0,d.jsx)(o.JL,{value:"EntitiesGrid",children:(0,d.jsx)(c.T,{render:()=>r.map(((e,a)=>(0,d.jsx)(o.JL,{value:"card",index:a,children:(0,t.z)(e,a)},e.uri)))})})]})})),h=g},38055:(e,a,r)=>{r.d(a,{G:()=>n});var s=r(59496),i=r(73511);function n(){const e=(0,i.c)(),[a,r]=(0,s.useState)(!0),[n,t]=(0,s.useState)(!1),[u,c]=(0,s.useState)([]);return(0,s.useEffect)((()=>{(async()=>{try{const a=await e.getDownloads();c(a)}catch(e){t(!0)}finally{r(!1)}})()}),[e]),{isLoading:a,hasError:n,items:u}}}}]);
//# sourceMappingURL=collection-music-download.js.map