const divMessages = document.querySelector(".messages")
const messages = document.querySelector(".messages")
messages.lastElementChild.scrollIntoView()
const field = document.querySelector("#text-message")

field.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault()
    sendMessage()
    console.log("clicked")
  }
})

function closeApp() {
  window.close()
}

function getHoraAtual() {
  const dataAtual = new Date()
  const hora = dataAtual.getHours().toString().padStart(2, "0")
  const minutos = dataAtual.getMinutes().toString().padStart(2, "0")
  return hora + ":" + minutos
}

function sendMessage() {
  let message = document.querySelector("#text-message")
  let data = Date()

  if (message !== "") {
    let divMessage = document.createElement("div")
    divMessage.classList.add("message")
    divMessage.classList.add("you")

    let divTop = document.createElement("div")
    divTop.classList.add("top")
    divTop.innerText = `Você - ${getHoraAtual()}`

    let divBody = document.createElement("div")
    divBody.classList.add("body")
    divBody.innerText = message.value

    divMessage.appendChild(divTop)
    divMessage.appendChild(divBody)
    divMessages.appendChild(divMessage)
  }

  message.value = ""
}
