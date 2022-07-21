const result = [{id: 0, answer: 0, question: "2*4"}, {id: 1, answer: 1, question: "2*5"}, {id: 2, answer: 1, question: "2*3"}, {id: 2, answer: 1, question: "2*3"},  {id: 2, answer: 1, question: "2*3"}, {id: 2, answer: 1, question: "2*3"},  {id: 2, answer: 1, question: "2*3"},  {id: 2, answer: 1, question: "2*3"},  {id: 2, answer: 1, question: "2*3"},  {id: 2, answer: 1, question: "2*3"}]; 
let name= "Zayan"; 
console.log(name);
document.querySelector(".name").textContent = name; 
console.log(result[1].answer); 
let score = result.reduce((a,b)=>{
    console.log(a, b); 
  return  (a.answer) + (b.answer)}, 0)
console.log(score); 
score = 4; 
document.querySelector(".num").textContent = score; 
score>=5 ? document.querySelector(".word").textContent = "Congratulations" : document.querySelector(".word").textContent = "Hard luck"; 

let review_div = document.querySelector(".div-ques");
function createRev(result){
    result.forEach(el => {
        console.log(el.answer); 
        // var newReview =`<h2 class = "ques">`+ el.question+`</h2>`;
        // review_div.innerHTML = newReview +  review_div.innerHTML;
        if(el.answer == 0){
            var newReviewWrong =`<h2 class = "quesWrong">`+ el.question+`</h2>`;
            review_div.innerHTML = newReviewWrong +  review_div.innerHTML;

             
        }
        else{
            var newReviewRight =`<h2 class = "quesRight">`+ el.question+`</h2>`;
            review_div.innerHTML = newReviewRight +  review_div.innerHTML;


        }
    });
      
  }
  createRev(result); 


