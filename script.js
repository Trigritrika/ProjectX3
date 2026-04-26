
    let total = 0;
    const cartList = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('total-price');

    // Находим все кнопки "В корзину"
    const buyButtons = document.querySelectorAll('.buy-btn');

    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.pizza-card');
            // Достаем название и цену
            const name = card.querySelector('h3').innerText;
            const price = parseInt(card.querySelector('.price').innerText);

            const li = document.createElement('li');
            li.innerText = `${name} — ${price} ₽`;
            cartList.appendChild(li);

            total += price;
            totalDisplay.innerText = total;
        });
    });

    function clearCart() {
        total = 0;
        cartList.innerHTML = '';
        totalDisplay.innerText = total;
    }

