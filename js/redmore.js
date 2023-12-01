const container = document.querySelector(".container-for-items");

console.log(container);

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
        <h1>${json.name}</h1>
        <img class="img-one" src="${json.images[0].src}" alt="" />
        <p>${json.description}</p>
        `;
    } catch (err) {
        console.log(err);
        container.innerHTML = `<p class="error">There was an error, please reload the page!</p>`;
    }
}

fetchGame();
