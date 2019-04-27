document.getElementById('calculate').addEventListener('click',()=>{
let opt = document.getElementById('opt').value;
Operation(opt);
});

document.getElementById('clear').addEventListener('click',()=>{
  Clear();
});

Operation=(opt)=>{
let num1 = parseInt(document.getElementById('num1').value);
let num2 =parseInt(document.getElementById('num2').value);
if(num1>0 && num2>0){
switch(opt){
    case "add":
    Add(num1 , num2);
    break;
    case "sub":
    Sub(num1 , num2);
    break;
    case "div":
    Div(num1 , num2)
    break; 
    case "mul":
    Mul(num1 , num2)
    break;
}
}else{
Result(0); 
}
}

Add =(num1,num2)=>{
  let sum = num1 + num2;
 Result(sum);
}

Sub=(num1, num2)=>{
  let dif = num1- num2;
  Result(dif);
}

Div=(num1 , num2)=>{
  let quo = num1 /num2;
  Result(quo)
}

Mul=(num1 , num2)=>{
  let pro = num1 *num2;
  Result(pro);
}

Clear=()=>{
document.getElementById('num1').value="";
document.getElementById('num2').value="";
document.getElementById('result').innerHTML=""
document.getElementById('fact').innerHTML=""
}
Result=res=>{
let ress = document.getElementById('result');
ress.innerHTML= res;
NumberFact(res)
}

NumberFact=(num)=>{
$.get(`http://numbersapi.com/${num}`, data => {
  let fact = data;
 document.getElementById('fact').innerHTML=fact;
})
}