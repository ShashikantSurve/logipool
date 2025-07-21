function average(){
    var java=parseInt(prompt("ENter the marks of java"));
    var python=parseInt(prompt("ENter the marks of python"));
    var html=parseInt(prompt("ENter the marks of html"));
    var cpp=parseInt(prompt("ENter the marks of cpp")); 
    var Javascript=parseInt(prompt("ENter the marks of Javascript"));
    let per=(java+python+html+cpp+Javascript)/5;
    if(per>90 && per<=100){
        alert("Grade A "+per+" %");
    }
    else if(per>80 && per<=90){
        alert("Grade B "+per+" %");
    }
    else if(per>70 && per<=80){
        alert("Grade C "+per+" %");
    }
    else if(per>40 && per<=70){
        alert("Grade D "+per+" %");
    }
    else{
        alert("Failed...!! "+per+" %");
    }
}