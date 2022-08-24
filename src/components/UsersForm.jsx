import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const UsersForm = ({getAllUsers , updateInfo , setUpdateInfo , forD , changeD}) => {

  const defaultUser = {
    first_name: '' ,
    last_name: '' ,
    email: '' ,
    birthday: '' ,
    password: ''
  }
 
  const { register , handleSubmit , reset } =  useForm ()

  const submit = data => {
    if (updateInfo) {

        const URL = `https://users-crud1.herokuapp.com/users/${updateInfo.id}/`

        axios.put (URL , data)
        .then (res => {
            console.log (res.data)
            getAllUsers()
        })
        .catch (err => console.log(err))

        setUpdateInfo()
        reset (defaultUser)
        changeD()

    } else {

    const URL = `https://users-crud1.herokuapp.com/users/`

    axios.post(URL , data)
    .then (res => {
        console.log (res.data)
        getAllUsers()
        
    })
    .catch (err => console.log (err))

    reset (defaultUser)
    changeD()
    }
  }

  useEffect (
    () => {
        if (updateInfo) {
            reset (updateInfo)
        }
    }, [updateInfo]
  )

  const changeD2 = () => {
    changeD()
    reset(defaultUser)
    setUpdateInfo()
  }

  return (

    <div className={`mainFormCont d-${String(forD)}`}>
    <div className={`usersFormCont d-${String(forD)}`}>
        <button onClick={changeD2} className='formBtn'>✖</button>
    </div>
    <form className={`usersForm d-${String(forD)}`} onSubmit={handleSubmit(submit)}>
        <h2>{updateInfo ? 'Edit User' : 'New User'}</h2>
        <label htmlFor="name">Name: </label>
        <input type='text' {...register('first_name')} placeholder='Write your name' id='name'/>
        <label htmlFor="last-name">Last-name: </label>
        <input type='text' {...register('last_name')} placeholder='Write your last-name' id='last-name'/>
        <label htmlFor="mail">E-mail: </label>
        <input type='email' {...register('email')} placeholder='Write your e-mail' id='mail'/>
        <label htmlFor="bday">Birthday: </label>
        <input type='date' {...register('birthday')} placeholder='Write your birthday' id='bday'/>
        <label htmlFor="pass">Password: </label>
        <input type='password' {...register('password')} placeholder='Write a password' id='pass'/>
        <button>{updateInfo ? 'Update User' : 'Create User'}</button>
    </form>
    </div>
    
  )
}

export default UsersForm