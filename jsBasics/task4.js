//обчислено площу кола, площу прямокутника та обʼєм циліндра з округленням до 2 знаків після крапки

// обчислюємо площу кола

// радіус кола
const circleRadius = 5;

// обчислюємо площу кола за формулою π * radius^2
const circleArea = Math.PI * circleRadius ** 2;

// виводимо площу кола, округлену до 2 знаків після крапки
console.log(circleArea.toFixed(2));

// обчислюємо площу прямокутника

// довжина прямокутника
const length = 10;

// ширина прямокутника
const width = 6;

// обчислюємо площу прямокутника за формулою length * width
const rectangleArea = length * width;

// виводимо площу прямокутника, округлену до 2 знаків після крапки
console.log(rectangleArea.toFixed(2));

// обчислюємо обʼєм циліндра

// радіус циліндра
const cylinderRadius = 4;

// висота циліндра
const height = 8;

// обчислюємо обʼєм циліндра за формулою π * radius^2 * height
const cylinderVolume = Math.PI * cylinderRadius ** 2 * height;

// виводимо обʼєм циліндра, округлений до 2 знаків після крапки
console.log(cylinderVolume.toFixed(2));