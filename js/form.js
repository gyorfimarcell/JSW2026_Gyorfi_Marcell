const form = document.getElementsByTagName("form")[0];
const lengthEl = document.getElementById("length");
const widthEl = document.getElementById("width");
const heightEl = document.getElementById("height");
const dialog = document.getElementById("dialog");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const length = Number(lengthEl.value);
  const width = Number(widthEl.value);
  const height = Number(heightEl.value);

  dialog.querySelector("p").innerText =
    `Maximum ${length * width * height} cm3 térkitöltőre lenne szükséged.`;
  dialog.showModal();
});
