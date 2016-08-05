var apiKey = require('./../.env').apiKey;

function User() {}

User.prototype.getUserInfo = function (userName) {
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
    displayFunction(userName, response.);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.userModule = User;
