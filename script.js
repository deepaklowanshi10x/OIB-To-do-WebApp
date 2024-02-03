const tasks = [];

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const task = {
      text: taskText,
      date: new Date().toLocaleString(),
      completed: false,
    };

    tasks.push(task);
    renderTasks();
    taskInput.value = '';
  }
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function renderTasks() {
  const pendingTasksList = document.getElementById('pendingTasks');
  const completedTasksList = document.getElementById('completedTasks');

  pendingTasksList.innerHTML = '';
  completedTasksList.innerHTML = '';

  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span class="${task.completed ? 'completed' : ''}">${task.text} (${task.date})</span>
      <button onclick="toggleTask(${index})">${task.completed ? 'Undo' : 'Complete'}</button>
      <button onclick="deleteTask(${index})">Delete</button>
    `;

    if (task.completed) {
      completedTasksList.appendChild(listItem);
    } else {
      pendingTasksList.appendChild(listItem);
    }
  });
}
