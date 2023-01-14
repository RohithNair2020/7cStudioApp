import React, { useRef, useState } from 'react';
import './otpContainer.css';
import axios from 'axios';
import { Input, Space, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const styles = {
    otpInput: {
        width: '60px',
        height: '60px',
        fontSize: '20px',
        borderRadius: '2px',
        textAlign: 'center',
    },
};

const OTPContainer = () => {
    const navigate = useNavigate();
    const inputRef = useRef();
    const [otp1, setOtp1] = useState('');
    const [otp2, setOtp2] = useState('');
    const [otp3, setOtp3] = useState('');
    const [otp4, setOtp4] = useState('');

    const onChange = (e) => {
        console.log(e);
        switch (e.target.name) {
            case 'otp1':
                setOtp1(e.target.value);
                break;
            case 'otp2':
                setOtp2(e.target.value);
                break;
            case 'otp3':
                setOtp3(e.target.value);
                break;
            case 'otp4':
                setOtp4(e.target.value);
                break;
            default:
                break;
        }
    };

    // const handleChange
    const handleSubmit = async () => {
        const response = await axios.post(
            'https://dev.api.goongoonalo.com/v1/auth/login',
            {
                phoneNumber: '989989898',
                requestId: '0908090809',
                otp: `${otp1}${otp2}${otp3}${otp4}`,
            },
        );
        console.log('otp resp', response);
        // navigate('/dashboard');
    };

    const inputFocus = (e) => {
        if (e.key === 'Delete' || e.key === 'Backspace') {
            const next = e.target.tabIndex - 2;
            if (next > -1) {
                e.target.form.elements[next].focus();
            }
        } else {
            console.log('next');

            const next = e.target.tabIndex;
            if (next < 4) {
                e.target.form.elements[next].focus();
            }
        }
    };

    return (
        <div className="otp-container">
            <div className="otp-form">
                <h2 className="login-title">OTP Verification</h2>
                <p className="login-description">
                    We have sent and OTP to +919889898989. Please enter the code
                    received to verify.
                </p>
                <Space className="self-center">
                    <Input
                        size="large"
                        name="otp1"
                        value={otp1}
                        maxLength={1}
                        style={styles.otpInput}
                        onChange={onChange}
                        onKeyUp={inputFocus}
                    />
                    <Input
                        size="large"
                        name="otp2"
                        value={otp2}
                        maxLength={1}
                        style={styles.otpInput}
                        onChange={onChange}
                        onKeyUp={inputFocus}
                    />
                    <Input
                        size="large"
                        name="otp3"
                        value={otp3}
                        maxLength={1}
                        style={styles.otpInput}
                        onChange={onChange}
                    />
                    <Input
                        size="large"
                        name="otp4"
                        value={otp4}
                        maxLength={1}
                        style={styles.otpInput}
                        onChange={onChange}
                    />
                </Space>
                <Button
                    style={{
                        backgroundColor: '#552583',
                        width: '88%',
                        height: '50px',
                    }}
                    className="self-center"
                    onClick={handleSubmit}
                    type="primary"
                    size="large"
                    htmlType="submit"
                >
                    Verify
                </Button>
                <a className="otp-form-link">Resend OTP</a>
                <Link className="otp-form-link" to="/login">
                    Use another number
                </Link>
            </div>
        </div>
    );
};

export default OTPContainer;
