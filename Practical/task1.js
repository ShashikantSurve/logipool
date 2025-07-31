var isVal=true;
function toggle(){

    isVal= !isVal;

    if(isVal==true){
        document.getElementById("name").innerHTML="Shashikant";
    }else{
        document.getElementById("name").innerHTML="Suraj";
    }
}