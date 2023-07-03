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

    function getPriceNLikesDOM() {
        // Crée et affiche le prix et le nombre de likes total du photographe
        const priceNLikesDiv = document.createElement( 'div' );
        priceNLikesDiv.classList.add( 'price-and-likes' );

        const likesDiv = document.createElement( 'div' );
        likesDiv.classList.add( 'likes-div' );
        const likesHTML = document.createElement( 'span' );
        likesHTML.textContent = '?????';
        const likesIcon = document.createElement( 'img' );
        likesIcon.setAttribute("src", "assets/icons/heart.svg");
        likesIcon.setAttribute("alt", "likes");
        likesIcon.classList.add( 'icon' );        

        const priceHTML = document.createElement( 'span' );
        priceHTML.textContent = `${price}€ / jour`;

        priceNLikesDiv.appendChild(priceHTML);
        priceNLikesDiv.appendChild(likesDiv);
        likesDiv.appendChild(likesHTML);
        likesDiv.appendChild(likesIcon);
        return (priceNLikesDiv);
    }

    return { name, id, picture, getUserCardDOM, getProfileTextDOM, getProfilePictureDOM, getPriceNLikesDOM }
}