import React from 'react';
import { useState } from 'react';

const RegistrationForm = () => {
    // useState hooks
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const [error, setError] = useState(false);

    // user name handler
    const userHandle = ({ target: { value } }) => {
        console.log(username);
        setUsername(value);
    };

    // password handler
    const passwordHandle = ({ target: { value } }) => {
        console.log(password);
        setPassword(value);
    };

    // confirm password handler
    const cpasswordHandle = ({ target: { value } }) => {
        setCpassword(value);
    };

    // form validation check
    const validateForm = (e) => {
        e.preventDefault();
        console.log(username, password, cpassword, 'test');
        username !== '' || password !== '' || cpassword !== ''
            ? password === cpassword
                ? alert(`You have successfull registered ${username}`)
                : setError(true)
            : setError(true);
    };
    return (
        <>
            <form action="">
                <label>Username: </label>
                <input
                    type="text"
                    name="username"
                    id="uername"
                    onChange={userHandle}
                    value={username}
                    placeholder="Username"
                />
                {error && username === '' ? (
                    <p>Field must not be empty!</p>
                ) : (
                    ''
                )}
                <br />
                <label>Password: </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={passwordHandle}
                    value={password}
                    placeholder="Password"
                />
                {error && password === '' ? (
                    <p>Field must not be empty!</p>
                ) : (
                    ''
                )}
                <br />
                <label>Confirm Password: </label>
                <input
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    onChange={cpasswordHandle}
                    value={cpassword}
                    placeholder="Confirm Password"
                />
                {/* {error && cpassword === '' ? (
                    <p>Field must not be empty!</p>
                ) : (
                    ''
                )} */}

                {error && password !== cpassword ? (
                    <p>The two passwords do not match</p>
                ) : (
                    ''
                )}
                <br />
                <button onClick={validateForm}>Register</button>
            </form>
        </>
    );
};

export default RegistrationForm;
