let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');

let products = [
    {
        id: 1,
        name: 'Orouba',
        image: 'orouba.jpg',
    },
    {
        id: 2,
        name: 'Misr Cafe',
        image: 'misr cafe.jpg',
    },
    {
        id: 3,
        name: 'Alicafe',
        image: 'alicafe.jpg',
    },
    {
        id: 4,
        name: 'Break',
        image: 'break.jpg',
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
