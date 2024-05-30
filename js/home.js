
var storedTasks = JSON.parse(localStorage.getItem('tasks') || [])
let curTaskId = 0
let promptIsShow = true

if (taskList === undefined) {
  var taskList = [];
}

taskList = document.createElement('ul')

storedTasks.forEach((task) => {

  const taskListItem = document.createElement('li')
  taskListItem.className = 'taskListItem'

  const taskIdSpan = document.createElement('span')
  taskIdSpan.innerHTML = '<span class="title2">任务编号:</span> ' + '<span class="taskId">' + task.taskId + '</span>'
  taskIdSpan.className = 'taskId'
  taskListItem.appendChild(taskIdSpan)

  const taskDescriptionSpan = document.createElement('span');
  taskDescriptionSpan.innerHTML = '<span class="title1">任务详情:</span> ' + '<span class="description">' + task.taskDescription + '</span>'
  taskDescriptionSpan.className = 'taskDescription'
  taskListItem.appendChild(taskDescriptionSpan)

  const deadlineSpan = document.createElement('span')
  deadlineSpan.innerHTML = '<span class="title3">截止日期:</span> ' + '<span class="taskDescription">' + task.taskDeadline + '</span>'

  deadlineSpan.className = 'deadline'
  taskListItem.appendChild(deadlineSpan)

  taskListItem.onclick = function () {
    curTaskId = task.taskId
    console.log(curTaskId)
    const myPrompt = document.getElementById('myPrompt')
    myPrompt.style.display = 'flex'
    console.log(myPrompt.childNodes[1].childNodes[1])
    myPrompt.childNodes[1].childNodes[1].value = task.taskDescription
    promptIsShow = true
  }

  setDescription = (newDescription) => {
    let taskId = String(curTaskId)
    console.log(newDescription, taskId)
    var taskIndex = storedTasks.findIndex(function (t) {
      return t.taskId === taskId
    })
    console.log(taskIndex)
    if (taskIndex !== -1) {
      if (newDescription !== null) {
        storedTasks[taskIndex].taskDescription = newDescription
        localStorage.setItem('tasks', JSON.stringify(storedTasks))
        console.log('用户输入的新描述为：', newDescription)
        location.reload()
      }
    }
  }

  taskList.appendChild(taskListItem)
})

content.appendChild(taskList)




