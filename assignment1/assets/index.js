const taskTextInput=document.querySelector('.text');
const addButton=document.querySelector('.button-add');
const taskContent=document.querySelector('.content');
const cleanButton=document.querySelector('.button-clean');
const emptyContainer=document.querySelector('.emptyContainer');

const toDoList=[];

cleanButton.disabled=true;

addButton.onclick = () => {
    const inputValue=taskTextInput.value;
    if (inputValue) {
        createTask(inputValue);
        taskTextInput.value="";
        addTask();
        emptyContainer.className='emptyNotExist';
        cleanButton.disabled=false;
    }
console.log(toDoList);
}

function createTask(str) {
    const task = {
        todo: taskTextInput.value,
        checked: false
    }
    toDoList.push(task);
}

function addTask(){
    toDoList.forEach (function(item) {

    const container=document.createElement('div');
    container.className='container';
    taskContent.append(container);

    const containerContent=document.createElement('label');
    containerContent.className='container__content';
    containerContent.setAttribute('for', 'taskTextContent');
    container.append(containerContent);
    containerContent.textContent=item.todo;

    const containerCheckbox=document.createElement('input');
    containerCheckbox.className='container__checkbox';
    containerCheckbox.id='taskTextContent';
    containerCheckbox.type="checkbox";
    container.append(containerCheckbox);
    containerCheckbox.checked=item.checked;
    containerCheckbox.addEventListener('change', function() {
        if (this.checked) {
            containerContent.style.textDecoration="line-through 2px pink";
            containerContent.style.fontWeight='bold';
        } else{
            containerContent.style.color="black";
            containerContent.style.textDecoration="none";
            containerContent.style.fontWeight='normal';
        }
    });

    })
    toDoList.length=0; 
}

cleanButton.onclick = () => {
    taskContent.innerHTML="";
    emptyContainer.classList.remove('emptyNotExist');
    emptyContainer.style.fontSize='1.5vw';
    cleanButton.disabled=true;
}