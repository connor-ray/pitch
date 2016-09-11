$(document).ready(function() {
  proposalVoteListener();

});

// This is sample ajax fx; we need to update the static div 
// Ajax request for voting on a Question
var proposalVoteListener = function(){
  $(".votebutton").on("click", something_static, function(event){
    // prevent button from submitting POST request
    event.preventDefault();
    var form = $(this).parent().parent();
    var proposalID = form.attr("id");
    var method = form.attr("method");
    var url = form.attr("action");
    // var vote = $(this).val(); // true or false translate to key:value

    // console.log(this);
    $.ajax({
      method: "post",
      url: url
      // data: { upVote: vote } // pass true or false value into controller
    })

    .done(function(response){
    // console.log(response);
      $("#votePopularity").html(response);
      form.find(".votebutton").prop("disabled", true);
      // .attr("disabled", "disabled");
    });
  });
};

// var response = $.ajax({
//       url: route,
//       method: "post"
//     });
//     response.done(function(result) {
//       console.log(result);
//       $("#" + result.post_id).find(".points").text(result.votes);
//       // console.log(this);
//     });
//   };

// Sample code from Hacker News
// $(document).ready(function() {
//   $(".post-container").on('click', "article .inline #votebutton", upVote);
//   $(".post-container").on('click', ".delete", deletePost);
//   $("#posts").on('submit', createPost);
//   // createPost();
//   // This is called after the document has loaded in its entirety
//   // This guarantees that any elements we bind to will exist on the page
//   // when we try to bind to them

//   // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()

// });


  // var upVote = function(event) {
  //       console.log("in vote");

  //   event.preventDefault();
  //   var id = $(this).parent().parent().attr("id");
  //   var route = $(this).parent().attr("action");
  //   var response = $.ajax({
  //     url: route,
  //     method: "post"
  //   });
  //   response.done(function(result) {
  //     console.log(result);
  //     $("#" + result.post_id).find(".points").text(result.votes);
  //     // console.log(this);
  //   });
  // };


