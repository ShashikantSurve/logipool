function armstrong(){
    let n=parseInt(prompt("Enter a number : "));
    let sum=0;
    while(n!=0){
        let x=n%10;
        sum=sum+x*x*x;
        n=parseInt(n/10);
    }
    console.log(sum);
}