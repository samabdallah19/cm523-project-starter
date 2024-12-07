/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */




const quizBody = document.getElementById("quiz_questions");
const submitButton = document.getElementById("submitbutton");
//const nextButton = document.getElementById("nextbutton");
//const mapImageContainer = document.getElementById("map_image_container");
//const mapImage = document.getElementById("map_image");


//submitButton.style.display = "none";


       const data = [
           {
               question: 'Which three states border California?',
               choices: [
                   'a. Oregon, Nevada, Utah',
                   'b. Oregon, Nevada, Arizona',
                   'c. Washington, Oregon, Arizona',
                   'd. Washington, Oregon, New Mexico',
               ],
               correctAnswer: 1
               },


           {
               question: 'What state is only bordered by Oregon and Idaho?',
               choices: [
                   'a. Washington',
                   'b. California',
                   'c. Montana',
                   'd. Nevada',
               ],
               correctAnswer: 0
                 
           },
                   {
               question: 'Which state is referred to as “The Treasure State”?',
               choices: [
                   'a. Idaho',
                   'b. Oregon',
                   'c. Colorado',
                   'd. Montana',
                       ],
                       correctAnswer: 3
                   },
                   {
               question: 'Which two states are shaped nearly identically?',
               choices: [
                   'a. New Mexico and Arizona',
                   'b. Utah and Nevada',
                   'c. Colorado and Wyoming',
                   'd. Oregon and Idaho',
                       ],
                       correctAnswer: 2
                   },
                   {
                question: 'Which western state is the largest by land area in the contiguous United States?',
                choices: [
                   'a. California',
                   'b. Nevada',
                   'c. Montana',
                   'd. Idaho',
                ],
                correctAnswer: 0
                   },
                   {
               question: 'Which state is not considered a midwestern state?',
               choices: [
                   'a. Minnesota',
                   'b. Iowa',
                   'c. Wisconsin',
                   'd. Pennsylvania',
               ],
               correctAnswer: 3
                   },
                   {
               question: 'Which state has the most lakes in the contiguous United States?',
               choices: [
                   'a. Michigan',
                   'b. Minnesota',
                   'c. Ohio',
                   'd. Indiana',
               ],
               correctAnswer: 1
                   },
                   {
                   question: 'Which midwestern state shares the same first letter as its capital?',
                   choices: [
                       'a. Illinois',
                       'b. Indiana',
                       'c. Missouri',
                       'd. North Dakota',
                   ],
                   correctAnswer: 1
                       },
                       {
                   question: 'Which state is home to Mount Rushmore?',
                   choices: [
                       'a. North Dakota',
                       'b. South Dakota',
                       'c. Minnesota',
                       'd. Missouri',
                   ],
                   correctAnswer: 1
                       },
                   {
                   question: 'Which state borders Michigan`s upper peninsula?',
                   choices: [
                       'a. Minnesota',
                       'b. Indiana',
                       'c. Ohio',
                       'd. Wisconsin',
                   ],
                   correctAnswer: 3
                       },
                       {
                   question: 'Which two states are tied for bordering the most amount of states (8)?',
                   choices: [
                       'a. Alabama and Georgia',
                       'b. Tennessee and Missouri',
                       'c. Georgia and South Carolina',
                       'd. Massachusetts and New York',
                   ],
                   correctAnswer: 1
                       },
                       {
                   question: '14. North Carolina is bigger than South Carolina?',
                   choices: [
                       'True',
                       'False',
                   ],
                   correctAnswer: 0
                       },
                       {
                   question: 'Which state is shaped like the letter `L`?',
                   choices: [
                       'a. Mississippi',
                       'b. South Carolina',
                       'c. Louisiana',
                       'd. Alabama',
                   ],
                   correctAnswer: 2
                       },
                       {
                   question: 'Which of these pairs of states do not border each other?',
                   choices: [
                       'a. Pennsylvania and New Jersey',
                       'b. Maine and Massachusetts',
                       'c. Vermont and Massachusetts',
                       'd. Connecticut and New York',
                   ],
                   correctAnswer: 1
                       },
                       {
                   question: 'Which of these states does not border the ocean?',
                   choices: [
                       'a. Vermont',
                       'b. Delaware',
                       'c. Maryland',
                       'd. New Hampshire',
                   ],
                   correctAnswer: 0
                       },
                       {
                   question: 'How many states are in New England?',
                   choices: [
                       'a. 8',
                       'b. 7',
                       'c. 6',
                       'd. 5',
                   ],
                   correctAnswer: 2
                       },
                       {
                   question: 'Which of these states does not border Pennsylvania?',
                   choices: [
                       'a. Maryland',
                       'b. West Virginia',
                       'c. Ohio',
                       'd. Virginia',
                   ],
                   correctAnswer: 3
                       },
                       {
                   question: 'What is the largest state in the United States?',
                   choices: [
                       'a. Alaska',
                       'b. California',
                       'c. Florida',
                       'd. Texas',
                   ],
                   correctAnswer: 0
                       },


                       {
                   question: 'Which state`s panhandle runs across the northernmost part of Texas?',
                   choices: [
                       'a. Kansas',
                       'b. Louisiana',
                       'c. Oklahoma',
                       'd. Arkansas',
                   ],
                   correctAnswer: 2
                       },
                       {
                   question: 'Which four states make up the “four corners”?',
                   choices: [
                       'a. Utah, Arizona, California, Nevada',
                       'b. Colorado, New Mexico, Utah, Arizona',
                       'c. Colorado, Arizona, New Mexico, Oklahoma',
                       'd. Colorado, Arizona, New Mexico, Texas',
                   ],
                   correctAnswer: 1
                       },
                       {
                   question: 'Which of these states does not touch a Great Lake?',
                   choices: [
                       'a. Iowa',
                       'b. Indiana',
                       'c. Wisconsin',
                       'd. Minnesota',
                   ],
                   correctAnswer: 0
                       },
                       {
                   question: 'Which of these states does not border Colorado?',
                   choices: [
                       'a. Kansas',
                       'b. Oklahoma',
                       'c. New Mexico',
                       'd. Arizona',
                   ],
                   correctAnswer: 3
                       },
                       {
                   question: 'What is the easternmost state in the total United States?',
                   choices: [
                       'a. Maine',
                       'b. Alaska',
                       'c. Florida',
                       'd. North Carolina',
                   ],
                   correctAnswer: 1
                       },
                       {
                   question: 'What is the westernmost state in the total United States?',
                   choices: [
                       'a. Maine',
                       'b. Alaska',
                       'c. Florida',
                       'd. North Carolina<',
                   ],
                   correctAnswer: 1
                       },
                       {
                   question: 'What is the easternmost state in the contiguous United States?',
                   choices: [
                       'a. Maine',
                       'b. Massachusetts',
                       'c. Florida',
                       'd. North Carolina',
                   ],
                   correctAnswer: 0
                       },
                       {
                   question: 'How many main islands make up the state of Hawai`i?',
                   choices: [
                       'a. 6',
                       'b. 7',
                       'c. 8',
                       'd. 9',
                   ],
                   correctAnswer: 2
                       },
                       {
                   question: 'Which of the following is not an island of Hawai`i?',
                   choices: [
                       'a. Hawai`i',
                       'b. Molokai',
                       'c. Kauai',
                       'd. Aotearoa',
                   ],
                   correctAnswer: 3
                       },
                       {
                   question: 'What is the southernmost state in the entire United States?',
                   choices: [
                       'a. Florida',
                       'b. Texas',
                       'c. Hawai`i',
                       'd. Arizona',
                   ],
                   correctAnswer: 2
                       },
                       {
                   question: 'What is the southernmost state in the contiguous United States?',
                   choices: [
                       'a. Florida',
                       'b. Texas',
                       'c. Hawaii',
                       'd. Arizona',
                   ],
                   correctAnswer: 0
                       },
                       {
                   question: 'Which state in the contiguous US has the most oceanic coastline?',
                   choices: [
                       'a. California',
                       'b. Florida',
                       'c. Alaska',
                       'a. Maine',
                   ],
                   correctAnswer: 3
                       },
                       {
                   question: 'Which coastal state has the least oceanic coastline?',
                   choices: [
                       'a. Rhode Island',
                       'b. New Hampshire',
                       'c. Connecticut',
                       'd. Delaware',
                   ],
                   correctAnswer: 1
                       },
                       {
                   question: 'Which of the following states does not border Mexico?',
                   choices: [
                       'a. California',
                       'b. Arizona',
                       'c. Texas',
                       'd. Nevada',
                   ],
                   correctAnswer: 3
                       },
                       {
                   question: 'Which of the following states does not border Canada?',
                   choices: [
                       'a. Idaho',
                       'b. Nebraska',
                       'c. Vermont',
                       'd. Montana',
                   ],
                   correctAnswer: 1
                       },
                       {
                   question: 'Which two bordering states almost directly mirror each other`s shapes?',
                   choices: [
                       'a. Mississippi and Alabama',
                       'b. South Carolina and Georgia',
                       'c. Montana and Wyoming',
                       'd. Alabama and Georgia',
                   ],
                   correctAnswer: 0
                       },
                       {
                   question: 'What is the only state that borders one other state?',
                   choices: [
                       'a. Alaska',
                       'b. Maine',
                       'c. Washington',
                       'd. Florida',
                   ],
                   correctAnswer: 1
                       },
                       {
                   question: 'What state is divided into two peninsulas?',
                   choices: [
                       'a. Wisconsin',
                       'b. North Carolina',
                       'c. Michigan',
                       'd. South Carolina',
                   ],
                   correctAnswer: 2
                       },
               ]
                       


       const button = document.getElementById("playbutton");
     
      button.addEventListener('click', getQuestions );
      /*
       button.addEventListener("click", function () {
           let questionBank = [];
           const randomIndex = getRandomInt(0, 4);
           questionBank.push(data[randomIndex]);
           const selectedQuestion = data[randomIndex];






           displayQuestion(selectedQuestion);
          
           submitButton.style.display = "none";
          // mapImageContainer.style.display = "none";
          // submitButton.style.display = "none";
          // nextButton.style.display = "inline-block";
          // mapImageContainer.style.display = "block";
          // mapImage.src = "image/Q4_MontanaLicensePlate.jpg";
       });


       */


