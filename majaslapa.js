const bookingBtn = document.getElementById("openBooking");
const bookingModal = document.getElementById("bookingModal");
const closeBooking = bookingModal.querySelector(".close");

bookingBtn.addEventListener("click", () => {
    bookingModal.style.display = "block";
});

closeBooking.addEventListener("click", () => {
    bookingModal.style.display = "none";
});

window.addEventListener("click", e => {
    if (e.target === bookingModal) {
        bookingModal.style.display = "none";
    }
});

// Atlasām pogas un modālos logus
const modalBtns = document.querySelectorAll(".learn-more");
const modals = document.querySelectorAll(".modal");
const closeBtns = document.querySelectorAll(".modal .close");

// Atveram modālo logu
modalBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const modal = document.getElementById(btn.dataset.modal);
        modal.style.display = "block";
    });
});

// Aizveram modālo logu ar ×
closeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.closest(".modal").style.display = "none";
    });
});

// Aizver modālo logu, ja klikšķis ārpus
window.addEventListener("click", e => {
    modals.forEach(modal => {
        if(e.target === modal){
            modal.style.display = "none";
        }
    });
});

const toggleBtn = document.getElementById("themeToggle");
const body = document.body;


if(localStorage.getItem("theme") === "dark"){
    body.classList.add("dark");
}

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");

 
    if(body.classList.contains("dark")){
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});
