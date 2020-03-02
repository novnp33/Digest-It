var myQuestions = [
    {
        question: "1. It is the process by which the waste products of digestion are removed from the body.",
        answers: {
            a: 'Elimination',
            b: 'Mastication',
            c: 'Ingestion'
        },
        correctAnswer: 'a'
    },
    {
        question: "2. It is the movement of food from one end of the digestive tract to the other.",
        answers: {
            a: 'Propulsion',
            b: 'Secretion',
            c: 'Digestion'
        },
        correctAnswer: 'a'
    },
    {
        question: "3. It is where solid food is broken down into small pieces by chewing action of your teeth (Mastication) Saliva is released by the Salivary Gland.?",
        answers: {
            a: 'Large Intestine',
            b: 'Mouth',
            c: 'Stomach'
        },
        correctAnswer: 'b'
    },
    {
        question: "4. It is the longest part of the digestive system. It is where final digestion takes place.",
        answers: {
            a: 'Esophagus',
            b: 'Stomach',
            c: 'Small Intestine'
        },
        correctAnswer: 'c'
    },
    {
        question: "5. It is also called as Feeding. It is simply the intake of food into the body.",
        answers: {
            a: 'Ingestion',
            b: 'Digestion',
            c: 'Mastication'
        },
        correctAnswer: 'a'
    },

];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for(var i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];

            // for each available answer...
            for(letter in questions[i].answers){

                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }

}