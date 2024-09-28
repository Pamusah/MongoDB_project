import React from 'react'

const EditTopicForm = () => {
  return (
    <div>
      <form className="flex flex-col gap-3">
        <input type="text" placeholder="Enter  Title" className='border border-slate-500 px-8 py-2'/>
        <input type="text" placeholder="Title Description" className='border border-slate-500 px-8 py-2'/>
        <button className='bg-green-600 font-bold text-white px-6 py-3 w-fit '>Update Topic</button>
    </form>
    </div>
  )
}

export default EditTopicForm
