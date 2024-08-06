document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;

    document.querySelectorAll('.product button').forEach(button => {
        button.addEventListener('click', () => {
            const product = button.parentElement;
            const name = product.getAttribute('data-name');
            const price = parseInt(product.getAttribute('data-price'));

            const listItem = document.createElement('li');
            listItem.textContent = `${name} - ₩${price}`;
            cartItems.appendChild(listItem);

            totalPrice += price;
            totalPriceElement.textContent = `총 금액: ₩${totalPrice}`;
        });
    });
});
