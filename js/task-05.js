const input = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

input.addEventListener("input", onInputChange);

function onInputChange(event) {
  nameOutput.textContent = event.currentTarget.value || "Anonymous";
  console.log(nameOutput);
}
