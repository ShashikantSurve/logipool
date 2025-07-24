function getChoices(){
    let a=parseInt(prompt("Enter a value of a "));
    let b=parseInt(prompt("Enter a value of b "));
    let n=parseInt(prompt(" 1.Addition\n 2.Subtraction\n 3.Multiplication\n 4.Division"));
    switch(n){
        case 1:
            console.log(a+" + "+b+" = "+(a+b));
            break;
        case 2:
            console.log(a+" - "+b+" = "+(a-b));
            break;
        case 3:
            console.log(a+" * "+b+" = "+(a*b));
            break;
        case 4:
            console.log(a+" / "+b+" = "+(a/b));
            break;
    }
}
// getChoices();