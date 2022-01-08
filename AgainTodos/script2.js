let todoArr=[];
document.getElementById("todoForm").addEventListener("submit",(e)=>{
    e.preventDefault();
    let todoInput=document.getElementById("todoInput").value;
    todoArr.push(todoInput);
    

});
function  creatingnewListItem(todoInput){
    let newItem=document.createElement("li");
    newItem.innerText=todoInput;
}
