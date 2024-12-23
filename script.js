document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle Theme";
    toggleButton.style.margin = "1rem";
    document.body.prepend(toggleButton);

    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
    });
});
