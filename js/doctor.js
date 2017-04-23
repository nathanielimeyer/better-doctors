var apiKey = require('./../.env').apiKey;

Doctor = function(){
};

Doctor.prototype.getAllConditions = function (buildConditionsList) {
  $.get('https://api.betterdoctor.com/2016-03-01/conditions?fields=name%2Cuid&user_key=' + apiKey)
  .then(function(response) {
    var conditionsArray = response.data;
    var conditionsList = [];
    conditionsArray.forEach(function(condition) {
      conditionsList.push(condition.name);// $('#condition').append('.');
    });
    buildConditionsList(conditionsList);
  })
  .fail(function(error) {
    console.log("didn't work");
  });
};

Doctor.prototype.getDoctorsByCondition = function (condition, showDoctors) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + condition  + '&user_key=' + apiKey)
  .then(function(response) {
    console.log(response);
  })
  .fail(function(error) {
    console.log("didn't work");
  });
};

exports.doctorModule = Doctor;
