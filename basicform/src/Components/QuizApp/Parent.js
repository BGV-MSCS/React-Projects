import { useState, Fragment,createContext, useContext  } from 'react';
import { createPortal } from 'react-dom';
import './QuizApp.scss';
const questions = [
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: "Paris",
    },
    {
      id: 2,
      question: "Which programming language is also known as ECMAScript?",
      options: ["JavaScript", "Python", "Ruby", "C++"],
      correctAnswer: "JavaScript",
    },
    {
      id: 3,
      question: "Who wrote the novel '1984'?",
      options: ["George Orwell", "Aldous Huxley", "Ernest Hemingway", "Mark Twain"],
      correctAnswer: "George Orwell",
    },
    {
      id: 4,
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
    },
    {
      id: 5,
      question: "What is the largest mammal in the world?",
      options: ["Blue Whale", "Elephant", "Giraffe", "Great White Shark"],
      correctAnswer: "Blue Whale",
    },
    {
      id: 6,
      question: "What is the chemical symbol for water?",
      options: ["H2O", "O2", "CO2", "NaCl"],
      correctAnswer: "H2O",
    },
    {
      id: 7,
      question: "Who painted the Mona Lisa?",
      options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
      correctAnswer: "Leonardo da Vinci",
    },
    {
      id: 8,
      question: "Which element is represented by the symbol 'Fe' in the periodic table?",
      options: ["Iron", "Fluorine", "Silver", "Lead"],
      correctAnswer: "Iron",
    },
    {
      id: 9,
      question: "What is the hardest natural substance on Earth?",
      options: ["Diamond", "Gold", "Platinum", "Quartz"],
      correctAnswer: "Diamond",
    },
    {
      id: 10,
      question: "In which year did humans first land on the moon?",
      options: ["1969", "1958", "1972", "1980"],
      correctAnswer: "1969",
    },
    {
      id: 11,
      question: "What is the tallest mountain in the world?",
      options: ["Mount Everest", "K2", "Kangchenjunga", "Makalu"],
      correctAnswer: "Mount Everest",
    },
    {
      id: 12,
      question: "What is the smallest unit of life?",
      options: ["Atom", "Cell", "Molecule", "Organ"],
      correctAnswer: "Cell",
    },
    {
      id: 13,
      question: "Who developed the theory of relativity?",
      options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"],
      correctAnswer: "Albert Einstein",
    },
    {
      id: 14,
      question: "Which ocean is the largest in the world?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      correctAnswer: "Pacific Ocean",
    },
    {
      id: 15,
      question: "What is the freezing point of water in Celsius?",
      options: ["0°C", "32°C", "100°C", "-10°C"],
      correctAnswer: "0°C",
    },
  ];
const QuizContext = createContext();
export default function Parent(){
    const [currentId , setCurrentId] = useState(questions[0].id);
    const [score , setScore] = useState(0);
    const [currentObject , setCurrentObject] = useState(questions[0]);
    const [answer , setAnswer] = useState(null);
    const [isLast , setIsLast] = useState(false);
    let contextObj = {
        currentId,
        setCurrentId,
        score,
        setScore,
        currentObject,
        setCurrentObject,
        setIsLast,
        isLast,
        answer,
        setAnswer,
    }
    return (
      <QuizContext.Provider value = { contextObj }>
       <Container>
       {isLast===true? <h1 className="resultHeader">Quiz Results</h1>: <Question></Question>}
       {isLast === true? <p className= "result">{score}/{questions.length}</p>:<Options></Options>}
       { isLast=== false ? <NextButton></NextButton>:<></>}
       {isLast&& <ResetButton />}
       </Container>
      </QuizContext.Provider>
    );
}
function Container({children}){
    const { answer , isLast } = useContext(QuizContext);
    return (
        <div className = "container">
         <h1 className= "AppHeader">Quiz App</h1>
         {children}
         <div className="errorMessage">
            {answer===null && isLast===false ?<p style = {{ color: "red"}}>* You Need to Choose at least one option</p>:<></>}
         </div>
        </div>
    );
}
function Question(){
    const { currentObject } = useContext(QuizContext);
   return (
    <h3>{currentObject.id}. {currentObject.question}</h3>
   );
}
function Options(){
    const { setAnswer } = useContext(QuizContext);
    const { currentObject } = useContext(QuizContext);
 return (
   <Fragment>
    <ul>
        {
            currentObject.options.map((element,index)=>{
                return (
                    <li key={index}>
                       <input type="radio" name = "Answer"  onChange={(e)=>{
                        if(e.target.value==="on"){
                            setAnswer(element);
                        }
                       }}></input>
                       <p>{element}</p>
                    </li>
                );
            })
        }
    </ul>
   </Fragment>
 );
}

function NextButton(){
const { currentId, setCurrentId, score, setScore, currentObject, setCurrentObject, setIsLast, isLast, answer, setAnswer } = useContext(QuizContext)
    function handleClick(){
      if(answer===null){
        
      }else{
        if(currentId===14){
            setIsLast(!isLast);
            if(answer===currentObject.correctAnswer){
                setScore(score + 1);
            }
            setAnswer(null);
      }else{
           setCurrentId(Number(currentId) + 1);
           console.log(questions[currentId]);
           setCurrentObject(questions[Number(currentId) + 1]);
           if(answer===currentObject.correctAnswer){
            setScore(score + 1);
           }
           setAnswer(null);
      }
      }
    }
   
    return (
       <div>
        <button onClick={handleClick }>"Next"</button>
       </div>
    );
}
function ResetButton(){
    const { setCurrentId,
        setScore,
        setCurrentObject,
        setIsLast,
        isLast,
        setAnswer } = useContext(QuizContext);
    function handleClick(){
        setCurrentId(1);
        setScore(0);
        setCurrentObject(questions[0]);
        setIsLast(!isLast);
        setAnswer(null);
     }
    return (
        <button onClick={ handleClick } className="resetButton">Reset</button>
    ); 
}