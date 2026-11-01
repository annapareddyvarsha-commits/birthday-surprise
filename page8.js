
const symbols = ["💛", "✨", "💜", "❤️", "🌟", "👑"];

function createSparkle() {

    const sparkle = document.createElement("div");

    sparkle.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

    sparkle.style.position = "fixed";

    sparkle.style.left = Math.random() * 100 + "vw";

    sparkle.style.bottom = "-30px";

    sparkle.style.fontSize = "23px";

    sparkle.style.pointerEvents = "none";

    sparkle.style.zIndex = "10";

    sparkle.animate(
        [
            {
                transform: "translateY(0)",
                opacity: 1
            },
            {
                transform: "translateY(-100vh)",
                opacity: 0
            }
        ],
        {
            duration: 5000,
            easing: "ease-out"
        }
    );

    document.body.appendChild(sparkle);

    setTimeout(function() {
        sparkle.remove();
    }, 5000);
}

// Floating golden sparkles

setInterval(createSparkle, 500);

// Go to final page

document.getElementById("finalButton").addEventListener(
    "click",
    function() {

        window.location.href = "page9.html";

    }
);
