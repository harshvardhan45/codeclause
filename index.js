function addWefield(){
    let newNode= document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows" ,3);


    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);

}

 function addNewAQField(){
    let newNode= document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);


    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);

}


//template wala functions using dom manipulation
function generatecv(){

let nameField = document.getElementById("nameField").value;
let nameT1=document.getElementById("nameT1");
 
nameT1.innerHTML =nameField; 
document.getElementById('nameT2').innerHTML=nameField;

document.getElementById("contactT").innerHTML =document.getElementById("contactField").value;


document.getElementById("addressT").innerHTML=document.getElementById("addressfield").value;


document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;
document.getElementById("linkedT").innerHTML=document.getElementById("linkedField").value;
document.getElementById("gitT").innerHTML=document.getElementById("gitField").value;


// objective
document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;


let wes=document.getElementsByClassName("weField");
let str = "";

for(let e of wes){
    str=str+`<li> ${e.value} </li>`;
}

document.getElementById("weT").innerHTML = str;

let aqs = document.getElementsByClassName("eqfield");
let str1 = "";
for(let e of aqs) {
    str1 += `<li> ${e.value} </li>`;
}
document.getElementById("aqT").innerHTML = str1;



document.getElementById("cv-form").style.display="none";
document.getElementById("background-video").style.cssText="display:none";
document.getElementById("contact").style.cssText="display:none";
document.getElementById("info").style.cssText="display:none";

// document.getElementById("contact").style.display="none",
// document.getElementsByClassName("info").style.display="none";

document.getElementById("cv-template").style.display="block";

// document.getElementById("cv-template").style.display="block";


// document.getElementById("cv-template").style.display="block";

let file =document.getElementById("imgfield").files[0];
// console.log(file);
let reader = new FileReader()

reader.readAsDataURL(file);

// console.log(reader.result);
reader.onloadend=function(){
document.getElementById("imgT").src=reader.result;
};

}

function printcv(){
  window.print();
}