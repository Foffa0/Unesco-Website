// hide navbar on scroll down
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav-primary").style.top = "0";
    } else {
        document.getElementById("nav-primary").style.top = "-88px";
    }
    prevScrollpos = currentScrollPos;
    //:D
}