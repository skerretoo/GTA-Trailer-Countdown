function updateCountdown() {
    const countdownDate = new Date("December 5, 2023 09:00:00 GMT-0500").getTime();
    const now = new Date().getTime();
    const distance = countdownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    const countdownElement = document.getElementById("countdown1");
    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    let link;
    if (hours <= 17 && minutes <= 52 && seconds <= 30) {
        const content = document.getElementById('replaceJS');
        if (content) {
            src = document.createElement('script');
            src.src = 'script.js';
            src.async = true;
            src.onload = () => {
                console.log("script loaded.")
            }
            link = document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'style.css';
            fetch('/testingenv/replace/trailerout.html')
                .then(response => response.text())
                .then(data => {
                    content.innerHTML = data;
                    const head = document.head || document.getElementsByTagName('head')[0];
                    head.appendChild(link);
                    head.appendChild(src);
                })
            console.log("fetched to replacejs")
        } 
        return;
    } 
    setTimeout(updateCountdown, 1000);
}
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM active.");
    setTimeout(function () {
        console.log("Overlay disappearing.");
        document.body.classList.add("loaded");
    }, 500);
});
updateCountdown();