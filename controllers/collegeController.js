var college_data = require('../model/college-data');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

    college_data.collegelist(function(err, collegelist) {
        if (!err) {
            res.render('collegelist', {
                colleges: collegelist
            });

        } else {
            console.log('error', err);
        }
    })
});

router.get('/:id', function(req, res, next) {
    var id = req.params.id;

    college_data.getCollege(id, function(err, college) {
        if (!err) {

            delete college._id;
            delete college.__v;

            res.render('college', {
                college: college,
                keys: Object.keys(college)

            });

        } else {
            console.log('error', err);
        }
    })
});

module.exports = router;