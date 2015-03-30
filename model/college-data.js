var mongoose = require('mongoose'),
    db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

var collegeSchema = new mongoose.Schema({
    UNITID: Number,
    INSTNM: String,
    ADDR: String,
    CITY: String,       
    STABBR: String,     
    ZIP: String,
    FIPS: Number,
    OBEREG: Number,
    CHFNM: String,
    CHFTITLE: String,

    GENETELE: Number,
    FAXTELE: Number,
    EIN: Number,
    OPEID: Number,
    OPEFLAG: Number,
    WEBADDR: String,
    ADMINURL: String,
    FAIDURL: String,
    APPLURL: String,
    NPRICURL: String,

    SECTOR: Number,
    ICLEVEL: Number,
    CONTROL: Number,
    HLOFFER: Number,
    UGOFFER: Number,
    GROFFER: Number,
    HDEGOFR1: Number,
    DEGGRANT: Number,
    HBCU: Number,
    HOSPITAL: Number,

    MEDICAL: Number,
    TRIBAL: Number,
    LOCALE: Number,
    OPENPUBL: Number,
    ACT: String,
    NEWID: Number,
    DEATHYR: Number,
    CLOSEDAT: Number,
    CYACTIVE: Number,
    POSTSEC: Number,

    PSEFLAG: Number,
    PSET4FLG: Number,
    RPTMTH: Number,
    IALIAS: String,
    INSTCAT: Number,
    CCBASIC: Number,
    CCIPUG: Number,
    CCIPGRAD: Number,
    CCUGPROF: Number,
    CCENRPRF: Number,

    CCSIZSET: Number,
    CARNEGIE: Number,
    LANDGRNT: Number,
    INSTSIZE: Number,
    CBSA: Number,
    CBSATYPE: Number,
    CSA: Number,
    NECTA: Number,
    F1SYSTYP: Number,
    F1SYSNAM: String,

    F1SYSCOD: Number,
    COUNTYCD: Number,
    COUNTYNM: String,
    CNGDSTCD: Number,
    LONGITUD: Number,
    LATITUDE: Number
});

var data1 = {
    UNITID: 100654,
    INSTNM: "Alabama A & M University",
    ADDR: "4900 Meridian Street",
    CITY: "Normal",
    STABBR: "AL",
    ZIP: "35762",
    FIPS: 1,
    OBEREG: 5,
    CHFNM: "Dr. Andrew Hugine, Jr.",
    CHFTITLE: "President",

    GENETELE: 2563725000,
    FAXTELE: 2563725030,
    EIN: 636001109,
    OPEID: 100200,
    OPEFLAG: 1,
    WEBADDR: "www.aamu.edu/",
    ADMINURL: "www.aamu.edu/admissions/pages/default.aspx",
    FAIDURL: "www.aamu.edu/Admissions/fincialaid/Pages/default.aspx",
    APPLURL: "www.aamu.edu/Admissions/apply/Pages/default.aspx",
    NPRICURL: "galileo.aamu.edu/netpricecalculator/npcalc.htm",


    SECTOR: 1,
    ICLEVEL: 1,
    CONTROL: 1,
    HLOFFER: 9,
    UGOFFER: 1,
    GROFFER: 1,
    HDEGOFR1: 12,
    DEGGRANT: 1,
    HBCU: 1,
    HOSPITAL: 2,

    MEDICAL: 2,
    TRIBAL: 2,
    LOCALE: 12,
    OPENPUBL: 1,
    ACT: "A",
    NEWID: -2,
    DEATHYR: -2,
    CLOSEDAT: -2,
    CYACTIVE: 1,
    POSTSEC: 1,

    PSEFLAG: 1,
    PSET4FLG: 1,
    RPTMTH: 1,
    IALIAS: "AAMU",
    INSTCAT: 2,
    CCBASIC: 18,
    CCIPUG: 13,
    CCIPGRAD: 9,
    CCUGPROF: 4,
    CCENRPRF: 14,

    CCSIZSET: 16,
    CARNEGIE: 1,
    LANDGRNT: 3,
    INSTSIZE: 26620,
    CBSA: 1,
    CBSATYPE: 290,
    CSA: -2,
    NECTA: 2,
    F1SYSTYP: -2,
    F1SYSNAM: "",

    F1SYSCOD: -2,
    COUNTYCD: 1089,
    COUNTYNM: "Madison County",
    CNGDSTCD: 105,
    LONGITUD: -86.568502,
    LATITUDE: 34.783368
}

