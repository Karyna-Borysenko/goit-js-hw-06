const catEl = document.querySelectorAll(".item");
console.log(`Number of categories: `, catEl.length);

catEl.forEach(function (singleCatEl) {
  const header = singleCatEl.querySelector("h2");
  const unList = singleCatEl.querySelector("ul");
  const list = unList.querySelectorAll("li");

  console.log("Category: ", header.textContent);
  console.log("Elements: ", list.length);
});
