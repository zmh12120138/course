var express = require('express');
var router = express.Router();
var fs = require('fs');
var busboy = require('connect-busboy');
var db=require('db.js');
/* GET home page. */
router.get('/',db.videoAll);
router.get('/course/:courseName?',db.courseInfo);
router.get('/login',function(req,res){
    res.render('login');
});
router.post('/login',db.userLogin);
router.post('/publish/:username?',db.publish);
router.post('/saveFile/:username?/:coursename?',db.saveFile);
router.get('/edit/:username/:coursename',db.editFile);
router.get('/user',function(req,res){
    res.render('user')
});

module.exports = router;
