var helper = helper || {};

helper.random = (max) => {

    return Math.floor(Math.random() * Math.floor(max));

};

helper.capitalize = (string) => {

    return string.charAt(0).toUpperCase() + string.slice(1);

};

export { helper }