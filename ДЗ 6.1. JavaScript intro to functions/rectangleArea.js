// оголошення функції - перевіряє можливість оформлення замовлення
function checkOrder(available, ordered) {
  // перевіряємо: замовлення порожнє
  if (ordered === 0) {
    return "Your order is empty";
  }

  // перевіряємо: вистачає товару на складі
  if (ordered > available) {
    return "Your order is too large, we don't have enough goods.";
  }

  // всі умови виконані, замовлення приймається
  return "Your order is accepted";
}

// перевіряємо: яке можна оформити
console.log(checkOrder(100, 50));

// перевіряємо: для якого недостатньо товару
console.log(checkOrder(100, 150));

// перевіряємо: порожнє замовлення
console.log(checkOrder(100, 0));