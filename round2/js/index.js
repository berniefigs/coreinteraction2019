window.onload = function () {
  
  var questionArea = document.getElementsByClassName('questions')[0],
      answerArea   = document.getElementsByClassName('answers')[0],
      checker      = document.getElementsByClassName('checker')[0],
      current      = 0,
  
     // An object that holds all the questions + possible answers.
     // In the array --> last digit gives the right answer position
      allQuestions = {
        'Is this a characteristic of a Hitchcockian film: <br> Climactic plot twist.' : ['Yes', 'No', 0],
        
        'Is this a characteristic of a Hitchcockian film: <br> Character who does not switch sides and can be trusted.' : ['Yes', 'No', 1],
        
        'Hitchcock popularized the term “MacGuffin”. Is this correct definition? <br>A plot device in the form of some goal, desired object, or other motivator that the protagonist pursues, often with little or no narrative explanation.' : ['Yes', 'No', 0],

        'Which film had used “MacGuffins”?' : ['The Maltese Falcon', 'Citizen Kane', 'Pulp Fiction', 'All of the above', 3],

         'Did Hitchcock popularize the use of the dolly zoom?' : ['Yes', 'No', 0],

         'Did Hitchcock’s first American film win an Oscar for best picture?' : ['True', 'False', 0],

        'Was Rope one of the first films to be made with the illusion of having been filmed over one long continuous take?' : ['True', 'False', 0],

        'Hitchcock never experimented with 3D in his films.' : ['True', 'False', 1],

        'Which is arguably Hitchcock’s most influential film?' : ['Vertigo', 'Rear Window', 'Psycho', 2],

        'Is this a characteristic of a Hitchcockian film: <br> The use of darkness to symbolize something good is about to happen.' : ['Yes', 'No', 1],

        'Is this a characteristic of a Hitchcockian film: <br> Referring to crime for mystery rather than presenting it explicitly.' : ['Yes', 'No', 0],
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
        questionArea.innerHTML = 'KEEP IT UP! <br> <a href="#"><i>NEXT ROUND</i></a>';
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