
let jeu = document.querySelector(`.jeu`)
let touteRangee = document.querySelectorAll(`.case-simple`)
let rangee = [`a`,`b`]


// PARTIR VERS LA DROITE
document.body.addEventListener(`keyup` , (event) => {
  if (event.keyCode === 39) {
    let divImg = document.querySelector(`.image-jojo`)
    let suivant; 

    if(divImg.nextElementSibling != null && divImg.nextElementSibling != undefined){
        suivant = divImg.nextElementSibling;
    }else{
        suivant = divImg;
    }

    if(divImg.getAttribute('id').substring(2) <= 11){
        suivant.classList.add(`image-jojo`)
        divImg.classList.remove(`image-jojo`)
    }
  }
})

// PARTIR VERS LA GAUCHE
document.body.addEventListener(`keyup`,(event) =>{
  if (event.keyCode === 37) {
    let divImg = document.querySelector(`.image-jojo`)
    let suivant;

    if(divImg.previousElementSibling != null && divImg.previousElementSibling != undefined){
        suivant = divImg.previousElementSibling;
    }else{
        suivant = divImg;
    }

    if(divImg.getAttribute('id').substring(2) >= 2 ){
        suivant.classList.add(`image-jojo`)
        divImg.classList.remove(`image-jojo`)
    }
  }
})

// PARTIR VERS LE BAS
/*  // dawiteu 
  On doit modifier un peu psq on doit prendre en compte ET 
  > la rangée (donc soit a, soit b, etc )
  > la position (pour le replacer au bon endroit )
  du coup une petite idée de split me passe par la tête... :> 

*/ 
document.body.addEventListener(`keyup`,(event) => {
  if (event.keyCode === 40) {
    let divImg = document.querySelector(`.image-jojo`)
              let divId = divImg.getAttribute(`id`).substring(0,1); 

    let divParams = divImg.getAttribute('id').split('-'); // 

    //console.log(divParams[0], divParams[1]);  // <-- le param 0 c'est le "a" et le 1 c'est la position (ex 1)

    let suivant;

    rangee.forEach(element => {
        if (element == divParams[0]) {
            let TabElementPos = rangee.indexOf(element); // place dans le tableau;
            let nouveauPos = TabElementPos+1; // puis tu fais 
            let nouveauObj = rangee[nouveauPos]; // ici on aura la rangee suivante (donc apres a c'est B) 
            
            // console.log(nouveauObj);
            let nouveauIDobjet = '#'+nouveauObj+"-"+divParams[1]; // ici construit le nom du div
              //console.log(nouveauIDobjet); 

            document.querySelector(nouveauIDobjet).classList.add('image-jojo'); 
            divImg.classList.remove('image-jojo');

        }
    });

  
  }
})

// PARTIR VERS LE HAUT
