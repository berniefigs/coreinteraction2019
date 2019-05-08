window.onload = function () {
  
  var questionArea = document.getElementsByClassName('questions')[0],
      answerArea   = document.getElementsByClassName('answers')[0],
      checker      = document.getElementsByClassName('checker')[0],
      current      = 0,
  
     // An object that holds all the questions + possible answers.
     // In the array --> last digit gives the right answer position
      allQuestions = {
        'Which was the movie that was the prototype for the James Bond Franchise?' : ['The Wrong Man', 'The Birds', 'North by Northwest', 2],
        
        'Which film did Hitchcock experiment with 3D?' : ['Marnie', 'Dial M for Murder' , 'Topaz', 1],
        
        'What theme did the classic thriller Rear Window NOT focus on?' : ['Voyeurism', 'Sexuality', 'Morality', 1],

        'Was The Lodger a silent film?' : ['True', 'False', 0],

        'Which movie did Hitchcock use the dolly zoom in?' : ['Vertigo', 'Strangers on a Train', 'The Pleasure Garden', 0],

        'Hitchcock rarely collaborated with the same people when making his films.' : ['Tue', 'False', 1],

        'In 1929, which movie was Hitchcock’s first thriller?' : ['Shadow of a Doubt', 'The Lady Vanishes', 'Blackmail', 2],

        'Blackmail was a silent film.' : ['True', 'False', 'It began as a silent film then changed to sound during filming.', 2],

        'The reason for Hitchcock constantly casting blonde actresses:<br>Blondes make the best victims. They are like virgin snow that shows up the bloody footprints.' : ['True', 'False', 0],
        
        'When did Psycho receive its “R” rating?' : ['1920', '1940', '1984', 2],

        'Which Hitchcock film is mosr desired film that has been lost?' : ['Rich and Stranger', 'The Mountain Eagle', 'Murder!', 1],
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
        questionArea.innerHTML = '<a color="black" href="https://berniefigs.github.io/coreinteraction2019/round4/index.html">NEXT ROUND</a>';
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
