function calc(callback){
    var a,b, c;
  a = parseInt(document.getElementById("num1").value);
  b = parseInt(document.getElementById("num2").value);
  c = callback(a, b);
  document.getElementById("result").value = c;
}
function add(a, b){
    return a+b;
}
function sub(a, b){
    return a-b;
}
function pro(a, b){
    return a*b;
}
function div(a, b){
    return a/b;
}
function rem(a, b){
    return a%b;
}
