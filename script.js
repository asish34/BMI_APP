'use strict';

const intHeight=0;

let weight=60;
let age=28;

document.querySelector('.num').value=intHeight;



document.querySelector('.plus').addEventListener('click',function(){
   weight++;
 
   document.querySelector('.weight-num').textContent=weight;
} );


document.querySelector('.minus').addEventListener('click',function(){
    weight--;
    document.querySelector('.weight-num').textContent=weight;
    
});


document.querySelector('.AGEP').addEventListener('click',function(){
  age++;
  document.querySelector('.age-num').textContent=age;
});

document.querySelector('.AGEM').addEventListener('click',function(){
 age--;
 document.querySelector('.age-num').textContent=age;
});


function BMI(){
    return weight/document.querySelector('.num').value**2;
}



document.querySelector('.btn').addEventListener('click',function(){
    let name=prompt('Enter your Name')
    let res=BMI();
    alert(`Hi ${name} your BMI is aproximately ${Math.round(res*10000)} Kg/m3`);
    console.log(res*10000);
});


