// Sélectionnez le formulaire
// const commentForm = document.querySelector('form');

function ajouter() {
    // e.preventDefault();

    // Recuperation des valeurs des champs input 
    // Le pseudo 
    const pseudo = document.getElementById('pseudo').value;
    const message = document.getElementById('message').value;

    // Creer l'objet à stocker dans le local storage 
    const commentObjet = {pseudo, message};

    // Stockage de l'objet dans le local storage 
    localStorage.setItem('commentObjet', JSON.stringify(commentObjet));

    // Effacer les champs du formulaire 
    document.getElementById('pseudo').value ='';
    document.getElementById('message').value ='';

    // Appelez une fonction pour afficher les commentaires
    displayComments();
};


function displayComments(){
    // JavaScript code to add comments to the "liste-commaitare" container
    document.addEventListener('DOMContentLoaded', function () {
        const commentObjet = JSON.parse(localStorage.getItem('commentObjet'));
        if (commentObjet) {
            var commentContainer = document.querySelector('.liste-commaitare');
            
            // Create a new comment element
              
             
            var comment = document.createElement('div');
            // comment.textContent = 'Ceci est un commentaire.';
            // Append the comment element to the commentContainer
              if (commentContainer) {
                comment.classList.add('listeCommentaire');
                
                // Créez un élément image
                const commentImage = document.createElement('img');
                commentImage.src = 'https://www.pngall.com/wp-content/uploads/5/Profile.png';
    
                // Créez un conteneur pour le texte
                const commentTextContainer = document.createElement('div');
      
    //         // Créez des éléments pour afficher le nom d'utilisateur et le message
                const username = document.createElement('p');
                username.textContent = `${commentObjet.pseudo}`;
                const userMessage = document.createElement('p');
                userMessage.textContent = `${commentObjet.message}`;
      
    //         // Ajoutez les éléments au contenu du commentaire
                comment.appendChild(commentImage);
                commentTextContainer.appendChild(username);
                commentTextContainer.appendChild(userMessage);
      
    
    
                // Ajout de la liste des commentaires au contenu modal
                comment.appendChild(commentImage);
                comment.appendChild(commentTextContainer);
                commentContainer.appendChild(comment);
        
    //         // Ajout du style CSS 
                comment.style.backgroundColor = '#fff';
                comment.style.color="#000000";
                comment.style.display = 'flex';
                comment.style.padding = '10px';
                comment.style.borderRadius = '10px';
                comment.style.margin = '10px';
                commentTextContainer.style.margin = '14px';
                commentImage.style.width = '100px'; 
                commentImage.style.height = '100px';
                
              } 
              else {
                console.error('Element with class "liste-commaitare" not found in the DOM');
              }
        }
           
    });

}

// Appelez la fonction pour afficher les commentaires au chargement de la page
  displayComments();