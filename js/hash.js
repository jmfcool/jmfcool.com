import { helper } from "./helper.js";

var hash = hash || {};

hash.data = {

    pages: ['about', 'services', 'mobile', 'marketing', 'news', 'team','legal','conract']

}

hash.init = () => {
    
    let page = window.location.href.split('#')[1],
        select = document.getElementById("page-" + page),
        link = document.getElementsByClassName("nav-link");

    history.replaceState({}, document.title, page);

    history.replaceState({}, document.getElementsByTagName('nav')[1], page);

    if(page == 'contact')
    {
        document.getElementById('contact').click();
    }

    hash.page({ page: select });

    if(page)
    {
        hash.title({ page: page });
        hash.active({ link: link, page: page });
    }

    hash.breadcrumb({ page: page });
};

hash.active = (args) => {

    let link = args.link,
        page = args.page;

    for(let i = 0; i < link.length; i++)
    {
        link[i].classList.remove('active');
        if(link[i].hash.split('#')[1] === page)
        {
            link[i].classList.add('active');
        }
    }

};

hash.page = (args) => {

    if(args.page)
    {
        document.getElementsByClassName("page-active")[0].className = "page";
        args.page.className = "page page-active";
    }

};

hash.title = (args) => {

    return document.title = 'Jmfcool.com - ' + helper.capitalize(args.page);

};

hash.breadcrumb = (args) => { 

    let breadcrumb = document.getElementById('breadcrumb'),
        active = breadcrumb.getElementsByClassName('active')[0];

    for(let i=0; i<hash.data.pages.length; i++)
    {
        if(args.page == hash.data.pages[i])
        {
            breadcrumb.style.display = 'block';
            active.innerHTML = helper.capitalize(args.page);
            break;
        }
    }
    if(args.page == 'home')
    {
        return breadcrumb.style.display = 'none';
    }

};

export { hash }