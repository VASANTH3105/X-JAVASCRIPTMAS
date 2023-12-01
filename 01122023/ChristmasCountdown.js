const countdownDisplay = document.getElementById("countdown-display")

function renderCountdown(){
    const christmas = Date.parse(new Date('December 25, 2023'));
    const today = Date.now();
    const secLeft = (christmas - today) / 1000;
    const secondsInADay = 86400;
    const daysLeft = Math.floor(secLeft / 86400);
    return daysLeft;
}

countdownDisplay.textContent = renderCountdown();

