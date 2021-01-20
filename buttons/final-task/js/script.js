let header_burger = document.getElementById("headr_burger");
let headr_menu = document.getElementById("headr_menu");
let buttom = document.getElementById("buttom");
header_burger.addEventListener('click', function() {
	buttom.classList.toggle("active");
});
 header_burger.addEventListener('click', function() {
	headr_menu.classList.toggle("active");
});