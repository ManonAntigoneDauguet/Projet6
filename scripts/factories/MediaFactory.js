class Media {
    constructor(media) {
        this._media = media;
    }

    getMediaCardDOM() {
        // Gère le traitement différentiel du média selon son type
        if (this._media.image) {
            return this.generatePhoto(this._media);
        } else if (this._media.video) {
            return this.generateVideo(this._media);
        } else {
            throw 'Unknow media type';
        }
    }

    generateVideo(media) { 
        const { photographerId, title, video, likes, id } = media;
        const videoSrc = `assets/photographers/photographer${photographerId}/${video}`;
    
        // Crée et affiche la video sur la page
        const article = document.createElement( 'article' );
        article.classList.add( 'gallery-element' );
    
        const content = `
            <div class="content">
                <a href="javascript:;" class="media-card media-card${id}">
                    <video title="${title}" class="video">
                        <source src="${videoSrc}" type="video/mp4">
                    </video>
                </a>
                <div class="text-content">
                    <h3 class="title">${title}</h3>
                    <div class="likes-div">
                        <img src="./assets/icons/empty-heart.svg" 
                            alt="likes" 
                            class="empty-heart"
                        >                  
                        <input type="checkbox" 
                            id="${id}"
                            class="like-checkbox"
                        >                     
                        <span class="likes">${likes}</span>
                        <img src="./assets/icons/heart.svg" 
                            alt="likes" 
                            class="heart"
                        >
                        <img src="./assets/icons/empty-heart.svg" 
                            alt="likes" 
                            class="empty-heart"
                        >
                    </div>
                </div>
            </div>
        `;
        article.innerHTML = content;
    
        return (article);
    }
    
    generatePhoto(media) {
        const { photographerId, title, image, likes, id } = media;
        const photo = `assets/photographers/photographer${photographerId}/${image}`;
    
        // Crée et affiche la photo sur la page
        const article = document.createElement( 'article' );
        article.classList.add( 'gallery-element' );
    
        const content = `
            <div class="content">
                <a href="javascript:;" class="media-card media-card${id}">
                    <img src="${photo}" alt="${title}" class="photo">
                </a>
                <div class="text-content">
                    <h3 class="title">${title}</h3>
                    <div class="likes-div">
                        <img src="./assets/icons/empty-heart.svg" 
                            alt="likes" 
                            class="empty-heart"
                        >
                        <input type="checkbox" 
                            id="${id}"
                            class="like-checkbox"
                        >                     
                        <span class="likes">${likes}</span>
                        <img src="./assets/icons/heart.svg" 
                            alt="likes" 
                            class="heart"
                        >
                    </div>
                </div>
            </div>
        `;
        article.innerHTML = content;

        return (article);
    }

    getLihtboxDOM() {
        if (this._media.image) {
            return this.generatePhotoLightbox(this._media);
        } else if (this._media.video) {
            return this.generateVideoLightbox(this._media);
        } else {
            throw 'Unknow media type';
        }
    }

    generatePhotoLightbox(media) {
        const { photographerId, title, image } = media;
        const photo = `assets/photographers/photographer${photographerId}/${image}`;
        const article = document.createElement( 'article' );
        article.classList.add( 'lightbox-element' );
        const content = `
            <img src="${photo}" alt="${title}" class="photo">
            <p class="title">${title}</p>
        `;
        article.innerHTML = content;

        return (article);       
    }

    generateVideoLightbox(media) {
        const { photographerId, title, video } = media;
        const videoSrc = `assets/photographers/photographer${photographerId}/${video}`;
        const article = document.createElement( 'article' );
        article.classList.add( 'lightbox-element' );
        const content = `
            <video title="${title}" class="video" controls>
                <source src="${videoSrc}" type="video/mp4">
            </video>
            <p class="title">${title}</p>
        `;
        article.innerHTML = content;

        return (article);    
    }
}

export default Media;