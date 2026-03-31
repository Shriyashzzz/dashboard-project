const search = document.querySelector('.search-container');
const aside = document.querySelector('.aside-1');
const headerbottom = document.querySelector('.header-bottom')
search.addEventListener('mouseenter', () => {
  if (window.innerWidth <= 600) {
    aside.style.display = 'none';
    headertopleft.style.setProperty("grid-column", "1 / span 4");
    headerbottom.style.setProperty("grid-column", "1 / span 4");
  
  }

});

const headertopleft = document.querySelector(".header-top");
search.addEventListener('mouseleave', () => {
    aside.style.display = '';
    headertopleft.style.setProperty("grid-column", "2 / span 4");
    headerbottom.style.setProperty("grid-column", "2 / span 4")
});


