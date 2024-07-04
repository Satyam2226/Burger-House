// Get the menu button, navigation links, and the icon inside the menu button
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Add an event listener for the menu button click event
menuBtn.addEventListener("click", () => {
    // Toggle the "open" class on the navigation links
    navLinks.classList.toggle("open");

    // Check if the navigation links have the "open" class
    const isOpen = navLinks.classList.contains("open");

    // Set the icon class based on whether the navigation links are open
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});


navLinks.addEventListener("click",(e)=>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class","ri-menu-line");
});

const scrollRevealoption ={
    distance:"50px",
    origin:"bottom",
    duration:1000,
};

scrollRevealoption().reveal(".header__image img",{
    ...scrollRevealoption,
    origin:"right",
})

scrollRevealoption().reveal(".header__content h2",{
    ...scrollRevealoption,
     delay:500
})

scrollRevealoption().reveal(".header__content h1",{
    ...scrollRevealoption,
     delay:1000,
});

ScrollReveal().reveal(".order__card",{
    ...scrollRevealoption,
    interval:500,
});

ScrollReveal().reveal(".event__content",{
    duration:1000,
});


