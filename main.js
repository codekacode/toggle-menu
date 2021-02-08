let toggleNavStatus = false;

let toggleNav = function() {
  let getSidebar = document.querySelector(".nav__sidebar");
  let getSidebarUl = document.querySelector(".nav__sidebar ul");
  let getSidebarTitle = document.querySelector(".nav__sidebar span");
  let getSidebarLinks = document.querySelectorAll(".nav__sidebar a");

  if (toggleNavStatus === false) {
    getSidebarUl.style.visibility = "visible";
    getSidebar.style.width = "272px";
    getSidebarTitle.style.opacity = "0.5";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++){
      getSidebarLinks[i].style.opacity = "1";
    }

    toggleNavStatus = true
  }

  else if (toggleNavStatus === true) {
    getSidebar.style.width = "50px";
    getSidebarTitle.style.opacity = "0.5";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++){
      getSidebarLinks[i].style.opacity = "1";
    }

    getSidebarUl.style.visibility = "hidden";
    
    toggleNavStatus = false
  }
  
}