var apiKey = require('./../.env').apiKey;

Doctor = function(){
};

var conditionsList = [];
var insurorsList = [];

Doctor.prototype.getAllConditions = function (buildConditionsList) {
  $.get('https://api.betterdoctor.com/2016-03-01/conditions?fields=name%2Cuid&user_key=' + apiKey)
  .then(function(response) {
    console.log(response);
    // conditionsList = [];
    conditionsList = "";
    response.data.forEach(function(condition) {
      // conditionsList.push(condition.name);
      conditionsList = conditionsList.concat("\", \"" + condition.name);
    });
    buildConditionsList(conditionsList);
  })
  .fail(function(error) {
    console.log("didn't work");
  });
};

Doctor.prototype.getAllInsurors = function (buildInsurorsList) {
  $.get('https://api.betterdoctor.com/2016-03-01/insurances?user_key=' + apiKey)
  .then(function(response) {
    insurorsList = [];
    // console.log(response.data);
    response.data.forEach(function(insuror) {
      insuror.plans.forEach(function(plan) {
        insurorsList.push(insuror.name + ' - ' + plan.name);
      });
    });
    buildInsurorsList(insurorsList);
  })
  .fail(function(error) {
    console.log("didn't work");
  });
};

Doctor.prototype.getDoctorsByCondition = function (condition, showDoctors) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + condition  + '&user_key=' + apiKey)
  .then(function(response) {
    showDoctors(response.data);
  })
  .fail(function(error) {
    console.log("didn't work");
  });
};

exports.doctorModule = Doctor;
