import React from 'react'

const CompleteList = (props) => {

  const clickHandler = ()=>{

    props.crosslist(props.value.id);

  }

  function reverseHandler(){

    props.reverseList(props.value.id);
  }


  return (
    <div className='flex gap-3 w-[100%] justify-between items-center px-4 my-2'>

        <p className='text-lg font-semibold first-letter:capitalize'>{props.value.val}</p>

        <div className='flex gap-3'>

          <button onClick={clickHandler}  className='bg-gray-300 text-red-500 py-1 px-4 rounded-lg'>cross</button>
          <button onClick={reverseHandler}  className='bg-gray-300 text-green-500 py-1 px-4 rounded-lg'>reverse</button>

        </div>

    </div>
  )
}

export default CompleteList