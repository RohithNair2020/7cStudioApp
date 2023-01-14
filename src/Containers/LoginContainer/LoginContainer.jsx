import React, { useState } from 'react';
import { Button, Input } from 'antd';
import axios from 'axios';
import './loginContainer.css';
import { useNavigate } from 'react-router-dom';

const LoginContainer = () => {
    const navigate = useNavigate();

    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const onFinish = async () => {
        setLoading(true);
        const response = await axios.post(
            'https://dev.api.goongoonalo.com/v1/auth/login',
            { phoneNumber: phone },
        );
        console.log('response', response.data);
        if (response.data.requestId) {
            setLoading(false);
            navigate('/authenticate');
        }
    };

    return (
        <div className="login-form-container">
            <div className="login-form">
                <h2 className="login-title">Sign In</h2>
                <p className="login-description">
                    Please enter your mobile number to login. We will send an
                    OTP to verify your number.
                </p>
                <Input
                    style={{
                        width: '100%',
                        height: '59px',
                        fontSize: '1.4rem',
                        fontWeight: '500',
                    }}
                    value={phone}
                    onChange={handlePhoneChange}
                />
                <Button
                    style={{
                        backgroundColor: '#552583',
                        width: '88%',
                        height: '50px',
                    }}
                    disabled={phone.length !== 10}
                    className="log-in-button"
                    onClick={onFinish}
                    loading={loading}
                    type="primary"
                    size="large"
                    htmlType="submit"
                >
                    Sign In
                </Button>
            </div>
        </div>
    );
};

export default LoginContainer;
