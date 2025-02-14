let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');

let products = [
    {
        id: 1,
        name: 'Spiro Spathis',
        image: 'spiro spathis.jpg',
    },
    {
        id: 2,
        name: 'Sina cola',
        image: 'sina cola.jpg',
    },
    {
        id: 3,
        name: 'Buzz',
        image: 'buzz.jpg',
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
