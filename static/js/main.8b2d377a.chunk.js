(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,name:"Simpsons",image:"https://sp.yimg.com/ib/th?id=OIP.Sw7j_c3ij6I2cYDSTaRrUQHaE8&pid=15.1&rs=1&c=1&qlt=95&w=175&h=117"},{id:2,name:"Simpsons",image:"https://sp.yimg.com/ib/th?id=OIP._2dGyHOb4H78rDl9fIPl0wHaEK&pid=15.1&rs=1&c=1&qlt=95&w=197&h=110"},{id:3,name:"Simpsons",image:"https://sp.yimg.com/ib/th?id=OIP.ffdLq7DbClEM-wzsesL0RgHaFj&pid=15.1&rs=1&c=1&qlt=95&w=151&h=113"},{id:4,name:"Simpsons",image:"http://images5.fanpop.com/image/photos/31600000/The-Simpsons-the-simpsons-31637503-120-90.jpg"},{id:5,name:"Simpsons",image:"http://images.fanpop.com/images/image_uploads/The-Simpsons-the-simpsons-73127_120_90.jpg"},{id:6,name:"Simpsons",image:"http://images4.fanpop.com/image/photos/18300000/the-Simpsons-the-simpsons-18325281-114-120.gif"},{id:7,name:"Simpsons",image:"http://images2.fanpop.com/images/photos/6300000/The-Simpsons-the-simpsons-6344392-120-90.jpg"},{id:8,name:"Simpsons",image:"http://images6.fanpop.com/image/photos/37700000/The-Simpsons-the-simpsons-37729534-120-96.jpg"},{id:9,name:"Simpsons",image:"http://images2.fanpop.com/images/photos/4300000/lisa-the-simpsons-4353745-109-120.jpg"},{id:10,name:"Simpsons",image:"http://images6.fanpop.com/image/photos/36200000/The-Simpsons-image-the-simpsons-36222763-120-120.png"},{id:11,name:"Simpsons",image:"http://images2.fanpop.com/image/photos/10000000/sexy-marge-the-simpsons-10019763-112-120.jpg"},{id:12,name:"Simpsons",image:"http://images4.fanpop.com/image/photos/15800000/marg-simpson-the-simpsons-15836360-86-120.jpg"}]},,,function(e,t,a){e.exports=a(19)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(8),o=a.n(i),c=(a(15),a(1)),m=a(2),r=a(4),l=a(3),p=a(5);a(16);var h=function(e){return s.a.createElement("div",{className:"wrapper"},e.children)};a(17);var d=function(e){return s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"img-container",onClick:function(){return e.clickedImage(e.id)}},s.a.createElement("img",{alt:e.name,src:e.image})))},g=a(6);a(18);var u=function(e){return s.a.createElement("header",{className:"scoreB"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6 col-left"},s.a.createElement("h5",null,e.title)),s.a.createElement("div",{className:"col-md-3 col-right"},s.a.createElement("h6",null,"High Score ",e.topScore)),s.a.createElement("div",{className:"col-md-3 col-right"},s.a.createElement("h6",null,"Current Score: ",e.score))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-12 col-right"},s.a.createElement("h6",{id:"note"},"Click on a Image, but don't click on it more than once!"))))};function f(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e}var S=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(r.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={showAlert:0,showSuccess:0,score:0,topScore:0,friends:g,clickedfriends:[]},a.clickedImage=function(e){console.log(a.state.clickedfriends);var t=a.state.clickedfriends,n=a.state.score,s=a.state.topScore;a.setState({showAlert:0}),-1===t.indexOf(e)?(t.push(e),console.log(t),a.handleIncrement(),a.makeShuffle()):12===n?a.setState({showSuccess:1,score:0,clickedfriends:[]}):(a.setState({score:0,clickedfriends:[]}),console.log("duplicate")),n>s&&a.setState({topScore:n})},a.handleIncrement=function(){a.setState({score:a.state.score+1})},a.makeShuffle=function(){a.setState({friends:f(g)})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(u,{title:"Simpsons Clicky Game",score:this.state.score,topScore:this.state.topScore}),s.a.createElement(h,null,this.state.friends.map(function(t){return s.a.createElement(d,{id:t.id,key:t.id,name:t.name,image:t.image,clickedImage:e.clickedImage})})))}}]),t}(s.a.Component),v=function(e){function t(){return Object(c.a)(this,t),Object(r.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(S,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.8b2d377a.chunk.js.map