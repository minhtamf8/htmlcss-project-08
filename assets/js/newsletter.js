const modal = document.querySelector(".newsletter-modal");
const closeBtn = document.querySelector(".newsletter-close");
const overlay = document.querySelector(".newsletter-overlay");

const isClosed = localStorage.getItem("newsletter_closed");

if (!isClosed) {
    setTimeout(() => {
        modal.classList.add("show");
    }, 5000);
}

function closeModal() {
    modal.classList.remove("show");

    localStorage.setItem("newsletter_closed", "true");
}
closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
