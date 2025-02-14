let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');

let products = [
    {
        id: 1,
        name: 'El-Arosa',
        image: 'el arosa.jpg',
    },
    {
        id: 2,
        name: 'El-Gawhara',
        image: 'gawhara1.jpg',
    },
    {
        id: 3,
        name: 'Rabea tea',
        image: 'rabea.jpg',
    },
    {
        id: 4,
        name: 'Al-kbous',
        image: 'al kbous.jpg',
    },
    {
        id: 5,
        name: 'El Salam',
        image: 'El Salam.jpg',
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
