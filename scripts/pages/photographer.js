//************** RECUPERATION DU QUERY PARAM *********************

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const photographerId = params.get( 'photographer' );
    
    
//************* CREATION DE LA PAGE PHOTOGRAPHER ******************

    async function getPhotographers() {
        // Récupération des données JSON
        const response = await fetch('./data/photographers.json');
        const photographers = await response.json();
        // Retourne le tableau des données une fois récupéré
        return photographers;
    }

    async function displayHeaderData(photographer) {
        const photographersSection = document.querySelector(".photograph-header");
        // Creation et affichage du profil photographe
        const photographerModel = photographerTemplate(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    }

    async function displayGalleryData(gallery) {
        const gallerySection = document.querySelector(".photograph-gallery")
        // Creation et affichage de la gallerie du photographe
        gallery.forEach((media) => {
            const mediaModel = new MediaFactory(media);
            const mediaCardDOM = mediaModel.getMediaCardDOM()
            gallerySection.appendChild(mediaCardDOM);
        });
    }

    async function init() {
        // Récupère les datas du photographe sélectionné
        const { photographers } = await getPhotographers();
        const photographer = photographers.find(photographer => photographer.id == photographerId)

        // Récupère les média du photographe sélectionné
        const { media } = await getPhotographers();
        const gallery = media.filter(media => media.photographerId == photographerId)

        // Creation et affichage du profil et de la gallerie du photographe
        displayHeaderData(photographer);
        displayGalleryData(gallery);
    }

init();