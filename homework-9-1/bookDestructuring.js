// об'єкт книги
const book = {
  title: "Кобзар",
  author: "Тарас Шевченко",
  year: 1840
};

// деструктуризація
const { title, author } = book;

// виводимо результат
console.log(title);
console.log(author);