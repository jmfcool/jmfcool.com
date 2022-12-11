import { helper } from "./helper.js";
import { view } from "./view.js";

// IP

export const ip4 = (_fetch) => view.get("https://api.ipify.org?format=json", (data) => {
    
    document.getElementsByClassName("ip")[0].innerHTML = data.ip;
    return data.ip;

}, _fetch, true);

// Menu

export const menu = (_fetch) => view.get("data/menu.json", (data) => {

    let template = [];

    for (let i = 0; i < data.length; i++) 
    {
        template.push(`
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav text-center mr-auto">
                        ${Array(data[i].links.length).fill().map((item, l) => `
                            <div class="btn-group">
                                <button type="button" class="btn">
                                    ${data[i].links[l].name == "Legal" ? `<li class="nav-item"><a href="javascript:void(0)" class="nav-link">${data[i].links[l].name}</a></li>` : `<li class="nav-item"><a href="#${data[i].links[l].hash}" class="nav-link">${data[i].links[l].name}</a></li>`}
                                </button>
                                ${data[i].links[l].name == "Team" || data[i].links[l].name == "Legal" ? `<button type="button" class="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="sr-only">Toggle Dropdown</span></button>
                                <div class="dropdown-menu">
                                    ${Array(data[i].links[l].items.length).fill().map((item, k) => `<a href="javascript:void(0)" data-target="#${data[i].links[l].items[k].target}" data-toggle="modal" class="hide-back">${data[i].links[l].items[k].name}</a>`).join("")}
                                </div>` : ""}
                            </div>
                        `).join("")}
                        <div class="btn-group">
                            <button type="button" class="btn">
                                <li class="nav-item"><a href="#contact" data-target="#contactForm" data-toggle="modal" class="button nav-link contact form">Contact</a></li>
                            </button>
                        </div>
                        <li class="data"></li>
                        <li class="login"><a href="https://tasks.jmfcool.com"><i class="fas fa-sign-in-alt"></i> Login</a></li>
                    </ul>
                </div>
            </nav>
        `);
    }

    document.getElementById("navbar").innerHTML = template.join("");
    return template;

},_fetch);

// Carousel

export const carousel = (_fetch) => view.get("data/carousel.json", (data) => {

    let template = [];

    for (let i = 0; i < data.length; i++) 
    {
        template.push(`
            <section class="app_slider_wrap">
                <div class="container">
                    <div id="${data[i].target}" class="carousel slide" data-ride="carousel">
                        
                        <!-- Slides -->

                        <div class="carousel-inner">

                            ${Array(data[i].items.length).fill().map((item, l) => `
                                <div class="carousel-item ${l == 0 ? "active" : ""}">
                                    <img src="build/images/${data[i].items[l].picture.large}" data-src="build/images/${data[i].items[l].picture.large}" alt="" />
                                    <h4>${data[i].items[l].name} <span>by Jmfcool.com</span></h4>
                                    <div class="badges">
                                        <ul>
                                            <li><a href="${data[i].items[l].apple.link}" ${data[i].items[l].apple.active ? 'target="_blank" class="app-store"' : 'class="app-store"'}>Apple</a><span>${data[i].items[l].apple.text}</span></li>
                                            <li><a href="${data[i].items[l].google.link}" ${data[i].items[l].google.active ? 'target="_blank" class="play-store active"' : 'class="play-store"'}>Google</a><span>${data[i].items[l].google.text}</span></li>
                                            <li><a href="${data[i].items[l].web.link}" ${data[i].items[l].web.active ? 'target="_blank" class="web active"' : 'class="web"'}>Progressive Web App</a><span>${data[i].items[l].web.text}</span></li>
                                            <li><a href="${data[i].items[l].chrome.link}" ${data[i].items[l].chrome.active ? 'target="_blank" class="chrome active"' : 'class="chrome"'}>Progressive Web App</a><span>${data[i].items[l].chrome.text}</span></li>
                                        </ul>
                                    </div>
                                </div>
                            `).join("")}

                        </div>

                        <!-- End of Slides -->
                        <!-- Controls -->

                        <a class="carousel-control-prev" href="javascript://" data-target="#${data[i].target}" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="javascript://" data-target="#${data[i].target}" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                        
                        <!-- End of Controls -->
                        <!-- Indicators -->

                        <ol class="carousel-indicators">

                            ${Array(data[i].items.length).fill().map((item, l) => `
                                <li data-target="#${data[i].target}" data-slide-to="${l}" ${l == 0 ? 'class="active"' : ""}><img src="build/images/${data[i].items[l].picture.small}" width="75px" height="75px" class="icon" alt="" /></li>
                            `).join("")}

                        </ol>

                        <!-- End of Indicators -->
                    
                    </div>
                </div>
            </section>
        `);
    }

    document.getElementById("carousel").innerHTML = template.join("");
    return template;

},_fetch);

// About

export const about = (_fetch) => view.get("data/about.json", (data) => {

    let template = [];

    for (let i = 0; i < data.length; i++) 
    {
        template.push(`
            ${Array(data[i].content.length).fill().map((item, key) => `<p class="item-about">${data[i].content[key]}</p>`).join("")}
        `);
    }

    document.getElementById("about").innerHTML = template.join("");
    return template;

},_fetch);

