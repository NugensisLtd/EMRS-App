(function() {
  'use strict';
        
  angular.module('signOffMod', ['ionic'])  

  .controller('SignOffCtrl', function($scope,$state,frmData) {
    
   
    $scope.signOff = function() {
    	
    	frmData.empty();
    	$state.go('mainmenu');
  	}; 
        
});
  
})();