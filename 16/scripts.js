const sectionContacts = document.querySelector(".contacts")

const contacts = [
  [
    "A",
    "purple",
    [
      { nome: "Alfredo", sexo: "men" },
      { nome: "Angelina", sexo: "women" },
    ],
  ],
  [
    "B",
    "green",
    [
      { nome: "Bia", sexo: "women" },
      { nome: "Belinda", sexo: "women" },
      { nome: "Bruno", sexo: "men" },
    ],
  ],
  [
    "C",
    "pink",
    [
      { nome: "Carlos", sexo: "men" },
      { nome: "Carla", sexo: "women" },
      { nome: "Caio", sexo: "men" },
    ],
  ],
  [
    "D",
    "blue",
    [
      { nome: "Denny", sexo: "men" },
      { nome: "Daniel", sexo: "men" },
      { nome: "Diogo", sexo: "men" },
    ],
  ],
  ["E", "yellow", [{ nome: "Elaine", sexo: "women" }]],
]

let changePhoto = 1

for (let iOfLetter = 0; iOfLetter < contacts.length; iOfLetter++) {
  sectionContacts.innerHTML += 
  `
    <div class="list-wrapper flex">
      <div class="letter ${contacts[iOfLetter][1]}">${contacts[iOfLetter][0]}</div>
        <ul>
          
        </ul>
      </div>
  `
  const personContacts = document.querySelectorAll(`.contacts ul`)[iOfLetter]
  for (let jOfNames = 0; jOfNames < contacts[iOfLetter][2].length; jOfNames++) {
    changePhoto++
    personContacts.innerHTML += 
    `
          <li>
            <div class="person flex">
              <img src="https://randomuser.me/api/portraits/${contacts[iOfLetter][2][jOfNames].sexo}/${changePhoto}.jpg" alt="" />
              <div class="contact">
                <h3>${contacts[iOfLetter][2][jOfNames].nome}</h3>
                <p>(11) 90913-1234</p>
              </div>
            </div>
          </li>
    `
  }
}
