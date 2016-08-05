# _Library App_ :lips:

##### This application is a site that allows the user to access the Github api. I've been working on creating gulp tasks, bower tasks, and API calls via the Github API.  The user can search for Github users by username and see a list of the Github user's repositories.

## Technologies Used

Application: Node, Bower, JSON, NPM, Gulp, Github API<br>
Framework: Materialize

Installation
------------

First clone the repository.  
```
$ git clone https://github.com/musicionary/github-api-project.git
```

Install required npm packages:
```
$ npm install
```

Install required bower packages:
```
$ bower install
```

Create your own Github authorization token and create a .env file in the top level of the cloned folder.  Place your API key in the .env file as:
```
exports.apiKey = 'yourAPIkeygoeshere';
```


Run the gulp build task in the terminal in the repository folder:
```
$ gulp build
```

Run the gulp serve task in the terminal in the repository folder:
```
$ gulp serve
```

Your browser should open the webpage automatically, if not however, visit Localhost:3000.

License
-------

MIT License. Copyright &copy; 2016 "Chip Carnes"
