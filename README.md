# _Library App_ :lips:

##### This application is a site that allows the user to access the Github api. I've been working on creating gulp tasks, bower tasks, and my first API call via the open source weather API.  The user can discover the humidity in any city, or based on their location.








Create a website where the user can enter a GitHub username into a form, submit it, and see names and descriptions of that person's public repositories.

Use the GitHub API to retrieve this information. This API allows 5,000 requests per hour with an API key, but only 60 requests per hour without one. Everyone is therefore required to use their own unique key. GitHub refers to these keys as "Personal Access Tokens".


Display the date each repository was created and use Moment.js (installed via Bower) to format it.


If someone wants to try your project but doesn't have an API key, you can add functionality to allow a limited amount of API calls (60 per hour instead of 5,000). Add logic to make an un -authenticated request if the .env file with the API key does not exist.

Does the website work as expected?

Did you follow all setup instructions, including storing your API key in the variable exports.apiKey?

Does the app include at least 2 JavaScript files?

Is exports used successfully in at least one JavaScript file?

Are dependencies managed with npm and Bower?

Does the app include a gulp-based asset pipeline with a development server? Does the asset pipeline include all tasks from the homework this week? (See below)

Gulp Tasks Reference
For reference, the following Gulp tasks were used this week:

Concatenation, minification, and running the browserify package on your JavaScript.
Building and cleaning.
Running the development server with live reloading.
Running JSHint.
Automatically including Bower dependencies as vendor.min.js and vendor.css.


User Object data:
response.login
.avatar_url (web address)
.bio
.blog
.company
.created_at (use moment to format time stamp)
.followers
.followers_url
.following
.hireable
.html_url
.name
.organizations_url
.public_repos
.repos_url


User Repo Date:
  -it's an array
  response[i].name
  .private
  .created_at
  .clone_url
  .contributors_url
  .forks
  .language

repo commit activity data url:
/repos/:owner/:repo/stats/commit_activity















## Technologies Used

Application: Node, Bower, JSON, NPM, Gulp, Github API<br>
Framework: Bootstrap

Installation
------------

First clone the repository.  
```
$ git clone https://github.com/musicionary/github-api.git
```

Install required npm packages:
```
$ npm install
```

Install required bower packages:
```
$ bower install
```

Register your app with Google APIs.


Run the gulp build task in the terminal in the repository folder:
```
$ gulp build
```

Run the gulp serve task in the terminal in the repository folder:
```
$ gulp serve
```

Your browser should open the webpage automatically.

License
-------

MIT License. Copyright &copy; 2016 "Chip Carnes"
