const baseURL = 'http://localhost:3000'

const usernameInput = document.querySelector('#username-input')
const usernameBtn = document.querySelector('#username-button')
const usernameP = document.querySelector('#username-p')

const pokemonInput = document.querySelector('#pokemon-input')
const pokemonBtn = document.querySelector('#pokemon-button')

const newImg = document.querySelector('.child2')
const newName = document.querySelector('.child3')
const newID = document.querySelector('.child4')

const addPokemon = document.querySelector('#add-button')
const poke1 = document.querySelector('#poke1')
const poke2 = document.querySelector('#poke2')
const poke3 = document.querySelector('#poke3')
const poke4 = document.querySelector('#poke4')
const poke5 = document.querySelector('#poke5')
const poke6 = document.querySelector('#poke6')

const wipeTeam = document.querySelector('#wipe-button')

const teamNameInput = document.querySelector('#teamname-input')
const submitTeam = document.querySelector('#submitteam-button')

const seeTeams = document.querySelector('#seeteam-button')

let misty = {}
let masterArray = []
let imgHolder
let dexHolder
let nameHolder


let currentUser

usernameBtn.addEventListener('click', (e) => {
  e.preventDefault()
  usernameP.innerHTML = 'WELCOME: '+usernameInput.value
  axios.post(`${baseURL}/users`, {name: usernameInput.value})
    .then((response) => {
      if(response.data.valid) {
        currentUser = usernameInput.value
        alert('user created gj')
      } else {
        alert('user WAS NOT created')
      }
    })
    .catch(error => console.log(error))
})



pokemonBtn.addEventListener('click', (e) => {
  e.preventDefault()

  let id = pokemonInput.value

  newImg.src = 'assets/loader.gif'
  axios.get(`${baseURL}/pokemon?id=${id}`)
    .then((response) => {

      imgHolder = response.data.sprites
      dexHolder = response.data.id
      nameHolder = response.data.name

      newImg.src = response.data.sprites
      newName.innerHTML = response.data.name.charAt(0).toUpperCase() + response.data.name.slice(1);

      newID.innerHTML = response.data.id
    })
})

addPokemon.addEventListener('click', (e) => {
  e.preventDefault()
  let grossString = "http://localhost:8888/PatsPokeWorld/PatsPokeWorldFE/assets/pokebadges.png"

  if(poke1.src == grossString) {
    poke1.src = imgHolder
  } else if (poke2.src == grossString) {
    poke2.src = imgHolder
  } else if (poke3.src == grossString) {
    poke3.src = imgHolder
  } else if (poke4.src == grossString) {
    poke4.src = imgHolder
  } else if (poke5.src == grossString) {
    poke5.src = imgHolder
  } else if (poke6.src == grossString){
    poke6.src = imgHolder
  }

  misty.name = nameHolder
  misty.dex_id = dexHolder
  misty.img = imgHolder

  masterArray.push(misty)
  misty = {}

})

submitTeam.addEventListener('click', (e) => {
  e.preventDefault()

  let promise1 = axios.post(`${baseURL}/squads`, {name: teamNameInput.value})
    .then((response) => {
      //do i add currentuser here?
      if(response.data.valid) {
        alert('squirtle squad!')
      } else {
        alert('squad not made')
      }
    })
    .catch(error => console.log(error))


  let promise2 = axios.post(`${baseURL}/pokemon`, {masterArray})
    .then((response) => {
      if(response) {
        alert('Pokemon spawned!')
      }
    })
    .catch(error => console.log(error))

  Promise.all([promise1, promise2])

})

wipeTeam.addEventListener('click', (e) => {
  e.preventDefault()
  poke1.src = "assets/pokebadges.png"
  poke2.src = "assets/pokebadges.png"
  poke3.src = "assets/pokebadges.png"
  poke4.src = "assets/pokebadges.png"
  poke5.src = "assets/pokebadges.png"
  poke6.src = "assets/pokebadges.png"
  masterArray = []
})
