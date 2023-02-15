const taskTextInput=document.querySelector('.text');
const addButton=document.querySelector('.button-add');
const taskContent=document.querySelector('.content');
const cleanButton=document.querySelector('.button-clean');
const emptyContainer=document.querySelector('.emptyContainer');

let toDoList=[];

cleanButton.disabled=true;
cleanButton.style.cursor='not-allowed';

addButton.onclick = () => {
    const inputValue=taskTextInput.value;
    if (inputValue) {
        createTask(inputValue);
        taskTextInput.value="";
        addTask();
        emptyContainer.className='emptyNotExist';
        cleanButton.disabled=false;
        cleanButton.style.cursor='pointer';
    }
}

function createTask(str) {
    const task = {
        todo: str,
        checked: false,
        colorChecked: "red",
        color: "black"
    }
    toDoList.push(task);
}

function addTask(){
    let displayTask='';
    toDoList.forEach (function(item, i) {
    displayTask+=`
    <div class='content__container container'>
        <label class='container__content' for='item_${i}'>${item.todo}</label>
        <input class='container__checkbox' id='item_${i}' type='checkbox' ${item.checked ?  'checked' : ''}  >
    </div>`;
    
    taskContent.innerHTML = displayTask;
    });  
}

cleanButton.onclick = () => {
    taskContent.innerHTML="";
    emptyContainer.classList.remove('emptyNotExist');
    emptyContainer.className='emptyContainer';

    cleanButton.disabled=true;
    cleanButton.style.cursor="not-allowed";
    toDoList.length=0;
}

taskContent.addEventListener('contextmenu', function(event) {
    event.preventDefault();
})
