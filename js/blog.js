import {
    url,
    containerForCards,
    loder,
    showMore,
    filterSelector,
    filtringItems,
    containerForFilters,
    showFilter,
    hideFilter,
    somethigWentWrong,
    main,
} from "./variables.js";

let currentArticles = [];
let limit = 8;
async function getGames(articles) {
    try {
        containerForCards.innerHTML = "";
        const totArticlesNum = articles.length;
        const displayArticles = articles.slice(0, limit);
        for (let i = 0; i < displayArticles.length; i++) {
            const wordCount = articles[i].description.length;
            const readingTime = Math.ceil(wordCount / 450);
            containerForCards.innerHTML += `
                <div class="card-container">
                   
                    <img class="item-img"  loading="lazy"  src="${
                        articles[i].images[0].src
                    }" alt="Main Image of the Artickle" />
                    <div class="item-txt">
                        <h2>${articles[i].name}</h2>
                        <ul>
                            <li>Authour: ${
                                articles[i].attributes[1].terms[0].name
                            }</li>
                            <li>Published: ${
                                articles[i].attributes[0].terms[0].name
                            }</li>
                            <li>Category: ${articles[i].categories[0].name}</li>
                        </ul>
                        <p>${articles[i].description}</p>
                    </div>
                    <div class="main-btn-container">
                        <a href="/html/readmore.html?id=${
                            articles[i].id
                        }" class="main-btn"> Read More </a>
                    </div> 
                    <p class="words-counter"> Estimated time to read:<strong> ${readingTime}</strong></p>
                    <div class="hover-it-container">
                    <p class="articlesNum">${i + 1}/${totArticlesNum}</p>
                    <i class="fa-solid fa-chevron-up hover-it"></i>
                    </div>
                </div>
            `;
        }
        showMore.addEventListener("click", function addGames() {
            limit += 4;
            getGames(currentArticles);
            if (displayArticles.length >= totArticlesNum) {
                showMore.style.opacity = "0.1";
            } else {
                showMore.style.opacity = "1";
            }
        });
    } catch (err) {
        main.innerHTML = somethigWentWrong;
    }
}

async function fetchAndDisplayAllGames() {
    try {
        loder.style.display = "flex";
        const response = await fetch(url);
        currentArticles = await response.json();
        loder.style.display = "none";

        getGames(currentArticles);
    } catch (err) {
        main.innerHTML = somethigWentWrong;
    }
}

fetchAndDisplayAllGames();

//----------------------------------------------------------------
// Filter Items----------------------------------------------------------------
//----------------------------------------------------------------

filtringItems.style.display = "none";

function handleClickOutside(event) {
    if (
        !containerForFilters.contains(event.target) &&
        !filtringItems.contains(event.target)
    ) {
        filtringItems.style.display = "none";
    }
}

containerForFilters.addEventListener("mouseenter", showFilter);
containerForFilters.addEventListener("touchstart", showFilter);

document.body.addEventListener("click", handleClickOutside);

//----------------------------------------------------------------
//filter selected items-----------------------------------------------------------
//----------------------------------------------------------------

async function filterCategory(category) {
    try {
        const response = await fetch(url);
        const articles = await response.json();
        const filteredArticles = articles.filter((article) =>
            article.categories.some((e) =>
                e.name.toLowerCase().includes(category.toLowerCase())
            )
        );
        currentArticles = filteredArticles;
        getGames(currentArticles);
    } catch (err) {
        main.innerHTML = somethigWentWrong;
    }
}
filterSelector.forEach((filterButton) => {
    filterButton.addEventListener("click", function () {
        const selectedCategory = this.id;
        filterSelector.forEach((btn) => {
            btn.classList.remove("selected");
        });
        if (selectedCategory === "clear") {
            fetchAndDisplayAllGames();
        } else {
            filterCategory(selectedCategory);
        }
        this.classList.add("selected");
    });
});
