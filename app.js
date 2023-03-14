const body = document.getElementById('body');
const grille = document.getElementById('grille');
const button = document.getElementById('button');
const case1 = document.getElementById('case');
const alien = document.getElementsByClassName('alien');
const enemies = [1,2,3,4,5,6,7,8,9,10,11,12,21,22,23,24,25,26,27,28,29,30,31,32,41,42,43,44,45,46,47,48,49,50,51,52]
let cellCount = 0;
// let soucoupe= doucment.getElementById('case-228');

button.onclick = function createVaisseaux() {
    for (let i = 0; i < 240; i++) {
        let vaisseaux;
        vaisseaux = document.createElement('div');
        vaisseaux.setAttribute('id', 'case-' + i);
        vaisseaux.style.border = 'solid  1px';

        
        enemies.forEach(position=>{
            if(position==i){
                vaisseaux.className = 'alien';
            }
        })
        grille.appendChild(vaisseaux);
    }
    document.getElementById('case-229').className = 'soucoupe'

    

   


   
   
    // let x = 230; // position de base du tireur
    // document.addEventListener('keyup', function (e) {
    //     let tireurElement = document.querySelector('div.tireur');
    //     if (e.key === 'ArrowLeft'|| e.keyCode == 37) {
    //         // bouger le tireur vers la gauche
    //         if (x != 221 && x != 201 && x != 181) {
    //             position = x;
    //             tireurElement.classList.remove('tireur');
    //             x--;
    //             document.getElementById('case-' + x).classList.add('tireur');
    //             position = x;
    //             console.log(position)
    //         }
    //     }
    //     if (e.key === 'ArrowRight' || e.keyCode == 39) {
    //         // bouger le tireur vers la droite
    //         if (x != 240 && x != 220 && x != 200) {
    //             position = x;
    //             tireurElement.classList.remove('tireur');
    //             x++;
    //             document.getElementById('case-' + x).classList.add('tireur');
    //             position = x;
    //             console.log(position)
    //         }
    //     }
    // if (e.keyCode == 38) {
    //         // pour bouger le tireur vers le haut
    //         if (x > 200) {
    //             position = x;
    //             tireurElement.classList.remove('tireur');
    //             x -= 20;
    //             document.getElementById('case-' + x).classList.add('tireur');
    //             position = x;
    //             console.log(position)
    //         }
    //     }
    //     if (e.keyCode == 40) {
    //         // pour bouger le tireur vers le bas
    //         if (x < 221) {
    //             position = x;
    //             tireurElement.classList.remove('tireur');
    //             x += 20;
    //             document.getElementById('case-' + x).classList.add('tireur');
    //             position = x;
    //             console.log(position)
    //         }
    //     }
    // });
    
    
    // // fonction du laser pour le piou piou
    // function laser() {
    //     let i = x - 20;
    //     let y = i - 40;
    //     let bool = true;
    //     if (bool === true) {
    //         bool = false;
    //         let intervalId = setInterval(function () {
    //             if (i > -30 && y > -40) {
    //                 if (document.getElementById('case-' + i).classList) {
    //                     document.getElementById('case-' + i).classList.add('laser');
    //                 }
    //                 i -= 20;
    //                 if (document.getElementById('case-' + y).classList) {
    //                     document.getElementById('case-' + y).classList.remove('laser');
    //                 }
    //                 y -= 20;
    //                 console.log(i, y)
    //                 if (y == -20) {
    //                     document.getElementById('case-' + y).classList.remove('laser');
    //                 }
    //             } else {
    //                 clearInterval(intervalId);
    //             }
    //         }, 50);
    //     }
    // }
    
    // document.body.onkeyup = function (e) {
    //     if (e.key == " " && e.code == "Space" &&  e.keyCode == 32) {
    //         laser();
    //         bool = false;
    //     }
    // }
    





};



































// si la case est 11 21 31 ... alors c'est le coter gauche et si la case est 20 40 50... alors c'est droite 
// mettre une classe a la div Pour générer le tableau de div si on continue le mouvement naturel de la chose il reviens a la ligne alors que nous on veux qu’il descende donc +1 +1 +1 +20 -1 -1 -1 0 +20 +1 +1 donc mettre un attribut a la div data-right = true donc tu fait +1 et dire que le comportement est different il faut qu’on dise que tout la colonne data - left = true  alors on fait +20 


