import React from 'react'

function menu(props) {
  return (
    <div>
        <p className='title'>{props.title}</p>
        <ul>
        {   
            props.l.map((item) => {
                return <li>{item}</li>
            })
        }
        </ul>   
     </div>
  )
}

export default menu;
