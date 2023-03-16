const body = document.getElementById('body');
const grille = document.getElementById('grille');
const button = document.getElementById('button');
const case1 = document.getElementById('case');
const alien = document.getElementsByClassName('alien');
const ennemy = [1,2,3,4,5,6,7,8,9,10,11,12,21,22,23,24,25,26,27,28,29,30,31,32,41,42,43,44,45,46,47,48,49,50,51,52]
let cellCount = 0;
let direction = 1;
let getDown = false;
let ennemyId;
let isPlaying = false;
var vitesseLaserFacile = 250
var vitesseLaserMoyen = 1000
var vitesseLaserDifficile = 1600
var vitesseLaser



// creation de la grille + ses niveaux de difficulter en fonction du laser
// + le niveau est dur + le laser est lent
function createVaisseaux(difficulter) {
    if (isPlaying) return;
    isPlaying = true;
    if (difficulter == 'facile') vitesseLaser = vitesseLaserFacile
    if (difficulter == 'moyen') vitesseLaser = vitesseLaserMoyen
    if (difficulter == 'difficile') vitesseLaser = vitesseLaserDifficile

    for (let i = 0; i < 240; i++) {
        let vaisseaux = document.createElement('div');
        vaisseaux.setAttribute('id', 'case-' + i);
        vaisseaux.style.border = 'solid red  1px';
        grille.appendChild(vaisseaux);
    }
    // creation du vaisseaux a sa case initial au lancement du jeu 
    document.getElementById('case-229').className = 'soucoupe'

    const vaisseaux = document.querySelectorAll("#grille div");
    ennemy.forEach(ennemy => {
        vaisseaux[ennemy].classList.add('alien');
    });


    // ce qui fait bouger les alien 
    ennemyId = setInterval(ennemyMoove, 300);
        
        function ennemyMoove() {

            const debut_ligne = ennemy[0] % 20 == 0;
            const fin_ligne = ennemy[ennemy.length - 1] % 20 == 19;
            // console.log(ennemy);
            ennemy.forEach(ennemy => {
                vaisseaux[ennemy].classList.remove('alien');
            });
        
            if(debut_ligne && direction == -1) {
                direction = 1;
                getDown = true;
            } else if (fin_ligne && direction == 1) {
                direction = -1;
                getDown = true;
            }
        
            for(let i = 0; i < ennemy.length; i++) {
                ennemy[i] += getDown ? 20 : direction;
            }
        
            getDown = false;
        
            ennemy.forEach((ennemy) => {
                    vaisseaux[ennemy].classList.add('alien');
                
            });
        


            // -----POUR LE SON -------
            // if (ennemy[ennemy.length -1] > board.length - 16) {
            //     // son de l'explosion si le vaisseau est touché
            //     if (active_sound_effects) {
            //         var death = new Audio('assets/sound/explosion.mp3');
            //         death.volume = 0.5;
            //         death.play()
            //     }
            //     location.href="perdre.html";
            //     clearInterval(ennemyId);
            // }
        
            // if (board[pos_ship].classList.contains('alien')) {
            //     // son de l'explosion si le vaisseau est touché
            //     if (active_sound_effects) {
            //         var death = new Audio('assets/sound/explosion.mp3');
            //         death.volume = 0.5;
            //         death.play()
            //     }
            //     location.href="perdre.html";
            //     board[pos_ship].classList.add("boum");
            //     clearInterval(ennemyId);
        
            // }
        
            // if (touch.length == ennemy.length) {
            //     location.href="gagner.html";
            //     clearInterval(ennemyId);
            // }
        }
}





            // -----POUR BOUGER LE VAISSEAU--------
