const buttonElements = document.querySelectorAll("button");
var result = document.querySelector("span");

buttonElements.forEach((button) => {
  button.addEventListener("click", (event) => {
    const clickedItem = event.target;
    addClickedValue(clickedItem);
  });
});

function addClickedValue(element) {
  result.innerText += element.textContent
}
