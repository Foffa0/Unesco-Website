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
}
window.addEventListener('load', function() {
const revealBtns = document.querySelectorAll('.member-description');

revealBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        console.log('box clicked');
        btn.classList.toggle('reveal');
  });
});
});
