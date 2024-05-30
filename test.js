// 创建一个用于显示对话框的函数
function createCustomPrompt(message, defaultValue) {
  // 创建对话框的DOM结构
  const dialog = document.createElement('div');
  dialog.id = 'custom-prompt';
  dialog.innerHTML = `
    <div class="prompt-message">${message}</div>
    <input type="text" class="prompt-input" value="${defaultValue || ''}">
    <button class="prompt-confirm">OK</button>
    <button class="prompt-cancel">Cancel</button>
  `;

  // 将对话框添加到页面中
  document.body.appendChild(dialog);

  // 显示对话框的函数
  function showDialog() {
    dialog.style.display = 'block';
    // 聚焦到输入框
    dialog.querySelector('.prompt-input').focus();
  }

  // 隐藏对话框的函数
  function hideDialog() {
    dialog.style.display = 'none';
  }

  // 处理确认按钮点击事件
  dialog.querySelector('.prompt-confirm').addEventListener('click', function () {
    const userInput = dialog.querySelector('.prompt-input').value;
    hideDialog();
    // 这里可以返回用户输入的值，或者执行其他逻辑
    console.log('User input:', userInput);
  });

  // 处理取消按钮点击事件
  dialog.querySelector('.prompt-cancel').addEventListener('click', hideDialog);

  // 返回用于显示和隐藏对话框的函数
  return { showDialog, hideDialog };
}

// 创建一个对话框实例
const customPromptInstance = createCustomPrompt('Enter your name:', 'Anonymous');

// 显示对话框
customPromptInstance.showDialog();