


//when focused on tweet box it will increase in size and buttons show up//

$(document).ready(function() {
	var count = 140;
	var tweetText = $(".tweet-compose").val();
	var newTweet = $("#stream .tweet").first().clone();
	$("#tweet-content").on("focusin", ".tweet-compose", function() {
		//$(".tweet-compose").focus(function() {
		$("#tweet-controls").show();
		//$(".tweet-compose").css("height", "8em")
		$(this).css("height", "8em")
		//$("this").height("8em");
	});


// when focus moves away from tweet box then it will minimize again, UNLESS there is text in the box//

	$(".tweet-compose").focusout(function() {
		if (count === 140) {
			$("#tweet-controls").hide();
			$(".tweet-compose").css("height", "2.5em");
		}
	});


//when tweet box has text the counter will change with each INPUT.  if count is more than 10 is stays grey, less than or equal to 10 turns red//
//the button is disabled when count is less than 0 and re-enalbed when goes back abobe 0//

	$(".tweet-compose").on("input", function() { 
		var length = $(".tweet-compose").val().length;
		count = 140 - length;
			console.log(count);
			$("#char-count").text(count);
			if (count > 10) {
				$("#char-count").css("color", "#999");
			}
			else if (count <=10) {
				$("#char-count").css("color", "red");
			};
			
			if (count < 0) {
				$('.button').attr('disabled', 'true')
			}
			else if (count >= 0) {
				$('.button').removeAttr('disabled')
			};
	});





// new var tweetText gets the value of the text entered in the tweetbox.  var newTweet gets the tweet element from the stream element and identifies the first entry(so you dont get all the twitter entries) and then clones the html.   //

// jquery $(newTweet).find("p").first().text(tweetText); finds the FIRST paragraph in the html from the var newTweet and changes the text to the value of var tweetText//

// jquery $("#stream").prepend(newTweet); adds the new paragraph (and cloned html) from var newTweet in front of the current #stream element//

	$("#tweet-submit").on('click', function() {
		var tweetText = $(".tweet-compose").val();
		var newTweet = $("#stream .tweet").first().clone();
		$(newTweet).find("p").first().text(tweetText);
		$(newTweet).find(".avatar").attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQIhO6144v7xqoblGEElYIi1CjZKYNvtf6B9JTW6sYmd48dGIH5A");
		$(newTweet).find(".fullname").text("RADNESS!");
		$(newTweet).find(".username").text("@totallyRAD");
		$("#stream").prepend(newTweet);
		$(newTweet).find('.reply').hide();
		$(newTweet).find('.stats').hide();	
		$("#tweet-controls").hide();
		$(".tweet-compose").css("height", "2.5em");
		$("textarea").val('');
		$("#char-count").text('140');
		$("#char-count").css('color', '#999');
	});

// tweet actions (reply, retweet, favorite, more) only show up when you hover over that tweet//

// $(".tweet-actions").hide();
// $('.tweet').hover(function() {
	//$(this).find('.tweet-actions').toggle();
// 	$('.tweet-actions').toggle();
// });
//  %('.tweet-actions').hover()





	$('#stream').on('click', ".tweet", function(event) {
		var tweet = $(event.currentTarget);
		var reply = tweet.find(".reply");
		reply.toggle();
		var stats = tweet.find(".stats");
		stats.toggle();
		if ($('#stream .tweet-compose').on('click')) {
			

			// $(reply).find('.reply').show();
		 // 	$(stats).find('.stats').show();
		}


		// if $((event.currentTarget).hasClass('.tweet-compose')) {
		// 	$(newTweet).find('.reply').show();
		// 	$(newTweet).find('.stats').show();
		// };
	});




}); //closes document.ready
