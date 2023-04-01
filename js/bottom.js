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

export { bottom }