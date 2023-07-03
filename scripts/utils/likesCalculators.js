function getPriceNLikesDOM(photographer, gallery) {
    const price = photographer.price;

    // Crée et affiche le prix et le nombre de likes total du photographe
    const priceNLikesDiv = document.createElement( 'div' );
    priceNLikesDiv.classList.add( 'price-and-likes' );

    const likesDiv = document.createElement( 'div' );
    likesDiv.classList.add( 'likes-div' );
    const likesHTML = document.createElement( 'span' );
    likesHTML.textContent = '?????';
    const likesIcon = document.createElement( 'img' );
    likesIcon.setAttribute("src", "assets/icons/heart.svg");
    likesIcon.setAttribute("alt", "likes");
    likesIcon.classList.add( 'icon' );        

    const priceHTML = document.createElement( 'span' );
    priceHTML.textContent = `${price}€ / jour`;

    priceNLikesDiv.appendChild(priceHTML);
    priceNLikesDiv.appendChild(likesDiv);
    likesDiv.appendChild(likesHTML);
    likesDiv.appendChild(likesIcon);
    return (priceNLikesDiv);
}