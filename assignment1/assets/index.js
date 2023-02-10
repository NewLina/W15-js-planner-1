const taskTextInput=document.querySelector('.text');
const addButton=document.querySelector('.button-add');
const container=document.querySelector('.task-list__container');
const cleanButton=document.querySelector('.button-clean');
const tasks=[];

addButton.onclick = () => {
    const inputValue=taskTextInput.value;
    if (inputValue) {
        createTask(inputValue);
        taskTextInput.value="";
        addTask();
    }
console.log(tasks);
}

function createTask(text) {
    const task = {
        text: text,
        isComplete: false
    }
    tasks.push(task);
}

function addTask(){
    for (let item of tasks) {
        const containerCheckbox=document.createElement('input');
    containerCheckbox.className='container__checkbox';
    containerCheckbox.type="checkbox";
    container.append(containerCheckbox);

    const containerContent=document.createElement('p');
    containerContent.className='container__content';
    container.append(containerContent);
    containerContent.textContent=item.text;
    }
}
