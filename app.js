const body = document.getElementById('body');
const grille = document.getElementById('grille');
const button = document.getElementById('button');
const case1= document.getElementById('case')

button.onclick = function createVaisseaux() {
    for (let i = 0; i < 240; i++) {
        let vaisseaux;
        vaisseaux = document.createElement('div');
        vaisseaux.setAttribute('id', 'case-' + i);
        vaisseaux.style.border = 'solid red 1px'
        grille.appendChild(vaisseaux);
    }

    
};



// si la case est 11 21 31 ... alors c'est le coter gauche et si la case est 20 40 50... alors c'est droite 
// mettre une classe a la div Pour générer le tableau de div si on continue le mouvement naturel de la chose il reviens a la ligne alors que nous on veux qu’il descende donc +1 +1 +1 +20 -1 -1 -1 0 +20 +1 +1 donc mettre un attribut a la div data-right = true donc tu fait +1 et dire que le comportement est different il faut qu’on dise que tout la colonne data - left = true  alors on fait +20 