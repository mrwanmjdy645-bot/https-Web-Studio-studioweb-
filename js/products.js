let products = JSON.parse(localStorage.getItem("products")) || [];

let box = document.getElementById("products");

if (products.length === 0) {

    box.innerHTML = "<h2 style='text-align:center'>لا توجد منتجات حالياً</h2>";

} else {

    products.forEach(product => {

        box.innerHTML += `
        <div class="product-card">

            <img src="${product.image}" alt="${product.name}">

            <h2>${product.name}</h2>

            <p>${product.description}</p>

            <h3>${product.price} ريال</h3>

            <a href="https://wa.me/966541478280" target="_blank">
                <button>اطلب الآن</button>
            </a>

        </div>
        `;

    });

}