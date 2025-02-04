// Set your target date here (format: YYYY-MM-DDTHH:mm:ss)
const targetDate = new Date("2025-05-28T12:00:00");

function updateCountdown() {
    const now = new Date();
    const timeDifference = targetDate - now;

    if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
        const seconds = Math.floor((timeDifference / 1000) % 60);

        document.getElementById("countDownSecond").textContent = `${seconds} seconds`;
        document.getElementById("countDownMinute").textContent = `${minutes} minutes`;
        document.getElementById("countDownHour").textContent = `${hours} hours`;
        document.getElementById("countDownDay").textContent = `${days} days`;

        setTimeout(updateCountdown, 1000);
    } else {
        // Countdown reached, update or hide elements as needed
        document.getElementById("countDownSecond").textContent = "Countdown reached!";
        document.getElementById("countDownMinute").style.display = "none";
        document.getElementById("countDownHour").style.display = "none";
        document.getElementById("countDownDay").style.display = "none";
    }
}

// Call the function to start the countdown
updateCountdown();
