//3d products full screen function
const fullScreenBtns = document.querySelectorAll('.full-screen');
const pImgBoxes = document.querySelectorAll('.p-img-box');

fullScreenBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const pImgBox = pImgBoxes[index];

        if (!document.fullscreenElement) {
            if (pImgBox.requestFullscreen) {
                pImgBox.requestFullscreen();
            } else if (pImgBox.webkitRequestFullscreen) {
                pImgBox.webkitRequestFullscreen();
            } else if (pImgBox.msRequestFullscreen) {
                pImgBox.msRequestFullscreen();
            }

            btn.innerHTML = '<i class="fa-regular fa-compress"></i>';
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) { 
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }

            btn.innerHTML = '<i class="fa-regular fa-expand"></i>';
        }
    });
});

//benefit content show and hide
const buttons = document.querySelectorAll(".benefit-btn");
const contentBoxes = document.querySelectorAll(".benefit-content-box");

// Add click event listeners to all buttons
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        buttons.forEach((btn) => btn.classList.remove("active"));

        contentBoxes.forEach((box) => (box.style.display = "none"));

        button.classList.add("active");

        const targetContentId = button.id.replace("-btn", "-content");
        const targetContentBox = document.getElementById(targetContentId);
        if (targetContentBox) {
            targetContentBox.style.display = "block";
        }
    });
});

//FAQS sections
document.addEventListener("DOMContentLoaded", function () {
    const faqToggles = document.querySelectorAll(".faq-toggle");
  
    faqToggles.forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const faqItem = toggle.parentElement;
  
        document.querySelectorAll(".faq-item").forEach((item) => {
          if (item !== faqItem) {
            item.classList.remove("active");
            item.querySelector(".faq-content").style.display = "none";
            item.querySelector(".faq-toggle").classList.remove("active");
          }
        });
  
        const content = toggle.nextElementSibling;
        faqItem.classList.toggle("active");
        toggle.classList.toggle("active");
        content.style.display =
          content.style.display === "block" ? "none" : "block";
      });
    });
  });

//dropdown menu in small device
document.getElementById("dropdown-link").addEventListener("click", function (event) {
    event.preventDefault();
    const dropdownMenus = document.querySelectorAll(".dropdown-menu");

    dropdownMenus.forEach((dropdownMenu) => {
        if (dropdownMenu.style.display === "block") {
            dropdownMenu.style.display = "none";
        } else {
            dropdownMenu.style.display = "block";
        }
    });
});