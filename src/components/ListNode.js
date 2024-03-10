import React from 'react'

const ListNode = (props) => {

    function clickHandler(){

        props.doneTask(props.value.id)
    }

    function editHandler(){

      props.editChange(props.value.id);
    }

  return (
    <div className='flex gap-3 w-[100%] justify-between items-center px-4 my-2'>

        <p className='text-lg font-semibold first-letter:capitalize'>{props.value.val}</p>

        <div className='flex gap-3'>

          <button onClick={clickHandler} className='bg-gray-300 text-green-500 py-1 px-4 rounded-lg'>Done</button>
          <button onClick={editHandler} className='bg-gray-300 text-red-500 py-1 px-4 rounded-lg'>edit</button>
          
        </div>

    </div>
  )
}

export default ListNode