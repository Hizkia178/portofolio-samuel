// Simple clock control logic
let hour = 10;
let minute = 0;
let isAM = true;

document.getElementById('hour-up').addEventListener('click', () => {
    hour = (hour + 1) % 12 || 12; // Keep hour in 12-hour format
    document.getElementById('hours').textContent = hour.toString().padStart(2, '0');
});

document.getElementById('hour-down').addEventListener('click', () => {
    hour = (hour - 1) % 12 || 12;
    document.getElementById('hours').textContent = hour.toString().padStart(2, '0');
});

document.getElementById('minute-up').addEventListener('click', () => {
    minute = (minute + 1) % 60;
    document.getElementById('minutes').textContent = minute.toString().padStart(2, '0');
});

document.getElementById('minute-down').addEventListener('click', () => {
    minute = (minute - 1 + 60) % 60;
    document.getElementById('minutes').textContent = minute.toString().padStart(2, '0');
});

document.getElementById('am-button').addEventListener('click', () => {
    isAM = true;
    document.getElementById('am-button').classList.add('active');
    document.getElementById('pm-button').classList.remove('active');
});

document.getElementById('pm-button').addEventListener('click', () => {
    isAM = false;
    document.getElementById('pm-button').classList.add('active');
    document.getElementById('am-button').classList.remove('active');
});
