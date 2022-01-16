var age = 10;
if(age > 18 || age <! 8 && age >28){
    console.log('You are not a kid');
}else{
    console.log('You are a kid');
}

function FunctionName(){
    for(var a=0;a<=15;a++){
        if(a % 2 != 0){
            console.log(a);
        }
    }
}
FunctionName();

var arr = [1,2,3,4,5,6,7,8,9,10];
arr.forEach(function(element){
    console.log(element);
})