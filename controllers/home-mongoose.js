//var template = require('../views/template-main');
var mongo_data = require('../model/mongoose-data');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    var strGroup = "D";

    mongo_data.teamlist(strGroup, function(err, teamlist) {
        if (!err) {
            var strTeam = "",
                i = 0,
                teamCount = teamlist.length;

            for (i = 0; i < teamCount;) {
                strTeam = strTeam + "<li>" + teamlist[i].country + "</li>";
                i = i + 1;
            }

            strTeam = "<ul>" + strTeam + "</ul>"
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });

            res.write(template.build("Test web page on node.js", "Hello there", "<p>The teams in Group " + strGroup + " for Euro 2012 are:</p>" + strTeam));
            res.end();

        } else {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });

            res.write(template.build("Oh dear", "Database error", "<p>Error details: " + err + "</p>"));
            res.end();
        }
    });

});

var template = {
    build: function (title, pagetitle, content) {
        return ['<!doctype html>',
            '<html lang="en">\n<head>\n<meta charset="utf-8">\n<title>{title}</title>',
            '<link rel="stylesheet" href="/stylesheets/style.css" />\n</head>',
            '<body><h1>{pagetitle}</h1>',
            '<div id="content">{content}</div>\n</body>\n</html>'
        ].join('\n')
            .replace(/\{title\}/g, title)
            .replace(/\{pagetitle\}/g, pagetitle)
            .replace(/\{content\}/g, content);
    }
};

module.exports = router;