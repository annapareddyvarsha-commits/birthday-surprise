
document.addEventListener("DOMContentLoaded", function () {

    const envelopes = document.querySelectorAll(".envelope");
    const popup = document.getElementById("popup");
    const letterContent = document.getElementById("letterContent");
    const closePopup = document.getElementById("closePopup");
    const progress = document.getElementById("progress");
    const nextBtn = document.getElementById("nextBtn");

    let opened = new Set();

    const letters = [
        {
            title: "A Special Message ❤️",
            message: "You are my favourite person, my happiness and my sweetest surprise. I feel lucky to have you in my life. ❤️"
        },
        {
            title: "Our Funny Memories 😂",
            message: "All our silly talks, teasing, funny fights and crazy moments make my days special!"
        },
        {
            title: "An Emotional Letter 🥹",
            message: "Even when we are far apart, you are always close to my heart. I miss you more than words can explain."
        },
        {
            title: "Our Beautiful Memories 📸",
            message: "Every picture reminds me of a beautiful moment. I hope we create thousands more memories together. ❤️"
        },
        {
            title: "One Last Surprise 🎁",
            message: "Your biggest birthday surprise is still waiting! I love you! ❤️"
        }
    ];

    envelopes.forEach(function (envelope) {

        envelope.addEventListener("click", function () {

            const index = Number(envelope.dataset.letter);

            if (!letters[index]) return;

            letterContent.innerHTML =
                "<h2>" + letters[index].title + "</h2>" +
                "<p>" + letters[index].message + "</p>";

            popup.classList.remove("show");
            void popup.offsetWidth;
            popup.classList.add("show");

            if (!opened.has(index)) {
                opened.add(index);
                envelope.classList.add("opened");
                progress.textContent =
                    opened.size + " / 5 Envelopes Opened";
            }

            if (opened.size === 5) {
                nextBtn.hidden = false;
            }

        });

    });

    closePopup.addEventListener("click", function () {
        popup.classList.remove("show");
    });

    popup.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.classList.remove("show");
        }
    });

    nextBtn.addEventListener("click", function () {
        window.location.href = "page5.html";
    });

});
