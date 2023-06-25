// Variables
let inputName = document.getElementById("name")
let selectCity = document.getElementById("city")
let cards = document.querySelectorAll(".card")
let titleOfCards = [...cards].map((card) =>
  card.getElementsByTagName("h3")[0].innerText.toLowerCase()
)
let citieOfCards = [...cards].map(
  (card) => card.getElementsByClassName("location")[0].innerText
)
// Listener
inputName.addEventListener("keyup", function () {
  let inputValue = inputName.value.trim().toLowerCase()
  let newCards = titleOfCards.filter((title) => title.includes(inputValue))
  let selectValue = selectCity.value

  for (let i = 0; i < titleOfCards.length; i++) {
    cards[i].style.display = "none"
    for (let j = 0; j < newCards.length; j++) {
      if (
        titleOfCards[i] == newCards[j] &&
        (citieOfCards[i].includes(CITIES[selectValue]) || selectValue == "none")
      ) {
        cards[i].style.display = "block"
        break
      }
    }
  }
})

// Listener
const CITIES = {
  0: false,
  saoPaulo: "São Paulo",
  rioDejaneiro: "Rio de Janeiro",
  salvador: "Salvador",
}

selectCity.addEventListener("change", function () {
  let selectValue = selectCity.value

  for (let i = 0; i < citieOfCards.length; i++) {
    cards[i].style.display = "none"
    if (
      citieOfCards[i].includes(CITIES[selectValue]) ||
      selectValue == "none"
    ) {
      cards[i].style.display = "block"
    }
  }
})
