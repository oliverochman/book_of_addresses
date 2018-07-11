module.exports = {
  create: function(req,res) {
    var params = _.extend(req.query || {}, req.params || {}, req.body || {});
    Contact.create(params, function userCreated (err, createdContact) {
        if (err) return res.send(err,500);
    });
    Contact.find().exec(function(err, contacts) {
                if(err) throw err;
                res.redirect('/');
    });
  },
  index: function(req, res) {
    Contact.find().exec(function(err, contacts) {
                if(err) throw err;
                res.view('contacts/index', {contacts: contacts});
    });
  }
}
