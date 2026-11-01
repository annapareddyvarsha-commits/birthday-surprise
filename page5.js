
const video = document.getElementById("birthdayVideo");

const playButton = document.getElementById("playButton");

const continueButton = document.getElementById("continueButton");

const message = document.getElementById("message");

// Play video

playButton.addEventListener("click", async function() {

    message.textContent = "";

    try {

        video.muted = false;
        video.volume = 1;

        await video.play();

        playButton.textContent = "⏸ Video Playing ❤️";

    } catch(error) {

        console.error(error);

        message.textContent =
            "Video could not play. Please check the video file.";

    }

});

// When video is paused

video.addEventListener("pause", function() {

    if (!video.ended) {
        playButton.textContent = "▶ Play Birthday Video 💗";
    }

});

// When video starts

video.addEventListener("playing", function() {

    playButton.textContent = "⏸ Video Playing ❤️";

});

// When video finishes

video.addEventListener("ended", function() {

    playButton.textContent = "↻ Play Again ❤️";

    message.textContent =
        "Hope you loved this beautiful surprise! 💕";

});

// Video error

video.addEventListener("error", function() {

    message.textContent =
        "Unable to load video. Check the video file.";

});

// Continue to Page 6

continueButton.addEventListener("click", function() {

    window.location.href = "page6.html";

});
