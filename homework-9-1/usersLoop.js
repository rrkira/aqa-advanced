// масив об'єктів
const users = [
  { name: "Іван", email: "ivan@mail.com", age: 20 },
  { name: "Ольга", email: "olga@mail.com", age: 25 },
  { name: "Анна", email: "anna@mail.com", age: 30 }
];

// перебір масиву
for (const user of users) {
  // деструктуризація
  const { name, email, age } = user;

// виводимо результат
  console.log(name, email, age);
}