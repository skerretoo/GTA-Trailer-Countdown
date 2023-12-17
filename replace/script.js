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

    if (hours <= 17 && minutes <= 37 && seconds <= 30) {
        const content = document.getElementById('replaceJS');
        if (content) {
            fetch('/replace/trailerout.html')
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Failed to fetch trailerout.html. Status: ${response.status}`);
                    }
                    return response.text();
                })
                .then(data => {
                    const head = document.head || document.getElementsByTagName('head')[0];
                    const link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.type = 'text/css';
                    link.href = '/replace/style.css'; // Update the path
                    head.appendChild(link);

                    const script = document.createElement('script');
                    script.src = '/replace/script.js'; // Update the path
                    script.async = true;
                    script.onload = () => {
                        console.log("script loaded.")
                    };
                    head.appendChild(script);

                    content.innerHTML = data;
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
        return;
    }

    setTimeout(updateCountdown, 1000);
}
