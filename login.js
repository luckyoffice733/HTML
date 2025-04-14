
function userLogin(){
   try{
  var uname=  document.getElementById("un").value;
   var pd1 = document.getElementById("pwd").value;
   var pd2 = document.getElementById("cpwd").value;
  

if(pd1.length <=6  || pd2.length<=6){
  throw 'LoginError';
}else if(pd1 !== pd2){
  throw 'NotMatched';
}else{
  document.writeln("User  Login success fullly");
}
}catch(LoginError){
    var errorText = "password or confirm password  length should be of min 6 characters ";
        errorText +="Or Password and Confirm Passowrd not matched"    
    document.getElementById("demo").innerHTML=errorText;          
  }

}