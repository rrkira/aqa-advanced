// Генерація таблиці множення

// створюємо число для таблиці множення
const number = 5;

// генеруємо таблиця множення за допомогою циклу for
console.log ("for") // розділяємо результати
for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

// генеруємо таблицю множення за допомогою циклу while
let i = 1;

console.log ("while") // розділяємо результати
while (i <= 10) {
  console.log(`${number} x ${i} = ${number * i}`);
  i++;
}