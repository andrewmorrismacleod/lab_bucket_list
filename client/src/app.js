const BucketList = require('./models/bucket_list.js');
const FormView = require('./views/form_view.js');
const InputView = require('./views/input_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const itemsView = document.querySelector('#bucket_list');
  const formView = new FormView(itemsView);
  formView.bindEvents();

  const inputForm = document.querySelector('#bucket_list_form');
  const inputView = new InputView(inputForm);
  inputView.bindEvents();

  const bucketList = new BucketList();
  bucketList.bindEvents();
  bucketList.getData();

});
