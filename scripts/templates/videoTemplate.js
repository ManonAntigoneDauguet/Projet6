function videoTemplate(data) {
    const { id, photographerId, title, video, likes, date, price } = data;

    const videoSrc = `assets/photographers/photographer${photographerId}/${video}`;

    function getMediaCardDOM() {
        const article = document.createElement( 'article' );
        article.classList.add( 'gallery-element' );
        const content = document.createElement( 'div' );
        content.classList.add( 'content' );

        const video = document.createElement( 'video' );
        video.setAttribute("title", title);
        video.classList.add( 'video' );
        video.setAttribute("controls", "");
        const source = document.createElement( 'source' );
        source.setAttribute("src", videoSrc);
        source.setAttribute("type", "video/mp4");

        const textContent = document.createElement( 'div' );
        textContent.classList.add( 'text-content' )
        const h2 = document.createElement( 'h2' );
        h2.textContent = title;
        const likesDiv = document.createElement( 'div' );
        const likesHTML = document.createElement( 'span' );
        likesHTML.textContent = likes;
        const likesIcon = document.createElement( 'img' );
        likesIcon.setAttribute("src", "assets/icons/heart.svg");
        likesIcon.setAttribute("alt", "coeur");
        likesIcon.classList.add( 'icon' );

        article.appendChild(content);
        content.appendChild(video);
        video.appendChild(source);
        content.appendChild(textContent);
        textContent.appendChild(h2);
        textContent.appendChild(likesDiv);
        likesDiv.appendChild(likesHTML);
        likesDiv.appendChild(likesIcon);
        return (article);
    }
    return { getMediaCardDOM }
}