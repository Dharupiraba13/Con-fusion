import React from 'react'
import './Card.css'
import PersonIcon from '@material-ui/icons/Person';
function Card({player_name}) {
    return (
        <div className='card'>
            <div className='card__info'>
                <PersonIcon style={{ fontSize: 100 }}/>
                <h2>{player_name}</h2>
              
            </div>
        </div>
    )
}

export default Card