function getQuestions(){
    quizBody.innerHTML = "";
   let questionBank = [];
   const selectedQuestionsIndex = [];
   let limit = 8;
   for ( let i = 1; i <= limit; i++) {
       let randomIndex = getRandomInt(0, 35);
       console.log(randomIndex);
       console.log(selectedQuestionsIndex);
       if (selectedQuestionsIndex.includes(randomIndex) == true) {
           console.log('number already chosen');
           i--;
           continue;
       } else {
           selectedQuestionsIndex.push(randomIndex);
           questionBank.push(data[randomIndex]);
       }


       //questionBank.push(data[randomIndex]);
   }
   console.log(questionBank);
   displayQuestion(questionBank);


   $(document).ready(function(){
       $('#quiz_questions').slick({
           infinite: false, // Set to false to not loop
           slidesToShow: 1, // Show one question at a time
           slidesToScroll: 1, // Scroll one question at a time
           arrows: true, // Show next/prev arrows
           dots: true, // Show dots navigation
       });
   });
}




       nextButton.addEventListener("click", function () {
           const randomIndex = getRandomInt(0, 35);
           const selectedQuestion = data[randomIndex];
           displayQuestion(selectedQuestion);
           //nextButton.style.display = "none";
           //mapImageContainer.style.display = "none";
           //submitButton.style.display = "inline-block";
       });




       function getRandomInt(min,max) {
           return Math.floor(Math.random() * (max - min + 1)) + min;
       }


       function displayQuestion(questionData) {
          // const questionElement = quizBody.querySelector(".question_one p");
          // const questionContainer = quizBody.querySelector(".question_one"):




           questionData.forEach( item => {
               const div = document.createElement('div');
               const p = document.createElement('p');
               p.textContent = item.question;
              
               const input = document.createElement("input");
               input.setAttribute('type','radio')
               input.name = `q${item.index + 1}`;
               input.value = item.choices[0];
               const label = document.createElement("label");
              
               const lineBreak = document.createElement("br");
               div.appendChild(p);
               div.appendChild(input);


const questionOptionsDiv = document.createElement('div');
item.choices.forEach((choice, index) => {
   const answerOptionDiv = document.createElement('div');
   const answerOptionInput = document.createElement("input");
   answerOptionInput.setAttribute('type', 'radio');
   answerOptionInput.name = `q${item.index +1}`;
   answerOptionInput.id = `choice_${item.index + 1}_${index}`;


   const optionLabel = document.createElement("label");
   optionLabel.setAttribute("for", answerOptionInput.id);
   optionLabel.textContent = choice;


   answerOptionDiv.appendChild(answerOptionInput);
   answerOptionDiv.appendChild(optionLabel);
   questionOptionsDiv.appendChild(answerOptionDiv);


});
       div.appendChild(questionOptionsDiv);
        quizBody.appendChild(div);
              


           });






          


          // questionContainer.querySelectorAll("label, input, br").forEach(el => el.remove());


           questionData.choices.forEach((choice, index) => {
               const label = document.createElement("label");
               const input = document.createElement("input");
               const lineBreak = document.createElement("br");


               input.type = "radio";
               // input.name = `q${}`;
               input.id = `choice${index + 1}`;
               input.value = choice;


               label.setAttribute("for", `choice${index + 1}`);
               label.textContent = choice;
               input.addEventListener("click", function () {
                   submitButton.style.display = "inline-block";
               });


               questionContainer.appendChild(input);
               questionContainer.appendChild(label);
               questionContainer.appendChild(lineBreak);
           });
       }


     
  
/*
const randomQuestions = getRandomizedQuestions(data);
randomQuestions.forEach(question => console.log(question));
*/
// random num function attached to play button


// function to loop over the question bank aka data and push relevant objects into a new array that will populate the question for the user
