
var storedTasks = JSON.parse(localStorage.getItem('tasks') || [])

if (taskList === undefined) {
  var taskList = [];
}
if (curTaskTitle === undefined) {
  var curTaskTitle = 0;
}
myPrompt = document.getElementById('myPrompt')


taskList = document.createElement('ul')

storedTasks.forEach((task) => {

  const taskListItem = document.createElement('li')
  taskListItem.className = 'taskListItem'

  const taskIdSpan = document.createElement('span')
  taskIdSpan.innerHTML = '<span class="title2">任务标题:</span> ' + '<span class="taskTitle">' + task.taskTitle + '</span>'
  taskIdSpan.className = 'taskTitle'
  taskListItem.appendChild(taskIdSpan)

  const taskDescriptionSpan = document.createElement('span');
  taskDescriptionSpan.innerHTML = '<span class="title1">任务详情:</span> ' + '<span class="description">' + task.taskDescription + '</span>'
  taskDescriptionSpan.className = 'taskDescription'
  taskListItem.appendChild(taskDescriptionSpan)

  const deadlineSpan = document.createElement('span');

  const deadline = task.deadline;
  if (deadline) {
    const deadlineDate = new Date(deadline.year, deadline.month - 1, deadline.day, deadline.hour, deadline.minute);
    const formattedDeadline = `${deadlineDate.getFullYear()}-${('0' + (deadlineDate.getMonth() + 1)).slice(-2)}-${('0' + deadlineDate.getDate()).slice(-2)} ${('0' + deadlineDate.getHours()).slice(-2)}:${('0' + deadlineDate.getMinutes()).slice(-2)}`;
    deadlineSpan.innerHTML = '<span class="title3">截止日期:</span> ' + '<span class="taskDescription">' + formattedDeadline + '</span>';
    deadlineSpan.className = 'deadline';
    taskListItem.appendChild(deadlineSpan);
  }
  taskListItem.dataset.title = task.taskTitle

  taskListItem.onclick = function () {
    curTaskTitle = task.taskTitle
    myPrompt.style.display = 'flex'
    //console.log(myPrompt.childNodes[1].childNodes[1])//通过一种愚蠢的方式获得输入框以及内容，进行绑定
    myPrompt.childNodes[1].childNodes[1].value = task.taskDescription
  }

  setDescription = (newDescription) => {
    var taskIndex = storedTasks.findIndex(function (t) {
      return t.taskTitle === curTaskTitle
    })
    if (taskIndex !== -1) {
      if (newDescription !== null) {
        storedTasks[taskIndex].taskDescription = newDescription
        localStorage.setItem('tasks', JSON.stringify(storedTasks))

        const changedTask = document.querySelector(`[data-title="${curTaskTitle}"]`)
        changedTask.children[1].innerHTML = '<span class="title1">任务详情:</span> ' + '<span class="description">' + newDescription + '</span>'
      }
    }
    myPrompt.style.display = 'none'
  }

  taskList.appendChild(taskListItem)
})

content.appendChild(taskList)




