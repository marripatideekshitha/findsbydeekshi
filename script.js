function searchProducts() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toLowerCase();
    const cards = document.querySelectorAll(".card");
    const noResults = document.getElementById("noResults");
    const clearIcon = document.getElementById("clearSearch");
    let hasResults = false;

    // Toggle clear icon visibility
    clearIcon.style.display = filter.length > 0 ? "block" : "none";

    cards.forEach(card => {
        const title = card.querySelector(".card-title").innerText.toLowerCase();
        const tag = card.querySelector(".tag").innerText.toLowerCase();

        if (title.includes(filter) || tag.includes(filter)) {
            card.classList.remove("hidden");
            hasResults = true;
        } else {
            card.classList.add("hidden");
        }
    });

    // Toggle No Results message
    noResults.style.display = hasResults ? "none" : "block";
}

function clearSearch() {
    const input = document.getElementById("searchInput");
    input.value = "";
    searchProducts();
    input.focus();
}

// Modal Logic
function showInstaModal() {
    const modal = document.getElementById("instaModal");
    if (!sessionStorage.getItem("modalShown")) {
        setTimeout(() => {
            modal.style.display = "flex";
            sessionStorage.setItem("modalShown", "true");
        }, 1500);
    }
}

function closeInstaModal() {
    document.getElementById("instaModal").style.display = "none";
}

// Initialize
window.onload = () => {
    showInstaModal();
};