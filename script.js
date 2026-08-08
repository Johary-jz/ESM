// Données des ebooks
const ebooks = [
    {
        id: 1,
        title: "Réussir ses études - Education",
        price: "2 500 Ar",
        image: "n1.png"
    },
    {
        id: 2,
        title: "Entreprendre et Réussir - Business",
        price: "3 500 Ar",
        image: "n2.png"
    },
    {
        id: 3,
        title: "L'informatique de A à Z - Informatique",
        price: "3 500 Ar",
        image: "n3.png"
    }
];

// Lien de votre profil/page Facebook
const facebookUrl = "https://web.facebook.com/profile.php?id=61592762725516";

// Fonction pour envoyer en MP via Facebook
function meContacterSurFacebook(titreEbook, prixEbook) {
    const textMessage = `Bonjour, je souhaite acheter l'ebook : "${titreEbook}" au prix de ${prixEbook}.`;

    // Copier le texte dans le presse-papier de l'utilisateur
    navigator.clipboard.writeText(textMessage).then(() => {
        alert(`Le message pour l'ebook "${titreEbook}" a été copié ! Collez-le (Ctrl+V) dans le message Facebook.`);
        // Ouvrir la page Facebook dans un nouvel onglet
        window.open(facebookUrl, '_blank');
    }).catch(err => {
        // Si le navigateur bloque la copie automatique, on ouvre quand même la page Facebook
        window.open(facebookUrl, '_blank');
    });
}

// Fonction pour afficher les produits sur le site
function renderProducts() {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = '';

    ebooks.forEach(ebook => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${ebook.image}" alt="${ebook.title}">
            <div class="card-content">
                <div>
                    <h3 class="card-title">${ebook.title}</h3>
                    <p class="card-price">${ebook.price}</p>
                </div>
                <button onclick="meContacterSurFacebook('${ebook.title.replace(/'/g, "\\'")}', '${ebook.price}')" class="btn-mp">
                    Envoyez-nous un MP
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Charger les produits au chargement de la page
document.addEventListener('DOMContentLoaded', renderProducts);
