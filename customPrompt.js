// customPrompt.js
export function customPrompt(message, defaultValue) {
  // 创建自定义对话框的HTML结构
  const dialogContainer = document.createElement('div');
  dialogContainer.className = 'custom-prompt-container';
  dialogContainer.innerHTML = `
    <div class="custom-prompt-message">${message}</div>
    <input type="text" class="custom-prompt-input" value="${defaultValue || ''}">
    <button class="custom-prompt-confirm">OK</button>
    <button class="custom-prompt-cancel">Cancel</button>
  `;

  // 将对话框添加到页面中
  document.body.appendChild(dialogContainer);

  // 获取输入框和按钮元素
  const inputElement = dialogContainer.querySelector('.custom-prompt-input');
  const confirmButton = dialogContainer.querySelector('.custom-prompt-confirm');
  const cancelButton = dialogContainer.querySelector('.custom-prompt-cancel');

  // 监听确认按钮的点击事件
  confirmButton.addEventListener('click', () => {
    // 获取输入框的值
    const userInput = inputElement.value;
    // 从页面中移除对话框
    dialogContainer.remove();
    // 返回用户输入的值
    return userInput;
  });

  // 监听取消按钮的点击事件
  cancelButton.addEventListener('click', () => {
    // 从页面中移除对话框
    dialogContainer.remove();
    // 返回null表示用户取消了操作
    return null;
  });

  // 返回一个用于关闭对话框的函数
  return () => {
    dialogContainer.remove();
  };
}
