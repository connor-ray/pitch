$(document).ready(function() {
  // clickVoteButton();
  VoteWidget.init();
  showForm();
  addProposal();
})


var showForm = function() {
  $('.add-proposal').on('click', '#add-prop-btn', function(event) {
          event.preventDefault();
          $(this).hide();
          $('.proposal-form').show();
      });
}

var addProposal = function() {
  $('.proposal-form').on('submit', function(event) {
    event.preventDefault();
    var url = $(this).find('form').attr('action');
    $.ajax({
      url: url,
      method: 'POST'
    }).done(function(result){
      console.log(result);
      // append results to list if wanted
    })
  })
}





var clickVoteButton = function(){
  $('.vote').on('click', '.vote-btn', function(event) {
    event.preventDefault();
    var url = $(this).parent().attr('action')
    $.ajax({
      method: 'POST',
      url: url
    }).done(function(result) {
      $('#' + result.post_id).find('.vote-count').text(result.likes)
    })
  });
}


// Vote ajax widget 
var VoteWidget = {
  settings: {
    $counter: $('.vote-count'),
    $btn:     $('.myform button'),
  },
init: function() {
  VoteWidget.bind();
},
  bind: function() {
    VoteWidget.settings.$btn.click(function(){
      if (! $(this).hasClass('complete')) {
            VoteWidget.bumpCount();
      }
      $(this).toggleClass('complete');
      VoteWidget.toggleText();  

    return false;
  });
  },
  bumpCount: function() {
    var current_count = $('.vote-count').text();
    count = parseInt(current_count);
    count++;
    VoteWidget.settings.$counter.toggleClass('bumped').text(count);
  },
  toggleText: function(){
    var $text_container = $('.myform button .text');
    var alt_text = VoteWidget.settings.$btn.data('alt-text');
    var default_text = VoteWidget.settings.$btn.data('default-text');
    var current_text = $text_container.text();
    console.log('current is ' + current_text);
    if ( current_text == default_text ) {
      $text_container.text(alt_text)
    } else {
      $text_container.text(default_text)
    }
  }
}




