var a=document.querySelector("#txt1");
var b=document.querySelector("#txt2");
var btn=document.querySelector("#btn");
document.querySelector('#btn2').addEventListener("click",()=>{
    let convert=0.3048*prompt("convert height (feets to meters)");
alert(convert.toFixed(2));
})

btn.addEventListener("click",bmi);
function bmi(){
    let h=a.value;
    let w=b.value;
    let ab=(w/(h*h));
   let ans=ab.toFixed(2);
    
    if(h==null||h==''&& w==''||w==null){
        alert("filled the given parameters");
    }
    else{
    if(ans<=18.4){
    document.querySelector('#div3').innerHTML=`<center><strong style="color:black">${ans} <br>Underweight</strong><center>`;
        document.body.style.backgroundColor = '#DAF7A6 ';
    }
        else if(ans>=18.5&&ans<=24.9){
    document.querySelector('#div3').innerHTML=`<center><strong>${ans} <br>Normal<strong></center>`;
    document.body.style.backgroundColor = 'green';
    }
        else if(ans>=25.0&&ans<=29.9){
            //console.log("hi");
    document.querySelector('#div3').innerHTML=`<center><strong> ${ans} <br>Overweight</strong></center>`;
        document.body.style.backgroundColor = '#FFC300';
    }	
        else{
            //console.log("hi");
        document.querySelector('#div3').innerHTML=`<center><strong style="background-color:red">${ans} <br>Obese</strong></center>`;
        document.body.style.backgroundColor = 'red';
        } 
}
    
}