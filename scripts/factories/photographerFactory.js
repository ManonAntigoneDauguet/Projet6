class Photographer {
    constructor(data) {
        this._name = data.name;
        this._id = data.id;
        this._city = data.city;
        this._country = data.country;
        this._tagline = data.tagline;
        this._price = data.price;
        this._picture = `assets/photographers/photographersProfilPictures/${data.portrait}`;
    }

    getUserCardDOM() {
        // Crée une petite carte photographe avec les informations à afficher
        const article = document.createElement( 'article' );
        article.classList.add( 'photographer-card' );

        const content = `
            <a href="photographer.html?photographer=${this._id}">
                <img src="${this._picture}" alt="" class="profile-picture">
                <h2 class="name">${this._name}</h2>
            </a>
            <span class="localisation">${this._city}, ${this._country}</span>
            <span class="tagline">${this._tagline}</span>
            <span class="price">${this._price}€/jour</span>
        `;
        article.innerHTML = content;
        
        return (article);
    }
}

export default Photographer;