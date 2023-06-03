// navbar
const navBar = document.querySelector("nav"),
menuBtns = document.querySelectorAll(".menu-icon"),
overlay = document.querySelector(".overlay");

menuBtns.forEach((menuBtn) => {
menuBtn.addEventListener("click", () => {
    navBar.classList.toggle("open");
});
});

overlay.addEventListener("click", () => {
navBar.classList.remove("open");
});

// plus&minus button

const minusButton = document.querySelector('.min');
const plusButton = document.querySelector('.plus');
const inputField = document.querySelector('.num-item-purchased');
const price = document.querySelector('.price');
const btnBuy = document.querySelector('.btn-buy');


minusButton.addEventListener('click', event => {
  event.preventDefault();
  const currentValue = Number(inputField.value) || 0;
  inputField.value = currentValue - 1;

  const currentPrice = Number(price.value) || 0;
  const originalPrice = 100000 //itemprice;
  price.value = currentPrice - originalPrice;
    
  if(currentValue == 0) {
    inputField.value = 0
    price.value = ''
} 
});

plusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(inputField.value) || 0;
    inputField.value = currentValue + 1;

    const currentPrice = Number(price.value) || 0;
    const originalPrice = 100000  //itemprice;
    price.value = currentPrice + originalPrice;

    if(inputField.value > 10) {
        inputField.value = 10;
        price.value = originalPrice * 10;
    }

});
