# π  HOMEDECO SITE
## νλ°μ½ μ¬μ΄νΈμλλ€.
## νλ°μ½ μΈνλ¦¬μ΄ μν μΌνλͺ° μ¬μ΄νΈμλλ€.
[λ°λͺ¨μ¬μ΄νΈλ‘ μ΄λ](https://decosite.netlify.app/index.html)
# π νμ΄μ§κ΅¬μ±
νμ΄μ§λ μ΄ 5νμ΄μ§
- [main νμ΄μ§](https://decosite.netlify.app/index.html)
- [best product νμ΄μ§](https://decosite.netlify.app/components/product.html)
- [product detail νμ΄μ§](https://decosite.netlify.app/components/detail-product.html)
- [sign in νμ΄μ§](https://decosite.netlify.app/components/login.html)
- [join in νμ΄μ§](https://decosite.netlify.app/components/signin.html)

λ‘ κ΅¬μ±λμμ΅λλ€.
# π Color
νμ΄μ§μ μλΈμ»¬λ¬λ 'μΈνλ¦¬μ΄'λ₯Ό λ μ¬λμλ λλ¬΄κ° κ°μ₯ λ¨Όμ  λ μ¬λμ΅λλ€ λ°λΌμ λλ¬΄μ λλμ μ£Όλ μμΌλ‘ μ μ νμ΅λλ€. (β» μ£Όκ΄μ μΈ μκ°μλλ€.)
```scss
$main-color: rgb(95, 0, 0);
```
# π· Images
β» μ΄λ―Έμ§λ€μ pinterest, pixabayλ₯Ό μ°Έκ³ νμμμ μλ €λλ¦½λλ€.  
[pinterest μ°Έκ³ ](https://www.pinterest.co.kr/)  
[pixabay μ°Έκ³ ](https://pixabay.com/ko/)
# π Swiper Js
λͺ¨λ  μ¬λΌμ΄λ μμλ Swiper jsλ₯Ό μ¬μ© νμμ΅λλ€.  
```
$ npm install swiper
```

```javascript
import Swiper from '../node_modules/swiper/swiper-bundle';

new Swiper(".main-visual .swiper", {
  grabCursor: true,
  // loop: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


new Swiper('.swiper-section .swiper', {
  breakpoints: {
    769: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1080: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  },
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    clickable: true,
  },
  slidesPerView: 2,
  spaceBetween: 20,
  centeredSlides: true,
});

new Swiper(".notice-section .swiper", {
  direction: "vertical",
  loop: true,
  simulateTouch: false,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    clickable: true,
  },
});

```
# β­ νλΉμ½ Favicon
νλ°μ½μ μκΈμλ₯Ό λ΄ Hλ‘ Psλ₯Ό μ΄μ©ν΄ νλΉμ½μ μ μνμ΅λλ€. 
- `favicon.png` 32x32  

![favicon](./favicon.png)

# π° Font
ν°νΈλ Google Fontsμ cdnλ°©μμ μ¬μ©νμ΅λλ€.
- λͺ¨λ νμ΄μ§μ Noto Sans Krν°νΈκ° μ¬μ© λμμ΅λλ€.  
```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
```
- λͺ¨λ  ν°νΈ μ¬μ΄μ¦λ pxλ¨μμλλ€.
# π Icon
Google Icons cdnλ°©μμ μ¬μ©νμμ΅λλ€.
```html
<link href="https://fonts.googleapis.com/css2?family=Material+Icons+Outlined" rel="stylesheet">
```
# π’ Bootstrap
```
$ npm install bootstrap
```
```html
<link rel="stylesheet" href="./css/bootstrap.scss">
```
```html
<script src="./js/bootstrap.js"></script>
```
λΆνΈμ€νΈλ© js,css νμΌμ λ§λ€μ΄ λ°λ‘ κ΄λ¦¬νμ΅λλ€.  
λΆνΈμ€νΈλ©μΌλ‘ μμ½λμΈκ³Ό λͺ¨λ¬μ°½μ κ΅¬ννμμ΅λλ€.
# πΉ Media Query
λͺ¨λ  νμ΄μ§κ° λ°μνμΌλ‘ μ μλμμ΅λλ€.  
break pointλ₯Ό 769px,1080pxλ‘ μ‘μμ΅λλ€.
# π JavaScript
μ¬λΌμ΄λ μμ(Swiper js)λ₯Ό μ μΈν λλ¨Έμ§λ
λ°λλΌ μλ°μ€ν¬λ¦½νΈλ‘ μ μλμμ΅λλ€.
