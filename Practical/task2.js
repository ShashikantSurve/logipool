function hotel(){
    let a;
    let order="";
    let choice;
    let flag=1;
    while(flag!=0){
        choice=parseInt(prompt("1.Rice Plate\n2.Tandoor\n3.Roti\n4.Exit\nEnter your choice : "));
        switch(choice){
            case 1:
                order=order = "\nRice Plate";
                break;
            case 2:
                order=order+"\nTandoor";
                break;
            case 3:
                order=order+ "\nRoti";
                break;
            case 4:
                let a=confirm("Do you want to continue : ");
                if(a==true){

                }else{
                    flag=0;
                }
                break;
            default:
                alert("You have enter wrong choicee ");
        }
        // let a=confirm("Do you want to continue : ");
        // if(a==true){

        // }else{
        //     flag=0;
        // }
    }
    alert("Thanks for visit !!\nYour orders : \n "+order);

}