const newYears = '1 Jan 2023'

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = new Date(newYearsDate - currentDate) / 1000;   // datediff is a number in milliseconds
    
    const days = Math.floor(totalSeconds / 3600 / 24 );
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = totalSeconds % 60;

    console.log(days, hours, minutes, seconds % 3600);
}

// initial call
countdown();

setInterval(countdown, 1000);