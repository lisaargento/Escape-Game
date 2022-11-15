// Récupérer l'élément form par id = "inscription"
let form_inscription = document.getElementById("inscription");

// Récupérer des champs du formulaire par leurs name
let champ_nom = form_inscription.elements["nom"];
let champ_prenom = form_inscription.elements["prenom"];
let champ_pseudo = form_inscription.elements["pseudo"];

// Ajouter l'évènement submit correspondant à la validation du formulaire
form_inscription.addEventListener('submit', validationformulaire);

// Fonction de validation du formulaire : tester la conformité des champs
function validationformulaire (event) {
    // le formulaire est-il OK?
    let form_OK = true;

    // Champ nom vide ?
    if(champ_nom.value == ''){
        form_OK = false;
        champ_nom.classList.add("erreur");
    }
    else{
        champ_nom.classList.remove("erreur");
    }

    // Champ prenom vide ?
    if(champ_prenom.value == ''){
        form_OK = false;
        champ_prenom.classList.add("erreur");
    }
    else{
        champ_prenom.classList.remove("erreur");
    }

    // Champ pseudo vide ?
    if(champ_pseudo.value == ''){
        form_OK = false;
        champ_pseudo.classList.add("erreur");
    }
    else{
        champ_pseudo.classList.remove("erreur");
    }

    // Si form_OK est faux, on empeche l'envoi du formulaire
    if(!form_OK){
        event.preventDefault();
        alert("Au moins l'un des 3 champs n'est pas bien renseigné ...")
    }

}




