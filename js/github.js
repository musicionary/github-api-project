var apiKey = require('./../.env').apiKey;

function User() {}

User.prototype.getUserInfo = function (userName, displayFunction) {
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
    // console.log(response);
    displayFunction(userName, response.avatar_url, response.name, response.followers, response.following, response.bio, response.created_at, response.public_repos);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

User.prototype.getRepoInfo = function(userName, displayFunction) {
  $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function (response) {
    // console.log(response);
    displayFunction(userName, response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.userModule = User;
