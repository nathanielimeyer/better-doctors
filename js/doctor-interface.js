var Doctor = require('./../js/doctor.js').doctorModule;
var myDoctor = new Doctor();

var buildConditionsList = function(conditions) {
  var availableConditions = conditions;
  $("#condition").autocomplete({source: availableConditions});
}

var showDoctors = function(doctors) {
    $("#showDoctors").empty();
  cards.forEach(function(card) {
    $("#showDoctors").append('<div class="pokemonCard well col-md-4">' +
                '<h1><input type="button" id="' + card.name + '" class="listCardsByName" value="'+ card.name +'"/></h1>' +
                '<img src="' + card.imageUrl + '" alt="' + card.name + '" />' +
                '<p>HP: ' + card.hp + '; Rarity: ' + card.rarity + '</p>' +
              '</div>');
  });
};

$(document).ready(function() {
  myDoctor.getAllConditions(buildConditionsList);
  $('#searchDoctorsByCondition').click(function() {
    event.preventDefault();
    var condition = $("#condition").val();
    console.log(condition);
    myDoctor.getDoctorsByCondition(condition, showDoctors);
  });
});

// $(document).on("click", selector, function() {
//   $("#showTrackDetails").remove();
//   $(this).after('<span id="showTrackDetails"></span>');
//   var trackId = $(this).attr('id');
//   var artistName = $(this).attr('value');
//   var currentMusicObject = new Music();
//   currentMusicObject.getTrackDetails(trackId, trackDetails);
// });
