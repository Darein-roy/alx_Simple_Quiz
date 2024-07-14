function checkAnswer(){
    // identify the correct answer
    let correctAnswer = '4';

    // retrieve the users answer
    let userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    // accessing the feedback element
    let feedback = document.querySelector('#feedback');

    // comparing users answe with the correct one
    if (userAnswer === correctAnswer){
        feedback.textContent = 'Correct! Well done.';
        feedback.style.color = 'green';
    } 
    else { 
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = 'red';
    }
}

// adding event listener
document.getElementById('submit-answer').addEventListener('click', checkAnswer);