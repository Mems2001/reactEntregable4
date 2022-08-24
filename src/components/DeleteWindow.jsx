import React from 'react'

const DeleteWindow = ({deleteWindow , changeDeleteW , userInfo}) => {
  return (
    <div className={`deleteWindow d-${String(deleteWindow)}`}>
        <div className={`deleteWindowBack d-${String(deleteWindow)}`}></div>
        <div className={`deleteWindow2 d-${String(deleteWindow)}`}>
            <h2>User Deleted!</h2>
            <div>The user <b>"{userInfo?.first_name} {userInfo?.last_name}"</b> was succesfully deleted,
            and Selene please send me a picture of you... you are cute!</div>
            <button className='deleteWindowBtn' onClick={changeDeleteW}>OK</button>
        </div>
    </div>
  )
}

export default DeleteWindow