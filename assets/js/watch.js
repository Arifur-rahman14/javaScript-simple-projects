let digitalClock = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let am_pm = hours >= 12 ? 'pm' : 'am';

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("am_pm").innerHTML = am_pm;



    setTimeout(digitalClock, 500);
}

digitalClock();