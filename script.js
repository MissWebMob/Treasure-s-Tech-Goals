function updateTimeAndDay() {
    const now =new Date();
    const utcHours = now.getUTCHours().toString().padStart(2, '0');
    const utcMinutes = now.getUTCMinutes().toString().padStart(2, '0');
    const utcSeconds = now.getUTCSeconds().toString().padStart(2, '0');

    const utcTime = `${utcHours} : ${utcMinutes} : ${utcSeconds}`;

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[now.getUTCDay()];

    document.getElementById('timeUTC').textContent = utcTime;
    document.getElementById('dayOfWeek').textContent = dayOfWeek;

    // console.log(now);
    // console.log(utcTime);
    // console.log(dayOfWeek);
}

window.onload = updateTimeAndDay;


alert('Hello There!😍');
alert("Welcome to Treasure's Page😊 \nPlease zoom to 75% on your browser");

setTimeout(() => welcomeMessage.remove(), 5000);

alert('Happy New Month!🎉');

setTimeout(() => welcomeMessage.remove(), 5000);





