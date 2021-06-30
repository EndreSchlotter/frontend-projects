// list of months
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

// list of weekdays
const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// here we can set the length of the giveaway
let plusDay = 10;

// set future date
const futureDate = new Date(tempYear, tempMonth, tempDay + plusDay, 11, 30, 0)

const year = futureDate.getFullYear(); //2021
const hour = futureDate.getHours(); //8
const minutes = futureDate.getMinutes(); //30
const date = futureDate.getDate(); //24
let month = futureDate.getMonth(); // * 
let weekday = futureDate.getDay(); // *

//* to show month and weekday we use our arrays
month = months[month]; // jun
weekday = weekdays[weekday] // thursday

giveaway.textContent = `giveaway ends on ${weekday},
 ${date} ${month} ${year} ${hour}:${minutes}am`;

// future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
    const today = new Date().getTime();
    const timeDiff = futureTime - today;
    // 1s = 1000ms
    // 1min = 60s
    // 1hr = 60min
    // 1d = 24hr

    // values in ms
    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;
    const oneSecond = 1000;

    // calculate all values
    let days = Math.floor(timeDiff / oneDay);
    let hours = Math.floor((timeDiff % oneDay) / oneHour);
    let minutes = Math.floor((timeDiff % oneHour) / oneMinute);
    let seconds = Math.floor((timeDiff % oneMinute) / oneSecond);

    // set values array
    const values = [days, hours, minutes, seconds];

    function format(item) {
        if(item < 10) {
            return item = `0${item}`;
        }
        return item;
    }

    items.forEach( (item, index) => {
        item.innerHTML = format(values[index]);
    });
    if(timeDiff < 0){
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`;
    }
}

// countdown

let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();