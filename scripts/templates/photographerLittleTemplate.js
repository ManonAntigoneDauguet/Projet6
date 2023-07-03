function photographerLittleTemplate(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/photographersProfilPictures/${portrait}`;

    function getUserCardDOM() {
        // Crée une petite carte photographe avec les informations à afficher
        const article = document.createElement( 'article' );
        article.classList.add( 'photographer-card');

        const link = document.createElement( 'a' );
        link.href = `photographer.html?photographer=${id}`;

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", "");
        img.classList.add( 'profile-picture' );

        const title = document.createElement( 'h2' );
        title.classList.add( 'name' );
        title.textContent = name;

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
        link.appendChild(title);
        article.appendChild(localisation);
        article.appendChild(taglineHTML);
        article.appendChild(priceHTML);
        return (article);
    }

    return { name, id, picture, getUserCardDOM }
}