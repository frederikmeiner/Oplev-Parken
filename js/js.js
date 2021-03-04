//Parallax Effekt - Morten
const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const image_container = document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

// Dette event for billederne til at bevæge sig på y aksen ved scroll og tager hastigheden fra "dataset.speed" som står i htmlen
window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();

    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    opacity.forEach(element => {
        element.style.opacity = scroll / (sectionY.top + section_height);
    })

    big_title.style.opacity = -scroll / (header_height / 2) + 1;
    shadow.style.height = `${scroll * 0.5 + 300}px`;

    content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
    image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;

    border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;
})
//variabler bliver oprettet - Frederik
const form = document.getElementById("form");
const navn = document.getElementById("navn");
const email = document.getElementById("email");
const telefon = document.getElementById("telefon");
const dato = document.getElementById("dato");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

// Booking form
// Trim () -metoden fjerner mellemrum fra begge ender af en streng efterfølgende bliver variabler kørt igennem forskellige if statement- Frederik
function checkInputs() {
    const navnValue = navn.value.trim();
    const emailValue = email.value.trim();
    const telefonValue = telefon.value.trim();
    const datoValue = dato.value.trim();

    if (navnValue === "") {
        setErrorFor(navn, "Navn må ikke være tomt");
    } else {
        setSuccessFor(navn);
    }

    if (emailValue === "") {
        setErrorFor(email, "Email må ikke være tomt");
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, "Indtast en korrekt mail");
    } else {
        setSuccessFor(email);
    }

    if (telefonValue === "") {
        setErrorFor(telefon, "Telefon nr. må ikke være tomt");
    } else {
        setSuccessFor(telefon);
    }

    if (datoValue === "") {
        setErrorFor(dato, "Dato må ikke være tomt");
    } else {
        setSuccessFor(dato);
    }
}


// function fortæller hvad der skal vises ved Error - Frederik, Morten
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control error";
    small.innerText = message;
}
// function fortæller hvad der skal vises ved succes - Frederik, Morten
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

// Denne function tjekker om der er de rigtige tegn i emailen, som f.eks @ - Frederik, Morten
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}

//FADE IND effekt
// Denne function får priser til at fade ind når man scroller ned til 300px - Morten
var $priser = $(".priserTekst");

$(window).on("scroll", function () {
    if ($(this).scrollTop() > 300) {
        $priser.addClass("active");
    } else {
        $priser.removeClass("active");
    }
});

// Denne function får brtaling til at fade ind når man scroller ned til 500px - Morten
var $betaling = $(".betaling");

$(window).on("scroll", function () {
    if ($(this).scrollTop() > 500) {
        $betaling.addClass("active");
    } else {
        $betaling.removeClass("active");
    }
});