let button = document.getElementById('add');
let taskList = document.getElementById('taskList');
let input = document.getElementById('input');
    // local storage
    let tasks = [];

window.onload = () => {
       tasks = JSON.parse(localStorage.getItem('tasks')) || []
      tasks.forEach(task => addTask(task)); 
    }
    button.addEventListener('click', () => {
        if (input.value.trim() === '') {
            alert('Please Enter Task Name');
        } else {
            tasks.push({ text: input.value, completed: false });
            localStorage.setItem('tasks', JSON.stringify(tasks));
            addTask(input.value);
            input.value = '';
        }
    });
function addTask(task) {
      let listItem = document.createElement('p');
      let checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      listItem.innerText="Completed"
      listItem.style.fontSize='15px'
      listItem.appendChild(checkbox);

      let textSpan = document.createElement('p');
      textSpan.innerText = task.text;
      listItem.appendChild(textSpan);

      
      
      let deleteButton = document.createElement('button');
      deleteButton.style.borderRadius='6px'
      deleteButton.style.marginLeft='10px'
      deleteButton.innerText = 'Delete';
      listItem.appendChild(deleteButton);

      taskList.appendChild(listItem);

checkbox.addEventListener('change', () => {
        task.completed = checkbox.checked;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        updateTaskList();
      });

deleteButton.addEventListener('click', () => {
        removeTask(task);
      });

      if (task.completed) {
        textSpan.style.textDecoration = 'line-through';
        checkbox.checked = true;
      }
    }
function removeTask(task) {
      let index = tasks.indexOf(task);
      if (index > -1) {
        tasks.splice(index, 1);
      }
      localStorage.setItem('tasks', JSON.stringify(tasks));
      updateTaskList();
    }

function updateTaskList() {
      taskList.innerHTML = '';
      tasks.forEach(task => addTask(task));
    }
 