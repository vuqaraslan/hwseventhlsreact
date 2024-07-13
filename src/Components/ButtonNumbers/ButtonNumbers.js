import React from 'react'

export default function ButtonNumbers(props) {
  return (
    <button key={props.currentQuestion.id} className='question-no' 
        style={{backgroundColor:`${props.currentQuestion.hasFinded ? 'green' : 'blue'}`}}
    >{props.currentQuestion.id}</button>
  )
}


