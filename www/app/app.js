// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

var db = null;
var gIpAddr = "http://192.168.1.64:8080";
//var zumero = cordova.require("cordova/plugin/zumero");

angular.module('emrs', ['ionic','loginMod','GeneralDetailsMod','ClinicalDetailsMod','frmDataMod','signOffMod','testfactoryMod','formsManagerServiceMod','formModelMod'])


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
        
        
    .state('login', {
      url: '/login',
      templateUrl: 'app/templates/login.html',
      controller: 'loginCtrl'
    })

     .state('mainmenu', {
      url: '/app/mainmenu',
      templateUrl: 'app/templates/mainmenu.html'
    })

     /**** MULTI FORM ****/
    .state('multiform',{ 
      abstract:true,
      url:'/templates/multiform',            
      templateUrl: "app/layout/menu-layout.html"
    })

    .state('multiform.generaldetails',{ 
    url:'/generaldetails',
    views:{
            "mainContent" :{
            templateUrl:'app/templates/multiform/GeneralDetails.html',
            controller:'GeneralDetailsCtrl'                 
            }
      }            
    })

    .state('multiform.clinicaldetails',{ 
    url:'/clinicaldetails',
    views:{
            "mainContent" :{
            templateUrl:'app/templates/multiform/ClinicalDetails.html',
            controller:'ClinicalDetailsCtrl'                 
            }
      }            
    })

    .state('multiform.signoff',{ 
    url:'/signoff',
    views:{
            "mainContent" :{
            templateUrl:'app/templates/multiform/SignOff.html',
            controller:'SignOffCtrl'                 
            }
      }            
    });
    

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
