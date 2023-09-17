const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const currentDay = currentDate.getDate();

document.querySelector('.calendar-month').innerText = months[currentDate.getMonth()];
document.querySelector('.calendar-year').innerText = currentYear;


let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
let week = document.createElement('div');
week.classList.add('calendar-day-numbers-row');

for (i = 1; i<=daysInMonth; i++) {
    let day = document.createElement('span');
    day.classList.add('calendar-day-number');
    day.innerText = i;
    (i == currentDay) && day.classList.add('calendar-day-number--current');
    week.append(day);

    if (new Date(currentYear, currentMonth, i).getDay() == 0 || i == daysInMonth) {
        document.querySelector('.calendar-day-numbers').append(week);

        if ( i != daysInMonth) {
            week = document.createElement('div');
            week.classList.add('calendar-day-numbers-row');
        }
    }
}
