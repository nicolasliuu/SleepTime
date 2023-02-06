const button = document.querySelector("#button");
const calculator = document.querySelector("#calculator");
const sleepTimes = document.querySelector("#sleepTimes");



button.addEventListener("click", calculate);

function calculate() {
    let wakeUpTimes = [];
    let currentTime = new Date();
    currentTime.setMinutes(currentTime.getMinutes() + 14);
    for (let i = 1; i < 7; i++) {
        currentTime.setHours(currentTime.getHours() + 1);
        currentTime.setMinutes(currentTime.getMinutes() + 30);
        wakeUpTimes.push(currentTime.toLocaleTimeString("en-US",
        {hour: "2-digit", minute: "2-digit"}
        ))
    }
    sleepTimes.innerText = wakeUpTimes.join(", ");
    calculator.style.display = "block";
}