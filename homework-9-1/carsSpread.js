// 1 об'єкт авто
const car1 = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020
};

// 2 об'єкт авто
const car2 = {
  brand: "BMW",
  model: "X5",
  owner: "Іван"
};

const car3 = {
  ...car1,
  ...car2
};

// виводимо результат
console.log(car3);