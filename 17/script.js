const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

const thisMonth = months[new Date().getMonth()]

function render() {
  let output = ""

  for (month of months) {
    const active = thisMonth == month ? "active" : ""
    output = `${output}<div class="${active}">${month}</div>`
  }

  return output
}

const divMain = app.querySelector("main");
divMain.innerHTML = render();

const divHeader = app.querySelector("header span");
let thisYear = new Date().getFullYear();
divHeader.innerHTML = thisYear;

const iconLeft = document.querySelector(".ph-caret-left");
iconLeft.addEventListener('click', ()=>{
thisYear--
divHeader.innerHTML = thisYear
})

const iconRight = document.querySelector(".ph-caret-right")
iconRight.addEventListener("click", () => {
  thisYear++
  divHeader.innerHTML = thisYear
})