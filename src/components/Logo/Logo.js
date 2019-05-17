import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt Logo br2" options={{ max: 55 }} style={{ height: 150, width: 150,borderRadius: '50%' }} >
                <div className="Tilt-inner pa3"><img style={{paddingTop: '5px', marginTop: '20px'}} alt="logo" src={brain}/></div>
            </Tilt> 
        </div>
    )
}

export default Logo; 