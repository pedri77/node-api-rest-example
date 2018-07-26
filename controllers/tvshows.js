//File: controllers/tvshows.js
var mongoose = require('mongoose');
var TVShow  = mongoose.model('TVShow');

//GET - Return all tvshows in the DB
exports.findAllTVShows = function(req, res) {
	TVShow.find(function(err, tvshows) {
    if(err) res.send(500, err.message);

    console.log('GET /tvshows')
		res.status(200).jsonp(tvshows);
	});
};

//GET - Return a TVShow with specified ID
exports.findById = function(req, res) {
	TVShow.findById(req.params.id, function(err, tvshow) {
    if(err) return res.send(500. err.message);

    console.log('GET /tvshow/' + req.params.id);
		res.status(200).jsonp(tvshow);
	});
};