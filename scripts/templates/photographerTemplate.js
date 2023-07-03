function photographerTemplate(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/photographersProfilPictures/${portrait}`;

    function getProfileTextDOM() {
        // Crée et affiche la carte-profil du photographe
        const article = document.createElement( 'article' );
        article.classList.add( 'photographer-card' );

        const title = document.createElement( 'h1' );
        title.classList.add( 'name' );
        title.textContent = name;

        const localisation = document.createElement( 'span' );
        localisation.classList.add( 'localisation' )
        localisation.textContent = `${city}, ${country}`;

        const taglineHTML = document.createElement( 'span' );
        taglineHTML.classList.add( 'tagline' );
        taglineHTML.textContent = tagline;

        article.appendChild(title);
        article.appendChild(localisation);
        article.appendChild(taglineHTML);
        return (article);
    }

    function getProfilePictureDOM() {
        // Crée et affiche la photo du photographe
        const imgDiv = document.createElement( 'div' );
        imgDiv.classList.add( 'profile-picture-contener' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", "");
        img.classList.add( 'profile-picture' );

        imgDiv.appendChild(img);
        return (imgDiv);
    }

    return { name, id, picture, getProfileTextDOM, getProfilePictureDOM }
}