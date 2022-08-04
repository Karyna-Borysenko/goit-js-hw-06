let counterValue = 0;

const valueEl = document.getElementById("value");

const decreaseCounterValue = document.querySelector(
  '[data-action="decrement"]'
);
const increaseCounterValue = document.querySelector(
  '[data-action="increment"]'
);

decreaseCounterValue.addEventListener("click", () => {
  counterValue -= 1;
  updateValue();
});

increaseCounterValue.addEventListener("click", () => {
  counterValue += 1;
  updateValue();
});

function updateValue() {
  valueEl.textContent = counterValue;
}
