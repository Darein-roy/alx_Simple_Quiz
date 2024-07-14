function checkAnswer(){
    // identify the correct answer
    let correctAnswer = '4';

    // retrieve the users answer
    let userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    // accessing the feedback element
    let feedback = document.querySelector('#feedback');

    // comparing users answe with the correct one
    if (correctAnswer === userAnswer){
        feedback.textContent = 'Correct! Well done.';
        feedback.style.color = 'green';
    } 
    else { 
        feedback.textContent = "That's incorect. Try again!";
        feedback.style.color = 'red';
    }
}

// adding event listener
document.getElementById('submit-answer').addEventListener('click', checkAnswer);