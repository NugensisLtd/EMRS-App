(function() {
  'use strict';
        
  angular.module('loginMod', ['ionic'])  

  .controller('loginCtrl', function($scope,$state,FormService) {
  	
  	//var myinstance = FormService.new();
  	//myinstance.field1='mits';
  	//console.log(myinstance);


    $scope.signIn = function(user) {
    console.log('Sign-In', user);
    $state.go('mainmenu');
  }; 
        
});
  
})();