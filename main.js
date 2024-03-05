const minusButton = document.querySelector("#minus");
const plusButton = document.querySelector("#plus");
const result = document.querySelector("#result");
let startNumber = 0;
plusButton.addEventListener("click", () => {
  result.innerHTML = startNumber++;
  if (startNumber > 10) {
    startNumber = 0;
  }
});
minusButton.addEventListener("click", () => {
  result.innerHTML = startNumber--;
  if (startNumber < 0) {
    startNumber = 0;
  }
});
