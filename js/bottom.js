const bottom = {};

bottom.load = () => {
    
    document.body.scrollBottom = 0;
    document.documentElement.scrollBottom = 0;

}

bottom.init = () => {

    const bottom = document.getElementsByClassName('bottom')[0];
    bottom.addEventListener('load', bottom.load);

}

export { bottom }