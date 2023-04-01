import { date } from "./date.js";
import { hash } from "./hash.js";
import { cookies } from "./cookies.js";
import * as views from "./views.js";
import { top } from "./top.js";
//import { bottom } from "./bottom.js";
import { validation } from "./validation.js";

window.onhashchange = () => {
 
    hash.init();

};

date.year();
views.ip4();
views.menu();
views.carousel();
views.about();
views.services();
views.mobile();
views.marketing();
views.news();
views.team();
views.iframes();
views.interstitial();
views.version();
top.init();
//bottom.init();
validation.init();

$('html,body').animate({scrollTop: document.body.scrollHeight},"fast");

// Subject

const subject = {};

subject.init = () => {

    let s = document.getElementById('page-services'),
        a = s.getElementsByTagName('a'),
        b = document.getElementsByTagName('body')[0],
        c = b.getElementsByClassName('contact');

    for(let i = 0; i < a.length; i++) 
    {
        if(a[i] !== undefined) {
            a[i].onclick = (event) => {
                var input = document.getElementById('subject');
                input.value = event.target.parentNode.parentNode.parentNode.getElementsByTagName('a')[0].innerText;
            };
        }
    }

    for(let i = 0; i < a.length; i++) 
    {
        if(c[i] !== undefined) {
            c[i].onclick = () => {
                var input = document.getElementById('subject');
                input.value = 'General';
            };
        }
    }

}


window.onload = () => {

    hash.init();
    subject.init();

    /* Carousel */

    $('.carousel').carousel({ pause: true, interval: 7000 });

    /* End of Carousel */
    /* Check Cookie for Accept */

    if(!cookies.read('accept'))
    {
        document.getElementsByClassName('cookies')[0].style.display = 'block';
    }

    /* End of Check Cookie for Accept */
    /* Mobile Navbar */

    $('.navbar-collapse').click(function()
    {
        $(this).toggleClass('show');
    });

    /* End of Mobile Navbar */
};

/* Capture Verbiage for Form Subject */

document.onclick = () => {

    subject.init();

}

/* End of Capture Verbiage for Form Subject */
/* Set Cookie for Accept */

$('.cookies .accept').click(function()
{
    document.getElementsByClassName('cookies')[0].style.display = 'none';
    cookies.create('accept','true',30);
});

/* End of Set Cookie for Accept */
/* Contact */

if (window.location.href.indexOf("contact") > -1) {
    $(document).ready(function() {
        $('#contactForm').modal('show');
        $('.required').removeClass('error');
        setTimeout(() => $('.required').removeClass('error'), 1600);
        setTimeout(() => $('#interstitial').remove(), 500);
    });
}

/* End of Contact */