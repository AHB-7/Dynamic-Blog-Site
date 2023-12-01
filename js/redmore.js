const container = document.querySelector(".container-for-items");

console.log(container);

const quaryStrings = document.location.search;

const params = new URLSearchParams(quaryStrings);

const id = params.get("id");

const url = "https://mig.alanbrim.no/wp-json/wc/store/products/" + id;

async function fetchGame() {
    try {
        const response = await fetch(url);
        const json = await response.json();

        container.innerHTML = "";

        container.innerHTML = `<h2>${json.name}</h2>
        <img class="item-img" src="${json.images[0].src}" alt="" />
        <p>${json.description}</p>

        `;
    } catch (err) {
        console.log(err);
        container.innerHTML = `<p class="error">There was an error, please reload the page!</p>`;
    }
}

fetchGame();
