# 🏠 HOMEDECO SITE
## 홈데코 사이트입니다.
## 홈데코 인테리어 소품 쇼핑몰 사이트입니다.
[데모사이트로 이동](https://decosite.netlify.app/index.html)
# 📃 페이지구성
페이지는 총 5페이지
- [main 페이지](https://decosite.netlify.app/index.html)
- [best product 페이지](https://decosite.netlify.app/components/product.html)
- [product detail 페이지](https://decosite.netlify.app/components/detail-product.html)
- [sign in 페이지](https://decosite.netlify.app/components/login.html)
- [join in 페이지](https://decosite.netlify.app/components/signin.html)

로 구성되었습니다.
# 🌈 Color
페이지의 서브컬러는 '인테리어'를 떠올랐을때 나무가 가장 먼저 떠올랐습니다 따라서 나무의 느낌을 주는 색으로 선정했습니다. (※ 주관적인 생각입니다.)
```scss
$main-color: rgb(95, 0, 0);
```
# 📷 Images
※ 이미지들은 pinterest, pixabay를 참고하였음을 알려드립니다.  
[pinterest 참고](https://www.pinterest.co.kr/)  
[pixabay 참고](https://pixabay.com/ko/)
# 🌞 Swiper Js
모든 슬라이드 요소는 Swiper js를 사용 하였습니다.  
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
# ⭐ 파비콘 Favicon
홈데코의 앞글자를 딴 H로 Ps를 이용해 파비콘을 제작했습니다. 
- `favicon.png` 32x32  

![favicon](./favicon.png)

# 🅰 Font
폰트는 Google Fonts의 cdn방식을 사용했습니다.
- 모든페이지에 Noto Sans Kr폰트가 사용 되었습니다.  
```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
```
- 모든 폰트 사이즈는 px단위입니다.
# 😁 Icon
Google Icons cdn방식을 사용하였습니다.
```html
<link href="https://fonts.googleapis.com/css2?family=Material+Icons+Outlined" rel="stylesheet">
```
# 👢 Bootstrap
```
$ npm install bootstrap
```
```html
<link rel="stylesheet" href="./css/bootstrap.scss">
```
```html
<script src="./js/bootstrap.js"></script>
```
부트스트랩 js,css 파일을 만들어 따로 관리했습니다.  
부트스트랩으로 아코디언과 모달창을 구현하였습니다.
# 🔹 Media Query
모든 페이지가 반응형으로 제작되었습니다.  
break point를 769px,1080px로 잡았습니다.
# 🍋 JavaScript
슬라이드 요소(Swiper js)를 제외한 나머지는
바닐라 자바스크립트로 제작되었습니다.
