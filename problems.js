//Problem no 1 Add a validation check to ensure that, a number is an integer. If it isn't, then issue an error message

function validateinteger(Number){
    if (!Number.isInteger(number)){
        console.log("Error: This is not an Integer")
    }
    else{
        console.log("This is an Integer", number )
    }
}


//Problem no 2 Write a js program to find maximum between two numbers.

function greaternumber( num1=30, num2=80){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}

const number1=23;
const number2=30;
const maxnumber = greaternumber(number1, number2);
console.log("Greater number is ", maxnumber);
