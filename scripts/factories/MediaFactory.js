class MediaFactory {
    constructor(media) {
        if (media.hasOwnProperty("image")) {
            return photoTemplate(media);
        } else if (media.hasOwnProperty("video")) {
            return videoTemplate(media);
        } else {
            throw 'Unknow type media';
        }
    }
}