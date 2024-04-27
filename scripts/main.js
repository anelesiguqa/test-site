w = '300px'
const myImage = document.querySelector('img')
let h1 = document.querySelector('h1')
let btn = document.querySelector('button')

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src')
  if (mySrc === 'images/itachi-temple.jpg') {
    myImage.setAttribute('src', 'images/yoruichi.jpg')
    myImage.style.width = w
    myImage.style.height = 'auto'

    h1.textContent = 'Lady Yoroichi'
  } else {
    myImage.setAttribute('src', 'images/itachi-temple.jpg')
    h1.textContent = 'Itachi Uchiha'
  }
}

function setUserName() {
  const myName = prompt('Please enter your name.')
  if (!myName) {
    setUserName()
  } else {
    localStorage.setItem('name', myName)
    h1.textContent = `Mozilla is cool, ${myName}`
  }
}

if (!localStorage.getItem('name')) {
  setUserName()
} else {
  const storedName = localStorage.getItem('name')
  h1.textContent = `Mozilla is cool, ${storedName}`
}

btn.onclick = () => {
  setUserName()
}
