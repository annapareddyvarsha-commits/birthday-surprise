
const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openBtn");

let isOpen = false;

// Open and close envelope
openBtn.addEventListener("click", function () {
    if (!isOpen) {
        envelope.querySelector(".envelope").classList.add("open");
        openBtn.innerText = "❤️ LET'S BEGIN OUR JOURNEY";
        isOpen = true;
    } else {
        // Move to the next surprise page
        window.location.href = "yesno.html";
    }
});

// Floating hearts animation
function createHeart() {
    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "♥";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (12 + Math.random() * 20) + "px";
    heart.style.animationDuration = (4 + Math.random() * 5) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);
}

setInterval(createHeart, 500);
