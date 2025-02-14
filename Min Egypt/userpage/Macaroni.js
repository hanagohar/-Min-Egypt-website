let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');

let products = [
    {
        id: 1,
        name: 'Pasta Regina',
        image: 'Pasta Regina.jpg',
    },
    {
        id: 2,
        name: 'Ziena',
        image: 'ziena.jpg',
    },
    {
        id: 3,
        name: 'Rawaa',
        image: 'rawaa.jpg',
    },
    {
        id: 4,
        name: 'Al Doha',
        image: 'Al Doha.jpg',
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
