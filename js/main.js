let products = JSON.parse(localStorage.getItem("products")) || [];

let latest = document.getElementById("latestProducts");

if(latest){

    if(products.length === 0){

        latest.innerHTML="<h3>لا توجد متاجر حالياً</h3>";

    }else{

        let lastProducts = products.slice(-3).reverse();

        lastProducts.forEach(product=>{

            latest.innerHTML+=`

            <div class="product-card">

                <img src="${product.image}">

                <h3>${product.name}</h3>

                <p>${product.description}</p>

                <h2>${product.price} ريال</h2>

                <a href="products.html">
                    <button>عرض المتجر</button>
                </a>

            </div>

            `;

        });

    }

}