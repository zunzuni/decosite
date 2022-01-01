const inputNum = document.querySelector('#num')
const money = document.querySelector('.money')
const num = document.querySelector('.num')

inputNum.addEventListener('change',() => {
  money.textContent = inputNum.value * 20000
  num.textContent = inputNum.value
})
