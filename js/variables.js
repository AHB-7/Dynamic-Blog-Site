const url = "https://mig.alanbrim.no/wp-json/wc/store/products";
const containerForCards = document.querySelector(".container-for-items");
const loder = document.querySelector(".loder-container");
const filtringItems = document.querySelector(".filtring-items");
const filterSelector = document.querySelectorAll(".filtering");
const filterBtn = document.querySelector(".filter-btn");
const containerForFilters = document.querySelector(".container-for-filter");
const showMore = document.querySelector(".show-more");
const all = document.getElementById("all");
const main = document.querySelector("main");
const showFilter = function () {
    filtringItems.style.display = "inline-flex";
};
const hideFilter = function () {
    filtringItems.style.display = "none";
};
//For Contact
const forms = document.querySelectorAll(".form");
const submitBtn = document.querySelector(".send-btn");
const wrongInfoDilevered = document.querySelector(".input-container-wrong");
const fullName = document.querySelector("#fullName");
const subject = document.querySelector("#subject");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const valdationMsgName = document.querySelector("#valdationMsgName");
const valdationMsgSubject = document.querySelector("#valdationMsgSubject");
const valdationMsgEmail = document.querySelector("#valdationMsgMail");
const valdationMsgMessage = document.querySelector("#valdationMsgMessage");
const message = document.querySelector(".thanks-messege");
const validationInput = [fullName, subject, emailInput, messageInput];

const somethigWentWrong =
    ' <div class="wrong-messege-container"> <div class="wrong-messege"> <p> Ops Ops OPs!!!<br />Somethig Went Wrong <br />Please <strong>Reload</strong> The Page Again</p><a href="">Reload</a></div></div>';
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
    main,
    forms,
    submitBtn,
    wrongInfoDilevered,
    fullName,
    subject,
    emailInput,
    messageInput,
    valdationMsgName,
    valdationMsgSubject,
    valdationMsgEmail,
    valdationMsgMessage,
    somethigWentWrong,
    message,
    validationInput,
};
