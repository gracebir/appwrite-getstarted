import React, { useState } from 'react'
import {  database } from '../appwrite/appwrite'
import { v4 as uuid } from 'uuid';

function TodoForm() {
  const [text, setText] = useState("");

  // handlesubmit
  const handleSubmit = (e) => {
    e.preventDefault()
    const promise = database.createDocument("646c965f9aab5dbc918f","646c9725b8b4dbe37488", uuid(), {
      text
    })
    promise.then(
      (response)=>{
        console.log(response)
        setText("")
      },
      (error)=>{console.log(error)}
      )
     e.target.reset() 
  }
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex justify-center mb-10"
      >
        <input
          type="text"
          name="todo"
          placeholder="Enter Todo"
          className="border p-2 w-2/3 rounded-md"
          onChange={(e)=> setText(e.target.value)}
        />
        <button
          className="bg-purple-500 p-2 text-white ml-2 rounded-md"
          type="submit"
        >
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default TodoForm
