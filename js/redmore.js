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
        const images = document.querySelectorAll("img");
        images.forEach((img) => {
            img.addEventListener("click", function () {
                const newDiv = document.createElement("div");
                const newImg = document.createElement("img");
                const close = document.createElement("p");
                newImg.src = img.src;
                close.innerHTML = "X";
                newImg.classList.add("over-img");
                newDiv.classList.add("img-open");
                close.classList.add("close-img");
                main.appendChild(newDiv);
                newDiv.appendChild(newImg);
                newDiv.appendChild(close);

                newDiv.addEventListener("click", function (e) {
                    if (!newImg.contains(e.target)) {
                        main.removeChild(newDiv);
                        close.addEventListener("click", function () {
                            main.removeChild(newDiv);
                        });
                    } else {
                    }
                });
            });
        });
    } catch (err) {
        main.innerHTML = somethigWentWrong;
    }
}
fetchGame();
