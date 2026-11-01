
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

const warnings = [
    "Think once! 🤨",
    "Are you really sure? 🥺",
    "Please think again! ❤️",
    "Wrong answer, my love! 😂",
    "You cannot escape! 🙈",
    "Try YES once! 😘"
];

let count = 0;

function moveNoButton() {

    message.innerText = warnings[count % warnings.length];
    count++;

    const area = document.querySelector(".button-area");

    const maxX = area.clientWidth - noBtn.offsetWidth;
    const maxY = area.clientHeight - noBtn.offsetHeight;

    noBtn.style.position = "absolute";

    noBtn.style.left =
        Math.random() * Math.max(0, maxX) + "px";

    noBtn.style.top =
        Math.random() * Math.max(0, maxY) + "px";
}

noBtn.addEventListener("mouseenter", moveNoButton);

noBtn.addEventListener("touchstart", function(e) {
    e.preventDefault();
    moveNoButton();
});

yesBtn.addEventListener("click", function() {

    document.querySelector(".container").innerHTML = `
        <h1>YAYYYYY! 🥹❤️</h1>
        <div class="teddy">🥰💋</div>
        <h2>I knew you would say YES!</h2>
        <p style="margin:25px">
            You just made my day!<br>
            I love you so much! ❤️
        </p>
        <button onclick="location.href='page3.html'">
            NEXT SURPRISE 🎁
        </button>
    `;
});
