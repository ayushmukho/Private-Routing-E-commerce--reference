import React, { useRef } from 'react';
import { useState } from 'react';
import { Card, Button, Form, Alert } from 'react-bootstrap';
import { useAuth } from '../Context/AuthProvider';
import { Link } from 'react-router-dom';

function ForgotPassword() {

    const emailRef = useRef();
    const { resetPassword } = useAuth();
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    

    async function handelSubmit(e) {
        e.preventDefault();

        try {
            setMessage('')
            setError('');
            setLoading(true);
            await resetPassword(emailRef.current.value);
            setMessage('Check yur inbox for further instructions')
        } catch (error) {
            setError('Failed to reset password');
        }

        setLoading(false);

    }

    return (
        <>
            <div className="Login">
            {/* <Card> */}
                <Card.Body> 
                    <h2 className="text-center mb-4">Password Reset</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit={handelSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control ref={emailRef} type="email" required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100 button" type="submit">Reset Password</Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to="/login">Login</Link>
                    </div>
                </Card.Body>
            {/* </Card> */}
            <div className="w-100 text-center mt-2">
                Need an account? <Link to="/signup">Sign Up</Link>
            </div>
            </div>
        </>
    )
}

export default ForgotPassword
