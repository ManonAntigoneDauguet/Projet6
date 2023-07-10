/********************* ELEMENTS DU DOM ********************/
const modal = document.getElementById("contact_modal");
const form = document.querySelector("form[name='contact_form']");
const main = document.querySelector("main");
const header = document.querySelector("header");
const modalHeader = document.querySelector(".modal header");
const animationDelay = 500;
const validationMessage = document.querySelector(".validation_message");
const inputs = document.querySelectorAll( '.modal input' );
const message = document.querySelector("textarea[name='message']");
// boutons de la page
const contactButton = document.querySelector(".contact_button");
const closeButton = document.querySelector("button[aria-label='Close']");
const endedButton = document.querySelector(".validation_message button");


/*******************  OUVERTURE ET FERMETURE **************/
async function opacityDeseappear(DOMEelement) {
    DOMEelement.style.animationName = "opacity-desappear";
    DOMEelement.style.animationDuration = `${animationDelay}ms`;
}

async function opacityAppear(DOMEelement) {
    DOMEelement.style.animationName = "opacity-appear";
    DOMEelement.style.animationDuration = `${animationDelay}ms`;
}

async function openModal() {
    await opacityAppear(modal);
    modal.style.display = "block";
    modal.setAttribute("aria-hidden", "false");
    main.setAttribute("aria-hidden", "true");
    header.setAttribute("aria-hidden", "true");
    closeButton.focus();
}

async function closeModal() {
    await opacityDeseappear(modal);
    setTimeout(() => {
        modal.style.display = "none";
    }, animationDelay);
    modal.setAttribute("aria-hidden", "true");
    main.setAttribute("aria-hidden", "false");
    header.setAttribute("aria-hidden", "false");
    contactButton.focus();
}


/****************** COMPORTEMENT ET AFFICHAGE ***************/
contactButton.addEventListener("click", () => {
    openModal();  
    document.addEventListener("keydown", (event) => {
        if (event.key == "Escape") {
            closeModal();
        }
    })
});

closeButton.addEventListener("click", () => {
    closeModal();
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (isAllInputsValid()) {
        for (let i = 0; i < inputs.length; i++) {
            console.log(`${inputs[i].name} : ${inputs[i].value}`); 
        }
        if (message.value.trim() !== "") {
            console.log(`${message.name} : ${message.value}`);
        }
        validationMessage.style.display = "block";
        form.style.display = "none";
        modalHeader.style.display = "none";
        endedButton.focus();                  
    }
});

endedButton.addEventListener("click", () => {
    location.reload();
});


/******************** VALIDATION DES INPUTS ET FEEDBACK *********/
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
    for (let i = 0; i < inputs.length; i++) {
        if (!isInputValid(inputs[i])) {
            return false;
        }
    } 
    return true;  
}

for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];
    input.addEventListener('change', () => {
      showFeedback(input);
    });
}