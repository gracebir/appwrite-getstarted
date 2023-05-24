import React, { useEffect, useState } from 'react'
import { database } from '../appwrite/appwrite'


function Todos() {
  const [loader, setLoader] = useState(true)
  const [todos, setTodos] = useState([])
  useEffect(()=> {
    const list = database.listDocuments("646c965f9aab5dbc918f","646c9725b8b4dbe37488")
    list.then(
      (response)=> {
        setTodos(response.documents)
        setLoader(false)
      },
      (error)=>{
        console.log(error)
      }
    )
  }, [])
  return (
    <div className="max-w-7xl mx-auto">
    <p className="text-xl font-bold mb-2">Todo List</p>
    {loader ? (
      <p>Loading ...</p>
    ) : (
      <div>
        {todos.map((todo, i)=> (
          <div key={i}>
          <div className="p-4 flex items-center justify-between border-b-2 bg-gray-100 rounded-lg mb-1">
            <div>
              <p>{todo.text}</p>
            </div>
            <div>
              <span
                className="text-red-400 cursor-pointer"
                
              >
                Delete
              </span>
            </div>
          </div>
        </div>
        ) )}
            
      </div>
    )}
  </div>
  )
}

export default Todos
