document.getElementById("skincare-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get user input
    const skinType = document.getElementById("skin-type").value;
    const concern = document.getElementById("concern").value;
    const preference = document.getElementById("preference").value;

    // Generate recommendation
    let recommendation = `Based on your skin type (${skinType}) and primary concern (${concern}), we recommend the following:
    - A gentle cleanser suitable for ${skinType} skin.
    - A hydrating serum to address ${concern}.
    - A lightweight moisturizer for daily use.
    `;

    if (preference) {
        recommendation += `Additionally, we will consider your preference for "${preference}" in selecting products.`;
    }

    // Display recommendation
    document.getElementById("recommendation-text").textContent = recommendation;
    document.getElementById("recommendation").classList.remove("hidden");
});

function resetForm() {
    document.getElementById("skincare-form").reset();
    document.getElementById("recommendation").classList.add("hidden");
}