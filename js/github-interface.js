var User = require('./../js/github.js').userModule;

// var displayUserStats = function (userName, userStats) {
//   $("#user-data").append("<h2>" + + "</h2>");
// };


$(document).ready(function () {
  $('#user-search').click(function() {
    var userName = $('#user-name').val();
    $('#user-name').val("");
    console.log(userName);
    newUser = new User();
    newUser.getUserInfo(userName);
  });
});
