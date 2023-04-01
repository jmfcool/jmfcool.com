const bottom = {};

bottom.load = () => {
    
    document.body.scrollBottom = 0;
    console.log(document.body.scrollBottom);
    document.documentElement.scrollBottom = 0;

}

bottom.init = () => {

    const bottom = document.getElementsByClassName('bottom')[0];
    bottom.addEventListener('load', bottom.load);
}

bottom.interval = setInterval(function() 
{ 
    document.documentElement.scrollTop = document.documentElement.scrollHeight;
}, 50);

bottom.scroll = function() { clearInterval(scrollInterval); };

var element = document.querySelector(".element-selector");
element.scrollIntoView();

export { bottom }