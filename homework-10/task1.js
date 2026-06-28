// імпортуємо класи
const Book = require("./Book");
const EBook = require("./EBook");

// створюємо екземпляри Book
const book1 = new Book(
  "Кобзар",
  "Тарас Шевченко",
  1840
);

const book2 = new Book(
  "Лісова пісня",
  "Леся Українка",
  1911
);

// створюємо екземпляр EBook
const ebook1 = new EBook(
  "Тигролови",
  "Іван Багряний",
  1944,
  "PDF"
);

// виводимо інформацію про книги
book1.printInfo();
book2.printInfo();
ebook1.printInfo();

// використовуємо сеттер
book1.title = "Кобзар (оновлене видання)";

// використовуємо геттер
console.log(book1.title);

const books = [book1, book2, ebook1];

const oldestBook = Book.getOldestBook(books);

console.log("Найстаріша книга:");
oldestBook.printInfo();

// створюємо електронну книгу зі звичайної книги
const ebook2 = EBook.createFromBook(book2, "EPUB");

console.log("Створена електронна книга:");
ebook2.printInfo();