var data2 = {
    UNITID: 100663,
    INSTNM: "University of Alabama at Birmingham",
    ADDR: "Administration Bldg Suite 1070",
    CITY: "Birmingham",
    STABBR: "AL",
    ZIP: "35294-0110",
    FIPS: 1,
    OBEREG: 5,
    CHFNM: "Ray L. Watts",
    CHFTITLE: "President",

    GENETELE: 2059344011,
    FAXTELE: 2059757114,
    EIN: 636005396,
    OPEID: 105200,
    OPEFLAG: 1,
    WEBADDR: "www.uab.edu",
    ADMINURL: "www.uab.edu/students/undergraduate-admissions",
    FAIDURL: "www.uab.edu/students/paying-for-college",
    APPLURL: "ssb.it.uab.edu/pls/sctprod/zsapk003_ug_web_appl.create_page",
    NPRICURL: "www.collegeportraits.org/AL/UAB/estimator/agree",

    SECTOR: 1,
    ICLEVEL: 1,
    CONTROL: 1,
    HLOFFER: 9,
    UGOFFER: 1,
    GROFFER: 1,
    HDEGOFR1: 11,
    DEGGRANT: 1,
    HBCU: 2,
    HOSPITAL: 1,
    MEDICAL: 1,
    TRIBAL: 2,
    LOCALE: 12,
    OPENPUBL: 1,
    ACT: "A",
    NEWID: -2,
    DEATHYR: -2,
    CLOSEDAT: -2,
    CYACTIVE: 1,
    POSTSEC: 1,

    PSEFLAG: 1,
    PSET4FLG: 1,
    RPTMTH: 1,
    IALIAS: "",
    INSTCAT: 2,
    CCBASIC: 15,
    CCIPUG: 11,
    CCIPGRAD: 17,
    CCUGPROF: 8,
    CCENRPRF: 5,

    CCSIZSET: 15,
    CARNEGIE: 15,
    LANDGRNT: 2,
    INSTSIZE: 4,
    CBSA: 13820,
    CBSATYPE: 1,
    CSA: 142,
    NECTA: -2,
    F1SYSTYP: 1,
    F1SYSNAM: "The University of Alabama System",

    F1SYSCOD: 101050,
    COUNTYCD: 1073,
    COUNTYNM: "Jefferson County",
    CNGDSTCD: 107,
    LONGITUD: -86.80917,
    LATITUDE: 33.50223
};


var College = db.model('College', collegeSchema);
//var test1 = new College(data1);
//var test2 = new College(data2);

exports.collegelist = function(callback) {
    mongoose.connect('mongodb://localhost/teams');

    db.once('open', function() {

        //var College = db.model('College', collegeSchema);
        //test1.save();
        //test2.save();

        //update the find function to select just the names not every document
        College.find({}).select('_id INSTNM').lean().exec(function(err, colleges) {
            if (err) {
                console.log('err', err);
                onErr(err);
            } else {
                mongoose.connection.close();
                callback("", colleges);
            }
        });
    });
};

exports.getCollege = function(id, callback) {
    mongoose.connect('mongodb://localhost/teams');

    db.once('open', function() {

        College.findOne({_id: id}).lean().exec(function(err, colleges) {
            if (err) {
                console.log('err', err);
                onErr(err);
            } else {
                mongoose.connection.close();
                callback("", colleges);
            }
        });
    })
};

var onErr = function(err,callback) {
    mongoose.connection.close();
    callback(err);
};



/* fields for schemma
UNITID	INSTNM	ADDR	CITY	STABBR	ZIP	FIPS	OBEREG	CHFNM	CHFTITLE
GENTELE	FAXTELE	EIN	OPEID	OPEFLAG	WEBADDR	ADMINURL	FAIDURL	APPLURL	NPRICURL
SECTOR	ICLEVEL	CONTROL	HLOFFER	UGOFFER	GROFFER	HDEGOFR1	DEGGRANT	HBCU	HOSPITAL
MEDICAL	TRIBAL	LOCALE	OPENPUBL	ACT	NEWID	DEATHYR	CLOSEDAT	CYACTIVE POSTSEC
PSEFLAG	PSET4FLG	RPTMTH	IALIAS	INSTCAT	CCBASIC	CCIPUG	CCIPGRAD CCUGPROF	CCENRPRF
CCSIZSET	CARNEGIE	LANDGRNT	INSTSIZE	CBSA	CBSATYPE CSA	NECTA	F1SYSTYP	F1SYSNAM
F1SYSCOD COUNTYCD	COUNTYNM	CNGDSTCD	LONGITUD	LATITUDE
*/