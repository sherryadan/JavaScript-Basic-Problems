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

// Problem 5 Write a js program to check whether a number is divisible by both 5 and 11 or not.?

function divnumber(numm){
    if (numm % 5 === 0 && numm % 11 === 0){
        return true;
    }
    else {
        return false;
    }
}

const b= 110;

if (divnumber(b)){
    console.log(b , "is divisible")
}
else {
    console.log(b, "is not divisible")
}


// Problem 6 Write a js program to check whether a number is even or odd.?

function evenorodd(anynum){
    if(anynum % 2 ===0){
        return true
    }
    else{
        return false
    }
}
  const evod=2;
  if(evenorodd(evod)){
    console.log(evod, "is an even number")
  }
  else{
    console.log(evod, "is an odd number")
  }


  // Problem 7 Write a js program to check whether character is an alphabet or not?

  function checkalphabet(character){
    const uppercase= character.toUpperCase();
    return uppercase >= "A" && uppercase <= "Z";
  }

  const alph = "2";
  if (checkalphabet(alph)){
    console.log("'", alph , "' is an alphabet")
  }
  else{
    console.log("'", alph , "' is not an alphabet")
  }
