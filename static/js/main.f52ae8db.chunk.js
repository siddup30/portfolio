(this.webpackJsonpfirstsample=this.webpackJsonpfirstsample||[]).push([[0],{26:function(e,a,t){e.exports=t.p+"static/media/cureconsult.5151f836.gif"},39:function(e,a,t){e.exports=t.p+"static/media/mypicture.66606ed7.jpeg"},47:function(e,a,t){e.exports=t(62)},53:function(e,a,t){},54:function(e,a,t){},62:function(e,a,t){"use strict";t.r(a);var l=t(1),s=t.n(l),r=t(17),n=t.n(r),c=(t(52),t(53),t(10)),i=t(11),m=t(13),o=t(12),d=t(79),p=t(80),u=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(c.a)(this,t),(l=a.call(this,e)).mobileMenuToggle=function(){l.state.mobileMenu?l.setState({mobileMenu:!1}):l.setState({mobileMenu:!0})},l.srollToSection=function(e){var a=e.target.getAttribute("href");console.log(window.document.getElementsByClassName("resume")[0].offsetTop),window.scrollTo({top:window.document.getElementsByClassName(a.split("#")[1])[0].offsetTop-50,behavior:"smooth"})},l.mobileMenuRemove=function(e){l.setState({mobileMenu:!1}),l.srollToSection(e)},l.state={activeClass:"",mobileMenu:!1,mobileMenuCloseActive:""},l}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",(function(){window.scrollY>5?e.setState({activeClass:"menu--active",mobileMenuCloseActive:"mobile-menu--active"}):e.setState({activeClass:"",mobileMenuCloseActive:""})}))}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"menu ".concat(this.state.activeClass)},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"menu__wrapper d-none d-lg-block col-md-12"},s.a.createElement("nav",{className:""},s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("a",{href:"#about",onClick:this.mobileMenuRemove},"About")),s.a.createElement("li",null,s.a.createElement("a",{href:"#resume",onClick:this.mobileMenuRemove},"Resume")),s.a.createElement("li",null,s.a.createElement("a",{href:"#portfolio",onClick:this.mobileMenuRemove},"Portfolio")),s.a.createElement("li",null,s.a.createElement("a",{href:"#contact",onClick:this.mobileMenuRemove},"Contact"))))),s.a.createElement("div",{className:"menu__wrapper col-md-12 d-lg-none"},s.a.createElement("button",{type:"button",className:"menu__mobile-button",style:{padding:0}},s.a.createElement("span",{onClick:this.mobileMenuToggle},s.a.createElement(d.a,null))))))),s.a.createElement("div",{className:"".concat(this.state.mobileMenu?"mobile-menu d-lg-none active "+this.state.mobileMenuCloseActive:"mobile-menu d-lg-none "+this.state.mobileMenuCloseActive)},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"mobile-menu__close",onClick:this.mobileMenuToggle},s.a.createElement("span",null,s.a.createElement(p.a,null))),s.a.createElement("nav",{className:"mobile-menu__wrapper"},s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("a",{onClick:this.mobileMenuRemove,href:"#about"},"About")),s.a.createElement("li",null,s.a.createElement("a",{onClick:this.mobileMenuRemove,href:"#resume"},"Resume")),s.a.createElement("li",null,s.a.createElement("a",{onClick:this.mobileMenuRemove,href:"#portfolio"},"Portfolio")),s.a.createElement("li",null,s.a.createElement("a",{onClick:this.mobileMenuRemove,href:"#contact"},"Contact")))))))}}]),t}(l.Component),E=t(20),v=(t(54),t(39)),g=t.n(v),_=t(83),N=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("section",{className:"about container section"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-10"},s.a.createElement("h2",{className:"mb-4"},"Hi_"),s.a.createElement("p",{className:"mb-4 pb-2"},"I am Experienced Software Engineer in web development works on both front-end and back-end. Skilled in Javascript, Bootstrap, Cascading Style Sheets (CSS), jQuery, SQL, Mongo DB, Java and PHP used libraries and frameworks like ReactJs, Laravel and durandal. Strong engineering professional with a Master of Computer Applications (MCA) focused in Computer Science from VTU University. "),s.a.createElement(_.a,null,s.a.createElement("a",{href:"./Shiddalingesh_Patil-CV.pdf",target:"_blank",className:"section_btn site-btn",download:!0},s.a.createElement("span",{className:"download-icon"},s.a.createElement(d.b,null)),"Download CV")))))}}]),t}(l.Component),h=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("section",{className:"resume container section"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-10"},s.a.createElement("h2",{id:"resume_header",className:"section__title"},"Resume_"),s.a.createElement("p",{className:"section__description"},"Full-stack Developer with 4 years experience building rich analytical responsive and SEO comply healthcare websites, landing pages, mobile apps. Highly skilled in HTML/CSS/JavaScript/JQuery plus modern libraries and frameworks."))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-8 section__resume resume-list"},s.a.createElement("h3",{className:"resume-list_title"},"education"),s.a.createElement("div",{className:"resume-list__block"},s.a.createElement("p",{className:"resume-list__block-title"},"Visvesvaraya Technological University "),s.a.createElement("p",{className:"resume-list__block-date"},"2013 - 2016"),s.a.createElement("p",null,"Master of Computer Applications")),s.a.createElement("div",{className:"resume-list__block"},s.a.createElement("p",{className:"resume-list__block-title"},"Karnatak University Dharwad"),s.a.createElement("p",{className:"resume-list__block-date"},"2010 - 2013"),s.a.createElement("p",null,"Bachelor of Computer Applications")))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-8 section__resume resume-list"},s.a.createElement("h3",{className:"resume-list_title"},"employment"),s.a.createElement("div",{className:"resume-list__block"},s.a.createElement("p",{className:"resume-list__block-title"},"Searchlight Health"),s.a.createElement("p",{className:"resume-list__block-date"},"2016 - present"),s.a.createElement("p",null,"Software Engineer")),s.a.createElement("div",{className:"resume-list__block"},s.a.createElement("p",{className:"resume-list__block-title"},"Navigem Data"),s.a.createElement("p",{className:"resume-list__block-date"},"2016 - 2016"),s.a.createElement("p",null,"Student Intern")))),s.a.createElement("div",{className:"row section__resume progress-list js-progress-list"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("h3",{className:"progress-list__title"},"general skills")),s.a.createElement("div",{className:"col-md-5 mr-auto"},s.a.createElement("div",{className:"progress-list__skill"},s.a.createElement("p",null,s.a.createElement("span",{className:"progress-list__skill-title"},"html5"),s.a.createElement("span",{className:"progress-list__skill-value"},"80%")),s.a.createElement("div",{className:"progress"},s.a.createElement("div",{className:"progress-bar",role:"progressbar","aria-valuenow":"80","aria-valuemin":"0","aria-valuemax":"100",style:{width:"80%"}}))),s.a.createElement("div",{className:"progress-list__skill"},s.a.createElement("p",null,s.a.createElement("span",{className:"progress-list__skill-title"},"css"),s.a.createElement("span",{className:"progress-list__skill-value"},"70%")),s.a.createElement("div",{className:"progress"},s.a.createElement("div",{className:"progress-bar",role:"progressbar","aria-valuenow":"70","aria-valuemin":"0","aria-valuemax":"100",style:{width:"70%"}}))),s.a.createElement("div",{className:"progress-list__skill"},s.a.createElement("p",null,s.a.createElement("span",{className:"progress-list__skill-title"},"java script"),s.a.createElement("span",{className:"progress-list__skill-value"},"80%")),s.a.createElement("div",{className:"progress"},s.a.createElement("div",{className:"progress-bar",role:"progressbar","aria-valuenow":"90","aria-valuemin":"0","aria-valuemax":"100",style:{width:"90%"}}))),s.a.createElement("div",{className:"progress-list__skill"},s.a.createElement("p",null,s.a.createElement("span",{className:"progress-list__skill-title"},"jquery"),s.a.createElement("span",{className:"progress-list__skill-value"},"80%")),s.a.createElement("div",{className:"progress"},s.a.createElement("div",{className:"progress-bar",role:"progressbar","aria-valuenow":"80","aria-valuemin":"0","aria-valuemax":"100",style:{width:"80%"}}))),s.a.createElement("div",{className:"progress-list__skill"},s.a.createElement("p",null,s.a.createElement("span",{className:"progress-list__skill-title"},"knockoutJs"),s.a.createElement("span",{className:"progress-list__skill-value"},"80%")),s.a.createElement("div",{className:"progress"},s.a.createElement("div",{className:"progress-bar",role:"progressbar","aria-valuenow":"80","aria-valuemin":"0","aria-valuemax":"100",style:{width:"80%"}})))),s.a.createElement("div",{className:"col-md-5 mr-auto"},s.a.createElement("div",{className:"progress-list__skill"},s.a.createElement("p",null,s.a.createElement("span",{className:"progress-list__skill-title"},"bootstrap"),s.a.createElement("span",{className:"progress-list__skill-value"},"80%")),s.a.createElement("div",{className:"progress"},s.a.createElement("div",{className:"progress-bar",role:"progressbar","aria-valuenow":"80","aria-valuemin":"0","aria-valuemax":"100",style:{width:"80%"}}))),s.a.createElement("div",{className:"progress-list__skill"},s.a.createElement("p",null,s.a.createElement("span",{className:"progress-list__skill-title"},"react"),s.a.createElement("span",{className:"progress-list__skill-value"},"60%")),s.a.createElement("div",{className:"progress"},s.a.createElement("div",{className:"progress-bar",role:"progressbar","aria-valuenow":"60","aria-valuemin":"0","aria-valuemax":"100",style:{width:"60%"}}))),s.a.createElement("div",{className:"progress-list__skill"},s.a.createElement("p",null,s.a.createElement("span",{className:"progress-list__skill-title"},"react-native"),s.a.createElement("span",{className:"progress-list__skill-value"},"70%")),s.a.createElement("div",{className:"progress"},s.a.createElement("div",{className:"progress-bar",role:"progressbar","aria-valuenow":"70","aria-valuemin":"0","aria-valuemax":"100",style:{width:"70%"}}))),s.a.createElement("div",{className:"progress-list__skill"},s.a.createElement("p",null,s.a.createElement("span",{className:"progress-list__skill-title"},"laravel"),s.a.createElement("span",{className:"progress-list__skill-value"},"80%")),s.a.createElement("div",{className:"progress"},s.a.createElement("div",{className:"progress-bar",role:"progressbar","aria-valuenow":"80","aria-valuemin":"0","aria-valuemax":"100",style:{width:"80%"}}))),s.a.createElement("div",{className:"progress-list__skill"},s.a.createElement("p",null,s.a.createElement("span",{className:"progress-list__skill-title"},"java"),s.a.createElement("span",{className:"progress-list__skill-value"},"70%")),s.a.createElement("div",{className:"progress"},s.a.createElement("div",{className:"progress-bar",role:"progressbar","aria-valuenow":"70","aria-valuemin":"0","aria-valuemax":"100",style:{width:"70%"}}))))))}}]),t}(l.Component),f=t(26),b=t.n(f),k=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(c.a)(this,t),(l=a.call(this,e)).fadeIn=function(e){var a=.1;e.style.display="block";var t=setInterval((function(){a>=1&&clearInterval(t),e.style.opacity=a,e.style.filter="alpha(opacity="+100*a+")",a+=.1*a}),20)},l.chooseTab=function(e){e.preventDefault(),l.state.previousClickedMenuLink&&l.state.previousClickedMenuLink.classList.remove("portfolio-menu__link--active");var a=e.target;a.classList+="portfolio-menu__link--active",l.setState({previousClickedMenuLink:a});var t=e.target.getAttribute("data-portfolio-target-tag"),s=document.getElementsByClassName("portfolio-cards")[0].childNodes;if("all"===t)for(var r=0;r<s.length;r++)l.fadeIn(s[r]),s[r].style.display="flex";else for(r=0;r<s.length;r++){s[r].style.display="none"}for(r=0;r<s.length;r++)s[r].getAttribute("data-portfolio-tag")===t&&(l.fadeIn(s[r]),s[r].style.display="flex")},l.state={previousClickedMenuLink:void 0,linkClass:""},l}return Object(i.a)(t,[{key:"componentDidMount",value:function(){window.document.getElementById("alltab").click()}},{key:"render",value:function(){return s.a.createElement("section",{className:"portfolio container section"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("h2",{id:"portfolio_header",className:"section__title",style:{textIndent:"0px"}},"My projects_"))),s.a.createElement("div",{className:"row portfolio-menu"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("nav",null,s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("a",{id:"alltab",onClick:this.chooseTab,"data-portfolio-target-tag":"all"},"all")),s.a.createElement("li",null,s.a.createElement("a",{onClick:this.chooseTab,"data-portfolio-target-tag":"mobile apps"},"mobile apps")),s.a.createElement("li",null,s.a.createElement("a",{onClick:this.chooseTab,"data-portfolio-target-tag":"web-sites",className:""},"web-sites")),s.a.createElement("li",null,s.a.createElement("a",{onClick:this.chooseTab,"data-portfolio-target-tag":"landing-pages",className:""},"landing pages")))))),s.a.createElement("div",{className:"portfolio-cards"},s.a.createElement("div",{className:"row project-card","data-toggle":"modal","data-target":"#portfolioModal","data-portfolio-tag":"web-sites",style:{display:"flex"}},s.a.createElement("div",{className:"col-md-6 col-lg-5 project-card__img"},s.a.createElement("img",{className:"",src:b.a,alt:"project-img"})),s.a.createElement("div",{className:"col-md-6 col-lg-7 project-card__info"},s.a.createElement("h3",{className:"project-card__title"},"Cureconsult - For best healthcare experience"),s.a.createElement("p",{className:"project-card__description"},"A responsive, SEO optimized and user friendly website to display well-organized information on diseases, symptoms, and treatments to connect patient with their preferred doctor and hospital."),s.a.createElement("p",{className:"project-card__stack"},"Used stack:"),s.a.createElement("ul",{className:"tags"},s.a.createElement("li",null,"html5"),s.a.createElement("li",null,"css"),s.a.createElement("li",null,"JavaScript"),s.a.createElement("li",null,"Laravel"),s.a.createElement("li",null,"PHP")))),s.a.createElement("div",{className:"row project-card","data-toggle":"modal","data-target":"#portfolioModal","data-portfolio-tag":"web-sites",style:{display:"flex"}},s.a.createElement("div",{className:"col-md-6 col-lg-5 project-card__img"},s.a.createElement("img",{className:"",src:b.a,alt:"project-img"})),s.a.createElement("div",{className:"col-md-6 col-lg-7 project-card__info"},s.a.createElement("h3",{className:"project-card__title"},"Opportunity Analyser & Business Intelligence tool for hospitals"),s.a.createElement("p",{className:"project-card__description"},"Dynamic dashboard that provides micro-market insights and AI based business intelligence platform which helps Hospitals discover growth and business optimization opportunities"),s.a.createElement("p",{className:"project-card__stack"},"Used stack:"),s.a.createElement("ul",{className:"tags"},s.a.createElement("li",null,"durandal"),s.a.createElement("li",null,"knockoutJs"),s.a.createElement("li",null,"html5"),s.a.createElement("li",null,"css"),s.a.createElement("li",null,"d3.Js"),s.a.createElement("li",null,"javaScript"),s.a.createElement("li",null,"Java")))),s.a.createElement("div",{className:"row project-card","data-toggle":"modal","data-target":"#portfolioModal","data-portfolio-tag":"web-sites",style:{display:"flex"}},s.a.createElement("div",{className:"col-md-6 col-lg-5 project-card__img"},s.a.createElement("img",{className:"",src:b.a,alt:"project-img"})),s.a.createElement("div",{className:"col-md-6 col-lg-7 project-card__info"},s.a.createElement("h3",{className:"project-card__title"},"Apollo prism -PHR Management"),s.a.createElement("p",{className:"project-card__description"},"Personal Health Record is platform which lets you receive vital information like lab reports and health checks directly from the hospital on your health record."),s.a.createElement("p",{className:"project-card__stack"},"Used stack:"),s.a.createElement("ul",{className:"tags"},s.a.createElement("li",null,"durandal"),s.a.createElement("li",null,"knockoutJs"),s.a.createElement("li",null,"jQPlot"),s.a.createElement("li",null,"html5"),s.a.createElement("li",null,"css"),s.a.createElement("li",null,"javaScript")))),s.a.createElement("div",{className:"row project-card","data-toggle":"modal","data-target":"#portfolioModal","data-portfolio-tag":"mobile apps",style:{display:"flex"}},s.a.createElement("div",{className:"col-md-6 col-lg-5 project-card__img"},s.a.createElement("img",{className:"",src:b.a,alt:"project-img"})),s.a.createElement("div",{className:"col-md-6 col-lg-7 project-card__info"},s.a.createElement("h3",{className:"project-card__title"},"Salesdude"),s.a.createElement("p",{className:"project-card__description"},"A fully geospatial sales platform for Medical Representative with Tour Plan, Daily Call Report (DCR), Geo-Fencing and Geo Tagging, e-Detailing, Expense Management, Insights and Reports."),s.a.createElement("p",{className:"project-card__stack"},"Used stack:"),s.a.createElement("ul",{className:"tags"},s.a.createElement("li",null,"react native"),s.a.createElement("li",null,"java")))),s.a.createElement("div",{className:"row project-card","data-toggle":"modal","data-target":"#portfolioModal","data-portfolio-tag":"landing-pages",style:{display:"flex"}},s.a.createElement("div",{className:"col-md-6 col-lg-5 project-card__img"},s.a.createElement("img",{className:"",src:b.a,alt:"project-img"})),s.a.createElement("div",{className:"col-md-6 col-lg-7 project-card__info"},s.a.createElement("h3",{className:"project-card__title"},"100+ Digital Marketing Landing Pages"),s.a.createElement("p",{className:"project-card__description"},"Created 100+ landing pages for 20+ clients with responsive, SEO optimized and user specific personalised customisation based on search keyword. Which helps plan and execute marketing campaigns with precise targeting using deep analytics and patient journeys"),s.a.createElement("p",{className:"project-card__stack"},"Used stack:"),s.a.createElement("ul",{className:"tags"},s.a.createElement("li",null,"React"),s.a.createElement("li",null,"html5"),s.a.createElement("li",null,"css"),s.a.createElement("li",null,"JavaScript"),s.a.createElement("li",null,"Java"))))))}}]),t}(l.Component),w=t(42),y=t(40),j=t.n(y),C=t(82);function M(){var e=s.a.useState({open:!1,buttonDisable:!1}),a=Object(w.a)(e,2),t=a[0],l=a[1],r=t.open,n=t.buttonDisable;return s.a.createElement("div",{className:"contact background"},s.a.createElement("div",{className:"container section"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("p",{id:"contacts_header",className:"section__title",style:{textIndent:0}},"Get in touch_"))),s.a.createElement("div",{className:"row contacts"},s.a.createElement("div",{className:"col-md-5 col-lg-4"},s.a.createElement("div",{className:"contacts__list"},s.a.createElement("dl",{className:"contact-list"},s.a.createElement("dt",null,"Phone:"),s.a.createElement("dd",null,s.a.createElement("a",{href:"tel:9611147955"},"+91 9611147955")),s.a.createElement("dt",null,"Email:"),s.a.createElement("dd",null,s.a.createElement("a",{href:"mailto:siddup30@mail.com"},"siddup30@mail.com")))),s.a.createElement("div",{className:"contacts__social"},s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("a",{href:"https://www.facebook.com/siddu30",target:"_blank"},"Facebook")),s.a.createElement("li",null,s.a.createElement("a",{href:"https://www.linkedin.com/in/siddup/",target:"_blank"},"Linkedin")),s.a.createElement("li",null,s.a.createElement("a",{href:"https://github.com/siddup30",target:"_blank"},"GitHub"))))),s.a.createElement("div",{className:"col-md-7 col-lg-5"},s.a.createElement("div",{className:"contacts__form"},s.a.createElement("p",{className:"contacts__form-title"},"Or just write me a letter here_"),s.a.createElement("form",{className:"js-form",onSubmit:function(e){e.preventDefault(),l({buttonDisable:!0}),j.a.sendForm("siiid33@gmail.com","contact",e.target,"user_rIot7i2PwBKwoEX5RKXE2").then((function(e){l({open:!0,buttonDisable:!1}),window.document.getElementsByClassName("js-field-name")[0].value="",window.document.getElementsByClassName("js-field-email")[0].value="",window.document.getElementsByClassName("js-field-message")[0].value=""}),(function(e){console.log(e.text)}))}},s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{className:"form-field js-field-name",name:"user_name",type:"text",placeholder:"Your name",required:!0}),s.a.createElement("span",{className:"form-validation"}),s.a.createElement("span",{className:"form-invalid-icon"},s.a.createElement("i",{className:"mdi mdi-close","aria-hidden":"true"}))),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{className:"form-field js-field-email",name:"user_email",type:"email",placeholder:"Your e-mail",required:!0}),s.a.createElement("span",{className:"form-validation"}),s.a.createElement("span",{className:"form-invalid-icon"},s.a.createElement("i",{className:"mdi mdi-close","aria-hidden":"true"}))),s.a.createElement("div",{className:"form-group"},s.a.createElement("textarea",{className:"form-field js-field-message",name:"user_message",placeholder:"Type the message here",required:!0}),s.a.createElement("span",{className:"form-validation"}),s.a.createElement("span",{className:"form-invalid-icon"},s.a.createElement("i",{className:"mdi mdi-close","aria-hidden":"true"}))),s.a.createElement(_.a,{value:"send",className:"site-btn site-btn--form",type:"submit",disabled:!!n},n?"Sending...":"Send")),s.a.createElement(C.a,{anchorOrigin:{vertical:"top",horizontal:"center"},key:{vertical:"top",horizontal:"center"},open:r,onClose:function(){l({open:!1})},message:"Thanks for reaching out:) I will get back to u soon!!"}))))))}var S=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"top-section"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row personal-profile"},s.a.createElement("div",{className:"col-md-4 personal-profile__avatar text-center"},s.a.createElement("img",{className:"w-100",src:g.a,alt:"avatar"})),s.a.createElement("div",{className:"col-md-8"},s.a.createElement("p",{className:"personal-profile__name"},"Siddalingesh Patil_"),s.a.createElement("p",{className:"personal-profile__work"},"Frontend developer, Full-Stack developer"),s.a.createElement("div",{className:"personal-profile__contacts"},s.a.createElement("dl",{className:"contact-list contact-list__opacity-titles"},s.a.createElement("dt",null,"Age:"),s.a.createElement("dd",null,"27"),s.a.createElement("dt",null,"Phone:"),s.a.createElement("dd",null,s.a.createElement("a",{href:"tel:9611147955"},"+91 9611147955")),s.a.createElement("dt",null,"Email:"),s.a.createElement("dd",null,s.a.createElement("a",{href:"mailto:siddup30@mail.com"},"siddup30@mail.com")),s.a.createElement("dt",null,"Address:"),s.a.createElement("dd",null,"HSR Layout, Bengaluru"))),s.a.createElement("p",{className:"personal-profile__social"},s.a.createElement("a",{href:"https://github.com/siddup30",target:"_blank"},s.a.createElement(d.d,null)),s.a.createElement("a",{href:"https://www.linkedin.com/in/siddup/",target:"_blank"},s.a.createElement(d.e,null)),s.a.createElement("a",{href:"https://www.facebook.com/siddu30",target:"_blank"},s.a.createElement(d.c,null))))))),s.a.createElement(N,null),s.a.createElement("hr",{className:"my-0"}),s.a.createElement(h,null),s.a.createElement(k,null),s.a.createElement(M,null))}}]),t}(l.Component);l.Component;var x=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(u,null),s.a.createElement("div",{className:"body"},s.a.createElement(E.a,{path:"/",exact:!0,component:S})))},O=t(30);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(s.a.createElement(O.a,null,s.a.createElement(E.a,{component:x})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.f52ae8db.chunk.js.map