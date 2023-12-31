let input=document.querySelector("input");
let button=document.querySelector("button");
let ul=document.querySelector("ul");
button.addEventListener("click",function(){
    if(input.value===""){
        alert("you must write something")
    }else{

    let itmes=document.createElement("li");
    itmes.innerText=input.value;
    ul.appendChild(itmes);
    input.value="";

    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("del");
    itmes.appendChild(delbtn);  
    }

});

ul.addEventListener("click",function(event){
 if (event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
    }
})