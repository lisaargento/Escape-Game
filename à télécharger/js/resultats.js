// Permet de récupérer les informations des 10 meilleurs joueurs
fetch('../php/resultats.php')
.then(result => result.json())
.then(infoJson => {
    console.log(infoJson);
    HallOfFame(infoJson);
})


// Affichage du HallOfFame
function HallOfFame(infoJson) {
    for (let i = 0; i < 5; i++) {
        var pseudo = infoJson[i]['pseudo'];
        var score = infoJson[i]['score'];
        var temps = infoJson[i]['temps'];
        console.log(pseudo);
        var tableau = document.getElementById('p'+i);
        tableau.innerHTML = '<td>'+i+'</td><td>'+pseudo+'</td><td>'+score+'</td><td>'+temps+'</td>';
    }

}
