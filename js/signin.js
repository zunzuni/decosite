// const allCheck = document.querySelector('.allcheck')
// const check = document.querySelectorAll('.check')
// console.log(check)

// allCheck.addEventListener('click', () => {
//   if (allCheck.checked === true) {
//     check.forEach(element => {
//       element.checked
//       console.log(element.checked)
//     });
//   } else {
//       check.forEach(element => {
//         element.checked
//         console.log(!element.checked)
//       });
//   }
// })


// document.querySelector(".allcheck").addEventListener("change", function (e) {
//     e.preventDefault();
//     var list = document.querySelectorAll("check");
//     for (var i = 0; i < list.length; i++) {
//         list[i].checked = this.checked;
//     }
// });


document.querySelector('.joinin-button').addEventListener('click',() => {
  alert('성공적으로 회원가입이 완료되었습니다.')
})