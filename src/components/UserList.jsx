import React from 'react'
import UserCard from './UserCard'

const UserList = ({allUsers , getAllUsers , setUpdateInfo , changeD }) => {



  return (
    <div className='usersList'>

        <div className='usersListHeader'>
        <h1>Users List</h1>
        <button onClick={changeD} className='newUserBtn' >➕ Create New User</button>
        </div>

        <div className='usersListCont'>

        { allUsers?.length >0 ? 
        allUsers?.map (user => 
            <UserCard key={user.id} user={user} gettAllUsers={getAllUsers} setUpdateInfo={setUpdateInfo} changeD={changeD} />
            )
         : "No users registered"}

        </div>
    </div>
  )
}

export default UserList