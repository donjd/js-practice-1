const output = document.querySelector("#output");
const container = document.querySelector("#container");

function handleClick(e) {
  switch (e.target.id) {
    case "red":
      console.log("you clicked on the red button");
      break;
    case "green":
      console.log("you clicked on the green button");
      break;
    case "blue":
      console.log("you clicked on the blue button");
      break;
  }
}

container.addEventListener("click", handleClick);

const canvas = document.querySelector(".canvas");
const coordinates = document.querySelector("#coordinates");

canvas.addEventListener("keypress", (e) => {
  coordinates.textContent = `X: ${e.clientX}, Y: ${e.clientY}`;
  let keys = [];

  if (e.shiftKey) keys.push(`shift`);
  if (e.ctrlKey) keys.push(`ctrl`);
  if (e.altKey) keys.push(`alt`);
  if (e.metaKey) keys.push(`meta`);

  const whichKey = document.querySelector("#which-key");
  whichKey.textContent = `Keys: ${keys.join("+")}`;
});
