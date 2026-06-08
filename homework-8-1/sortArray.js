// масив чисел
const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];

// копія масиву (щоб не змінити оригінал)
const sortedList = [...numbersList];

// сортуємо по зростанню
sortedList.sort((a, b) => a - b);

// виводимо результат
console.log("Оригінал:", numbersList);
console.log("Відсортований:", sortedList);