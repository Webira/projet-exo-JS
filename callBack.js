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

}
let nouveauAmi = {
    nom: "Benhaman",
    prenom: "Souad",
    email: "souad@mail",
}
ajouterAmis(nouveauAmi, afficherListAmis());


