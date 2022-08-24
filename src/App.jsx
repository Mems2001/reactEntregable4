import { useEffect, useState } from 'react'
import './App.css'
import UserList from './components/UserList'
import UsersForm from './components/UsersForm'
import axios from 'axios'

function App() {

  const URL = `https://users-crud1.herokuapp.com/users/`
  
  const [allUsers, setAllUsers] = useState()

  const getAllUsers = () => {

    axios.get(URL)
    .then (res => setAllUsers(res.data))
    .catch (err => console.log(err))
  }

  useEffect (
      () => {

          axios.get(URL)
          .then (res => setAllUsers(res.data))
          .catch (err => console.log(err))

      } , []
  )

  const [updateInfo, setUpdateInfo] = useState()

  const [forD, setForD] = useState(false)

  const changeD = () => {
    setForD(!forD)
  }

  return (
    <div className="App">

      <UsersForm getAllUsers={getAllUsers} 
      updateInfo={updateInfo} 
      setUpdateInfo={setUpdateInfo} 
      forD={forD}
      changeD={changeD} />

      <UserList allUsers={allUsers} 
      getAllUsers={getAllUsers}
      setUpdateInfo={setUpdateInfo}
      changeD={changeD} />

    </div>
  )
}

export default App
