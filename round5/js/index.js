window.onload = function () {
  
  var questionArea = document.getElementsByClassName('questions')[0],
      answerArea   = document.getElementsByClassName('answers')[0],
      checker      = document.getElementsByClassName('checker')[0],
      current      = 0,
  
     // An object that holds all the questions + possible answers.
     // In the array --> last digit gives the right answer position
      allQuestions = {
        'Which film was based on true events?' : ['The Wrong Man', 'Waltzes from Vienna', 'Suspicion', 0],
        
        'Hitchcock was always aiming to stretch out the suspense of a scene for as long as possible to keep audience hooked.' : ['True', 'False', 0],
     
         'How did Hitchcock achieve long shots?' : ['Switch between camera shows', 'Make use of shadows', 'Creating tension', 'All of the above', 3],

         'Why are cops always perceived as the antagonist in his films?' : ['They are a good example of authority', 'Aesthetics', 'Personally afraid of them' , 2],

        'What character was always reoccurring in his films with an unknown answer as to why?' : ['Blondes', 'Domineering mothers', 'Victims', 'All of the above', 3],

        'Which film was the first to be entered to be preserved at the United States National Film Preservation Board?' : ['Vertigo', 'The Man Who Knew Too Much', 'Mr & Mrs Smith', 0],

        'How did Hitchcock make the setting for Rear Window sound more authentic?' : ['Natural noises from location', 'Layering of sounds', 'I do not know', 0],

        'Another film that experimented with 3D?' : ['Lifeboat', 'Spellbound', 'Dial M for Murder', 2],

        'Did Hitchcock create silent films?' : ['Yes', 'No', 0],

        'What movie made Disney decide not to work with Hitchcock?' : ['Notorious', 'Psycho', 'I Confess', 'The Trouble with Harry' ,1],
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
        questionArea.innerHTML = 'GREAT JOB! <br> <a color="black", href="#"><i>BACK TO SITE</i></a>';
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