const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

// function darkMode(){
//   document.body.style.background="--clr-accent2"; 
//   document.querySelectorAll('h1').forEach(e=>e.style.color="white");
//   document.querySelectorAll('p').forEach(e=>e.style.color="white");
//  } 

 // function lightMode(){
 //   document.body.style.background="--clr-accent"; 
 //   document.querySelectorAll('h1').forEach(e=>e.style.color="black");
 //   document.querySelectorAll('p').forEach(e=>e.style.color="black");
 //  }