const PubSub = require('../helpers/pub_sub.js')

const InputView = function(container){
  this.container = container
}

InputView.prototype.bindEvents = function() {
  this.container.addEventListener('submit', (event) => {
    this.handleSubmit(event);
  });
};

InputView.prototype.handleSubmit = function(event){
  event.preventDefault();
  const form = event.target
  const newItem = {name: form.name.value};
  PubSub.publish('InputView: item-submitted', newItem);
  form.reset();
}

module.exports = InputView;
