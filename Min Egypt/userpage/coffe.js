let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');

let products = [
    {
        id: 1,
        name: 'Rayahen caffee',
        image: 'Rayahen coffee.jpg',
    },
    {
        id: 2,
        name: 'Shaheen Coffee',
        image: 'Shaheen Coffee.jpg',
    },
    {
        id: 3,
        name: 'Oroubacoffee',
        image: 'oroubacoffee.jpg',
    },
    {
        id: 4,
        name: 'Seelaz',
        image: 'Seelaz.jpg',
    },
    {
        id: 5,
        name: 'Haj Arafa',
        image: 'Haj Arafa.jpg',
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
