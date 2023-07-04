function photoTemplate(media) {
    const { photographerId, title, image, likes } = media;

    const photo = `assets/photographers/photographer${photographerId}/${image}`;

    // Crée et affiche la photo sur la page
    const article = document.createElement( 'article' );
    article.classList.add( 'gallery-element' );

    const content = `
        <div class="content">
            <img src="${photo}" alt="${title}" class="photo">
            <div class="text-content">
                <h2>${title}</h2>
                <div class="likes-div">
                    <span class="likes">${likes}</span>
                    <img src="./assets/icons/heart.svg" alt="likes" class="icon">
                </div>
            </div>
        </div>
    `;
    article.innerHTML = content;

    return (article);
}