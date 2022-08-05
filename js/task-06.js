const input = document.getElementById("validation-input");
const inputData = input.dataset.length;

input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const eventValue = event.currentTarget.value;

  if (inputData == eventValue.length) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
