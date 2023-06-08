// Set the date and time for the countdown
const countDownDate = new Date("June 15, 2023 00:00:00").getTime();

// Update the countdown every second
const countdown = document.getElementById("countdown");
const x = setInterval(() => {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // When the countdown ends
  if (distance < 0) {
    clearInterval(x);
    countdown.innerHTML = "Now Open!";
  }
}, 1000);
