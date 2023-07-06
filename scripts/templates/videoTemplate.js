function videoTemplate(media) {
    const { photographerId, title, video, likes } = media;

    const videoSrc = `assets/photographers/photographer${photographerId}/${video}`;

    // Crée et affiche la video sur la page
    const article = document.createElement( 'article' );
    article.classList.add( 'gallery-element' );

    const content = `
        <div class="content">
            <video title="${title}" class="video" controls>
                <source src="${videoSrc}" type="video/mp4">
            </video>
            <div class="text-content">
                <h3 class="title">${title}</h3>
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