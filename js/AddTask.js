
AddTask = () => {
  const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

  // 要存储的任务
  const newTask = {
    taskId: taskId.value,
    taskDescription: taskDescription.value
  };

  // 检查是否存在相同任务编号的任务
  const isTaskExist = storedTasks.some(task => task.taskId === newTask.taskId);

  if (isTaskExist) {
    alert('已存在相同任务编号的任务，无法存入！');
  } else {
    // 将新任务存入任务列表
    storedTasks.push(newTask);

    // 更新localStorage
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
    alert('任务已成功存入！');
  }

}

