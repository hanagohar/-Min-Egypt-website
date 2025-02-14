let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');

let products = [
    {
        id: 1,
        name: 'Tiger',
        image: 'tiger.jpg',
    },
    {
        id: 2,
        name: 'Big Chips',
        image:  'Big Chips.jpg',
    },
    {
        id: 3,
        name: 'Bravo',
        image: 'bravo.jpg',
    },
    {
        id: 4,
        name: 'Jaguar Snacks ',
        image: 'Jaguar Snacks .jpg',
    },
    {
        id: 5,
        name: 'flaminco',
        image: 'flaminco.jpg',
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="images/${value.image}">
            <div class="title">${value.name}</div>`;
        list.appendChild(newDiv);
    })
}
initApp();
