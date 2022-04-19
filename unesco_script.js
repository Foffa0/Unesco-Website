// hide navbar on scroll down
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav-primary").style.top = "0";
    } else {
        document.getElementById("nav-primary").style.top = "-88px";
    }
    prevScrollpos = currentScrollPos;
};


// blog category filter

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("blog-categories");
var btns = btnContainer.getElementsByClassName("btn-category");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    this.classList.toggle("btn-category-active")
  });
}