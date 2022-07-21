const result = JSON.parse(localStorage.getItem('result'))
let name = JSON.parse(localStorage.getItem('locName'))
let exitBtn = document.querySelector('.exit-btn')
console.log(result)
document.querySelector('.name').textContent = name

let score = JSON.parse(localStorage.getItem('scoreAnswer'))
document.querySelector('.num').textContent = score
score >= 5
  ? (document.querySelector('.word').textContent = 'Congratulations')
  : (document.querySelector('.word').textContent = 'Hard luck')

let review_div = document.querySelector('.div-ques')
function createRev(result) {
  result.forEach((el) => {
    console.log(el.answer)
    // var newReview =`<h2 class = "ques">`+ el.question+`</h2>`;
    // review_div.innerHTML = newReview +  review_div.innerHTML;
    if (el.answer == 0) {
      var newReviewWrong = `<h2 class = "quesWrong">` + el.question + `</h2>`
      review_div.innerHTML = newReviewWrong + review_div.innerHTML
    } else {
      var newReviewRight = `<h2 class = "quesRight">` + el.question + `</h2>`
      review_div.innerHTML = newReviewRight + review_div.innerHTML
    }
  })
}
createRev(result)

exitBtn.addEventListener('click', () => {
  localStorage.removeItem('locName')
  localStorage.removeItem('scoreAnswer')
  localStorage.removeItem('result')
  window.location = '../index.html'
})
