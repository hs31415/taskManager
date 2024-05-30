class Button {
  constructor(selector, text) {
    this.element = document.querySelector(selector);
    this.text = text;
    this.render();
    this.attachEvents();
  }

  render() {
    this.element.innerHTML = `<button>${this.text}</button>`;
  }

  attachEvents() {
    const button = this.element.querySelector('button');
    button.addEventListener('click', () => alert('Button clicked!'));
  }

  setText(text) {
    this.text = text;
    this.render();
    this.attachEvents();
  }
}

// 使用方法：
