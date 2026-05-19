import { add, multiply } from "./math.js";

const button = document.getElementById("btn");

button.addEventListener("click", () => {
  const sum = add(10, 5);
  const result = multiply(4, 3);

  alert(
    `Сума: ${sum}\nМноження: ${result}`
  );
});