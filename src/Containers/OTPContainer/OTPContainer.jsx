import React, { useRef, useState } from 'react';
import './otpContainer.css';
import axios from 'axios';
import { Input, Space, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import useStore from '../../store';

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
    const phoneNumber = useStore((state) => state.phone);
    const requestId = useStore((state) => state.requestId);
    const setRequestId = useStore((state) => state.setRequestId);
    const setToken = useStore((state) => state.setToken);
    console.log('zustand', phoneNumber, requestId);
    const navigate = useNavigate();
    const [otp1, setOtp1] = useState('');
    const [otp2, setOtp2] = useState('');
    const [otp3, setOtp3] = useState('');
    const [otp4, setOtp4] = useState('');
    const [loading, setLoading] = useState(false);

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
        setLoading(true);
        const response = await axios.post(
            'https://dev.api.goongoonalo.com/v1/auth/verify_otp',
            {
                phoneNumber,
                requestId,
                otp: `${otp1}${otp2}${otp3}${otp4}`,
            },
        );
        setLoading(false);
        console.log('otp resp', response);
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
            setToken(response.data.token);
            navigate('/dashboard');
        }
    };

    const resendOTP = async () => {
        setOtp1('');
        setOtp2('');
        setOtp3('');
        setOtp4('');
        const response = await axios.post(
            'https://dev.api.goongoonalo.com/v1/auth/login',
            { phoneNumber: phone },
        );
        console.log('response', response.data);
        if (response.data.requestId) {
            setRequestId(response.data.requestId);
        }
    };

    // const inputFocus = (e) => {
    //     if (e.key === 'Delete' || e.key === 'Backspace') {
    //         const next = e.target.tabIndex - 2;
    //         if (next > -1) {
    //             e.target.form.elements[next].focus();
    //         }
    //     } else {
    //         console.log('next');

    //         const next = e.target.tabIndex;
    //         if (next < 4) {
    //             e.target.form.elements[next].focus();
    //         }
    //     }
    // };

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
                        // onKeyUp={inputFocus}
                    />
                    <Input
                        size="large"
                        name="otp2"
                        value={otp2}
                        maxLength={1}
                        style={styles.otpInput}
                        onChange={onChange}
                        // onKeyUp={inputFocus}
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
                    loading={loading}
                    onClick={handleSubmit}
                    type="primary"
                    size="large"
                    htmlType="submit"
                >
                    Verify
                </Button>
                <a className="otp-form-link" onClick={resendOTP}>
                    Resend OTP
                </a>
                <Link className="otp-form-link" to="/login">
                    Use another number
                </Link>
            </div>
        </div>
    );
};

export default OTPContainer;
