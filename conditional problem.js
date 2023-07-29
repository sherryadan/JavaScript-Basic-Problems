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

const oddoreven = 11;
const checknumbers = checknum(oddoreven);
console.log(oddoreven, "is an", checknumbers, "number")



// 6. Write a js program to check whether a number is positive, negative or zero using switch case.

function stateofnumber(snum) {
    switch (true) {
        case snum > 0:
            return "Positive"

        case snum < 0:
            return "Negative"

        default:
            return "Zero"
    }
}
const valueofsnum = -10;
const checkstate = stateofnumber(valueofsnum);
console.log(valueofsnum, "is a", checkstate, "number")

// 7. Write a js program to find roots of a quadratic equation using switch case.

function findroota(a, b, c) {
    let discriminant = b ^ 2 - 4 * a * c
    let roottype;
    switch (true) {

        case discriminant > 0:
            roottype = "Two Real and Distinct"
            // root 1 and root 2 because it has +- values a in quadratic formula 
            let root1 = -b + Math.sqrt(discriminant) / 2 * a;
            let root2 = -b - Math.sqrt(discriminant) / 2 * a;

            return [root1, root2];


        case discriminant == 0:
            roottype = "Two Real and Equal"

            let singleroot = -b / 2 * a; //doesnot contains sq root part because its value is zero
            return [singleroot];


        default:
            ootType = "Complex Roots";
            let realPart = -b / (2 * a);  //the real part of quadratic formula
            let imaginaryPart = Math.sqrt(-discriminant) / (2 * a); // the aiota part of quadratic formula 
            let root1Complex = realPart + " + " + imaginaryPart + "i";
            let root2Complex = realPart + " - " + imaginaryPart + "i";
            return [root1Complex, root2Complex];

    }
}


// 8. Write a js program to create Simple Calculator using switch case.

// 9. Write a js program to input any character and check whether it is alphabet, digit or special character.

// 10. Write a js program to check whether a character is uppercase or lowercase alphabet.

// 11. Write a js program to input week number and print week day.

// 12. Write a js program to input month number and print number of days in that month.
