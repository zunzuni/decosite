const inputNum = document.querySelector('#num')
const money = document.querySelector('.money')
const num = document.querySelector('.num')

inputNum.addEventListener('change',() => {
  money.textContent = `${inputNum.value * 2}0,000`
  num.textContent = inputNum.value
})
// money

const inquireContentTextQuestion = document.querySelectorAll('.inquire-content-text-question')
const inquireContentTextAnswer = document.querySelectorAll('.inquire-content-text-answer')

inquireContentTextQuestion.forEach(element => {
  element.addEventListener('click',() => {
    inquireContentTextAnswer.forEach(element => {
      element.classList.toggle('clicked')
    });
  })
});

