import { url, containerForCards, loder } from "./variables.js";

//----------------------------------------------------------------
//Items Containers
//----------------------------------------------------------------

async function getGames(articles) {
    try {
        for (let i = 3; i < 7; i++) {
            const wordCount = articles[i].description.length;
            const readingTime = Math.ceil(wordCount / 350);
            containerForCards.innerHTML += `
                <div class="card-container">
                    <img class="item-img" src="${articles[i].images[0].src}" alt="Article Img"/>
                    <div class="item-txt">
                        <h2>${articles[i].name}</h2>
                        <ul>
                        <li>Authour: ${articles[i].attributes[1].terms[0].name}</li>
                        <li>Published: ${articles[i].attributes[0].terms[0].name}</li>
                        <li>Category: ${articles[i].categories[0].name}</li>
                    </ul>
                        <p>${articles[i].description}</p>
                    </div>
                    <div class="main-btn-container">
                        <a href="/html/readmore.html?id=${articles[i].id}" class="main-btn"> Read More </a>
                    </div> 
                    <p class="words-counter"> Reading Time:<strong> ${readingTime}min</strong></p>
                    <div class="hover-it-container">
                    <i class="fa-solid fa-chevron-up hover-it"></i>
                    </div>
                </div>
            `;
        }
    } catch (err) {
        console.log(err);
    }
}
if (location) {
}
async function fetchAndDisplayAllGames() {
    try {
        const response = await fetch(url);
        const result = await response.json();
        const articles = result;
        getGames(articles);
    } catch (err) {
        console.log("err");
    }
}

fetchAndDisplayAllGames();

//----------------------------------------------------------------
//Slider imgs
//----------------------------------------------------------------

let index = 0;

async function displaySlider(slidercontaint) {
    const slider = document.querySelector(".slider-conent");

    function sliderUpdate() {
        try {
            slider.innerHTML = "";
            const currentItem = slidercontaint[index];
            if (currentItem) {
                // more work here
                slider.innerHTML = `
                <div id="slider-img" 
                style="
                background: url('${currentItem.images[0].src}'); 
                background-repeat: no-repeat; 
                background-size: cover; 
                background-position: center;
                filter: brightness(85%);
                ">
                    <div class="slider-title-container">
                            <div class="slider-txt-container">
                                    <div class="slider-title">
                                        <h2 >
                                            ${currentItem.name}
                                        </h2>
                                    </div>
                                    <div>
                                        <a href="/html/readmore.html?id=${currentItem.id}" class="slider-btn"> Read More 
                                        </a>
                                    </div>
                            </div>
                            <div class="aditional-imgs">
                            <a href="/html/readmore.html?id=${currentItem.id}"> <img class="img-changer" src="${currentItem.images[2].src}"></img>                            </a>
                            <a href="/html/readmore.html?id=${currentItem.id}"> <img class="img-changer" src="${currentItem.images[3].src}"></img>                            </a>
                            </div>  
                    </div>      
                </div>
               
                               
`;
            }
        } catch (e) {
            console.log("err");
        }
    }
    sliderUpdate();
    const rightBtn = document.querySelector(".right");
    const leftBtn = document.querySelector(".left");

    function sliderBtnUpdate() {
        leftBtn.style.opacity = index === 0 ? "0.2" : "1";
        leftBtn.onclick = function () {
            index = (index - 1 + 3) % 3;
            sliderUpdate();
            sliderBtnUpdate();
        };

        rightBtn.style.opacity = index === 2 ? "0.2" : "1";
        rightBtn.onclick = function () {
            index = (index + 1) % 3;
            sliderUpdate();
            sliderBtnUpdate();
        };
    }

    sliderBtnUpdate();
}

async function fetchSliders() {
    try {
        loder.style.display = "flex";
        const response = await fetch(url);
        const result = await response.json();
        const slidercontaint = result;
        loder.style.display = "none";
        displaySlider(slidercontaint);
    } catch (e) {
        console.log("err");
    }
}

fetchSliders();
