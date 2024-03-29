function displayCategory() {
    event.preventDefault();
    var categoryElement = document.querySelector(".categories");
    var blurElement = document.querySelector(".blur");
    categoryElement.style.visibility = "visible";
    blurElement.style.visibility = "visible";
}

function closeCategory() {
    var categoryElement = document.querySelector(".categories");
    var blurElement = document.querySelector(".blur");
    categoryElement.style.visibility = "hidden";
    blurElement.style.visibility = "hidden";
}

function displayCart() {
    event.preventDefault();
    var cartElement = document.querySelector(".cart-container");
    var blurElement = document.querySelector(".blur");
    cartElement.style.visibility = "visible";
    blurElement.style.visibility = "visible";
}

function closeCart() {
    var cartElement = document.querySelector(".cart-container");
    var blurElement = document.querySelector(".blur");
    cartElement.style.visibility = "hidden";
    blurElement.style.visibility = "hidden";
}
