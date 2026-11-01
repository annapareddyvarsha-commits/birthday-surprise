
const envelope = document.getElementById("envelope");

const openButton = document.getElementById("openLetter");

const restartButton = document.getElementById("restartButton");

const instruction = document.querySelector(".instruction");

let isOpen = false;

// Open Letter

openButton.addEventListener("click", function() {

    if (isOpen) return;

    isOpen = true;

    envelope.classList.add("open");

    openButton.style.display = "none";

    instruction.textContent =
        "Every word comes straight from my heart ❤️";

    restartButton.style.display = "inline-block";

    // Floating hearts and golden stars

    createFloatingHearts();

});

// Floating Effects

function createFloatingHearts() {

    const symbols = [
        "❤️",
        "💜",
        "💛",
        "✨",
        "👑",
        "💖",
        "⭐"
    ];

    for (let i = 0; i < 35; i++) {

        setTimeout(function() {

            const item = document.createElement("div");

            item.className = "floating";

            item.textContent =
                symbols[Math.floor(Math.random() * symbols.length)];

            item.style.left = Math.random() * 100 + "vw";

            item.style.fontSize =
                (18 + Math.random() * 20) + "px";

            item.style.animationDuration =
                (3 + Math.random() * 3) + "s";

            document.body.appendChild(item);

            setTimeout(function() {
                item.remove();
            }, 6000);

        }, i * 120);

    }

}

// Read Again

restartButton.addEventListener("click", function() {

    isOpen = false;

    envelope.classList.remove("open");

    openButton.style.display = "inline-block";

    restartButton.style.display = "none";

    instruction.textContent =
        "Open this letter and read what's in my heart 💌";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
