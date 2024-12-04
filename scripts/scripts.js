/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */


const quizBody = document.getElementById("quiz_questions");
const submitButton = document.getElementById("submitbutton");
//const nextButton = document.getElementById("nextbutton");
//const mapImageContainer = document.getElementById("map_image_container");
//const mapImage = document.getElementById("map_image");

submitButton.style.display = "none";

        const data = [
            {
                question: 'Which three states border California?',
                choices: [
                    'a. Oregon, Nevada, Utah',
                    'b. Oregon, Nevada, Arizona',
                    'c. Washington, Oregon, Arizona',
                    'd. Washington, Oregon, New Mexico',
                ]
                },

            {
                question: 'What state is only bordered by Oregon and Idaho?',
                choices: [
                    'a. Washington',
                    'b. California',
                    'c. Montana',
                    'd. Nevada',
                ]
                        //correct: 'a',
                        //img: '../images/....'
                   
            },
                    {
                question: 'Which state is referred to as “The Treasure State”?',
                choices: [
                    'a. Idaho',
                    'b. Oregon',
                    'c. Colorado',
                    'd. Montana',
                        ]
                       // correct: 'd',
                       // img: 'images/Q4_MontanaLicensePlate.jpeg'
                    },
                    {
                question: 'Which two states are shaped nearly identically?',
                choices: [
                    'a. New Mexico and Arizona',
                    'b. Utah and Nevada',
                    'c. Colorado and Wyoming',
                    'd. Oregon and Idaho',
                        ]
                       //correct: 'c',
                       // img: '../images/....'
                    },
                    {
                 question: 'Which western state is the largest by land area in the contiguous United States?',
                 choices: [
                    'a. California',
                    'b. Nevada',
                    'c. Montana',
                    'd. Idaho',
                 ]
                      //  correct: 'a',
                      //  img: '../images/....'
                    },
                    {
                question: 'Which state is not considered a midwestern state?',
                choices: [
                    'a. Minnesota',
                    'b. Iowa',
                    'c. Wisconsin',
                    'd.CORRECTPennsylvania',
                ]
                    },
                    {
                question: 'Which state has the most lakes in the contiguous United States?',
                choices: [
                    'a. Michigan',
                    'b. MinnesotaCORRECT',
                    'c. Ohio',
                    'd. Indiana',
                ]
                    },
                    {
                    question: 'Which midwestern state shares the same first letter as its capital?',
                    choices: [
                        'a. Illinois',
                        'b. IndianCORRECT',
                        'c. Missouri',
                        'd. North Dakota',
                    ]
                        },
                        {
                    question: 'Which state is home to Mount Rushmore?',
                    choices: [
                        'a. North Dakota',
                        'b. South DakotaCORRECT',
                        'c. Minnesota',
                        'd. Missouri',
                    ]
                        },
                    {
                    question: 'Which state borders Michigan`s upper peninsula?',
                    choices: [
                        'a. Minnesota',
                        'b. Indiana',
                        'c. Ohio',
                        'd. WisconsinCORRECT',
                    ]
                        },
                        {
                    question: 'Which two states are tied for bordering the most amount of states (8)?',
                    choices: [
                        'a. Alabama and Georgia',
                        'b. Tennessee and MissouriCORRECT',
                        'c. Georgia and South Carolina',
                        'd. Massachusetts and New York',
                    ]
                        },
                        {
                    question: '14. North Carolina is bigger than South Carolina?',
                    choices: [
                        'TrueCORRECT',
                        'False',
                    ]
                        },
                        {
                    question: 'Which state is shaped like the letter `L`?',
                    choices: [
                        'a. Mississippi',
                        'b. South Carolina',
                        'c. LouisianaCORRECT',
                        'd. Alabama',
                    ]
                        },
                        {
                    question: 'Which of these pairs of states do not border each other?',
                    choices: [
                        'a. Pennsylvania and New Jersey',
                        'b. Maine and MassachusettsCORRECT',
                        'c. Vermont and Massachusetts',
                        'd. Connecticut and New York',
                    ]
                        },
                        {
                    question: 'Which of these states does not border the ocean?',
                    choices: [
                        'a. VermontCORRECT',
                        'b. Delaware',
                        'c. Maryland',
                        'd. New Hampshire',
                    ]
                        },
                        {
                    question: 'How many states are in New England?',
                    choices: [
                        'a. 8',
                        'b. 7',
                        'c. 6CORRECT',
                        'd. 5',
                    ]
                        },
                        {
                    question: 'Which of these states does not border Pennsylvania?',
                    choices: [
                        'a. Maryland',
                        'b. West Virginia',
                        'c. Ohio',
                        'd. VirginiaCORRECT',
                    ]
                        },
                        {
                    question: 'What is the largest state in the United States?',
                    choices: [
                        'a. AlaskaCORRECT',
                        'b. California',
                        'c. Florida',
                        'd. Texas',
                    ]
                        },

                        {
                    question: 'Which state`s panhandle runs across the northernmost part of Texas?',
                    choices: [
                        'a. Kansas',
                        'b. Louisiana',
                        'c. OklahomaCORRECT',
                        'd. Arkansas',
                    ]
                        },
                        {
                    question: 'Which four states make up the “four corners”?',
                    choices: [
                        'a. Utah, Arizona, California, Nevada',
                        'b. Colorado, New Mexico, Utah, ArizonaCORRECT',
                        'c. Colorado, Arizona, New Mexico, Oklahoma',
                        'd. Colorado, Arizona, New Mexico, Texas',
                    ]
                        },
                        {
                    question: 'Which of these states does not touch a Great Lake?',
                    choices: [
                        'a. IowaCORRECT',
                        'b. Indiana',
                        'c. Wisconsin',
                        'd. Minnesota',
                    ]
                        },
                        {
                    question: 'Which of these states does not border Colorado?',
                    choices: [
                        'a. Kansas',
                        'b. Oklahoma',
                        'c. New Mexico',
                        'd. ArizonaCORRECT',
                    ]
                        },
                        {
                    question: 'What is the easternmost state in the total United States?',
                    choices: [
                        'a. Maine',
                        'b. AlaskaCORRECT',
                        'c. Florida',
                        'd. North Carolina',
                    ]
                        },
                        {
                    question: 'What is the westernmost state in the total United States?',
                    choices: [
                        'a. Maine',
                        'b. AlaskaCORRECT',
                        'c. Florida',
                        'd. North Carolina<',
                    ]
                        },
                        {
                    question: 'What is the easternmost state in the contiguous United States?',
                    choices: [
                        'a. MaineCORRECT',
                        'b. Massachusetts',
                        'c. Florida',
                        'd. North Carolina',
                    ]
                        },
                        {
                    question: 'How many main islands make up the state of Hawai`i?',
                    choices: [
                        'a. 6',
                        'b. 7',
                        'c. 8CORRECT',
                        'd. 9',
                    ]
                        },
                        {
                    question: 'Which of the following is not an island of Hawai`i?',
                    choices: [
                        'a. Hawai`i',
                        'b. Molokai',
                        'c. Kauai',
                        'd. AotearoaCORRECT',
                    ]
                        },
                        {
                    question: 'What is the southernmost state in the entire United States?',
                    choices: [
                        'a. Florida',
                        'b. Texas',
                        'c. Hawai`iCORRECT',
                        'd. Arizona',
                    ]
                        },
                        {
                    question: 'What is the southernmost state in the contiguous United States?',
                    choices: [
                        'a. FloridaCORRECT',
                        'b. Texas',
                        'c. Hawaii',
                        'd. Arizona',
                    ]
                        },
                        {
                    question: 'Which state in the contiguous US has the most oceanic coastline?',
                    choices: [
                        'a. California',
                        'b. Florida',
                        'c. Alaska',
                        'a. MaineCORRECT',
                    ]
                        },
                        {
                    question: 'Which coastal state has the least oceanic coastline?',
                    choices: [
                        'a. Rhode Island',
                        'b. New HampshireCORRECT',
                        'c. Connecticut',
                        'd. Delaware',
                    ]
                        },
                        {
                    question: 'Which of the following states does not border Mexico?',
                    choices: [
                        'a. California',
                        'b. Arizona',
                        'c. Texas',
                        'd. NevadaCORRECT',
                    ]
                        },
                        {
                    question: 'Which of the following states does not border Canada?',
                    choices: [
                        'a. Idaho',
                        'b. NebraskaCORRECT',
                        'c. Vermont',
                        'd. Montana',
                    ]
                        },
                        {
                    question: 'Which two bordering states almost directly mirror each other`s shapes?',
                    choices: [
                        'a. Mississippi and AlabamaCORRECT',
                        'b. South Carolina and Georgia',
                        'c. Montana and Wyoming',
                        'd. Alabama and Georgia',
                    ]
                        },
                        {
                    question: 'What is the only state that borders one other state?',
                    choices: [
                        'a. Alaska',
                        'b. MaineCORRECT',
                        'c. Washington',
                        'd. Florida',
                    ]
                        },
                        {
                    question: 'What state is divided into two peninsulas?',
                    choices: [
                        'a. Wisconsin',
                        'b. North Carolina',
                        'c. MichiganCORRECT',
                        'd. South Carolina',
                    ]
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
           // const questionContainer = quizBody.querySelector(".question_one");

            questionElement.textContent = questionData.question;

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