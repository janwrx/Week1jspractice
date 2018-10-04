var userId = ('')
var pass = ('')
var nums = /[0-9]/
var upper =/[A-Z]/
var lower = /[a-z]/

var valid = {
  isValid: true
}

var invalid = {
  isValid: false,
  reason: ''
}

function authenticate (user, pw) {
  if (user == pw) {
    invalid.reason = 'User ID and password cant be the same';
    console.log('User ID and password cant be the same');
    return invalid;
  } else if (user.length < 6 || pw.length < 6) {
    invalid.reason = 'User ID and password have to be at least six characters long';
    console.log('User ID and password have to be at least six characters long');
    return invalid;
  } else if (user.includes('!') || user.includes('#') || user.includes('$')) {
    invalid.reason = 'User ID cannot contain the following characters: !#$';
    console.log('User ID cannot contain the following characters: !#$');
    return invalid;
  } else if (!pw.includes('!') && !pw.includes('#') && !pw.includes('$')) {
    invalid.reason = 'Password has to contain at least one of: !#$';
    console.log('Password has to contain at least one of: !#$')
    return invalid;
  } else if (pw == ('password')) {
    invalid.reason = 'Password cannot be "password"';
    console.log('Password cannot be "password"');
    return invalid;
  } else if (!nums.test (pw)) {
    invalid.reason = 'Password has to contain at least one digit';
    console.log('Password has to contain at least one digit');
    return invalid;
  } else if (!upper.test (pw)) {
    console.log('Password needs to contain an uppercase letter!');
    invalid.reason = 'Password needs to contain an uppercase letter!';
    console.log(invalid.reason);
    return invalid;
  } else if (!lower.test(pw)) {
    invalid.reason = 'Password needs to contain a lowercase letter!';
    console.log('Password needs to contain a lowercase letter!')
    return invalid;
  } else {
    console.log('K. Bai!');
    return valid;
  }
}
authenticate('jaawwawdn', 'cat4$asdf');
