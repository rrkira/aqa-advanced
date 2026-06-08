//  масив чисел
const numbers = [1, 2, 3, 4, 5];

// створюємо новий масив через map
const result = numbers.map((value, index) => {
  // множимо значення на індекс
  return value * index;
});

// виводимо результат
console.log(result);