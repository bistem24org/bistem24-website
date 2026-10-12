
/* =========================================================
   BISTEM24 - BOARD OF DIRECTORS
   the-board.js
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
    const boardPage = document.querySelector(".board-page");

    if (!boardPage) {
        return;
    }

    // Profile cards with valid links work as normal links.
    // Cards without profile links are not clickable.
    const boardCards = boardPage.querySelectorAll(".board-card");

    boardCards.forEach(function (card) {
        if (
            card.classList.contains("board-card-no-link") ||
            card.getAttribute("href") === "#"
        ) {
            card.setAttribute("aria-disabled", "true");
            card.removeAttribute("href");
        }
    });
});
