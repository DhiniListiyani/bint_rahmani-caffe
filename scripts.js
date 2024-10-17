// Array untuk menyimpan item keranjang
let cart = [];
let total = 0;

// Fungsi untuk menambah item ke keranjang
function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    console.log(cart);  // Log untuk melihat apakah item berhasil ditambahkan
    updateCartDisplay();
}

// Fungsi untuk memperbarui tampilan keranjang
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotalDisplay = document.getElementById("cart-total");

    // Bersihkan kontainer keranjang sebelum diisi ulang
    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Keranjang kosong</p>";
    } else {
        // Tampilkan setiap item yang ada di keranjang
        cart.forEach(item => {
            const itemElement = document.createElement("p");
            itemElement.textContent = `${item.name} - Rp ${item.price}`;
            cartItemsContainer.appendChild(itemElement);
        });
    }

    // Perbarui total harga
    cartTotalDisplay.textContent = `Rp ${total}`;
}

// Mengambil semua tombol "Tambah ke Keranjang"
const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        const name = button.getAttribute("data-name");
        const price = parseInt(button.getAttribute("data-price"));
        console.log(`Item ${name} ditambahkan dengan harga Rp ${price}`);
        addToCart(name, price);
    });
});

// Fungsi untuk checkout
document.getElementById("checkout-btn").addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Keranjang masih kosong.");
    } else {
        alert(`Terima kasih telah memesan! Total pesanan Anda: Rp ${total}`);
        cart = [];  // Reset keranjang setelah checkout
        total = 0;  // Reset total harga
        updateCartDisplay();
    }
});
