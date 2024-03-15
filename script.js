const questions =[
    {
        question: "which is the larget animal in the world?",
        answers: [
            {text: "shark",correct : false},
            {text: "bleue whale",correct : true},
            {text: "shark",correct : false},
        ]
    },
    {
        question: "how many countreis in the world",
        answers: [
            {text: "195 countries",correct : true},
            {text: "180 countries",correct : false},
            {text: "200 countries",correct : false},
        ]
    },
    {
        question: "what is the capital of australia?",
        answers: [
            {text: "Edimbourg",correct : false},
            {text: "Ottawa",correct : true},
            {text: "Canberra",correct : false},
        ]
    }
];
const questionelement= document.getElementById("question");
const answerelement= document.getElementById("answer-buttons");
const nextbtn= document.getElementById("next-btn");
 let currentquestionguide=0;
 let scor=0;
  
 function Quiz(){
    currentquestionguide=0;
    scor=0;
    nextbtn.innerHTML="Next";
    showquestion();
 }
 function showquestion(){
    resetState();
    let currentquestion=questions[currentquestionguide];
    let quetionnon=currentquestionguide + 1;
    questionelement.innerHTML=quetionnon + ". " +currentquestion.
    question;

    currentquestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbutton.appendChild(button);
        button.addEventListener("click",selectAnswer)
    });
 }
 function resetState(){
    nextbtn.style.display="none";
    while(answerbutton.firstChild){
        answerbutton.removeChild(answerbutton.firstChild);
    }
 }
 Quiz();

