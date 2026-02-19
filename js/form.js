const form = document.getElementsByTagName("form")[0];
const lengthEl = document.getElementById("length");
const widthEl = document.getElementById("width");
const heightEl = document.getElementById("height");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const length = Number(lengthEl.value);
  const width = Number(widthEl.value);
  const height = Number(heightEl.value);

  alert(`Maximum ${length * width * height} cm3 térkitöltőre lenne szükséged.`);
});
