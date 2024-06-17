let menuIcon = document.querySelector(".menu-icon");
let sidebar = document.querySelector(".sidebar");
let mainBody = document.querySelector(".main-body")

menuIcon.addEventListener('click', function() {
    sidebar.classList.toggle("small-sidebar")    
})
menuIcon.addEventListener('click', function() {
    mainBody.classList.toggle("large-main-body")
})