//Problem 08 1. Write a js program to print day of week name using switch case.?

const day = "Tuesday"

switch (day) {
    case "Monday":
        console.log("The day is Monday")
        break;

    case "Tuesday":
        console.log("The day is Tuesday")
        break;

    case "Wednesday":
        console.log("The day is Wednesday")
        break;

    case "Thursday":
        console.log("The day is Thursday")
        break;

    case "Friday":
        console.log("The day is Friday")
        break;

    case "Saturday":
        console.log("The day is Saturday")
        break;

    case "Sunday":
        console.log("The day is Sunday")
        break;
}


// Problem 9 Write a js program print total number of days in a month using switch case.?

function checkdaysinmonth(month) {

    switch (month) {
        case "Jan":
        case "Mar":
        case "May":
        case "July":
        case "Aug":
        case "Oct":
        case "Dec":
            return 31;

        case "Apr":
        case "June":
        case "Sep":
        case "Nov":
            return 30;

        case "Feb":
            return 28;

    }
}

const monthtocheck = "Feb";
const totaldays = checkdaysinmonth(monthtocheck);

console.log("Total days in ", monthtocheck, "are", totaldays)