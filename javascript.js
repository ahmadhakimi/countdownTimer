const daysEL = document.getElementById('days');
const hoursEL = document.getElementById('hours');
const minsEL = document.getElementById('mins');
const secondEL = document.getElementById('second');


const newYears = '1 Jan 2021'

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds= (newYearsDate - currentDate) /1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours =Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds /60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEL.innerHTML = days;
    hoursEL.innerHTML = formatTime(hours);
    minsEL.innerHTML = formatTime(mins);
    secondEL.innerHTML = formatTime(seconds);

}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
// initial call 
countdown();

setInterval(countdown, 1000);