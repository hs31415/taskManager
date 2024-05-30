var storedTasks = JSON.parse(localStorage.getItem('tasks') || [])

console.log(storedTasks)

if (taskList === undefined) {
  var taskList = [];
}


// 创建一个无序列表
taskList = document.createElement('ul')

storedTasks.forEach((task) => {
  // 创建 li 元素
  const taskListItem = document.createElement('li')
  taskListItem.className = 'taskListItem'
  // 创建包含任务编号的 span 元素
  const taskIdSpan = document.createElement('span')
  taskIdSpan.innerHTML = '<span class="title2">任务编号:</span> ' + '<span class="taskId">' + task.taskId + '</span>'

  taskIdSpan.className = 'taskId'
  taskListItem.appendChild(taskIdSpan)
  // 创建包含任务描述的 span 元素
  const taskDescriptionSpan = document.createElement('span');
  taskDescriptionSpan.innerHTML = '<span class="title1">任务详情:</span> ' + '<span class="description">' + task.taskDescription + '</span>'
  taskDescriptionSpan.className = 'taskDescription'
  taskListItem.appendChild(taskDescriptionSpan)

  // 创建包含截止日期的 span 元素
  const deadlineSpan = document.createElement('span')
  deadlineSpan.innerHTML = '<span class="title3">截止日期:</span> ' + '<span class="taskDescription">' + task.taskDeadline + '</span>'

  deadlineSpan.className = 'deadline'
  taskListItem.appendChild(deadlineSpan)

  // 将 li 元素添加到列表中
  taskList.appendChild(taskListItem)
});

// 将整个任务列表添加到内容区域中
content.appendChild(taskList)




