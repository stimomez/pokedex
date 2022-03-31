import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Access = () => {
    const[ userName, setUserName ] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submit = e => {
        e.preventDefault();
      //  console.log(userName)
        dispatch({ 
            type: "GET_USERNAME" ,
            payload:userName
       })
       navigate("/pokedex")

        
    }
    return (
        <div className='form-main'>
            <form onSubmit={submit}>
                <input type="text"
                value={userName}
                onChange={e => setUserName( e.target.value)}
                placeholder={'Give me your name to start'}
                 />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default Access;