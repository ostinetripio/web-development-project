// Select all Add to Cart buttons
const addToCartButtons = document.querySelectorAll(".button");
const cartCount = document.getElementById("cart-count");

let cartItems = 0;

// Add click event to each button
addToCartButtons.forEach(button => {
  button.addEventListener("click", () => {
    cartItems++;
    cartCount.textContent = cartItems;
  });
});

// Hamburger menu logic
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
