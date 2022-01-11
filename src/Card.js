import React from 'react';
import 'tachyons';

const Card = ({name,email,id}) => {
    return(
        <div  className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/set_set1/${id}?size=200x200`} />
            <h2>{name} </h2>
            <p>{email}</p>
        </div>
    )
}

export default Card;