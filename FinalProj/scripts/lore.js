document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.querySelector(".collapsible-toggle");
    const content = document.querySelector(".collapsible-content");

    if (toggleBtn && content) {
        toggleBtn.addEventListener("click", () => {
            const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";
            toggleBtn.setAttribute("aria-expanded", !isExpanded);
            content.hidden = isExpanded;
        });
    }
});