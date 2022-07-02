let input=document.getElementById("name1");
console.log(input);
let btn=document.querySelector("button");
let tbody=document.getElementById("body1")
let table_body="";
btn.addEventListener("click",e=>{
   if(input.value==""){
    alert("plz fill data")
   }
   else{
    console.log(input.value);
    let edit=document.createElement("button");
    edit.setAttribute("type","submit");
    edit.textContent="edit";
    edit.className="OK"
    let dlt=document.createElement("button");
    dlt.setAttribute("type","submit");
    dlt.textContent="delete";
    dlt.className="OK"
     let td=document.createElement("td");
     let td1=document.createElement("td");
     let td2=document.createElement("td");
     let tr=document.createElement("tr");
     td.textContent=input.value;
     td1.appendChild(edit);
     td2.appendChild(dlt);
     tr.appendChild(td);
     tr.appendChild(td1);
     tr.appendChild(td2);
     tbody.appendChild(tr);
     input.value="";
     dlt.addEventListener("click",e=>{
        td2.parentElement.remove();
     })

     edit.addEventListener("click",e=>{

        var NewInput=document.createElement("input");
        NewInput.setAttribute("type","text");
        NewInput.value=td.textContent;
        NewInput.className="content";
        td.textContent="";
        td.appendChild(NewInput);
        var update=document.createElement("button");
        update.setAttribute("type","submit");
        update.textContent="update";
        edit.remove();
        update.className="OK"
        td1.appendChild(update);

        update.addEventListener("click",e=>{
            
            td.innerHTML=NewInput.value;
            td1.appendChild(edit);
            update.remove();
            console.log("hello");
            
         })


     })
    // console.log(update);
   }
 

   
})
