// src/PhoneLogin.jsx
import React, { useState } from 'react';
import { auth } from '../Firebase/firebaseconfig';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function PhoneLogin() {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [confirmation, setConfirmation] = useState(null);

  const navigate = useNavigate();


  const sendOtp = async () => {
    try {
      // Setup invisible reCAPTCHA
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible',
        callback: () => {
          console.log("Recaptcha Verified");
        }
      });

      const appVerifier = window.recaptchaVerifier;
      const confirmationResult = await signInWithPhoneNumber(auth, phone, appVerifier);
      setConfirmation(confirmationResult);
      alert("OTP sent");
    } catch (err) {
      alert(err.message);
    }
  };

  // const verifyOtp = async () => {
  //   try {
  //     await confirmation.confirm(otp);
  //     alert("Login Successful");
  //     Navigate('Dashboard'); // Redirect to dashboard after successful login
  //   } catch (err) {
  //     alert("Invalid OTP");
  //   }
  // };

  const verifyOtp = async () => {
  try {
    await confirmation.confirm(otp);
    alert("Login Successful");
    navigate('/dashboard'); //Correct usage
  } catch (err) {
    alert("Invalid OTP");
    console.error(err);
  }
};


  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Phone Login with OTP</h2>
      <div id="recaptcha-container"></div>

      {!confirmation ? (
        <>
          <input
            type="tel"
            placeholder="+91XXXXXXXXXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          /><br /><br />
          <button onClick={sendOtp}>Send OTP</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          /><br /><br />
          <button onClick={verifyOtp}>Verify & Login</button>
        </>
      )}
    </div>
  );
}

export default PhoneLogin;
