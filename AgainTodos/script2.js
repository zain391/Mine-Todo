let todoArr = [];
document.getElementById("todoForm").addEventListener("submit", (e) => {
    e.preventDefault();
    let todoInput = document.getElementById("todoInput").value;
    todoArr.push(todoInput);
    let todoUnList = document.getElementById("todoUnList");
    let newItem = document.createElement("li");
    newItem.innerText = todoInput;
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    let updateBtn = document.createElement("button");
    updateBtn.innerText = "Update";
    todoUnList.appendChild(newItem);
    newItem.appendChild(delBtn);
    newItem.appendChild(updateBtn);
    document.getElementById("todoInput").value = "";
});

function createingDelBtn(todoInput) {
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.onclick=function(){
        let fillterdArr=todoArr.filter((arrayItems)=>{
            return todoInput != arrayItems;
        })
        todoArr=fillterdArr;
    }
    return delBtn;
}

function updateSetting(todoInput){
    // let todoInputVal = document.getElementById("todoInput");
    let updateBtn = document.createElement("button");
    let addBtn=document.getElementById("addBtn");
    let updateBtn=document.getElementById("updateBtn");
    updateBtn.innerText = "Update";
    updateBtn.onclick=function(){
        for(let i=0; i<todoArr.length; i++){
          
            if(todoArr[i]===todoInput){
                todoArr[i]=document.getElementById("todoInput").value;
            }
        }
    }
    
    addBtn.style.display="none";
    updateBtn.style.display="inline";
    return updateBtn;
}

function renderMytodoList(){

}



