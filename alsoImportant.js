const targetDate = new Date("2023-12-01T00:00:00");

function updateCountdown() {
    const now = new Date();
    const timeDifference = targetDate - now;

    if (timeDifference > 0) {
        const seconds = Math.floor((timeDifference / 1000) % 60);
        const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
        const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);

        document.getElementById("countDownSecond").textContent = `${seconds} seconds`;
        document.getElementById("countDownMinute").textContent = `${minutes} minutes`;
        document.getElementById("countDownHour").textContent = `${hours} hours`;

        setTimeout(updateCountdown, 1000);
    } else {
        // Countdown reached, update or hide elements as needed
        document.getElementById("countDownSecond").textContent = "Countdown reached!";
        document.getElementById("countDownMinute").style.display = "none";
        document.getElementById("countDownHour").style.display = "none";
    }
}

// Call the function to start the countdown
updateCountdown();