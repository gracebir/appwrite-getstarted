import React, { useEffect, useState } from 'react'
import { account } from '../appwrite/appwrite'
import { useNavigate, Link } from 'react-router-dom'
import Todos from './Todos'
import TodoForm from './TodoForm'

function Profile() {
  const [userDetails, setUserDetails] = useState()
  const navigate = useNavigate()
  useEffect(() => {
    const getUser = account.get()
    getUser.then(
      (response) => {
        setUserDetails(response)
      },
      (error) => console.log(error)
    )
  }, [])

  const logoutSession = async () => {
    try {
      await account.deleteSession("current")
      navigate('/login')
    } catch (error) {
      console.log(error);
    }
  }

  // 646c9725b8b4dbe37488

  return (
    <>
      {userDetails ? (
        <>
          <div className="min-h-min max-w-7xl mx-auto shadow-md flex justify-between text-right py-3 px-3 mt-2 rounded-md">
            <div>
              <p className="text-xl">{userDetails.$id}</p>
            </div>
            <div>
              <button
                className="bg-red-400 text-white p-1 rounded-md"
                onClick={logoutSession}
              >
                Logout
              </button>
            </div>
          </div>
          {/* TODO FORM */}
          <TodoForm />
          {/* TODOS BOX */}
          <Todos />
        </>
      ) : (
        <p className="mt-4">
          Please Login To see Profile{" "}
          <Link to="/">
            <span className="bg-blue-300 p-2 cursor-pointer text-white rounded-md">
              Login
            </span>
          </Link>
        </p>
      )}
    </>
  )
}

export default Profile
