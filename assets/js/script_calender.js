const currentDate = document.querySelector('.current-date'),
    daysTag = document.querySelector('.days'),
    prevNextIcon = document.querySelectorAll('.icons span');

let date = new Date();
currYear = date.getUTCFullYear();
currMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay(), //getting the first day of month
        lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting the last date of month
        lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay(), // getting the last day of month
        lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting the last day of previous month
    let liTag = "";

    for (let i = firstDayOfMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;

    }

    for (let i = 1; i <= lastDateOfMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
            && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;

    }

    for (let i = lastDayOfMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`;
    }


    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
}
renderCalendar();
prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => { //adding a click event on both icons 
        currMonth = icon.id === 'prev' ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11){ //if current month is less than 0 or greater than 11
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        }else{
            date = new Date();
        }
        renderCalendar();

    })
})