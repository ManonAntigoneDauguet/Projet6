function photoTemplate(data) {
    const { id, photographerId, title, image, likes, date, price } = data;

    const photo = `assets/photographers/photographer${photographerId}/${image}`;

    function getMediaCardDOM() {
        // Crée et affiche la photo sur la page
        const article = document.createElement( 'article' );
        article.classList.add( 'gallery-element' );
        const content = document.createElement( 'div' );
        content.classList.add( 'content' );

        const img = document.createElement( 'img' );
        img.setAttribute("src", photo);
        img.setAttribute("alt", title);
        img.classList.add( 'photo' );

        const textContent = document.createElement( 'div' );
        textContent.classList.add( 'text-content' )
        const h2 = document.createElement( 'h2' );
        h2.textContent = title;
        const likesDiv = document.createElement( 'div' );
        likesDiv.classList.add( 'likes-div' );
        const likesHTML = document.createElement( 'span' );
        likesHTML.textContent = likes;
        const likesIcon = document.createElement( 'img' );
        likesIcon.setAttribute("src", "assets/icons/heart.svg");
        likesIcon.setAttribute("alt", "coeur");
        likesIcon.classList.add( 'icon' );

        article.appendChild(content);
        content.appendChild(img);
        content.appendChild(textContent);
        textContent.appendChild(h2);
        textContent.appendChild(likesDiv);
        likesDiv.appendChild(likesHTML);
        likesDiv.appendChild(likesIcon);
        return (article);
    }
    return { getMediaCardDOM }
}