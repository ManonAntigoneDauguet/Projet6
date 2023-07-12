/********************* ELEMENTS DU DOM ********************/

const main = document.querySelector("main");
const header = document.querySelector("header");
const animationDelay = 500;


// CONTACT FORM
const contact = document.getElementById("contact_modal");
const form = document.querySelector("form[name='contact_form']");
const contactHeader = document.querySelector(".modal header");
const validationMessage = document.querySelector(".validation_message");
const contactInputs = document.querySelectorAll( '.modal input' );
const contactMessage = document.querySelector("textarea[name='message']");
// boutons de la page
const contactOpenButton = document.querySelector(".contact_button");
const contactCloseButton = document.querySelector("#contact_modal button[aria-label='Close']");
const contactEndedButton = document.querySelector(".validation_message button");


// LIGHTBOX
const lightbox = document.getElementById("lightbox");
// boutons de la page
const lightboxOpenButton = document.querySelector(".profile-picture");
const lightboxCloseButton = document.querySelector("#lightbox button[aria-label='Close']");
// const lightNextButton = document.querySelector("button[aria-label='Next']");
// const lightPreviousButton = document.querySelector("button[aria-label='Previous']");



/*******************  OUVERTURE ET FERMETURE **************/

// Animations
async function opacityDeseappear(DOMEelement) {
    DOMEelement.style.animationName = "opacity-desappear";
    DOMEelement.style.animationDuration = `${animationDelay}ms`;
}

async function opacityAppear(DOMEelement) {
    DOMEelement.style.animationName = "opacity-appear";
    DOMEelement.style.animationDuration = `${animationDelay}ms`;
}

// Gestion du focus
function removeFocus(section) {
    const focusableElements = document.querySelectorAll(`${section.localName} a, ${section.localName} button, ${section.localName} input, ${section.localName} textarea, ${section.localName} select, ${section.localName} details, ${section.localName} video`);
    for (let i = 0; i < focusableElements.length; i++) {
        focusableElements[i].setAttribute("tabindex", "-1");
    }
}

function addFocus(section) {
    const focusableElements = document.querySelectorAll(`${section.localName} a, ${section.localName} button, ${section.localName} input, ${section.localName} textarea, ${section.localName} select, ${section.localName} details, ${section.localName} video`);
    for (let i = 0; i < focusableElements.length; i++) {
        focusableElements[i].setAttribute("tabindex", "0");
    }
}

// Ouverture/Fermeture
async function openModal(modal, closeButton) {
    await opacityAppear(modal);
    modal.style.display = "block";
    modal.setAttribute("aria-hidden", "false");
    main.setAttribute("aria-hidden", "true");
    removeFocus(main);
    header.setAttribute("aria-hidden", "true");
    removeFocus(header);
    closeButton.setAttribute("tabindex", "0");
    closeButton.focus();
}

async function closeModal(modal, openButton) {
    await opacityDeseappear(modal);
    setTimeout(() => {
        modal.style.display = "none";
    }, animationDelay);
    modal.setAttribute("aria-hidden", "true");
    main.setAttribute("aria-hidden", "false");
    addFocus(main);
    header.setAttribute("aria-hidden", "false");
    addFocus(header);
    openButton.focus();
}



/****************** CONTACT FORM ***************/

// Comportement et affichage
contactOpenButton.addEventListener("click", () => {
    openModal(contact, contactCloseButton); 
    document.addEventListener("keydown", (event) => {
        if (event.key == "Escape") {
            closeModal(contact, contactOpenButton);
        }
    })
});

contactCloseButton.addEventListener("click", () => {
    closeModal(contact, contactOpenButton);
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (isAllInputsValid()) {
        for (let i = 0; i < contactInputs.length; i++) {
            console.log(`${contactInputs[i].name} : ${contactInputs[i].value}`); 
        }
        if (contactMessage.value.trim() !== "") {
            console.log(`${contactMessage.name} : ${contactMessage.value}`);
        }
        validationMessage.style.display = "block";
        form.style.display = "none";
        contactHeader.style.display = "none";
        contactEndedButton.focus();                  
    }
});

contactEndedButton.addEventListener("click", () => {
    location.reload();
});

// Validation des inputs et feedback
function isInputValid(input) {
    let emailRegExp = new RegExp("[a-z._-]+@[a-z._-]+\\.[a-z._-]+")
    if (input.value.trim() === "" ||
        (input.type === "email" 
        && !emailRegExp.test(input.value.trim()))) {
        
        return false;
    } 
    return true;   
}

function showFeedback(input) {
    if (!isInputValid(input)) {
        input.setAttribute("aria-invalid", "true");
    } else {
        input.setAttribute("aria-invalid", "false"); 
    }
}

function isAllInputsValid() {
    for (let i = 0; i < contactInputs.length; i++) {
        if (!isInputValid(contactInputs[i])) {
            return false;
        }
    } 
    return true;  
}

for (let i = 0; i < contactInputs.length; i++) {
    let input = contactInputs[i];
    input.addEventListener('change', () => {
      showFeedback(input);
    });
}



/****************** LIGHTBOX ***************/

// Comportement et affichage
lightboxOpenButton.addEventListener("click", () => {
    openModal(lightbox, lightboxCloseButton); 
    document.addEventListener("keydown", (event) => {
        if (event.key == "Escape") {
            closeModal(lightbox, lightboxOpenButton);
        }
    })
});

lightboxCloseButton.addEventListener("click", () => {
    closeModal(lightbox, lightboxOpenButton);
});