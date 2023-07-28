//Problem 1. Write a js program to print day of week name using switch case.?

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


// Problem 2 Write a js program print total number of days in a month using switch case.?

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


// Problem 3 Write a js program to check whether an alphabet is vowel or consonant using switch case.


function checkalphabet(character) {
    const uppercase = character.toUpperCase();
    switch (uppercase) {
        case "A":
        case "E":
        case "I":
        case "O":
        case "U":
            return "is Vowel"

        default:
            return "is consonant"


    }
}

const alphtocheck = "V";
const check = checkalphabet(alphtocheck);
console.log("This", alphtocheck, check)

// Problem 4. Write a js program to find maximum between two numbers using switch case.

function findmax(value1, value2) {
    let max;
    switch (true) {
        case value1 > value2:
            max = value1;
            break;

        case value2 > value1:
            max = value2;
            break;

        default:
            max = "Both values are equal"

    }
    return max;
}

const numbe1 = 10;
const numbe2 = 9;

const greaternum = findmax(numbe1, numbe2);
console.log(greaternum, "is greater ")

// Problem 5. Write a js program to check whether a number is even or odd using switch case.

function checknum(val) {
    switch (val % 2) {
        case 0:
            return "Even"

        default:
            return "Odd"

    }
}

const oddoreven= 11;
const checknumbers = checknum(oddoreven);
console.log(oddoreven, "is an", checknumbers , "number")