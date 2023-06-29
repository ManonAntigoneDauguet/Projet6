function photographerTemplate(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/photographersProfilPictures/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", `Profil de ${name}`);

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        const localisation = document.createElement( 'p' );
        localisation.classList.add( 'localisation' )
        localisation.textContent = `${city}, ${country}`;

        const taglineHTML = document.createElement( 'p' );
        taglineHTML.classList.add( 'tagline' );
        taglineHTML.textContent = tagline;

        const priceHTML = document.createElement( 'p' );
        priceHTML.classList.add( 'price' );
        priceHTML.textContent = `${price}€/jour`;

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(localisation);
        article.appendChild(taglineHTML);
        article.appendChild(priceHTML);
        return (article);
    }
    return { name, id, picture, getUserCardDOM }
}