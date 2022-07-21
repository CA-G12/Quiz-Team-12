let data = [
  {
    id: 1,
    question: '2x4',
    answer: 8,
    options: [6, 8, 2, 24],
  },
  {
    id: 2,
    question: '12x4',
    answer: 48,
    options: [36, 48, 32, 24],
  },
  {
    id: 3,
    question: '125/5',
    answer: 25,
    options: [0, 5, 20, 25],
  },
  {
    id: 4,
    question: '28+17',
    answer: 45,
    options: [142, 35, 55, 45],
  },
  {
    id: 5,
    question: '18/6',
    answer: 3,
    options: [2, 12, 3, 24],
  },
  {
    id: 6,
    question: '144+84',
    answer: 228,
    options: [328, 248, 268, 228],
  },
  {
    id: 7,
    question: '199+99',
    answer: 298,
    options: [288, 298, 308, 318],
  },
  {
    id: 8,
    question: '20 X -9',
    answer: -180,
    options: [180, -180, 178, -178],
  },
  {
    id: 10,
    question: '150 X -3',
    answer: -180,
    options: [50, -30, 30, -50],
  },
  {
    id: 9,
    question: '150 X -3',
    answer: -180,
    options: [50, -30, 30, -50],
  },
]

const score = document.querySelector('.score')
const question = document.querySelector('.question')
const option1 = document.querySelector('.option1')
const option2 = document.querySelector('.option2')
const option3 = document.querySelector('.option3')
const option4 = document.querySelector('.option4')
const nextBtn = document.querySelector('.nextBtn')
let randomQuestion = data[Math.floor(Math.random() * data.length)]
let scoreAnswer = 0
let m = 0
let counter = 1
let result = []
score.textContent = counter
question.textContent = randomQuestion.question
option1.textContent = randomQuestion.options[0]
option2.textContent = randomQuestion.options[1]
option3.textContent = randomQuestion.options[2]
option4.textContent = randomQuestion.options[3]
let a = 0
let addAnswer = (e) => {
  m = 1
  result = result.filter((item) => item.id != randomQuestion.id)
  let objAnswer = {
    id: randomQuestion.id,
    question: randomQuestion.question,
    answer: e.target.textContent == randomQuestion.answer ? 1 : 0,
  }
  a = e.target.textContent == randomQuestion.answer ? 1 : 0
  result.push(objAnswer)
  localStorage.setItem('result', JSON.stringify(result))
}
option1.addEventListener('click', addAnswer)
option2.addEventListener('click', addAnswer)
option3.addEventListener('click', addAnswer)
option4.addEventListener('click', addAnswer)
nextBtn.addEventListener('click', () => {
  scoreAnswer += a
  localStorage.setItem('scoreAnswer', JSON.stringify(scoreAnswer))
  if (m == 0) {
    return
  }
  m = 0
  if (counter == 10) {
    return
  }
  if (counter == 9) {
  }
  counter++
  data = data.filter((item) => item.id != randomQuestion.id)
  score.textContent = counter

  randomQuestion = data[Math.floor(Math.random() * data.length)]
  question.textContent = randomQuestion.question
  option1.textContent = randomQuestion.options[0]
  option2.textContent = randomQuestion.options[1]
  option3.textContent = randomQuestion.options[2]
  option4.textContent = randomQuestion.options[3]
  if (counter > 9) {
    nextBtn.textContent = 'submit'
  }
})
document.addEventListener('DOMContentLoaded', getTasksOnLoad)
function getTasksOnLoad() {
  if (localStorage.getItem('result')) {
    scoreAnswer = JSON.parse(localStorage.getItem('scoreAnswer'))
    result = JSON.parse(localStorage.getItem('result'))
    let a = []
    for (let i = 0; i < result.length; i++) {
      a.push(result[i].id)
    }
    data = data.filter((item) => !a.includes(item.id))
    counter = 10 - data.length + 1
    score.textContent = counter

    console.log(data, 11111)
  }
}
