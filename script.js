
document.addEventListener("DOMContentLoaded", () => {
    // Popup logic
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("close-popup");
    closePopup.addEventListener("click", () => popup.classList.remove("active"));
    setTimeout(() => popup.classList.add("active"), 1000);

    // Catalog and cart
    const products = [
        { id: 1, name: "Chocolate", price: 500, img: "https://via.placeholder.com/150" },
        { id: 2, name: "Vainilla", price: 450, img: "https://via.placeholder.com/150" },
    ];
    const cart = [];
    
    const productContainer = document.querySelector(".product-list");
    products.forEach(p => {
        const card = document.createElement("div");
        card.classList.add("product-card");
        card.innerHTML = `<h3>${p.name}</h3><img src="${p.img}" alt="${p.name}"><p>$${p.price}</p><button onclick="addToCart(${p.id})">Agregar</button>`;
        productContainer.appendChild(card);
    });

    window.addToCart = (id) => {
        const item = products.find(p => p.id === id);
        cart.push(item);
        updateCart();
    };

    const cartContainer = document.querySelector(".cart-items");
    const totalContainer = document.getElementById("total-price");
    const updateCart = () => {
        cartContainer.innerHTML = "";
        cart.forEach(item => {
            const div = document.createElement("div");
            div.textContent = `${item.name} - $${item.price}`;
            cartContainer.appendChild(div);
        });
        totalContainer.textContent = cart.reduce((sum, i) => sum + i.price, 0);
    };
});
