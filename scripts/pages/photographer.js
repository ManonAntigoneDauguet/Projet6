//************** RECUPERATION DU QUERY PARAM *********************

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const photographerId = params.get( 'photographer' );
    
    
//************* CREATION DE LA PAGE PHOTOGRAPHER ******************

    async function getPhotographers() {
        // Récupération des données JSON
        const response = await fetch('./data/photographers.json');
        const photographers = await response.json();
        return photographers;
    }

    async function displayPhotographerData(photographer) {
        const { name, city, country, tagline, price, portrait } = photographer;
        const picture = `assets/photographers/photographersProfilPictures/${portrait}`;

        // Affichage du profil photographe
        document.querySelector( '.name' ).textContent = name;
        document.querySelector( '.localisation' ).textContent = `${city}, ${country}`;
        document.querySelector( '.tagline' ).textContent = tagline;
        document.querySelector( '.profile-picture' ).src = picture;

        // Changement du titre de la page
        document.querySelector("title").textContent = `Fisheye - ${photographer.name}`;

        // Affichage du tarif et popularité du photographe
        document.querySelector( '.price' ).textContent = `${price}€ / jour`;
    }

    async function displayGalleryData(gallery) {
        const gallerySection = document.querySelector(".photograph-gallery");

        // Creation et affichage de la gallerie du photographe
        gallery.forEach((media) => {
            const mediaFactory = new MediaFactory();
            const mediaModel = mediaFactory.test(media);
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
        displayPhotographerData(photographer);
        displayGalleryData(gallery);
    }

init();