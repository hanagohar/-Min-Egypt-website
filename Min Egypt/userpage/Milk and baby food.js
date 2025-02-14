let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');

let products = [
    {
        id: 1,
        name: 'Riri',
        image: 'riri.jpg',
    },
    {
        id: 2,
        name: 'Miro Milk',
        image: 'miro milk.jpg',
    },
    {
        id: 3,
        name: 'Avanti ',
        image: 'Avanti.jpg',
    },
    {
        id: 4,
        name: 'Rozo',
        image: 'rozo.jpg',
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
