var User = require('./../js/github.js').userModule;

var displayUserStats = function (userName, userAvatar, userRealName, userFollowers, userFollowing, userBio, userAccountDate, userRepos) {
  $("#user-data").append(
    "<div class='row'>" +
      "<div class='col s12 m6'>" +
        "<img class='responsive-img' src='" + userAvatar + "'/>" +
      "</div>" +
      "<div class='col s12 m6'>" +
        "<h2>" + userRealName + "</h2>" +
        "<p>" + userName + "</p>" +
        "<p>Followers: " + userFollowers + " Following: " + userFollowing + "</p>" +
        "<p>Bio: " + userBio + "</p>" +
        "<p>Github User Since: " + userAccountDate + "</p>" +
        "<p>Number of repositories: " + userRepos + "</p>" +
      "</div>" +
    "</div>"
  );
};

var displayRepoStats = function(userName, response) {
  var repos = response;
  var name, isPrivate, creation, cloneUrl, forks, language;
  repos.forEach(function (repo) {
    name = repo.name;
    isPrivate = repo.private;
    creation = repo.created_at;
    cloneUrl = repo.clone_url;
    forks = repo.forks;
    language = repo.language;
    $("#repo-data").append(
      "<tr>" +
        "<td>" + name + "</td>" +
        "<td>" + isPrivate +"</td>" +
        "<td>" + creation + "</td>" +
        "<td>" + forks + "</td>" +
        "<td>" + language + "</td>" +
        "<td><a href='" + cloneUrl + "'>Clone Link</a></td>" +
      "</tr>"
    );
  });
  $("#repo-list").show();
};


$(document).ready(function () {
  $('#user-search').click(function() {
    var userName = $('#user-name').val();
    $('#user-name').val("");
    console.log(userName);
    newUser = new User();
    newUser.getUserInfo(userName, displayUserStats);
    newUser.getRepoInfo(userName, displayRepoStats);
  });
});
