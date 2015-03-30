var mongoose = require('mongoose'),
    db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

var teamSchema = new mongoose.Schema({
    country: String,
    GroupName: String
});

exports.teamlist = function(gname, callback) {
    mongoose.connect('mongodb://localhost/teams');

    db.once('open', function() {
        var Team = db.model('Team', teamSchema);
        Team.find({
            'GroupName': gname
        }, function(err, teams) {
            if (err) {
                console.log('err', err);
                onErr(err);
            } else {
                mongoose.connection.close();
                console.log(teams);
                callback("", teams);
            }
        }); // end Team.find
    }); // end db.once open
};

var onErr = function(err,callback) {
    mongoose.connection.close();
    callback(err);
};

