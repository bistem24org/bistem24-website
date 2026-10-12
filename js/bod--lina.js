```javascript
/* =========================================================
   BISTEM24 - LINA EZE PROFILE
   bod-lina.js
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const linaPage = document.querySelector(".lina-page");

    if (!linaPage) {
        return;
    }

    const profileImage = linaPage.querySelector(".lina-image");

    if (profileImage) {
        profileImage.addEventListener("error", function () {
            console.error(
                "Lina Eze's profile image could not be loaded. Check the image path."
            );
        });
    }

});
```