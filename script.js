let nav = document.querySelector(".mobile-navbar");
let closeBtn = document.querySelector(".close");
let menuIcon = document.querySelector(".hamburgur");

closeBtn.style.display = "none";
menuIcon.style.display = "block";

if (menuIcon) {
    menuIcon.addEventListener("click", function() {
        if (nav.style.display === "block") {
            nav.style.display = "none";
            menuIcon.style.display = "block";
            closeBtn.style.display = "none";
        } else {
            nav.style.display = "block";
            menuIcon.style.display = "none";
            closeBtn.style.display = "block";
        }
    });
}

if (closeBtn) {
    closeBtn.addEventListener("click", function() {
        if (nav.style.display === "block") {
            nav.style.display = "none";
            menuIcon.style.display = "block";
            closeBtn.style.display = "none";
        } else {
            nav.style.display = "block";
            menuIcon.style.display = "none";
            closeBtn.style.display = "block";
        }
    });
}

