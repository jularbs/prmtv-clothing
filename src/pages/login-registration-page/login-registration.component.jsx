import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/signUp/signUp.component';

import './login-registration.styles.scss';

const LoginRegistrationPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
);

export default LoginRegistrationPage;