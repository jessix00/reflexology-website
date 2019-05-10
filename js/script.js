let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

//Event Handler

navBarToggle.addEventListener('click', function() {
    mainNav.classList.toggle('active');
});

console.log("Iwork");