class TodoItem {
  static id() {
    return 'TodoItem';
  }

  defaults() {
    return {
      events: {
        '[data-text]': {
          'keyup': this.textKeyup
        },
        '[data-add]': {
          'click': this.addClick
        }
      },
      el: {
        text: '[data-text]',
        add: '[data-add]'
      }
    };
  }

  textKeyup(/*evt*/) {
    if (this.el.text().value.length > 0) {
      this.el.add().removeAttribute('disabled');
    } else {
      this.el.text().setAttribute('disabled', 'disabled');
    }
  }

  addClick() {
    const payload = {
      text: this.el.text().value
    };
    this.publish('add-item', payload);
  }
}
