//external js file
//default funtions with no argument/parameters/variables
function sayHello(){
    document.writeln("welcome to functions");
}

function greeting(){
    console.log("welcome to functions --using console");
}

function msg(){
    alert('hello world');
}

//funtions with parameter/arguments/variables
function addition(a,b){
    var res = a+b;
    document.writeln("sum  of two numbers : ",res)
    alert("sum  of two numbers : "+res);
    console.log("sum  of two numbers : "+res);
}


//funtion with return type using return keyword
function add(x,y){  //called function
   return  x+y;  //here we are return an value;
}

//function with default value for the parameter
function test(a,b=10){
   return a+b;
}

