// імпортуємо клас Book
const Book = require("./Book");

// клас EBook успадковує Book
class EBook extends Book {
  // Додаємо нову властивість fileFormat
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this.fileFormat = fileFormat;
  }

  // геттер формату файлу
  get fileFormat() {
    return this._fileFormat;
  }

  // меттер формату з валідацією
  set fileFormat(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Некоректний формат файлу.");
    }

    this._fileFormat = value;
  }

  // перевизначений метод printInfo
  printInfo() {
    console.log(`
Назва: ${this.title}
Автор: ${this.author}
Рік видання: ${this.year}
Формат файлу: ${this.fileFormat}
`);
  }

  // статичний метод створює EBook із Book
  static createFromBook(book, format) {
    return new EBook(
      book.title,
      book.author,
      book.year,
      format
    );
  }
}

// експортуємо клас
module.exports = EBook;