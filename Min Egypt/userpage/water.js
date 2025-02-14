let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');

let products = [
    {
        id: 1,
        name: 'Safi',
        image: 'safi.jpg',
    },
    {
        id: 2,
        name: 'Aqua Delta',
        image: 'aqua delta.jpg',
    },
    {
        id: 3,
        name: 'Hayat',
        image: 'hayat.jpg',
    },
    {
        id: 4,
        name: 'Siwa',
        image: 'siwa.jpg',
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
