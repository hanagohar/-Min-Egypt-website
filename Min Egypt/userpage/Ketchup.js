let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');

let products = [
    {
        id: 1,
        name: 'good france',
        image: 'good france.png',
    },
    {
        id: 2,
        name: 'lavida',
        image: 'lavida.jpg',
    },
    {
        id: 3,
        name: 'durra',
        image: 'durra.webp',
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
