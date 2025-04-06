// script.js

const screenshots = [
    {
        src: "images/town.png",
        alt: "A local town",
        tag: "exploration"
    },
    {
        src: "images/world_map.jpg",
        alt: "World view",
        tag: "exploration"
    },
    {
        src: "images/combat.png",
        alt: "World view",
        tag: "combat"
    }
];

function renderGallery(filter = "all") {
    const gallery = document.querySelector(".gallery");
    if (!gallery) return;

    gallery.innerHTML = "";
    const filtered = filter === "all" ? screenshots : screenshots.filter(s => s.tag === filter);

    filtered.forEach(s => {
        const img = document.createElement("img");
        img.src = s.src;
        img.alt = s.alt;
        gallery.appendChild(img);
    });
}

function setupFilterButtons() {
    const section = document.querySelector(".screenshots");
    if (!section) return;

    const filters = ["all", "combat", "exploration"];
    const filterBar = document.createElement("div");
    filterBar.className = "filter-bar";

    filters.forEach(tag => {
        const btn = document.createElement("button");
        btn.textContent = tag.charAt(0).toUpperCase() + tag.slice(1);
        btn.dataset.filter = tag;
        btn.className = "filter-button";
        btn.addEventListener("click", () => renderGallery(tag));
        filterBar.appendChild(btn);
    });

    section.insertBefore(filterBar, section.querySelector(".gallery"));
}

document.addEventListener("DOMContentLoaded", () => {
    renderGallery();
    setupFilterButtons();
});