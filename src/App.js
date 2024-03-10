import ListNode from './components/ListNode';
import {useState} from 'react'
import CompleteList from './components/CompleteList';
import toast, { Toaster } from 'react-hot-toast';

function App() {

  const [value_inp,setValue] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [index,setIndex] = useState(0);
  const [compList,setDoneList] = useState([]);
  const [showList,setShowList] = useState(true);
  const [switchVal, setswitch] = useState("DoneList")

  const changeHandler = (event) =>{

    
    setValue(event.target.value);
  }

  function submitHandler(event){

    event.preventDefault();
    setIndex(a=>a+1);

    if(value_inp === ""){

      toast.error("enter value");
    }
    else{
      let obj = {
        id:index,
        val:value_inp
      }
  
      setToDoList([...toDoList,obj]);
  
      setValue("");
      toast.success("updated successfully");
    }

    
  }

  function editChange(id){

    let newArray=[];

      toDoList.forEach((value)=>{

        if(value.id!==id){

          newArray.push(value);
        }
        else{
          setValue(value.val);
        }
      })

      setToDoList(newArray);
  }

  function doneList(id){

    let newArray=[];

    toDoList.forEach((value)=>{

      if(value.id !==id){
        newArray.push(value);
      }
      else{
        setDoneList([...compList,value]);
      }
    })

    
    setToDoList(newArray);
  }

  function crossList(id){

    let newArray=[];

    compList.forEach((value)=>{

      if(value.id!==id){
        newArray.push(value);
      }
    })

    setDoneList(newArray);

  }

  function reverseList(id){

    let newArray= [];

    compList.forEach((value)=>{

      if(value.id!==id){
        newArray.push(value);
      }
      else{
        setToDoList([...toDoList,value]);
      }
    })

    setDoneList(newArray);
  }


  function changePage(){

    if(switchVal==="DoneList"){
      setswitch("NotDoneList");
    }
    else{
      setswitch("DoneList");
    }

    setShowList(!showList);
    
  }


  return (
    <div className="w-[100vw] h-[100vh] overflow-x-hidden overflow-y-auto ">
      <div><Toaster/></div>
        

      <div className='w-[720px] mx-auto mt-10 bg-slate-100 shadow-lg p-4 rounded-lg'>

        <h1 className='font-bold text-3xl text-blue-500 text-center '>To-Do-List</h1>

        <form className='p-5 mx-auto flex flex-col justify-center items-start gap-3' onSubmit={submitHandler}>

          <div className='flex gap-6 rounded-md py-5 px-4 justify-start items-center w-[100%]'>
            <label htmlFor='to_do' className='font-bold text-xl'>Add Task </label>
            <input type='text'
              id='to_do'
              onChange={changeHandler}
              value={value_inp}
              placeholder='Enter the Task'
            className="bg-inherit px-2 py-1 w-[50%] text-lg focus:outline-none " />
          </div>

          <button className='bg-blue-600 px-6 py-2 mx-4 text-white rounded-md '>Save</button>

          </form>

          <div className='w-[100%] mx-auto'>
            <button onClick={changePage} className=' px-6 py-2 text-green-500 mx-4 underline mb-2'>{switchVal}</button>

          </div>


          {
          showList === true ? (

          <div className='p-2 border-4 border-gray-200 border-solid rounded-lg'>
            <p className='text-2xl w-[100%] mb-6 text-center text-stone-400'>List to be Done:</p>

              {
                toDoList.length===0 ? (<div className='text-lg font-semibold text-center text-stone-500'>No work alloted...</div>) :(

                  toDoList.map((value) => {
                    return ( <ListNode key={value.id} value={value} doneTask={doneList} editChange={editChange}/> )
                  })
                )
              }

              

          </div>


          ) : (
            <div className='p-2 border-4 border-gray-200 border-solid rounded-lg'>

              <p className='text-2xl w-[100%] mb-6 text-center text-stone-400'>Completed List :</p>

              {
                compList.length===0 ? (<div className='text-lg font-semibold text-center text-stone-500'>No work alloted...</div>) : (

                    compList.map((value)=>{
                      return (<CompleteList key={value.id} value={value} crosslist={crossList} reverseList={reverseList}/>)
                    })
                    )
              }

            </div>


          )
          }


          

      </div>


    </div>
  );
}

export default App;
