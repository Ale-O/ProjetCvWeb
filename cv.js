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



// BOUTON PHOTO
// Photo qui bouge et qui change de couleur
function photoBouge() {
    var divsElts = document.getElementsByClassName("photo");
    for (var i = 0; i < divsElts.length; i++) {
        divsElts[i].style.boxShadow = "1px 1px 1px black";
        divsElts[i].style.marginLeft = "1px";
        divsElts[i].style.marginTop = "1px";
    }
}

var boutonElt = document.getElementById("photo1");
boutonElt.addEventListener("mousedown", photoBouge);


function passagePhotoNegatif() {
    var nouvellePhoto = document.createElement("img"); // Création d'un élément img
    nouvellePhoto.src = "image/Photo-N.png"; // Définition de sa source
    nouvellePhoto.alt = "Photo"; // Définition de son alt
    nouvellePhoto.class = "photo"; // Définition de sa class
    nouvellePhoto.id = "photoNegatif"; // Définition de son id
    nouvellePhoto.title = "Ma photo"; // Définition de son titre
    document.getElementById("photo1").replaceChild(nouvellePhoto, document.getElementById("photoNormal"));
    var divsElts = document.getElementsByTagName("body");
        for (var i = 0; i < divsElts.length; i++) {
            divsElts[i].style.color = "white";
            divsElts[i].style.backgroundColor = "black";
        }
}

boutonElt.addEventListener("mousedown", passagePhotoNegatif);


function photoRevient() {
    var divsElts = document.getElementsByClassName("photo");
    for (var i = 0; i < divsElts.length; i++) {
        divsElts[i].style.boxShadow = "6px 6px 6px black";
        divsElts[i].style.marginLeft = "auto";
        divsElts[i].style.marginTop = "auto";
    }
}

boutonElt.addEventListener("mouseup", photoRevient);


function retourPhotoNormal() {
    var anciennePhoto = document.createElement("img"); // Création d'un élément img
    anciennePhoto.src = "image/Photo.jpg"; // Définition de sa source
    anciennePhoto.alt = "Photo"; // Définition de son alt
    anciennePhoto.class = "photo"; // Définition de sa class
    anciennePhoto.id = "photoNormal"; // Définition de son id
    anciennePhoto.title = "Ma photo"; // Définition de son titre
    document.getElementById("photo1").replaceChild(anciennePhoto, document.getElementById("photoNegatif"));
    var divsElts = document.getElementsByTagName("body");
    for (var i = 0; i < divsElts.length; i++) {
        divsElts[i].style.color = "black";
        divsElts[i].style.backgroundColor = "white";
    }
}

boutonElt.addEventListener("mouseup", retourPhotoNormal);



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





