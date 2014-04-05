var count = 140;

$(document).ready(function() {
	$("#tweet-content > .tweet-compose").focus(function() {
	//$(".tweet-compose").focus(function() {
		$("#tweet-controls").show();
		//$(".tweet-compose").css("height", "8em")
		$(this).css("height", "8em")
		//$("this").height("8em");
	});


$(".tweet-compose").focusout(function() {
	if (count === 140) {
		$("#tweet-controls").hide();
		$(".tweet-compose").css("height", "2.5em");
	}
});





//creating counter - changing to red//

$(".tweet-compose").on("input", function() { 
	var length = $(".tweet-compose").val().length;
	count = 140 - length;
		console.log(count);
		$("#char-count").text(count);
		if (count > 10) {
			$("#char-count").css("color", "#999");
		}
		else if (0 < count <=10) {
			$("#char-count").css("color", "red");
		}
		//else {
		//	$("#tweet-submit").css({"opacity": "0.5"});
			//preventdefault
		//}
});



// going over 140 characters//

// $("#tweet-compose").on("keyup", function() {
// 	var length = $(".tweet-compose").val().length;
// 	// var count = 140 - length;
// 	// 	console.log(count);
// 	// 	$("#char-count").text(count);
// 	//	if (count > 140) {
// 	//	if (length > 140) {
// 			$("#tweet-submit").css("opacity", "0.5");
// 		};
// });


// submitting tweet //

$("#tweet-submit").on('click', function() {
	var tweetText = $(".tweet-compose").val();

	// var newTweet = "<div class="tweet"><div class="content"><img class="avatar" src="img/funwatercat.jpg" /><strong class="fullname">The Onion</strong><span class="username">@theonion</span><p class="tweet-text"><div class="tweet-actions">

	// </div></p></div></div>"

	var newTweet = '<div class="tweet"><div class="content"><img class="avatar" src="img/funwatercat.jpg" /><strong class="fullname"></strong><span class="username"></span><p class="tweet-text">' + tweetText + '</p><div class="tweet-actions"><ul><li><span class="icon action-reply"></span> Reply</li><li><span class="icon action-retweet"></span> Retweet</li> <li><span class="icon action-favorite"></span> Favorite</li> <li><span class="icon action-more"></span> More</li> </ul> </div> <div class="stats"> <div class="retweets"> <p class="num-retweets">30</p> <p>RETWEETS</p> </div> <div class="favorites"> <p class="num-favorites">6</p> <p>FAVORITES</p> </div> <div class="users-interact"> <div> <img src="img/jennyshen.jpg" /> <img src="img/damenleeturks.jpg" /> </div> </div> <div class="time"> 1:04 PM - 19 Sep 13 </div> </div> <div class="reply"> <img class="avatar" src="img/alagoon.jpg" /> <textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea> </div> </div> </div>'

	$("#stream").prepend(newTweet);

	
});







}); //closes document.ready
