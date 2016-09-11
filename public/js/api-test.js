$(document).ready(function() {
  // getNearbyLocations();
  generateMap();
});

// var getNearbyLocations = function () {
 // $("#button").on('click', function (event) {
 //   console.log("triggered");
 //   event.preventDefault();

var generateMap = function(coordinates) { 
  $("#test").on('click', function (event) {
   console.log("triggered");
   event.preventDefault();

    var mapurl = "https://image.maps.cit.api.here.com/mia/1.6/mapview?";
    var currentLocation = 'c=37.7719,-122.4218&';
    var app_id = '&app_id=6E6ECV8X9yllwqowlbdF&'; 
    var app_code = 'app_code=bGWBR9zg_GlSh-8TQis1Hw';
    coordinates.slice
    var poi = 'poi=' + coordinates; 
    // console.log(poi)

    var dataUrl = mapurl + currentLocation + poi + app_id + app_code; 
    console.log(dataUrl);

  // https://image.maps.cit.api.here.com/mia/1.6/mapview?c=37.7719,-122.4218&poi=37.776235%2C-122.42319637.775772%2C-122.40931937.772%2C-122.4311737.7666%2C-122.433337.77289%2C-122.4122837.782928%2C-122.41727337.76287%2C-122.4322437.78366%2C-122.4330737.762046%2C-122.41921637.77753%2C-122.4379837.776023%2C-122.42407337.76701%2C-122.4217737.772049%2C-122.41088637.758339%2C-122.42035737.77334%2C-122.4216337.776056%2C-122.4240837.759658%2C-122.43471737.78581%2C-122.4182837.79157%2C-122.4213337.77627%2C-122.42636&app_id=6E6ECV8X9yllwqowlbdF&app_code=bGWBR9zg_GlSh-8TQis1Hw
    $.ajax({ 
      url: 'mapurl', 
      type: 'get',
      data: {url: dataUrl},

      success: function (data) {
        json = JSON.stringify(data)
        console.log(data)
        // $('div #map').append(data);
        $('#map').append('<img id="responseImage" class="image-viewer" alt="Response Image" src=' + json + '>')
      }

    });

  )};
};
// var generateMap = function (coordinates) {
//   // console.log(coordinates)
//   $.ajax({
//     url: 'https://image.maps.cit.api.here.com/mia/1.6/mapview?c=37.7719,-122.4218&app_id=6E6ECV8X9yllwqowlbdF&app_code=bGWBR9zg_GlSh-8TQis1Hw&poi=37.776235,-122.423196, 37.775772, -122.409319,37.772,-122.43117&w=800&h=1000',
//     type: 'GET',
//     data: {
//        c: '37.7719,-122.4218', // this is the current location (tech crunch location)
//        app_id: 'fRTOmoR7FfcvAIuCqt1V',
//        app_code: 'X1FkzDPPRfhlg2cjfTbT2w',
//        poi: coordinates, 
//        w: 600, 
//        h: 600
//        // contentType: 'image/jpeg;charset=UTF-8'
//      },
//      success: function (data) {
//       console.log(data);
//       json = JSON.stringify(data);
//       alert(json);
//       // console.log(typeof(json));
//       // console.log(json);
//       // console.log(data)
//       // alert(JSON.stringify(data))
//       // $('#map').append(data);
//      }
//   })
// }


// var getNearbyLocations = function () {
//  $("#button").on('click', function (event) {
//    console.log("triggered");
//    event.preventDefault();

//   //  var category = this.serialize()  // get the category information

//    // might have to parse out the input here because serialize gives key value hash

//    $.ajax({
//      url: 'https://places.demo.api.here.com/places/v1/discover/explore',
//      type: 'GET',
//      data: {
//        at: '37.7719,-122.4218',
//        cat: 'eat-drink',
//        app_id: 'fRTOmoR7FfcvAIuCqt1V',
//        app_code: 'X1FkzDPPRfhlg2cjfTbT2w'
//      },
//      beforeSend: function(xhr){
//        xhr.setRequestHeader('Accept', 'application/json');
//      },
//      success: function (data) {
//       // need to create another array or string with all coordinates of each object, then pass into generate map function, coordinates must be string separated by commas
//        var coordinates = new String("");
//        var objects = data.results.items
//        var parsedData = []
//        teststring = objects[1].position[1]
//        // coordinates += teststring
//        console.log(teststring)
//        for (var i = 0; i < objects.length; i++){
//          objectData = [objects[i].title, objects[i].vicinity, objects[i].distance, objects[i].category.title, i]
//          parsedData.push(objectData);
//          $("#locationList").append('<li><span>' + objectData[0] + '</span></li><span>' + objectData[1] + '</span><br><span>' + objectData[2] + '</span><br><span>' + objectData[3] + '</span>');
//          $("#locationList").append("<form class='' action='' method='post'><input type='hidden' name='item[title]' value='" + objectData[0] + "'><input type='hidden' name='item[address]' value='" + objectData[1] + "'><input type='hidden' name='item[distance]' value='" + objectData[2] + "'><input type='hidden' name='item[category]' value='" + objectData[3] + "'></form><input type='submit'>");
//          // append each set of coordinates to a string
//          coordinates += objects[i].position[0] + '%2C'
//          coordinates += objects[i].position[1] + '%2C'
//          // console.log(coordinates)
//          // var coordinates += objects[i].position + ',';
//          // delete last comma in the string
//          // method will delete the very last index of the string
//        }
//        var coordinates = coordinates.slice(0, -3);
//        // console.log(coordinates)
//        generateMap(coordinates);
//        // parse through information and acquire desired attributes
//        // title, location, vicinity, etc
//        // append to list
//      }
//    })
//  })
// };

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
