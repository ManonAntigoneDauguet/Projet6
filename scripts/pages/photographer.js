    async function getPhotographers() {
        // Récupération des données JSON
        const response = await fetch('./data/photographers.json');
        const photographers = await response.json();
        // Retourne le tableau des données une fois récupéré
        return photographers;
    }

    async function displayData(photographer) {
        const photographersSection = document.querySelector(".photograph-header");

        const photographerModel = photographerTemplate(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    }

    async function init() {
        // Récupère les datas du photographe sélectionné
        const { photographers } = await getPhotographers();
        const photographer = photographers.find(photographer => photographer.id === 243)
        // Creation et affichage du profil du photographe
        displayData(photographer);
    }

    init();