//Problem no 1 Add a validation check to ensure that, a number is an integer. If it isn't, then issue an error message

function validateinteger(Number) {
    if (!Number.isInteger(number)) {
        console.log("Error: This is not an Integer")
    }
    else {
        console.log("This is an Integer", number)
    }
}


//Problem no 2 Write a js program to find aimum between two numbers.

function greaternumber(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}

const number1 = 23;
const number2 = 30;
const anumber = greaternumber(number1, number2);
console.log("Greater number is ", anumber);

//Problem 3  Write a js program to find aimum between three numbers

function greatestnumber(num1, num2, num3) {
    //math.max funtion is a function used to identify max value among all these
   return Math.max(num1,num2,num3);
}

const numb1 = 10;
const numb2 = 30;
const numb3 = 80;

const anumberis = greatestnumber(numb1, numb2, numb3);
console.log("The Greatest number is", anumberis)


//Problem 4 Write a js program to check whether a number is negative, positive or zero.

function checknumber(numberr){
    if(numberr>0){
        return "Positive"
        }
    else if( numberr<0) {
        return "Negative"
    }
    else{
        return "Zero"
    }
}

const aa= -10;
console.log(checknumber(aa));