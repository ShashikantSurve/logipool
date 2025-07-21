function evenOdd(){
    var a= prompt("enter the even odd");
    let num=parseInt(a);
    if(num%2==0)
    {
        alert("number is even");  
    }
    else
    {
        alert("num is odd");
    }

}
function equal(){
    let num=10;
    if(prompt("Enter the number: ")==num){
        alert("Both values are same!!! ");
    }
    else{
        alert("Both values are different!!!");
    }
}