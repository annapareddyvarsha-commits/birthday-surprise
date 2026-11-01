
const giftBox = document.getElementById("giftBox");

const openButton = document.getElementById("openButton");

const surpriseContent =
    document.getElementById("surpriseContent");

const instruction =
    document.getElementById("instruction");

const replayButton =
    document.getElementById("replayButton");

// Floating hearts

function createHearts() {

    const heart = document.createElement("div");

    heart.className = "heart-float";

    const hearts = [
        "❤️", "💜", "💗", "💖", "✨", "💛"
    ];

    heart.textContent =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
        (3 + Math.random() * 3) + "s";

    document.body.appendChild(heart);

    setTimeout(function() {
        heart.remove();
    }, 6000);
}

// Open Gift

function openGift() {

    giftBox.classList.add("open");

    openButton.disabled = true;

    openButton.textContent =
        "💖 Opening Your Surprise...";

    instruction.textContent =
        "A little magic is coming your way! ✨";

    setTimeout(function() {

        surpriseContent.classList.add("show");

        instruction.textContent =
            "Surprise! You are so special to me! ❤️";

        openButton.style.display = "none";

        for (let i = 0; i < 30; i++) {

            setTimeout(createHearts, i * 150);

        }

    }, 1200);
}

openButton.addEventListener("click", openGift);

giftBox.addEventListener("click", openGift);

// Replay Surprise

replayButton.addEventListener("click", function() {

    giftBox.classList.remove("open");

    surpriseContent.classList.remove("show");

    openButton.style.display = "inline-block";

    openButton.disabled = false;

    openButton.textContent =
        "🎁 OPEN YOUR GIFT 💖";

    instruction.textContent =
        "Tap the gift box to open your surprise! 💗";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
