const url = "https://mig.alanbrim.no/wp-json/wc/store/products";
const containerForCards = document.querySelector(".container-for-items");
const loder = document.querySelector(".loder-container");
const filtringItems = document.querySelector(".filtring-items");
const filterSelector = document.querySelectorAll(".filtering");
const filterBtn = document.querySelector(".filter-btn");
const containerForFilters = document.querySelector(".container-for-filter");
const showMore = document.querySelector(".show-more");
const all = document.getElementById("all");
const showFilter = function () {
    filtringItems.style.display = "inline-flex";
};
const hideFilter = function () {
    filtringItems.style.display = "none";
};
export {
    url,
    containerForCards,
    loder,
    showMore,
    filterBtn,
    filterSelector,
    filtringItems,
    all,
    containerForFilters,
    showFilter,
    hideFilter,
};
