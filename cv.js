// BOUTONS COULEURS
// Bouton Blanc
function clicBlanc() {
    var divsElts = document.getElementsByTagName("body");
    for (var i = 0; i < divsElts.length; i++) {
        divsElts[i].style.backgroundColor = "white";
    }
}

var boutonEltBlanc = document.getElementById("boutonBlanc");
boutonEltBlanc.addEventListener("click", clicBlanc);


// Bouton Rouge
function clicRouge() {
    var divsElts = document.getElementsByTagName("body");
    for (var i = 0; i < divsElts.length; i++) {
        divsElts[i].style.backgroundColor = "#C47E7E";
    }
}

var boutonEltRouge = document.getElementById("boutonRouge");
boutonEltRouge.addEventListener("click", clicRouge);


// Bouton Bleu
function clicBleu() {
    var divsElts = document.getElementsByTagName("body");
    for (var i = 0; i < divsElts.length; i++) {
        divsElts[i].style.backgroundColor = "#7E98C4";
    }
}

var boutonEltBleu = document.getElementById("boutonBleu");
boutonEltBleu.addEventListener("click", clicBleu);


// Bouton Vert
function clicVert() {
    var divsElts = document.getElementsByTagName("body");
    for (var i = 0; i < divsElts.length; i++) {
        divsElts[i].style.backgroundColor = "#7EC482";
    }
}

var boutonEltVert = document.getElementById("boutonVert");
boutonEltVert.addEventListener("click", clicVert);


// Bouton Orange
function clicOrange() {
    var divsElts = document.getElementsByTagName("body");
    for (var i = 0; i < divsElts.length; i++) {
        divsElts[i].style.backgroundColor = "#DAE85D";
    }
}

var boutonEltOrange = document.getElementById("boutonOrange");
boutonEltOrange.addEventListener("click", clicOrange);


// Bouton Noir et Blanc caché
function passageFondNoir() {
    var divsElts = document.getElementsByTagName("body");
        for (var i = 0; i < divsElts.length; i++) {
            divsElts[i].style.color = "white";
            divsElts[i].style.backgroundColor = "black";
        }
}

var boutonElt = document.getElementById("photo1");
boutonElt.addEventListener("mousedown", passageFondNoir);


function retourFondBlanc() {
    var divsElts = document.getElementsByTagName("body");
    for (var i = 0; i < divsElts.length; i++) {
        divsElts[i].style.color = "black";
        divsElts[i].style.backgroundColor = "white";
    }
}

boutonElt.addEventListener("mouseup", retourFondBlanc);



// CONTENU DYNAMIQUE
// Survol remplacant le titre

var titre2 = document.getElementById("titre2");
var titre22 = "Responsable Emploi Formation SIRH, GPEC, Gestion de carrières...   ";
var premierIndice = 0;
var dernierIndice = 33;
var partieTitre22 = titre22.substring(premierIndice, dernierIndice);

function titreCache2 () {
   function defilementTitre() {
    if (dernierIndice < 67) {
        premierIndice = premierIndice + 1;
        dernierIndice = dernierIndice + 1;
        partieTitre22 = titre22.substring(premierIndice, dernierIndice);
        titre2.textContent = partieTitre22;
    } else {
        // Annule l'exécution répétée
        clearInterval(intervalId);
        // Modifie le titre de la page
        titre2.textContent = " GPEC, Gestion de carrières...";
        // Modification du titre au bout de 2 secondes
        setTimeout(function () {
            titre2.textContent = "Responsable Emploi Formation SIRH";
        }, 2000);
    }
}
premierIndice = 0;
dernierIndice = 33;
    
// Appelle la fonction diminuerCompteur toutes les secondes (1000 millisecondes)
var intervalId = setInterval(defilementTitre, 250); 
}

var boutonEltTitre2 = document.getElementById("titre2");
boutonEltTitre2.addEventListener("mouseover", titreCache2);



