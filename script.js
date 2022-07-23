let top = JSON.parse(localStorage.getItem('arrWiner')); 
console.log(top); 

// function createRev(result) {
//   top.forEach((el) => {
//     console.log(el)
//     // var newReview =`<h2 class = "ques">`+ el.question+`</h2>`;
//     // review_div.innerHTML = newReview +  review_div.innerHTML;
//     if (el.answer == 0) {
//       var newReviewWrong = `<h2 class = "quesWrong">` + el.question + `</h2>`
//       review_div.innerHTML = newReviewWrong + review_div.innerHTML
//     } else {
//       var newReviewRight = `<h2 class = "quesRight">` + el.question + `</h2>`
//       review_div.innerHTML = newReviewRight + review_div.innerHTML
//     }
//   })
// }
// createRev(top)
