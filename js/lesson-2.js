// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

function sumNewArrey(arr) {
  const newArrey = [];
  for (let i = 0; i < arr.length - 1; i++) {
    newArrey.push(arr[i] + arr[i + 1]);
  }
  return newArrey;
}

console.log(sumNewArrey(someArr));

// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.
// Якщо це масив, але він порожній ([]) — повертає "The array is empty!".

const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

function findSmallestNumber(numbers) {
  if (!Array.isArray(numbers)) {
    return "Sorry, it is not an array!";
  }
  if (numbers.length === 0) {
    return "The array is empty!";
  }
  return Math.min(...numbers);
}

console.log(findSmallestNumber(numbers));

// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:

function findLongestWord(string) {
  const stringArrey = string.split(" ");
  let longestWord = stringArrey[0];
  for (const word of stringArrey) {
    if (longestWord.length < word.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

const user = {
  name: "John",
  age: 20,
  hobby: "tenis",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
console.log(user);
const keysUser = Object.keys(user);
for (const key of keysUser) {
  console.log(`${key} : ${user[key]}`);
}

// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

const salaries = {
  Mango: 100,
  Poly: 160,
  Ajax: 1470,
};
let sum = 0;
const keysSalaries = Object.keys(salaries);
for (const key of keysSalaries) {
  sum += salaries[key];
}
console.log(sum);

// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.

const fruits = [
  { name: "Яблуко", price: 45, quantity: 7 },
  { name: "Апельсин", price: 60, quantity: 4 },
  { name: "Банан", price: 125, quantity: 8 },
  { name: "Груша", price: 350, quantity: 2 },
  { name: "Виноград", price: 440, quantity: 3 },
  { name: "Банан", price: 125, quantity: 3 },
];
function calcTotalPrice(fruits, fruitName) {
  let total = 0;
  for (const fruit of fruits) {
    if (fruit.name === fruitName) {
      total += fruit.price * fruit.quantity;
    }
  }
  return total;
}
console.log(calcTotalPrice(fruits, "Яблуко"));
console.log(calcTotalPrice(fruits, "Банан"));

// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).
const styles = ["jazz", "blues"];
styles.push("rock-n-roll");
console.log(styles);
console.log(styles.indexOf("blues"));
styles[1] = "classic";
console.log(styles);
function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}
logItems(styles);

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

const logins = ["Peter", "John", "Igor", "Sasha"];
function checkLogin(array) {
  const greatings = prompt("Enter your login").toLowerCase();
  for (const arr of array) {
    if (arr.toLowerCase() === greatings) {
      return alert(`Welcome, ${arr}!`);
    }
  }
  return alert("User not found");
}
checkLogin(logins);

// ==========//
const arrayNumbers = [1, 5, 99, 90, 1];
console.log(arrayNumbers);
const velueNumb = arrayNumbers.indexOf(90);
arrayNumbers[velueNumb] = 100;
arrayNumbers.unshift(4);
console.log(arrayNumbers);
// ==========//

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.
function caclculateAverage() {
  let sum = 0;
  let count = 0;
  for (const num of arguments) {
    if (typeof num !== "number") {
      continue;
    }
    sum += num;
    count += 1;
  }
  return count === 0 ? 0 : sum / count;
}
console.log(caclculateAverage(10, 30, true));
console.log(caclculateAverage(5, 5, 5, false));
console.log(caclculateAverage(3, 3, 3));

// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на
// наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат
// (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в
// окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist
//  повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'
const calculator = {
  massege: "No such propeties",
  isExist() {
    return this.a === undefined || this.b === undefined;
  },
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  sum() {
    if (this.isExist()) {
      return this.massege;
    }
    return this.a + this.b;
  },
  mult() {
    if (this.isExist()) {
      return this.massege;
    }
    return this.a * this.b;
  },
};

console.log(calculator);
console.log(calculator.read(2, 3));
console.log(calculator.sum());
console.log(calculator.mult());
