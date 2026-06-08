// викликаємо функцію - яка для парних чисел
function handleEven() {
  console.log("number is even");
}

// викликаємо функцію - яка для непарних чисел
function handleOdd() {
  console.log("number is odd");
}

// приймамо число + 2 колбек-функції
function handleNum(num, evenCb, oddCb) {
  // перевіряємо парне число чи ні
  if (num % 2 === 0) {
    // якщо парне — викликаємо колбек для парних
    evenCb();
  } else {
    // якщо непарне — викликаємо колбек для непарних
    oddCb();
  }
}

handleNum(10, handleEven, handleOdd); // парне
handleNum(7, handleEven, handleOdd);  // непарне