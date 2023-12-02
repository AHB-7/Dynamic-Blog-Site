import { loder, somethigWentWrong, main } from "./variables.js";

const container = document.querySelector(".container-for-items");

const quaryStrings = document.location.search;

const params = new URLSearchParams(quaryStrings);

const id = params.get("id");

const url = "https://mig.alanbrim.no/wp-json/wc/store/products/" + id;

const containerI = document.querySelector(".main-container");

async function fetchGame() {
    try {
        const response = await fetch(url);
        const json = await response.json();
        containerI.innerHTML = "";
        containerI.innerHTML = `
        <div class="first-section">
        <div class="title-and-info" ;>
            <h1 class="game-title">${json.name}</h1>
            <ul>
                <li>Authour: ${json.attributes[1].terms[0].name}</li>
                <li>Published: ${json.attributes[0].terms[0].name}</li>
                <li>Category: ${json.categories[0].name}</li>
            </ul>
        </div>
        <img
            class="img-one"
            src="${json.images[0].src}"
            alt="Game Image"
        />
        </div>
        <article class="game-article">
        ${json.description}
        </article>
        `;
    } catch (err) {
        main.innerHTML = somethigWentWrong;
    }
}

fetchGame();
