
document.addEventListener('DOMContentLoaded', function () {
  const calendar = document.getElementById('calendar')
  calendar.style.display = 'none'
  const calendarTable = document.getElementById('calendarTable')
  const currentMonthSpan = document.getElementById('currentMonth')
  const prevMonthButton = document.getElementById('prevMonth')
  const nextMonthButton = document.getElementById('nextMonth')
  let currentDate = new Date()
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth()

  let nowYear = currentDate.getFullYear()
  let nowMonth = currentDate.getMonth()

  function renderCalendar(year, month) {
    calendarTable.innerHTML = ''
    const headerRow = document.createElement('tr')
    const daysOfWeek = ['日', '一', '二', '三', '四', '五', '六']
    daysOfWeek.forEach(day => {
      const th = document.createElement('th')
      th.textContent = day
      headerRow.appendChild(th)
    })
    calendarTable.appendChild(headerRow)


    const firstDay = new Date(year, month, 1);
    const firstDayWeekday = firstDay.getDay();
    const daySum = new Date(year, month + 1, 0).getDate();

    let date = 1;
    let j = 0
    for (let i = 0; i < 6; i++) {
      const row = document.createElement('tr');
      if (i === 0) {
        for (j = 0; j < firstDayWeekday; j++) {
          const cell = document.createElement('td');
          cell.classList.add('empty');
          row.appendChild(cell);
        }
      }

      for (; j < 7; j++) {
        const cell = document.createElement('td');
        if (date > daySum) {
          cell.classList.add('empty');
        } else {
          cell.textContent = date;
          if (year === nowYear && month === nowMonth && date === currentDate.getDate()) {
            cell.classList.add('today');
          }

          const curDate = date + 1;
          cell.addEventListener('click', function () {
            const selectedDate = new Date(year, month, curDate);
            console.log(`你选择了日期: ${selectedDate.toISOString().split('T')[0]}`);
          });
        }

        row.appendChild(cell);

        if (date <= daySum) {
          date++;
        }
      }
      j = 0

      calendarTable.appendChild(row);
    }

    // 更新当前月份显示
    currentMonthSpan.textContent = `${year}年${month + 1}月`;
  }

  // 渲染当前月份日历
  renderCalendar(currentYear, currentMonth);

  // 上一个月
  prevMonthButton.addEventListener('click', function () {
    if (currentMonth === 0) {
      currentYear--;
      currentMonth = 11;
    } else {
      currentMonth--;
    }
    renderCalendar(currentYear, currentMonth);
  });

  // 下一个月
  nextMonthButton.addEventListener('click', function () {
    if (currentMonth === 11) {
      currentYear++;
      currentMonth = 0;
    } else {
      currentMonth++;
    }
    renderCalendar(currentYear, currentMonth);
  });
});