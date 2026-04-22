document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("tradeForm");
    const confirmationMessage = document.getElementById("confirmationMessage");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            confirmationMessage.textContent = "Thank you for signing up for TradeTogether! Your information has been submitted.";

            form.reset();
        });
    }
});

const suggestionForm = document.getElementById("suggestionForm");
const suggestionMessage = document.getElementById("suggestionMessage");

if (suggestionForm) {
    suggestionForm.addEventListener("submit", function (event) {
        event.preventDefault();

        suggestionMessage.textContent =
            "Thank you for your suggestion! We will reach out to you soon.";

        suggestionForm.reset();
    });
}



const requestForm = document.getElementById("requestForm");
const requestMessage = document.getElementById("requestMessage");

if (requestForm) {
    requestForm.addEventListener("submit", function (event) {
        event.preventDefault();

        requestMessage.textContent =
            "Your request has been posted! We will help connect you with your community soon.";

        requestForm.reset();
    });
}