// Services

export const services = (_fetch) => view.get("data/services.json", (data) => {

    var html = [];

    for (let i = 0; i < data.length; i++) 
    {
        let template = `
            <article class="item item-services">
                <header class="click-item">
                    <a href="javascript://" data-target="#${data[i].target}" class="collapsed" data-toggle="collapse" alt="">${data[i].name} <i class="fas fa-share-square"></i></a>
                </header>
                <div id="${data[i].target}" class="collapse fade contents" data-parent="#services">
                    <div class="item-wrapper">
                        <p>${data[i].text}</p>
                        <a href="javascript://" data-target="#contactForm" data-toggle="modal" class="btn btn-primary hide-back">Contact</a>
                    </div>
                </div>
            </article>
        `;
        html.push(template);
    }
    if (!_fetch) 
    {
        $("#services-pagination").pagination({
            pageSize: 5,
            dataSource: html,
            callback: function (data, pagination) 
            {
                $("#services").html(data);
            },
        });
    }

    return html;

},_fetch);

// Mobile

export const mobile = (_fetch) => view.get("data/mobile.json", (data) => {
      
    var html = [];
    for (let i = 0; i < data.length; i++) 
    {
        let template = `
            <article class="item item-mobile">
                <header class="click-item">
                    <a href="javascript://" data-target="#${data[i].target}" class="collapsed" data-toggle="collapse" alt="">${data[i].name} <span>by Jmfcool.com <i class="fab fa-apple"></i> ${data[i].google.active ? '<i class="fab fa-google-play"></i>' : ""} ${data[i].web.active ? '<i class="fab fa-html5"></i>' : ""} ${data[i].chrome.active ? '<i class="fab fa-chrome"></i>' : ""}</span></a>
                </header>
                <div id="${data[i].target}" class="collapse fade contents" data-parent="#mobile">
                    <div class="item-wrapper">
                        <img src="./build/images/${data[i].picture}" alt="" class="app-icon" />
                        ${Array(data[i].text.length).fill().map((item, l) => `<p>${data[i].text[l]}</p>`).join("")}
                        <div class="badges">
                            <ul>
                                <li><a href="${data[i].apple.link}" ${data[i].apple.active ? 'target="_blank" class="app-store"' : 'class="app-store"'}></a><span>${data[i].apple.text}</span></li>
                                <li><a href="${data[i].google.link}" ${data[i].google.active ? 'target="_blank" class="play-store active"' : 'class="play-store"'}></a><span>${data[i].google.text}</span></li>
                                <li><a href="${data[i].web.link}" ${data[i].web.active ? 'target="_blank" class="web active"' : 'class="web"'}></a><span>${data[i].web.text}</span></li>
                                <li><a href="${data[i].chrome.link}" ${data[i].chrome.active ? 'target="_blank" class="chrome active"' : 'class="chrome"'}></a><span>${data[i].chrome.text}</span></li>
                            </ul>
                        </div>
                    </div>
                </div> 
            </article>
        `;
        html.push(template);
    }
    if (!_fetch) 
    {
        $("#mobile-pagination").pagination({
            pageSize: 5,
            dataSource: html,
            callback: function (data, pagination) 
            {
                $("#mobile").html(data);
            },
        });
    }

    return html;

},_fetch);

// Marketing

export const marketing = (_fetch) => view.get("data/marketing.json", (data) => {

    let template = [];

    for (let i = 0; i < data.length; i++) 
    {
        template.push(`
            <div class="item item-marketing">
                <div class="click-item">
                    <a href="javascript:void(0)" data-target="#${data[i].target}" class="collapsed" data-toggle="collapse" alt="">${data[i].name}</a>
                </div>
                <div id="${data[i].target}" class="collapse fade contents" data-parent="#marketing">
                    <div class="item-wrapper-marketing">
                        
                        ${Array(data[i].items.length).fill().map((item, l) => `
                            <div class="single_port">
                                <div class="works_name">
                                    <div class="work_title">
                                        <h5><a href="${data[i].items[l].link}" target="_blank">${data[i].items[l].name}</a></h5>
                                    </div>
                                    
                                    <div class="work_time">
                                        <time>${data[i].items[l].date}</time>
                                    </div>
                                </div>
                
                                <div class="used_technology">
                                    <ul>
                                        ${Array(data[i].items[l].skills.length).fill().map((item, k) => `<li>${data[i].items[l].skills[k]}</li>`).join("")}
                                    </ul>
                                </div>
                
                                <div class="tags">
                                    <ul>
                                        ${Array(data[i].items[l].tags.length).fill().map((item, k) => `<li>${data[i].items[l].tags[k]}</li>`).join("")}
                                    </ul>
                                </div>
                            </div>
                        `).join("")}
            
                    </div>
                </div>
            </div>
        `);
    }

    document.getElementById("marketing").innerHTML = template.join("");
    return template;

},_fetch);

// News

