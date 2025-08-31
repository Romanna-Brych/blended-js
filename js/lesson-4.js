// 1 - отримай body елемент і виведи його в консоль;
const bodyEl = document.querySelector("body");
console.log(bodyEl);
// 2 - отримай елемент id="title" і виведи його в консоль;
const titleEl = document.querySelector("#title");
console.log(titleEl);
// 3 - отримай елемент class="list" і виведи його в консоль;
const listEl = document.querySelector(".list");
console.log(listEl);
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const elementsListAll = document.querySelectorAll("[data-topic]");
console.log(elementsListAll);
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
console.log(elementsListAll[0]);
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
console.log(elementsListAll[elementsListAll.length - 1]);
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
console.log(titleEl.nextElementSibling);
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const subTitel = document.querySelectorAll("h3");
console.log(subTitel);
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
subTitel.forEach((h3) => h3.classList.add("active"));
// 10 - знайти елемент li який має атрибут data-topic з значенням
// "navigation" і виведи його в консоль;
const elementTopic = document.querySelector("li[data-topic]");
console.log(elementTopic);
// 11 - додай для знайденого елемента data-topic="navigation"
// атрибут style і зроби його backgroundColor жовтим
elementTopic.style.backgroundColor = "yellow";
// 12 - у елемента data-topic="navigation" знайди елемент р і
// зміни його текст на "Я змінив тут текст!".
elementTopic.children[1].textContent = "Я змінив тут текст!";
// 13 - створи const currentTopic = "manipulation"; після цього
// знайди елемент у якогоо атрибут data-topic має значення,
// яке зберігається у змінній currentTopic і виведи його в консоль;
const currentTopic = "manipulation";
const elementCurrentTopic = document.querySelector(
  `[data-topic="${currentTopic}"]`
);
console.log(elementCurrentTopic);
// 14 - додай до знайденого елемента атрибут style і зроби його
// backgroundColor блакитним;
elementCurrentTopic.style.backgroundColor = "blue";
// 15 - знайти в документі заголовок, який має class="completed" і
//  виведи його в консоль;
const titelComplited = document.querySelector(".completed");
console.log(titelComplited);
// 16 - видали елемент li в якому знаходиться заголовок, який має
//  class="completed"
const liToDelete = titelComplited.closest("li");
liToDelete.remove();
// 17 - після заголовка h1 (перед списком) додай новий елемент p
// і задай йому наступний текст: "Об'єктна модель документа
// (Document Object Model)"
const newEl = document.createElement("p");
newEl.textContent = "Об'єктна модель документа (Document Object Model)";
titleEl.after(newEl);
// 18 - додай новий елемент списку у кінець списка, його заголовок
// це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу".
//  тобто, потрібно створити елемент LI потім наповнити H3 та P і
// готову LI закинути у кінець списку
const newLi = document.createElement("li");
const newH3 = document.createElement("h3");
newH3.textContent = "Властивість innerHTML";
const newP = document.createElement("p");
newP.textContent =
  "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";
newLi.append(newH3, newP);
listEl.append(newLi);
// 19 - зроби це саме, але використовуй шаблонні рядки та
// метод insertAdjacentHTML()
function createMarkup() {
  return `<li>
  <h3>Властивість innerHTML</h3>
  <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
  </li>`;
}
listEl.insertAdjacentHTML("beforeend", createMarkup());
// 20 - очисти список
listEl.innerHTML = "";

// ================

// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

const randomNumber = () => Math.floor(Math.random() * 100) + 1;
const numberContainerEl = document.querySelector(".number-container");
for (let i = 1; i <= 100; i++) {
  const num = randomNumber();
  const block = document.createElement("div");
  block.classList.add("number");
  block.textContent = num;
  if (!(num % 2)) {
    block.classList.add("even");
  } else {
    block.classList.add("odd");
  }
  numberContainerEl.append(block);
}
// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`
const inputEl = document.querySelector(".js-username-input");
inputEl.addEventListener("input", onInput);
function onInput(event) {
  if (event.target.value.trim().length > 6) {
    event.target.classList.remove("error");
    event.target.classList.add("success");
  } else {
    event.target.classList.remove("success");
    event.target.classList.add("error");
  }
}

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`
inputEl.addEventListener("focus", onFocus);
function onFocus(event) {
  event.target.classList.remove("outline-red", "outline-green", "outline-lime");
  if (event.target.value.length === 0) {
    event.target.classList.add("outline-red");
  } else {
    event.target.classList.add("outline-green");
  }
}

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`
inputEl.addEventListener("blur", onBlur);
function onBlur(event) {
  event.target.classList.remove("outline-red", "outline-green", "outline-lime");
  if (event.target.value.length === 0) {
    event.target.classList.add("outline-red");
  } else {
    event.target.classList.add("outline-lime");
  }
}

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.
const formEl = document.querySelector(".js-contact-form");
formEl.addEventListener("submit", onSubmit);
const input = document.querySelector(".js-username-input");
input.addEventListener("input", handleInput);
const output = document.querySelector(".js-username-output");
function handleInput(event) {
  if (event.target.value.trim() === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = event.target.value;
  }
}

function onSubmit(event) {
  event.preventDefault();
  const inputValue = event.target.elements.userName.value.trim();
  const cheked = event.target.elements.accept.checked;

  if (inputValue === "" || cheked === false) {
    return alert(":(");
  }
  const user = {
    userName: inputValue,
  };
  console.log(user);

  event.target.reset();
  output.textContent = "Anonymous";
}
// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.
const boxEl = document.querySelector(".box");
const decreaseBtn = document.querySelector(".js-decrease");
const increaseBtn = document.querySelector(".js-increase");

decreaseBtn.addEventListener("click", makeSmoller);
increaseBtn.addEventListener("click", makeBigger);

let scale = 1;

function makeSmoller(event) {
  scale -= 0.2;
  if (scale < 0.2) {
    scale = 0.2;
  }
  boxEl.style.transform = `scale(${scale})`;
}

function makeBigger() {
  scale += 0.2;
  boxEl.style.transform = `scale(${scale})`;
}
