/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".newsletter form");
    const emailInput = document.querySelector(".newsletter input[type='email']");
    const message = document.querySelector(".newsletter .message");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = emailInput.value.trim();

        if (email === "") {
            message.textContent = "Please enter a valid email address.";
            message.style.color = "red";
        } else {
            message.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
            message.style.color = "white";
        }

        emailInput.value = "";
    });
});
