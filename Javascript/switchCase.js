function check(){
    let i=1;
    while(i!=0){
        alert("It's Working..");
        if(confirm("Do you want to continue...yes...or..no"))
        {
            
        }
        else{
            i=0;
        }

    }
    alert("Application has been close..!");
}
function checkConfirm(){
    let val=confirm("True or False : Ok for true and Cancel for False");
    console.log(val);
}
function getChoices(){
    let a=parseInt(prompt("Enter a value of a "));
    let b=parseInt(prompt("Enter a value of b "));
    let flag=1;
    while(flag!=0){
        let n=parseInt(prompt(" 1.Addition\n 2.Subtraction\n 3.Multiplication\n 4.Division\n 5.Exit"));
        switch(n){
            case 1:
                alert("Addition of A & B is "+(a+b));
                console.log(a+" + "+b+" = "+(a+b));
                break;
            case 2:
                alert("Subtraction of A & B is "+(a-b));
                console.log(a+" - "+b+" = "+(a-b));
                break;
            case 3:
                alert("Multiplication of A & B is "+(a*b));
                console.log(a+" * "+b+" = "+(a*b));
                break;
            case 4:
                alert("Division of A & B is  "+(a/b));
                console.log(a+" / "+b+" = "+(a/b));
                break;
            case 5:
                flag=0;
                break;
            default:
                alert("You have entered wrong choice !");
        }  
         let str=prompt("Do you want to continue...yes...or...no");
         if(str=="yes"){

         }
         else{
            flag=0;
         }
    }
    alert("Application has been Closed....");
}
// getChoices();