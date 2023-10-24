const backToTop = document.getElementById("back-to-top");

backToTop.addEventListener('click', function (){
    window.scrollTo(0,0);
});

window.addEventListener('scroll', function (){
    let posY = window.scrollY;

    if (posY > 0) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});