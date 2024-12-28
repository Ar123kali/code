let cart = [];
let totalPrice = 0;

function addToCart(name, price) {
    // Add item to cart
    cart.push({ name, price });
    totalPrice += price;
    updateCartCount();
    alert(`${name} has been added to your cart!`);
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

function toggleCart() {
    const cartSection = document.getElementById('cart');
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = ''; // Clear previous items
    let total = 0;

    // Show or hide the cart
    if (cartSection.style.display === 'none') {
        cartSection.style.display = 'block';

        // Populate cart items
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItemsList.appendChild(li);
            total += item.price;
        });

        // Update total price
        document.getElementById('total-price').textContent = `Total: $${total.toFixed(2)}`;
    } else {
        cartSection.style.display = 'none';
    }
}

function clearCart() {
    cart = [];
    totalPrice = 0;
    updateCartCount();
    document.getElementById('cart-items').innerHTML = '';
    document.getElementById('total-price').textContent = 'Total: $0.00';
    alert('Your cart has been cleared.');
}