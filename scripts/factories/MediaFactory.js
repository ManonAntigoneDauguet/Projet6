class Media {
    constructor(media) {
        this._media = media;
    }

    getMediaCardDOM() {
        // Gère le traitement différentiel du média selon son type
        if (this._media.hasOwnProperty("image")) {
            return photoTemplate(this._media);
        } else if (this._media.hasOwnProperty("video")) {
            return videoTemplate(this._media);
        } else {
            throw 'Unknow media type';
        }
    }
}