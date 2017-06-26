/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
//initialize jQuery document ready
$(function() {

  loadTweets();



  function createTweetElement(tweet){

    // var name = tweet["user"].name;
    // var handle = tweet["user"].handle;
    // var content = tweet["content"].text;
    // var avatar = tweet["user"].avatars.small;
    var name = tweet["user"].name;
    var handle = tweet["user"].handle;
    var content = tweet["content"].text;
    var avatar = tweet["user"].avatars.small;
    var $article = $('<article class="tweet"/>');

    // var $someelement = $('<div class="someelement"/>').appendTo('#container');
    $('.all_tweets').prepend($article);

    var $header = $('<header class="header"/>');
    var $img = $('<img>').attr('src', avatar);
    var $h2 = $('<h2></<h2>').text(name);
    var $h1 = $('<h1></h1>').text(handle);
    var $dateDiv = $('<div class="date">').text(moment(new Date(tweet.created_at)).startOf('hour').fromNow());
    var $flag = $('<i class="fa fa-flag" aria-hidden="true"></i>');
    var $retweet = $('<i class="fa fa-retweet" aria-hidden="true"></i>');
    var $like = $('<i class="fa fa-heart" aria-hidden="true"></i>');

    $header.appendTo($article)
      .append($img)
      .append($h2)
      .append($h1);


    $("<div class='content'>").appendTo($article)
      .text(content);
    $("<footer>").appendTo($article)
      .append($dateDiv)
      .append($like)
      .append($retweet)
      .append($flag)

  };





function renderTweets(tweets) {
  console.log("IN RENDER TWEETS");
  for (var tweet of tweets){
    createTweetElement(tweet);
  }

    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
}


  $(".form1").submit(function(event){
    event.preventDefault();

    if($(".textarea").val() === ""){ alert("You must enter something!")}
    $.post("/tweets", $(".form1").serialize(), function(data){
          {

            loadTweets();
            // $(".textarea").text(""));
          }
    });
    $(".textarea").val("");
  });

  function loadTweets(){
    $.get("/tweets", function(tweets){
      renderTweets(tweets);
    });
  }

  $("#compose").click(function(){
    $(".new-tweet").slideToggle(12);
    $(".textarea").focus();
  });




  //end of document ready function
  });










