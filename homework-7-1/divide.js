// викликаємо функцію - ділення з перевірками
function divide(numerator, denominator) {
  // перевірка: чи обидва значення є числами
  if (typeof numerator !== "number" || typeof denominator !== "number") {
    throw new Error("Обидва аргументи мають бути числами");
  }

  // перевірка: ділення на 0 заборонене
  if (denominator === 0) {
    throw new Error("Не можна ділити на нуль");
  }

  // якщо все ок - повертаємо результат ділення
  return numerator / denominator;
}


// 1. нормальний випадок
try {
  console.log(divide(10, 2));
} catch (error) {
  console.log("Помилка:", error.message);
} finally {
  console.log("Робота завершена");
}

// 2. ділення на 0
try {
  console.log(divide(10, 0));
} catch (error) {
  console.log("Помилка:", error.message);
} finally {
  console.log("Робота завершена");
}

// 3. один з аргументів не є числом
try {
  console.log(divide("10", 2));
} catch (error) {
  console.log("Помилка:", error.message);
} finally {
  console.log("Робота завершена");
}