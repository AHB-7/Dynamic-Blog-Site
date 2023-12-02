// ----------------------------------------------
// ------------Validation Functions______________
// ----------------------------------------------
import {
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
    message,
    validationInput,
} from "./variables.js";
const valdationFunction = [
    checkInputsName,
    checkInputsSubject,
    checkInputsEmail,
    checkInputsMessage,
];
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

validationInput.forEach((input, index) => {
    input.addEventListener("keyup", valdationFunction[index]);
});

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
validationInput.forEach((input) => {
    input.addEventListener("keyup", checkOverallValidity);
});

submitBtn.addEventListener("click", checkOverallValidity);

function thanksMessage() {
    submitBtn.addEventListener("click", function () {
        message.classList.add("thanks-messege-animation");
        validationInput.forEach((input) => (input.value = ""));
        submitBtn.style.display = "none";
    });
}