// pour bouger le vaisseau avec les fleches et dans quel direction il va 
// on fait sa pour la fleche du haut du bas gauche et droite
// on le fait en recuperant l'id de la soucoupe + sa position de base 
// on split le tiret pour lui indiquer ce que cst pas un chiffre 
function moveVaisseaux (direction) {
    // console.log(direction);
    var soucoupe = document.getElementsByClassName('soucoupe');
    var soucoupeId = soucoupe[0].id.split("-");
    var haut = -20
    var bas = 20
    var left = -1
    var right = 1
    // vaisseaux[ennemy].classList.remove('soucoupe');
if (direction == 'ArrowDown'){
    var position = (Number(soucoupeId[1])+bas);
    if (position >239)return
    soucoupe[0].classList.remove('soucoupe')
    document.getElementById("case-"+position).classList.add('soucoupe');

}

if (direction == 'ArrowUp'){
    var position = (Number(soucoupeId[1])+haut);
    if (position <180)return
    soucoupe[0].classList.remove('soucoupe')
    document.getElementById("case-"+position).classList.add('soucoupe');


}
if (direction == 'ArrowLeft'){
    var position = (Number(soucoupeId[1])+left);
    if (soucoupeId[1] == 180 ||soucoupeId[1] == 200 || soucoupeId[1] ==220)return
    soucoupe[0].classList.remove('soucoupe');
    document.getElementById("case-"+position).classList.add('soucoupe');


}

if (direction == 'ArrowRight'){
    var position = (Number(soucoupeId[1])+right);
    if (soucoupeId[1] == 199 ||soucoupeId[1] == 219 || soucoupeId[1] ==239)return

    soucoupe[0].classList.remove('soucoupe')
    document.getElementById("case-"+position).classList.add('soucoupe');


}


// ------TOUCHE POUR LANCER LE LASER---
// condition pour lancer le laser avec la barre d'espace donc le vide entre ' ' 
if (direction == ' '){
    var positionLaser = (Number(soucoupeId[1])+haut);
    document.getElementById("case-"+positionLaser).classList.add('laser');
   var interval = setInterval(moveLaser,vitesseLaser)

   

//  -----BOUGER LE LASER ET SA DIRECTION -----
// sert a bouger le laser on recupere l'id de la case + on ajoute la class laser a la prochaine position qui 
// est a -20 car on veuc qu'elle monte qu'elle fasse une ligne droite jusqu'en haut
// puis on clear l'interval qui est inferieur a 20 pour que le laser disparait quand il monte 
    function moveLaser(){
        const allDiv = document.querySelectorAll('#grille div');
        var laser=  document.querySelectorAll('.laser');
        // console.log(laser)
        laser.forEach(laser=>{  laser.classList.remove('laser')
        var id = laser.id.split('-');
        var laserNextPosition = id[1]-20;
        document.getElementById('case-'+laserNextPosition).classList.add('laser');

        if (laserNextPosition > 19){
            console.log(laserNextPosition)
        
        if (allDiv[laserNextPosition - 20].className == 'alien'){


            removeAlien(laserNextPosition);
        }

    }
        if (laserNextPosition < 20)clearInterval(interval)})
        
       

        
        const aliens = document.querySelectorAll('.alien.laser');
            aliens.forEach(alien => {
            alien.classList.add('deleteme');
});
        const todelete  = document.querySelectorAll('div.deleteme');

                allDiv.forEach((e)=>{
                    if(e == todelete){
                        e.classList.remove('alien','laser')
                    }
                })
      



      
   }
}

}


function removeAlien(position){
    ennemy.splice(ennemy.indexOf(position),1) //retirer l'alien du tableau
    const alien = document.querySelectorAll("#grille div")[position];
    console.log(alien)

    alien.classList.remove('alien');
    clearInterval(interval)

}











// if (isPlaying){
    // ajoute un événement à l'objet window pour détecter les événements de relâchement de touche avec "keyup" 
    //  du coup la fonction se lance quand le joueur relache une touche 
window.addEventListener("keyup", function (event) {
//    console.log(event);

      
        moveVaisseaux(event.key);
       
  

}, true);
// }