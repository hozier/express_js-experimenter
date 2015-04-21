var express = require('express');
var router = express.Router();
var userlib = require('../lib/user');
var users_route	= require('../routes/users');



function selectAdmin(){
  var arr = [];

  // overview: grab the entire database from /lib/user module
  var db = require('../lib/user').getArr();
  for (var s in db){ if(db[s].auth  === 'admin'){arr.push(db[s])} }
  return arr;
}


router.get('/admin', function(req, res) {
  // console.log(selectAdmin()); //testing

  currentOnlineJSON = req.session.user; // most current user logged in.

  /*overview:  You should only display the admins in your view if
  the user accessing the view is indeed an admin. */
  if(currentOnlineJSON.auth === 'admin'){
    res.render('admin', { title : 'Authorized Admin(s)',
                           users : selectAdmin() });
  } else{
    req.flash('admin', 'Unauthorized Access!');
    res.redirect('/user/login');
  }
});



router.get('/admin/add', function(req, res){
  currentOnlineJSON =  req.session.user;
  if (currentOnlineJSON === undefined) {
    req.flash('auth', 'Not logged in!');
    res.redirect('/user/login');
  } else {
      var authmessage = req.flash('auth') || '';

    // var user  = req.session.user;
      // overview: restrictions: for admins only:)
      if(currentOnlineJSON.auth === 'admin'){
        // Render the login view if this is a new login.
        res.render('add', { title   : 'New User',
                              message : authmessage });
      } else { res.redirect('/user/main'); }
    }
  }
);


// Adding a new USER to local database
//userlib.add_new(req.body.username, req.body.password, req.body.uid, req.body.auth);

// ## /admin/newuser
// Performs **basic** user authentication.
router.post('/admin/newuser', function(req, res) {
  // redirect if logged in:
  currentOnlineJSON =  req.session.user;
  if (currentOnlineJSON === undefined) {
    res.redirect('/user/main');
  }
  else {
    // Pull the values from the form.
    var username = req.body.username;
    var password = req.body.password;
    var uid = req.body.uid;
    var authorized = req.body.auth;

    console.log("res " + userlib.add_new(username, password, uid, authorized).username);
    console.log(require('../lib/user').getArr()); // updates for new users added to local db
    res.redirect('/user/main');

  }
});










module.exports = router;
