
AddTask = () => {
  const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

  console.log(taskTitle.value)

  const year = parseInt(deadYear.value);
  const month = parseInt(deadMonth.value);
  const day = parseInt(deadDay.value);
  const hour = parseInt(deadHour.value);
  const minute = parseInt(deadMin.value);

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const minYear = currentYear;
  const maxYear = currentYear + 100;

  if (year < minYear || year > maxYear) {
    alert('年份范围必须在当前年份(' + minYear + ')到未来 100 年(' + maxYear + ')之间！');
    return;
  }

  if (month < 1 || month > 12) {
    alert('月份必须在 1 到 12 之间！');
    return;
  }

  const maxDay = new Date(year, month, 0).getDate();

  if (day < 1 || day > maxDay) {
    alert(`日期必须在 1 到 ${maxDay} 之间！`);
    return;
  }

  if (hour < 0 || hour > 23) {
    alert('小时必须在 0 到 23 之间！');
    return;
  }

  if (minute < 0 || minute > 59) {
    alert('分钟必须在 0 到 59 之间！');
    return;
  }

  if (!taskTitle.value) {
    alert("请输入任务标题")
    return
  } else if (!taskDescription.value) {
    alert('请输入任务描述')
    return
  } else if (!deadYear.value || !deadMonth.value || !deadDay.value || !deadHour.value || !deadMin.value) {
    alert('请输入截止时间')
    return
  }

  var radios = document.getElementsByName('priority');
  var priority;

  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      priority = radios[i].value;
      break;
    }
  }
  if (!priority) {
    priority = 'low'
  }

  const newTask = {
    taskTitle: taskTitle.value,
    taskDescription: taskDescription.value,
    deadline: {
      year: deadYear.value,
      month: deadMonth.value,
      day: deadDay.value,
      hour: deadHour.value,
      minute: deadMin.value
    },
    priority: priority
  };

  const isTaskExist = storedTasks.some(task => task.taskTitle === newTask.taskTitle);

  if (isTaskExist) {
    alert('存在相同标题的任务，无法添加！');
  } else {
    storedTasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
    alert('任务添加成功！');
  }

}
