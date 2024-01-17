// Retrieve data
let products = null;
fetch('products.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        console.log(products);
        addData();
    })

// Add data to HTML
let listProduct = document.querySelector('.listProduct'); // Fix: Use 'ListProduct' here
function addData() {
    products.forEach(product => {
        // create new element item
        let newProduct = document.createElement('a');
        newProduct.href = './detail.html?id=' + product.id; // Fix: Add '=' after 'id'
        newProduct.classList.add('item');
        newProduct.innerHTML = `
            <img src="${product.image}">
            <h2>${product.name}</h2>
            <div class="price">${product.price}</div>
        `;
        // Add this element to listProduct class
        listProduct.appendChild(newProduct);
    });
}