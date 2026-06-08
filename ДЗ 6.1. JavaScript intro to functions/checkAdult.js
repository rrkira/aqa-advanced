// оголошення функції - function declaration
function calculateRectangleArea(width, height){
    // обчислюємо площу прямокутника
    return width*height;
}

// викликаємо функцію та виводимо результат в консоль
console.log(calculateRectangleArea(5, 10));


// огофошення функції - function expression
const calculateRectangleAreaExpression = function (width, height) {
  // обчислюємо площу прямокутника
  return width*height;
};

// викликаємо функцію та виводимо результат у консоль
console.log(calculateRectangleAreaExpression(5, 10));


// оголошуємо функцію(стрілочна) - arrow function
const calculateRectangleAreaArrow = (width, height) => {
  // обчислюємо площу прямокутника
  return width*height;
};

// викликаємо функцію та виводимо результат у консоль
console.log(calculateRectangleAreaArrow(5, 10));
