function start () {
    $('.jumbotron').show();
    $('.start').hide();
    console.log("show");

    alert("You have 30 seconds to complete the Quiz");    
}



function check() {

alert("You have 30 seconds to complete the Quiz");    

var question1 = $('input[name=question1]:checked').val();
var question2 = $('input[name=question2]:checked').val();
var question3 = $('input[name=question3]:checked').val();
var correct = 0;

if (question1 == "Green") {
    correct++;
}

if (question2 == "Blue") {
    correct++;
}

if (question3 == "Red") {
    correct++;
}

$('.afterSubmit').show();
$('#numberCorrect').text("You got " + correct + " correct.")

}

setInterval(function(){
        
    $('.afterSubmit').show();
    $('#numberCorrect').text("You got" + correct + "correct.")

    alert("Time is up!");


},30000);
