let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');

let products = [
    {
        id: 1,
        name: 'Rich Bake',
        image: 'Rich Bake.jpg',
    },
    {
        id: 2,
        name: ' Breadway ',
        image: 'Breadway.jpg',
    },
    {
        id: 3,
        name: 'Brunch ',
        image: 'Brunch.jpg',
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
