const PubSub = require('../helpers/pub_sub.js');
const ItemView = require('./item_view.js');

const FormView = function(container){
  this.container = container;
}

FormView.prototype.bindEvents = function() {
  PubSub.subscribe('BucketList: items-loaded', (event) => {
    this.render(event.detail);
  });
};

FormView.prototype.render = function(items){
  this.container.innerHTML = '';

  items.forEach( (item, index) => {
    const itemView = new ItemView(this.container, item);
      itemView.render();
  });

}

module.exports = FormView
