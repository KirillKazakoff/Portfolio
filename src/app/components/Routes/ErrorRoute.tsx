import React from 'react';
import { useNavigate } from 'react-router-dom';

// in case future app expanding posibility
export default function ErrorRoute() {
    const navigate = useNavigate();
    const onClick = () => navigate(-1);

    return (
        <div>
            <div className='error'>Error</div>
            <button
                type='button' className='btn btn__error'
                onClick={onClick}
            >
                Get back
            </button>
        </div>
    );
}
