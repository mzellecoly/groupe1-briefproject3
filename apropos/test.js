
        // Sélectionnez l'élément bouton par son ID
// const contenue1= document.getElementById("Notre Mission");
const contenu2 = document.getElementById("Notre Vision");
const contenue = document.getElementById("NotreValeur");
// Sélectionnez l'élément dont le texte doit être changé par son ID
var texteChange = document.getElementById("para");


// Ajoutez un écouteur d'événements de clic sur l ' element id 
contenu2.addEventListener("click", function() {
    // Changez le texte de l'élément lorsque le bouton est cliqué
    texteChange.textContent = "Nous disposons de certifications de conformité essentielles, notamment SSAE 18 Type II et PCI, ce qui nous permet d'adhérer aux réglementations les plus strictes du secteur. Nous formons notre personnel aux meilleures pratiques HIPAA pour le compte de nos clients du secteur de la santé. Nous intégrons et maintenons des outils avancés de surveillance, de lutte contre les logiciels malveillants et d'authentification.";
});

contenue.addEventListener("click", function(NotreValeur) {
    // Changez le texte de l'élément lorsque le bouton est cliqué
    texteChange.textContent = "Nous disposons de certifications de conformité essentielles, notamment SSAE 18 Type II et PCI, ce qui nous permet d'adhérer aux réglementations les plus strictes du secteur. Nous formons notre personnel aux meilleures pratiques HIPAA pour le compte de nos clients du secteur de la santé. Nous intégrons et maintenons des outils avancés de surveillance, de lutte contre les logiciels malveillants et d'authentification.";
});

// function changeContenue() {
//     const NotreMission  = document.getElementById ("NotreMission");
//     NotreMission.innerHTML = "noveau contenue ";
// }


