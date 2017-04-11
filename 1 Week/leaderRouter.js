'use strict';

module.exports = function(app) {

  var createLeader = function(req, res) {
    return res.send('create a Leader: '+req.body);
  };

  var findAllLeader = function(req, res) {
    return res.send('return a lista of Leader');
  };

  var findLeaderById = function(req, res) {
    return res.send('return a Leader by parameter: '+req.params.id);
  };

  var editLeader = function(req, res) {
    return res.send('return a Leader updated: '+req.body+' the id updated is: '+req.params.id);
  };

  var removeLeader = function(req ,res) {
    return res.send('remove a Leader with id: '+req.params.id);
  };

  app.get('/api/Leader',findAllLeader);
  app.post('/api/Leader',createLeader);
  app.get('/api/Leader/:id',findLeaderById);
  app.put('/api/Leader/:id',editLeader);
  app.delete('/api/Leader/:id',removeLeader);
}
