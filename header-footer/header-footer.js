function afficher(){
       
  let menu= document.getElementById('MenuSec');
  let X_Bar = document.getElementById('X_Bar');
  let MenuBarx = document.getElementById("MenuBarx");
  let FooterContainer = document.getElementsByClassName('Footer_Container');
  let cach = document.getElementById('cach');
  // let cach1 = document.getElementById('cach1');
  menu.classList.add("menu-bar")
  for(let i=0; i<FooterContainer.length; i++){
    FooterContainer[i].classList.add("footer-bar");
  }
  cach.style.opacity=0;
  // cach1.style.opacity=0;    

}

function cacher(){
   let menu = document.getElementById('MenuSec');
   let X_Bar = document.getElementById('X_Bar');
   let MenuBarx = document.getElementById("MenuBarx");
   let FooterContainer = document.getElementsByClassName('Footer_Container');
   let cach = document.getElementById('cach');
   // let cach1 = document.getElementById('cach1');
   menu.remove('menu-bar');
   for(let i=0; i<FooterContainer.length; i++){
     FooterContainer[i].classList.remove('footer-bar');
     FooterContainer[i].classList.add("foo");
   }
   cach.style.opacity=1;
   // cach1.style.opacity=1;
   window.location.reload();
   console.log(FooterContainer);
}
// Fin hearder 


// Debut footer sweet alerts 
function inscription(){
validateEmail()
vider();
}

function validateEmail() {
    var email = document.getElementById("email").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
        // alert("Email valide !");
        Swal.fire({
        // position: 'center',
        icon: 'success',
        title: 'Success!',
        text: 'Merci pour votre Inscription a la Newsletter',
        showConfirmButton: false,
        timer: 1500,
        
      })
      console.log('email')
      // vider()
    
    } else {
        // alert("Email invalide. Veuillez entrer une adresse email valide.");
        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'le mail que vous avez saisi est incorrect',
        footer: '<a href="">Saisir un mail valide</a>'
      })
  
    }
}

function vider(){
  var mail = document.getElementById('email');
  mail.value = ""
  // console.log(mail)
}
// Fin footer sweet alerts


// Debut Barre de progression 
let calcScrollValue = () => {
  let scrollProgress = document.getElementById('progress');
  let scrolProgressValue = document.getElementById('progressValue');

  let pos = document.documentElement.scrollTop;
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight)
  if (pos > 10) {
      scrollProgress.style.display = 'grid';
  } else {
      scrollProgress.style.display = 'none';
  }

  scrollProgress.addEventListener('click', () => {
      document.documentElement.scrollTop = 0;
  })

  scrollProgress.style.background = `conic-gradient( #E94D1A ${scrollValue}%, white ${scrollValue}%)`;
}

// Ajouter un seul gestionnaire d'événements
window.addEventListener('scroll', () => {
  // navBarFixed();
  calcScrollValue();
});

// Exécutez les fonctions une fois au chargement de la page
window.addEventListener('load', () => {
  // navBarFixed();
  calcScrollValue();
});

//menu
let menuTogler = document.querySelector('.menuTogler');
let menuToglerIcon = document.querySelector('.menuTogler i');
let dropDownMenu = document.querySelector('.dropDownMenu');

menuTogler.onclick = function () {
  dropDownMenu.classList.toggle('open');
  let isOpen = dropDownMenu.classList.contains('open');

  menuToglerIcon.classList = isOpen ? 'bi bi-x ' : 'bi bi-list ';
}

// Fin Barre de progression 