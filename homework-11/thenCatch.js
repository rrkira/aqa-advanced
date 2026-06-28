// беремо дані про задачу (todo) з сайту
function getTodo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json()); // перетворюємо відповідь в об'єкт
}

// беремо дані про користувача
function getUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json());
}

// чекаємо поки ОБИДВА запити виконаються
Promise.all([getTodo(), getUser()])
  .then((results) => {
    console.log("Все виконалось (Promise.all):");
    console.log(results);
  })
  .catch((error) => {
    console.log("Сталася помилка:", error);
  });

// беремо той запит, який швидше виконається
Promise.race([getTodo(), getUser()])
  .then((result) => {
    console.log("Хто перший відповів (Promise.race):");
    console.log(result);
  })
  .catch((error) => {
    console.log("Помилка:", error);
  });