import React from 'react'
import './Clue.css'

function Imposter_clue({imposterclue_name}) {
    return (
        <div className='clue'>
            <div className='clue__info'>
                <h2>{imposterclue_name}</h2>
              
            </div>
        </div>
    )
}

export default Imposter_clue
