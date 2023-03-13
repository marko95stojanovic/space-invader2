const body = document.getElementById('body');
const grille = document.getElementById('grille');
const button = document.getElementById('button');
const case1 = document.getElementById('case');
const alien = document.getElementsByClassName('alien');
const enemies = [1,2,3,4,5,6,7,8,9,10,11,12,21,22,23,24,25,26,27,28,29,30,31,32,41,42,43,44,45,46,47,48,49,50,51,52]
let cellCount = 0;


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


};

// si la case est 11 21 31 ... alors c'est le coter gauche et si la case est 20 40 50... alors c'est droite 
// mettre une classe a la div Pour générer le tableau de div si on continue le mouvement naturel de la chose il reviens a la ligne alors que nous on veux qu’il descende donc +1 +1 +1 +20 -1 -1 -1 0 +20 +1 +1 donc mettre un attribut a la div data-right = true donc tu fait +1 et dire que le comportement est different il faut qu’on dise que tout la colonne data - left = true  alors on fait +20 


