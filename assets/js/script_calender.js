const currentDate = document.querySelector(".current-date");
const daysTag = document.querySelector(".days");
const prevNextIcon = document.querySelectorAll(".icons span");

let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let firstDayOfMonth = new Date(currYear, currMonth, 1).getDate(),//getting first day of month
        lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate(),//getting last date of month
        lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay(),//getting last day of month
        lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();//getting last date of previous month
    let liTag = "";

    for (let i = firstDayOfMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateOfLastMonth - i +1}</li>`;
    }

    for (let i = 1; i <= lastDateOfMonth; i++) {
        let isToday = i == date.getDate() && currMonth == new Date().getMonth()
            && currYear == new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayOfMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayOfMonth +1}</li>`;
    }

    currentDate.innerHTML = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
}
renderCalendar();

prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => { //adding click event on both icons
        //If clicked icons is previous icon the decrement current month by 1 else increment it by 1
        currMonth = icon.id == "prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth  < 0 || currMonth > 11){ //if current month is less than 0 or greater than 11  
            //creating a new date of current year and month and pass it as date value
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear();// updating current year with new date year
            currMonth = date.getMonth();// updating current month with new date month 
        }else{ // else pass new Date as value as date value
            date = new Date();
        }
        renderCalendar();
    })
});