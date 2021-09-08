console.log("bonjour");

const listAmis =[
    {nom:"Mortier", prenom:"Pierre",email:"peirre@mail" }
];

function afficherListAmis() {
    setTimeout(() => {
        let affichage = "";
        listAmis.forEach((amis) => {
            affichage += ` <li> ${amis.prenom }</li>`;
        });
        document.getElementById("affichage").innerHTML = affichage;
    }, 1000);

    }
    afficherListAmis();
function ajouterAmis(amis) {

return new Promise((resolu, rejet) =>{
    setTimeout(() => {
        listAmis.push(amis);

        let erreur = true;
        if (!erreur) {
            resolu();
        } else {
          rejet("Erreur dans votre requete");
        }
        }, 2000);
    });
  
}

let nouveauAmi = {
    nom: "Benhaman",
    prenom: "Souad",
    email: "souad@mail",
}
ajouterAmis(nouveauAmis).then(afficherListAmise());
