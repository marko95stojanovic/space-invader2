// const body = document.getElementById('body');
// const grille = document.getElementById('grille');
// const button = document.getElementById('button');
// const case1 = document.getElementById('case');
// const alien = document.getElementsByClassName('alien');
// const enemies = [1,2,3,4,5,6,7,8,9,10,11,12,21,22,23,24,25,26,27,28,29,30,31,32,41,42,43,44,45,46,47,48,49,50,51,52]
// let cellCount = 0;
// // let soucoupe= doucment.getElementById('case-228');

// button.onclick = function createVaisseaux() {
//     for (let i = 0; i < 240; i++) {
//         let vaisseaux;
//         vaisseaux = document.createElement('div');
//         vaisseaux.setAttribute('id', 'case-' + i);
//         vaisseaux.style.border = 'solid red 1px';

        
//         enemies.forEach(position=>{
//             if(position==i){
//                 vaisseaux.className = 'alien';
//             }
//         })
//         grille.appendChild(vaisseaux);
//     }
//     document.getElementById('case-229').className = 'soucoupe'

// };






// // si la case est 11 21 31 ... alors c'est le coter gauche et si la case est 20 40 50... alors c'est droite 
// // mettre une classe a la div Pour générer le tableau de div si on continue le mouvement naturel de la chose il reviens a la ligne alors que nous on veux qu’il descende donc +1 +1 +1 +20 -1 -1 -1 0 +20 +1 +1 donc mettre un attribut a la div data-right = true donc tu fait +1 et dire que le comportement est different il faut qu’on dise que tout la colonne data - left = true  alors on fait +20 


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
var vitesseLaserFacile = 500
var vitesseLaserMoyen = 1000
var vitesseLaserDifficile = 1500
var vitesseLaser

function createVaisseaux(difficulter) {
    if (isPlaying) return;
    isPlaying = true;
    if (difficulter == 'facile') vitesseLaser = vitesseLaserFacile
    if (difficulter == 'moyen') vitesseLaser = vitesseLaserMoyen
    if (difficulter == 'difficile') vitesseLaser = vitesseLaserDifficile

    for (let i = 0; i < 240; i++) {
        let vaisseaux = document.createElement('div');
        vaisseaux.setAttribute('id', 'case-' + i);
        vaisseaux.style.border = 'solid red 1px';
        grille.appendChild(vaisseaux);
    }
    document.getElementById('case-229').className = 'soucoupe'

    const vaisseaux = document.querySelectorAll("#grille div");
    ennemy.forEach(ennemy => {
        vaisseaux[ennemy].classList.add('alien');
    });

    ennemyId = setInterval(ennemyMoove, 300);
        
        function ennemyMoove() {

            const debut_ligne = ennemy[0] % 20 == 0;
            const fin_ligne = ennemy[ennemy.length - 1] % 20 == 19;
            console.log(ennemy);
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

if (direction == ' '){
    var positionLaser = (Number(soucoupeId[1])+haut);
    document.getElementById("case-"+positionLaser).classList.add('laser');
   var interval = setInterval(moveLaser,vitesseLaser)

    function moveLaser(){
        console.log('ok')
        var laser=  document.querySelectorAll('.laser');
        console.log(laser)
        laser.forEach(laser=>{  laser.classList.remove('laser')
        var id = laser.id.split('-');
        var laserNextPosition = id[1]-20;
        document.getElementById('case-'+laserNextPosition).classList.add('laser');
        if (laserNextPosition < 20)clearInterval(interval)})
      
   }
}

}



// if (isPlaying){
window.addEventListener("keyup", function (event) {
   console.log(event);

      
        moveVaisseaux(event.key);
       
  

}, true);
// }