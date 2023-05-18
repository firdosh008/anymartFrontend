import React from 'react'
import { AiFillStar } from 'react-icons/ai';

function Review_bar(props) {
    return (
        <div>
        <div className='label'>{props.number}</div>
        <div className="progress-bar">
          <div className="fill" style={{ width: `${props.percentage}%` }} />
        </div>
        </div>
        
      );
}

export default Review_bar;
