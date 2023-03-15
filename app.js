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

    const vaisseaux = document.querySelectorAll("#grille div");
    ennemy.forEach(ennemy => {
        vaisseaux[ennemy].classList.add('alien');
        console.log(ennemy);
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