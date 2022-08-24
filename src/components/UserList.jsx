import React, { useState } from 'react'
import DeleteWindow from './DeleteWindow'
import UserCard from './UserCard'

const UserList = ({allUsers , getAllUsers , setUpdateInfo , changeD , changeDeleteW , deleteWindow }) => {

  const [userInfo, setUserInfo] = useState()

  return (
    <div className='usersList'>

        <div className='usersListHeader'>
        <h1>Users List</h1>
        <button onClick={changeD} className='newUserBtn' >➕ Create New User</button>
        </div>

        <div className='usersListCont'>

        { allUsers?.length >0 ? 
        allUsers?.map (user => 
            <UserCard key={user.id} user={user} gettAllUsers={getAllUsers} setUpdateInfo={setUpdateInfo} changeD={changeD} changeDeleteW={changeDeleteW} deleteWindow={deleteWindow} setUserInfo={setUserInfo} />
            )
         : "No users registered"}

         <DeleteWindow deleteWindow={deleteWindow} changeDeleteW={changeDeleteW} userInfo={userInfo} />

        </div>
    </div>
  )
}

export default UserList