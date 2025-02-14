let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');

let products = [
    {
        id: 1,
        name: 'TeTe',
        image: 'tete.webp',
    },
    {
        id: 2,
        name: 'kamara',
        image: 'kamara.png',
    },
    {
        id: 3,
        name: '7days',
        image: '7days.jpg',
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
