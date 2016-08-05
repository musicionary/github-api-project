var apiKey = require('./../.env').apiKey;
var User = require('./../js/github.js').userModule;

exports.getRepos = function(){
  $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

$(document).ready(function () {
  $('#user-search').click(function() {
    var userName = $('#user-name').val();
    userName = userName.split(" ");
    userName = searchTopic.join("%20");
    console.log(username);
    newUser = new User();
    newUser.getBookInfo(userName);
  });
});
