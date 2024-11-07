/*Este proyecto sincroniza el contador de productos 
en el carrito de compras entre múltiples pestañas abiertas 
en el mismo navegador usando BroadcastChannel.*/

const channel = new BroadcastChannel('cart_channel');

const cartCountElement = document.getElementById('cart-count');
const addToCartButton = document.getElementById('add-to-cart');

let cartCount = 0;

channel.onmessage = (event) => {
    cartCount = event.data;
    cartCountElement.textContent = cartCount;
};

const addToCart = () => {
    cartCount++;
    cartCountElement.textContent = cartCount;
    channel.postMessage(cartCount);
};

addToCartButton.addEventListener('click', addToCart);
