(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{23:function(e,a,t){e.exports=t(36)},28:function(e,a,t){},34:function(e,a,t){e.exports=t.p+"static/media/parallax0.b08a2096.jpg"},35:function(e,a,t){e.exports=t.p+"static/media/parallax1.51269a38.jpg"},36:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(16),c=t.n(r),s=(t(28),t(9)),i=t(8),m=t(5);var o=function(e){var a=e.navlinks;return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark fixed-top"},l.a.createElement(i.b,{className:"navbar-brand py-2",to:"/"},"Garrett Roberts"),l.a.createElement("button",{type:"button",className:"navbar-toggler","data-toggle":"collapse","data-target":"#navBarToggler"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navBarToggler"},l.a.createElement("ul",{className:"navbar-nav"},a.map((function(e){return l.a.createElement("li",{className:"nav-item px-3",key:e},l.a.createElement(i.b,{className:"nav-link",to:"/#".concat(e)},e.charAt(0).toUpperCase()+e.slice(1)))})))))},d=t(19),u=t(20),g=t(22),v=t(21),h=function(e){Object(g.a)(t,e);var a=Object(v.a)(t);function t(){var e;return Object(d.a)(this,t),(e=a.call(this)).state={options:["MongoDB architect","Node developer","Javascript Fanatic","ReactJS's #1 Fan","Full-stack Developer"],index:0},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){e.setState({index:(e.state.index+1)%e.state.options.length})}),2e3)}},{key:"render",value:function(){return l.a.createElement("div",{className:"col-lg-12 text-center text-primary bg-light"},l.a.createElement("div",{className:"bg-primary rounded text-light"},l.a.createElement("h3",{className:"mt-5 pt-4"},"Hello, I'm Garrett."),l.a.createElement("h2",{className:"pb-4 mb-5"},l.a.createElement("strong",null,"<",l.a.createElement("span",{id:"scrollingElement"},l.a.createElement("strong",null,this.state.options[this.state.index])),"/>"))))}}]),t}(l.a.Component),p=function(e){return"/personalPortfolio"+e};var E=function(e){var a=e.divID;return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row mt-5 d-flex justify-content-center",id:a},l.a.createElement(h,null),l.a.createElement("div",{className:"col-lg-12 mb-5 bg-light text-center text-dark"},l.a.createElement("h2",null,"About Me"),l.a.createElement("hr",null),l.a.createElement("img",{src:p("/assets/images/profile.jpg"),className:"rounded float-left img-fluid mr-4 mb-2",style:{height:"175px"},alt:"profile"}),l.a.createElement("p",{className:"text-left"},"\u2003 Full-stack web developer making a switch from ministry to computer science.  Recently earned a certification in Full Stack Web Development from Vanderbilt University, where I gained competence in Javascript, CSS3, React.js, MySQL, MongoDB, node.js, and express servers.  I\u2019ve actively used these skills to design and create full-scale web apps in coordination with remote teams using agile development methods.  In a recent project with two teammates, we designed and deployed a node app that alerts users when they have potentially crossed paths with someone else who has tested positive for Covid-19.   Equipped to work collaboratively either on-site or remotely in a team setting to ensure optimal results for user-centered and technology-centered designs."))))},f=t(13);var b=function(e){var a=e.backgroundID;return 0===a?l.a.createElement(f.Parallax,{bgImage:t(34),strength:300,blur:{min:-20,max:20}},l.a.createElement("div",{style:{height:"50vh"}})):1===a?l.a.createElement(f.Parallax,{bgImage:t(35),strength:300,blur:{min:-20,max:20}},l.a.createElement("div",{style:{height:"50vh"}})):void 0};var N=function(){return l.a.createElement("div",{className:"container-fluid bg-light py-3",id:"portfolioDiv"},l.a.createElement("div",{className:"row d-flex flex-column border"},l.a.createElement("h1",{className:"text-center text-dark"},"Portfolio"),l.a.createElement("h2",{className:"text-center text-dark"},"Here are some things I've been working on.")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6  text-center"},l.a.createElement("figure",null,l.a.createElement("a",{href:"#"},l.a.createElement("img",{src:"https://via.placeholder.com/300x300",className:"img-fluid my-3 w-50 img-thumbnail"}),l.a.createElement("figcaption",null,l.a.createElement("h3",{className:"text-dark"},"Project 1"))))),l.a.createElement("div",{className:"col-lg-6 text-center"},l.a.createElement("figure",null,l.a.createElement("a",{href:"#"},l.a.createElement("img",{src:"https://via.placeholder.com/300x300",className:"img-fluid my-3 w-50 img-thumbnail"}),l.a.createElement("figcaption",null,l.a.createElement("h3",{className:"text-dark"},"Project 2")))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6 text-center"},l.a.createElement("figure",null,l.a.createElement("a",{href:"#"},l.a.createElement("img",{src:"https://via.placeholder.com/300x300",className:"img-fluid my-3 w-50 img-thumbnail"}),l.a.createElement("figcaption",null,l.a.createElement("h3",{className:"text-dark"},"Project 3"))))),l.a.createElement("div",{className:"col-lg-6 text-center"},l.a.createElement("figure",null,l.a.createElement("a",{href:"#"},l.a.createElement("img",{src:"https://via.placeholder.com/300x300",className:"img-fluid my-3 w-50 img-thumbnail"}),l.a.createElement("figcaption",null,l.a.createElement("h3",{className:"text-dark"},"Project 4")))))))};var x=function(){var e=Object(n.useState)("home"),a=Object(s.a)(e,2);return a[0],a[1],l.a.createElement("div",null,l.a.createElement(E,{divID:"home"}),l.a.createElement(b,{backgroundID:0}),l.a.createElement(N,null),l.a.createElement(b,{backgroundID:1}))};var w=function(){return l.a.createElement("footer",{className:"bg-dark"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("ul",{className:"nav justify-content-center"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{href:"https://github.com/garrettmroberts",className:"text-light nav-link"},l.a.createElement("span",{className:"fa fa-github fa-2x"}))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{href:"https://www.linkedin.com/in/garrett-roberts-b45640186/",className:"text-light nav-link"},l.a.createElement("span",{className:"fa fa-linkedin fa-2x"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.freecodecamp.org/garrettmroberts",className:"text-light nav-link"},l.a.createElement("span",{className:"fa fa-free-code-camp fa-2x"})))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 text-center text-light"},l.a.createElement("p",null,"Made with \u2665 in Nashville, TN")))))};var k=function(){var e=Object(n.useState)("home"),a=Object(s.a)(e,2);return a[0],a[1],l.a.createElement(i.a,null,l.a.createElement("div",null,l.a.createElement(o,{navlinks:["home","portfolio","contact"]}),l.a.createElement(m.a,{from:"/personalPortfolio",to:"/"}),l.a.createElement(m.b,{exact:!0,path:["/","/about"],component:x}),l.a.createElement(w,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.7b467546.chunk.js.map