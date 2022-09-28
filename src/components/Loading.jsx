import React from 'react'
import load from "./../Images/load.gif"

const Loading = () => {
  return (
    <div className='flex items-center justify-center'>
        <img src={load}></img>
    </div>
  )
}

export default Loading