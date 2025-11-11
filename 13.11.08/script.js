document.addEventListener('DOMContentLoaded', () => {
    // Démarrer la pluie de cœurs au chargement
    startRain();
    
    // Configurer le bouton de souhait
    const wishBtn = document.getElementById('wish-btn');
    const toast = document.getElementById('toast');
    
    wishBtn.addEventListener('click', () => {
        // Lancer une rafale de cœurs
        burst(30);
        
        // Afficher le toast
        toast.style.opacity = '1';
        
        // Masquer le toast après 3 secondes
        setTimeout(() => {
            toast.style.opacity = '0';
        }, 3000);
    });
});
// Fonction pour créer un cœur
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    
    // Taille aléatoire entre 12px et 45px
    const size = Math.random() * 33 + 12;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    
    // Position horizontale aléatoire
    heart.style.left = `${Math.random() * 100}vw`;
    
    // Durée d'animation aléatoire entre 5s et 15s
    const duration = Math.random() * 10 + 5;
    heart.style.animationDuration = `${duration}s`;
    
    // Rotation aléatoire entre -45 et 45 degrés
    heart.style.setProperty('--rotation', Math.random() * 90 - 45);
    
    // Couleur aléatoire dans la palette rose pastel
    const colors = ['#ff7fbf', '#ffb6d5', '#ffd5a6', '#ff9ec6', '#ffcce6'];
    heart.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    heart.style.opacity = 0.8;
    
    document.getElementById('hearts-container').appendChild(heart);
    
    // Supprimer le cœur après l'animation
    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}
// Démarrer une pluie douce de cœurs
function startRain() {
    // Créer un cœur toutes les 200-500ms
    setInterval(() => {
        createHeart();
        // Créer parfois 2 cœurs en même temps
        if (Math.random() > 0.7) {
            setTimeout(createHeart, 100);
        }
    }, Math.random() * 300 + 200);
}
// Rafale de cœurs
function burst(count) {
    for (let i = 0; i < count; i++) {
        setTimeout(createHeart, i * 50);
    }
}