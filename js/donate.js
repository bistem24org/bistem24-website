
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("donate-form");

    if (!form) return;

    form.addEventListener("submit", function (event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            form.reportValidity();
            return;
        }

        // Let the browser submit the form to FormSubmit.
        // Do not prevent the default submission.
        const submitButton = document.getElementById("submit-btn");

        if (submitButton) {
            submitButton.querySelector("span").textContent = "Sending...";
            submitButton.disabled = true;
        }
    });
});
