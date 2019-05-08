window.onload = function () {
  
  var questionArea = document.getElementsByClassName('questions')[0],
      answerArea   = document.getElementsByClassName('answers')[0],
      checker      = document.getElementsByClassName('checker')[0],
      current      = 0,
  
     // An object that holds all the questions + possible answers.
     // In the array --> last digit gives the right answer position
      allQuestions = {
        'What genre of film is Alfred Hitchcock famous for?' : ['Comedy', 'Thriller', 'Horror', 1],
        
        'When did Hitchcock direct his first film?' : ['1925', '1934' , '1935', 0],
        
        'How many self-referential cameos did Hitchcock make in his films?' : ['20', '39', '50', 1],

        'Alfred Hitchcock is a...' : ['Television Personality', 'Screenwriter', 'Producer', 'Director', 'All the above', 4],

        'What did Hitchcock want to be when he was younger?' : ['Engineer', 'Teacher', 'Director', 0],

        'Which film was his first American film?' : ['The 39 Steps', 'Dial M for Murder', 'Rebecca', 2],

        'When did Hitchcock die?' : ['1955', '1980', '1970', 1],

        'What was his infamous nickname?' : ['Master of Thriller', 'Thriller King', 'The Master of Suspense', 2],

        'Did Hitchcock create silent films?' : ['Yes', 'No', 0],

        'How long was his career?' : ['6 decades', '2 years', 'Half a century', 0],
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
        questionArea.innerHTML = '<a href="https://berniefigs.github.io/coreinteraction2019/round2/index.html">NEXT ROUND</a>';
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
