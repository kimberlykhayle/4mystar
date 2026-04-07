document.addEventListener('DOMContentLoaded', function() {
    const audio = document.querySelector("#myAudio");

    // Play audio immediately (or you can call this on a button click)
    audio.play().catch(() => {
        // Autoplay might fail on some devices; user interaction is required
        console.log("Audio blocked by browser; requires user interaction");
    });
});
