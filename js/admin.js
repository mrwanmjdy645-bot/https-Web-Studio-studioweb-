// =========================
// تسجيل الدخول
// =========================
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    // غيّر البيانات كما تريد
    const adminUser = "admin";
    const adminPass = "123456";

    if (user === adminUser && pass === adminPass) {
        window.location.href = "admin.html";
    } else {
        document.getElementById("msg").innerHTML = "❌ اسم المستخدم أو كلمة المرور غير صحيحة";
    }
}

// =========================
// قاعدة البيانات المحلية
// =========================
let products = JSON.parse(localStorage.getItem("products")) || [];

function saveProducts() {
    localStorage.setItem("products", JSON.stringify(products));
}

// =========================
// إضافة منتج
// =========================
function addProduct() {

    let name = document.getElementById("name").value.trim();
    let price = document.getElementById("price").value.trim();
    let description = document.getElementById("description").value.trim();

    let imageInput = document.getElementById("image");
    let file = imageInput.files[0];

    if (name === "" || price === "" || description === "") {
        alert("يرجى تعبئة جميع الحقول");
        return;
    }

    if (!file) {
        alert("يرجى اختيار صورة");
        return;
    }

    let reader = new FileReader();

    reader.onload = function (e) {

        let product = {
            name: name,
            price: price,
            description: description,
            image: e.target.result
        };

        products.push(product);

        saveProducts();

        showProducts();

        document.getElementById("name").value = "";
        document.getElementById("price").value = "";
        document.getElementById("description").value = "";
        document.getElementById("image").value = "";

        let preview = document.getElementById("preview");
        if (preview) {
            preview.src = "";
            preview.style.display = "none";
        }

        updateCounter();

        alert("✅ تمت إضافة المنتج");

    };

    reader.readAsDataURL(file);

}

// =========================
// عرض المنتجات
// =========================
function showProducts() {

    let box = document.getElementById("products");

    if (!box) return;

    box.innerHTML = "";

    products.forEach((item, index) => {

        box.innerHTML += `
        <div class="card">

            <img src="${item.image}" width="150">

            <h3>${item.name}</h3>

            <p>${item.description}</p>

            <h4>${item.price} ريال</h4>

            <button onclick="editProduct(${index})">✏️ تعديل</button>

            <button onclick="deleteProduct(${index})">🗑 حذف</button>

        </div>
        `;

    });

}

// =========================
// حذف منتج
// =========================
function deleteProduct(index) {

    if (confirm("هل تريد حذف المنتج؟")) {

        products.splice(index, 1);

        saveProducts();

        showProducts();

        updateCounter();

    }

}

// =========================
// تعديل منتج
// =========================
function editProduct(index) {

    let product = products[index];

    document.getElementById("name").value = product.name;
    document.getElementById("price").value = product.price;
    document.getElementById("description").value = product.description;

    products.splice(index, 1);

    saveProducts();

    showProducts();

    updateCounter();

}

// =========================
// معاينة الصورة
// =========================
function previewImage() {

    let file = document.getElementById("image").files[0];

    if (!file) return;

    let reader = new FileReader();

    reader.onload = function (e) {

        let img = document.getElementById("preview");

        if (img) {

            img.src = e.target.result;

            img.style.display = "block";

        }

    };

    reader.readAsDataURL(file);

}

// =========================
// البحث
// =========================
function searchProducts() {

    let text = document.getElementById("search").value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        let name = card.querySelector("h3").innerText.toLowerCase();

        if (name.includes(text)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}

// =========================
// عداد المنتجات
// =========================
function updateCounter() {

    let count = document.getElementById("count");

    if (count) {

        count.innerHTML = products.length;

    }

}

// =========================
// تسجيل الخروج
// =========================
function logout() {

    if (confirm("هل تريد تسجيل الخروج؟")) {

        window.location.href = "admin-login.html";

    }

}

// =========================
// تشغيل عند فتح الصفحة
// =========================
showProducts();
updateCounter();