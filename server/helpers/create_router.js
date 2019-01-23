const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function(collection){

  const router = express.Router();
  router.get('/', (request,response) => {
    collection
    .find()
    .toArray()
    .then((docs) => response.json(docs))
  });

  router.post('/', (request, response) => {
    const newData = request.body;
    collection
    .insertOne(newData)
    .then( () => {
        return collection
        .find()
        .toArray()
      }
    )
    .then ((docs) => response.json(docs));
  });

  router.delete("/:id", (request, response) => {
    const id = request.params.id;
    collection.deleteOne({ _id: ObjectID(id) })
    .then( () => {
      return collection
      .find()
      .toArray()
    }

    )
    .then( (docs) => response.json(docs))

  });

  router.put("/:id", (request, response) => {
    const id = request.params.id;
    const updatedData = request.body;
    collection.updateOne({ _id: ObjectID(id)}, {$set: updatedData})
    .then( () => {
      return collection
      .find()
      .toArray()
    }

    )
    .then( (docs) => response.json(docs))



  })

return router;
};


module.exports = createRouter;
