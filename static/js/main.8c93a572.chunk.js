(this["webpackJsonpreact-music-player"]=this["webpackJsonpreact-music-player"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(2),r=n(15),i=n.n(r),s=n(4),o=n.n(s),u=n(7),l=n(9),d=(n(22),n(23),function(e){var t=e.currentSong;return Object(c.jsxs)("div",{className:"song-container",children:[Object(c.jsx)("img",{src:t.cover,alt:"cover"}),Object(c.jsx)("h2",{children:t.name}),Object(c.jsx)("h3",{children:t.artist})]})}),p=n(3),b=(n(24),n(8)),j=n(5),h=function(e){var t=e.currentSong,n=e.isPlaying,r=e.setIsPlaying,i=e.audioRef,s=e.setSongInfo,l=e.songInfo,d=e.songs,h=e.setCurrentSong,f=e.setSongs;Object(a.useEffect)((function(){var e=d.map((function(e){return e.id===t.id?Object(p.a)(Object(p.a)({},e),{},{active:!0}):Object(p.a)(Object(p.a)({},e),{},{active:!1})}));f(e)}),[t]);var v=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},m=function(){var e=Object(u.a)(o.a.mark((function e(c){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=d.findIndex((function(e){return e.id===t.id})),"skip-forward"!==c){e.next=6;break}return e.next=4,h(d[(a+1)%d.length]);case 4:e.next=12;break;case 6:if("skip-back"!==c){e.next=12;break}if((a-1)%d.length!==-1){e.next=11;break}return h(d[d.length-1]),n&&i.current.play(),e.abrupt("return");case 11:h(d[(a-1)%d.length]);case 12:n&&i.current.play();case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g={transform:"translateX(".concat(l.animationPercentage,"%)")},O={background:"linear-gradient(to right, ".concat(t.color[0],", ").concat(t.color[1]," )")};return Object(c.jsxs)("div",{className:"player",children:[Object(c.jsxs)("div",{className:"time-control",children:[Object(c.jsx)("p",{children:v(l.currentTime)}),Object(c.jsxs)("div",{style:O,className:"track",children:[Object(c.jsx)("input",{onChange:function(e){i.current.currentTime=e.target.value,s(Object(p.a)(Object(p.a)({},l),{},{currentTime:e.target.value}))},min:0,max:l.duration,value:l.currentTime,type:"range"}),Object(c.jsx)("div",{style:g,className:"animate-track"})]}),Object(c.jsx)("p",{children:v(l.duration||0)})]}),Object(c.jsxs)("div",{className:"play-control",children:[Object(c.jsx)(b.a,{onClick:function(){return m("skip-back")},className:"skip-back",size:"2x",icon:j.a}),Object(c.jsx)(b.a,{onClick:function(){n?(i.current.pause(),r(!n)):(i.current.play(),r(!n))},className:"play",size:"2x",icon:n?j.d:j.e}),Object(c.jsx)(b.a,{onClick:function(){return m("skip-forward")},className:"skip-forward",size:"2x",icon:j.b})]})]})},f=(n(30),n(31),function(e){var t=e.song,n=e.songs,a=e.setCurrentSong,r=e.id,i=e.audioRef,s=e.isPlaying,l=e.setSongs,d=function(){var e=Object(u.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.filter((function(e){return e.id===r})),e.next=3,a(t[0]);case 3:c=n.map((function(e){return e.id===r?Object(p.a)(Object(p.a)({},e),{},{active:!0}):Object(p.a)(Object(p.a)({},e),{},{active:!1})})),l(c),s&&i.current.play();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{onClick:d,className:"library-song ".concat(t.active?"selected":null),children:[Object(c.jsx)("img",{src:t.cover,alt:"cover"}),Object(c.jsxs)("div",{className:"song-description",children:[Object(c.jsx)("h3",{children:t.name}),Object(c.jsx)("h4",{children:t.artist})]})]})}),v=function(e){var t=e.songs,n=e.setCurrentSong,a=e.audioRef,r=e.isPlaying,i=e.setSongs,s=e.libraryStatus;return Object(c.jsxs)("div",{className:"library ".concat(s?"active-library":null),children:[Object(c.jsx)("h2",{children:"Library"}),Object(c.jsx)("div",{className:"library-songs",children:t.map((function(e){return Object(c.jsx)(f,{setSongs:i,isPlaying:r,audioRef:a,id:e.id,songs:t,setCurrentSong:n,song:e},e.id)}))})]})},m=(n(32),function(e){var t=e.libraryStatus,n=e.setLibraryStatus;return Object(c.jsxs)("div",{className:"nav",children:[Object(c.jsx)("h1",{children:"Waves"}),Object(c.jsxs)("button",{onClick:function(){return n(!t)},children:["Library",Object(c.jsx)(b.a,{icon:j.c})]})]})}),g=n(6);var O=function(){return[{name:"Beaver Creek",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10075",color:["#205950","#2ab3bf"],id:Object(g.v4)(),active:!0},{name:"Daylight",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9272",color:["#EF8EA9","#ab417f"],id:Object(g.v4)(),active:!1},{name:"Keep Going",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9222",color:["#CD607D","#c94043"],id:Object(g.v4)(),active:!1},{name:"Nightfall",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9148",color:["#EF8EA9","#ab417f"],id:Object(g.v4)(),active:!1},{name:"Reflection",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9228",color:["#CD607D","#c94043"],id:Object(g.v4)(),active:!1},{name:"Under the City Stars",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10074",color:["#205950","#2ab3bf"],id:Object(g.v4)(),active:!1}]};var x=function(){var e=Object(a.useState)(O()),t=Object(l.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(n[0]),s=Object(l.a)(i,2),p=s[0],b=s[1],j=Object(a.useState)(!1),f=Object(l.a)(j,2),g=f[0],x=f[1],y=Object(a.useRef)(null),S=Object(a.useState)(!1),k=Object(l.a)(S,2),w=k[0],C=k[1],N=Object(a.useState)({currentTime:0,duration:0,animationPercentage:0}),P=Object(l.a)(N,2),A=P[0],I=P[1],M=function(e){var t=e.target.currentTime,n=e.target.duration,c=Math.round(t),a=Math.round(n),r=Math.round(c/a*100);I({currentTime:t,duration:n,animationPercentage:r})},R=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.findIndex((function(e){return e.id===p.id})),e.next=3,b(n[(t+1)%n.length]);case 3:g&&y.current.play();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"App ".concat(w?"library-active":null),children:[Object(c.jsx)(m,{libraryStatus:w,setLibraryStatus:C}),Object(c.jsx)(d,{currentSong:p}),Object(c.jsx)(h,{audioRef:y,setIsPlaying:x,isPlaying:g,currentSong:p,setSongInfo:I,songInfo:A,songs:n,setCurrentSong:b,setSongs:r}),Object(c.jsx)(v,{audioRef:y,songs:n,setCurrentSong:b,isPlaying:g,setSongs:r,libraryStatus:w}),Object(c.jsx)("audio",{onLoadedMetadata:M,onTimeUpdate:M,ref:y,src:p.audio,onEnded:R})]})};i.a.render(Object(c.jsx)(x,{}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.8c93a572.chunk.js.map