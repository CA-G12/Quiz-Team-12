let s = document.querySelector('#registerSectionInputId')
let nameValue = s.addEventListener('click', addToLocalStorage)
let inpVul = document.querySelector('.registerSectionInput')
let toQ = document.querySelector('.toQ')
let names

function addToLocalStorage(data) {
  if (inpVul.value == '') {
    return
  }
  console.log(inpVul)
  location.assign('./qu/index.html')
  var data = document.querySelector('#registerSectionInput').value
  names = data
  localStorage.setItem('locName', JSON.stringify(names))
  console.log(names)
  document.querySelector('#registerSectionInput').value = ''
}

// ./qu/index.html
