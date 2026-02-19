const inputs = document.querySelectorAll("#categories input");
const plastic = document.getElementById("plastic");
const paper = document.getElementById("paper");
const bio = document.getElementById("bio");

inputs.forEach((input) => {
  input.addEventListener("change", (e) => {
    console.log(e.target.value);

    plastic.style.display = "none";
    paper.style.display = "none";
    bio.style.display = "none";

    switch (e.target.value) {
      case "all":
        plastic.style.display = "";
        paper.style.display = "";
        bio.style.display = "";
        break;
      case "plastic":
        plastic.style.display = "";
        break;
      case "paper":
        paper.style.display = "";
        break;
      case "bio":
        bio.style.display = "";
        break;
    }
  });
});
