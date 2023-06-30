function photographerTemplate(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/photographersProfilPictures/${portrait}`;

    function getUserCardDOM() {
        // Crée une carte photographe avec ses informations à afficher
        const article = document.createElement( 'article' );
        article.classList.add( 'photographer-card');

        const link = document.createElement( 'a' );
        link.href = `photographer.html?photographer=${id}`;

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", "");

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
    return { name, id, picture, getUserCardDOM }
}