(function() {
  'use strict';
        
  angular.module('GeneralDetailsMod', ['ionic','ddListsMod'])  

  .controller('GeneralDetailsCtrl', function($scope,ddLists,frmData,FormService) {
    // Default to Primary View
    $scope.content='first';

    var frmInstance='';
    if(FormService.instance == null)
    {
      // Create new form instance
      frmInstance = FormService.new();
      $scope.frmInstance = frmInstance;
      $scope.frm={};
    }
    else{
      // Form Instance available
      frmInstance = FormService.instance; 

      // declare frm object on the scope and use properties to hold form data inside the frm object
      $scope.frm = {
        SasAccIncidentNumber : FormService.instance.sasAccIncidentNumber,
        PatientLocation : FormService.instance.patientLocation,
        PatientName : FormService.instance.patientName,
        ChiNumber : FormService.instance.chiNumber,
        PatientDOB : FormService.instance.patientDOB,
        PatientAge : FormService.instance.patientAge,
        PatientWeight : FormService.instance.patientWeight,
        Gender : FormService.instance.gender,
        MissionNumber : FormService.instance.missionNumber,
        EventDate : FormService.instance.eventDate,
        ActivationTeam : FormService.instance.activationTeam,
        ReferralSource : FormService.instance.referralSource,
        ReferralSourceOtherDetails : FormService.instance.referralSourceOtherDetails,
        Consultant : FormService.instance.consultant,
        SecTeamMember : FormService.instance.secTeamMember,
        Paramedic : FormService.instance.paramedic
      }; 

      console.log(frmInstance);
    }
    
    
    //myinstance.sasAccIncidentNumber = '';
    //FormService.empty();

    //var myinstance = FormService.new();
    //myinstance.field1='mits';
    //console.log(myinstance);

    //FormService.instance;
    
    //console.log(FormService.instance.field1);
    //FormService.empty();

    //var myinstance = FormService.new();
    //myinstance.field1='steve';
    //console.log(myinstance);


    // Set dd
    $scope.ddActivationTeams = ddLists.getActivationTeams();


    // declare frm object on the scope and use properties to hold form data inside the frm object
    /*
    $scope.frm = {
      SasAccIncidentNumber : frmData.getSasAccIncidentNumber(),
      PatientLocation : frmData.getPatientLocation(),
      PatientName : frmData.getPatientName(),
      ChiNumber : frmData.getChiNumber(),
      PatientDOB : frmData.getPatientDOB(),
      PatientAge : frmData.getPatientAge(),
      PatientWeight : frmData.getPatientWeight(),
      Gender : frmData.getGender(),
      MissionNumbder : frmData.getMissionNumber(),
      EventDate : frmData.getEventDate(),
      ActivationTeam : frmData.getActivationTeam(),
      ReferralSource : frmData.getReferralSource(),
      ReferralSourceOtherDetails : frmData.getReferralSourceOtherDetails(),
      Consultant : frmData.getConsultant(),
      SecTeamMember : frmData.get2ndTeamMember(),
      Paramedic : frmData.getParamedic()
    };
    */

  	$scope.frmCreateNewForm = function() {  

      frmInstance.sasAccIncidentNumber = $scope.frm.SasAccIncidentNumber;	
      frmInstance.patientLocation = $scope.frm.PatientLocation;

      frmInstance.patientName = $scope.frm.PatientName;
      frmInstance.chiNumber = $scope.frm.ChiNumber;
      frmInstance.patientDOB = $scope.frm.PatientDOB;
      frmInstance.patientAge = $scope.frm.PatientAge;
      frmInstance.patientWeight =  $scope.frm.PatientWeight;
      frmInstance.gender = $scope.frm.Gender;
      frmInstance.missionNumber = $scope.frm.MissionNumber;

      frmInstance.eventDate = $scope.frm.EventDate;
      frmInstance.activationTeam = $scope.frm.ActivationTeam;
      frmInstance.referralSource = $scope.frm.ReferralSource;
      frmInstance.referralSourceOtherDetails = $scope.frm.ReferralSourceOtherDetails;
      frmInstance.consultant =  $scope.frm.Consultant;
      frmInstance.secTeamMember = $scope.frm.SecTeamMember;
      frmInstance.paramedic = $scope.frm.Paramedic;   

      console.log(frmInstance);       
    };   
	});
  
})();