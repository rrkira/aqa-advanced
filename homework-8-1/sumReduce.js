// масив чисел
const numbers = [10, 20, 30, 40, 50];

// метод reduce рахує суму
const sum = numbers.reduce((acc, current) => {
  return acc + current;
}, 0);

// виводимо результат
console.log("Сума:", sum);