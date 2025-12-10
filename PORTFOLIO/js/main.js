//Toggle class active

document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu");
    const navNavbar = document.querySelector(".nav-navbar");
  
    menu.onclick = () => {
      navNavbar.classList.toggle("active");
    };

    //klik diluar sidebar untuk menghilangkan nav
    document.addEventListener('click', function(e) {
        if(!menu.contains(e.target) && !navNavbar.contains(e.target)){
            navNavbar.classList.remove("active");
        }
    })
});


