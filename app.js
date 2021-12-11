const lines =document.querySelectorAll(".line");
const button = document.getElementsByClassName("btn")[0]
let save =true;
const saveEdit = () =>{
    if (save){
   button.innerHTML = 'Edit'
   save = false
    }else{
        button.innerHTML = 'Save'
        save = true
    }
    button.classList.toggle("edit-btn")
    lineControls()
}

const lineControls = () =>{
    lines.forEach (line => {
        if(!save){
            line.setAttribute("disable" ,true)
        }else{
            line.setAttribute("disabled")
        }
        lines.setAttribute("maxlength",lineoffsetWidth/12);
    
    })
}

// lineControls();
const setLinesMaxWidth = () =>{
    lines.forEach(line => {
        line.setAttribute("maxlength",lineoffsetWidth/12);
    })
}
setLinesMaxWidth();
button.addEventListner("click",saveEdit);

window.addEventListener("resize",setLinesMaxWidth);