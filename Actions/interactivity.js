const listItems = document.querySelectorAll('li')

function toggleDone(e) {
  if (!e.target.className) {
    e.target.className = 'done'
  } else {
    e.targetclassName = 'red'
  }
}

listItems.forEach((item) => {
  item.addEventListener('click', toggleDone)
})
let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1')

function setUserName() {
  const myName = prompt('Please enter your name.')
  localStorage.setItem('name', myName)
  myHeading.textContent = `Mozilla is cool, ${myName}`
}
if (!localStorage.getItem('name')) {
  setUserName()
} else {
  const storedName = localStorage.getItem('name')
  myHeading.textContent = `Mozilla is cool, ${storedName}`
}
myButton.addEventListener('click', () => {
  setUserName()
})
