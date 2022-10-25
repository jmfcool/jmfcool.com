const top = {};

top.scroll = () => {

    let anchor = document.getElementsByClassName('anchor')[0];
    anchor.style.display = (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? "block" : "none";

}

top.hide = () => {

    const hide = document.getElementsByClassName('hide-back');

    for(let i=0; i<hide.length; i++)
    {
        hide[i].addEventListener('click', () => {

            document.getElementsByClassName('anchor')[0].style.display = 'none';
        
        });
    }
}

top.load = () => {
    
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}

top.init = () => {

    top.hide();

    const anchor = document.getElementsByClassName('anchor')[0];
    anchor.addEventListener('click', top.load);

    document.documentElement.style.scrollBehavior = "smooth";

    window.onscroll = function() { top.scroll() };

}

export { top }