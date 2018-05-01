$( document ).ready(function() {
    var currentQuestion = 0;
    var correct  = 0;
    var wrong = 0;
    var answerPosition = 0;
    var answered = false;

    var questions = ["Do you have the time?", "to listen to me whine", "about everything and nothing at all"]

    var answers = [ "no", "nope", "stop"]
    var fakes = [["yes", "yea sure", "so down"], ["I guess, doesn't sound bad", "isn't this a song"], ["you know what?...", "yea I'm out", "this is definitely a song..."]]

    generateQuestion();

    function generateQuestion(){
        answered = false;
        $("#question").html(questions[currentQuestion]);

        var otherPositions = [1,2,3,4];

        answerPosition = Math.floor((Math.random()*4)+1);
        $("#choice"+answerPosition).html(answers[currentQuestion]);
        
        otherPositions.splice(otherPositions.indexOf(answerPosition),1);
        
        var fakeposition = 0
        otherPositions.forEach( function(element){
            $("#choice"+element).text(fakes[currentQuestion][fakeposition]);
            fakeposition ++;

        });
    }

    function Change(){
        $("p").css({"background-color": "transparent", "color": "black"})
        $("p").hover(function(){
            $(this).css({"background-color" : "#555", "color": "white"})
        }, function(){
            $(this).css({"background-color": "transparent", "color": "black"})
        });

        currentQuestion ++;
        generateQuestion()  
    }
    
    $("li").on("click", ".choice",function(){
        if ($(this).attr("id").slice(-1) === String(answerPosition) && answered === false){
            $(this).css("background-color", "lightgreen", "important");
            answered = true;
            setTimeout(Change, 5000);
            
        }

        else if (answered === false){
            var choice = $(this)
            $(this).css("background-color", "lightcoral", "important");
            $("#choice"+answerPosition).css("background-color", "lightgreen", "important");
            $("#choice"+answerPosition).css("color", "black", "important");
            answered = true;
            setTimeout(Change, 5000);
                     

        }
    });
//Javascript here for reset button, add real trivia. Address the issue where after the first click, the second one doesn't stay. 

    

    
});
