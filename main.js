let arrWiner = JSON.parse(localStorage.getItem('arrWiner')).sort(
  (a, b) => +b.score - +a.score,
)
  ? JSON.parse(localStorage.getItem('arrWiner'))
  : []
let leaders = document.querySelector('.leaders')
arrWiner.length = 5
arrWiner.forEach((e) => {
  let winer = document.createElement('li')
  winer.setAttribute('class', 'leader')
  let nameWiner = document.createElement('h1')
  nameWiner.textContent = e.nameWiner
  winer.appendChild(nameWiner)
  leaders.appendChild(winer)
})
console.log(arrWiner)
