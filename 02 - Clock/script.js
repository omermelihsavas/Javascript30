const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function setDate() {
    const nowDate = new Date();

    const getSecond = nowDate.getSeconds();
    const secondDegrees = ((getSecond/60) * 360) - 90;
    second.style.transform = `rotate(${secondDegrees}deg)`;

    const getMinute = nowDate.getMinutes();
    const minuteDegrees = ((getMinute / 60) * 360) + ((getSecond/60) * 6) - 90 
    minute.style.transform = `rotate(${minuteDegrees}deg)`;

    const getHour = nowDate.getHours();
    const hourDegrees = ((getHour / 12) * 360) + ((getMinute / 60) * 30) - 90;
    hour.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);