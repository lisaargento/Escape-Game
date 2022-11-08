let form_inscription = document.getElementById("inscription");

let champ_nom = form_inscription.elements["nom"];
let champ_prenom = form_inscription.elements["prenom"];
let champ_pseudo = form_inscription.elements["pseudo"];



function valider (event) {  // code a exécuter lorsque le formulaire sera validé
    // le formulaire est-il OK?
    let form_OK = true;

    //vérification présence nom
    if(champ_prenom==""){
        form_OK = false;
        champ_nom.classList.add("erreur");
        console.log("oui");
    }else{champ_nom.classList.remove("erreur");}

    //vérification présence prénom
    if(champ_nom==""){
        form_OK = false;
        champ_nom.classList.add("erreur");
    }else{champ_nom.classList.remove("erreur");}

    //vérification présence prénom
    if(champ_pseudo==""){
        form_OK = false;
        champ_pseudo.classList.add("erreur");
    }else{champ_nom.classList.remove("erreur");}

    // Au final, on empeche l'envoi du formulaire si form_OK est faux
    if(!form_OK){
        event.preventDefault();
    }  
}
//ajoute l’événement
form_inscription.addEventListener('submit', valider);

