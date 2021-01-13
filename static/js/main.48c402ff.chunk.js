(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{53:function(e,t,a){},54:function(e,t,a){},56:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},94:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a(0),s=a(16),c=a.n(s),o=(a(53),a(10)),r=a(11),l=a(13),d=a(12),m=(a(54),a(55),a(23)),u=a(9),h=a(110),j=a(109),g=a(4),b=a(20),p=(a(56),[{title:"About",url:"/about",cName:"nav-links"},{title:"Projects",url:"/projects",cName:"nav-links"},{title:"Timeline",url:"/timeline",cName:"nav-links"},{title:"Contact",url:"/contact",cName:"nav-links"}]),v=a(39),f=a(25),y="ENABLE_LOADING",x="DISABLE_LOADING",O="FETCH_LOADING",k=function(){return{type:y}},S=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).componentDidUpdate=function(){var e=document.querySelector(".loader").style,t=document.querySelector(".logo-link").style,a=document.querySelectorAll(".nav-links"),i=document.querySelector(".active"),s=document.querySelector(".opened");if(!n.state.updating&&n.props.storage.loading){n.setState({updating:!0}),e.display="block",t.pointerEvents="none";for(var c=0;c<a.length;c++)a[c].style.pointerEvents="none";setTimeout((function(){e.opacity=1,document.body.style.overflowY="hidden",e.zIndex="1"}),1),setTimeout((function(){e.opacity=0}),1e3),setTimeout((function(){document.body.style.overflowY="auto",e.zIndex="-1",e.display="none",t.pointerEvents="auto";for(var c=0;c<a.length;c++)a[c].style.pointerEvents="auto";null!==i&&(i.style.pointerEvents="none"),null!==s&&(s.style.pointerEvents="none"),n.props.disableLoading(),n.setState({updating:!1})}),3e3)}},n.toggleMenuIcon=n.toggleMenuIcon.bind(Object(b.a)(n)),n.headerClicked=n.headerClicked.bind(Object(b.a)(n)),n.linkClicked=n.linkClicked.bind(Object(b.a)(n)),n.state={active:!1,updating:!1},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchLoading()}},{key:"toggleMenuIcon",value:function(){var e=this.state.active;this.setState({active:!e})}},{key:"linkClicked",value:function(){this.props.enableLoading(),window.scrollTo(0,0),this.toggleMenuIcon()}},{key:"headerClicked",value:function(){this.props.enableLoading(),this.setState({active:!1})}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"navbar",children:[Object(n.jsx)("div",{className:"loader",children:Object(n.jsx)("div",{className:"loaderIcon",children:Object(n.jsx)(v.RingLoader,{color:"#c5b358",loading:this.props.loading})})}),Object(n.jsx)("div",{className:"copyright"}),Object(n.jsxs)("div",{className:"nav-container",children:[Object(n.jsx)("div",{className:"logo color",children:Object(n.jsx)(m.c,{className:"logo-link color",exact:!0,activeClassName:"active",to:"/",onClick:this.headerClicked,children:"Logan J. Kim"})}),Object(n.jsxs)("div",{className:this.state.active?"menu-icon opened":"menu-icon",onClick:this.toggleMenuIcon,children:[Object(n.jsx)("div",{className:"bar bar-1"}),Object(n.jsx)("div",{className:"bar bar-2"}),Object(n.jsx)("div",{className:"bar bar-3"})]}),Object(n.jsx)("div",{className:this.state.active?"menu opened":"menu",children:Object(n.jsx)("ul",{className:"menu-ul",children:p.map((function(t,a){return Object(n.jsx)("li",{className:"menu-li",children:Object(n.jsx)(m.c,{className:t.cName,activeClassName:"active active-menu",to:t.url,onClick:e.linkClicked,children:t.title})},a)}))})})]})]})}}]),a}(i.Component),w=Object(f.b)((function(e){return{storage:e.storage}}),{fetchLoading:function(){return function(e){e({type:O})}},enableLoading:k,disableLoading:function(){return{type:x}}})(S),N=(a(88),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={loading:!1},n.onButtonClicked=n.onButtonClicked.bind(Object(b.a)(n)),n}return Object(r.a)(a,[{key:"onButtonClicked",value:function(){this.setState({loading:!0}),this.props.enableLoading()}},{key:"componentDidMount",value:function(){document.title="Home - Logan's Portfolio";var e=document.querySelector(".profile-image"),t=document.querySelector(".name"),a=document.querySelector(".job"),n=document.querySelector(".button"),i=document.querySelector(".description");g.a.from([t,a],1.3,{delay:1.3,ease:"power3.out",y:100,stagger:{amount:.15}}),g.a.from([i],1.5,{y:30,delay:1.3,opacity:0,ease:"power3.InOut"}),g.a.from([e],1.3,{delay:1.7,ease:"power3.out",x:150,opacity:0,stagger:{amount:.15}}),g.a.from([n],1.3,{delay:1.9,ease:"back.out",transformOrigin:"center",scaleX:.2,scaleY:.2,opacity:0,stagger:{amount:.15}})}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"page",children:Object(n.jsx)("section",{id:"colorlib-hero",className:"js-fullheight home","data-section":"home",children:Object(n.jsxs)("div",{className:"flexslider js-fullheight main flex",children:[Object(n.jsxs)("div",{className:"section vertical-middle a",children:[Object(n.jsx)("div",{className:"line-wrap",children:Object(n.jsx)("h1",{className:"name color",children:"Logan J. Kim"})}),Object(n.jsx)("div",{className:"line-wrap",children:Object(n.jsx)("p",{className:"title color job",children:Object(n.jsx)("em",{children:"Software Engineer"})})}),Object(n.jsx)("p",{className:"description",children:"Hi there, I'm Logan. My path in software engineering began in 2017. Since then, I've completed my advanced technology diploma in software engineering with high honours and gained professional experience in both private and public sectors to broaden my horizons. I am currently a senior software engineer at an applied research centre of Centennial College."}),Object(n.jsx)(m.b,{to:"/projects",onClick:this.onButtonClicked,children:Object(n.jsx)("div",{className:"button",children:Object(n.jsx)("div",{className:"inner-button-1",children:Object(n.jsx)("div",{className:"inner-button-2",children:Object(n.jsx)("div",{className:"inner-button-3",children:Object(n.jsx)("div",{className:"inner-button-4",children:Object(n.jsxs)("div",{className:"inner-button-content",children:[Object(n.jsx)("span",{className:"button-text",children:"Projects"}),Object(n.jsx)("span",{className:"hover-button-text",children:"Projects"})]})})})})})})})]}),Object(n.jsx)("div",{className:"section vertical-bottom b",children:Object(n.jsx)("img",{className:"profile-image",src:"/images/profile.png",alt:"Logan Kim's portrait"})})]})})})}}]),a}(i.Component)),T=Object(f.b)(null,{enableLoading:k})(N),C=(a(89),a(2)),I=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"componentDidMount",value:function(){document.title="About - Logan's Portfolio";var e=document.querySelector(".header"),t=document.querySelector(".caption"),a=document.querySelector(".content__img"),n=document.querySelector(".divider"),i=new C.c;g.a.from([e,t],1.3,{delay:1.3,ease:"power3.out",y:100,stagger:{amount:.15}}),g.a.from([n],1.3,{delay:1.3,ease:"power3.out",transformOrigin:"center",scaleX:.7,scaleY:.7,opacity:0,stagger:{amount:.15}}),g.a.from([a],1.3,{delay:1.3,ease:"back.out",transformOrigin:"center",scaleX:.5,scaleY:.5,opacity:0,stagger:{amount:.15}}),setTimeout((function(){i.to([a],.7,{rotation:7}).to([a],2,{rotation:-2,ease:"elastic.out(0.9, 0.3)"})}),800)}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"page",children:Object(n.jsx)("section",{id:"colorlib-hero",className:"js-fullheight about","data-section":"about",children:Object(n.jsxs)("div",{className:"view main content",children:[Object(n.jsxs)("div",{className:"header-section",children:[Object(n.jsx)("div",{className:"line-wrap",children:Object(n.jsx)("h1",{className:"header color",children:"I am who I am and I have the need to be"})}),Object(n.jsx)("div",{className:"line-wrap",children:Object(n.jsx)("div",{className:"caption",children:Object(n.jsx)("em",{children:"- The Little Prince -"})})}),Object(n.jsx)("hr",{className:"divider center"})]}),Object(n.jsxs)("div",{className:"content",children:[Object(n.jsx)("img",{className:"content__img",src:"/images/about.jpg",alt:"Logan playing an acoustic guitar around a campfire"}),Object(n.jsxs)("div",{className:"content__txt",children:[Object(n.jsx)("p",{children:"while(passion) { this.buildNext(withNewIdea); }"}),Object(n.jsx)("p",{children:"I always liked playing with LEGO blocks in my childhood. I was fascinated to see so many different outcomes that I could have with the same number of blocks. I never got tired of it as I could simply break and build another world of my own once I was done. A world that I built had its own beauty; however, I was not satisfied with just one world as I knew my next world would enlighten me with the beauty of its own. I could get an infinite number of my own beautiful worlds as long as I approach them with different perspectives and creativity."}),Object(n.jsx)("p",{children:"Software engineering calls to all the passions that I had with LEGO blocks ever since I was a kid. In a virtual environment, I can build my own world as many and as big as I want with unlimited resources incorporating my creativity. Codes can be reused and there is always room for improvement. Shout out to the software community for sharing many open sources and welcoming beginners. Since I learned about the world of software engineering, I knew this is the career that I would love to pursue for the rest of my life."}),Object(n.jsx)("p",{children:"I still vividly recall my first semester as a software engineering major. I built my first web page in HTML and CSS, as well as a simple calculator in C# that has been made many people\u2019s lives easy for a long time. I studied as hard as I could as I felt a thirst for knowledge. I loved to learn new languages and technologies, implemented them to see better outcomes with an easier way to develop. Then, I realized that I desire to see people around me benefited from my own works and I need to gain more experience to learn how to be more practical. This led me to join a co-op program. More than a year of professional experience not only allowed me to visualize how to transform my academic knowledge to practical use, it also taught me how to explore and use various enterprise-level technologies."}),Object(n.jsx)("p",{children:"As a software engineer who graduated in December 2020 with high honours, my expertise lies in the following:"}),Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{children:[Object(n.jsx)("strong",{children:"Languages:"})," Java, JavaScript, C# (.NET), Python, HTML, CSS, TypeScript, SQL, PL/SQL, PHP"]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("strong",{children:"Frameworks/Libraries:"})," Spring, ASP.NET, Angular, React, React Native, Node.js, JUnit, Selenium"]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("strong",{children:"DBMS/Server:"})," Firebase, Azure, AWS, Oracle, MySQL, MSSQL, DynamoDB, MongoDB, J2EE, Jenkins"]})]}),Object(n.jsx)("p",{children:"This is what keeps me up at night and I will not stop creating a new beautiful world with my next creativity and passion. I can\u2019t wait to share them with the world! "})]})]})]})})})}}]),a}(i.Component),A=(a(90),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"componentDidMount",value:function(){document.title="Projects - Logan's Portfolio";var e=document.querySelector(".header"),t=document.querySelector(".caption"),a=document.querySelector(".divider");g.a.from([e,t],1.3,{delay:1.3,ease:"power3.out",y:100,stagger:{amount:.15}}),g.a.from([a],1.3,{delay:1.3,ease:"power3.out",transformOrigin:"center",scaleX:.7,scaleY:.7,opacity:0,stagger:{amount:.15}})}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"page",children:Object(n.jsx)("section",{id:"colorlib-hero",className:"js-fullheight project","data-section":"projects",children:Object(n.jsxs)("div",{className:"view main content",children:[Object(n.jsx)("div",{className:"line-wrap",children:Object(n.jsx)("h1",{className:"header color",children:"Remember that wherever your heart is, there you will find your treasure"})}),Object(n.jsx)("div",{className:"line-wrap",children:Object(n.jsx)("div",{className:"caption",children:Object(n.jsx)("em",{children:"- The Alchemist -"})})}),Object(n.jsx)("hr",{className:"divider center"}),Object(n.jsx)("div",{className:"content",children:Object(n.jsx)("div",{className:"content--inner",children:Object(n.jsx)("p",{className:"content--excerpt",children:"Coming soon..."})})})]})})})}}]),a}(i.Component)),L=(a(91),[{dateRange:"April 2020 - January 2021",title:"Senior Software Engineer",company:"Centennial College: WIMTACH",duties:["Engineered a 10-month HCIS project developing interface modules and REST APIs in Java with Spring","Led a team of 7, using JUnit and REST Assured to implement an automation test suite on GitHub with Jenkins, as a part of CI pipeline, which reduced bugs by 40% and accelerated the deployment by 20%","Increased resilience of applications by implementing Pub/Sub with Google Cloud or MQTT as an asynchronous middleware to handle high-volume messages of access logs","Improved response time of REST APIs by 30% and coding performance of developers by 20% with various enhancements including implementation of Lombok","Collaborated with BA/QA team members and front-end developers to establish objectives and design more functional, cohesive codes to enhance the system performance and the user experience","Developed original UI mock-ups and prototypes that clearly illustrate how sites function and look with Adobe XD","Conducted adjustments based on feedback from internal teams and key stakeholders in an Agile manner"],techStacks:[{altTxt:"Java",link:"/images/techStacks/java.png"},{altTxt:"Spring",link:"/images/techStacks/spring.svg"},{altTxt:"Microsoft SQL Server",link:"/images/techStacks/mssql.png"},{altTxt:"Junit5",link:"/images/techStacks/junit5.png"},{altTxt:"REST-assured",link:"/images/techStacks/rest-assured.png"},{altTxt:"Project Lombok",link:"/images/techStacks/projectLombok.png"},{altTxt:"Amazon Web Service",link:"/images/techStacks/aws.png"},{altTxt:"Microsoft Azure",link:"/images/techStacks/azure.png"},{altTxt:"Jenkins",link:"/images/techStacks/jenkins.png"},{altTxt:"Docker",link:"/images/techStacks/docker.png"},{altTxt:"Google Cloud Platform",link:"/images/techStacks/gcp.webp"},{altTxt:"MQTT",link:"/images/techStacks/mqtt.png"},{altTxt:"Git",link:"/images/techStacks/git.png"},{altTxt:"GitHub",link:"/images/techStacks/github.png"},{altTxt:"Jira",link:"/images/techStacks/jira.svg"},{altTxt:"Confluence",link:"/images/techStacks/confluence.png"},{altTxt:"Trello",link:"/images/techStacks/trello.png"},{altTxt:"Adobe XD",link:"/images/techStacks/adobe-xd.png"}]},{dateRange:"September 2019 - December 2019",title:"Front-End Development Consultant",company:"Ministry of the Attorney General",duties:["Built a web system in HTML along with JavaScript and CSS for an efficient and effective hearing room booking process","Engineered a website prototype as a lead developer using PHP with the WordPress platform to optimize the way the public receives critical information from the website","Optimized, modified and tested extranet and internet sites to ensure that they meet WCAG 2.0 Level AA of the Accessibility for Ontarians with Disabilities Act (AODA) including conversion of 100+ documents","Consulted clients on business solutions supporting continuous improvement initiatives and delivered 9 web-based digital tools and products written in PHP, JavaScript and CSS","Programmed a website with WordPress to improve the daily media digest distribution system","Coordinated and facilitated training sessions for 10+ employees on WCMS, SQL and SFTP; developed training materials based on staff and organizational needs and requirements","Developed internal and external IT initiatives, projects and products, and solved IT challenges by providing evidence-based recommendations and solutions"],techStacks:[{altTxt:"JavaScript",link:"/images/techStacks/javascript.png"},{altTxt:"HTML",link:"/images/techStacks/html.png"},{altTxt:"CSS",link:"/images/techStacks/css.png"},{altTxt:"SASS",link:"/images/techStacks/sass.png"},{altTxt:"C#",link:"/images/techStacks/c-sharp.svg"},{altTxt:"jQuery",link:"/images/techStacks/jquery.png"},{altTxt:"Oracle",link:"/images/techStacks/oracle.png"},{altTxt:"PHP",link:"/images/techStacks/php.svg"},{altTxt:"MySQL",link:"/images/techStacks/mysql.png"},{altTxt:"Wordpress.org",link:"/images/techStacks/wordpress.png"},{altTxt:"Git",link:"/images/techStacks/git.png"},{altTxt:"GitHub",link:"/images/techStacks/github.png"}]},{dateRange:"January 2019 - May 2019",title:"Webmaster",company:"Environment and Land Tribunals Ontario",duties:["Organized and maintained an Oracle database of an electronic hearing board and e-decisions on a daily basis","Conducted audit on Wordpress.org based extranet and internet sites and enhanced digital communications by 10% by adjusting navigation flows and UI structure","Increased traffic of an external site by 15% by optimizing keyword uses with Google Analytics.","Setup data collection and analysis tools for an external website","Walked clients through a step-by-step process for troubleshooting software issues","Developed over 400 pages of interactive onboarding package for new managers and staff to increase their productivity"],techStacks:[{altTxt:"JavaScript",link:"/images/techStacks/javascript.png"},{altTxt:"HTML",link:"/images/techStacks/html.png"},{altTxt:"CSS",link:"/images/techStacks/css.png"},{altTxt:"jQuery",link:"/images/techStacks/jquery.png"},{altTxt:"Oracle",link:"/images/techStacks/oracle.png"},{altTxt:"PHP",link:"/images/techStacks/php.svg"},{altTxt:"MySQL",link:"/images/techStacks/mysql.png"},{altTxt:"Wordpress.org",link:"/images/techStacks/wordpress.png"},{altTxt:"Git",link:"/images/techStacks/git.png"},{altTxt:"GitHub",link:"/images/techStacks/github.png"}]},{dateRange:"September 2017 - December 2020",title:"Ontario College Advanced Diploma (High Honours), <br/>Software Engineering Technology (Co-op)",company:"Centennial College",duties:["Senior student researcher of Centennial College's applied research centre, 2020","Selected as one of the top college-wide students for Centennial College Golf Merit Scholarship in 2020","Selected as one of the top 5 college-wide international students for CCSAI Merit Scholarship in 2019","Participated in Centennial College SETAS-ARIES Student Hackathon, 2018"],techStacks:[{altTxt:"Centennial College",link:"/images/techStacks/centennial-college.jpeg"},{altTxt:"CCSAI",link:"/images/techStacks/ccsai.png"},{altTxt:"WIMTACH",link:"/images/techStacks/wimtach.png"}]}]),E=a(40);g.b.registerPlugin(E.a);var q=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"componentDidMount",value:function(){document.title="Timeline - Logan's Portfolio";var e=document.querySelector(".header"),t=document.querySelector(".caption"),a=document.querySelector(".divider");g.a.from([e,t],1.3,{delay:1.3,ease:"power3.out",y:100,stagger:{amount:.15}}),g.a.from([a],1.3,{delay:1.3,ease:"power3.out",transformOrigin:"center",scaleX:.7,scaleY:.7,opacity:0,stagger:{amount:.15}}),g.a.from(".timeline-body",1.3,{delay:1.3,ease:"power3.out",opacity:0,y:100,stagger:{amount:.15}});for(var n=1;n<=4;n++){var i=document.querySelector(".timeline-event-icon"+n),s=document.querySelector(".timeline-event-thumbnail"+n),c=document.querySelector(".timeline-title"+n),o=document.querySelector(".timeline-company"+n),r=document.querySelector(".timeline-duties"+n),l=document.querySelector(".timeline-tech-stack"+n);g.b.from([i,s],{delay:1,ease:"back.out",transformOrigin:"center",scaleX:.1,scaleY:.1,opacity:0,scrollTrigger:{trigger:[i,s],start:"top 100%",end:"bottom 10%",toggleActions:"restart reverse restart reverse"}}),g.b.from([c,o],{delay:.5,duration:.5,ease:"ease.out",y:200,stagger:{amount:.15},scrollTrigger:{trigger:[i,s],start:"top 100%",end:"bottom 10%",toggleActions:"restart reverse restart reverse"}}),g.b.from([r],{duration:1,x:50,opacity:0,ease:"power3.inOut",scrollTrigger:{trigger:[r],start:"top 100%",end:"bottom 10%",toggleActions:"restart reverse restart reverse"}}),g.b.from([l],{delay:1,ease:"back.out",transformOrigin:"center",scaleX:.8,scaleY:.8,opacity:0,scrollTrigger:{trigger:[l],start:"top 100%",end:"bottom 10%",toggleActions:"restart reverse restart reverse"}})}}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"page",children:Object(n.jsx)("section",{id:"colorlib-hero",className:"js-fullheight timeline","data-section":"timeline",children:Object(n.jsxs)("div",{className:"view main container",children:[Object(n.jsx)("div",{className:"line-wrap",children:Object(n.jsx)("h1",{className:"header center color",children:"Strive not to be a success, but rather to be of value"})}),Object(n.jsx)("div",{className:"line-wrap",children:Object(n.jsx)("div",{className:"caption center",children:Object(n.jsx)("em",{children:"- Albert Einstein -"})})}),Object(n.jsx)("hr",{className:"divider center"}),Object(n.jsx)("div",{children:Object(n.jsx)("ul",{className:"timeline-body",children:L.map((function(e,t){return Object(n.jsxs)("li",{className:"timeline-event timeline-event"+(t+1),children:[Object(n.jsx)("div",{className:"timeline-event-icon"+(t+1),children:Object(n.jsx)("label",{className:"timeline-event-icon"})}),Object(n.jsxs)("div",{className:"timeline-event-copy",children:[Object(n.jsx)("p",{className:"timeline-event-thumbnail timeline-event-thumbnail"+(t+1),children:e.dateRange}),Object(n.jsx)("div",{className:"line-wrap",children:Object(n.jsx)("h3",{className:"color timeline-title"+(t+1),children:e.title})}),Object(n.jsx)("div",{className:"line-wrap",children:Object(n.jsx)("h4",{className:"color timeline-company"+(t+1),children:e.company})}),Object(n.jsx)("ul",{className:"timeline-duties"+(t+1),children:e.duties.map((function(e,t){return Object(n.jsx)("li",{children:e})}))}),Object(n.jsx)("div",{className:"timeline-tech-stack timeline-tech-stack"+(t+1),children:e.techStacks.map((function(e,t){return Object(n.jsxs)("div",{className:"tech-stack-wrapper",children:[Object(n.jsx)("img",{className:"tech-stack-image",src:e.link,title:e.altTxt,alt:"logo of "+e.altTxt}),Object(n.jsx)("div",{className:"middle-wrapper translate middle",children:Object(n.jsx)("span",{children:e.altTxt})})]})}))})]})]},t)}))})}),Object(n.jsx)("br",{})]})})})}}]),a}(i.Component),M=(a(92),a(41)),P=a.n(M),D=a(43),H=a.n(D),J=a(44),z=a.n(J),G=a(42),B=a.n(G),R=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"componentDidMount",value:function(){document.title="Contact - Logan's Portfolio";var e=document.querySelector(".header"),t=document.querySelector(".caption"),a=document.querySelector(".divider"),n=document.querySelectorAll(".from-left"),i=document.querySelectorAll(".from-right"),s=document.querySelector(".mailbox");g.a.from([e,t],1.3,{delay:1.3,ease:"power3.out",y:100,stagger:{amount:.15}}),g.a.from([a],1.3,{delay:1.3,ease:"power3.out",transformOrigin:"center",scaleX:.7,scaleY:.7,opacity:0,stagger:{amount:.15}}),g.a.from([n],1.3,{delay:1.3,ease:"power3.out",x:-100,opacity:0,stagger:{amount:.15}}),g.a.from([i],1.3,{delay:1.3,ease:"power3.out",x:100,opacity:0,stagger:{amount:.15}}),g.a.from([s],1.3,{delay:1.3,ease:"back.out",transformOrigin:"center",scaleX:.7,scaleY:.7,opacity:0,stagger:{amount:.15}})}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"page",children:Object(n.jsx)("section",{id:"colorlib-hero",className:"js-fullheight contact","data-section":"contact",children:Object(n.jsxs)("div",{className:"view main content",children:[Object(n.jsx)("div",{className:"wrap",children:Object(n.jsxs)("div",{className:"left vertical-middle",children:[Object(n.jsx)("div",{className:"line-wrap",children:Object(n.jsx)("h1",{className:"header color",children:"Invisible threads are the strongest ties"})}),Object(n.jsx)("div",{className:"line-wrap",children:Object(n.jsx)("div",{className:"caption center",children:Object(n.jsx)("em",{children:"- Fredrich Nietzsche -"})})}),Object(n.jsx)("hr",{className:"divider center"}),Object(n.jsxs)("div",{className:"outer-section from-left",children:[Object(n.jsx)("div",{className:"icon-section",children:Object(n.jsx)(P.a,{style:{fontSize:60,color:"#696969"}})}),Object(n.jsx)("div",{className:"content-section",children:Object(n.jsx)("a",{href:"mailto:Logan.Kim0212@gmail.com",children:"Logan.Kim0212@gmail.com"})})]}),Object(n.jsxs)("div",{className:"outer-section from-right",children:[Object(n.jsx)("div",{className:"icon-section",children:Object(n.jsx)(B.a,{color:"disabled",style:{fontSize:60,color:"#696969"}})}),Object(n.jsx)("div",{className:"content-section",children:Object(n.jsx)("a",{href:"https://www.linkedin.com/in/logan-junhwi-kim/",target:"_blank",rel:"noreferrer",children:"linkedin.com/in/Logan-Junhwi-Kim"})})]}),Object(n.jsxs)("div",{className:"outer-section from-left",children:[Object(n.jsx)("div",{className:"icon-section",children:Object(n.jsx)(H.a,{style:{fontSize:60,color:"#696969"}})}),Object(n.jsx)("div",{className:"content-section",children:Object(n.jsx)("a",{href:"https://github.com/logankim0212",target:"_blank",rel:"noreferrer",children:"github.com/LoganKim0212"})})]}),Object(n.jsxs)("div",{className:"outer-section from-right",children:[Object(n.jsx)("div",{className:"icon-section",children:Object(n.jsx)(z.a,{style:{fontSize:60,color:"#696969"}})}),Object(n.jsx)("div",{className:"content-section",children:"Richmond Hill, Ontario"})]})]})}),Object(n.jsx)("div",{className:"right vertical-middle",children:Object(n.jsx)("img",{className:"mailbox",src:"/images/mailbox.png",alt:"Mailbox sketch"})})]})})})}}]),a}(i.Component),_=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=function(e){g.a.from([e.children[0].firstElementChild,e.children[0].lastElementChild],1.1,{y:30,delay:1.1,opacity:0,ease:"power3.InOut"})},t=function(e){g.a.to([e.children[0].firstElementChild,e.children[0].lastElementChild],.5,{transformOrigin:"center",scaleX:.9,scaleY:.9,ease:"back.InOut",opacity:1,stagger:{amount:.2}})};return Object(n.jsxs)(m.a,{children:[Object(n.jsx)(w,{}),Object(n.jsx)(u.a,{render:function(a){var i=a.location;return Object(n.jsx)(h.a,{children:Object(n.jsx)(j.a,{in:!0,timeout:1200,classNames:"fade",onExit:t,onEntering:e,unmountOnExit:!0,children:Object(n.jsxs)(u.c,{location:i,children:[Object(n.jsx)(u.a,{exact:!0,path:"/",component:T}),Object(n.jsx)(u.a,{exact:!0,path:"/about",component:I}),Object(n.jsx)(u.a,{exact:!0,path:"/projects",component:A}),Object(n.jsx)(u.a,{exact:!0,path:"/timeline",component:q}),Object(n.jsx)(u.a,{exact:!0,path:"/contact",component:R})]})},i.key)})}})]})}}]),a}(i.Component),Q=(a(94),a(22)),W=a(45),X=a(24),Y={loading:!1};var F=Object(Q.c)({storage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return console.log("FETCH_LOADING"),Object(X.a)(Object(X.a)({},e),{},{loading:e.loading});case y:return console.log("ENABLE_LOADING"),Object(X.a)(Object(X.a)({},e),{},{loading:!0});case x:return console.log("DISABLE_LOADING"),Object(X.a)(Object(X.a)({},e),{},{loading:!1});default:return e}}}),K=[W.a],U=Object(Q.d)(F,{},Q.a.apply(void 0,K)),V=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return window.onload=function(e){var t=document.querySelector(".landing-animation").style,a=document.querySelector(".index-header").style;t.backgroundColor="#fafafa",setTimeout((function(){t.transition="1s",t.backgroundColor="#0e1111"}),1),setTimeout((function(){a.opacity="1"}),1e3),setTimeout((function(){t.opacity="0",t.zIndex="-1",document.body.style.overflow="auto",function(e){var t=e.createElement("script");t.setAttribute("data-position",2),t.setAttribute("data-size","small"),t.setAttribute("data-color","#c5b358"),t.setAttribute("data-type","3"),t.setAttribute("data-account","MAOMam5abd"),t.setAttribute("src","https://cdn.userway.org/widget.js"),(e.body||e.head).appendChild(t)}(document)}),5e3),setTimeout((function(){c.a.render(Object(n.jsx)(f.a,{store:U,children:Object(n.jsx)(_,{})}),document.getElementById("root"))}),4800)},Object(n.jsx)("div",{className:"landing-animation",children:Object(n.jsxs)("div",{className:"index-header",children:[Object(n.jsx)("span",{className:"smoky-span",children:"L"}),Object(n.jsx)("span",{className:"smoky-span",children:"o"}),Object(n.jsx)("span",{className:"smoky-span",children:"g"}),Object(n.jsx)("span",{className:"smoky-span",children:"a"}),Object(n.jsx)("span",{className:"smoky-span",children:"n"}),Object(n.jsx)("span",{className:"smoky-span",children:"\xa0J.\xa0"}),Object(n.jsx)("span",{className:"smoky-span",children:"K"}),Object(n.jsx)("span",{className:"smoky-span",children:"i"}),Object(n.jsx)("span",{className:"smoky-span",children:"m"})]})})}}]),a}(i.Component),Z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,111)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),s(e),c(e)}))};c.a.render(Object(n.jsx)(V,{}),document.getElementById("root")),Z()}},[[96,1,2]]]);
//# sourceMappingURL=main.48c402ff.chunk.js.map