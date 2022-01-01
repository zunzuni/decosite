
const toggleBtn = document.querySelector('.toggle-btn')
const sideBtn = document.querySelector('.side-btn')
toggleBtn.addEventListener('click',() => {
  sideBtn.classList.toggle('clicked')
})
window.addEventListener('scroll',() => {
  if (window.scrollY > 50) {
    sideBtn.classList.add('scrolled')
  } else {
    sideBtn.classList.remove('scrolled')
    sideBtn.classList.remove('clicked')
  }
})

//toggle btn

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
const lnbTitles = document.querySelectorAll('.lnb-title')
lnbTitles.forEach(element => {
  element.addEventListener('mouseover',() => {
    pcSearchBox.classList.remove('clicked')
  })
});
const pcHeader = document.querySelector('.pc-header')
window.addEventListener('scroll',() => {
  if (window.scrollY > 50) {
    pcHeader.classList.add('header-on')
  } else {
    pcHeader.classList.remove('header-on')
  }
})
pcHeader.addEventListener('mouseover',() => {
  pcHeader.classList.add('header-on')
})
pcHeader.addEventListener('mouseout',() => {
  pcHeader.classList.remove('header-on')
})

const pcSearch = document.querySelector('.pc-search')
const pcSearchBox = document.querySelector('.pc-search-box')

pcSearch.addEventListener('click',() => {
  pcSearchBox.classList.toggle('clicked')
})

const topBtn = document.querySelector('#top-btn')
topBtn.addEventListener('click',() => {
  window.scrollTo(0,0)
})

