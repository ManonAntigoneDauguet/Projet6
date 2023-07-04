// Gère le traitement différentiel du média selon son type

class MediaFactory {

    getMediaCardDOM(media) {
        if (media.hasOwnProperty("image")) {
            return photoTemplate(media);
        } else if (media.hasOwnProperty("video")) {
            return videoTemplate(media);
        } else {
            throw 'Unknow media type';
        }
    }
}