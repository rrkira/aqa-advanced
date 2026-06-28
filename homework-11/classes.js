// клас для роботи з todo (задачами)
class TodoService {
  async getTodo() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    return await response.json();
  }
}

// клас для роботи з користувачами
class UserService {
  async getUser() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );

    return await response.json();
  }
}

// створюємо об'єкти класів
const todoService = new TodoService();
const userService = new UserService();

// функція яка запускає запити
async function executeRequests() {
  try {
    const todo = await todoService.getTodo();
    const user = await userService.getUser();

    console.log("Todo:");
    console.log(todo);

    console.log("User:");
    console.log(user);

  } catch (error) {
    console.log("Помилка:", error);
  }
}

// запускаємо
executeRequests();