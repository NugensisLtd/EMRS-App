angular.module('ddListsMod', []) 
  
  .factory('ddLists', [function () {
    
    var mycustomtext ="do this do that...";
    var activationTeams = [];
    var workingDiagnosis = [];

    function bla(){
        mycustomtext = mycustomtext + "blablablabla...";
        return mycustomtext;
    }
    
    return {

      getActivationTeams : function(){
        
        activationTeams.push({id: '1', name: "person 1"});
        activationTeams.push({id: '1', name: "person 2"});
        return activationTeams;
      },

      getWorkingDiagnosis : function(){
        
        workingDiagnosis.push({id: '1', name: "Abdominal Injury"});
        workingDiagnosis.push({id: '2', name: "Acute Abdomen"});
        workingDiagnosis.push({id: '2', name: "Acute MI"});
        return workingDiagnosis;
      },

      getPastMedicalHistory : function(){
        return [
        { name: "Condition 1", id: 0, isChecked: false }, 
        { name: "Condition 2", id: 1, isChecked: false }, 
        { name: "Condition 3", id: 2, isChecked: false },
        { name: "Condition 4", id: 3, isChecked: false }, 
        { name: "Other", id: 4, isChecked: false }
        ];
      },

      getMedication : function(){
        return [
        { name: "Medication 1", id: 0, isChecked: false }, 
        { name: "Medication 2", id: 1, isChecked: false }, 
        { name: "Medication 3", id: 2, isChecked: false },
        { name: "Medication 4", id: 3, isChecked: false }, 
        { name: "Other", id: 4, isChecked: false }
        ];
      },

      getPrimaryMedicalProblem : function(){
        return [
        { name: "Cardiac Arrest", id: 0, isChecked: false }, 
        { name: "Trauma", id: 1, isChecked: false }, 
        { name: "Breathing Difficulties", id: 2, isChecked: false },
        { name: "Chest Pain", id: 3, isChecked: false }, 
        { name: "Stroke", id: 4, isChecked: false },
        { name: "Acute Neurology Excluding Stroke", id: 5, isChecked: false },
        { name: "Phychiatry Including Intoxication", id: 6, isChecked: false },
        { name: "Obsterics and Childbirth", id: 7, isChecked: false },
        { name: "Infection", id: 8, isChecked: false },
        { name: "Other", id: 9, isChecked: false }
        ];
      },

      getOtherMedicalProblem : function(){
        return [
        { name: "Cardiac Arrest", id: 0, isChecked: false }, 
        { name: "Trauma", id: 1, isChecked: false }, 
        { name: "Breathing Difficulties", id: 2, isChecked: false },
        { name: "Chest Pain", id: 3, isChecked: false }, 
        { name: "Stroke", id: 4, isChecked: false },
        { name: "Acute Neurology Excluding Stroke", id: 5, isChecked: false },
        { name: "Phychiatry Including Intoxication", id: 6, isChecked: false },
        { name: "Obsterics and Childbirth", id: 7, isChecked: false },
        { name: "Infection", id: 8, isChecked: false },
        { name: "Other", id: 9, isChecked: false }
        ];
      }
    };

  }]);
