// на странице находятся элементы:
// div - фигура, которая может принимать какие - то формы
// select - выбрать тип фигуры(квадрат, прямоугольник, круг).При изменении значения в нем, меняется фигура
// input для выбора цвета.При его изменении меняется цвет фигуры

const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

button.addEventListener("click", (e) => {
    e.preventDefault();
    const input = document.querySelector("input").value;
    const select = document.querySelector("select").value;
    div.className = '';
    div.classList.add(`${select}`);
    div.style = `background-color: ${input}`;
});