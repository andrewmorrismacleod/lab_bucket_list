const PubSub = require('../helpers/pub_sub.js')

const ItemView = function(container, item){
  this.container = container;
  this.item = item
}

ItemView.prototype.render = function(){
  const itemContainer = document.createElement('div');
  itemContainer.id = 'item';
  itemContainer.textContent = `${this.item.name}`;

  if (this.item['tagged'] === "Yes"){
    itemContainer.classList.add('tagged_yes');
  } else {
    itemContainer.classList.add('tagged_no');
  }

  this.createTagButton()
  this.container.appendChild(itemContainer);

};

ItemView.prototype.createTagButton = function(){
  const button = document.createElement('button');
  button.classList.add('update-btn');
  button.value = this.item._id;
  button.textContent = "Tag";
  this.container.appendChild(button);
  button.addEventListener('click', (event) => {
    PubSub.publish("ItemView: button-clicked", this.item)
  });

}



module.exports = ItemView;
