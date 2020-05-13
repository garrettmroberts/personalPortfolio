(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{23:function(e,t,a){e.exports=a(37)},28:function(e,t,a){},34:function(e,t,a){e.exports=a.p+"static/media/parallax0.7804f289.jpg"},35:function(e,t,a){e.exports=a.p+"static/media/parallax1.ac2516d8.jpg"},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(16),o=a.n(l),s=(a(28),a(9)),c=a(5),i=a(10);var m=function(e){var t=e.navlinks;return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark fixed-top"},n.a.createElement(i.HashLink,{className:"navbar-brand py-2",to:"/"},"Garrett Roberts"),n.a.createElement("button",{type:"button",className:"navbar-toggler","data-toggle":"collapse","data-target":"#navBarToggler"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navBarToggler"},n.a.createElement("ul",{className:"navbar-nav"},t.map((function(e){return n.a.createElement("li",{className:"nav-item px-3",key:e},n.a.createElement(i.HashLink,{className:"nav-link",to:"/#".concat(e),smooth:"true"},e.charAt(0).toUpperCase()+e.slice(1)))})))))},d=a(19),p=a(20),u=a(22),h=a(21),v=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).state={options:["MongoDB architect","Node developer","Javascript Fanatic","ReactJS's #1 Fan","Full-stack Developer"],index:0},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){e.setState({index:(e.state.index+1)%e.state.options.length})}),2e3)}},{key:"render",value:function(){return n.a.createElement("div",{className:"col-lg-12 text-center text-primary bg-light"},n.a.createElement("div",{className:"bg-primary rounded text-light"},n.a.createElement("h3",{className:"mt-5 pt-4"},"Hello, I'm Garrett."),n.a.createElement("h2",{className:"pb-4 mb-5"},n.a.createElement("strong",null,"<",n.a.createElement("span",{id:"scrollingElement"},n.a.createElement("strong",null,this.state.options[this.state.index])),"/>"))))}}]),a}(n.a.Component),f=function(e){return"/personalPortfolio"+e};var g=function(e){var t=e.divID;return n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row mt-5 d-flex justify-content-center",id:t},n.a.createElement(v,null),n.a.createElement("div",{className:"col-lg-12 mb-5 bg-light text-center text-dark"},n.a.createElement("h2",null,"About Me"),n.a.createElement("hr",null),n.a.createElement("img",{src:f("/assets/images/profile.jpg"),className:"rounded float-left img-fluid mr-4 mb-2",style:{height:"175px"},alt:"profile"}),n.a.createElement("p",{className:"text-left"},"\u2003 Full-stack web developer making a switch from ministry to computer science.  Recently earned a certification in Full Stack Web Development from Vanderbilt University, where I gained competence in Javascript, CSS3, React.js, MySQL, MongoDB, node.js, and express servers.  I\u2019ve actively used these skills to design and create full-scale web apps in coordination with remote teams using agile development methods.  In a recent project with two teammates, we designed and deployed a node app that alerts users when they have potentially crossed paths with someone else who has tested positive for Covid-19.   Equipped to work collaboratively either on-site or remotely in a team setting to ensure optimal results for user-centered and technology-centered designs."))))},E=a(13);var b=function(e){var t=e.backgroundID;return 0===t?n.a.createElement(E.Parallax,{bgImage:a(34),strength:300,blur:{min:-20,max:20}},n.a.createElement("div",{style:{height:"50vh"}})):1===t?n.a.createElement(E.Parallax,{bgImage:a(35),strength:300,blur:{min:-20,max:20}},n.a.createElement("div",{style:{height:"50vh"}})):void 0};a(36);var k=function(e){var t=e.assets;return n.a.createElement("div",{className:"col-lg-4"},n.a.createElement("article",{className:"card"},n.a.createElement("img",{className:"card-img-top",src:f(t.image),alt:"{assets.name} screenshot"}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title"},t.name),n.a.createElement("p",{className:"card-text"},t.desc)),n.a.createElement("div",{className:"card-footer"},n.a.createElement("a",{href:t.link,className:"btn btn-primary btn-block",rel:"noopener noreferrer",target:"_blank"},"Github Repo"),n.a.createElement("a",{href:t.deployedLink,className:"btn btn-primary btn-block",rel:"noopener noreferrer",target:"_blank"},"Deployed App"))))};var N=function(e){var t=e.divID;return n.a.createElement("div",{className:"container-fluid bg-light py-3",id:t},n.a.createElement("div",{className:"row d-flex flex-column border"},n.a.createElement("h1",{className:"text-center text-dark"},"Portfolio"),n.a.createElement("h2",{className:"text-center text-dark"},"Here are some things I've been working on.")),n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row d-flex"},[{name:"Workout Planner",link:"https://github.com/garrettmroberts/workout-planner",deployedLink:"https://workout-planner296.herokuapp.com/",image:"/assets/images/workoutPlannerScreenshot.png",desc:"Built with one partner.  This app builds a workout plan for the next two months based on user goals and available equipment.  This app runs on a full MERN stack."},{name:"Novel-19",link:"https://github.com/garrettmroberts/novel-19",deployedLink:"https://novel-19.herokuapp.com/home",image:"/assets/images/novel19Screenshot.png",desc:"This project was built in a small group of three.  It allows for multiple user instances, where each user can mark locations they have visited.  If a user tests positive for Covid-19, they can update their status and all of their locations are marked on a public map.  The goal is to make a safer way for people to find out if they've come ito contact with potentially infected persons within the last two weeks."},{name:"User Directory",link:"https://github.com/garrettmroberts/user_directory",deployedLink:"https://user-directory5467.herokuapp.com/",image:"/assets/images/userDirectoryScreenshot.png",desc:"This directory is built out of react components.  It can sort and filter any json file passe into it.  Because of it's modularity, any other json file can be fed to it, the table will populate dynamically, the sort filters work out of the box, and the filter functionality can work with minor tweaks."}].map((function(e){return n.a.createElement(k,{assets:e,key:e.name+"Card"})})))))};var w=function(e){var t=e.divID;return n.a.createElement("div",{className:"jumbotron jumbotron-fluid",id:t},n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"display-4"},"Contact me"),n.a.createElement("p",{className:"lead"},"Feel free to reach me at",n.a.createElement("a",{href:"mailto:garrettmroberts@gmail.com"}," garrettmroberts@gmail.com")),n.a.createElement("p",{className:"lead"},"Or reach me via",n.a.createElement("a",{href:"https://www.linkedin.com/in/garrett-roberts-b45640186/"}," LinkedIn"),".")))};var y=function(){return n.a.createElement("div",null,n.a.createElement(g,{divID:"home"}),n.a.createElement(b,{backgroundID:0}),n.a.createElement(N,{divID:"portfolio"}),n.a.createElement(b,{backgroundID:1}),n.a.createElement(w,{divID:"contact"}))};var x=function(){return n.a.createElement("footer",{className:"bg-dark"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("ul",{className:"nav justify-content-center"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{href:"https://github.com/garrettmroberts",className:"text-light nav-link"},n.a.createElement("span",{className:"fa fa-github fa-2x"}))),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{href:"https://www.linkedin.com/in/garrett-roberts-b45640186/",className:"text-light nav-link"},n.a.createElement("span",{className:"fa fa-linkedin fa-2x"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.freecodecamp.org/garrettmroberts",className:"text-light nav-link"},n.a.createElement("span",{className:"fa fa-free-code-camp fa-2x"})))))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 text-center text-light"},n.a.createElement("p",null,"Made with \u2665 in Nashville, TN")))))};var I=function(){return n.a.createElement(s.BrowserRouter,null,n.a.createElement("div",null,n.a.createElement(m,{navlinks:["home","portfolio","contact"]}),n.a.createElement(c.d,{exact:!0,path:["/","/about"],component:y}),n.a.createElement(c.c,{from:"/personalPortfolio",to:"/"}),n.a.createElement(x,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.94e3407e.chunk.js.map