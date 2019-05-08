window.onload = function () {
  
  var questionArea = document.getElementsByClassName('questions')[0],
      answerArea   = document.getElementsByClassName('answers')[0],
      checker      = document.getElementsByClassName('checker')[0],
      current      = 0,
  
     // An object that holds all the questions + possible answers.
     // In the array --> last digit gives the right answer position
      allQuestions = {
        'Hithcock’s wife, Alma Reville worked closely in his earlier films.' : ['True', 'False', 0],
        
        'Did Reville convince Hitchcock to use the famous music from the shower scene in Psycho?' : ['True', 'False', 0],
      
        'What taboo did Hitchcock bravely break? ' : ['Sex scenes', 'Showing bathrooms in films', 'Gore', 1],

        'Which movie took the longest set up?' : ['Jamaica Inn', 'Sabotage', 'Rear Window', 2],

        'Hitchcock did not get his start in silent films.' : ['True', 'False', 1],

        'Aspiring actors didn’t need to audition for a Hitchcock movie.' : ['True', 'False', 0],

        'What lengths did Hitchcock go to keep the twist ending of Psycho a secret?' : ['He bought the rights to the novel', 'He had his secretary buy up as many copies of the book as possible to prevent spoilers', 'He took out the press out of screenings', 'Took out ads in the papers', 'All the above', 4],

        'Did Hitchcock hire Psycho composer for The Birds for music or sound effects?' : ['Music', 'Sound effects', 1],

        'Which film did Hitchcock first make a cameo?' : ['Young and Innocent', 'The Lodger', 'Foreign Correspondent', 1],

        'What theme does Hitchcock use often?' : ['Strong visual use of famous landmarks', 'The presence of a domineering mother', 'An innocent man accused of a crime', 2],
      };
      
  function loadQuestion(curr) {
  // This function loads all the question into the questionArea
  // It grabs the current question based on the 'current'-variable
  
    var question = Object.keys(allQuestions)[curr];
    
    questionArea.innerHTML = '';
    questionArea.innerHTML = question;    
  }
  
  function loadAnswers(curr) {
  // This function loads all the possible answers of the given question
  // It grabs the needed answer-array with the help of the current-variable
  // Every answer is added with an 'onclick'-function
  
    var answers = allQuestions[Object.keys(allQuestions)[curr]];
    
    answerArea.innerHTML = '';
    
    for (var i = 0; i < answers.length -1; i += 1) {
      var createDiv = document.createElement('div'),
          text = document.createTextNode(answers[i]);
      
      createDiv.appendChild(text);      
      createDiv.addEventListener("click", checkAnswer(i, answers));
      
      
      answerArea.appendChild(createDiv);
    }
  }
  
  function checkAnswer(i, arr) {
    // This is the function that will run, when clicked on one of the answers
    // Check if givenAnswer is sams as the correct one
    // After this, check if it's the last question:
    // If it is: empty the answerArea and let them know it's done.
    
    return function () {
      var givenAnswer = i,
          correctAnswer = arr[arr.length-1];
      
      if (givenAnswer === correctAnswer) {
        addChecker(true);             
      } else {
        addChecker(false);                        
      }
      
      if (current < Object.keys(allQuestions).length -1) {
        current += 1;
        
        loadQuestion(current);
        loadAnswers(current);
      } else {
        questionArea.innerHTML = 'YOU GOT THIS <br> <a href="#"><i>LAST ROUND</i></a>';
        answerArea.innerHTML = '';
      }
                              
    };
  }
  
  function addChecker(bool) {
  // This function adds a div element to the page
  // Used to see if it was correct or false
  
    var createDiv = document.createElement('div'),
        txt       = document.createTextNode(current + 1);
    
    createDiv.appendChild(txt);
    
    if (bool) {
      
      createDiv.className += 'correct';
      checker.appendChild(createDiv);
    } else {
      createDiv.className += 'false';
      checker.appendChild(createDiv);
    }
  }
  
  
  // Start the quiz right away
  loadQuestion(current);
  loadAnswers(current);
  
};