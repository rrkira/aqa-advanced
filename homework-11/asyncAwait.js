// отримати todo (задачу)
async function getTodo() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  return await response.json(); // робимо з відповіді нормальний об'єкт
}

// отримати користувача
async function getUser() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/1"
  );

  return await response.json();
}

// головна функція
async function executeRequests() {
  try {
    // чекаємо поки виконаються обидва запити
    const allResults = await Promise.all([
      getTodo(),
      getUser(),
    ]);

    console.log("Обидва запити виконались:");
    console.log(allResults);

    // беремо той, що швидше відповів
    const raceResult = await Promise.race([
      getTodo(),
      getUser(),
    ]);

    console.log("Перший результат:");
    console.log(raceResult);

  } catch (error) {
    // якщо щось зламалось — показуємо помилку
    console.log("Помилка:", error);
  }
}

// запускаємо програму
executeRequests();