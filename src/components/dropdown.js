import React, { useState } from 'react';
import Menu from './drop-down-menu';
import Description from '../data/description';

function Dropd(props) {
  const [open, setOpen] = useState(false);

  
  return (
    <div className='dropdown' style={{top:props.top+"px"}}>
       <button  className='dropdown-basic'  onClick={() => setOpen(!open)}>
      {props.heading}
      </button>
      {open && (
        <div  style={{ position: 'relative', top:"60px"}}>
           {
            Description.map((iteam) => {
                if(iteam.heading === props.heading){
                  return (
                    <Menu title={iteam.titles} l={iteam.l}  />
                )
                }
                })
           }
        </div>
      )}
    </div>
  );
}

export default Dropd;
