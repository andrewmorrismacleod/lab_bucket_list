const Request = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const BucketList = function () {
    this.url = 'http://localhost:3000/api/bucket_list';
    this.request = new Request(this.url);
}

BucketList.prototype.bindEvents = function() {

  PubSub.subscribe('InputView: item-submitted', (event) => {

    this.postItem(event.detail);
  });

  PubSub.subscribe('ItemView: button-clicked', (event) => {
    const updatedItem = {name: event.detail.name, tagged: "Yes"}
    this.putItem(updatedItem);
  });

};

BucketList.prototype.postItem = function(item){

  this.request.post(item)
  .then( (items) => {
    PubSub.publish('BucketList: items-loaded', items);
  })
};

BucketList.prototype.putItem = function(item){
  console.log(item);
  this.request.put(item)
  .then( (items) => {
    PubSub.publish('BucketList: items-loaded', items);
  })
}

BucketList.prototype.getData = function() {
    this.request.get()
    .then( (items) => {
      PubSub.publish('BucketList: items-loaded', items);
    })
    .catch(console.err);
}



module.exports = BucketList;
