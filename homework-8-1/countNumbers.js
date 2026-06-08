// масив чисел
const numbers = [2, -5, 0, 7, -3, 0, 10, -8];

// змінні-лічильники
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

// проходимо по масиву
for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];

  // перевіряємо число
  if (num > 0) {
    positiveCount++;
  } else if (num < 0) {
    negativeCount++;
  } else {
    zeroCount++;
  }
}

// виводимо результат
console.log("Кількість позитивних чисел:", positiveCount);
console.log("Кількість негативних чисел:", negativeCount);
console.log("Кількість нульових чисел:", zeroCount);