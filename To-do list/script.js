const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function Add() {
  if (inputBox.value === "") {
    alert("Please add your task!!!");
  } else {
    let list = document.createElement("li");
    list.innerHTML = inputBox.value;
    listContainer.appendChild(list);
    let span=document.createElement("span");

    
    span.innerHTML="\u00d7";
    list.appendChild(span);
  }
  inputBox.value="";
  save();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        save();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        save();
    }
},false);

function save(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function show(){
    listContainer.innerHTML=localStorage.getItem("data");
}
show();



