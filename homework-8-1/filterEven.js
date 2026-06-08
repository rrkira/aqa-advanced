// масив чисел
const numbers = [1,2,3,4,5,6,7,8,9,10];

// фільтруємо тільки парні
const evenNumbers = numbers.filter((num) => {
  return num % 2 === 0;
});

// виводимо результат
console.log(evenNumbers);