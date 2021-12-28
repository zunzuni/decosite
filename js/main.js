const lnb = document.querySelector('.lnb-box')
const hamBtn = document.querySelector('.ham-btn')

hamBtn.addEventListener('click',() =>{
  lnb.classList.toggle('clicked')
  hamBtn.classList.toggle('clicked')
})

const icon = document.querySelector('.icon')
const searchBox = document.querySelector('.search-box')
icon.addEventListener('click',() => {
  searchBox.classList.toggle('clicked')
})