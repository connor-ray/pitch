$(document).ready(function() {
  getNearbyLocations();
});



var getNearbyLocations = function () {
 $("#button").on('click', function (event) {
   console.log("triggered");
   event.preventDefault();

  //  var category = this.serialize()  // get the category information

   // might have to parse out the input here because serialize gives key value hash

   $.ajax({
     url: 'https://places.demo.api.here.com/places/v1/discover/explore',
     type: 'GET',
     data: {
       at: '37.7719,-122.4218',
       cat: 'eat-drink',
       app_id: 'fRTOmoR7FfcvAIuCqt1V',
       app_code: 'X1FkzDPPRfhlg2cjfTbT2w'
     },
     beforeSend: function(xhr){
       xhr.setRequestHeader('Accept', 'application/json');
     },
     success: function (data) {
       objects = data.results.items
       parsedData = []
       for (var i = 0; i < objects.length; i++){
         objectData = [objects[i].title, objects[i].vicinity, objects[i].distance, objects[i].category.title, i]
         parsedData.push(objectData);
         $("#locationList").append("<div class='detail-container'><span class='place-title'>" + objectData[0] + "</span><span class='place-detail'>" + objectData[1] + "</span><br><span class='place-detail'>" + objectData[2] + "</span><br><span class='place-detail'>" + objectData[3] + "</span></div>");
         $("#locationList").append("<div class='pitch-btn'><form class='' action='' method='post'><input type='hidden' name='item[title]' value='" + objectData[0] + "'><input type='hidden' name='item[address]' value='" + objectData[1] + "'><input type='hidden' name='item[distance]' value='" + objectData[2] + "'><input type='hidden' name='item[category]' value='" + objectData[3] + "'><input type='submit' class='submit-btn' value='PITCH-IT'></form></div>");
       }
       // parse through information and acquire desired attributes
       // title, location, vicinity, etc
       // append to list
     }
   })
 })
};

// each list item will have to be put into a form
// each list item paramter might have to be made into a 'form' that doesn't look like a form so they can be passed into controller basically

// var createProposalObject = function () {
//  $(somesubmitbutton).on('submit', function (event){
//    event.preventDefault();
//
//    var values = {}
//    $.each($(this).serializeArray(), function (i, field) {
//      values[field.name] = field.value;
//    });
//    // value retrieval function
//    var getValue = function (valueName) {
//      return values[valueName]
//    };
//    // retrieve the symptoms
//    var distance = getValue("distance");
//    var title = getValue("title");
//    var vicinity = getValue("vicinity");
//    var id = getValue('id');
//
//
//  })
// }
