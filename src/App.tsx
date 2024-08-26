import { useState } from "react";


function App() {

const h1Style = "mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl  m-5";
const h1EffectOff = "text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 m-5"
const inputFieldStyle="block w-full p-2 text-black-900 border border-blue-300 rounded-lg bg-white text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
const buttonStyle = "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mt-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"

const listItemStyle = "flex flex-row flex-wrarp align-middle items-start justify-between text-white";

const [taskList, setTaskList] =  useState<string[]>([]);
const [inputValue,setInputValue] = useState<string>("");

type InputEvent = React.ChangeEvent<HTMLInputElement>;

//TESTING THE STATE


const addTask = () => {
  const arrayTmp:string[] = [...taskList]
  arrayTmp.push(inputValue)
  setTaskList(arrayTmp)
  console.log(taskList.toString())
  return
} 
const removeTask = (index: number) => {
  setTaskList((prevTaskList) => prevTaskList.filter((_, i) => i !== index));
};



  return (
    <div className="flex justify-center items-center  min-h-screen bg-gray-700">
      <div className="flex flex-wrap flex-col justify-center justify-items-center max-w-xl ">
        <h1 className={h1Style}>To do App 📝</h1>
        <h2 className={h1EffectOff}>By Jose Balda</h2>
        <input type="text" className={inputFieldStyle} value={inputValue} onChange={(e:InputEvent) => setInputValue(e.target.value)} />
        <button className={buttonStyle} onClick={() =>addTask()}> Add Task </button> 
        <h3 className="text-white text-center font-bold">List</h3>
        <ul>
            {taskList.map( (task, index) => (
              <li key={index} className={listItemStyle}>{task}<button onClick={() => removeTask(index)} className="hover:font-bold hover:text-red-600">🗙</button>
              </li>
            ))}
        </ul>
          
      </div>
    </div>
  )

}



    
export default App
