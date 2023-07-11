//*************** IMPORTS DES FICHIERS NECESSAIRES ***************
import Media from "../factories/mediaFactory.js";


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
        document.querySelector( '.modal-title' ).innerHTML = `Contactez-moi<br>${name}`;

        // Changement du titre de la page
        document.querySelector("title").textContent = `Fisheye - ${photographer.name}`;

        // Affichage du tarif et popularité du photographe
        document.querySelector( '.price' ).textContent = `${price}€ / jour`;
    }

    async function displayGalleryData(gallery) {
        // Creation et affichage de la gallerie du photographe
        gallery.forEach((media) => {
            const mediaModel = new Media(media);
            const mediaCardDOM = mediaModel.getMediaCardDOM();
            gallerySection.appendChild(mediaCardDOM);
        });
    }

    async function init() {
        // Récupère les datas du photographe sélectionné
        const { photographers } = await getPhotographers();
        const photographer = photographers.find(photographer => photographer.id == photographerId);

        // Récupère les média du photographe sélectionné
        const { media } = await getPhotographers();
        const gallery = media.filter(media => media.photographerId == photographerId);

        // Creation et affichage du profil et de la gallerie du photographe
        displayPhotographerData(photographer);
        displayGalleryData(gallery);
        displayFilters(gallery);
        displayLikes(gallery);
    }

const gallerySection = document.querySelector(".photograph-gallery");
init();


//************** GESTION DES FILTRES GALLERIE *******************

// Elements du DOM
const filter1 = document.getElementById( 'listbox1-1' );
const filter2 = document.getElementById( 'listbox1-2' );
const filter3 = document.getElementById( 'listbox1-3' );
const filterChosen = document.querySelector( '.filter_selected span' );
const filters = [filter1, filter2, filter3];
const listbox1 = document.getElementById( 'listbox1' );
const openButton = document.getElementById( 'filters-checkbox' );

// Ouverture et fermeture de la boite de sélection
function closeSelection() {
    openButton.checked = false;
    for (let i = 0; i < filters.length; i++) {
        filters[i].setAttribute("tabindex", "-1");
    }   
}

openButton.addEventListener("change", () => {
    if (openButton.checked) {
        document.querySelector( '.chevron' ).alt = "Refermer";
        openFiltersNavigation();
        for (let i = 0; i < filters.length; i++) {
            filters[i].setAttribute("tabindex", "0");
        }
    } else {
        document.querySelector( '.chevron' ).alt = "Etendre";
        for (let i = 0; i < filters.length; i++) {
            filters[i].setAttribute("tabindex", "-1");
        }      
    }
})

// Gestion de la sélection du filtre
for (let i = 0; i < filters.length; i++) {
    filters[i].addEventListener("click", () => {
        filterChosen.innerText = filters[i].innerText;
        closeSelection();
        listbox1.setAttribute("aria-activedescendant", `${filters[i].id}`)
    })
}

// Filtres
function displayFilters(gallery) {
    filter1.addEventListener("click", () => orderByPopularity(gallery));
    filter2.addEventListener("click", () => orderByDate(gallery));
    filter3.addEventListener("click", () => orderByTitle(gallery));
}

function orderByTitle(gallery) {
    const orderedByTitle = Array.from(gallery);
    orderedByTitle.sort(function (a, b) {
        return a.title.localeCompare(b.title);
    });
    gallerySection.innerHTML = "";
    displayGalleryData(orderedByTitle);
}

function orderByDate(gallery) {
    const orderedByDate = Array.from(gallery);
    orderedByDate.sort(function (a, b) {
        return b.date.localeCompare(a.date);
    });
    gallerySection.innerHTML = "";
    displayGalleryData(orderedByDate);
}

function orderByPopularity(gallery) {
    const orderedByPopularity = Array.from(gallery);
    orderedByPopularity.sort(function (a, b) {
        return b.likes - a.likes;
    });
    gallerySection.innerHTML = "";
    displayGalleryData(orderedByPopularity);
}

function openFiltersNavigation() {
    let target = -1;
    document.addEventListener("keydown", (e) => {
        if (e.key == "ArrowRight" && target < filters.length-1) {      
            target += 1;
            filters[target].focus();
        }        
        if (e.key == "ArrowLeft" && target > 0) {     
            target -= 1;
            filters[target].focus();
        }
    })    
}


//******************* GESTION DES LIKES *******************

function displayLikes(gallery) {
    yieldTotalLikes(gallery);
}

function yieldTotalLikes(gallery) {
    const totalLikesHTML = document.querySelector( '.total-likes');
    const allMediaLikes = gallery.map(gallery => gallery.likes);    
    let totalLikes = allMediaLikes.reduce((partialSum, a) => partialSum + a, 0);
    totalLikesHTML.innerText = totalLikes;
}

