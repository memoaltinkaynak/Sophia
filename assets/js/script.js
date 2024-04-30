const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('.nav-menu');

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Menüyü kapatma işlevi
document.addEventListener('click', (e) => {
    if (!menuIcon.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});




const panels = document.querySelectorAll(".panel")


panels.forEach((panel) =>{
    panel.addEventListener("click", ()=>{
        removeActiveClasses()
        panel.classList.add("active")
        

    })
})

function removeActiveClasses(){
    panels.forEach((panel) =>{
        panel.classList.remove("active")
    })
}


