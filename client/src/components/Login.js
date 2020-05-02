import React from "react";
import axios from 'axios';
import { useRouteMatch, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  //handle state
  const [ newValue, setNewValue ] = useState(null);

  const match = useRouteMatch();
    const history = useHistory();

    useEffect(() => {
        const id = match.params.id;
        axios.get(``)
        .then(res => {
            res.data = {
                ...res.data,
                stars: res.data.stars.toString()
            }
            setNewValue(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }, [match.params.id]);

    const goBack = () => {
        const id = match.params.id;
        history.push(``);
    }

    const handleChange = e => {
        setNewValue({
            ...newValue,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        // Set to proper value
        newValue.metascore = newValue.metascore * 1;
        newValue.stars = newValue.stars.split(',');

        const id = match.params.id;
        axios.put(``, newValue)
        .then(() => {
            handleEditCount();
            history.push(``);
        })
        .catch(err => {
            console.log(err);
        })
    }

  return (
    <>
      <div className="form-wrapper"> 
<form onSubmit={handleSubmit}>
<label>Username</label>
<div className="editInput">
<input
name="username"
//need to customize value based on data object
value={newValue}
onChange={handleChange}
 />

</div>
<div className="editInput">
<input
name="password"
//need to customize value based on data object
value={newValue}
onChange={handleChange}
/>
</div>
</form>
        </div>
    </>
  );
};

export default Login;
