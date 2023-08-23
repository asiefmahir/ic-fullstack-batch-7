import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';


const Signup = () => {
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();

    const emailInputRef = useRef();
    const nameInputRef = useRef();
    const passwordInputRef = useRef();
    const userNameInputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:5000/api/users/signup`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                username: userNameInputRef.current.value,
                email: emailInputRef.current.value,
                name: nameInputRef.current.value,
                password: passwordInputRef.current.value
            })
        })
            .then((res) => {
                if (res.ok) {
                    navigate('/login')
                } else {
                    return res.json()
                }
            })
            .then((data) => {
                console.log(data);
                setErrorMsg(data.message)
            })
            .catch(err => {
                setErrorMsg(err.message)
            })
    }
    
    

    return (
        <>
            <Header />
            <div style={{ margin: '10px auto', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }} >
                <h2>
                    SignUp To Our Application
                </h2>
                <br />
                <form onSubmit={handleSubmit} >
                    <label htmlFor="email">Email: </label>
                    <input ref={emailInputRef} style={{ display: 'block', width: '100%' }} type="text" name='email' />
                    <br />
                    <br />
                    <label htmlFor="name">Name: </label>
                    <input ref={nameInputRef} style={{ display: 'block', width: '100%' }} type="text" name='name' />
                    <br />
                    <br />
                    <label htmlFor="password">Password: </label>
                    <input ref={passwordInputRef} style={{ display: 'block', width: '100%' }} type="text" name='password' />
                    <br />
                    <br />
                    <label htmlFor="username">UserName: </label>
                    <input ref={userNameInputRef} style={{ display: 'block', width: '100%' }} type="text" name='username' />
                    <br />
                    <br />
                    <input type="submit" value="Sign Up" />
                </form>
                {errorMsg && (
                    <p style={{ marginTop: '20px', textAlign: 'center', color: 'red' }}>{errorMsg}</p>
                )}
            </div>
        </>
    )

}

export default Signup

