(function() {
  'use strict';
        
  angular.module('loginMod', ['ionic'])  

  .controller('loginCtrl', function($scope,$state) {
  
    //debugger;
   

    $scope.signIn = function(user) {
    console.log('Sign-In', user);
    $state.go('mainmenu');
  }; 
        
});
  
})();