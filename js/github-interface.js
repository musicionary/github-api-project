var User = require('./../js/github.js').userModule;

var displayUserStats = function (userName, userAvatar, userRealName, userFollowers, userFollowing, userBio, userRepos) {
  $("#user-data").append(
    "<img src='" + userAvatar + "'/>" +
    "<h2>" + userName + "</h2>" +
    "<p>" + userRealName + "</p>" +
    "<p>Followers: " + userFollowers + " Following: " + userFollowing + "</p>" +
    "<p>Bio: " + userBio + "</p>" +
    "<p>Github Users Since: " + userAccountDate + "</p>" +
    "<p>Number of repositories: " + userRepos + "</p>"
  );
};


$(document).ready(function () {
  $('#user-search').click(function() {
    var userName = $('#user-name').val();
    $('#user-name').val("");
    console.log(userName);
    newUser = new User();
    newUser.getUserInfo(userName, displayUserStats);
  });
});
