(function() {
  'use strict';
        
  angular.module('ClinicalDetailsMod', ['ionic','ddListsMod'])  

  .controller('ClinicalDetailsCtrl', function($state,$scope,ddLists,frmData,FormService,formsManager) {

    console.log('formsManager.currentForm.sasAccIncidentNumber: '+formsManager.currentForm.sasAccIncidentNumber);

    var frmInstance='';
    if(FormService.instance == null)
    {
      // No Form instance go back to general details tab
      $state.go('multiform.generaldetails');
    }
    else{
      // Form Instance available
      frmInstance = FormService.instance; 
      console.log(frmInstance);
    }

    /* Set Dropdown defaults */
    $scope.ddWorkingDiagnosis = ddLists.getWorkingDiagnosis();

    /* Scope variable to hold form */
  	$scope.frmClinical ={
      pastMedicalHistory : ddLists.getPastMedicalHistory(),
      medication : ddLists.getMedication(),
      primaryMedicalProblem : ddLists.getPrimaryMedicalProblem(),
      otherMedicalProblem : ddLists.getOtherMedicalProblem(),

      /* Array of objects to hold multiple textbox values */  
      initialClinicalDetails : FormService.initialClinicalDetails,		
			arClinicalDetails: frmData.getClinicalDetails(),
      initialAdviceGiven : frmData.getInitialAdviceGiven(),
      arAdviceGiven : frmData.getAdviceGiven(),
      arClinicalFindings: frmData.getClinicalFindings()
  	};

    /* 
    ************************************
      Multiple Input boxes with removes
    ************************************
    */

    /* Clinical Details */
    $scope.addInitialClinicalDetails = function() {
      var nextid = $scope.frmClinical.arClinicalDetails.length + 1;

      // Add Empty object with next id
      $scope.frmClinical.arClinicalDetails.push({id: nextid, name: ""});     
    }

    $scope.removeClinicalDetail = function(id) {

        var arr = $scope.frmClinical.arClinicalDetails;
        
        for (var i =0; i < arr.length; i++)
         if (arr[i].id === id) {
            arr.splice(i,1);
            break;
         }                       
    }

    /* Advice Given */
    $scope.addAdviceGiven = function() {
      var nextid = $scope.frmClinical.arAdviceGiven.length + 1;
      $scope.frmClinical.arAdviceGiven.push({id: nextid, name: ""});     
    }

    $scope.removeAdviceGiven = function(id) {

        var arr = $scope.frmClinical.arAdviceGiven;
        
        for (var i =0; i < arr.length; i++)
         if (arr[i].id === id) {
            arr.splice(i,1);
            break;
         }                       
    }
    
    /* Clinical Findings */
    $scope.addClinicalFindings = function() {
      var nextid = $scope.frmClinical.arClinicalFindings.length + 1;
      $scope.frmClinical.arClinicalFindings.push({id: nextid, name: ""});     
    }

    $scope.removeClinicalFindings = function(id) {

        var arr = $scope.frmClinical.arClinicalFindings;
        
        for (var i =0; i < arr.length; i++)
         if (arr[i].id === id) {
            arr.splice(i,1);
            break;
         }                       
    }

    $scope.addFurtherWorkingDiagnosis = function() {
      alert("Need spec for this control");
    }
    /* 
    End Of Multiple inputs
    /**************************************/

    /* Co-Morbidty Show/Hide */
   var showflag = false;
   $scope.on = function(){
     showflag = true;
   }

   $scope.off = function(){
     showflag = false;
   } 

   $scope.showDiv = function(){
     return showflag;
   }

   $scope.frmCreateNewForm = function() { 
    /* 
    ************************************
    Empty arrays and get data from bound contorls. This avoids duplicates in our array.
    *************************************/
    //$scope.frmClinical.arClinicalDetails=[];
    //$scope.frmClinical.arAdviceGiven=[];
    //$scope.frmClinical.arClinicalFindings=[];


    /* 
    ************************************
    Save Checkbox / Radio Values
    *************************************/    

    /* Past Medical History */
    for (var i =0; i < $scope.frmClinical.pastMedicalHistory.length; i++){
      if($scope.frmClinical.pastMedicalHistory[i].isChecked)
      {
        frmInstance.pastMedicalHistory.push($scope.frmClinical.pastMedicalHistory[i].id);
      }
    }

    /* Medication */
    for (var i =0; i < $scope.frmClinical.medication.length; i++){
      if($scope.frmClinical.medication[i].isChecked)
      {
        frmInstance.medication.push($scope.frmClinical.medication[i].id);
      }
    }

    /* Primary Medical Problem */
    for (var i =0; i < $scope.frmClinical.primaryMedicalProblem.length; i++){
      if($scope.frmClinical.primaryMedicalProblem[i].isChecked)
      {
        frmInstance.primaryMedicalProblem.push($scope.frmClinical.primaryMedicalProblem[i].id);
      }
    }

    /* Other Medical Problem */
    for (var i =0; i < $scope.frmClinical.otherMedicalProblem.length; i++){
      if($scope.frmClinical.otherMedicalProblem[i].isChecked)
      {
        frmInstance.otherMedicalProblem.push($scope.frmClinical.otherMedicalProblem[i].id);
      }
    }

    /* 
    ************************************
      Saving Multiple Input Values
    ************************************
    */

    /* Clinical Details */
    frmInstance.initialClinicalDetails = $scope.frmClinical.initialClinicalDetails;
    //multiples
    for (var i =0; i < $scope.frmClinical.arClinicalDetails.length; i++){
      frmInstance.clinicalDetails.push({id: $scope.frmClinical.arClinicalDetails[i].id, name: $scope.frmClinical.arClinicalDetails[i].name});
    }  

    /* Advice Given */
    frmInstance.initialAdviceGiven = $scope.frmClinical.initialAdviceGiven;
    //multiples
    for (var i =0; i < $scope.frmClinical.arAdviceGiven.length; i++){
      frmInstance.adviceGiven.push({id: $scope.frmClinical.arAdviceGiven[i].id, name: $scope.frmClinical.arAdviceGiven[i].name});
    } 

    /* Clinical Findings */
    frmInstance.initialClinicalFindings = $scope.frmClinical.initialClinicalFindings;
    //multiples
    for (var i =0; i < $scope.frmClinical.arClinicalFindings.length; i++){
      frmInstance.clinicalFindings.push({id: $scope.frmClinical.arClinicalFindings[i].id, name: $scope.frmClinical.arClinicalFindings[i].name});
    } 
    console.log(frmInstance);

    frmInstance.comorbidty =  $scope.frmClinical.comorbidty;
    frmInstance.initialWorkingDiagnosis = $scope.frmClinical.initialWorkingDiagnosis.id;
    frmInstance.typeOfInjury = $scope.frmClinical.typeOfInjury;

    //Re-Bind Multiples
    $scope.frmClinical.arClinicalDetails = frmData.getClinicalDetails();
    $scope.frmClinical.arAdviceGiven = frmData.getAdviceGiven(); 
    $scope.frmClinical.arClinicalFindings = frmData.getClinicalFindings();  
  }; 


	});
  
})();