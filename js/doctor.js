var apiKey = require('./../.env').apiKey;

Doctor = function(){
};

var conditionsList = [];
var insurancesList = [];

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

Doctor.prototype.getAllInsurances = function (buildInsurancesList) {
  $.get('https://api.betterdoctor.com/2016-03-01/insurances?user_key=' + apiKey)
  .then(function(response) {
    insurancesList = [];
    // console.log(response.data);
    response.data.forEach(function(insurance) {
      insurance.plans.forEach(function(plan) {
        insurancesList.push({value: plan.uid, label: (insurance.name + ' - ' + plan.name)});
      });
    });
    console.log(insurancesList);
    buildInsurancesList(insurancesList);
  })
  .fail(function(error) {
    console.log("didn't work");
  });
};

Doctor.prototype.getDoctors = function (location, condition, insurance, showDoctors) {
  var url = 'https://api.betterdoctor.com/2016-03-01/doctors';
  if (location || condition || insurance) {
    url = url.concat('?');
    if (location) {
      url = url.concat('&location=' + location + ',10');
    }
    if (condition) {
      url = url.concat('&query=' + condition);
    }
    if (insurance) {
      url = url.concat('&insurance_uid=' + insurance);
    }
  }
  url = url.concat('&user_key=' + apiKey);
  console.log(url);
  $.get(url)
  .then(function(response) {
    console.log(response);
    showDoctors(response.data);
  })
  .fail(function(error) {
    console.log("didn't work");
  });
};

exports.doctorModule = Doctor;
