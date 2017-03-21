function authentication(username, password) {
  if(username == 'Steve') {
    if(password == '12345') {
      return 'Successed!';
    }
    else {
      return 'Password Is Incorrect';
    }
  }
  else return 'Username Is Incorrect';

}

module.exports.authentication = authentication;
