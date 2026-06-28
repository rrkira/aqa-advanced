// клас Book 
class Book {
  // конструктор створює новий об'єкт книги
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  // геттер для отримання назви книги
  get title() {
    return this._title;
  }

  // геттер для отримання автора
  get author() {
    return this._author;
  }

  // геттер для отримання року видання
  get year() {
    return this._year;
  }

  // геттер для назви з валідацією
  set title(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Назва книги повинна бути рядком.");
    }

    this._title = value;
  }

  // сеттер для автора
  set author(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Автор повинен бути рядком.");
    }

    this._author = value;
  }

  // сеттер для року видання
  set year(value) {
    const currentYear = new Date().getFullYear();

    if (
      typeof value !== "number" ||
      value < 0 ||
      value > currentYear
    ) {
      throw new Error("Некоректний рік видання.");
    }

    this._year = value;
  }

  // метод виводить інформацію про книгу
  printInfo() {
    console.log(`
Назва: ${this.title}
Автор: ${this.author}
Рік видання: ${this.year}
`);
  }

  // статичний метод повертає найстарішу книгу
  static getOldestBook(books) {
    return books.reduce((oldest, current) =>
      current.year < oldest.year ? current : oldest
    );
  }
}

// експортуємо клас
module.exports = Book;