// об'єкт людини
const person = {
  firstName: "Анна",
  lastName: "Фопіна",
  age: 25
};

// додаємо email
person.email = "anna@gmail.com";

// видаляємо age
delete person.age;

// виводимо результат
console.log(person);