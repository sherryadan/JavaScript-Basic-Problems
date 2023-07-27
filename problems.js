//Problem no 1 Add a validation check to ensure that, a number is an integer. If it isn't, then issue an error message
var number =4;
function validateinteger(number){
    if (!Number.isInteger){
        console.log("Error: This is not an Integer")
    }
    else{
        console.log("This is an Integer", number )
    }
}