export const news = (_fetch) => view.get("data/news.json", (data) => {
      
    let template = [];

    for (let i = 0; i < data.length; i++) 
    {
        template.push(`
            <article class="item item-news">
                <header class="click-item">
                    <a href="javascript://" data-target="#${data[i].target}" class="collapsed" data-toggle="collapse" alt="">${data[i].name}</a>
                </header>
                <div id="${data[i].target}" class="collapse fade contents" data-parent="#news">
                    <div class="item-wrapper">
                        ${Array(data[i].text.length).fill().map((item, l) => `<p>${data[i].text[l]}</p>`).join("")}
                        <ul>
                            <li><strong>Media Contact</strong></li>
                            <li><i class="fas fa-building"></i> Company: Jmfcool.com</li>
                            <li><i class="fas fa-user"></i> Contact Person: Jeremiah Faria</li>
                            <li><i class="fas fa-envelope"></i> Email: <a href="#contact" data-target="#contactForm" data-toggle="modal" class="contact form">Send Email</a></li>
                            <li><i class="fas fa-phone-alt"></i> Phone: (415) 300-0102</li>
                            <li><i class="fas fa-link"></i> Website: <a href="./">https://jmfcool.com</a></li>
                        </ul>
                    </div>
                </div>
            </article>
        `);
    }

    document.getElementById("news").innerHTML = template.join("");
    return template;

},_fetch);

// Team

export const team = (_fetch) => view.get("data/team.json", (data) => {

    let template = [];

    for (let i = 0; i < data.length; i++) 
    {
        template.push(`
            <article class="item item-team">
                <header class="click-item">
                    <a href="javascript://" data-target="#${data[i].target}" class="collapsed" data-toggle="collapse" alt="">${data[i].name}</a>
                </header>
                <div id="${data[i].target}" class="collapse fade contents" data-parent="#team">
                    <div class="item-wrapper">
                        ${Array(data[i].text.length).fill().map((item, l) => `<p>${data[i].text[l]}</p>`).join("")}
                        <a href="javascript://" data-target="#${data[i].resume}" data-toggle="modal" class="btn btn-primary hide-back">View Resume</a>
                    </div>
                </div>
            </article>
        `);
    }

    document.getElementById("team").innerHTML = template.join("");
    return template;
    
},_fetch);

// iframes

export const iframes = (_fetch) => view.get("data/iframes.json", (data) => {

    let template = [];

    for (let i = 0; i < data.length; i++) 
    {
        template.push(`
            <div class="modal fade iframe_modal support_iframe" id="${data[i].name}">
                <div class="modal-dialog modal-support modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal"><img src="build/images/modal-close.webp" class="img-fluid" alt="" /></button>
                        </div>
                        <div class="modal-body">
                            <div class="iframe_page">
                                <iframe src="${data[i].link}" frameborder="0" referrerpolicy="no-referrer"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `);
    }
    
    document.getElementById("iframes").innerHTML = template.join('');
    return template;
    
},_fetch);

// Interstitial
export const interstitial = (_fetch) => view.get("data/interstitial.json", (data) => {

    let template = [];
    const random = helper.random(data.length);

    template.push(`
        <div class="wrapper">
            <a href="javascript://" class="close"><img src="build/images/close-int.webp" alt="Close" /></a>
            <div class="holder">
                <img src="build/images/${data[random].picture.large}" srcset="build/images/${data[random].picture.small} 350w, build/images/${data[random].picture.large} 1500w" sizes="50vw" width="900px" height="900px" class="app-icon" alt="" />
                <h4>${data[random].name} <span>by Jmfcool.com</span></h4>
                <div class="badges">
                    <ul>
                        <li><a href="${data[random].apple.link}" ${data[random].apple.active ? 'target="_blank" class="app-store"' : 'class="app-store"'} alt="${data[random].apple.text}">Apple</a><span>${data[random].apple.text}</span></li>
                        <li><a href="${data[random].google.link}" ${data[random].google.active ? 'target="_blank" class="play-store active"' : 'class="play-store"'} alt="${data[random].google.text}">Google</a><span>${data[random].google.text}</span></li>
                        <li><a href="${data[random].web.link}" ${data[random].web.active ? 'target="_blank" class="web active"' : 'class="web"'} alt="${data[random].web.text}">Google</a><span>${data[random].web.text}</span></li>
                        <li><a href="${data[random].chrome.link}" ${data[random].chrome.active ? 'target="_blank" class="chrome active"' : 'class="chrome"'} alt="${data[random].chrome.text}">Google</a><span>${data[random].chrome.text}</span></li>
                    </ul>
                </div>
            </div>
        </div>
    `);

    let interstitial = document.createElement("div");
        interstitial.setAttribute("id", "interstitial");
    document.body.appendChild(interstitial);

    document.getElementById("interstitial").innerHTML = template;
    document.getElementById("interstitial").addEventListener("click", () => document.getElementById("interstitial").remove());

    return template;

},_fetch);

// Version

export const version = (_fetch) => view.get("package.json", (data) => {

    let template = [];

    template.push(`${data.version}`);

    document.getElementById("version").innerHTML = template.join();
    return template;

},_fetch);
