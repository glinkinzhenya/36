// на странице находятся элементы:
// div - фигура, которая может принимать какие - то формы
// select - выбрать тип фигуры(квадрат, прямоугольник, круг).При изменении значения в нем, меняется фигура
// input для выбора цвета.При его изменении меняется цвет фигуры

const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

form.addEventListener("click", (e) => {
    e.preventDefault();
});

button.addEventListener("click", () => {
    const input = document.querySelector("input").value;
    const select = document.querySelector("select").value;
    data(select);
    document.getElementById("id").style = `background-color: ${input}`;
});

function data(params) {
    if (params === "value1") {
        document.querySelector("div").className = '';
        div.classList.add("square");
    }
    if (params === "value2") {
        document.querySelector("div").className = '';
        div.classList.add("rectangle");
    }
    if (params === "value3") {
        document.querySelector("div").className = '';
        div.classList.add("circle");
    }
};