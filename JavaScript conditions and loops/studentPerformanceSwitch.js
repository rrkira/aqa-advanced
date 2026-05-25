// Виконайте попереднє завдання але використовуючи конструкцію switch/case

// змінна із середньою оцінкою студента
const averageGrade = 85;

// визначаємо рівень успішності студента за допомогою switch/case
switch (true) {
  case averageGrade < 60:
    console.log("Незадовільно");
    break;

  case averageGrade <= 70:
    console.log("Задовільно");
    break;

  case averageGrade <= 80:
    console.log("Добре");
    break;

  case averageGrade <= 90:
    console.log("Дуже добре");
    break;

  case averageGrade <= 100:
    console.log("Відмінно");
    break;

  default:
    console.log("Некоректна оцінка");
}