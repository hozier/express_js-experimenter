// # User Library

// ## User Objects
function User(username, password, uid, auth) {
  this.username = username;
  this.password = password;
  // Added uid
  this.uid      = uid;

  // adding additional field to the user object
  // this.
  this.auth = isAdmin(auth)? 'admin' : 'normal';
  function isAdmin(auth){ return (auth == 'admin'); }
}

// This is our stub database until we look at a real database!
var userdb = [
  new User('tim',   'mit', 1, 'admin'),
  new User('hazel', 'lezah', 2),
  new User('caleb', 'belac', 3),
  new User('maestro', 'leblanc', 4, 'admin') /// appended new user to virtual db.
];


// overview: helper function, which, when invoked, sends back the most recent state of
// of the local db`
exports.getArr = function(){
  var myLittleArray = [];
  for (var i = 0; i < userdb.length; i++) { myLittleArray.push(userdb[i]); }

  return myLittleArray;
}
//
// ## lookup function
// locates a user by `name` if it exists. Invokes callback `cb` with the
// signature cb(error, userobj).
//

// overview: add new user for admin/add new route
exports.add_new = function(username, password, uid, auth){
  for (var s in userdb){ if(userdb[s].username  === username){ return undefined;} }
  var stewie = new User(username, password, uid, auth);
  userdb.push(stewie);
  return stewie;
}

exports.lookup = function(username, password, cb) {
  var len = userdb.length;
  for (var i = 0; i < len; i++) {
    var u = userdb[i];
    if (u.username === username) {
      if (u.password === password) {
        cb(undefined, u);
      }
      else {
        cb('password is not correct');
      }
      return;
    }
  }
  cb('user not found');
};
