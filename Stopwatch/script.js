const container = document.getElementById("container");
const hrs = document.getElementById("hrs");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

let time = 0;
let timer;
const incrementTimer = () => {

        time += 1;
        let timeInSecs = time;
        let hours = Math.floor(timeInSecs / 3600);
        timeInSecs -= (hours * 3600);
        let minutes = Math.floor(timeInSecs / 60);
        timeInSecs -= minutes * 60;
        let seconds = timeInSecs;
        sec.innerText = seconds;
        min.innerText = minutes;
        hrs.innerText = hours;
}
const startTimer = () => {

    timer = setInterval(incrementTimer, 1000);

}
const stopTimer = () => {
    clearInterval(timer);
}

const resetTimer = () => {
    clearInterval(timer);
    time =0;
    sec.innerText = "00";
    min.innerText = "00";
    hrs.innerText = "00";

}
start.addEventListener('click',startTimer);
stop.addEventListener('click',stopTimer);
reset.addEventListener('click',resetTimer);

