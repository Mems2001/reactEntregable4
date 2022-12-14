import React from 'react'
import axios from 'axios'

const UserCard = ({user , gettAllUsers , setUpdateInfo , changeD , changeDeleteW , setUserInfo}) => {


    const deleteUserById = (id , user) => {
        const URL = `https://users-crud1.herokuapp.com/users/${id}/`

        setUserInfo(user)

        axios.delete (URL)
        .then (res => {
            console.log(res.data)
            gettAllUsers()
            changeDeleteW()
        })
        .catch (err => console.log(err))
    }

    const update = () => {
        setUpdateInfo(user)
        changeD()
    }

  return (
    <article className='usersCard'>
        <div className='cardName'>{user.last_name} , {user.first_name}</div>
        
        <div className='cardTitles'>E-mail: </div>
        <div>{user.email}</div>
        <div className='cardTitles'>Birthday: </div>
        <div>{user.birthday}</div>
        <div className='usersCardBtns'>
            <button className='cardBtn' id='deleteB' onClick={() => deleteUserById(user.id , user)}>🗑</button>
            <button className='cardBtn' onClick={update}>🖍</button>
        </div>
    </article>
  )
}

export default UserCard