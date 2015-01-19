angular.module('testfactoryMod', []) 

.service('FormService', function () {

    this.instance = null;

    this.new = function() {
        this.instance = {
            /* General Details */
            sasAccIncidentNumber: "",
            patientLocation: "",
			patientName: "",  
			chiNumber: "",
			patientDOB: "",
			patientAge: "",
			patientWeight: "",
			gender: "",
			missionNumber: "",
			eventDate: "",
			activationTeam: "",
			referralSource: "",
			referralSourceOtherDetails: "",
		    consultant: "",
			secTeamMember: "",
			paramedic: "",

            /* Clinical Details */
            pastMedicalHistory: [],
            medication: [],
            primaryMedicalProblem: [],
            otherMedicalProblem: [],

            initialClinicalDetails: "",
            clinicalDetails: [],

            initialAdviceGiven: "",
            adviceGiven: [],

            initialClinicalFindings: "",
            clinicalFindings: [],

            comorbidty: "",
            initialWorkingDiagnosis: "",
            typeOfInjury: ""

        };

        return this.instance;
    }

    this.changenum = function(num) {
        this.instance.sasAccIncidentNumber = num;
    }

    this.load = function(eventId) {
        this.instance = localStorage.getItem(eventId);
    }
    this.save = function(eventId) {
        localStorage.setItem(eventId, this.instance);
    }

    this.empty = function(){
    		this.instance = {};
    }

});