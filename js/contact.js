// ----------------------------------------------
// ------------Validation Functions______________
// ----------------------------------------------
function checkLength(requiredInput, inputLength) {
    if (requiredInput.length <= inputLength) {
        return true;
    } else {
        return false;
    }
}
function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

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

function checkInputsName() {
    if (checkLength(fullName.value, 4)) {
        valdationMsgName.style.display = "block";
        fullName.classList.add("input-container-wrong");
        fullName.style.border = "red 2px solid";
    } else {
        valdationMsgName.style.display = "none";
        fullName.style.border = "green 2px solid";
        fullName.classList.remove("input-container-wrong");
        return true;
    }
}

function checkInputsSubject() {
    if (checkLength(subject.value, 14)) {
        valdationMsgSubject.style.display = "block";
        subject.classList.add("input-container-wrong");
        subject.style.border = "red 2px solid";
    } else {
        valdationMsgSubject.style.display = "none";
        subject.classList.remove("input-container-wrong");
        subject.style.border = "green 2px solid";
    }
}
function checkInputsEmail() {
    if (validateEmail(emailInput.value)) {
        valdationMsgEmail.style.display = "none";
        emailInput.classList.remove("input-container-wrong");
        emailInput.style.border = "green 2px solid";
    } else {
        valdationMsgEmail.style.display = "block";
        emailInput.classList.add("input-container-wrong");
        emailInput.style.border = "red 2px solid";
    }
}
function checkInputsMessage() {
    if (checkLength(messageInput.value, 24)) {
        valdationMsgMessage.style.display = "block";
        messageInput.classList.add("input-container-wrong");
        messageInput.style.border = "red 2px solid";
    } else {
        valdationMsgMessage.style.display = "none";
        messageInput.classList.remove("input-container-wrong");
        messageInput.style.border = "green 2px solid";
    }
}
fullName.addEventListener("keyup", checkInputsName);
subject.addEventListener("keyup", checkInputsSubject);
emailInput.addEventListener("keyup", checkInputsEmail);
messageInput.addEventListener("keyup", checkInputsMessage);

forms.forEach(function (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();
    });
});

submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
});

function checkOverallValidity() {
    const isFullNameValid = !checkLength(fullName.value, 4);
    const isSubjectValid = !checkLength(subject.value, 14);
    const isEmailValid = validateEmail(emailInput.value);
    const isMessageValid = !checkLength(messageInput.value, 24);

    if (isFullNameValid && isSubjectValid && isEmailValid && isMessageValid) {
        submitBtn.style.opacity = "1";
        submitBtn.style.backgroundColor = "green";
        thanksMessage();
    } else {
        submitBtn.style.backgroundColor = "red";
        submitBtn.style.opacity = "0.6";
    }
}

fullName.addEventListener("keyup", checkOverallValidity);
subject.addEventListener("keyup", checkOverallValidity);
emailInput.addEventListener("keyup", checkOverallValidity);
messageInput.addEventListener("keyup", checkOverallValidity);
submitBtn.addEventListener("click", checkOverallValidity);

const message = document.querySelector(".thanks-messege");
// const newMessage = document.querySelector(".new-message");
function thanksMessage() {
    submitBtn.addEventListener("click", function () {
        message.classList.add("thanks-messege-animation");
        fullName.value = "";
        subject.value = "";
        emailInput.value = "";
        messageInput.value = "";
        submitBtn.style.display = "none";
    });
}
