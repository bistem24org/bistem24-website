
document.addEventListener("DOMContentLoaded", async function () {

    async function loadInclude(placeholderId, filePath) {
        const placeholder = document.getElementById(placeholderId);

        if (!placeholder) {
            return;
        }

        try {
            const response = await fetch(filePath);

            if (!response.ok) {
                throw new Error(
                    "Could not load " + filePath +
                    " (HTTP " + response.status + ")"
                );
            }

            placeholder.innerHTML = await response.text();

        } catch (error) {
            console.error(
                "BISTEM24 header/footer loading error:",
                error
            );
        }
    }

    await loadInclude(
        "header-placeholder",
        "includes/header.html"
    );

    await loadInclude(
        "footer-placeholder",
        "includes/footer.html"
    );

});
