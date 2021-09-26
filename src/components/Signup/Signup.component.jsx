import React, { useRef } from 'react';
import { useState } from 'react';
import { Card, Button, Form, Alert } from 'react-bootstrap';
import { useAuth } from '../Context/AuthProvider';
import { Link, useHistory } from 'react-router-dom';


import './styles.css';

function Signup() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handelSubmit(e) {
        e.preventDefault();

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do not match')
        }

        try {
            setLoading(true);
            setError('');
            await signup(emailRef.current.value, passwordRef.current.value);
            history.push("/login");
        } catch (error) {
            setError('Failed to creat a account');
        }

        setLoading(false);

    }

    return (

        
        <>

        <div className="Login">
        {/* <Container className="align">
            <Card> */}
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handelSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control ref={emailRef} type="email" required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control ref={passwordRef} type="password" required />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirm</Form.Label>
                            <Form.Control ref={passwordConfirmRef} type="password" required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100 button" type="submit">Sign Up</Button>
                    </Form>
                </Card.Body>
            {/* </Card> */}
            <div className="w-100 text-center mt-2">
                Already have an account? <Link to="/login">Log In</Link>
            </div>
            </div>


            
        
        </>
    )
}

export default Signup
