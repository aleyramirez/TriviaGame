$( document ).ready(function() {
    //Global Variables
    var question_1 = "What powers Rick's battery for his flying ship in RIck and Morty?";
    var question_2 = 'In South Park, what powers does Cartman have when decides to be "The Coon"?'
    var question_3 = 'In Spongebob, what does "N" stand for according to Plankton?';
    var question_4 = "In the Big Bang Theory, what influences Sheldon's ego?";

    var questionOptions_1 = ['More batteries', 'Electricity', 'Combustion', 'A Universe'];
    var questionOptions_2 = ['Grows claws', 'Grow more hair', 'Gets super vision', 'No powers'];
    var questionOptions_3 = ['Me N U', 'Nice friends', 'No survivors', 'No'];
    var questionOptions_4 = ['Intelligence', 'Roommate', 'being a clean freak', 'All of the above'];

    var timeleft = 15;


    //DOM Manipulation
    document.getElementById('questions').innerHTML = question_1;
    // document.getElementById('A').innerHTML = questionOptions_1[0];
    // document.getElementById('B').innerHTML = questionOptions_1[1];
    // document.getElementById('C').innerHTML = questionOptions_1[2];
    // document.getElementById('D').innerHTML = questionOptions_1[3];

    $('#questionOptions').children().each(function(index, element){
        $(element).find('a').html(questionOptions_1[index]); 
    });


    //Event handlers
function question_check (){
    $('#A').click(function() {});
}


console.log();
    //functions
    function checkScore(a,b) {
        if (a[0] === true) {
            console.log('You got it!');
        }  
    }

    function addOptions(z, c) {
        $(z).text(c);
    }


    var time = setInterval(function(){
        timeleft--;
        document.getElementById("time").textContent = timeleft;
        if (timeleft == 0) {
            alert("Time's Up")
        }
    },1500);
});