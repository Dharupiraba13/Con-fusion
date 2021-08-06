import React from 'react'
import './Clue.css'

function Clue({clue_name}) {
    return (
        <div className='clue'>
            <div className='clue__info'>
                <h2>{clue_name}</h2>
              
            </div>
        </div>
    )
}

export default Clue
