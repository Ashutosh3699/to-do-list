import React from 'react'

const ListNode = (props) => {

    function clickHandler(){

        props.doneTask(props.value.id)
    }

  return (
    <div className='flex gap-3 w-[100%] justify-between items-center px-4'>

        <p className='text-lg font-semibold first-letter:capitalize'>{props.value.val}</p>
        <button onClick={clickHandler} className='bg-gray-300 text-green-500 py-1 px-4 rounded-lg'>Done</button>

    </div>
  )
}

export default ListNode