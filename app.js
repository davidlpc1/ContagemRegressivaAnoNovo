const secondsText = document.querySelector('#seconds')
const minutesText = document.querySelector('#minutes')
const hoursText = document.querySelector('#hours')
const daysText = document.querySelector('#days')
const nextYearContainer = document.querySelector('#year')
const spinnerLoading = document.querySelector('#loading')
const countdownContainer = document.querySelector('#countdown')

const nextYear = Number(new Date().getFullYear()) + 1;
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`);
nextYearContainer.textContent = nextYear

const getTimeUnit = unit => unit < 10 ? '0' + unit : unit

function insertCountDownValues({ seconds, minutes, hours, days }) {
    secondsText.textContent = getTimeUnit(seconds)
    minutesText.textContent = getTimeUnit(minutes)
    hoursText.textContent = getTimeUnit(hours)
    daysText.textContent = getTimeUnit(days)
}

function updateCountDown() {
    const currentTime = new Date();
    const difference = newYearTime - currentTime;
    const days = Math.floor(difference / 1000 / 60 / 60 / 24);
    const hours = Math.floor(difference / 1000 / 60 / 60 ) % 24;
    const minutes = Math.floor(difference / 1000 / 60 ) % 60;
    const seconds = Math.floor(difference / 1000 ) % 60;
    insertCountDownValues({
        seconds, minutes, hours, days
    })

}

function handleCountdownDisplay() {
    spinnerLoading.remove();
    countdownContainer.style.display = 'flex'
}

setTimeout(handleCountdownDisplay,1000)
setInterval(updateCountDown,1000)