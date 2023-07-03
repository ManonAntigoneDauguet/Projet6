function photographerTemplate(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/photographersProfilPictures/${portrait}`;

    function getUserCardDOM() {
        // Crée une petite carte photographe avec ses informations à afficher
        const article = document.createElement( 'article' );
        article.classList.add( 'photographer-card');

        const link = document.createElement( 'a' );
        link.href = `photographer.html?photographer=${id}`;

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", "");
        img.classList.add( 'profile-picture' );

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        const localisation = document.createElement( 'span' );
        localisation.classList.add( 'localisation' )
        localisation.textContent = `${city}, ${country}`;

        const taglineHTML = document.createElement( 'span' );
        taglineHTML.classList.add( 'tagline' );
        taglineHTML.textContent = tagline;

        const priceHTML = document.createElement( 'span' );
        priceHTML.classList.add( 'price' );
        priceHTML.textContent = `${price}€/jour`;

        article.appendChild(link);
        link.appendChild(img);
        link.appendChild(h2);
        article.appendChild(localisation);
        article.appendChild(taglineHTML);
        article.appendChild(priceHTML);
        return (article);
    }

    function getProfileTextDOM() {
        // Crée et affiche la carte-profil du photographe
        const article = document.createElement( 'article' );
        article.classList.add( 'photographer-card' );

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        const localisation = document.createElement( 'span' );
        localisation.classList.add( 'localisation' )
        localisation.textContent = `${city}, ${country}`;

        const taglineHTML = document.createElement( 'span' );
        taglineHTML.classList.add( 'tagline' );
        taglineHTML.textContent = tagline;

        article.appendChild(h2);
        article.appendChild(localisation);
        article.appendChild(taglineHTML);
        return (article);
    }

    function getProfilePictureDOM() {
        const imgDiv = document.createElement( 'div' );
        imgDiv.classList.add( 'profile-picture-contener' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", "");
        img.classList.add( 'profile-picture' );

        imgDiv.appendChild(img);
        return (imgDiv);
    }

    return { name, id, picture, getUserCardDOM, getProfileTextDOM, getProfilePictureDOM }
}