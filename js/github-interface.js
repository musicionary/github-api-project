var User = require('./../js/github.js').userModule;

var displayUserStats = function (userName, userAvatar, userRealName, userFollowers, userFollowing, userBio, userAccountDate, userRepos) {
  $("#user-data").text("");
  $("#user-data").append(
    "<div class='row'>" +
      "<div class='col s12 m6'>" +
        "<img class='responsive-img' src='" + userAvatar + "'/>" +
      "</div>" +
      "<div class='col s12 m6 card-panel teal lighten-2'>" +
        "<h2 class='grey-text text-lighten-3'>" + userRealName + "</h2>" +
        "<p class='grey-text text-lighten-3'>" + userName + "</p>" +
        "<p class='grey-text text-lighten-3'>Followers: " + userFollowers + " Following: " + userFollowing + "</p>" +
        "<p class='grey-text text-lighten-3'>Bio: " + userBio + "</p>" +
        "<p class='grey-text text-lighten-3'>Github User Since: " + userAccountDate + "</p>" +
        "<p class='grey-text text-lighten-3'>Number of repositories: " + userRepos + "</p>" +
      "</div>" +
    "</div>"
  );
};

var displayRepoStats = function(userName, response) {
  $('#repo-data').text("");

  var repos = response;
  var name, description, isPrivate, creation, cloneUrl, forks, language;
  repos.forEach(function (repo) {
    name = repo.name;
    description = repo.description;
    isPrivate = repo.private;
    creation = repo.created_at;
    cloneUrl = repo.clone_url;
    forks = repo.forks;
    language = repo.language;
    $("#repo-data").append(
      "<tr>" +
        "<td>" + name + "</td>" +
        "<td class='description'>" + description + "</td>" +
        "<td>" + isPrivate +"</td>" +
        "<td>" + creation + "</td>" +
        "<td>" + forks + "</td>" +
        "<td>" + language + "</td>" +
        "<td><a class='waves-effect waves-light btn blue lighten-1' href='" + cloneUrl + "'>Clone Link</a></td>" +
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
