
angular.module('frmDataMod', []) 


.service('frmData', function(){

  /* 
  ***************************************
  General Details Tab 
  /*************************************/
  var _sasAccIncidentNumber="";
  var _patientLocation="";
  var _patientName="";  
  var _chiNumber="";
  var _patientDOB="";
  var _patientAge="";
  var _patientWeight="";
  var _gender="";
  var _missionNumber="";
  var _eventDate="";
  var _activationTeam="";
  var _referralSource="";
  var _referralSourceOtherDetails="";
  var _consultant="";
  var _secTeamMember="";
  var _paramedic="";

  this.empty = function(){
    _patientLocation="";
    _patientName="";
  };

  this.setSasAccIncidentNumber = function(num){
    _sasAccIncidentNumber = num;
  };

  this.getSasAccIncidentNumber = function(){
    return _sasAccIncidentNumber;
  };

  this.setPatientLocation = function(str){
    _patientLocation = str;
  };

  this.getPatientLocation = function(){
    return _patientLocation;
  };

  this.setPatientName = function(str){
    _patientName = str;
  };

  this.getPatientName = function(){
    return _patientName;
  };

  this.setChiNumber = function(str){
    _chiNumber = str;
  };

  this.getChiNumber = function(){
    return _chiNumber;
  };
  
  this.setPatientDOB = function(str){
    _patientDOB = str;
  };

  this.getPatientDOB = function(str){
    return _patientDOB;
  };

  this.setPatientAge = function(str){
    _patientAge = str;
  };

  this.getPatientAge = function(){
    return _patientAge;
  };

  this.setPatientWeight = function(str){
    _patientWeight = str;
  };

  this.getPatientWeight = function(){
    return _patientWeight;
  };

  this.setGender = function(str){
    _gender = str;
  };

  this.getGender = function(){
    return _gender;
  };
   
  this.setMissionNumber = function(str){
    _missionNumber = str;
  };

  this.getMissionNumber = function(){
    return _missionNumber;
  };

  this.setEventDate = function(str){
    _eventDate = str;
  };

  this.getEventDate = function(){
    return _eventDate;
  };

  this.setActivationTeam = function(str){
    _activationTeam = str;
  };

  this.getActivationTeam = function(){
    return _activationTeam;
  };

  this.setReferralSource = function(str){
    _referralSource = str;
  };

  this.getReferralSource = function(){
    return _referralSource;
  };

  this.setReferralSourceOtherDetails = function(str){
    _referralSourceOtherDetails = str;
  };

  this.getReferralSourceOtherDetails = function(){
    return _referralSourceOtherDetails;
  };

  this.setConsultant = function(str){
    _consultant = str;
  };

  this.getConsultant = function(){
    return _consultant;
  };

  this.setSecTeamMember = function(str){
    _secTeamMember = str;
  };

  this.get2ndTeamMember = function(){
    return _secTeamMember;
  };

  this.setParamedic = function(str){
    _paramedic = str;
  };

  this.getParamedic = function(){
    return _paramedic;
  };
  /***************************************/

  /* 
  ***************************************
  Clinical Details Tab 
  /**************************************/
  var _pastMedicalHistory =[]; 
  var _medication=[];
  var _primaryMedicalProblem=[];
  var _otherMedicalProblem=[];
  
  var _initialClinicalDetails = "";
  var _clinicalDetails = [];

  var _initialAdviceGiven = "";
  var _adviceGiven = [];

  var _initialClinicalFindings = "";
  var _clinicalFindings = [];

  var _comorbidty="";
  var _initialWorkingDiagnosis="";
  var _typeOfInjury="";

  this.getPastMedicalHistory = function(){
    return _pastMedicalHistory;
  };

  this.setPastMedicalHistory = function(id,name){
    _pastMedicalHistory.push({id: id, name: name});
  };

  this.getMedication = function(){
    return _medication;
  };

  this.setMedication = function(id,name){
    _medication.push({id: id, name: name});
  };

  this.getPrimaryMedicalProblem = function(){
    return _primaryMedicalProblem;
  };

  this.setPrimaryMedicalProblem = function(id,name){
    _primaryMedicalProblem.push({id: id, name: name});
  };

  this.getOtherMedicalProblem = function(){
    return _otherMedicalProblem;
  };

  this.setOtherMedicalProblem = function(id,name){
    _otherMedicalProblem.push({id: id, name: name});
  };
  

  /* Clinical Details*/
  this.setInitialClinicalDetails = function(str){
    _initialClinicalDetails = str;
  };

  this.getInitialClinicalDetails = function(){
    return _initialClinicalDetails;
  };

  this.setClinicalDetails = function(id,name){
    _clinicalDetails.push({id: id, name: name});
  };

  this.getClinicalDetails = function(){
    return _clinicalDetails;
  };

  /* Advice Given */
  this.getInitialAdviceGiven = function(){
    return _initialAdviceGiven;
  };

  this.setInitialAdviceGiven = function(str){
    _initialAdviceGiven = str;
  };

  this.setAdviceGiven = function(id,name){
    _adviceGiven.push({id: id, name: name});
  };

  this.getAdviceGiven = function(){
    return _adviceGiven;
  };

  this.setInitialClinicalFindings = function(str){
    _initialClinicalFindings = str;
  };

  this.setClinicalFindings = function(id,name){
    _clinicalFindings.push({id: id, name: name});
  };

  this.getClinicalFindings = function(){
    return _clinicalFindings;
  };

  this.setcomorbidty = function(str){
    _comorbidty = str;
  };

  this.getcomorbidty = function(){
    return _comorbidty;
  };

  this.setInitialWorkingDiagnosis = function(str){
    _initialWorkingDiagnosis = str;
  };

  this.getInitialWorkingDiagnosis = function(){
    return _initialWorkingDiagnosis;
  };

  this.setTypeOfInjury = function(str){
    _typeOfInjury = str;
  };

  this.getTypeOfInjury = function(){
    return _typeOfInjury;
  };

  /**************************************/


});
