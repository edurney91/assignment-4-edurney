

$(document).ready(function(){
  	$("#submitButton").click(function(event){
        event.preventDefault();
    });




function revealPost1 () {
	$(".post-implemented p").slideDown();
	$("#readLessButton1").show();
	$("#readMoreButton1").hide();
};

function hidePost1 () {
	$(".post-implemented p").slideUp();
	$("#readLessButton1").hide();
	$("#readMoreButton1").show();
};

$(".post-implemented p").hide();
$("#readLessButton1").hide();
$("#readMoreButton1").click(revealPost1);
$("#readLessButton1").click(hidePost1);

function revealPost2 () {
	$(".post-traveled p").slideDown();
	$("#readLessButton2").show();
	$("#readMoreButton2").hide();
};

function hidePost2 () {
	$(".post-traveled p").slideUp();
	$("#readLessButton2").hide();
	$("#readMoreButton2").show();
};
$(".post-traveled p").hide();
$("#readLessButton2").hide();
$("#readMoreButton2").click(revealPost2);
$("#readLessButton2").click(hidePost2);


function toggleLearnMore1(){
	$("#sideList").slideToggle();
};


$("#sideList").hide();
$("#learnMoreButton1").click(toggleLearnMore1);


function toggleLearnMore2(){
	$(".about p").slideToggle();
};

$(".about p").hide();
$("#learnMoreButton2").click(toggleLearnMore2);


});