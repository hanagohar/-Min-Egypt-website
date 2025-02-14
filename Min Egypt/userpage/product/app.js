let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
});
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
});

let listCards = [];

function initApp() {
    products.forEach((product, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${product.image}">
            <div class="title">${product.name}</div>
            <div class="price">${product.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    });
}

initApp();

function addToCard(key) {
    if (listCards[key] == null) {
        // Copy product from list to listCard
        listCards[key] = { ...products[key], quantity: 1 };
    } else {
        listCards[key].quantity++;
    }
    reloadCard();
}

function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((product, key) => {
        if (product != null) {
            totalPrice += product.price * product.quantity;
            count += product.quantity;
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${product.image}"/></div>
                <div>${product.name}</div>
                <div>${(product.price * product.quantity).toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${product.quantity - 1})">-</button>
                    <div class="count">${product.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${product.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);
        }
    });
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity) {
    if (quantity === 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
    }
    reloadCard();
}

// Add the following code at the end

document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.querySelector('.card');
    cardContainer.style.display = 'none';

    openShopping.addEventListener('click', () => {
        cardContainer.style.display = 'block';
    });

    closeShopping.addEventListener('click', () => {
        cardContainer.style.display = 'none';
    });
});