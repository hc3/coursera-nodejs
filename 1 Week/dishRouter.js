'use strict';

module.exports = function(app) {

  var createDish = function(req, res) {
    return res.send('create a dish: '+req.body);
  };

  var findAllDish = function(req, res) {
    return res.send('return a lista of dish');
  };

  var findDishById = function(req, res) {
    return res.send('return a dish by parameter: '+req.params.id);
  };

  var editDish = function(req, res) {
    return res.send('return a dish updated: '+req.body+' the id updated is: '+req.params.id);
  };

  var removeDish = function(req ,res) {
    return res.send('remove a dish with id: '+req.params.id);
  };

  app.get('/api/dish',findAllDish);
  app.post('/api/dish',createDish);
  app.get('/api/dish/:id',findDishById);
  app.put('/api/dish/:id',editDish);
  app.delete('/api/dish/:id',removeDish);
}
