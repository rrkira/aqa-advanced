// функція показує текст через певний час
function printDelayedText(text, milliseconds) {
  // setTimeout виконає функцію через вказаний час
  setTimeout(() => {
    console.log(text);
  }, milliseconds);
}

// виклик функції
printDelayedText("Привіт, світ!", 3000);