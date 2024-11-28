//launch countdown
const paraContainer = document.querySelector(".output");

for (let i = 10; i >= 0; i--) {
  const para = document.createElement("p");
  paraContainer.appendChild(para);
  para.textContent = i;
}
