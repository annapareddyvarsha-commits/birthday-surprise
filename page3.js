
const popup = document.getElementById("popup");
const popupBody = document.getElementById("popupBody");
const closePopup = document.getElementById("closePopup");

const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const nextBtn = document.getElementById("nextBtn");

let openedGifts = new Set();

const giftContent = {

    1: `
        <h2>10 Reasons Why I Love You ❤️</h2>

        <ol class="reasons">
            <li>Your beautiful smile 😊</li>
            <li>The way you make me happy.</li>
            <li>Your cute little habits.</li>
            <li>Your caring heart.</li>
            <li>The way you understand me.</li>
            <li>Your lovely personality.</li>
            <li>You make ordinary days special.</li>
            <li>Your support and encouragement.</li>
            <li>Every little moment with you.</li>
            <li>Simply because you are YOU! 🥹❤️</li>
        </ol>
    `,

    2: `
        <h2>Your Beautiful Memories 📸</h2>

        <p style="margin-bottom:20px">
            Every picture has a little story. ❤️
        </p>

        <div class="memory-photos">
    <img src="photo1.jpeg" alt="Our memory 1">
    <img src="photo2.jpeg" alt="Our memory 2">
    <img src="photo3.jpeg" alt="Our memory 3">
    <img src="photo4.jpeg" alt="Our memory 4">
    </div>

        <p style="margin-top:20px">
            More memories to create together! 💗
        </p>
    `,

    3: `
        <h2>A Secret Message For You 💌</h2>

        <div class="secret-message">
           My Dear FIANCÉ 💝

               I love you today, tomorrow, and forever. ❤️

               You are not just someone special in my life; you are the person I want to share my entire life with, NANNA. ♾️💌💓

               LIFELONG NEKU NENU UNNA NANNA! 💗

               Deni gurinchi think cheyaku… NI 🫵 prathi adugulo nenu neeku thodu ga unta, bujji. Whether it's happy or sad, I'll always be there for you. ♥️

               I PROMISE YOU, NANNA! 🥺

               I dream of holding your hand, creating beautiful memories, and growing old together. 👩‍❤️‍👨💕

               I don't just want to be part of your happiness; I want to be your life partner, your biggest supporter, and your forever person. 💘

               Today, tomorrow, and for all the tomorrows to come… I CHOOSE YOU. ❤️

             FOREVER YOURS! 🫶💍
            <br><br>
                         Always keep smiling, my favourite human! ❤️

            <br><br>

                      <strong>Sending you unlimited hugs and kisses! 🥰</strong>
        </div>
    `
};

// Open gift
document.querySelectorAll(".openGift").forEach(button => {

    button.addEventListener("click", function() {

        const giftNumber = this.dataset.gift;

        popupBody.innerHTML = giftContent[giftNumber];

        popup.classList.add("show");

        if (!openedGifts.has(giftNumber)) {

            openedGifts.add(giftNumber);

            this.closest(".gift-card").classList.add("opened");

            this.innerText = "OPENED ❤️";

            updateProgress();
            celebrate();
        }
    });
});

// Close popup
closePopup.addEventListener("click", function() {
    popup.classList.remove("show");
});

// Close by clicking outside
popup.addEventListener("click", function(e) {
    if (e.target === popup) {
        popup.classList.remove("show");
    }
});

// Update gift progress
function updateProgress() {

    const total = openedGifts.size;

    progressText.innerText = total + " / 3 Gifts Opened";

    progressFill.style.width = (total / 3 * 100) + "%";

    if (total === 3) {

        document.getElementById("bottomMessage").innerText =
            "Yay! You opened all my little gifts! 🥹❤️";

        nextBtn.hidden = false;
    }
}

// Floating hearts
function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerText = "♥";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (12 + Math.random() * 18) + "px";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 700);

// Confetti celebration
function celebrate() {

    for (let i = 0; i < 25; i++) {

        const confetti = document.createElement("div");

        confetti.innerText = ["❤️", "💗", "✨", "🎉"][
            Math.floor(Math.random() * 4)
        ];

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";
        confetti.style.fontSize = "22px";
        confetti.style.zIndex = "20";
        confetti.style.pointerEvents = "none";
        confetti.style.transition = "transform 2s, opacity 2s";

        document.body.appendChild(confetti);

        requestAnimationFrame(() => {
            confetti.style.transform =
                `translateY(100vh) rotate(360deg)`;
            confetti.style.opacity = "0";
        });

        setTimeout(() => confetti.remove(), 2200);
    }
}

// Next page
function goNext() {
    window.location.href = "page4.html";
}
