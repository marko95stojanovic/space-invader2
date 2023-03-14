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

button.onclick = function createVaisseaux() {
    for (let i = 0; i < 240; i++) {
        let vaisseaux = document.createElement('div');
        vaisseaux.setAttribute('id', 'case-' + i);
        vaisseaux.style.border = 'solid 1px';
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
        
            if (ennemy[ennemy.length -1] > board.length - 16) {
                // son de l'explosion si le vaisseau est touché
                if (active_sound_effects) {
                    var death = new Audio('assets/sound/explosion.mp3');
                    death.volume = 0.5;
                    death.play()
                }
                location.href="perdre.html";
                clearInterval(ennemyId);
            }
        
            if (board[pos_ship].classList.contains('alien')) {
                // son de l'explosion si le vaisseau est touché
                if (active_sound_effects) {
                    var death = new Audio('assets/sound/explosion.mp3');
                    death.volume = 0.5;
                    death.play()
                }
                location.href="perdre.html";
                board[pos_ship].classList.add("boum");
                clearInterval(ennemyId);
        
            }
        
            if (touch.length == ennemy.length) {
                location.href="gagner.html";
                clearInterval(ennemyId);
            }
        }
    
    
    

    
        
    
}
