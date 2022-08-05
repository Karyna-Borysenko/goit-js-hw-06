const boxes = document.getElementById("boxes");
const input = document.querySelector("input");
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");

// create

create.addEventListener("click", onButtonCreateClick);

function onButtonCreateClick() {
  destroyBoxes(); // очистит предыдущее

  let divAmaunt = input.value;
  createBoxes(divAmaunt);
}

function createBoxes(amount) {
  let divArr = [];
  for (let i = 0; i < amount; i += 1) {
    // создаем div
    let div = document.createElement("div");
    // добавляем рандомный цвет
    div.style.backgroundColor = getRandomHexColor();
    // задаем размер
    let size = 30 + i * 10;
    div.style.width = size + "px";
    div.style.height = size + "px";
    // пуш
    divArr.push(div);
  }
  boxes.append(...divArr);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// destroy

destroy.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxes.innerHTML = "";
}
