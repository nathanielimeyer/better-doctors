Location = function(){};

Location.prototype.getLocation = function(showLocation) {
  $.get('http://ip-api.com/json')
  .then(function(response) {
    console.log(response);
  })
  .fail(function(error) {
    console.log("failed to acquire location");
  });
};

exports.locationModule = Location;
