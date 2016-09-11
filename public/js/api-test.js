$(document).ready(function() {
  getNearbyLocations();
});

var generateMap = function (coordinates) {
  // console.log(coordinates)
  $.ajax({
    url: 'https://image.maps.api.here.com/mia/1.6/mapview',
    type: 'GET',
    data: {
       c: '37.7719,-122.4218', // this is the current location (tech crunch location)
       app_id: 'fRTOmoR7FfcvAIuCqt1V',
       app_code: 'X1FkzDPPRfhlg2cjfTbT2w',
       poi: coordinates
       // contentType: 'image/jpeg;charset=UTF-8'
     },
     success: function (data) {
      console.log(data);
      json = JSON.stringify(data);
      // alert(json);
      console.log(typeof(json));
      console.log(json);
      // console.log(data)
      // alert(JSON.stringify(data))
      $('#locationList').append(json);
     }
  })
}


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
      // need to create another array or string with all coordinates of each object, then pass into generate map function, coordinates must be string separated by commas
       var coordinates = new String("");
       var objects = data.results.items
       var parsedData = []
       // teststring = objects[1].position[0]
       // coordinates += teststring
       // console.log(coordinates)
       for (var i = 0; i < objects.length; i++){
         objectData = [objects[i].title, objects[i].vicinity, objects[i].distance, objects[i].category.title, i]
         parsedData.push(objectData);
         $("#locationList").append('<li><span>' + objectData[0] + '</span></li><span>' + objectData[1] + '</span><br><span>' + objectData[2] + '</span><br><span>' + objectData[3] + '</span>');
         $("#locationList").append("<form class='' action='' method='post'><input type='hidden' name='item[title]' value='" + objectData[0] + "'><input type='hidden' name='item[address]' value='" + objectData[1] + "'><input type='hidden' name='item[distance]' value='" + objectData[2] + "'><input type='hidden' name='item[category]' value='" + objectData[3] + "'></form><input type='submit'>");
         // append each set of coordinates to a string
         coordinates += objects[i].position[0] + ','
         coordinates += objects[i].position[1] + ','
         // console.log(coordinates)
         // var coordinates += objects[i].position + ',';
         // delete last comma in the string
         // method will delete the very last index of the string
         var coordinates = coordinates.slice(0, -1)
         // console.log(coordinates)
       }
       generateMap(coordinates);
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
