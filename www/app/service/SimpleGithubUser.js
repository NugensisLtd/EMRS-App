angular.module('SimpleGithubUserModule', []) 

.factory('SimpleGithubUser', function($http) {

    var apiUrl = 'https://api.github.com/';

    // instantiate our initial object
    var SimpleGithubUser = function(username) {
        this.username = username;
        this.profile = null;
    };

    // define the getProfile method which will fetch data
    // from GH API and *returns* a promise
    SimpleGithubUser.prototype.getProfile = function() {

        // Generally, javascript callbacks, like here the $http.get callback,
        // change the value of the "this" variable inside it
        // so we need to keep a reference to the current instance "this" :
        var self = this;

        return $http.get(apiUrl + 'users/' + this.username).then(function(response) {

            // when we get the results we store the data in user.profile
            self.profile = response.data

            // promises success should always return something in order to allow chaining
            return response;

        });
    };
    return SimpleGithubUser;
})