import React from 'react';
import '.Card.css'

function Card(title,imageUrl,body){

    return(
        <div className='card-container'>
            <div className='image-container'>
                <imag src={imageUrl} alt=''></imag>
            </div>
        </div>
    )
}

export default Card;