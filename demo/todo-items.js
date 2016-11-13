class TodoItems {
  static id() {
    return 'TodoItems';
  }

  defaults() {
    return {
      events: {
        'add-item': this.addItem
      },
      el: {
        'items': '[data-items]'
      }
    };
  }

  addItem(payload) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(payload.text));
    this.el.items().appendChild(li);
  }
}
