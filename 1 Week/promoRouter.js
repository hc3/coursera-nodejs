'use strict';

module.exports = function(app) {

  var createPromo = function(req, res) {
    return res.send('create a Promo: '+req.body);
  };

  var findAllPromo = function(req, res) {
    return res.send('return a lista of Promo');
  };

  var findPromoById = function(req, res) {
    return res.send('return a Promo by parameter: '+req.params.id);
  };

  var editPromo = function(req, res) {
    return res.send('return a Promo updated: '+req.body+' the id updated is: '+req.params.id);
  };

  var removePromo = function(req ,res) {
    return res.send('remove a Promo with id: '+req.params.id);
  };

  app.get('/api/Promo',findAllPromo);
  app.post('/api/Promo',createPromo);
  app.get('/api/Promo/:id',findPromoById);
  app.put('/api/Promo/:id',editPromo);
  app.delete('/api/Promo/:id',removePromo);
}
