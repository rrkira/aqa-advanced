// створено привітання через конкатенацію рядків і через шаблонний рядок

// імена двох осіб
const firstPerson = "Anna";
const secondPerson = "Oleh";

// створюємо привітання, конкатенації рядків
const greetingConcat = "Hello, " + firstPerson + " and " + secondPerson + "!";
console.log(greetingConcat);

// Створюємо таке саме привітання за допомогою шаблонного рядка
const greetingTemplate = `Hello, ${firstPerson} and ${secondPerson}!`;
console.log(greetingTemplate);