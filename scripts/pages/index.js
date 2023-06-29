    async function getPhotographers() {
        // Récupération des données JSON
        const response = await fetch('./data/photographers.json');
        const photographers = await response.json();
        // Retourne le tableau des données une fois récupéré
        return photographers;
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerTemplate(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    }

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        // Creation et affichage des cartes photographes
        displayData(photographers);
    }
    
    init();
    
