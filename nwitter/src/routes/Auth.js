import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  AuthErrorCodes,
  GoogleAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';
import { authService, firebaseInstance } from 'fbase';
import React, { useState } from 'react';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState('');

  const onChange = event => {
    // console.log(event.target.name);
    const {
      target: { name, value },
    } = event;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const onSubmit = async event => {
    event.preventDefault();

    try {
      const auth = authService;
      let data;
      if (newAccount) {
        //new account
        data = await createUserWithEmailAndPassword(
          authService,
          email,
          password
        );
      } else {
        //log in
        data = await signInWithEmailAndPassword(auth, email, password);
      }
      console.log(data);
    } catch (error) {
      setError(error.message, '!!!');
    }
  };

  const toggleAccount = () => setNewAccount(prev => !prev);
  const onSocialclick = async event => {
    const {
      target: { name },
    } = event;
    let provider;
    console.log(name);
    if (name === 'google') {
      provider = new GoogleAuthProvider();
    } else if (name === 'github') {
      provider = new GithubAuthProvider();
    }
    const data = await signInWithPopup(authService, provider);
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="text"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
        />
        <input type="submit" value={newAccount ? 'Create Account' : 'Log In'} />
        {error}
      </form>
      <span onClick={toggleAccount}>
        {newAccount ? 'Sign in' : 'Create Account'}
      </span>
      <div>
        <button name="google" onClick={onSocialclick}>
          Continue with Google
        </button>
        <button name="github" onClick={onSocialclick}>
          Continue with Github
        </button>
      </div>
    </div>
  );
};
export default Auth;
